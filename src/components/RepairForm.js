import React, { useState } from 'react';

function RepairForm() {
  const [formData, setFormData] = useState({
    customerName: '',
    device: '',
    issueDescription: '',
    // ... any other fields you need
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here we will make the API call to our backend to save the form data
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="customerName" value={formData.customerName} onChange={handleChange} placeholder="Customer Name" />
      <input type="text" name="device" value={formData.device} onChange={handleChange} placeholder="Device" />
      <textarea name="issueDescription" value={formData.issueDescription} onChange={handleChange} placeholder="Issue Description"></textarea>
      {/* Other form fields here */}
      <button type="submit">Submit</button>
    </form>
  );
}

export default RepairForm;
