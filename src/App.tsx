//import { useState } from 'react'
import ResumeForm from './components/data.tsx';
import Homepage from './components/home.tsx';
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/resume" element={<ResumeForm />} />
          
        </Routes>
      </div>
    </Router>
    
  
   
  )
}

export default App
