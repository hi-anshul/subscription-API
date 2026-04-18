🚀 Subscription Management System API

A production-ready backend API designed to handle real-world subscription workflows — including authentication, billing logic, and scalable architecture.

This project demonstrates how to build a secure, modular, and maintainable system using modern backend technologies.

📌 Overview

This API enables you to:

Manage users and subscriptions
Handle authentication securely using JWT
Structure scalable backend architecture
Integrate database models with business logic
Automate workflows like email reminders

Built with a focus on real-world production standards — not just tutorials.

⚙️ Tech Stack
Node.js
Express.js
MongoDB
Mongoose (ORM)
🔥 Core Features
🔐 Authentication & Security
JWT-based authentication
Protected routes and user authorization
Advanced rate limiting & bot protection (Arcjet integration)
🗄️ Database & Models
Schema design using MongoDB & Mongoose
Structured relationships and validations
📦 Subscription Management
Create, update, and manage subscriptions
Business logic for real-world use cases
⚠️ Error Handling
Centralized global error handling
Input validation with middleware
📊 Logging & Monitoring
Structured logging for debugging and observability
📧 Automated Workflows
Email reminders using Upstash workflows
Event-driven architecture for async tasks
🏗️ Architecture Highlights
Modular folder structure
Separation of concerns (routes, controllers, services)
Middleware-driven request lifecycle
Scalable and maintainable codebase
⚡ Getting Started
✅ Prerequisites

Ensure you have the following installed:

Git
Node.js
npm
📥 Clone the Repository
git clone https://github.com/adrianhajdin/subscription-tracker-api.git
cd subscription-tracker-api
📦 Install Dependencies
npm install
🔐 Environment Variables

Create a .env.local file in the root directory:

# SERVER
PORT=5500
SERVER_URL=http://localhost:5500

# ENV
NODE_ENV=development

# DATABASE
DB_URI=

# AUTH
JWT_SECRET=
JWT_EXPIRES_IN=1d

# ARCJET
ARCJET_KEY=
ARCJET_ENV=development

# UPSTASH
QSTASH_URL=http://127.0.0.1:8080
QSTASH_TOKEN=

# EMAIL
EMAIL_PASSWORD=
▶️ Run the Project
npm run dev

Test the API using:

Browser → http://localhost:5500
Postman / Insomnia
🧪 Sample Data

Use dummy JSON data (available in /snippets) to test endpoints quickly.


📈 Next Steps

To extend this project:

Add payment gateway integration (Stripe/Razorpay)
Implement role-based access control (RBAC)
Add analytics dashboard
Deploy with Docker + CI/CD pipeline
