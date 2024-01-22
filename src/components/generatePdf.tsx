interface Template {
    id: number;
    name: string;
  }
  
  interface ResumeData {
    // Define structure for your resume data
  }
  
  interface State {
    templates: Template[];
    selectedTemplateId: number | null;
    resumeData: ResumeData;
  }
  
  class ResumeBuilder extends React.Component<{}, State> {
    state: State = {
      templates: [],
      selectedTemplateId: null,
      resumeData: {
        // Initialize your resume data structure
      },
    };
  
    componentDidMount() {
      // Fetch templates from the backend
      axios.get<Template[]>('/api/templates').then(response => {
        this.setState({ templates: response.data });
      });
    }
  
    handleTemplateSelect = (templateId: number) => {
      this.setState({ selectedTemplateId: templateId });
    };
  
    handleSubmit = () => {
      if (this.state.selectedTemplateId) {
        axios.post('/api/generate_resume', {
          templateId: this.state.selectedTemplateId,
          resumeData: this.state.resumeData,
        });
        // Handle response...
      } else {
        // Handle error: No template selected
      }
    };
  
    render() {
      return (
        <div>
          {/* Template selection UI */}
          <div>
            {this.state.templates.map(template => (
              <button key={template.id} onClick={() => this.handleTemplateSelect(template.id)}>
                {template.name}
              </button>
            ))}
          </div>
  
          {/* Resume data form */}
          {/* ... */}
  
          <button onClick={this.handleSubmit}>Generate Resume</button>
        </div>
      );
    }
  }
  