import React, { useState } from 'react';
import Login from './Loginauth.js';
import MainLayout from './components/MainLayout';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />
      {isLoggedIn ? (
        <MainLayout LogOut={(e)=>{setIsLoggedIn(e)}} />
      ) : (
        <Login onLogin={(e) => setIsLoggedIn(e)} />
      )}
    </>
  );
}

export default App;
