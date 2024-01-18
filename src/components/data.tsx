import { useState } from "react";
import axios from 'axios';

//import { useNavigate } from 'react-router-dom';



import PersonalInfoForm from './PersonalInfoForm.tsx';
import skillsForm from './skillsForm.tsx';
import exprienceForm from './experienceForm.tsx';

interface PersonalInfo {
 
  full_name: string;
  email: string;
  user: string;
  
}

interface skillsForm {
  user: string;
  skill_name: string;
}

interface FormData {
  personalInfo: PersonalInfo;
  skillsForm: skillsForm;
  
}


const ResumeForm: React.FC = () => {
  //const history = useNavigate();
  const [formData, setFormData] = useState<FormData>({
    personalInfo: {
      full_name: '',
      email: '',
      user:'',
     
    },
    skillsForm: {
      user: '',
      skill_name:'',
    }
   
  });
  const [step, setStep] = useState<number>(1);

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleChange = (section: keyof FormData, data: any) => { // You can replace 'any' with a more specific type
    setFormData({
      ...formData,
      [section]: data,
    });
  };



  const handleSubmit = () => {
    const payload = {
      ...formData.personalInfo // This spreads the personalInfo object into the payload
    };
  
    axios.post('http://127.0.0.1:8000/core/personal-information/', payload)
      .then(response => {
        console.log('Success:', response.data);
      })
      .catch(error => {
        console.error('Error:', error);
        
      });
      const payloadPersonalInfo = { ...formData.personalInfo };
  const payloadAdditionalInfo = { ...formData.additionalInfo };
  // More payloads for other steps...

  axios.post('http://127.0.0.1:8000/core/personal-information/', payloadPersonalInfo)
    .then(response => { /* ... */ })
    .catch(error => { /* ... */ });

  axios.post('http://127.0.0.1:8000/core/additional-information/', payloadAdditionalInfo)
    .then(response => { /* ... */ })
    .catch(error => { /* ... */ });
  };

  
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
          <SkillsForm
            handleChange={(data: Skill[]) => handleChange('skills', data)}
            skills={formData.skills}
          />
        );
      

      default:
        return null;
    }
  };

  return (
    <div>
      <h1>Resume Builder</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        {renderFormStep()}
        <div>
          {step > 1 && <button type="button" onClick={prevStep}>Previous</button>}
          {step < 3 ? <button type="button" onClick={nextStep}>Next</button> : <button type="button" onClick={handleSubmit}>Submit</button>}
        </div>
      </form>
    </div>
  );
};

export default ResumeForm;
