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
    console.log(formData); // for now, log the form data to console
  };

  return (
    <div className="container mt-5">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="customerName" className="form-label">Customer Name</label>
          <input 
            type="text" 
            className="form-control" 
            id="customerName" 
            name="customerName" 
            value={formData.customerName} 
            onChange={handleChange} 
          />
        </div>
        <div className="mb-3">
          <label htmlFor="device" className="form-label">Device</label>
          <input 
            type="text" 
            className="form-control" 
            id="device" 
            name="device" 
            value={formData.device} 
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="issueDescription" className="form-label">Issue Description</label>
          <textarea 
            className="form-control" 
            id="issueDescription" 
            rows="3" 
            name="issueDescription" 
            value={formData.issueDescription} 
            onChange={handleChange}
          ></textarea>
        </div>
        <button type="submit" className="btn btn-success">Submit</button>
      </form>
    </div>
  );
}

export default RepairForm;
