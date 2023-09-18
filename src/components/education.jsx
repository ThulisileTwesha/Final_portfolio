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
                        <h2><strong>Tertiary</strong></h2>
                        <p> 
                            <b>Course</b>: Bcom Hons (IS) <br/>
                            <br/>
                            <b>Institution</b>: UWC <br/>
                            <br/>
                            <b>Year obtained</b>: Current
                        </p>
                    </div>
                    <div className="timeline-component timeline-content">
                        <h2><strong>Tertiary</strong></h2>
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
                        <h2><strong>High School</strong></h2>
                        <p>
                            <b>Course</b>: National Senior Certificate <br/>
                            <br/>
                            <b>Institution</b>: Masibambane Secondary School <br/>
                            <br/>
                            <b>Year obtained</b>: 2018
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




