# Trading Bot System

This is a event-driven system for cryptocurrency arbitrage, built with Rust.

## System Modules

This system is made up of several modules, each handling a specific aspect of the arbitrage system.

1. **Data Collection**: This module is responsible for gathering price data from different cryptocurrency exchanges. It publishes the collected data to a Redis channel.

2. **Arbitrage Strategy Module**: This module subscribes to the Redis channel to receive the price data. It applies arbitrage algorithms on the received data and publishes potential arbitrage opportunities.

3. **Trading Module**: This module listens for potential arbitrage opportunities and executes the trades.

4. **Database Module**: This module persists price data, arbitrage opportunities, and trade results to a database.

5. **Backtesting Module**: Allows for testing of different arbitrage strategies with historical data.

6. **Monitoring Module**: Monitors the operation of the whole system and alerts if something goes wrong.

7. **Logging Module**: Handles logging of various events in the system.

8. **Notification Module**: Sends notifications about trade results or system alerts to designated channels (e.g., Slack, Telegram).

## Development Environment

This project is developed using Rust and its package manager, Cargo. Each module is structured as a separate crate within a Cargo workspace.

## How to Build

Ensure you have Rust and Cargo installed on your machine. Then navigate to the project directory and run:

```bash
cargo build --release
```

## Running Tests

To run all tests in this project, navigate to the project directory and run:

```bash
cargo test
```

