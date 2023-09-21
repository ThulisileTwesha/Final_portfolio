import React from "react";
import './experience.css';
import photo from '../components/images/photo.jpg';

function experience() {
  return<div className="" > <div className="container" id="experiences">
             <div className="center-contact mx-auto"><h1>Experience</h1> </div>  
  
     {/* <div className='experience'>
        <div className='experiencePara'>
          <p>
              30 January 2023 - Present  
              <br/>
              <strong> Software Developer Intern/ Junior Software Developer</strong>
              <br/> 
                          
              As a Junior Software Developer, I help create programs and participate in test runs. 
               I am also part of a paired programming group to complete tasks with senior developers.<br/>
              <ul>
                <li>6 months CapaCiTi Career Acceleartor</li>
                <li>Address: 97 Durham Avenue, Salt River, Cape Town, 8000</li>
                <li>Phone: 021 409 7000</li>
              </ul>
                      
          </p>
          <br/>
          <br/>

          <p>
            01 November 2021- 30 September 2022  
            <br/>
            <strong>Educator Assistant/ Administrative Assistant</strong>
            <br/> 
                        
            As an Educator Assistant, I am enthusiastic and competent, experienced office assistant 
            with training in a variety of administrative duties. Capable of teamwork and working under 
            duress.Successful track record of answering phone calls, supplying clients with information, 
            and serving as departmental liaison.<br/>
            <ul>
              <li> 11 Months Wallacedene Secondary School</li>
              <li> Address: Wallacedene, Kraaifontein, 7570</li>
              <li> Phone: 021 978 5715</li>
            </ul>
          </p>



        </div>
                   
      </div>
                */}
                  <div class = "card">
    <img src={photo}alt=""></img>
    <div class="card-content">
      <h2>
        Card Heading
      </h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt exercitationem iste, voluptatum, quia explicabo laboriosam rem adipisci voluptates cumque, veritatis atque nostrum corrupti ipsa asperiores harum? Dicta odio aut hic.
      </p>
      <a href="#" class="button">
        Find out more 
        <span class="material-symbols-outlined">
          arrow_right_alt
        </span>
      </a>
    </div>
  </div>








  </div>
</div>;
}

export default experience;
