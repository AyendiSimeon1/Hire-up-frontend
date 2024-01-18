// PersonalInfoForm.tsx
import React from 'react';

interface skillsFormProps {
  handleChange: (info: skills) => void;
  
  skillsForm: skills;
}

interface skills {
  full_name?: string;
  email?: string;
  user?: string;
  address?: string;
  // Add more fields as required
}

const skillsForm: React.FC<skillsFormProps> = ({ handleChange, skillsForm }) => {
  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    handleChange({
      ...skillsForm,
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
            value={skillsForm.full_name || ''}
            onChange={onInputChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            name="email"
            value={skillsForm.email || ''}
            onChange={onInputChange}
          />
        </div>
        <div>
          <label htmlFor="user">User:</label>
          <input
            type="text"
            id="user"
            name="user"
            value={skillsForm.user || ''}
            onChange={onInputChange}
          />
        </div>
        
      </form>
    </div>
  );
};

export default skillsForm;
