import { useState } from "react";
import React from "react";
import axios from 'axios';

const Data = () => {
  const [resumeData, setResumeData] = useState ([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(false);

    try {
      
      const response = await axios.post('http://127.0.0.1:8000/core/personal-information/', resumeData, {
        headers: {
          //Authorization: `Token ${token}`,
          'Content-Type': 'application/json',
        },
      });
      setResumeData(response.data);
    } catch (err){
      setError

    }
  }
  return (
    
    <>
      
    </>
  )
}

export default Data;