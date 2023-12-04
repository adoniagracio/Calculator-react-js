import React, { useState } from 'react';
import '../../style/supportpage.css';

const Form = () => {
  const initialFormData = {
    first: '',
    last: '',
    email: '',
    topic: '',
    description: '',
  };

  const [formData, setFormData] = useState(initialFormData);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [ticketNumber, setTicketNumber] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ 
      ...formData,
       [name]: value });
  };

  const isSubmitDisabled = !(formData.first && formData.last && formData.email && formData.topic);



  const handleSubmit = (e) => {
    e.preventDefault();  
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
  };

  const generateRandomTicketNumber = () => {
    const randomTicketNumber = Math.floor(Math.random() * 10000) + 100000;
    setTicketNumber(randomTicketNumber);
  }
  return (
    <div>
    {!isSubmitted ? (
    <form action="#" method="post" onSubmit={handleSubmit}>
      <h4>
        Name<span className='required'> *</span>
      </h4>
      <input
        type="text"
        name="first"
        placeholder="First"
        value={formData.first}
        onChange={handleInputChange}
        required
      />
      <input
        type="text"
        name="last"
        placeholder="Last"
        value={formData.last}
        onChange={handleInputChange}
        required
      />
      <h4>
        Email<span className='required'> *</span>
      </h4>
      <input
        type="email"
        name="email"
        className="email"
        value={formData.email}
        onChange={handleInputChange}
        required
      />
      <h4>
        Topic<span className='required'> *</span>
      </h4>
      <div className='topicborder'>
        <h3>What can we help you today?</h3>
        <label>
          <input
            type="radio"
            name="topic"
            className="bug"
            value="General"
            onChange={handleInputChange}
            required
          />
          General
        </label>
        <label>
          <input
            type="radio"
            name="topic"
            className="general"
            value="Bug"
            onChange={handleInputChange}
            required
          />
          Bug
        </label>
      </div>
      <h6>
        Description<span className='optional'> optional</span>
      </h6>
      <input
        type="text"
        name='description'
        placeholder='Description Report'
        className="description"
        value={FormData.description}
        onChange={handleInputChange}
      />
      <button type="submit" onClick={generateRandomTicketNumber} disabled={isSubmitDisabled} className={isSubmitDisabled ? 'grey-button': '' }>
        SEND
      </button>
    </form>
    ):(
     <div className='massage'>
      <h5>Thank you for sending us your report,we will track the problem
        now
      </h5>
      {ticketNumber !== null && (
      <p className=''>ticket number: <b>{ticketNumber}</b></p>
      )}
    </div>
    )}
    </div>
  );
};

export default Form;
