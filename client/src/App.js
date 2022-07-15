import Topbar from 'Components/Topbar';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import BlogRoutes from 'Routes/BlogRoutes';
import UserRoutes from 'Routes/UserRoutes';
import './App.css';
import AuthRoutes from './Routes/AuthRoutes';
function App() {
  return (
    <BrowserRouter>
      <Topbar />
      <AuthRoutes></AuthRoutes>
      <BlogRoutes></BlogRoutes>
      <UserRoutes></UserRoutes>
    </BrowserRouter>
  );
}

export default App;
