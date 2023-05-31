use serde::{Deserialize, Serialize};
use redis::{AsyncCommands, Client as RedisClient};
use reqwest::{Client as HttpClient, Result as HttpResult};
use std::error::Error;
use futures::StreamExt;

#[derive(Serialize, Deserialize, Debug)]
pub struct Exchange {
    pub name: String,
    pub api_url: String,
}

#[derive(Serialize, Deserialize)]
pub struct TradeDecision {
    exchange_name: String,
    action: String, // "buy" or "sell"
    price: f64,
    quantity: f64,
}

#[derive(Deserialize, Serialize, Debug)]
pub struct PriceUpdate {
    pub exchange_name: String,
    pub price: f64,
}

pub struct TradeClient {
    redis_client: RedisClient,
    http_client: HttpClient,
}

impl Exchange {
    pub fn new(name: String, api_url: String) -> Exchange {
        Exchange { name, api_url }
    }
}

impl TradeDecision {
    pub fn new(exchange_name: String, action: String, price: f64, quantity: f64) -> Self {
        TradeDecision {
            exchange_name,
            action,
            price,
            quantity,
        }
    }
    pub fn exchange_name(&self) -> &String {
        &self.exchange_name
    }

    pub fn action(&self) -> &String {
        &self.action
    }

    pub fn price(&self) -> f64 {
        self.price
    }

    pub fn quantity(&self) -> f64 {
        self.quantity
    }
}

impl PriceUpdate {
    pub fn new(exchange_name: String, price: f64) -> PriceUpdate {
        PriceUpdate { exchange_name, price }
    }
}

impl TradeClient {
    pub fn new(redis_client: RedisClient, http_client: HttpClient) -> Self {
        Self {
            redis_client,
            http_client,
        }
    }

    pub async fn listen_for_decisions(&self) -> Result<(), Box<dyn Error>> {
        let mut con = self.redis_client.get_async_connection().await?;

        let pubsub_con = self.redis_client.get_async_connection().await?;
        let mut pubsub = pubsub_con.into_pubsub();
        pubsub.subscribe("arbitrage_decision").await?;

        while let Some(msg) = pubsub.on_message().next().await {
            let payload: String = msg.get_payload()?;
            let decision: TradeDecision = serde_json::from_str(&payload)?;

            let amount = decision.quantity();
            let price = decision.price();
            if decision.action() == "buy" {
                let res = self.buy_bitcoin(price, amount).await?;
                let _: () = con.publish("trading_result", res).await?;
            } else if decision.action() == "sell" {
                let res = self.sell_bitcoin(price, amount).await?;
                let _: () = con.publish("trading_result", res).await?;
            }
        }

        Ok(())
    }

    pub async fn buy_bitcoin(&self, price: f64, amount: f64) -> HttpResult<String> {
        let res = self.http_client.post("https://api_url/buy_bitcoin")
            .json(&serde_json::json!({
                "price": price,
                "amount": amount
            }))
            .send()
            .await?;

        res.text().await
    }

    pub async fn sell_bitcoin(&self, price: f64, amount: f64) -> HttpResult<String> {
        let res = self.http_client.post("https://api_url/sell_bitcoin")
            .json(&serde_json::json!({
                "price": price,
                "amount": amount
            }))
            .send()
            .await?;

        res.text().await
    }
}