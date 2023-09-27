import React from 'react'
import './about.css';
import tee from '../components/images/tee.png';

export default function about() {
  return (
    <div className='container' id='about'> 
    <h1 className="text-center text-dark my-5">About</h1>
    

    
    <div className='about_otherContent'>
     <div className='about_pic' style={{width:"300px", height:"400px"}}><img src={tee} alt=''></img></div> 
    <div id='about_container'>
        <p className=" " id='paragraph' style={{fontSize:"12px", color:"black"}}> 
        I have completed a degree that allowed me to major in Information Systems and midst its completion,
        I became curious on learning about coding after seeing Women In Tech who would talk about their 
        journeys but at that time I had no vast information of where to go or where to start. 
        I got an opportunity to join the Absa learnership this year and has been a life changing experience.</p>

      <p className='' id='paragraph' style={{fontSize:"12px", color:"black"}}>I now have experience in a number of coding languages and frameworks. I am still learning and 
        improving my skills continuously. I believe web design can be more diverse and inspiring,  
        with a mission to present the possibilities of web design. I am pursuing new expressions through
        experiments and thoughts.</p>
     
  

     <div className='row mb-3' id='aboutInfo'>
      <div className='col-sm-6 py-2'><h6>Name:<span className='text-secondary'>Thulisile Twesha </span></h6></div>
      <div className='col-sm-6 py-2'><h6>Birthday: <span className='text-secondary'>10 October </span></h6></div>
      <div className='col-sm-6 py-2'><h6>Highest Qualification: <span className='text-secondary'>Degree </span></h6></div>
      <div className='col-sm-6 py-2'><h6>Course: <span className='text-secondary'>Bachelor of Administration</span></h6></div>
      <div className='col-sm-6 py-2'><h6>Experience: <span className='text-secondary'>Beginner level </span></h6></div>
      <div className='col-sm-6 py-2'><h6>Email: <span className='text-secondary'>tweshathulisile@gmail.com </span></h6></div>
     </div>
     
    </div>
    </div>




    




    </div>
   
  
    
  )
}
