# Secure Auth App

A secure authentication application built with Node.js, Express, Supabase, JWT, and bcrypt.

## Project Overview

Secure Auth App provides a basic secure authentication workflow where users can:

* Create an account
* Log in with email and password
* Access a protected profile route
* Receive a JWT authentication token
* Access admin-protected functionality based on their role

Passwords are securely hashed using bcrypt before being stored in the database.

## Technologies Used

* Node.js
* Express.js
* Supabase
* PostgreSQL
* JWT (JSON Web Token)
* bcrypt
* HTML5
* CSS3
* JavaScript

## Architecture

The application follows a simple client-server architecture.

### Frontend

The frontend contains HTML, CSS, and JavaScript files for:

* Registration
* Login
* Profile
* Logout

### Backend

The Node.js and Express server provides API endpoints for:

* User registration
* User login
* Protected profile access
* Admin role access

### Database

Supabase/PostgreSQL is used for storing application data.

Main tables:

* `users`
* `content`

The `users` table stores user information, hashed passwords, and roles.

The `content` table is connected to users through a foreign key.

### Authentication Flow

```text
User
  ↓
Register
  ↓
Password hashed with bcrypt
  ↓
User stored in Supabase
  ↓
Login
  ↓
JWT token generated
  ↓
Protected API request
  ↓
JWT verification
  ↓
Profile / Admin access
```

## API Endpoints

| Method | Endpoint        | Purpose                  | Authentication   |
| ------ | --------------- | ------------------------ | ---------------- |
| POST   | `/api/register` | Register a new user      | No               |
| POST   | `/api/login`    | Login user               | No               |
| GET    | `/api/profile`  | Access protected profile | JWT required     |
| GET    | `/api/admin`    | Access admin route       | JWT + Admin role |
| GET    | `/`             | Check API status         | No               |

## Database Design

### Users Table

* `id` — Primary key
* `name` — User name
* `email` — Unique email
* `password` — Hashed password
* `role` — `user` or `admin`
* `created_at` — Account creation time

### Content Table

* `id` — Primary key
* `title` — Content title
* `description` — Content description
* `user_id` — References the users table
* `created_at` — Content creation time

## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/mishal-svg/secure-auth-app.git
cd secure-auth-app
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the project root.

Add the required environment variables:

```text
SUPABASE_URL=your_supabase_url
SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SECRET_KEY=your_supabase_secret_key
JWT_SECRET=your_jwt_secret
PORT=3000
```

**Do not share or commit actual secret values.**

### 4. Start the Server

```bash
node server.js
```

The application will run at:

```text
http://localhost:3000
```

## Security

The application includes:

* Password hashing with bcrypt
* JWT-based authentication
* Protected routes
* Role-based authorization
* Environment variables for sensitive credentials
* No credentials stored directly in source code

## Testing

The main authentication journey was tested successfully:

```text
Register → Login → JWT Token → Protected Profile
```

Peer testing was also completed and no critical issues were reported.

## Production Deployment

The application is deployed and publicly accessible online.

Production URL:

https://secure-auth-app-sigma.vercel.app

## Demo & Main Features

The application demonstrates a complete authentication workflow:

* User registration
* User login
* JWT authentication
* Protected profile/dashboard access
* Role-based admin access
* Secure password hashing with bcrypt
* Database integration with Supabase/PostgreSQL

The deployed application can be accessed using the Production URL above.

## Known Limitations & Future Improvements

Currently, the application focuses on the core authentication workflow.

Future improvements may include:

* Password reset functionality
* Email verification
* Improved dashboard features
* More detailed admin management
* Additional security and monitoring features

## Repository

GitHub repository:

` https://github.com/mishal-svg/secure-auth-app.git`
