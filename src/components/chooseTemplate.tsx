import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";

interface ResumeTemplate {
    id: number;
    name: string;
    image: { image: string }; 
  }

const ChooseTemplate: React.FC = () => {
    const [templateId, setTemplateId] = useState([])
    const [templates, setTemplates] = useState([])

    useEffect(() => {
        const fetchTemplate = async () => {
            const response = await axios.get('http://localhost:5173/choose-template');
            setTemplates(response.data.map((template) => ({
                id: template.id,
                name: template.name,
                html: template.html,
              })));
           
        }
        fetchTemplate();
    }, [])
    return(
        <div>
        
        {templates.map((template) => (
          <div key={template.id}>
            <h3>{template.name}</h3>
            <div dangerouslySetInnerHTML={{ __html: template.html }} />
            <Link to={`/resume-builder/${template.id}`}>Choose</Link>
          </div>
        ))}
        {/* ... */}
      </div>
    );
}

export default ChooseTemplate;