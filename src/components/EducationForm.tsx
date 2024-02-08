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

export default function Component() {
  return (
    <div className="container">
      <div className="row py-5">
        <div className="col-lg-6">
          <div className="mb-4">
            <h1 className="display-4">Let's build your resume</h1>
            <p className="text-muted">
              Enter your information below. It will be used to generate your resume.
            </p>
          </div>
          <div className="mb-4">
            <h2 className="h4">Personal</h2>
          </div>
          <div className="mb-4">
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="Enter your name" required />
          </div>
          <div className="mb-4">
            <Label htmlFor="email">Email</Label>
            <Input id="email" placeholder="Enter your email" required type="email" />
          </div>
          <div className="mb-4">
            <Textarea id="address" placeholder="Enter your address">
              Address
            </Textarea>
          </div>
          <div className="mb-4">
            <h2 className="h4">Experience</h2>
          </div>
          <div className="mb-4">
            <Label htmlFor="company1">Company</Label>
            <Input id="company1" placeholder="Enter company name" />
          </div>
          <div className="mb-4">
            <Label htmlFor="position1">Position</Label>
            <Input id="position1" placeholder="Enter position" />
          </div>
          <div className="mb-4">
            <Label htmlFor="company2">Company</Label>
            <Input id="company2" placeholder="Enter company name" />
          </div>
          <div className="mb-4">
            <Label htmlFor="position2">Position</Label>
            <Input id="position2" placeholder="Enter position" />
          </div>
          <div className="mb-4">
            <h2 className="h4">Education</h2>
          </div>
          <div className="mb-4">
            <Label htmlFor="institute1">Institute</Label>
            <Input id="institute1" placeholder="Enter institute name" />
          </div>
          <div className="mb-4">
            <Label htmlFor="degree1">Degree</Label>
            <Input id="degree1" placeholder="Enter degree" />
          </div>
          <div className="mb-4">
            <Label htmlFor="institute2">Institute</Label>
            <Input id="institute2" placeholder="Enter institute name" />
          </div>
          <div className="mb-4">
            <Label htmlFor="degree2">Degree</Label>
            <Input id="degree2" placeholder="Enter degree" />
          </div>
          <div className="mb-4">
            <h2 className="h4">Skills</h2>
          </div>
          <div className="mb-4">
            <Textarea id="skills" placeholder="Enter your skills" />
          </div>
          <div className="mb-4">
            <h2 className="h4">Contact</h2>
          </div>
          <div className="mb-4">
            <Label htmlFor="phone">Phone</Label>
            <Input id="phone" placeholder="Enter your phone number" />
          </div>
          <div className="mb-4">
            <Label htmlFor="website">Website</Label>
            <Input id="website" placeholder="Enter your website" />
          </div>
        </div>
        <div className="col-lg-6 d-flex flex-column justify-content-between min-vh-100">
          <Button className="align-self-end" size="lg">
            Save Changes
          </Button>
        </div>
      </div>
    </div>
  );
}
