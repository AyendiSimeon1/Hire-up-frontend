// PersonalInfoForm.tsx
import React from 'react';

interface skillsFormProps {
  handleChange: (info: skillsForm) => void;
  
  skillsForm: skillsForm;
}

interface skillsForm {
  name?: string;
  skills?: string;
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
            id="name"
            name="name"
            value={skillsForm.name || ''}
            onChange={onInputChange}
          />
          <label className="form-label text-sm font-weight-medium">Skills</label>
          <input
            className="form-control"
            placeholder="m@example.com"
            type="text"
            id="skills"
            name="skills"
            value={skillsForm.name || ''}
            onChange={onInputChange}
          />
          
      </div>
      
        
      </form>
    </div>
  );
};

export default skillsForm;
