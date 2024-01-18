// EducationForm.tsx
import React from 'react';

interface ProjectFormsProps {
  handleChange: (info: ProjectForm) => void;
  
  ProjectForm: ProjectForm;
}

interface ProjectForm {
  
  full_name?: string;
  email?: string;
  user?: string;
  phone_number?: string;
  address?: string;
  linkedin_profile?: string;
  github_profile?: string;
  
}

const ProjectForms: React.FC<ProjectFormsProps> = ({ handleChange, ProjectForm }) => {
  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    handleChange({
      ...ProjectForm,
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
            value={ProjectForm.full_name || ''}
            onChange={onInputChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            name="email"
            value={ProjectForm.email || ''}
            onChange={onInputChange}
          />
        </div>
        <div>
          <label htmlFor="user">User:</label>
          <input
            type="text"
            id="user"
            name="user"
            value={ProjectForm.user || ''}
            onChange={onInputChange}
          />
        </div>
        
      </form>
    </div>
  );
};

export default ProjectForms;
