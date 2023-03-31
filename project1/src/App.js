import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import {Routes,Route} from 'react-router-dom';
import Aboutme from './Pages/Aboutme';
import Experience from './Pages/Experience';
import Hobbies from './Pages/Hobbies';
import Qualification from './Pages/Qualification';
import Skills from './Pages/Skills';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/Aboutme" element={<Aboutme/>}/>
        <Route path="/Experience" element={<Experience/>}/>
        <Route path="/Hobbies" element={<Hobbies/>}/>
        <Route path="/Qualification" element={<Qualification/>}/>
        <Route path="/Skills" element={<Skills/>}/>
              </Routes>
    </div>
  );
}

export default App;