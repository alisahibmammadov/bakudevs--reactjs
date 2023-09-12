import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './App.css';
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
