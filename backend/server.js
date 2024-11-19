// const express = require('express'); // Framework for building web applications
// const app = express(); // Create an Express app instance
// const port = process.env.PORT || 3004; // Port for the server, default to 3004 if not specified
// const path = require('path'); // Module to work with file paths
// const { open } = require('sqlite'); // SQLite module for database interaction
// const sqlite3 = require('sqlite3'); // SQLite driver
// const dbPath = path.join(__dirname, "./database.db"); // Path to the database file
// const cors = require('cors'); // Middleware to enable CORS

// // Middleware to parse JSON and enable CORS
// app.use(express.json());


// const corsOptions = {
//     origin: 'https://oscowl-todo.vercel.app',  // Correctly set the origin without a trailing slash
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     allowedHeaders: ['Content-Type', 'Authorization'],
//     credentials: true, // Include credentials like cookies if needed
//   };

// app.use(cors(corsOptions))

// // Database connection variable
// let db = null;

// // Import UUID generator for unique IDs and bcrypt for hashing passwords
// const { v4: uuidv4 } = require('uuid');
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken'); // JWT for authentication tokens
// const { stat } = require('fs'); // Module to get file status (not used in the code)

// // Function to initialize the database and start the server
// const initializeDBAndServer = async () => {
//     try {
//         db = await open({
//             filename: dbPath,
//             driver: sqlite3.Database
//         });
//         app.listen(port, () => {
//             console.log(`Server is running at http://localhost:${port}/`);
//         });
//     } catch (error) {
//         console.log(`DB ERROR: ${error.message}`);
//         process.exit(1); // Exit the process if database connection fails
//     }
// };

// initializeDBAndServer(); // Call function to start the server

// // Basic route to check server status
// app.get("/", (request, response) => {
//     response.send('Todos backend testing is working... go for different routes');
// });

// // Route for user signup
// app.post("/signup/", async (request, response) => {
//     const { username, email, password } = request.body;
//     const hashedPassword = await bcrypt.hash(password, 10); // Hash the password
//     try {
//         // Check if a user with the same username already exists
//         const dbUser = await db.get(`SELECT username FROM users WHERE username = '${username}';`);
//         if (dbUser) {
//             response.status(400).send({ message: "User already exists." });
//         } else {
//             const userId = uuidv4(); // Generate unique ID
//             const currentDate = new Date().toLocaleString(); // Get current date and time
//             // Insert the new user into the database
//             await db.run(`INSERT INTO users(user_id, username, email, password, created_at) VALUES('${userId}','${username}','${email}','${hashedPassword}','${currentDate}');`);
//             response.status(201).send({ message: "User created successfully." });
//         }
//     } catch (error) {
//         console.log(`DB Error: ${error.message}`);
//         response.status(500).send({ message: "Internal server error." });
//     }
// });

// // Route for user login
// app.post("/login/", async (request, response) => {
//     const { username, password } = request.body;
//     try {
//         const dbUser = `SELECT * FROM users WHERE username='${username}';`;
//         const checkingUserExists = await db.get(dbUser);
//         if (checkingUserExists === undefined) {
//             response.status(401).send({ message: 'User Not Found...' });
//         } else {
//             // Check if the provided password matches the stored hash
//             const isValidPassword = await bcrypt.compare(password, checkingUserExists.password);
//             if (isValidPassword === true) {
//                 const payload = { username: username }; // Payload for JWT
//                 const jwtToken = jwt.sign(payload, 'my_secret_jwt_token'); // Generate JWT token
//                 response.status(200).send({ jwtToken });
//             } else {
//                 response.status(400).send("Invalid Password");
//             }
//         }
//     } catch (error) {
//         response.status(500).send({ message: 'Internal Server Error' });
//     }
// });

// // Middleware for JWT token verification
// const middleWare = (request, response, next) => {
//     let jwtToken;
//     const authHeader = request.headers['authorization'];
//     if (authHeader) {
//         jwtToken = authHeader.split(' ')[1]; // Extract token from header
//     }
//     if (jwtToken) {
//         jwt.verify(jwtToken, 'my_secret_jwt_token', async (error, payload) => {
//             if (error) {
//                 response.status(401).send({ message: 'Invalid Token' });
//             } else {
//                 request.username = payload.username; // Attach username to request object
//                 next();
//             }
//         });
//     } else {
//         response.status(401).send({ message: 'Invalid Token' });
//     }
// };

// // Route to get all users (protected by middleware)
// app.get('/users/', middleWare, async (request, response) => {
//     const query = `SELECT * FROM users;`;
//     const users = await db.all(query);
//     response.status(200).send(users);
// });

// // Function to get all todos for a user
// const getAllTodosForUser = async (user_id) => {
//     const query = `SELECT * FROM todos WHERE user_id = '${user_id}';`;
//     return await db.all(query);
// };

// // Route to create a new todo (protected by middleware)
// app.post('/todos/', middleWare, async (request, response) => {
//     const userQuery = `SELECT * FROM users WHERE username = '${request.username}';`;
//     const user = await db.get(userQuery);

//     if (user) {
//         const { title, description } = request.body;
//         const currentUploadTime = new Date().toLocaleString();
//         const todo_id = uuidv4(); // Generate unique ID for the todo
//         const insertTodoQuery = `
//             INSERT INTO todos (todo_id, user_id, title, description, created_at) 
//             VALUES ('${todo_id}', '${user.user_id}', '${title}', '${description}', '${currentUploadTime}');
//         `;
//         await db.run(insertTodoQuery);

//         const updatedTodos = await getAllTodosForUser(user.user_id);
//         response.status(200).send({
//             message: 'New todo added successfully.',
//             todos: updatedTodos
//         });
//     }
// });

// // Route to delete a todo (protected by middleware)
// app.delete("/todos/", middleWare, async (request, response) => {
//     const { todoId } = request.body;
//     const userQuery = `SELECT * FROM users WHERE username = '${request.username}';`;
//     const user = await db.get(userQuery);

//     if (user) {
//         const deleteTodoQuery = `DELETE FROM todos WHERE todo_id = '${todoId}' AND user_id = '${user.user_id}';`;
//         await db.run(deleteTodoQuery);
//         const updatedTodos = await getAllTodosForUser(user.user_id);
//         response.status(200).send({
//             message: 'Todo deleted successfully.',
//             todos: updatedTodos
//         });
//     }
// });

// // Route to update a todo (protected by middleware)
// app.put('/todos/', middleWare, async (request, response) => {
//     const userQuery = `SELECT * FROM users WHERE username = '${request.username}';`;
//     const user = await db.get(userQuery);

//     if (user) {
//         const { todoId, title, description, status } = request.body;
//         const todoQuery = `SELECT * FROM todos WHERE todo_id = '${todoId}' AND user_id = '${user.user_id}';`;
//         const existingTodo = await db.get(todoQuery);

//         if (existingTodo) {
//             // Update fields only if provided, otherwise keep existing values
//             const updatedTitle = title !== undefined ? title : existingTodo.title;
//             const updatedDescription = description !== undefined ? description : existingTodo.description;
//             const updatedStatus = status !== undefined ? status : existingTodo.status;
//             const currentDate = new Date().toLocaleString();
//             const updateTodoQuery = `
//                 UPDATE todos 
//                 SET title = '${updatedTitle}', description = '${updatedDescription}', created_at = '${currentDate}', status = '${updatedStatus}'
//                 WHERE todo_id = '${todoId}' AND user_id = '${user.user_id}';
//             `;
//             await db.run(updateTodoQuery);

//             const updatedTodos = await getAllTodosForUser(user.user_id);
//             response.status(200).send({
//                 message: 'Todo updated successfully.',
//                 todos: updatedTodos
//             });
//         } else {
//             response.status(404).send({ message: 'Todo not found.' });
//         }
//     } else {
//         response.status(401).send({ message: 'Unauthorized user.' });
//     }
// });

// // Route to get all todos for the logged-in user (protected by middleware)
// app.get('/todos/', middleWare, async (request, response) => {
//     const userQuery = `SELECT * FROM users WHERE username = '${request.username}';`;
//     const user = await db.get(userQuery);

//     if (user) {
//         const todos = await getAllTodosForUser(user.user_id);
//         response.status(200).send({ todos });
//     } else {
//         response.status(401).send({ message: 'Unauthorized user.' });
//     }
// });




// // Route to update the profile of the logged-in user (protected by middleware)

// app.get('/profile',middleWare,async(request,response)=>{

//     const userQuery = `SELECT * FROM users WHERE username = '${request.username}';`;
//     const user = await db.get(userQuery);
//     if(user){
//         response.status(200).send(user)
//     }else{
//         response.status(401).send({message:'Unauthorized user.'})
//     }
// })

// app.put('/profile/', middleWare, async (request, response) => {
//     const { username, email, password } = request.body;

//     try {
//         // Use parameterized query to get user securely
//         const userQuery = `SELECT * FROM users WHERE username = ?`;
//         const user = await db.get(userQuery, [request.username]);

//         if (user) {
//             let hashedPassword;
//             if(password!==undefined){
//                 hashedPassword = await bcrypt.hash(password, 10);
//             }
//             const upDatedUserName = username !== undefined ? username : user.username;
//             const upDatedEmail = email !== undefined ? email : user.email;
//             const upDatedPassword = password !== undefined ? hashedPassword : user.password;
//             const currentDate = new Date().toLocaleString();
//             const updateProfileQuery=`
//                 UPDATE users
//                 SET username = '${upDatedUserName}', email = '${upDatedEmail}', password='${upDatedPassword}', created_at='${currentDate}'
//                 WHERE user_id = '${user.user_id}';
//             `;
//             await db.run(updateProfileQuery);
//             response.status(200).json({ message: 'Profile updated successfully' });
//         } else {
//             response.status(404).send({ message: 'User not found.' });
//         }
//     } catch (error) {
//         response.status(500).json({ error: 'Failed to update profile', details: error.message });
//     }
// });





























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
                return response.status(409).json({ error: "Email already in use by another user." });
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
