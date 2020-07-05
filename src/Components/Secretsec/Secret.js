import React from 'react';
import img1 from '../../../src/img/businessmain.jpg';

import './style.css'

const Secret =()=>{
    return(
        <div>
<div className="container">
    <div className="row">
        
            <div className="col-md-6" style={{marginTop: '50px' , marginBottom:'50px'}}>
               <h2>Our Secret</h2>
               <p>Morbi pellentesque, nisl id semper bibendum, 
                   nibh sem fermentum magna, eget commodo leo velit sit 
                   amet velit. Aliquam fermentum, lorem quis posuere mattis, 
                   est justo porttitor magna, in commodo risus justo vitae nibh.
                    Quisque consequat venenatis rutrum.

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


            <div className="col-md-6" style={{marginTop: '50px',marginBottom:'50px'}}>
            <img src={img1} alt="img" className="card-img-top" />
            </div>
    
    </div>
</div>

      </div>
    )
}

export default Secret;