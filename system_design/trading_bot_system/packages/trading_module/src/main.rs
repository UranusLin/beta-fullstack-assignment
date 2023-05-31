mod test;

use trading_bot_lib::TradeDecision;
use reqwest;
use redis::AsyncCommands;
use std::error::Error;
use futures::StreamExt;


pub async fn listen_for_decisions() -> Result<(), Box<dyn Error>> {
    let client = redis::Client::open("redis://127.0.0.1/")?;
    let mut con = client.get_async_connection().await?;

    let pubsub_con = client.get_async_connection().await?;
    let mut pubsub = pubsub_con.into_pubsub();
    pubsub.subscribe("arbitrage_decision").await?;

    while let Some(msg) = pubsub.on_message().next().await {
        let payload: String = msg.get_payload()?;
        let decision: TradeDecision = serde_json::from_str(&payload)?;

        // Based on the decision, buy or sell bitcoin
        let amount = decision.quantity();
        let price = decision.price();
        if decision.action() == "buy" {
            let res = buy_bitcoin(price, amount).await?;
            // Publish result back to Redis
            let _: () = con.publish("trading_result", res).await?;
        } else if decision.action() == "sell" {
            let res = sell_bitcoin(price, amount).await?;
            // Publish result back to Redis
            let _: () = con.publish("trading_result", res).await?;
        }
    }

    Ok(())
}

async fn buy_bitcoin(price: f64, amount: f64) -> reqwest::Result<String> {
    let client = reqwest::Client::new();
    let res = client.post("http://api.yourserver.com/buy_bitcoin")
        .json(&serde_json::json!({
            "price": price,
            "amount": amount
        }))
        .send()
        .await?;

    // Assume the API returns a string
    res.text().await
}

async fn sell_bitcoin(price: f64, amount: f64) -> reqwest::Result<String> {
    let client = reqwest::Client::new();
    let res = client.post("http://api.yourserver.com/sell_bitcoin")
        .json(&serde_json::json!({
            "price": price,
            "amount": amount
        }))
        .send()
        .await?;

    // Assume the API returns a string
    res.text().await
}

fn main() {}