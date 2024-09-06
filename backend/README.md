# NexStore Backend

This is the backend API for the NexStore project. It provides endpoints for managing users, shops, products, and authentication.

## Project Structure

The project structure is as follows:

backend/
├── src/
│   ├── app.js # Main app entry point
│   ├── config/
│   │   ├── database.js # Database connection setup
│   │   └── multer.config.js # File upload configuration
│   ├── controllers/ # API controllers
│   ├── middleware/ # Authentication middleware
│   ├── models/ # Sequelize models
│   ├── routes/ # API routes
│   └── services/ # External API integrations
└── test/ # Mocha test files

## Prerequisites

Before you start, ensure you have the following installed:

- [Node.js](https://nodejs.org/) v14 or later
- [MySQL](https://www.mysql.com/)
- [Postman](https://www.postman.com/) (for testing the API)

## Setup

1. **Clone the repository:**

   git clone <repository-url>
   cd backend

2.  **Install dependencies:**

    npm install

3. **Set up environment variables:**

    Create a .env file in the root of the project:
    DB_HOST=localhost
    DB_USER=root
    DB_PASSWORD=password
    DB_NAME=nexstore
    JWT_SECRET=your_jwt_secret
    EMAIL_USER=your_email
    EMAIL_PASS=your_email_password

4. Run database migrations:

    Ensure that the MySQL database is up and running:
    npm run migrate

5. Run the application:

    Start the server:
    npm start
    The backend will be running at http://localhost:3000

API Documentation
-----------------

The following API endpoints are available:

Authentication
- POST /api/users/signup: Registers a new user.
- POST /api/auth/login: Logs in a user and returns a JWT token.

User
- GET /api/users/profile: Retrieves the profile of the logged-in user.

Shop
- POST /api/shops: Creates a new shop.
- GET /api/shops/:id: Retrieves a specific shop by ID.
- PUT /api/shops/:id: Updates an existing shop.
- DELETE /api/shops/:id: Deletes a specific shop by ID.

Product
- POST /api/products: Creates a new product with an image.
- GET /api/products/shop/:shopId: Retrieves products for a specific shop.
- PUT /api/products/:id: Updates an existing product.
- DELETE /api/products/:id: Deletes a specific product.

Search, Pagination, and Sorting
- GET /api/shops: Retrieves all shops with pagination and sorting.
- GET /api/shops/search: Searches for shops by name.
- GET /api/products/shop/:shopId/search: Searches for products by name in a specific shop.

Analytics
- GET /api/shops/statistics: Retrieves statistics about the number of shops and products
