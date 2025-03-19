# BingeOn

## Description
BingeOn is a web application designed for exploring and reviewing movies. Users can browse a collection of movies, read reviews, and submit their own reviews.

---

## Technologies Used

### Frontend:
- **React**: A JavaScript library for building user interfaces.
- **Vite**: A build tool that provides a fast development environment.
- **Tailwind CSS**: A utility-first CSS framework for styling.

### Backend:
- **Spring Boot**: A Java-based framework for building web applications and RESTful APIs.

---

## Installation Instructions

### Frontend Setup
1. **Navigate to the `bingeon-frontend` directory:**
   ```bash
   cd bingeon-frontend
   ```
2. **Install the dependencies:**
   ```bash
   npm install
   ```
3. **Start the development server:**
   ```bash
   npm run dev
   ```
4. **Access the frontend application at:**
   ```
   http://localhost:5173
   ```

---

### Backend Setup
1. **Navigate to the `bingeon` directory:**
   ```bash
   cd bingeon
   ```
2. **Build and run the application using Maven:**
   ```bash
   ./mvnw spring-boot:run
   ```
3. **The backend API can be accessed at:**
   ```
   http://localhost:8080/api/movies
   ```

---

## Usage
- Open your browser and visit `http://localhost:5173` to interact with the frontend application.
- The backend API can be accessed through endpoints such as:
  - `GET http://localhost:8080/api/movies`
  - `POST http://localhost:8080/api/reviews`

---

## Features
- Browse a collection of movies.
- Read and submit reviews for movies.
- User authentication and authorization (if implemented).

