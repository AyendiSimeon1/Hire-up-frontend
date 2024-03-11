import React, { useState } from 'react';
import axios from 'axios';

const ResumeForm = () => {
    const [templateId, setTemplateId] = useState('');
    const [profileData, setProfileData] = useState({ /* user profile fields */ });

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post('/api/generate-resume/', {
                template_id: templateId,
                user_profile: profileData
            });
            // Handle the PDF file response here
            // For instance, you might download it or display it in an iframe
        } catch (error) {
            console.error('Error generating resume:', error);
        }
    };

    // JSX for your form
    return (
        <form onSubmit={handleSubmit}>
            {/* Form fields for selecting template and entering profile data */}
            <button type="submit">Generate Resume</button>
        </form>
    );
};

export default ResumeForm;


