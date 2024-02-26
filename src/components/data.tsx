import { useState } from "react";
import axios from 'axios';

//import { useNavigate } from 'react-router-dom';



import PersonalInfoForm from './PersonalInfoForm.tsx';
import EducationForms from './EducationForm.tsx';
import WorkExperienceForms from './experienceForm.tsx';
import SkillsForm from './skillsForm.tsx';
import ProjectForms from './ProjectForm.tsx';

interface PersonalInfo {
 
  full_name: string;
  email: string;
  user: string;
  
}
interface EducationForm {
  user: string;
  degree: string;
  institution:string;
  start_date:string;
  end_date:string;
  description: string;
}

interface WorkExperienceForm {
  user:string;
  job_title: string;
  company: string;
  start_date:string;
  end_date:string;
  responsibilities: string;

}
interface skillsForm {
  user: string;
  skill_name: string;
}

interface ProjectForm {
  user:string;
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
  //const history = useNavigate();
  const [formData, setFormData] = useState<FormData>({
    personalInfo: {
      full_name: '',
      email: '',
      user:'',
     
    },
    EducationForm: {
      user: '',
      degree: '',
      institution: '',
      start_date: '',
      end_date: '',
      description: ''
    },
    WorkExperienceForm: {
      user:'',
      job_title: '',
      company: '',
      start_date: '',
      end_date:'',
      responsibilities: ''
    },
    skillsForm: {
      user: '',
      skill_name:'',
    },
    ProjectForm: {
      user:'',
      project_name: '',
      description:'',
      start_date:'',
      end_date:'',
      url:''
    }
   
  });
  const [step, setStep] = useState<number>(1);

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
    axios.post('http://127.0.0.1:8000/core/work-experience/', payloadWorkExperienceForm)
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
        return (
          <PersonalInfoForm
          handleChange={(data) => handleChange('personalInfo', data)}
          personalInfo={formData.personalInfo}
          />
        );
      case 2:
        return (
          <EducationForms
          handleChange={(data) => handleChange('EducationForm', data)}
          EducationForm={formData.EducationForm}
          />
        );
      case 3:
        return (
          <WorkExperienceForms
          handleChange={(data) => handleChange('WorkExperienceForm', data)}
          WorkExperienceForm={formData.WorkExperienceForm}
          />
        );
      case 4:
        return (
          <SkillsForm
          handleChange={(data) => handleChange('skillsForm', data)}
          skillsForm={formData.skillsForm}
          />
        );
      
      case 5:
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
    <div>
      
     
      <form onSubmit={(e) => e.preventDefault()}>
        <div key={step}>
        {renderFormStep()}
        </div>
        
        <div>
  {step > 1 && <button type="button" onClick={prevStep}>Previous</button>}
  {step < 5 ? <button type="button" onClick={nextStep}>Next</button> : <button type="button" onClick={handleSubmit}>Submit</button>}
</div>
        
      </form>
      <button onClick={DowloadPdf}>Download PDF</button>

    </div>
  );
};

export default ResumeForm;
