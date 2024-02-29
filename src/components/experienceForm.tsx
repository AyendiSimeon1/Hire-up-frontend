// PersonalInfoForm.tsx
import React from 'react';

interface WorkExperienceFormsProps {
  handleChange: (info: WorkExperienceForm) => void;
  
  WorkExperienceForm: WorkExperienceForm;
}

interface WorkExperienceForm {
  position_title?: string;
  company_name?: string;
  start_date?: string;
  end_date?: string;
  work_summary?: string;

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
      <h2>Experience Form</h2>
      <form>
      <div className="mb-4">
          <label className="form-label text-sm font-weight-medium">Position Title</label>
          <input
            className="form-control"
            type="text"
            id="postiion_title"
            name="postiion_title"
            value= {WorkExperienceForm.position_title || ''}
            onChange={onInputChange}
          />
        </div>
        <div className="mb-4">
          <label className="form-label text-sm font-weight-medium">Company Name</label>
          <input
            className="form-control"
            type="text"
            id="company_name"
            name="company_name"
            value={WorkExperienceForm.company_name || ''}
            onChange={onInputChange}
          />
        </div>        
        <div className="mb-4">
          <label className="form-label text-sm font-weight-medium">Start Date</label>
          <input
            className="form-control"
            type="text"
            id="start_date"
            name="start_date"
            value={WorkExperienceForm.start_date || ''}
            onChange={onInputChange}
          />

        </div>
        <div className="mb-4">
          <label className="form-label text-sm font-weight-medium">End Date</label>
          <input
            className="form-control"
            type="text"
            id="end_date"
            name="end_date"
            value={WorkExperienceForm.end_date || ''}
            onChange={onInputChange}
          />
        </div>
        <div className="mb-4">
          <label className="form-label text-sm font-weight-medium">Work Summary</label>
          <input
            className="form-control"
            type="text"
            id="work_summary"
            name="work_summary"
            value={WorkExperienceForm.work_summary || ''}
            onChange={onInputChange}
          />
        </div>
        
      </form>
    </div>
    
  );
};

export default WorkExperienceForms;
