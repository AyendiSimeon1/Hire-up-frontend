import { useState } from "react";
import axios from 'axios';

const Data = () => {
  const [formData, setFormData] = useState({
    user: '',
    email: '',
    full_name: ''
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Form submitted");
    alert('Form Submitted');
    console.log(formData);
    try {
      const response = await axios.post("http://127.0.0.1:8000/core/personal-information/", formData);
      console.log(response.data);
      alert('Api Request sent');
    } catch (error) {
      console.error('There was an error!', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="user"
        value={formData.user}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="full_name"
        value={formData.full_name}
        onChange={handleInputChange}
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleInputChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Data;
