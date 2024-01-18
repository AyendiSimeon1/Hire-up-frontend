// PersonalInfoForm.tsx
import React from 'react';

interface WorkExperienceFormsProps {
  handleChange: (info: WorkExperienceForm) => void;
  
  WorkExperienceForm: WorkExperienceForm;
}

interface WorkExperienceForm {
  full_name?: string;
  email?: string;
  user?: string;
  address?: string;
  // Add more fields as required
}

const WorkExperienceForms: React.FC<WorkExperienceFormsProps> = ({ handleChange, WorkExperienceForm }) => {
  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    handleChange({
      ...WorkExperienceForm,
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
            value={WorkExperienceForm.full_name || ''}
            onChange={onInputChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            name="email"
            value={WorkExperienceForm.email || ''}
            onChange={onInputChange}
          />
        </div>
        <div>
          <label htmlFor="user">User:</label>
          <input
            type="text"
            id="user"
            name="user"
            value={WorkExperienceForm.user || ''}
            onChange={onInputChange}
          />
        </div>
        
      </form>
    </div>
  );
};

export default WorkExperienceForms;
