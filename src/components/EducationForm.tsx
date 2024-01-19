// EducationForm.tsx
import React from 'react';

interface EducationFormsProps {
  handleChange: (info: EducationForm) => void;
  
  EducationForm: EducationForm;
}

interface EducationForm {
  user?: string;
  degree?: string;
  institution?: string;
  
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
    <div>
      <h2>Personal Information</h2>
      <form>
      
        <div>
          <label htmlFor="User">User:</label>
          <input
            type="text"
            id="user"
            name="user"
            value={EducationForm.user || ''}
            onChange={onInputChange}
          />
        </div>
        <div>
          <label htmlFor="degree">degree:</label>
          <input
            type="text"
            id="degree"
            name="degree"
            value={EducationForm.degree || ''}
            onChange={onInputChange}
          />
        </div>
        <div>
          <label htmlFor="institution">institution:</label>
          <input
            type="text"
            id="institution"
            name="institution"
            value={EducationForm.institution || ''}
            onChange={onInputChange}
          />
        </div>
        <div>
          <label htmlFor="start_date">start_date:</label>
          <input
            type="text"
            id="start_date"
            name="start_date"
            value={EducationForm.start_date || ''}
            onChange={onInputChange}
          />
        </div>
        
        <div>
          <label htmlFor="end_date">end_date:</label>
          <input
            type="text"
            id="end_date"
            name="end_date"
            value={EducationForm.end_date || ''}
            onChange={onInputChange}
          />
        </div>
        <div>
          <label htmlFor="description">description:</label>
          <input
            type="text"
            id="description"
            name="description"
            value={EducationForm.description || ''}
            onChange={onInputChange}
          />
        </div>
        
        
      </form>
    </div>
  );
};

export default EducationForms;
