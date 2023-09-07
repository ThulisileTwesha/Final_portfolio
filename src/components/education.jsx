import React from "react";
import './education.css';
import cap from '../components/images/education.png'
import {MDBRow, MDBCol} from 'mdb-react-ui-kit';
import {MDBContainer} from 'mdb-react-ui-kit';



function about() {
  return <div className='education'>

<MDBContainer>
    <MDBRow>
        <MDBCol>
        <div className='edHeading' id='educationHeading'><img src={cap} alt='' width={60} className='edImg'></img><h1>Education</h1></div>
          <div className='allTimeline'>
            <div className="timeline" id='edTimeline'> 
                <div className="timeline-empty"></div>
                    <div className="timeline-middle" id='edTime-middle'>
                        <div className="timeline-circle"></div>
                    </div>
                    <div className="timeline-component timeline-content">
                        <h3>Tertiary</h3>
                        <p> 
                            Course: Bcom Hons (IS) <br/>
                            <br/>
                            Institution: UWC <br/>
                            <br/>
                            Year obtained: Current
                        </p>
                    </div>
                    <div className="timeline-component timeline-content">
                        <h3>Tertiary</h3>
                        <p>
                            <b>Course</b>  : Bachelor of Administration <br/>
                            <br/>
                            <strong>Institution</strong>: UWC <br/>
                            <br/>
                            <strong>Year obtained</strong> : 2021
                        </p>
                    </div>
                    <div className="timeline-middle">
                        <div className="timeline-circle" id='edTimeline-circle'></div>
                    </div>
                    <div className="timeline-empty"></div>
                    <div className="timeline-empty"></div>  
                    <div className="timeline-middle">
                        <div className="timeline-circle"></div>
                    </div>
                    <div className=" timeline-component timeline-content">
                        <h3>High school</h3>
                        <p>
                            Course:National Senior Certificate <br/>
                            <br/>
                            Institution: Masibambane Secondary School <br/>
                            <br/>
                            Year obtained: 2018
                        </p>
                    </div>

            </div>
          </div>
        </MDBCol>
    </MDBRow>
</MDBContainer>
        </div>;
         
 
 
}

export default about;




<div className="container_about">
<h3 className="text-center text-dark my-5">About</h3>
<div className='aboutMe'>
   <div className='aboutPara'>
   <p className="text-start text-dark my-5">  I have completed a degree that allowed me to major in Information Systems and midst its completion,
       I became curious on learning about coding after seeing Women In Tech who would talk about their 
       journeys but at that time I had no vast information of where to go or where to start. 
       
       I got an opportunity to join the Absa learnership this year and has been a life changing experience. 
       I now have experience in a number of coding languages and frameworks. I am still learning and 
       improving my skills continuously. I believe web design can be more diverse and inspiring,  
       with a mission to present the possibilities of web design. I am pursuing new expressions through experiments and thoughts.</p>
      
   </div>
   
   <div className='education'>
     <div className='edHeading' id='educationHeading'><img src={cap} alt='' width={50} className='edImg'></img><h3>EDUCATION</h3></div>
     <div className='allTimeline'>
       <div className="timeline" id='edTimeline'> 
           <div className="timeline-empty"></div>
               <div className="timeline-middle" id='edTime-middle'>
                   <div className="timeline-circle"></div>
               </div>
               <div className="timeline-component timeline-content">
                   <h3>Tertiary</h3>
                   <p> 
                       Course: Bcom Hons (IS) <br/>
                       <br/>
                       Institution: UWC <br/>
                       <br/>
                       Year obtained: Current
                   </p>
               </div>
               <div className="timeline-component timeline-content">
                   <h3>Tertiary</h3>
                   <p>
                       <b>Course</b>  : Bachelor of Administration <br/>
                       <br/>
                       <strong>Institution</strong>: UWC <br/>
                       <br/>
                       <strong>Year obtained</strong> : 2021
                   </p>
               </div>
               <div className="timeline-middle">
                   <div className="timeline-circle" id='edTimeline-circle'></div>
               </div>
               <div className="timeline-empty"></div>
               <div className="timeline-empty"></div>  
               <div className="timeline-middle">
                   <div className="timeline-circle"></div>
               </div>
               <div className=" timeline-component timeline-content">
                   <h3>High school</h3>
                   <p>
                       Course:National Senior Certificate <br/>
                       <br/>
                       Institution: Masibambane Secondary School <br/>
                       <br/>
                       Year obtained: 2018
                   </p>
               </div>

       </div>
     </div>

   </div> 
 </div>     



</div>;