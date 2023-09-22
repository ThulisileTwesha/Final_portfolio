import React from "react";
import './skills.css';
import python from '../components/images/python.png';
import git from '../components/images/git.png';
import vs from '../components/images/vs.png';
import html from '../components/images/html.png';
import css from '../components/images/css.png';
import js from '../components/images/js.png';
import picture from '../components/images/sjava.png';
import pic from '../components/images/react.png';


function skills() {
  return (<div className="" >  
    <div className="container " id="skillsStart">
            <div className="center-contact mx-auto"><h1>Skills</h1></div>  
       
      <div className="m-5 d-md-flex" id="skills">
        <div className="m-5" id="box"><img src={python} alt='' width={140}></img></div>
        <div className="m-5" id="box"><img src={git} alt='' width={140}></img></div>
        <div className="m-5" id="box"><img src={vs} alt='' width={150}></img></div>
        <div className="m-5" id="box"><img src={html} alt='' width={130}></img></div>
        <div className="m-5" id="box"><img src={css} alt='' width={150}></img></div>
        <div className="m-5" id="box"><img src={js} alt='' width={150}></img></div>
        <div className="m-5" id="box"><img src={picture} alt='' width={70}></img></div>
        <div className="m-5" id="box"><img src={pic} alt='' width={120}></img></div>
      </div>
    </div>
    </div>
  );
}

export default skills;
