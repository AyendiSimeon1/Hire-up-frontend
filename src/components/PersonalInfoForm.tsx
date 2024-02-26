// PersonalInfoForm.tsx
import React from 'react';

interface PersonalInfoFormProps {
  handleChange: (info: PersonalInfo) => void;
  
  personalInfo: PersonalInfo;
}

interface PersonalInfo {
  
  first_name?: string;
  last_name?: string;
  email?: string;
  job_title?: string;
  phone_number?: string;
  address?: string;
  city?: string;
  state?: string;
  country?: string;
}

const PersonalInfoForm: React.FC<PersonalInfoFormProps> = ({ handleChange, personalInfo }) => {
  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    handleChange({
      ...personalInfo,
      [name]: value,
    });
  };

  return (
    <div>
      <div className="col-lg-6">
           <div className="mb-4">
             <h1 className="display-4">Let's build your resume</h1>
             <p className="text-muted">
               Enter your information below. It will be used to generate your resume.
             </p>
           </div>
           
           <div className="mb-4">
             <h2 className="h4">Personal </h2>
           </div>
           <div className="mb-4">
             <label className="form-label text-sm font-weight-medium">First Name</label>
          <input
            className="form-control"
            placeholder="m@example.com"
            type="text"
            id="first_name"
            name="first_name"
            value={personalInfo.first_name || ''}
            onChange={onInputChange}
          />
          <div className="mb-4">
             <label className="form-label text-sm font-weight-medium">Last Name</label>
          <input
            className="form-control"
            placeholder="m@example.com"
            type="text"
            id="last_name"
            name="last_name"
            value={personalInfo.last_name || ''}
            onChange={onInputChange}
          />
          
           </div>
           <div className="mb-4">
             <label className="form-label text-sm font-weight-medium">Job Title</label>
          <input
            className="form-control"
            placeholder="m@example.com"
            type="text"
            id="job_title"
            name="job_title"
            value={personalInfo.job_title || ''}
            onChange={onInputChange}
          />
          
           </div>
           <div className="mb-4">
             <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            name="email"
            value={personalInfo.email || ''}
            onChange={onInputChange}
          />
           </div>
           <div>
          <label htmlFor="phone_number">Phone No:</label>
          <input
            type="text"
            id="phone_number"
            name="phone_number"
            value={personalInfo.phone_number || ''}
            onChange={onInputChange}
          />
        </div>
        <div>
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            name="address"
            value={personalInfo.address || ''}
            onChange={onInputChange}
          />
        </div>
        <div>
          <label htmlFor="city">City:</label>
          <input
            type="text"
            id="city"
            name="city"
            value={personalInfo.city || ''}
            onChange={onInputChange}
          />
        </div>
        <div>
          <label htmlFor="country">Country:</label>
          <input
            type="text"
            id="country"
            name="country"
            value={personalInfo.country || ''}
            onChange={onInputChange}
          />
        </div>
      </div>
    </div>
    </div>
  );
};

export default PersonalInfoForm;
