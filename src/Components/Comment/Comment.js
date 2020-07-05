import React from 'react';

import './style.css'

const Comment =()=>{
 
    return(
     
           <div className="servicesec container-fluid">

               <div className="container serv">
               <div className="row">
                <div className="col-md-12">
                <i class="far fa-comment"></i>
                </div>
               </div>
               </div>
               <br/>
               <div className="card-deck container-fluid">
                   
  <div className="card">
  
    <div className="card-body comment">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <br/>
  <br/>
  <div className="card">
  
    <div className="card-body comment">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  

  <br/>
  <br/>
  <div className="card">
  
    <div className="card-body comment">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>

  <br/>
  <br/>
</div>
<br/>
<br/>




           </div>
        )
    }

    export default Comment;