# MERN Stack ToDo List App

This is a full-stack ToDo List application built using the MERN stack (MongoDB, Express.js, React, Node.js). The app allows users to register, log in, and manage their tasks. Users can add new tasks, view existing tasks, and delete tasks as needed. The application has a clean and responsive design, making it user-friendly across different devices.

## Table of Contents

- [Features](#features)
- [Packages Used In This Project](#packages-used-in-this-project)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [How to Run](#how-to-run)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Features

- **User Authentication**: Users can register and log in to their accounts.
- **Task Management**: Users can add, view, and delete tasks.
- **Responsive Design**: The application is designed to be usable on both desktop and mobile devices.
- **Data Storage**: User data and tasks are stored in a MongoDB database.
- **Clean UI**: The user interface is designed for a seamless user experience.

## Packages Used In This Project

| Package                                               | Description                                                                                                                | Downloads                                                                                                        |
| ----------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| [Axios](https://www.npmjs.com/package/axios)          | Promise-based HTTP client for the browser and Node.js                                                                       | [![NPM Badge](https://img.shields.io/npm/dt/axios.svg?maxAge=3600)](https://www.npmjs.com/package/axios)         |
| [Cors](https://www.npmjs.com/package/cors)            | Middleware to enable CORS (Cross-Origin Resource Sharing) in Express.js                                                     | [![NPM Badge](https://img.shields.io/npm/dt/cors.svg?maxAge=3600)](https://www.npmjs.com/package/cors)           |
| [Express](https://www.npmjs.com/package/express)      | Fast, unopinionated, minimalist web framework for Node.js                                                                   | [![NPM Badge](https://img.shields.io/npm/dt/express.svg?maxAge=3600)](https://www.npmjs.com/package/express)     |
| [Mongoose](https://www.npmjs.com/package/mongoose)    | MongoDB object modeling tool designed to work in an asynchronous environment                                                 | [![NPM Badge](https://img.shields.io/npm/dt/mongoose.svg?maxAge=3600)](https://www.npmjs.com/package/mongoose)   |
| [React](https://www.npmjs.com/package/react)          | JavaScript library for building user interfaces                                                                             | [![NPM Badge](https://img.shields.io/npm/dt/react.svg?maxAge=3600)](https://www.npmjs.com/package/react)         |
| [React Router](https://www.npmjs.com/package/react-router-dom) | Declarative routing for React apps                                                                                          | [![NPM Badge](https://img.shields.io/npm/dt/react-router-dom.svg?maxAge=3600)](https://www.npmjs.com/package/react-router-dom) |
| [Bcrypt](https://www.npmjs.com/package/bcrypt)        | A library to help you hash passwords                                                                                        | [![NPM Badge](https://img.shields.io/npm/dt/bcrypt.svg?maxAge=3600)](https://www.npmjs.com/package/bcrypt)       |
| [Jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) | A library to sign, verify, and decode JSON Web Tokens                                                                       | [![NPM Badge](https://img.shields.io/npm/dt/jsonwebtoken.svg?maxAge=3600)](https://www.npmjs.com/package/jsonwebtoken) |
| [react-chartjs-2](https://www.npmjs.com/package/react-chartjs-2) | React wrapper for Chart.js 2 | ![NPM Badge](https://img.shields.io/npm/dt/react-chartjs-2.svg?maxAge=3600) |
| [chart.js](https://www.npmjs.com/package/chart.js) | Simple yet flexible JavaScript charting library | ![NPM Badge](https://img.shields.io/npm/dt/chart.js.svg?maxAge=3600) |
## Project Structure

The project is divided into two main folders: `frontend` and `backend`.

- `frontend/`: Contains the React frontend of the application.
  - `src/`: Source files for the React app.
    - `components/`: Contains reusable React components.
    - `css/`: Contains CSS files for styling.
    - `pages/`: Contains page components for different routes.
    - `App.js`: Main app component.
  
- `backend/`: Contains the Express.js backend of the application.
  - `models/`: Contains Mongoose models for MongoDB.
  - `routes/`: Contains API route definitions.
  - `controllers/`: Contains controller functions for handling business logic.
  - `config/`: Contains configuration files for database and server setup.
  - `server.js`: Main entry point for the backend server.

## Getting Started

Follow these steps to set up and run the application on your local machine.

### Prerequisites

- Node.js (version 14 or higher)
- MongoDB (either locally installed or a cloud instance)
- npm (Node Package Manager, comes with Node.js)

### How to Run

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/mern-todo-app.git
   ```
2. **Navigate to the backend directory and install dependencies**:
   ```bash
   cd backend
   npm install
   ```
3. **Set up your MongoDB database**:
   - Create a `.env` file in the `backend` directory and add your MongoDB connection string:
     ```bash
     MONGODB_URI=mongodb://your-username:your-password@localhost:27017/your-database-name
     ```
4. **Navigate to the frontend directory and install dependencies**:
   ```bash
   cd ../frontend
   npm install
   ```
5. **Start the backend server**:
   ```bash
   cd ../backend
   npm run server
   ```

6. **Start the frontend server**:
   ```bash
   cd ../frontend
   npm run start
   ```
## **API Endpoints**:

   - **Register User**:
     - URL: `/api/users/register`
     - Method: `POST`
     - Description: Registers a new user.
     - Request Body:
       ```json
       {
         "username": "string",
         "email": "string",
         "password": "string"
       }
       ```
     - Response: 
       - Success: `201` - User registered successfully
       - Error: `400` - User already exists

   - **Login User**:
     - URL: `/api/users/login`
     - Method: `POST`
     - Description: Logs in a user.
     - Request Body:
       ```json
       {
         "email": "string",
         "password": "string"
       }
       ```
     - Response: 
       - Success: `200` - Login successful
       - Error: `400` - Invalid credentials

   - **Get Todos**:
     - URL: `/api/todos`
     - Method: `GET`
     - Description: Fetches all the todos for the authenticated user.
     - Response: 
       - Success: `200` - List of todos
       - Error: `401` - Unauthorized

   - **Add Todo**:
     - URL: `/api/todos/add`
     - Method: `POST`
     - Description: Adds a new todo.
     - Request Body:
       ```json
       {
         "task": "string"
       }
       ```
     - Response: 
       - Success: `201` - Todo added successfully
       - Error: `400` - Invalid request

   - **Delete Todo**:
     - URL: `/api/todos/:id`
     - Method: `DELETE`
     - Description: Deletes a specific todo by ID.
     - Response: 
       - Success: `200` - Todo deleted successfully
       - Error: `404` - Todo not found

 ## **Future Enhancements**:
   - Add more user-friendly error handling on both the frontend and backend.
   - Implement password hashing for secure storage.
   - Add functionality for updating todos.
   - Integrate a better authentication system (e.g., JWT tokens).
   - Add pagination for todos for better performance with large datasets.
   - Improve the UI for a more seamless user experience.

##  **Contributing**:
   - Fork the repository.
   - Create a new branch (`git checkout -b feature/your-feature`).
   - Make your changes.
   - Commit your changes (`git commit -am 'Add your feature'`).
   - Push to the branch (`git push origin feature/your-feature`).
   - Open a pull request.

# **License**:
   - This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.


