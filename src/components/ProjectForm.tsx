// EducationForm.tsx
import React from 'react';

interface ProjectFormsProps {
  handleChange: (info: ProjectForm) => void;
  
  ProjectForm: ProjectForm;
}

interface ProjectForm {
  
  user?: string;
  project_name?: string;
  description?: string;
  start_date?: string;
  end_date?: string;
  url?: string;
 
  
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
          <label htmlFor="user">user</label>
          <input
            type="text"
            id="user"
            name="user"
            value={ProjectForm.user || ''}
            onChange={onInputChange}
          />
        </div>
        <div>
          <label htmlFor="project_name">project_name:</label>
          <input
            type="text"
            id="project_name"
            name="project_name"
            value={ProjectForm.project_name || ''}
            onChange={onInputChange}
          />
        </div>
        <div>
          <label htmlFor="description">description:</label>
          <input
            type="text"
            id="description"
            name="description"
            value={ProjectForm.description || ''}
            onChange={onInputChange}
          />
        </div>
        <div>
          <label htmlFor="start_date">start_date:</label>
          <input
            type="text"
            id="start_date"
            name="start_date"
            value={ProjectForm.start_date || ''}
            onChange={onInputChange}
          />
        </div>
        <div>
          <label htmlFor="end_date">end_date:</label>
          <input
            type="text"
            id="end_date"
            name="end_date"
            value={ProjectForm.end_date || ''}
            onChange={onInputChange}
          />
        </div>
        <div>
          <label htmlFor="url">url:</label>
          <input
            type="text"
            id="url"
            name="url"
            value={ProjectForm.url || ''}
            onChange={onInputChange}
          />
        </div>
        
      </form>
    </div>
  );
};

export default ProjectForms;
