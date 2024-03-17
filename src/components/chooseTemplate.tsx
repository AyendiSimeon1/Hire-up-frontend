import template1 from '../assets/template1.jpg';
import template2 from '../assets/template2.jpg';
interface ChooseTemplateProps {
  handleTemplateSelection: (templateId: string) => void;
}
const ChooseTemplate: React.FC<ChooseTemplateProps> = ({ handleTemplateSelection }) => {
  const handleClick = (templateId: string) => {
    handleTemplateSelection(templateId);
  };

  return (
    <div className="choose-template-container">
      <div className="mb-4">
        <label className="form-label text-sm font-weight-medium">Choose Template</label>
       <div className="template-images">
          <img src={template1} width={300} height={300} alt="Template 1" onClick={() => handleClick('template1')} />
          <img src={template2} width={300} height={300}  alt="Template 2" onClick={() => handleClick('template2')} />

        </div>
      </div>
    </div>
  );
};

export default ChooseTemplate;

