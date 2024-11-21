Full Stack Application - Employee Management Dashboard
Overview
This is a full-stack Employee Management Dashboard with a React frontend and a Node.js + Express backend. The application allows adding, updating, and deleting employee records.

Project Structure
Frontend: React application
Backend: Node.js with Express.js and SQLite as the database
Prerequisites
Ensure you have the following installed on your system:

Node.js (LTS version recommended)
Git


Instructions
1. Clone the Repository
Clone this repository to your local machine:
git clone https://github.com/Cherry2703/ajackus_assignment.git
cd your-repo-name


Backend Setup
2. Navigate to the Backend Directory
cd backend

3. Install Dependencies
Install the required Node.js packages:
npm install



4. Setup Environment Variables
Create a .env file in the backend directory with the following content:

PORT=5000
DATABASE_URL=./database.sqlite

5. Run Migrations (If applicable)
Ensure the SQLite database is set up with the correct schema:
npx knex migrate:latest

7. Start the Backend Server
Start the backend server using nodemon or node:
npm start

# OR
npx nodemon server.js


7. Verify Backend is Running
Open a browser or use a tool like Postman to check the API:
http://localhost:5000/users


Frontend Setup
9. Navigate to the Frontend Directory
cd ../frontend

10. Install Dependencies
Install the required Node.js packages:
npm install


10. Setup Environment Variables (Optional)
Create a .env file in the frontend directory if you need to set environment variables (e.g., for API URL):
REACT_APP_API_URL=http://localhost:5000


12. Start the Frontend Server
Start the React development server:
npm start


12. Access the Frontend
Open your browser and navigate to:
http://localhost:3000


### Usage

Add User: Click on the "Add User" button, fill in the form, and submit.
Edit User: Click the "Edit" button next to a user record, modify the details, and save.
Delete User: Click the "Delete" button to remove a user from the list.
## Troubleshooting
If you encounter issues with CORS, ensure the backend server allows cross-origin requests.
Confirm that your API endpoints are correctly configured in the frontend .env file.
Scripts
Backend
Run Server: npm start
Run with Nodemon: npx nodemon server.js
Frontend
Start Dev Server: npm start
Build for Production: npm run build
Technologies Used
Frontend
React
Styled Components (or CSS Modules)
Backend
Node.js
Express.js
SQLite (Database)
