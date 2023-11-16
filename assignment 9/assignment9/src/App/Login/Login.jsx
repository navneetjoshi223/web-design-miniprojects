import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "./Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [error, setError] = useState();
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    if (username.trim() === "") {
      setUsernameError("Please enter a username.");
    } else if (password.trim() === "") {
      setPasswordError("Please enter a password.");
    } else {
      // Perform login logic here
      try {
        const apiOptions = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: username,
                password: password
            })
        };

        const response = await fetch('http://localhost:3000/api/user/findUserForLogin', apiOptions);
        const data =  await response.json();
        
        if(response.status === 200) {
          navigate('/home');
        } else {
          setError('Invalid username or password.');
        }
      } catch (error) {
        console.error('API request failed', error);
        setError('An error occurred during login.');
      }

      // Reset error state
      setUsernameError("");
      setPasswordError("");
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      {usernameError && <p className="error-message">{usernameError}</p>}
      <div className="input-group">
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      {passwordError && <p className="error-message">{passwordError}</p>}
      <div className="input-group">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      {error && <p className="error-message">{error}</p>}
      <button onClick={(event) => handleLogin(event)}>Login</button>
    </div>
  );
};

export default Login;
