import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; 

interface ResumeTemplate {
  id: number;
  name: string;
  url: string; 
}

const ChooseTemplate: React.FC = () => {
  const [templateId, setTemplateId] = useState<number | null>(null); 
  const [templates, setTemplates] = useState<ResumeTemplate[]>([]); 

  useEffect(() => {
    const fetchTemplate = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/core/choose-resume-template/');
        setTemplates(response.data);
        console.log(response.data)
       
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
          <li key={item.id}>{item.content}</li>
          
        ))}
      </ul>
    </div>
  );
};

export default ChooseTemplate;

To allow users to choose a template and then trigger the creation of a resume based on that template, you can integrate the template selection functionality with the creation of the resume. Here's how you can modify the frontend to achieve this:

```jsx
// ResumeBuilder.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ResumeBuilder = () => {
  const [templates, setTemplates] = useState([]);
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [resumeData, setResumeData] = useState(null);

  useEffect(() => {
    fetchTemplates();
  }, []);

  const fetchTemplates = async () => {
    try {
      const response = await axios.get('/api/templates/');
      setTemplates(response.data);
    } catch (error) {
      console.error('Error fetching templates:', error);
    }
  };

  const handleTemplateSelect = (template) => {
    setSelectedTemplate(template);
    createResume(template.id);
  };

  const createResume = (templateId) => {
    axios.post('/api/create-resume/', { template_id: templateId })
      .then(response => {
        setResumeData(response.data);
      })
      .catch(error => {
        console.error('Error creating resume:', error);
      });
  };

  if (!templates.length) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Choose a Template</h2>
      <div className="template-thumbnails">
        {templates.map(template => (
          <div key={template.id} className="template-thumbnail" onClick={() => handleTemplateSelect(template)}>
            <img src={template.image} alt={template.title} />
            <span>{template.title}</span>
          </div>
        ))}
      </div>
      {resumeData && (
        <div>
          <h2>{selectedTemplate.title}</h2>
          <h3>Resume Data:</h3>
          {/* Display resume data here */}
        </div>
      )}
    </div>
  );
};

export default ResumeBuilder;
```

In this modified component:

- When the component mounts, it fetches the available templates from the backend.
- Each template is displayed as a thumbnail, and when a user clicks on a template, the `handleTemplateSelect` function is called, which sets the selected template and triggers the creation of the resume based on that template.
- The `createResume` function sends a POST request to the backend API with the selected template ID.
- Once the resume data is received from the backend, it is stored in the state and displayed on the page.

This way, users can select a template, and the corresponding resume data will be fetched and displayed in real-time.