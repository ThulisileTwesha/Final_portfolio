import React from "react";
import './home.css';
import image from '../components/images/thully.png';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import cv from '../components/thuli.pdf';





function home() {

  return (

    <div className='' id="homeOpen">
      <div className="container d-md-flex" id='home' >
        <div id="picture"><Image src={image} fluid /></div>
        <div id="b1" style={{ position: "relative" }} >
          <div className="text-start " >
            <h3 >Thulisile Twesha <br />
              Junior Software Developer</h3>
          </div>
          <p style={{ color: 'black', fontSize: "12px" }}><b>
            I am a Junior Web Developer who is interested in
            Front-end project.I am a dedicated, and hardworking
            person. My goal is to create amazing websites,and web
            based applications that drive your business. I have
            experience in Python,Html,CSS and JavaScript.</b>
          </p>
          <br />
          <br />
          <div className="btns">
            <Button variant="secondary" className="btn1" href={cv} target="_blank">Download CV</Button>{' '}
            <Button variant="secondary" className="btn1" href="#contactMe">Get in touch</Button>{''}

          </div>

        </div>
      </div>
    </div>
  );
}

export default home;
