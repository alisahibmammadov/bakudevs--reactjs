import React from 'react'
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
