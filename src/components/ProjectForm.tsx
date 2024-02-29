// EducationForm.tsx
import React from 'react';

interface ProjectFormsProps {
  handleChange: (info: ProjectForm) => void;
  
  ProjectForm: ProjectForm;
}

interface ProjectForm {
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
      <h2>Project Form</h2>
      <form>
      
      <div>
          <label className="form-label text-sm font-weight-medium">Project Name</label>
          <input
            className="form-control"
            type="text"
            id="project_name"
            name="project_name"
            value={ProjectForm.project_name || ''}
            onChange={onInputChange}
          />
        </div>

        <div>
          <label className="form-label text-sm font-weight-medium">Description</label>
          <input
            className="form-control"
            type="text"
            id="description"
            name="description"
            value={ProjectForm.description || ''}
            onChange={onInputChange}
          />
        </div>
        <div>
          <label className="form-label text-sm font-weight-medium">Start Date</label>
          <input
            className="form-control"
            type="text"
            id="start_date"
            name="start_date"
            value={ProjectForm.start_date || ''}
            onChange={onInputChange}
          />
        </div>
       
        <div>
          <label className="form-label text-sm font-weight-medium">End Date</label>
          <input
            className="form-control"
            type="text"
            id="end_date"
            name="end_date"
            value={ProjectForm.end_date || ''}
            onChange={onInputChange}
          />
        </div>
        <div>
          <label className="form-label text-sm font-weight-medium">Url</label>
          <input
            className="form-control"
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
