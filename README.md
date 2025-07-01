# Cold Storage Management API

## Definition

❄️ **Cold Storage Management (CSM)** is a smart system designed to simulate a real-world cold storage facility and its temperature-controlled products, powered by integrated IoT sensors.  
Its mission: empower managers and supervisors to monitor product conditions in real time through live temperature data, enabling informed, data-driven decisions for optimal storage and safety. 📦🌡️

## Overview

Cold Storage Management API is a robust backend service designed to power a modern cold storage management system. Acting as the core middleware, it handles all business logic and data operations for warehouses, pallets, products, sensors, and more. The API also serves as a bridge between client applications and third-party IoT sensor platforms, enabling seamless integration and real-time monitoring of temperature-controlled environments.

Originally developed to support a graduation thesis project, this system provides a scalable foundation for managing cold storage facilities, ensuring data integrity, security, and extensibility.

> ⚡ **Note:** This backend is a necessary component of the larger [Cold Storage Management System](https://github.com/nhttoan0809/CSM) and is not intended to be used as a standalone application.

---

## Features

- 🌡️ **Simulated Sensor Data:** Provides realistic, dynamically generated temperature readings for each sensor—ideal for development and testing.
- 🏢 **Station & Sensor Management:** Effortlessly retrieve all stations linked to a user and list every sensor within a station for complete visibility.
- 🔑 **Token-Based Authentication:** Secure API access with JWT tokens, mirroring real-world authentication and authorization flows.
- ⚡ **RESTful API Endpoints:** Instantly test and validate endpoints for stations, sensors, and sensor data retrieval.
- 🔄 **Seamless Integration:** Plug-and-play with larger systems, enabling uninterrupted development even when real infrastructure is unavailable.
- 🛠️ **Developer Friendly:** Simple setup, clear API structure, and robust error handling for a smooth developer experience.

## Key API Routes

> **All routes are RESTful and organized by resource for clarity and scalability.**

### Authentication & User Management

- **`/auth`**
  - User login, registration, session management, and profile updates.
  - `/auth/company` — Company information and updates.

### Agent Management

- **`/agent`**
  - Manage agents (distributors/branches).
  - `/agent/get_all` — List all agents.
  - `/agent/:id_agent/warehouse` — Nested warehouse management for each agent.

### Warehouse Management

- **`/agent/:id_agent/warehouse`**
  - `/get_all` — List all warehouses for an agent.
  - `/add` — Add a new warehouse.
  - `/:id_warehouse/get_infor` — Get warehouse details.
  - `/:id_warehouse/update` — Update warehouse info.
  - `/:id_warehouse/import` — Import warehouse data.
  - `/:id_warehouse/export` — Export warehouse data.
  - `/:id_warehouse/delete` — Delete a warehouse.

### Pallet & Product Management

- **`/agent/:id_agent/warehouse/:id_warehouse/pallet`**

  - `/get_all` — List all pallets.
  - `/import` — Import a pallet.
  - `/:id_pallet/delete` — Delete a pallet.
  - `/:id_pallet/add_to_warehouse` — Assign pallet to warehouse.
  - `/:id_pallet/remove_from_warehouse` — Remove pallet from warehouse.
  - `/:id_pallet/update_information` — Update pallet info.
  - `/:id_pallet/update_position` — Update pallet position.

- **`/agent/:id_agent/warehouse/:id_warehouse/product`**
  - `/get_all` — List all products.
  - `/:id_product/add_to_pallet` — Assign product to pallet.
  - `/:id_product/remove_from_pallet` — Remove product from pallet.
  - `/:id_product/update_information` — Update product info.
  - `/:id_product/update_position` — Update product position.

### Sensor & IoT Integration

- **`/agent/:id_agent/warehouse/:id_warehouse/sensor`**

  - `/get_all` — List all sensors.
  - `/:id_sensor/assign` — Assign sensor.
  - `/:id_sensor/update_position` — Update sensor position.
  - `/:id_sensor/remove` — Remove sensor.

- **`/agent/:id_agent/warehouse/:id_warehouse/iot_account`**
  - `/add` — Add IoT account.
  - `/get_all` — List IoT accounts.
  - `/:id_iot_account/remove` — Remove IoT account.
  - `/station` — Manage stations and sensors from third-party IoT platforms.

### Pallet Template Management

- **`/pallet_template`**
  - `/get_all` — List all pallet templates.

### Test Data (for development)

- **`/test_data`**
  - Mock endpoints for agents, warehouses, pallets, products, sensors, and authentication.

---

## Tech Stack

- **Backend Framework:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** JWT-based authentication and session management
- **API Structure:** MVC (Model-View-Controller) architecture
- **IoT Integration:** Middleware for connecting to external sensor APIs

---

## Motivation

This project was built to provide a reliable, extensible backend for cold storage management, supporting real-time monitoring and efficient operations. It enables seamless integration between client applications and IoT sensor platforms, ensuring data consistency and operational safety for temperature-
