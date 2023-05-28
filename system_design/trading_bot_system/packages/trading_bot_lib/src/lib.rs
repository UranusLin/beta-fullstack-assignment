use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize, Debug)]
pub struct Exchange {
    pub name: String,
    pub api_url: String,
}

impl Exchange {
    pub fn new(name: String, api_url: String) -> Exchange {
        Exchange { name, api_url }
    }
}
