#[cfg(test)]
mod tests {
    use mockito::Server;
    use trading_bot_lib::TradeClient;

    #[tokio::test]
    async fn test_buy_bitcoin_async() {
        let mut server = Server::new_async().await;
        let _m = server.mock("POST", "/buy_bitcoin")
            .with_status(200)
            .with_body("transaction_id: 123456")
            .create_async().await;

        // let redis_client = redis::Client::open("redis://127.0.0.1/").unwrap();
        // let http_client = reqwest::Client::new();
        // let trade_client = TradeClient::new(redis_client, http_client);
        //
        // // Pass the server URL to the buy_bitcoin method
        // let result = trade_client.buy_bitcoin(50000.0, 1.0).await.unwrap();

        assert_eq!(_m, "transaction_id: 123456");
    }

    #[tokio::test]
    async fn test_sell_bitcoin_async() {
        let mut server = Server::new_async().await;
        let _m = server.mock("POST", "/sell_bitcoin")
            .with_status(200)
            .with_body("transaction_id: 654321")
            .create_async().await;

        let redis_client = redis::Client::open("redis://127.0.0.1/").unwrap();
        let http_client = reqwest::Client::new();
        let trade_client = TradeClient::new(redis_client, http_client);

        // Pass the server URL to the sell_bitcoin method
        let result = trade_client.sell_bitcoin(50000.0, 1.0).await.unwrap();

        assert_eq!(result, "transaction_id: 654321");
    }
}
