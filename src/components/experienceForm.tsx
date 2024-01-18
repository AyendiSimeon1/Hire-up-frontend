// PersonalInfoForm.tsx
import React from 'react';

interface experienceFormProps {
  handleChange: (info: experience) => void;
  
  experience: experience;
}

interface experience {
  full_name?: string;
  email?: string;
  user?: string;
  address?: string;
  // Add more fields as required
}

const experienceForm: React.FC<experienceFormProps> = ({ handleChange, experience }) => {
  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    handleChange({
      ...experience,
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
            value={experience.full_name || ''}
            onChange={onInputChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            name="email"
            value={experience.email || ''}
            onChange={onInputChange}
          />
        </div>
        <div>
          <label htmlFor="user">User:</label>
          <input
            type="text"
            id="user"
            name="user"
            value={experience.user || ''}
            onChange={onInputChange}
          />
        </div>
        
      </form>
    </div>
  );
};

export default experienceForm;
