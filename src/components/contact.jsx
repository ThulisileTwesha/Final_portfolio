import React from "react";
import './contact.css';
import react, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import linkedin from '../components/images/linkedin.png';
import github from '../components/images/github.png';

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
  return (
    <div className="container " id="contactMe">
        <div className="center-contact m-auto"><h1>Contact</h1></div>  
                <div className="d-md-flex">
                <div className="m-5 col-md-5" id="allForm">
                <div className='formHeading'>
                  <h2>Get in touch:</h2>
                      <div className='form'>
                        <form  ref={form}  onSubmit={sendEmail}> 
                          <input name type="text" class="feedback-input" placeholder="Name" />

                          <input name type="text" class="feedback-input" placeholder="Email"  />

                          <textarea name class="feedback-input" placeholder="Message"   ></textarea>
                          <input type="submit"  value="SUBMIT" />
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
