import React from 'react';
// import './App.css';
import img2 from '../../../src/img/businessmain.jpg';
import './style.css';



const Worth=()=>{
    return(
<div className="servicesecsss container-fluid">
    <div className="row">
        
            <div className="col-md-6" style={{marginTop: '50px' , marginBottom:'50px'}}>
            <img  alt="img" src={img2} className="card-img-top" />
            </div>


            <div className="col-md-6" style={{marginTop: '50px',marginBottom:'50px'}}>
           
            <h2>Why is it worth it?</h2>
               <p>We have been operating for over 30 years and are Members of The Federation of
                    Master Builders. We work on projects big and small from small residential 
                    extensions to full house and commercial
                    builds and we are registered NHBC house builders.

               </p>
             
          <div className="secsection-icon"><i class="fas fa-check"></i></div>
          <p className="secsection-title">Aliquam fermentum lorem quis posuere mattis.</p>
       
    
          
          <div className="secsection-icon"><i class="fas fa-check"></i></div>
          <p className="secsection-title">Aliquam fermentum lorem quis posuere mattis.</p>

                
          <div className="secsection-icon"><i class="fas fa-check"></i></div>
          <p className="secsection-title">Aliquam fermentum lorem quis posuere mattis.</p>

          <div className="actions">
          <a href="#about" className="btn-get-started">LEARN MORE</a>
         
        </div>
            </div>
    
    </div>
</div>
     
    )
}

export default Worth;