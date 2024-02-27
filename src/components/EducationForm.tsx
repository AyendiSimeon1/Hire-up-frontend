// EducationForm.tsx
import React from 'react';

interface EducationFormsProps {
  handleChange: (info: EducationForm) => void;
  
  EducationForm: EducationForm;
}

interface EducationForm {
  degree?: string;
  institution_name?: string;
  field_study?: string;
  start_date?: string;
  address?: string;
  end_date?: string;
  description?: string;
  
}

const EducationForms: React.FC<EducationFormsProps> = ({ handleChange, EducationForm }) => {
  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    handleChange({
      ...EducationForm,
      [name]: value,
    });
  };

  return (
    <div className="container">
      <h2>Education</h2>
      <form>
        <div className="mb-4">
             <label className="form-label text-sm font-weight-medium">Institution Name:</label>
          <input
            className="form-control"
            type="text"
            id="email"
            name="email"
            value={EducationForm.institution_name || ''}
            onChange={onInputChange}
          />
        <div>
          <label className="form-label text-sm font-weight-medium">degree:</label>
          <input
            className="form-control"
            type="text"
            id="degree"
            name="degree"
            value={EducationForm.degree || ''}
            onChange={onInputChange}
          />
        </div>
        <div>
          <label className="form-label text-sm font-weight-medium">institution:</label>
          <input
            className="form-control"
            type="text"
            id="institution"
            name="institution"
            value={EducationForm.institution || ''}
            onChange={onInputChange}
          />
        </div>
        <div>
          <label className="form-label text-sm font-weight-medium">start_date:</label>
          <input
            className="form-control"
            type="text"
            id="start_date"
            name="start_date"
            value={EducationForm.start_date || ''}
            onChange={onInputChange}
          />
        </div>
        
        <div>
          <label className="form-label text-sm font-weight-medium">end_date:</label>
          <input
            className="form-control"
            type="text"
            id="end_date"
            name="end_date"
            value={EducationForm.end_date || ''}
            onChange={onInputChange}
          />
        </div>
        <div>
          <label className="form-label text-sm font-weight-medium">description:</label>
          <input
            className="form-control"
            type="text"
            id="description"
            name="description"
            value={EducationForm.description || ''}
            onChange={onInputChange}
          />
        </div> 
     
    </div>
    </form>
    </div>
  )};

export default EducationForms;