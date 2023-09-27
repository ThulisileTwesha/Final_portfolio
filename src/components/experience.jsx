import React from "react";
import './experience.css';

function experience() {
  return<div className="container" id="experiences">
          <h1 className="text-center">Experience</h1>
  
     <div className='experience'>
          <article class="card">
            <img
              class="card__background"
              src='https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80'
              alt="Photo of Cartagena's cathedral at the background and some colonial style houses"
              width="1920"
              height="2193"
            />
            <div class="card__content | flow">
              <div class="card__content--container | flow">
                <h2 class="card__title">Software Developer Intern</h2>
                <p class="card__description" style={{color:"white", fontSize:"11px"}}>
                
                        30 January 2023 - Present
                        <br /> 
                              
                        As a Junior Software Developer, I help create programs and participate in test runs. 
                        I am also part of a paired programming group to complete tasks with senior developers.<br/>
                        <ul>
                          <li>6 months CapaCiTi Career Acceleartor</li>
                          <li>Address: 97 Durham Avenue, Salt River, Cape Town, 8000</li>
                          <li>Phone: 021 409 7000</li>
                        </ul>
                                
                
                </p>
              </div>
         
            </div>
          </article>

          <article class="card">
            <img
              class="card__background"
              src='https://media.istockphoto.com/id/1130572699/photo/young-woman-executive-working-with-laptop-and-taking-notes.jpg?s=1024x1024&w=is&k=20&c=Y8sEjBW6AkTNI_TcLzDTUV3Ly8UvvQfWu7Rz5yJ6weU='
              alt="Photo of Cartagena's cathedral at the background and some colonial style houses"
              width="1920"
              height="2193"
            />
            <div class="card__content | flow">
              <div class="card__content--container | flow">
                <h2 class="card__title">Educator/ Administrative Assistant</h2>
                <p className="card__description" style={{color:"white", fontSize:"10px"}}>
                01 November 2021- 30 September 2022  
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
          </article>



      </div>
                

</div>;
}

export default experience;
