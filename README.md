Movie Directory Application
The Movie Directory Application is a React-based platform designed to showcase film directors and their iconic works. This application demonstrates advanced client-side routing concepts, including nested routes, programmatic navigation, and state sharing across components.

Features
Director Overview: Browse a comprehensive list of notable film directors.

Detailed Filmographies: Access detailed pages for individual directors to view their biographies and associated movies.

Dynamic Movie Details: View specific information for each film, including duration and genres.

Interactive Management:

Add new directors to the directory and receive immediate redirection to their profile.

Contribute new movies to a director’s collection with automatic navigation to the new movie's detail page.

Seamless Navigation: Utilizes React Router v6 for smooth transitions and a modern Single Page Application (SPA) experience.

Technologies Used
Frontend: React (v18+)

Routing: React Router v6

Build Tool: Vite

Backend Simulation: JSON Server

Testing: Vitest and React Testing Library

Project Structure
The application follows a hierarchical routing structure:

/: Home page

/about: About section

/directors: Main director container and list

/directors/new: Form to add a new director

/directors/:id: Individual director details

/directors/:id/movies/new: Form to add a movie to a specific director

/directors/:id/movies/:movieId: Detailed movie view

Setup and Installation
Clone the repository and navigate to the project directory.

Install dependencies:

Bash
npm install
Install React Router:

Bash
npm install react-router-dom@6
Running the Application
This project requires both the frontend development server and the mock backend to be running simultaneously.

Start the JSON Server:

Bash
npm run server
The server typically runs on http://localhost:4000.

Start the Development Server:

Bash
npm run dev
Testing
To ensure all routing logic and component rendering meet the required criteria, run the test suite:

Bash
npm run test