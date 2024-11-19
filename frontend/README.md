### Employee Management System - Frontend
This is the frontend of the Employee Management System built using React.js. The frontend communicates with the backend API to manage employee records. It includes features to add, edit, delete, and display employee details.

### Features
Display Employee Records: View a table of employee details including auto-incremented user IDs (simulated on the frontend).
Add New Employee: Form to add a new employee record to the system.
Edit Employee Details: Ability to edit existing employee records.
Delete Employee: Option to delete an employee from the list.
Responsive UI: The application is fully responsive and looks great on desktop, tablet, and mobile screens.
Error Handling: Display appropriate error messages, such as when an email is already in use during updates.



### Technologies Used
React.js: For building the user interface.
Styled Components: For styling the application.
JavaScript (ES6+): For logic and event handling.
Fetch API: To communicate with the backend API.


### How to Use

# Add New User:

Click the Add User button.
Fill out the form with the employee's details: First Name, Last Name, Email, and Department.
Click Submit to add the employee to the list.

# Edit User:

Click the Edit button beside any employee's record in the table.
Update the details and click Update to save the changes.

# Delete User:

Click the Delete button beside any employee's record to delete it from the system.
# View Users:

Users records will be displayed in a table, including their User ID, First Name, Last Name, Email, and Department.
Folder Structure
plaintext
Copy code
frontend/
│
├── public/                # Public assets (index.html, images, etc.)
├── src/                   # Source code for the React app
│   ├── components/        # React components (Header, Table, Modals, etc.)
│   ├── styles/            # Styled components or CSS files
│   ├── App.js             # Main component, containing app logic
│   ├── index.js           # Entry point for React
│   └── api.js             # API functions for communicating with the backend
└── package.json           # Dependencies and scripts for