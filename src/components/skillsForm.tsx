// PersonalInfoForm.tsx
import React from 'react';

interface skillsFormProps {
  handleChange: (info: skills) => void;
  
  skillsForm: skills;
}

interface skills {
  
  user?: string;
  skill_name?: string;
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
      <h2>Skill Form</h2>
      <form>

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
        <div>
          <label htmlFor="skill_name">skill_name:</label>
          <input
            type="text"
            id="skill_name"
            name="skill_name"
            value={skillsForm.skill_name || ''}
            onChange={onInputChange}
          />
        </div>
      
        
      </form>
    </div>
  );
};

export default skillsForm;
