import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Assuming Link is from react-router-dom

interface ResumeTemplate {
  id: number;
  name: string;
  url: string; // Corrected typo in the interface
}

const ChooseTemplate: React.FC = () => {
  const [templateId, setTemplateId] = useState<number | null>(null); // Corrected type to number or null
  const [templates, setTemplates] = useState<ResumeTemplate[]>([]); // Corrected type to ResumeTemplate[]

  useEffect(() => {
    const fetchTemplate = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/core/resume-templates/');
        setTemplates(response.data);
       
      } catch (error) {
        console.log(error)
      }
    }
     
    fetchTemplate();
  }, []);

  return (
    <div>
      <h1>Hello World</h1>

      <ul>
        {templates.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ChooseTemplate;
