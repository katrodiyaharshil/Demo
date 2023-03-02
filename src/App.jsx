import React from 'react';
import './App.css';
import {Routes , Route } from 'react-router-dom';
import Home from './Home';
import Service from './Service';
import About from './About';
import Contact from './Contact';
import Error from './Error';
import Header from './Header';


const App = () =>{
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/service" element={<Service/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
    </>
  )
}


export default App;
