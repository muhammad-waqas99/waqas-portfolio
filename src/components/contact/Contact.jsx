import React from 'react';
import { contactData } from '../../data/contactData';
import ContactInfo from './ContactInfo';
import SocialLinks from '../SocialLinks';
import ContactForm from './ContactForm';
import '../../css/Contact.css';

const Contact = () => {
  return (
    <section className="contact-container" id="contact">
      <div className="contact-wrapper">
        <div className="contact-header">
          <p className="path-text">{contactData.header.path}</p>
          <h2 className="section-title">{contactData.header.file}</h2>
          <p className="section-subtitle">{contactData.header.description}</p>
        </div>

        <div className="divider"></div>

       
        <div className="contact-content-grid">
    
          <div className="contact-left">
            <ContactInfo info={contactData.info} />
            <SocialLinks socials={contactData.socials} />
          </div>

         
          <div className="contact-right">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;