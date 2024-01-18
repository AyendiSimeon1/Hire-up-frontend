// EducationForm.tsx
import React from 'react';

interface EducationFormsProps {
  handleChange: (info: EducationForm) => void;
  
  EducationForm: EducationForm;
}

interface EducationForm {
  
  full_name?: string;
  email?: string;
  user?: string;
  phone_number?: string;
  address?: string;
  linkedin_profile?: string;
  github_profile?: string;
  
}

const EducationForms: React.FC<EducationFormsProps> = ({ handleChange, EducationForm }) => {
  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    handleChange({
      ...EducationForm,
      [name]: value,
    });
  };

  return (
    <div>
      <h2>Personal Information</h2>
      <form>
      
        <div>
          <label htmlFor="Full Name">Full Name:</label>
          <input
            type="text"
            id="full_name"
            name="full_name"
            value={EducationForm.full_name || ''}
            onChange={onInputChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            name="email"
            value={EducationForm.email || ''}
            onChange={onInputChange}
          />
        </div>
        <div>
          <label htmlFor="user">User:</label>
          <input
            type="text"
            id="user"
            name="user"
            value={EducationForm.user || ''}
            onChange={onInputChange}
          />
        </div>
        
      </form>
    </div>
  );
};

export default EducationForms;
