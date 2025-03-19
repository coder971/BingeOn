# BingeOn

## Description
BingeOn is a web application designed for exploring and reviewing movies. Users can browse a collection of movies, read reviews, and submit their own reviews.

---
## Screenshots
![Screenshot 2025-03-20 at 12 29 07 AM](https://github.com/user-attachments/assets/895cbfa8-abaf-4d34-9f0d-65be4f8a6044)
![Screenshot 2025-03-20 at 12 33 54 AM](https://github.com/user-attachments/assets/4c7ee6fa-a995-4802-8240-b735db28c66b)
![Screenshot 2025-03-20 at 12 30 58 AM](https://github.com/user-attachments/assets/e5920fbf-3a89-4451-b5a9-802ddd85c4fb)
![Screenshot 2025-03-20 at 12 31 06 AM](https://github.com/user-attachments/assets/46be4fe6-3bcb-4b78-a559-6cf6d17e12c5)


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

