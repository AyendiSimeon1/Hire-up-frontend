// PersonalInfoForm.tsx
import React from 'react';

interface skillsFormProps {
  handleChange: (info: skills) => void;
  
  skills: skills;
}

interface skills {
  full_name?: string;
  email?: string;
  user?: string;
  address?: string;
  // Add more fields as required
}

const skillsForm: React.FC<skillsFormProps> = ({ handleChange, skills }) => {
  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    handleChange({
      ...skills,
      [name]: value,
    });
  };

  return (
    <div>
      <h2>Personal Information</h2>
      <form>
        {/* Form fields here */}
        <div>
          <label htmlFor="Full Name">Full Name:</label>
          <input
            type="text"
            id="full_name"
            name="full_name"
            value={skills.full_name || ''}
            onChange={onInputChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            name="email"
            value={skills.email || ''}
            onChange={onInputChange}
          />
        </div>
        <div>
          <label htmlFor="user">User:</label>
          <input
            type="text"
            id="user"
            name="user"
            value={skills.user || ''}
            onChange={onInputChange}
          />
        </div>
        
      </form>
    </div>
  );
};

export default skillsForm;
