interface ChooseTemplateProps {
  handleInputChange: (data: any) => void;
  chooseTemplateForm: any; // Adjust the type as per your form data structure
}

const ChooseTemplate: React.FC<ChooseTemplateProps> = ({ handleInputChange, chooseTemplateForm }) => {
  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    handleInputChange({
      ...chooseTemplateForm,
      [name]: value,
    });
  };

  return (
    <div className="container">
      <div className="mb-4">
        <label className="form-label text-sm font-weight-medium">Field Label</label>
        <input
          className="form-control"
          type="text"
          id="id"
          name="id" 
          value={chooseTemplateForm.id || ""} 
          onChange={onInputChange}
        />
      </div>
      {/* Other JSX elements for rendering the form section */}
    </div>
  );
};

export default ChooseTemplate;
