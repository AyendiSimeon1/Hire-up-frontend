// PersonalInfoForm.tsx
import React from 'react';

interface PersonalInfoFormProps {
  handleChange: (info: PersonalInfo) => void;
  
  personalInfo: PersonalInfo;
}

interface PersonalInfo {
  
  full_name?: string;
  email?: string;
  user?: string;
  phone_number?: string;
  address?: string;
  linkedin_profile?: string;
  github_profile?: string;
  
}

const PersonalInfoForm: React.FC<PersonalInfoFormProps> = ({ handleChange, personalInfo }) => {
  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    handleChange({
      ...personalInfo,
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
            value={personalInfo.full_name || ''}
            onChange={onInputChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            name="email"
            value={personalInfo.email || ''}
            onChange={onInputChange}
          />
        </div>
        <div>
          <label htmlFor="user">User:</label>
          <input
            type="text"
            id="user"
            name="user"
            value={personalInfo.user || ''}
            onChange={onInputChange}
          />
        </div>
        
      </form>
    </div>
  );
};

export default PersonalInfoForm;
