import React from 'react';
// import './App.css';
import './style.css'
import img from '../../../src/img/plan.jpg';

const Service =()=>{
    return(
     
           <div className="servicesec container-fluid">
               <div className="container serv">
               <div className="row">
                <div className="col-md-12">
                <h3>Our Services</h3>
                <p>This is a subtitle, feel free to change it!</p>
                </div>
               </div>
               </div>
               <br/>
               <div className="card-deck container-fluid">
                   
  <div className="card">
    <img src={img} alt="img" className="card-img-top" />
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div className="card">
  <img src={img} alt="img" className="card-img-top" />
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div className="card">
  <img src={img}  alt="img" className="card-img-top" />
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
</div>
           </div>
        )
    }

    export default Service;