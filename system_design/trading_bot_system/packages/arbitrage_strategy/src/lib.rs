use trading_bot_lib::TradeDecision;
use trading_bot_lib::PriceUpdate;
use redis::AsyncCommands;
use std::error::Error;
use futures::StreamExt;

pub async fn arbitrage_strategy() -> Result<(), Box<dyn Error>> {
    let client = redis::Client::open("redis://127.0.0.1/")?;
    let mut con = client.get_async_connection().await?;

    let pubsub_client = redis::Client::open("redis://127.0.0.1/")?;
    let pubsub_con = pubsub_client.get_async_connection().await?;
    let mut pubsub = pubsub_con.into_pubsub();

    // Subscribe to price updates from all exchanges
    pubsub.psubscribe("exchange_*_price").await?;

    let mut message_stream = pubsub.into_on_message();
    while let Some(msg) = message_stream.next().await {
        let payload: String = msg.get_payload()?;
        let price_update: PriceUpdate = serde_json::from_str(&payload)?;

        // TODO: Calculate arbitrage opportunities based on price_update
        // Just a placeholder decision for now
        let decision = TradeDecision::new(
            price_update.exchange_name,
            "buy".to_string(),
            price_update.price,
            1.0,
        );

        // Publish decision to Redis
        let decision_json = serde_json::to_string(&decision)?;
        let _: () = con.publish("arbitrage_decision", decision_json).await?;
    }

    Ok(())
}
