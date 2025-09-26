# Myprolist - Backend

This is the backend for the Myprolist project, built with Node.js, Express, Sequelize, and MySQL.

## Features
- User authentication (JWT)
- Project, Task, and Comment management
- Notification system
- RESTful API structure


## Getting Started

### Prerequisites
- Node.js
- MySQL

### Installation
1. Clone the repository from GitHub:
	```sh
	git clone https://github.com/Gudduvaiya/teamtasker-assignment-backend.git
	cd teamtasker-assignment-backend
	```
2. Install dependencies:
	```sh
	npm install
	```
3. Copy the example environment file and fill in your variables:
	```sh
	cp .env.example .env
	# Then edit .env with your database and JWT secret
	```
4. Start the development server:
	```sh
	npm run dev
	```

### Environment Variables
See `.env.example` for required variables.

## Scripts
- `npm run dev` - Start the server with nodemon

## Folder Structure
- `controllers/` - API controllers
- `models/` - Sequelize models
- `routes/` - Express routes
- `middleware/` - Custom middleware
- `db/` - Database connection

## License
ISC
