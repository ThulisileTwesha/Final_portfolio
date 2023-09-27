
import React, { useRef, useState, useEffect } from "react";
import './contact.css';
import emailjs from '@emailjs/browser';
import linkedin from '../components/images/linkedin.png';
import github from '../components/images/github.png';
import ReCAPTCHA from "react-google-recaptcha";

export const ContactUs = () => {
  const form = useRef();


  /* form validation */
  const [inputFields, setInputFields] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const[formSubmitted, setFormSubmitted] = useState(false);

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
    const validationErrors = validateValues(inputFields);
    setErrors(validationErrors);
    setSubmitting(true);

    if (Object.keys(validationErrors).length === 0) {
      // Call the sendEmail function here after validation
      sendEmail();
    }
  };
  

  const sendEmail = () => {
    emailjs.sendForm('service_hfcx67a', 'template_aa8w57c', form.current, 'yZPcPORNnecZefv_j')
      .then((result) => {
        console.log(result.text);
        setTimeout(() => {
          setFormSubmitted(true);
        },);
      }, (error) => {
        console.log(error.text);
        setFormSubmitted(true);
      });

    // Reset the form fields
    form.current.reset();

    // Optionally, you can reset the inputFields state to clear the fields in React's state
    setInputFields({
      name: "",
      email: "",
      message: ""
    });
  };
 
   const finishSubmit = () => {
    console.log(inputFields);
  };
  

  

   useEffect(() => {
   if (Object.keys(errors).length === 0 && submitting) {
      finishSubmit();
     }
  }, );
  function onChange(value) {
    console.log("Captcha value:", value);
    setRecaptchaCompleted(true);
  }
  const [recaptchaCompleted, setRecaptchaCompleted] = useState(false);

  return (
    <div className="container " id="contactMe">
     
      <div className="center-contact m-auto"><h1>Contact</h1></div>  
     
        <div className=" " id="allForm">
          <div className='formHeading'>
            <h2 className="contact-h2">Get in touch:</h2>
            <div className='form'>
              <form onSubmit={handleSubmit} ref={form}>
                <div>
                  <input
                    className="feedback-input"
                    placeholder="Name"
                    type="text"
                    name="name"
                    value={inputFields.name}
                    onChange={handleChange}
                    style={{ border: errors.name ? "2px solid red" : null }}
                  />
                  {errors.name ? (
                    <p className="error">Name should not be empty</p>
                  ) : null}
                    
                  <input
                    className="feedback-input"
                    placeholder="Email"
                    type="email"
                    name="email"
                    value={inputFields.email}
                    onChange={handleChange}
                    style={{ border: errors.email ? "2px solid red" : null }}
                  />
                  {errors.email ? (
                    <p className="error">
                      Email should be at least 5 characters long
                    </p>
                  ) : null}
                  
                  <textarea
                    className="feedback-input"
                    placeholder="Message"
                    type="text"
                    name="message"
                    value={inputFields.message}
                    onChange={handleChange}
                    style={{ border: errors.message ? "2px solid red" : null }}
                  ></textarea>
                  {errors.message ? <p className="error">Message should not be empty</p> : null}
                </div>
                <ReCAPTCHA className="recaptcha"
                    sitekey="6Lf3vCAoAAAAAMMKWk_muZ_eM9XSb7SLxwYkHPae"
                    onChange={onChange}
                />
                <br />
                <button type="submit" disabled={!recaptchaCompleted}>Submit</button>
               
              </form>
              {formSubmitted &&(
                  <p className="text-success">Message successfully submitted!</p>
                )}
              
            </div>  
          </div>
          <div className="" id="allIcon">
          <div   className='map'>
            <iframe
              
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3313.186211192282!2d18.7451908604153!3d-33.8590916154689!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc5390d852438f%3A0xfd8a72c1151afd9c!2s25907%20Mqhamkana%20St%2C%20Kraaifontein%20East%2C%20Cape%20Town%2C%207570!5e0!3m2!1sen!2sza!4v1693212775485!5m2!1sen!2sza"
             
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className='Icons'>
            <div className='boxIcons'><a href='https://www.linkedin.com/in/thulisiletwesha/' target='_blank'><img src={linkedin} alt='' width={50}></img></a></div>
            <div className='boxIcons'><a href='https://github.com/ThulisileTwesha' target="_blank"><img src={github} alt='' width={45}></img></a></div>
          </div>
        </div>


        </div>
        
    
    </div>
   
  );
}

export default ContactUs;
