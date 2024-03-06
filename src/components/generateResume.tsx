import React, { useState } from 'react';
import axios from 'axios';

const ResumeForm = () => {
    const [templateId, setTemplateId] = useState('');
    const [profileData, setProfileData] = useState({ /* user profile fields */ });

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post('/api/generate-resume/', {
                template_id: templateId,
                user_profile: profileData
            });
            // Handle the PDF file response here
            // For instance, you might download it or display it in an iframe
        } catch (error) {
            console.error('Error generating resume:', error);
        }
    };

    // JSX for your form
    return (
        <form onSubmit={handleSubmit}>
            {/* Form fields for selecting template and entering profile data */}
            <button type="submit">Generate Resume</button>
        </form>
    );
};

export default ResumeForm;


Certainly! Here's an example of how you can implement the template selection and resume building process in a React application:

```javascript
import React, { useState } from 'react';
import axios from 'axios';

const ResumeBuilder = () => {
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [personalInfo, setPersonalInfo] = useState({});
  const [experiences, setExperiences] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [pdfUrl, setPdfUrl] = useState('');

  const selectTemplate = (templateId) => {
    setSelectedTemplate(templateId);
  };

  const addExperience = () => {
    setExperiences([...experiences, { title: '', company: '', startDate: '', endDate: '' }]);
  };

  const handleExperienceChange = (index, key, value) => {
    const updatedExperiences = [...experiences];
    updatedExperiences[index][key] = value;
    setExperiences(updatedExperiences);
  };

  const handlePersonalInfoChange = (key, value) => {
    setPersonalInfo({ ...personalInfo, [key]: value });
  };

  const generatePdf = async () => {
    setLoading(true);
    try {
      const response = await axios.post('/api/generate-pdf', {
        template_id: selectedTemplate,
        personal_info: personalInfo,
        experiences: experiences
      });
      setPdfUrl(response.data.pdf_file);
      setError('');
    } catch (error) {
      setError('Error generating PDF');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {/* Template Selection */}
      <TemplateSelection onSelectTemplate={selectTemplate} />

      {/* Resume Builder */}
      {selectedTemplate && (
        <div>
          <PersonalInfoForm onChange={handlePersonalInfoChange} />
          <ExperienceForm experiences={experiences} onChange={handleExperienceChange} onAddExperience={addExperience} />
          <button onClick={generatePdf} disabled={loading}>Generate PDF</button>
          {loading && <p>Loading...</p>}
          {error && <p>{error}</p>}
          {pdfUrl && (
            <div>
              <p>PDF generated successfully!</p>
              <a href={pdfUrl} target="_blank" rel="noopener noreferrer">Download PDF</a>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

const TemplateSelection = ({ onSelectTemplate }) => {
  const templates = []; // Array of available templates

  return (
    <div>
      <h2>Select a Template:</h2>
      <div>
        {templates.map(template => (
          <div key={template.id}>
            <h3>{template.name}</h3>
            <img src={template.preview} alt="Template Preview" />
            <button onClick={() => onSelectTemplate(template.id)}>Select</button>
          </div>
        ))}
      </div>
    </div>
  );
};

const PersonalInfoForm = ({ onChange }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    onChange(name, value);
  };

  return (
    <div>
      <h2>Personal Information</h2>
      <input type="text" name="full_name" placeholder="Full Name" onChange={handleInputChange} />
      <input type="email" name="email" placeholder="Email" onChange={handleInputChange} />
      {/* Add more input fields for other personal information */}
    </div>
  );
};

const ExperienceForm = ({ experiences, onChange, onAddExperience }) => {
  const handleInputChange = (index, key, value) => {
    onChange(index, key, value);
  };

  return (
    <div>
      <h2>Experiences</h2>
      {experiences.map((experience, index) => (
        <div key={index}>
          <input type="text" value={experience.title} placeholder="Title" onChange={(e) => handleInputChange(index, 'title', e.target.value)} />
          <input type="text" value={experience.company} placeholder="Company" onChange={(e) => handleInputChange(index, 'company', e.target.value)} />
          {/* Add input fields for start date, end date, description, etc. */}
        </div>
      ))}
      <button onClick={onAddExperience}>Add Experience</button>
    </div>
  );
};

export default ResumeBuilder;
```

In this code:

- `ResumeBuilder` component is the main component that handles the template selection, personal information input, experience input, PDF generation, and rendering of the PDF download link.
- `TemplateSelection` component displays available templates and allows the user to select one.
- `PersonalInfoForm` component renders input fields for personal information like full name and email.
- `ExperienceForm` component renders input fields for experiences, allowing the user to add multiple experiences.
- When the user selects a template, the corresponding template ID is stored in the state (`selectedTemplate`). When the user fills out personal information and experiences and clicks "Generate PDF", a request is sent to the backend API to generate the PDF using the selected template and user data.
