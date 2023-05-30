![GitHub last commit](https://img.shields.io/github/last-commit/UranusLin/beta-fullstack-assignment) [![codecov](https://codecov.io/gh/username/repository/branch/master/graph/badge.svg)](https://codecov.io/gh/username/repository)

# Trading Bot System

This is a event-driven system for cryptocurrency arbitrage, built with Rust.

## System Modules

This system is made up of several modules, each handling a specific aspect of the arbitrage system.

* **Data Collection (packages/data_collection)**: This package is responsible for gathering price data from different cryptocurrency exchanges. It publishes the collected data to a Redis channel.

* **Arbitrage Strategy Module (packages/arbitrage_strategy)**: This package subscribes to the Redis channel to receive the price data. It applies arbitrage algorithms on the received data and publishes potential arbitrage opportunities.

* **Trading Module (packages/trading_module)**: This package listens for potential arbitrage opportunities and executes the trades.

* **Database Module (packages/database_module)**: This package persists price data, arbitrage opportunities, and trade results to a database.

* **Backtesting Module (packages/backtesting)**: This package allows for testing of different arbitrage strategies with historical data.

* **Monitoring Module (packages/monitoring_module)**: This package monitors the operation of the whole system and alerts if something goes wrong.

* **Logging Module (packages/logging_module)**: This package handles logging of various events in the system.

* **Notification Module (packages/notification_module)**: This package sends notifications about trade results or system alerts to designated channels (e.g., Slack, Telegram).

* **Trading Bot Library (packages/trading_bot_lib)**: This package contains the core libraries and algorithms used by the trading module for executing the trades.

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

