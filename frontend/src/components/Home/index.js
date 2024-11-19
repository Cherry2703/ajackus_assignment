import React, { useState, useEffect } from 'react';
import {
  Container, Heading, AddUserButton, TableContainer, Table, TableRow, TableHeader,
  TableData, EditButton, DeleteButton, Modal, ModalContent, ModalTitle, Input, ModalActions,
  CancelButton, SubmitButton, ErrorText
} from './styles.js';  // Importing from the styles.js file

const Home = () => {
  const [users, setUsers] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [newUser, setNewUser] = useState({ firstName: '', lastName: '', email: '', department: '' });
  const [editUser, setEditUser] = useState({ userId: '', firstName: '', lastName: '', department: '' });
  const [error, setError] = useState('');

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const response = await fetch('https://ajackus-assignment.onrender.com/users');
    const data = await response.json();
    setUsers(data);
  };

  const handleAddUser = async () => {
    console.log(newUser)
    const response = await fetch('https://ajackus-assignment.onrender.com/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newUser),
    });

    if (response.ok) {
      setNewUser({ firstName: '', lastName: '', email: '', department: '' });
      setShowAddModal(false);
      fetchUsers();
    }
  };

  const handleDeleteUser = async (id) => {
    const response = await fetch(`https://ajackus-assignment.onrender.com/users`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userId: id }),
    });

    if (response.ok) {
      fetchUsers();
    }
  };

  const handleEditUser = (user) => {
    setEditUser(user);
    setShowEditModal(true);
  };


const handleUpdateUser = async () => {

    console.log(editUser);
    

    // Ensure all fields are filled before proceeding
    if (!editUser.firstName || !editUser.lastName || !editUser.department) {
      setError('All fields are required.');
      return;
    }
  
   
    try {
      const response = await fetch('https://ajackus-assignment.onrender.com/users', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(editUser), // Pass the whole editUser object if structured correctly
      });
  
      // Check if the response is okay
      
        // Parse the response only if it contains valid JSON
        const data = await response.json();
        console.log('Update response:', data);
  
        fetchUsers(); // Refresh the users list
        setShowEditModal(false); // Close the modal
        setError(''); // Clear any existing error
      
    } catch (err) {
      console.error(err);
      setError('An error occurred while updating the user. Please try again later.');
    }
  };
  




  return (
    <Container>
      <Heading>Employee Management Dashboard</Heading>
      <AddUserButton onClick={() => setShowAddModal(true)}>Add User</AddUserButton>

      {error && <ErrorText>{error}</ErrorText>}

      <TableContainer>
        <Table>
          <thead>
            <TableRow>
              <TableHeader>User ID</TableHeader>
              <TableHeader>First Name</TableHeader>
              <TableHeader>Last Name</TableHeader>
              <TableHeader>Email</TableHeader>
              <TableHeader>Department</TableHeader>
              <TableHeader>Actions</TableHeader>
            </TableRow>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <TableRow key={user.userId}>
                <TableData>{index + 1}</TableData> {/* Display incremented userId */}
                <TableData>{user.firstName}</TableData>
                <TableData>{user.lastName}</TableData>
                <TableData>{user.email}</TableData>
                <TableData>{user.department}</TableData>
                <TableData>
                  <EditButton onClick={() => handleEditUser(user)}>Edit</EditButton>
                  <DeleteButton onClick={() => handleDeleteUser(user.userId)}>Delete</DeleteButton>
                </TableData>
              </TableRow>
            ))}
          </tbody>
        </Table>
      </TableContainer>

      {showAddModal && (
        <Modal>
          <ModalContent>
            <ModalTitle>Add New User</ModalTitle>
            <Input
              type="text"
              placeholder="First Name"
              value={newUser.firstName}
              onChange={(e) => setNewUser({ ...newUser, firstName: e.target.value })}
            />
            <Input
              type="text"
              placeholder="Last Name"
              value={newUser.lastName}
              onChange={(e) => setNewUser({ ...newUser, lastName: e.target.value })}
            />
            <Input
              type="email"
              placeholder="Email"
              value={newUser.email}
              onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
            />
            <Input
              type="text"
              placeholder="Department"
              value={newUser.department}
              onChange={(e) => setNewUser({ ...newUser, department: e.target.value })}
            />
            <ModalActions>
              <CancelButton onClick={() => setShowAddModal(false)}>Cancel</CancelButton>
              <SubmitButton onClick={handleAddUser}>Submit</SubmitButton>
            </ModalActions>
          </ModalContent>
        </Modal>
      )}

      {showEditModal && (
        <Modal>
          <ModalContent>
            <ModalTitle>Edit User</ModalTitle>
            <Input
              type="text"
              placeholder="First Name"
              value={editUser.firstName}
              onChange={(e) => setEditUser({ ...editUser, firstName: e.target.value })}
            />
            <Input
              type="text"
              placeholder="Last Name"
              value={editUser.lastName}
              onChange={(e) => setEditUser({ ...editUser, lastName: e.target.value })}
            />
            <Input
              type="email"
              placeholder="Email"
              value={editUser.email}
              disabled
            />
            <Input
              type="text"
              placeholder="Department"
              value={editUser.department}
              onChange={(e) => setEditUser({ ...editUser, department: e.target.value })}
            />
            <ModalActions>
              <CancelButton onClick={() => setShowEditModal(false)}>Cancel</CancelButton>
              <SubmitButton onClick={handleUpdateUser}>Update</SubmitButton>
            </ModalActions>
          </ModalContent>
        </Modal>
      )}
    </Container>
  );
};

export default Home;









