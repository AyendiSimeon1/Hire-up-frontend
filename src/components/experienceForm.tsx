// PersonalInfoForm.tsx
import React from 'react';

interface WorkExperienceFormsProps {
  handleChange: (info: WorkExperienceForm) => void;
  
  WorkExperienceForm: WorkExperienceForm;
}

interface WorkExperienceForm {
  user?: string;
  job_title?: string;
  company?: string;
  start_date?: string;
  end_date?: string;
  responsibilities?: string;
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
          <label htmlFor="user">User:</label>
          <input
            type="text"
            id="user"
            name="user"
            value={WorkExperienceForm.user || ''}
            onChange={onInputChange}
          />
        </div>
        <div>
          <label htmlFor="Job Title">Job Title:</label>
          <input
            type="text"
            id="job_title"
            name="job_title"
            value={WorkExperienceForm.job_title || ''}
            onChange={onInputChange}
          />
        </div>
        <div>
          <label htmlFor="company">company:</label>
          <input
            type="text"
            id="company"
            name="company"
            value={WorkExperienceForm.company || ''}
            onChange={onInputChange}
          />
        </div>
        <div>
          <label htmlFor="start_date">start_date:</label>
          <input
            type="text"
            id="start_date"
            name="start_date"
            value={WorkExperienceForm.start_date || ''}
            onChange={onInputChange}
          />
        </div>
        <div>
          <label htmlFor="end_date">end_date:</label>
          <input
            type="text"
            id="end_date"
            name="end_date"
            value={WorkExperienceForm.end_date || ''}
            onChange={onInputChange}
          />
        </div>
        
        
      </form>
    </div>
  );
};

export default WorkExperienceForms;
