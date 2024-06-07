// src/App.js

import React, { useState } from 'react';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);

  return (
    <div className="App">
      {!isLoggedIn && !isRegistering && (
        <>
          <LoginForm onLogin={setIsLoggedIn} />
          <button onClick={() => setIsRegistering(true)} className="btn btn-link mt-3">
            Register
          </button>
        </>
      )}
      {!isLoggedIn && isRegistering && (
        <>
          <RegisterForm onRegister={() => setIsRegistering(false)} />
          <button onClick={() => setIsRegistering(false)} className="btn btn-link mt-3">
            Back to Login
          </button>
        </>
      )}
      {isLoggedIn && <p className="text-center mt-5">Welcome, you are logged in!</p>}
    </div>
  );
}

export default App;
