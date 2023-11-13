import React, { useState } from 'react';
import axios from 'axios';
URL = 'http://localhost:3001/users/getdetails';

const App = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [userDetails, setUserDetails] = useState(null);

  const handleCheck = async () => {
    try {
      const response = await axios.post(URL, {
        username,
        password,
      });

      setUserDetails(response.data);
      setError('');
    } catch (err) {
      setUserDetails(null);
      setError('Invalid credentials. Please try again.');
    }
  };

  const darkTheme = {
    container: {
      width: '100%',
      height: '800px',
      margin: 'auto',
      padding: '20px',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#222',
      color: '#ffff',
    },
    userDetails: {
      marginTop: '20px',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    header: {
      textAlign: 'center',
      fontSize: '24px',
      marginBottom: '20px',
    },
    inputContainer: {
      marginBottom: '15px',
      width: '400px ',
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'column',
      margin: 'auto',
    },
    label: {
      display: 'block',
      marginBottom: '5px',
    },
    input: {
      width: '100%',
      padding: '8px',
      fontSize: '16px',
      backgroundColor: '#333',
      color: '#fff',
      border: '1px solid #555',
    },
    buttonContainer: {
      margin: '15px 0',
      display: 'flex',
      justifyContent: 'center',
    },
    button: {
      backgroundColor: '#4CAF50',
      color: 'white',
      padding: '10px',
      cursor: 'pointer',
      border: 'none',
      width: '200px',
    },
    errorContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '50px', 
    },
    error: {
      color: 'red',
    },
    table: {
      width: '80%',
      margin: 'auto',
      borderCollapse: 'collapse',
      marginTop: '20px',
      border: '1px solid #555',
      alignItems: 'center',
      color: '#fff',
    },
    th: {
      background: '#4CAF50',
      color: 'white',
      padding: '12px',
      textAlign: 'left',
    },
    td: {
      border: '1px solid #555',
      padding: '12px',
      textAlign: 'left',
    },
    oddRow: {
      background: '#333',
    },
    evenRow: {
      background: '#444',
    },
  };

  return (
    <div style={darkTheme.container}>
      <h1 style={darkTheme.header}>SQL INJECTION - LAB 02</h1>
      <h2 style={darkTheme.header}>2019/E/094</h2>
      <div style={darkTheme.inputContainer}>
        <label style={darkTheme.label}>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={darkTheme.input}
        />
      </div>
      <div style={darkTheme.inputContainer}>
        <label style={darkTheme.label}>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={darkTheme.input}
        />
      </div>
      <div style={darkTheme.buttonContainer}>
        <button style={darkTheme.button} onClick={handleCheck}>
          Get User Details
        </button>
      </div>
      {error && (
        <div style={darkTheme.errorContainer}>
          <p style={darkTheme.error}>{error}</p>
        </div>
      )}
      {userDetails && (
        <div style={darkTheme.userDetails}>
          <h2>User Details</h2>
          <table style={darkTheme.table}>
            <thead>
              <tr>
                <th style={darkTheme.th}>ID</th>
                <th style={darkTheme.th}>Name</th>
                <th style={darkTheme.th}>Username</th>
                <th style={darkTheme.th}>Mobile Number</th>
                <th style={darkTheme.th}>Password</th>
                <th style={darkTheme.th}>Gender</th>
              </tr>
            </thead>
            <tbody>
              {userDetails.map((user, index) => (
                <tr key={user.id} style={index % 2 === 0 ? darkTheme.evenRow : darkTheme.oddRow}>
                  <td style={darkTheme.td}>{user.id}</td>
                  <td style={darkTheme.td}>{user.name}</td>
                  <td style={darkTheme.td}>{user.username}</td>
                  <td style={darkTheme.td}>{user.mobile_no}</td>
                  <td style={darkTheme.td}>{user.password}</td>
                  <td style={darkTheme.td}>{user.gender}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default App;