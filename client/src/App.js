import Topbar from 'Components/Topbar';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import BlogRoutes from 'Routes/BlogRoutes';
import './App.css';
import AuthRoutes from './Routes/AuthRoutes';
function App() {
  return (
    <BrowserRouter>
      <Topbar />
      <AuthRoutes></AuthRoutes>
      <BlogRoutes></BlogRoutes>
    </BrowserRouter>
  );
}

export default App;
