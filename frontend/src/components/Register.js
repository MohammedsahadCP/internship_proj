import React, { useState } from 'react';
import api from '../services/api';
import "./Register.css";

function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('user');
  const [message, setMessage] = useState('');

const handleRegister = async () => {
  try {
    const res = await api.post('accounts/register/', { 
      username, 
      email, 
      password, 
      role 
    });
    setMessage('Registration successful!');
  } catch (err) {
    if (err.response && err.response.data) {
      setMessage(JSON.stringify(err.response.data));
    } else {
      setMessage('Error registering');
    }
  }
};


  return (
    <div className='reg-container'>
      <h2>Register</h2>
      <label htmlFor='username'>Username  </label>
      <input placeholder="Enter Username" value={username} onChange={e => setUsername(e.target.value)} /><br />
      <label htmlFor='email'>Email </label>
      <input placeholder="Enter Email" value={email} onChange={e => setEmail(e.target.value)} /><br />
      <label htmlFor='password'>Password </label>
      <input placeholder="Enter Password" type="password" value={password} onChange={e => setPassword(e.target.value)} /><br />
      <label htmlFor='role'>Role </label>
      <select value={role} onChange={e => setRole(e.target.value)}>
        <option value="user">User</option>
        <option value="admin">Admin</option>
      </select>
      <br /><br/>
      <button onClick={handleRegister}>Register</button>
      <p>{message}</p>
    </div>
  );
}

export default Register;
