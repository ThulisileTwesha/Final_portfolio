import React from "react";
import './projects.css';
import school from '../components/images/website3.webp';
import kj from '../components/images/kj.png';
import cooking from '../components/images/website2.webp';


function Projects() {
  return (
    <div className="container" id="projects">

 
<h1>Projects</h1>
       <div  className="d-md-flex" id="startProjects">
            
      <div className="m-5">
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <p className="title"><img src={school} alt='' width={190} height={200} ></img></p>
                         
          </div>
          <div className="flip-card-back">
            <p className="title">School Website</p>
            <p>This school website is created to widen <br/>
                the school presence to the community at large.</p>
          </div>
        </div>
      </div>
        
      </div> 



      <div className="m-5">
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <p className="title"><img src={kj} alt='' width={180} height={200} ></img></p>
                           
          </div>
          <div className="flip-card-back">
            <p className="title">Business</p>
            <p>KJ lifestyle is black owned business that <br/>
                sells products by the owner in the comfort <br/>
                of her own home.</p>
          </div>
        </div>
      </div>
      </div>



      <div className="m-5">
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <p className="title"><img src={cooking} alt='' width={180} height={200} ></img></p>            
            </div>
            <div className="flip-card-back">
              <p className="title">Cooking App</p>
              <p>This app has recipes that a person can use to cook dishes.</p>
            </div>   
          </div>
        </div>
      </div>



       </div>

      
  </div>
  );
}

export default Projects;
