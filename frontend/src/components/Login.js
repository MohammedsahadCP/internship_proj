import React, { useState } from 'react';
import api from '../services/api';
import "./Login.css";

function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = async () => {
    try {
      const res = await api.post('accounts/login/', { username, password });
      localStorage.setItem('access_token', res.data.access);
      onLogin();  
    } catch (err) {
      setMessage('Invalid credentials');
    }
  };

  return (
    <div className='login-container'>
      <h2>Login</h2>
      <label htmlFor='username'>Username  </label>
      <input placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} /><br />
      <label htmlFor='Password'>Password  </label>
      <input placeholder="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} /><br />
      <button onClick={handleLogin}>Login</button>
      <p>{message}</p>
    </div>
  );
}

export default Login;
