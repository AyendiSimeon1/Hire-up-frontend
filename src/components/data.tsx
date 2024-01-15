import { useState } from "react";
import axios from 'axios';

// const Data = () => {
//   const [formData, setFormData] = useState({
//     user: '',
//     email: '',
//     full_name: ''
//   });

//   const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = event.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     console.log("Form submitted");
//     alert('Form Submitted');
//     console.log(formData);
//     try {
//       const response = await axios.post("http://127.0.0.1:8000/core/personal-information/", formData);
//       console.log(response.data);
//       alert('Api Request sent');
//     } catch (error) {
//       console.error('There was an error!', error);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         name="user"
//         value={formData.user}
//         onChange={handleInputChange}
//       />
//       <input
//         type="text"
//         name="full_name"
//         value={formData.full_name}
//         onChange={handleInputChange}
//       />
//       <input
//         type="email"
//         name="email"
//         value={formData.email}
//         onChange={handleInputChange}
//       />
//       <button type="submit">Submit</button>
//     </form>
//   );
// }

// export default Data;


// ResumeForm.js

import { useHistory } from 'react-router-dom';


// Import your form components for personal information and skills
import PersonalInfoForm from './personalInfoForm.tsx';
//import SkillsForm from './SkillsForm';

const ResumeForm = () => {
  const history = useHistory();
  const [formData, setFormData] = useState({
    personalInfo: {},
    skills: [],
    // Add more sections as needed
  });
  const [step, setStep] = useState(1);

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleChange = (section, data) => {
    setFormData({
      ...formData,
      [section]: data,
    });
  };

  const handleSubmit = () => {
    axios.post('your-api-endpoint', formData)
      .then(response => {
        console.log('Success:', response.data);
        history.push('/success');
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
      case 2:
        return (
          <SkillsForm
            handleChange={(data) => handleChange('skills', data)}
            skills={formData.skills}
          />
        );
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
