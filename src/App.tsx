//import { useState } from 'react'
import ResumeForm from './components/data.tsx';
import Homepage from './components/home.tsx';
import SignUp from './components/signup.tsx';
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/resume" element={<ResumeForm />} />
          <Route path='/signup' element={<SignUp />} />
        </Routes>
      </div>
    </Router>
    
  
   
  )
}

export default App
