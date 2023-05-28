use reqwest;
use std::future::Future;
use core::pin::Pin;
use redis::Commands;
use redis::Client;
use redis::Error;

pub struct Exchange {
    pub name: String,
    pub api_url: String,
}

pub trait BitcoinPriceGetter {
    fn get_bitcoin_price(&self, timestamp: i64) -> Pin<Box<dyn Future<Output = Result<f64, reqwest::Error>> + Send + '_>>;
}

pub fn publish_price_to_redis(exchange_name: &str, price: f64) -> Result<(), Error> {
    // Create a client
    let client = Client::open("redis://127.0.0.1/")?;

    // Connect to Redis
    let mut con = client.get_connection()?;

    // Construct the channel name from the exchange name
    let channel_name = format!("{}_price", exchange_name);

    // Publish the price data to the channel
    con.publish(&channel_name, price.to_string())?;

    Ok(())
}

impl BitcoinPriceGetter for Exchange {
    fn get_bitcoin_price(&self, timestamp: i64) -> Pin<Box<dyn Future<Output = Result<f64, reqwest::Error>> + Send + '_>> {
        Box::pin(async move {
            let client = reqwest::Client::new();
            let endpoint = format!("{}/price_bitcoin?timestamp={}", self.api_url, timestamp);
            let response = client.get(&endpoint).send().await?;

            // Parse the response into a f64 price
            let price: f64 = response.text().await?.parse().unwrap();

            // Publish the price to Redis
            match publish_price_to_redis(&self.name, price) {
                Ok(_) => println!("Price data from {} published to Redis successfully", self.name),
                Err(err) => eprintln!("Failed to publish price data from {} to Redis: {}", self.name, err),
            };

            Ok(price)
        })
    }
}

struct MockExchange {
    #[allow(dead_code)]
    pub name: String,
}

impl BitcoinPriceGetter for MockExchange {
    fn get_bitcoin_price(&self, _timestamp: i64) -> Pin<Box<dyn Future<Output = Result<f64, reqwest::Error>> + Send>> {
        Box::pin(async { Ok(50000.0) })
    }
}

#[cfg(test)]
mod tests {
    use super::*;
    use futures::executor::block_on;

    #[test]
    fn test_get_bitcoin_price() {
        let mock_exchange = MockExchange { name: "MockExchange".to_string() };

        // Now we can call get_bitcoin_price on the mock object
        let price = block_on(mock_exchange.get_bitcoin_price(1619827200)).unwrap();

        // And we know that it should return the fixed price we specified
        assert_eq!(price, 50000.0);
    }
}
