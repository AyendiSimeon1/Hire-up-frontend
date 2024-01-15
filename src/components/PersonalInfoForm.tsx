// PersonalInfoForm.tsx
import React from 'react';

interface PersonalInfoFormProps {
  handleChange: (info: PersonalInfo) => void;
  personalInfo: PersonalInfo;
}

interface PersonalInfo {
  name?: string;
  email?: string;
  phone?: string;
  address?: string;
  // Add more fields as required
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
        {/* Form fields here */}
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={personalInfo.name || ''}
            onChange={onInputChange}
          />
        </div>
        {/* ... other fields ... */}
      </form>
    </div>
  );
};

export default PersonalInfoForm;
