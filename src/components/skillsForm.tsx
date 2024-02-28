// PersonalInfoForm.tsx
import React from 'react';

interface skillsFormProps {
  handleChange: (info: skills) => void;
  
  skillsForm: skills;
}

interface skills {
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
      <div className="mb-4">
             <label className="form-label text-sm font-weight-medium">Skills</label>
          <input
            className="form-control"
            placeholder="m@example.com"
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
