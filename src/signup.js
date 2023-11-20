import React, { useState } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';
const SignUp = () => {
    const [name, setName] = useState('');
  const [email, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const user = { name,email, password };

      // Use axios.post for a POST request
      const response = await axios.post("http://localhost:3000/signUp", user);

      console.log(response.data);  // Assuming the server responds with user data or a token
    } catch (error) {
      console.error(error);
    }
    console.log('name:',name);
    console.log('Username:', email);
    console.log('Password:', password);
  };

  return (
    <div>
      <h2>SignUp</h2>
      <form onSubmit={handleSubmit}>
      <label>
          Name:
          <input type="name" value={name} onChange={handleNameChange} />
        </label>
        <br />
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
        <button type="submit">SignUp</button>
        <Link to={'/login'}><button type='button'>Login</button></Link>
      </form>
    </div>
  );
};

export default SignUp;
