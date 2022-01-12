import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./Home";
import Checkout from "./Checkout";
import Login from './Login';
import Footer from './Footer';


function App() {

     
  return (
    <BrowserRouter>
      <Routes>
      <Route path="checkout/" element= {<Checkout/>}/>
        <Route path="login/" element={<Login/>} />
        <Route path="/"  element={<Home />}/>
        <Route path="/footer"  element={<Footer />}/>
        </Routes>
        <Footer/>
       </BrowserRouter>
  
  );
}

export default App;
