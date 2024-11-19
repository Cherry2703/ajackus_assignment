const express = require('express'); // For creating the Express application
const app = express();
const path = require('path'); // For working with file and directory paths
const { open } = require('sqlite'); // To interact with SQLite database
const sqlite3 = require('sqlite3'); // SQLite driver
const cors = require('cors'); // Middleware for enabling CORS (Cross-Origin Resource Sharing)
const { v4: uuidv4 } = require('uuid'); // To generate unique IDs for users

// Setting the port and database path
const port = process.env.port || 8080; // Default port 8080, or the port from the environment
const dbPath = path.join(__dirname, 'database.db'); // Path to the SQLite database

let db; // To store the database connection

// Middleware setup to handle JSON requests and enable CORS
app.use(express.json());
app.use(cors());

// Initialize database connection and start the server
const initializeDBAndServer = async () => {
    try {
        // Open the SQLite database
        db = await open({
            filename: dbPath,
            driver: sqlite3.Database
        });

        // Start the server once the database is successfully connected
        app.listen(port, () => {
            console.log(`Server started at http://localhost:${port}`);
        });
    } catch (error) {
        // Log error and exit process if database connection fails
        console.log(`ERROR : ${error}`);
        process.exit(1);
    }
};

// Call the function to initialize DB and start server
initializeDBAndServer();

// Route to fetch all users
app.get('/users', async (request, response) => {
    try {
        // SQL query to fetch all users from the database
        const query = `SELECT * FROM users ORDER BY userId;`;
        const result = await db.all(query); // Execute the query and fetch all users
        response.status(200).send(result); // Send the result as response
    } catch (error) {
        // Handle errors if any during fetching data
        response.status(400).send(`Error : ${error}`);
    }
});

// Route to add a new user
app.post('/users', async (request, response) => {
    try {
        // Destructure the request body to get user details
        const { firstName, lastName, email, department } = request.body;

        // Check if the email already exists in the database
        const searchQuery = `SELECT * FROM users WHERE email = '${email}';`;
        const result = await db.get(searchQuery);

        // If user with the same email exists, return an error message
        if (result) {
            response.status(400).send(`User already exists with the EmailID. Please use a different EmailID.`);
        } else {
            // If email doesn't exist, create a new user
            const newUserId = uuidv4(); // Generate a unique user ID using uuid
            const query = `INSERT INTO users (userId, firstName, lastName, email, department)
                           VALUES('${newUserId}', '${firstName}', '${lastName}', '${email}', '${department}');`;
            await db.run(query); // Execute the insert query
            response.status(200).send('New User added successfully...');
        }
    } catch (error) {
        // Handle any errors during the add user process
        response.status(400).send(`Error : ${error}`);
    }
});

// Route to update an existing user
app.put('/users', async (request, response) => {
    try {
        // Destructure the request body to get user details
        const { userId, firstName, lastName, email, department } = request.body;

        // Fetch the existing user from the database using userId
        const getUser = `SELECT * FROM users WHERE userId = '${userId}';`;
        const result = await db.get(getUser);

        // If the user is not found, return an error
        if (!result) {
            return response.status(404).send('User not found.');
        }

        // Check if the email is provided and if it exists in the database
        if (email !== undefined) {
            const checkEmail = `SELECT * FROM users WHERE email = '${email}';`;
            const emailExists = await db.get(checkEmail);

            // If email is already in use, return an error
            if (emailExists) {
                return response.status(409).json({ error: "Email already in use..." });
            }
        }

        // Use existing values if the field is not provided in the request body
        const updatedFirstName = firstName || result.firstName;
        const updatedLastName = lastName || result.lastName;
        const updatedEmail = email || result.email;
        const updatedDepartment = department || result.department;

        // SQL query to update the user details in the database
        const query = `
            UPDATE users 
            SET firstName = '${updatedFirstName}', lastName = '${updatedLastName}', 
            email = '${updatedEmail}', department = '${updatedDepartment}' 
            WHERE userId = '${userId}';
        `;
        await db.run(query); // Execute the update query

        response.status(200).send('User Updated Successfully...');
    } catch (error) {
        // Handle unexpected errors during the update process
        response.status(500).json({ error: "An unexpected error occurred." });
    }
});

// Route to delete a user
app.delete('/users', async (request, response) => {
    try {
        // Extract userId from the request body
        const { userId } = request.body;

        // SQL query to delete the user by userId
        const query = `DELETE FROM users WHERE userId = '${userId}';`;
        await db.run(query); // Execute the delete query

        response.status(200).send('User Deleted Successfully...');
    } catch (error) {
        // Handle errors during the deletion process
        response.status(500).send(`An error occurred while deleting the user.`);
    }
});
