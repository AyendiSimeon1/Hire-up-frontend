import { useState, useEffect } from "react";
import axios from 'axios';

//import { useNavigate } from 'react-router-dom';
import resumeTemplate1 from '../../src/assets/template1.jpg';

import PersonalInfoForm from './PersonalInfoForm.tsx';
import EducationForms from './EducationForm.tsx';
import WorkExperienceForms from './experienceForm.tsx';
import SkillsForm from './skillsForm.tsx';
import ProjectForms from './ProjectForm.tsx';
import ChooseTemplate from './chooseTemplate.tsx';

interface chooseTemplateForm {
  id: string;
  image: string;
}


interface PersonalInfo {
 
  first_name: string;
  last_name: string;
  email: string;
  user: string;
  
}
interface EducationForm {
 
  degree: string;
  institution:string;
  start_date:string;
  end_date:string;
  description: string;
}

interface WorkExperienceForm {

  job_title: string;
  company: string;
  start_date:string;
  end_date:string;
  responsibilities: string;

}
interface skillsForm {
 
  skill_name: string;
}

interface ProjectForm {

  project_name: string;
  description:string;
  start_date: string;
  end_date: string;
  url: string;
}

interface FormData {
  personalInfo: PersonalInfo;
  EducationForm: EducationForm;
  WorkExperienceForm: WorkExperienceForm;
  skillsForm: skillsForm;
  ProjectForm: ProjectForm;
  
}


const ResumeForm: React.FC = (): JSX.Element=> {
  
  const [formData, setFormData] = useState<FormData>({
    
    
    personalInfo: {
      first_name: '',
      last_name: '',
      email: '',
      user: ''
      
     
    },
    EducationForm: {
    
      degree: '',
      institution: '',
      start_date: '',
      end_date: '',
      description: ''
    },
    WorkExperienceForm: {
   
      job_title: '',
      company: '',
      start_date: '',
      end_date:'',
      responsibilities: ''
    },
    skillsForm: {
      
      skill_name:'',
    },
    ProjectForm: {
    
      project_name: '',
      description:'',
      start_date:'',
      end_date:'',
      url:''
    }
   
  });
  const [step, setStep] = useState<number>(1);
  const [selectedTemplateId, setSelectedTemplateId] = useState('');

  const handleTemplateSelection = (templateId: string) => {
    setSelectedTemplateId(templateId);
    sendTemplateIdToEndpoint(templateId);
  };

  const sendTemplateIdToEndpoint = (templateId: string) => {
    // Implement the logic to send the template ID to the endpoint
    console.log('Template ID:', templateId);
    // Example fetch call to send data to the endpoint
    fetch('your-endpoint-url', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ templateId }),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Response from server:', data);
        // Handle the response from the server if needed
      })
      .catch(error => {
        console.error('Error sending data to the server:', error);
      });



    };

 // const nextStep = () => setStep(step + 1);
 const nextStep = () => {
  setStep(step + 1);
  console.log("New step:", step + 1);
}; 
 const prevStep = () => setStep(step - 1);

  const handleChange = (section: keyof FormData, data: any) => { // You can replace 'any' with a more specific type
    setFormData({
      ...formData,
      [section]: data,
    });
  };



  const handleSubmit = () => {
    const payloadTemplate = {
      ...formData.ChooseTemplateForm
    }
    const payloadPersonalInfo = {
      ...formData.personalInfo 
    };
    const payloadEducationForm = { 
      ...formData.EducationForm 
    };
    const payloadWorkExperienceForm = { 
      ...formData.WorkExperienceForm
    };

    const payloadSkillsForm = { 
      ...formData.skillsForm 
    };
    const payloadProjectForm = { 
      ...formData.ProjectForm 
    };

    
    
    axios.post('http://127.0.0.1:8000/core/choose-template/', payloadTemplate)
      .then(response => {
        console.log('Success:', response.data);
      })
      .catch(error => {
        console.error('Error:', error);
        
      });

    axios.post('http://127.0.0.1:8000/core/personal-information/', payloadPersonalInfo)
      .then(response => {
        console.log('Success:', response.data);
      })
      .catch(error => {
        console.error('Error:', error);
        
      });
    axios.post('http://127.0.0.1:8000/core/education/', payloadEducationForm)
      .then(response => {
        console.log('Success:', response.data);
      })
      .catch(error => {
        console.error('Error:', error);
        
      });
    axios.post('http://127.0.0.1:8000/core/Professional-experience/', payloadWorkExperienceForm)
      .then(response => {
        console.log('Success:', response.data);
      })
      .catch(error => {
        console.error('Error:', error);
        
      });
    axios.post('http://127.0.0.1:8000/core/skill/', payloadSkillsForm)
      .then(response => {
        console.log('Success:', response.data);
      })
      .catch(error => {
        console.error('Error:', error);
        
      });
    axios.post('http://127.0.0.1:8000/core/project/', payloadProjectForm)
      .then(response => {
        console.log('Success:', response.data);
      })
      .catch(error => {
        console.error('Error:', error);
        
      });  
    };
function DowloadPdf  ()  {
  axios({
    url: 'http://127.0.0.1:8000/core/resume-templates/',
    method: 'GET',
    responseType: 'blob'
  })
  .then ((response) => {
    const pdfBlob = new Blob([response.data], {type: 'application/pdf'});
    const downloadUrl = window.URL.createObjectURL(pdfBlob);
    const downloadLink = document.createElement('a');
    downloadLink.href = downloadUrl;
    downloadLink.setAttribute('download', 'resume.pdf'); // Any file name
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);

  }).catch (error => {
    console.error('This is an error message', error);
  });
}
  
  const renderFormStep = () => {

    switch (step) {
      case 1:
        return(
           
          <ChooseTemplate handleTemplateSelection={handleTemplateSelection} />
                               
        );
      case 2:
        return (
          
          <PersonalInfoForm
          handleChange={(data) => handleChange('personalInfo', data)}
          personalInfo={formData.personalInfo}
          />
        );
      case 3:
        return (
          <EducationForms
          handleChange={(data) => handleChange('EducationForm', data)}
          EducationForm={formData.EducationForm}
          />
        );
      case 4:
        return (
          <WorkExperienceForms
          handleChange={(data) => handleChange('WorkExperienceForm', data)}
          WorkExperienceForm={formData.WorkExperienceForm}
          />
        );
      case 5:
        return (
          <SkillsForm
          handleChange={(data) => handleChange('skillsForm', data)}
          skillsForm={formData.skillsForm}
          />
        );
      
      case 6:
        return (
          <ProjectForms
          handleChange={(data) => handleChange('ProjectForm', data)}
          ProjectForm={formData.ProjectForm}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="container">
      
     
      <form onSubmit={(e) => e.preventDefault()}>
        <div key={step}>
        {renderFormStep()}
        </div>
        
        <div className="py-3">
  {step > 1 && <button type="button" onClick={prevStep} className="btn btn-primary">Previous</button>}
  {step < 6 ? <button type="button" onClick={nextStep} className="btn btn-primary">Next</button> : <button type="button" onClick={handleSubmit}>Submit</button>}
</div>
        
      </form>
      <button onClick={DowloadPdf} className="btn btn-primary">Download PDF</button>

    </div>
  );
};


export default ResumeForm;



