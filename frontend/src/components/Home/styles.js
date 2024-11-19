import styled from 'styled-components';

// Container for the whole page
export const Container = styled.div`
  padding: 2rem;
  background-color: #f4f4f9;
  min-height: 100vh;
  font-family: 'Arial', sans-serif;
`;

// Heading of the page
export const Heading = styled.h1`
  font-size: 2.5rem;
  color: #333;
  text-align: center;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

// Button for adding a new user (Neumorphism style)
export const AddUserButton = styled.button`
  background: #f0f1f6;
  border: none;
  border-radius: 12px;
  padding: 15px 30px;
  font-size: 1rem;
  box-shadow: 8px 8px 15px rgba(176, 176, 176, 0.4), -8px -8px 15px rgba(255, 255, 255, 0.9);
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: #e0e3eb;
    box-shadow: 12px 12px 20px rgba(176, 176, 176, 0.4), -12px -12px 20px rgba(255, 255, 255, 0.9);
  }
  
  @media (max-width: 768px) {
    padding: 12px 25px;
  }
`;

// Table container styling
export const TableContainer = styled.div`
  margin-top: 2rem;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 8px 8px 20px rgba(176, 176, 176, 0.4), -8px -8px 20px rgba(255, 255, 255, 0.9);
  overflow: hidden;
  padding: 1rem;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

// Table styling
export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: left;
  border-radius: 10px;
`;

// Table rows and header styling
export const TableRow = styled.tr`
  border-bottom: 1px solid #ddd;
`;

// Table Header
export const TableHeader = styled.th`
  padding: 15px;
  font-weight: bold;
  color: #333;
  background-color: #f0f1f6;
  text-align: center;
`;

// Table Data (cells)
export const TableData = styled.td`
  padding: 15px;
  color: #555;
  text-align: center;
`;

// Edit and Delete button styling (Neumorphism style)
export const EditButton = styled.button`
  background: #f0f1f6;
  border: none;
  border-radius: 12px;
  padding: 8px 15px;
  margin-right: 5px;
  box-shadow: 4px 4px 8px rgba(176, 176, 176, 0.4), -4px -4px 8px rgba(255, 255, 255, 0.9);
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: #e0e3eb;
    box-shadow: 8px 8px 12px rgba(176, 176, 176, 0.4), -8px -8px 12px rgba(255, 255, 255, 0.9);
  }
`;

export const DeleteButton = styled.button`
  background: #f0f1f6;
  border: none;
  border-radius: 12px;
  padding: 8px 15px;
  box-shadow: 4px 4px 8px rgba(176, 176, 176, 0.4), -4px -4px 8px rgba(255, 255, 255, 0.9);
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: #e0e3eb;
    box-shadow: 8px 8px 12px rgba(176, 176, 176, 0.4), -8px -8px 12px rgba(255, 255, 255, 0.9);
  }
`;



// Modal Background Styling
export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.3);  // Soft backdrop with less opacity
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

// Modal Content Styling (Simple neumorphism effect)
export const ModalContent = styled.div`
  background-color: #fff;
  padding: 2rem;
  border-radius: 12px;
  width: 400px;
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.1), -4px -4px 8px rgba(255, 255, 255, 0.7); // Subtle shadow, minimal depth
  box-sizing: border-box;
  
  @media (max-width: 768px) {
    width: 90%;
    padding: 1.5rem;
  }
`;

// Modal Title Styling
export const ModalTitle = styled.h2`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 1rem;
  text-align: center;
`;

// Input Fields Styling (Simple neumorphism without glowing)
export const Input = styled.input`
  width: 100%;
  padding: 12px;
  margin-bottom: 16px;  // Slightly more space between inputs
  border-radius: 12px;
  border: 1px solid #ddd;  // Simple border
  font-size: 1rem;
  background: #f7f8fb;  // Light background for inputs
  box-shadow: inset 2px 2px 4px rgba(0, 0, 0, 0.05), inset -2px -2px 4px rgba(255, 255, 255, 0.7);  // Very subtle inner shadow

  &:focus {
    outline: none;
    background: #fff;  // Lighter background on focus
    box-shadow: inset 2px 2px 4px rgba(0, 0, 0, 0.1), inset -2px -2px 4px rgba(255, 255, 255, 0.6);  // Gentle shadow effect on focus
  }
`;




// Modal actions (buttons at the bottom)
export const ModalActions = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
`;

// Cancel and Submit buttons inside modal actions (Neumorphism style)
export const CancelButton = styled.button`
  background: #f0f1f6;
  border: none;
  border-radius: 12px;
  padding: 10px 20px;
  box-shadow: 4px 4px 8px rgba(176, 176, 176, 0.4), -4px -4px 8px rgba(255, 255, 255, 0.9);
  cursor: pointer;
  
  &:hover {
    background: #e0e3eb;
    box-shadow: 8px 8px 12px rgba(176, 176, 176, 0.4), -8px -8px 12px rgba(255, 255, 255, 0.9);
  }
`;

export const SubmitButton = styled.button`
  background: #f0f1f6;
  border: none;
  border-radius: 12px;
  padding: 10px 20px;
  box-shadow: 4px 4px 8px rgba(176, 176, 176, 0.4), -4px -4px 8px rgba(255, 255, 255, 0.9);
  cursor: pointer;
  
  &:hover {
    background: #e0e3eb;
    box-shadow: 8px 8px 12px rgba(176, 176, 176, 0.4), -8px -8px 12px rgba(255, 255, 255, 0.9);
  }
`;

// Error text display
export const ErrorText = styled.p`
  color: #dc3545;
  font-size: 1rem;
  margin-top: 1rem;
  text-align: center;
`;

// Media Queries for responsiveness
export const MediaStyles = styled.div`
  @media (max-width: 1024px) {
    // Tablet styles
    ${Heading} {
      font-size: 2.2rem;
    }

    ${AddUserButton} {
      padding: 12px 25px;
    }

    ${Table} {
      font-size: 0.9rem;
    }
  }

  @media (max-width: 768px) {
    // Mobile styles
    ${Heading} {
      font-size: 1.8rem;
    }

    ${TableRow}, ${TableHeader}, ${TableData} {
      font-size: 0.8rem;
    }

    ${AddUserButton} {
      width: 100%;
      padding: 10px;
    }

    ${ModalContent} {
      width: 90%;
      padding: 1rem;
    }
  }
`;













// import styled from 'styled-components';

// // Container for the whole page
// export const Container = styled.div`
//   padding: 2rem;
//   background-color: #f4f4f9;
//   min-height: 100vh;
//   font-family: 'Arial', sans-serif;
//   display: flex;
//   flex-direction: column;
//   justify-content: flex-start;
// `;

// // Heading of the page
// export const Heading = styled.h1`
//   font-size: 2.5rem;
//   color: #333;
//   text-align: center;
//   margin-bottom: 2rem;

//   @media (max-width: 768px) {
//     font-size: 2rem;
//   }
// `;

// // Button for adding a new user (Simple neumorphism style)
// export const AddUserButton = styled.button`
//   background: #f0f1f6;
//   border: none;
//   border-radius: 12px;
//   padding: 15px 30px;
//   font-size: 1rem;
//   box-shadow: 4px 4px 10px rgba(176, 176, 176, 0.4), -4px -4px 10px rgba(255, 255, 255, 0.9);
//   cursor: pointer;
//   transition: all 0.3s ease;

//   &:hover {
//     background: #e0e3eb;
//     box-shadow: 6px 6px 12px rgba(176, 176, 176, 0.4), -6px -6px 12px rgba(255, 255, 255, 0.9);
//   }

//   @media (max-width: 768px) {
//     padding: 12px 25px;
//   }
// `;

// // Table container styling (Allow user list to scroll but keep the table structure intact)
// export const TableContainer = styled.div`
//   margin-top: 2rem;
//   background-color: #fff;
//   border-radius: 8px;
//   box-shadow: 4px 4px 10px rgba(176, 176, 176, 0.4), -4px -4px 10px rgba(255, 255, 255, 0.9);
//   overflow: hidden;
//   padding: 1rem;
//   box-sizing: border-box;

//   @media (max-width: 768px) {
//     padding: 1rem;
//   }
// `;

// // Table styling
// export const Table = styled.table`
//   width: 100%;
//   border-collapse: collapse;
//   text-align: left;
//   border-radius: 10px;
//   margin: 0 auto;
// `;

// // Table rows and header styling
// export const TableRow = styled.tr`
//   border-bottom: 1px solid #ddd;
// `;

// // Table Header
// export const TableHeader = styled.th`
//   padding: 15px;
//   font-weight: bold;
//   color: #333;
//   background-color: #f0f1f6;
//   text-align: center;
// `;

// // Table Data (cells)
// export const TableData = styled.td`
//   padding: 15px;
//   color: #555;
//   text-align: center;
// `;

// // Edit and Delete button styling (Simple neumorphism style)
// export const EditButton = styled.button`
//   background: #f0f1f6;
//   border: none;
//   border-radius: 12px;
//   padding: 8px 15px;
//   margin-right: 5px;
//   box-shadow: 4px 4px 8px rgba(176, 176, 176, 0.4), -4px -4px 8px rgba(255, 255, 255, 0.9);
//   cursor: pointer;
//   transition: all 0.3s ease;

//   &:hover {
//     background: #e0e3eb;
//     box-shadow: 6px 6px 10px rgba(176, 176, 176, 0.4), -6px -6px 10px rgba(255, 255, 255, 0.9);
//   }
// `;

// export const DeleteButton = styled.button`
//   background: #f0f1f6;
//   border: none;
//   border-radius: 12px;
//   padding: 8px 15px;
//   box-shadow: 4px 4px 8px rgba(176, 176, 176, 0.4), -4px -4px 8px rgba(255, 255, 255, 0.9);
//   cursor: pointer;
//   transition: all 0.3s ease;

//   &:hover {
//     background: #e0e3eb;
//     box-shadow: 6px 6px 10px rgba(176, 176, 176, 0.4), -6px -6px 10px rgba(255, 255, 255, 0.9);
//   }
// `;

// // Modal styling (Simple neumorphism)
// export const Modal = styled.div`
//   position: fixed;
//   top: 0;
//   left: 0;
//   right: 0;
//   bottom: 0;
//   background-color: rgba(0, 0, 0, 0.3);
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   z-index: 999;
// `;

// // Modal content styling (Simple neumorphism style)
// export const ModalContent = styled.div`
//   background-color: #fff;
//   padding: 2rem;
//   border-radius: 12px;
//   width: 400px;
//   box-shadow: 4px 4px 10px rgba(176, 176, 176, 0.4), -4px -4px 10px rgba(255, 255, 255, 0.9);
//   box-sizing: border-box;

//   @media (max-width: 768px) {
//     width: 90%;
//     padding: 1.5rem;
//   }
// `;

// // Modal title styling
// export const ModalTitle = styled.h2`
//   font-size: 1.5rem;
//   color: #333;
//   margin-bottom: 1rem;
//   text-align: center;
// `;

// // Input fields inside the modal (Simple neumorphism style)
// export const Input = styled.input`
//   width: 100%;
//   padding: 10px;
//   margin-bottom: 15px;
//   border-radius: 12px;
//   border: 1px solid #ddd;
//   font-size: 1rem;
//   background: #f0f1f6;
//   box-shadow: inset 4px 4px 6px rgba(176, 176, 176, 0.4), inset -4px -4px 6px rgba(255, 255, 255, 0.9);
//   transition: all 0.3s ease;

//   &:focus {
//     outline: none;
//     background: #e0e3eb;
//     box-shadow: inset 6px 6px 8px rgba(176, 176, 176, 0.4), inset -6px -6px 8px rgba(255, 255, 255, 0.9);
//   }
// `;

// // Modal actions (buttons at the bottom)
// export const ModalActions = styled.div`
//   display: flex;
//   justify-content: space-between;
//   margin-top: 1rem;
// `;

// // Cancel and Submit buttons inside modal actions (Simple neumorphism style)
// export const CancelButton = styled.button`
//   background: #f0f1f6;
//   border: none;
//   border-radius: 12px;
//   padding: 10px 20px;
//   box-shadow: 4px 4px 8px rgba(176, 176, 176, 0.4), -4px -4px 8px rgba(255, 255, 255, 0.9);
//   cursor: pointer;

//   &:hover {
//     background: #e0e3eb;
//     box-shadow: 6px 6px 10px rgba(176, 176, 176, 0.4), -6px -6px 10px rgba(255, 255, 255, 0.9);
//   }
// `;

// export const SubmitButton = styled.button`
//   background: #f0f1f6;
//   border: none;
//   border-radius: 12px;
//   padding: 10px 20px;
//   box-shadow: 4px 4px 8px rgba(176, 176, 176, 0.4), -4px -4px 8px rgba(255, 255, 255, 0.9);
//   cursor: pointer;

//   &:hover {
//     background: #e0e3eb;
//     box-shadow: 6px 6px 10px rgba(176, 176, 176, 0.4), -6px -6px 10px rgba(255, 255, 255, 0.9);
//   }
// `;

// // Error text display
// export const ErrorText = styled.p`
//   color: #dc3545;
//   font-size: 0.9rem;
//   margin-top: 10px;
//   text-align: center;
// `;
