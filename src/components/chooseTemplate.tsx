import template1 from '../assets/template1.jpg';
import template2 from '../assets/template2.jpg';
interface ChooseTemplateProps {
  handleTemplateSelection: (templateId: string) => void;
}

const ChooseTemplate: React.FC<ChooseTemplateProps> = ({ handleTemplateSelection }) => {
  const handleClick = (templateId: string) => {
    // Call the handleTemplateSelection callback with the selected templateId
    handleTemplateSelection(templateId);
  };

  return (
    <div className="choose-template-container">
      <div className="mb-4">
        <label className="form-label text-sm font-weight-medium">Choose Template</label>
        {/* Render images and associate each image with a template ID */}
        <div className="template-images">
          <img src="template1.jpg" alt="Template 1" onClick={() => handleClick('template1')} />
          <img src="template2.jpg" alt="Template 2" onClick={() => handleClick('template2')} />
          {/* Add more images as needed */}
        </div>
      </div>
    </div>
  );
};

export default ChooseTemplate;