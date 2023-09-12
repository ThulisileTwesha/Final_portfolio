import React from "react";
import './contact.css';
import react, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import linkedin from '../components/images/linkedin.png';
import github from '../components/images/github.png';
import { useState, useEffect } from "react";

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_hfcx67a', 'template_aa8w57c', form.current, 'yZPcPORNnecZefv_j')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };

  /*form validation*/

  const [inputFields, setInputFields] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const validateValues = (inputValues) => {
    let errors = {};
    if (inputValues.name.length < 2) {
      errors.name = "Name is too short";
    }
    if (inputValues.email.length < 5) {
      errors.email = "Email is too short";
    }
    if (inputValues.message.length < 2) {
      errors.message = "Message is too short";
    }
   
    return errors;
  };
  const handleChange = (e) => {
    setInputFields({ ...inputFields, [e.target.name]: e.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(validateValues(inputFields));
    setSubmitting(true);
  };

  const finishSubmit = () => {
    console.log(inputFields);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && submitting) {
      finishSubmit();
    }
  }, [errors]);
  return (
    <div className="container " id="contactMe">
      {Object.keys(errors).length === 0 && submitting ? (
          <span className="success">Successfully submitted ✓</span>
        ) : null}

        <div className="center-contact m-auto"><h1>Contact</h1></div>  
          <div className="d-md-flex">
            <div className="m-5 col-md-5" id="allForm">
              <div className='formHeading'>
                <h2>Get in touch:</h2>
                <div className='form'>
                <form onSubmit={handleSubmit}>
                  <div>
                    <input class="feedback-input" placeholder="Name"
                      type="text"
                      name="name"
                      value={inputFields.name}
                      onChange={handleChange}
                      style={{ border: errors.name ? "2px solid red" : null }}
                    ></input>
                    {errors.name ? (
                      <p className="error">Name should not be empty</p>
                    ) : null}
                    
                    <input class="feedback-input" placeholder="Email"
                      type="email"
                      name="email"
                      value={inputFields.email}
                      onChange={handleChange}
                      style={{ border: errors.email ? "2px solid red" : null }}
                    ></input>
                    {errors.email ? (
                      <p className="error">
                        Email should be at least 15 characters long
                      </p>
                    ) : null}
                  
                    <textarea class="feedback-input" placeholder="Message"
                      type="text"
                      name="message"
                      value={inputFields.message}
                      onChange={handleChange}
                      style={{ border: errors.message ? "2px solid red" : null }}
                    ></textarea>
                    {errors.message ? <p className="error">Message should not be empty</p> : null}
                  </div>
                  <button type="submit">Submit</button>
                </form>

              </div>  
              </div>
            </div>
      
          <div className="col-md-4" id="allIcon">
            <div >
            <iframe className='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3313.186211192282!2d18.7451908604153!3d-33.8590916154689!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc5390d852438f%3A0xfd8a72c1151afd9c!2s25907%20Mqhamkana%20St%2C%20Kraaifontein%20East%2C%20Cape%20Town%2C%207570!5e0!3m2!1sen!2sza!4v1693212775485!5m2!1sen!2sza"
           style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>
            <div className='Icons'>
              <div className='boxIcons'><a href='https://www.linkedin.com/in/thulisiletwesha/' target='blank'><img src={linkedin} alt='' width={50}></img></a></div>
              <div className='boxIcons'><a href='https://github.com/ThulisileTwesha'><img src={github} alt='' width={45}></img></a></div>

            </div>
          </div>
            </div>
           

    </div>
  );
}

export default ContactUs;
