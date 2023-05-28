use serde::{Deserialize, Serialize};

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