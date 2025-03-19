# BingeOn

## Description
BingeOn is a web application designed for exploring and reviewing movies. Users can browse a collection of movies, read reviews, and submit their own reviews.

---
## Screenshots
![Screenshot 2025-03-20 at 12 29 07 AM](https://github.com/user-attachments/assets/f87f3e8c-bb23-475f-8635-65de00a8474f)
![Screenshot 2025-03-20 at 12 30 04 AM](https://github.com/user-attachments/assets/3cf47487-3556-4bed-ac95-257c3827b07f)
![Screenshot 2025-03-20 at 12 30 58 AM](https://github.com/user-attachments/assets/e31ac7fa-2585-4512-ac1d-68b5414d47f7)
![Screenshot 2025-03-20 at 12 31 06 AM](https://github.com/user-attachments/assets/62a66ee4-c3eb-401c-9f4d-1cb8abe2d24b)


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

