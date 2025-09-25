import React, { useState } from 'react';
import Register from './components/Register';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    !!localStorage.getItem('access_token')
  );
  const [view, setView] = useState('login'); // default page

  const handleLogout = () => {
    localStorage.removeItem('access_token');
    setIsLoggedIn(false);
    setView('login');
  };

  return (
    <div>
      <h1>Internship Project</h1>
      {isLoggedIn ? (
        <>
          <button onClick={handleLogout}>Logout</button>
          <Dashboard />
        </>
      ) : (
        <>
          {view === 'login' && <Login onLogin={() => setIsLoggedIn(true)} />}
          {view === 'register' && <Register />}
          <br />
          <button onClick={() => setView('login')}>Go to Login</button>
          <button onClick={() => setView('register')}>Go to Register</button>
        </>
      )}
    </div>
  );
}

export default App;
