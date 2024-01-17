import { useState } from "react";
import axios from 'axios';

//import { useNavigate } from 'react-router-dom';


// Import your form components for personal information and skills
import PersonalInfoForm from './PersonalInfoForm.tsx';
//import SkillsForm from './SkillsForm';

interface PersonalInfo {
  // Example structure, adjust according to your data
  name: string;
  email: string;
  // ... other fields
}

interface FormData {
  personalInfo: PersonalInfo;
  
}


const ResumeForm: React.FC = () => {
  //const history = useNavigate();
  const [formData, setFormData] = useState<FormData>({
    personalInfo: {
      name: '',
      email: '',
      // ... set other fields to their initial values or empty strings
    },
   
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
    axios.post('http://127.0.0.1:8000/core/personal-information/', formData)
      .then(response => {
        console.log('Success:', response.data);
        
      })
      .catch(error => {
        console.error('Error:', error);
        // Handle error appropriately
      });
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
      // case 2:
      //   return (
      //     <SkillsForm
      //       handleChange={(data: Skill[]) => handleChange('skills', data)}
      //       skills={formData.skills}
      //     />
      //   );
      // Add more cases for additional sections

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
