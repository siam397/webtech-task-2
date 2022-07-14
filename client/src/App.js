import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import AuthRoutes from './Routes/AuthRoutes';
function App() {
  return (
    <BrowserRouter>
      <AuthRoutes></AuthRoutes>
    </BrowserRouter>
  );
}

export default App;
