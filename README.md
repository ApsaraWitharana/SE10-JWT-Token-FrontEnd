
# JWT Authentication Frontend

## Overview
This project is a frontend implementation for user authentication using JSON Web Tokens (JWT). It is built with HTML, CSS, JavaScript, Bootstrap, and AJAX. The frontend interacts with a backend service that generates and verifies JWT tokens.

## Features
- User login form
- JWT token storage in `localStorage`
- Protected routes that require JWT authentication
- AJAX requests to the backend with JWT tokens

## Technology Stack
- **HTML**: Structure of the web pages.
- **CSS & Bootstrap**: Styling and responsive design.
- **JavaScript**: Handling user interactions and making AJAX requests.
- **AJAX**: Communicating with the backend API for authentication and data retrieval.

## Getting Started
1. Clone the repository:
    ```bash
    git clone https://github.com/ApsaraWitharana/SE10-JWT-Token-FrontEnd.git
    ```
2. Open the project in your code editor.
3. Set up your backend server to issue JWT tokens on successful login.
4. Link your frontend with the backend by setting the correct API endpoint in the JavaScript file.

## Usage

### Login
1. Fill in the login form with your credentials.
2. On successful login, the JWT token will be stored in `localStorage`.
3. This token will be included in the `Authorization` header for all subsequent requests to protected routes.


### Signin Form - ![WhatsApp Image 2024-08-28 at 17 49 14_d044cae2](https://github.com/user-attachments/assets/48172131-d55f-4bf2-a54c-a0747514d78f)

### Signup Form - ![WhatsApp Image 2024-08-28 at 17 49 57_f88b74a2](https://github.com/user-attachments/assets/b3b6599a-4b80-487d-aa84-66a2a3814b83)


### Example AJAX Request with JWT


### Architecture to Authentication Backend - Frontend  : ![WhatsApp Image 2024-08-28 at 13 49 18_9f38b14e](https://github.com/user-attachments/assets/ea6a0f09-2c0d-420d-a844-9bb3483ec553)


