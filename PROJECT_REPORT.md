# Secure Auth App

## Project Report – Week 8

### 1. Project Overview

Secure Auth App is a secure full-stack authentication application developed using Node.js, Express.js, Supabase/PostgreSQL, JWT, and bcrypt.

The application provides a complete authentication workflow where users can register, log in securely, receive a JWT token, and access protected profile functionality. Role-based authorization is also implemented to control admin-level access.

The main goal of the project is to demonstrate a secure and functional authentication system with database integration and protected routes.

### 2. Project Objectives

The main objectives of the project are:

* Implement secure user registration and login.
* Store user data securely in a PostgreSQL database.
* Hash passwords using bcrypt.
* Implement JWT-based authentication.
* Protect API routes from unauthorized access.
* Implement role-based authorization for admin functionality.
* Deploy the application so it can be accessed online.
### 3. Technologies Used

The project was developed using the following technologies:

* **Node.js** — Server-side JavaScript runtime.
* **Express.js** — Backend framework for creating API routes.
* **Supabase** — Database and backend service.
* **PostgreSQL** — Relational database for storing user and content data.
* **JWT** — Used for authentication and protected API access.
* **bcrypt** — Used to securely hash user passwords.
* **HTML5, CSS3, JavaScript** — Used for the frontend interface.

### 4. System Architecture

The application follows a client-server architecture.

**Frontend → Express.js Backend → Supabase/PostgreSQL Database**

The frontend sends requests to the Express.js API. The backend processes authentication requests, verifies JWT tokens, applies role-based authorization, and communicates with the Supabase/PostgreSQL database.

### 5. Database Design

The application uses two main database tables:

**Users Table**

* `id` — Primary key
* `name` — User name
* `email` — Unique email address
* `password` — Hashed password
* `role` — User or admin
* `created_at` — Account creation time

**Content Table**

* `id` — Primary key
* `title` — Content title
* `description` — Content description
* `user_id` — Foreign key connected to the users table
* `created_at` — Content creation time

The database uses constraints and relationships to maintain data integrity.
### 6. Authentication Workflow

The application provides a complete authentication workflow:

1. A new user registers using their name, email, and password.
2. The password is hashed using bcrypt before being stored in the database.
3. The user logs in using their email and password.
4. The system verifies the user credentials.
5. A JWT token is generated after successful authentication.
6. The JWT token is used to access protected routes.
7. The server verifies the token before allowing access to protected profile functionality.
8. Role-based authorization is used to control access to admin functionality.

### 7. Security Implementation

The following security measures were implemented:

* Passwords are hashed using bcrypt before being stored.
* JWT is used for authentication.
* Protected routes require a valid JWT token.
* Admin routes require both authentication and the appropriate user role.
* Environment variables are used for sensitive credentials and configuration.
* Sensitive credentials are not stored directly in the source code.

### 8. Testing

The main authentication workflow was tested successfully:

**Register → Login → Dashboard / Protected Access**

The deployed application was tested to confirm that:

* New users can register successfully.
* Registered users can log in successfully.
* Users can access the dashboard after authentication.
* The authentication flow works correctly in the deployed application.

Peer testing was also completed, and no critical issues were reported.
### 9. Deployment

The Secure Auth App was deployed online using Vercel.

**Production URL:**
https://secure-auth-app-sigma.vercel.app

The deployed application was tested successfully, and the registration and login workflow is accessible online.

### 10. Challenges Faced

During development, some challenges were encountered, including:

* Configuring the database connection and environment variables.
* Implementing secure JWT authentication.
* Protecting API routes.
* Configuring the application for production deployment.
* Testing the authentication workflow after deployment.

These challenges were resolved through testing, debugging, and configuration updates.

### 11. Future Improvements

The following improvements can be added in future versions:

* Password reset functionality.
* Email verification.
* Improved user dashboard.
* More advanced admin management.
* Enhanced security monitoring.
* Additional user and content management features.

### 12. Known Limitations

The current version focuses mainly on the core authentication workflow. Advanced features such as password recovery, email verification, and comprehensive admin management are not currently included.

### 13. Conclusion

The Secure Auth App successfully demonstrates a secure authentication system with user registration, login, JWT-based authentication, protected routes, role-based authorization, database integration, and online deployment.

The project meets the main Week 8 requirements and provides a foundation for adding more advanced features in future development.

### 14. Project Repository

GitHub Repository:

https://github.com/mishal-svg/secure-auth-app

Production Website:

https://secure-auth-app-sigma.vercel.app
