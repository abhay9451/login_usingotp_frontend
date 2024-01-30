import React from 'react';
import './App.css';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
//components
import Header from './components/Header';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';

const App =  () => {
  return (
   <div>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route exact path= "/" Component={Home}/>
      <Route exact path = "/signup" Component={Signup}/>
      <Route exact path = "/login"Component={Login}/>
    </Routes>
    </BrowserRouter>



   </div>
      
   
  );
}

export default App;
