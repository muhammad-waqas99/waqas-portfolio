import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FiCheck, FiX, FiSend, FiLoader } from 'react-icons/fi';

const ContactForm = () => {
  const formRef = useRef();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState(null);

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleBlur = (field) => {
    setTouched({ ...touched, [field]: true });
    validateField(field, formData[field]);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (touched[name]) {
      validateField(name, value);
    }
  };

  const validateField = (field, value) => {
    let err = { ...errors };

    if (field === 'name') {
      if (!value.trim()) err.name = 'Name is required';
      else delete err.name;
    }

    if (field === 'email') {
      if (!value.trim()) err.email = 'Email is required';
      else if (!validateEmail(value)) err.email = 'Invalid Email';
      else delete err.email;
    }

    if (field === 'message') {
      if (!value.trim()) err.message = 'Message is required';
      else if (value.trim().length < 10) err.message = 'Must be at least 10 characters';
      else delete err.message;
    }

    setErrors(err);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = {};
    if (!formData.name.trim()) validationErrors.name = 'Name is required';
    if (!formData.email.trim()) validationErrors.email = 'Email is required';
    else if (!validateEmail(formData.email)) validationErrors.email = 'Invalid Email';
    if (!formData.message.trim()) validationErrors.message = 'Message is required';
    else if (formData.message.trim().length < 10) validationErrors.message = 'Must be at least 10 characters';

    setTouched({ name: true, email: true, message: true });
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    setLoading(true);
    setStatusMessage(null);

   
    const serviceId = import.meta.env?.VITE_EMAILJS_SERVICE_ID || process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env?.VITE_EMAILJS_TEMPLATE_ID || process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env?.VITE_EMAILJS_PUBLIC_KEY || process.env.REACT_APP_EMAILJS_PUBLIC_KEY;



    emailjs
      .sendForm(serviceId, templateId, formRef.current, publicKey)
      .then(
        () => {
          setLoading(false);
          setStatusMessage({ type: 'success', text: 'Message sent successfully!' });
          setFormData({ name: '', email: '', subject: '', message: '' });
          setTouched({});
          setErrors({});
        },
        (error) => {
          console.error('EMAILJS ERROR:', error);
          setLoading(false);
          setStatusMessage({ type: 'error', text: 'Failed to send message. Please try again.' });
        }
      );
  };

  return (
    <div className="contact-block">
      <h3 className="block-title">message.form</h3>
      <form ref={formRef} onSubmit={handleSubmit} className="form-card" noValidate>
        
  
        <div className="form-group">
          <div className="label-wrapper">
            <label>Name *</label>
            {touched.name && (
              errors.name ? (
                <span className="field-status error"><FiX /> {errors.name}</span>
              ) : (
                <span className="field-status success"><FiCheck /> Valid</span>
              )
            )}
          </div>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            onBlur={() => handleBlur('name')}
            className={touched.name ? (errors.name ? 'input-error' : 'input-success') : ''}
          />
        </div>

      
        <div className="form-group">
          <div className="label-wrapper">
            <label>Email *</label>
            {touched.email && (
              errors.email ? (
                <span className="field-status error"><FiX /> {errors.email}</span>
              ) : (
                <span className="field-status success"><FiCheck /> Valid</span>
              )
            )}
          </div>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            onBlur={() => handleBlur('email')}
            className={touched.email ? (errors.email ? 'input-error' : 'input-success') : ''}
          />
        </div>

 
        <div className="form-group">
          <label>Subject</label>
          <input
            type="text"
            name="subject"
            placeholder="Subject (Optional)"
            value={formData.subject}
            onChange={handleChange}
          />
        </div>


        <div className="form-group">
          <div className="label-wrapper">
            <label>Message *</label>
            {touched.message && (
              errors.message ? (
                <span className="field-status error"><FiX /> {errors.message}</span>
              ) : (
                <span className="field-status success"><FiCheck /> Valid</span>
              )
            )}
          </div>
          <textarea
            name="message"
            rows="5"
            placeholder="Write your message here..."
            value={formData.message}
            onChange={handleChange}
            onBlur={() => handleBlur('message')}
            className={touched.message ? (errors.message ? 'input-error' : 'input-success') : ''}
          ></textarea>
        </div>

        {statusMessage && (
          <div className={`status-banner ${statusMessage.type}`}>
            {statusMessage.text}
          </div>
        )}

        <button type="submit" className="btn-execute" disabled={loading}>
          {loading ? (
            <>
              <FiLoader className="spin-icon" /> Executing...
            </>
          ) : (
            <>
              <span>&gt; sendMessage()</span>
              <FiSend />
            </>
          )}
        </button>

      </form>
    </div>
  );
};

export default ContactForm;