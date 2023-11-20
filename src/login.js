import React, { useState } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';
const Login = () => {
  const [email, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const user = { email, password };

      // Use axios.post for a POST request
      const response = await axios.post("http://localhost:3000/login", user);
      if(response.data==="login success"){
        alert("Logged in succesfully")
      }
      else{
        alert("In correct email or password")
      }
      console.log(response.data);  // Assuming the server responds with user data or a token
    } catch (error) {
      console.error(error);
    }

    console.log('Username:', email);
    console.log('Password:', password);
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input type="email" value={email} onChange={handleUsernameChange} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={handlePasswordChange} />
        </label>
        <br />
        <button type="submit">Login</button>
        <Link to={'/signup'}><button type='button'>Sign Up</button></Link>
      </form>
    </div>
  );
};

export default Login;

