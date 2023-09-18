import React from "react";
import './home.css';
import image from '../components/images/thully.png';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';




function home() {

  return (
    
  <div  className='' id="homeOpen">
    <div className="container d-md-flex" id='home' >
      <div className="m-5" id="picture"><Image src={image} fluid /></div> 
       <div className="m-5" id="b1" style={{position:"relative", left:"-10%", top:"30px"}}>
        <h3 className="text-start text-dark my-5">Thulisile Twesha <br/>
         Junior Software Developer</h3>
        
        <p><b>
          I am a Junior Web Developer who is interested in 
          Front-end project.I am a dedicated, and hardworking 
          person. My goal is to create amazing websites,and web 
          based applications that drive your business. I have 
          experience in Python,Html,CSS and JavaScript.</b>
        </p>
        <br/>
        <br/>
        <div className="btns" style={{position:"relative", left:"-10%", }}>
        <Button variant="secondary" className="btn1" href="">Download My CV</Button>{' '}
        <Button variant="secondary" className="btn2" href="#contactMe">Get in touch</Button>{''}
      
        </div>
      
        </div>
    </div>
    </div>
  );
}

export default home;
