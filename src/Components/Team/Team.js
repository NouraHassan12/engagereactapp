import React from 'react';
// import './App.css';
// import img from '../../../src/img/plan.jpg';
import './style.css';
import mem2 from '../../../src/img/team-2.jpg';
import mem3 from '../../../src/img/team-3.jpg';
import mem4 from '../../../src/img/team-4.jpg';



const Team =()=>{
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
<img src={mem2} alt="img" className="card-img-top" />
<div className="card-body">
<div className="row">
    <div className="col-md-6 text-left">
<h5>John Doe</h5>
<p>Web Designer</p>
    </div>

   
</div>

<p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>

</div>
</div>
<div className="card">
<img src={mem3} alt="img" className="card-img-top" />
<div className="card-body">
<div className="row">
    <div className="col-md-6 text-left">
<h5>John Doe</h5>
<p>Web Designer</p>
    </div>

   
</div>
<p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>

</div>
</div>
<div className="card">
<img src={mem4} alt="img" className="card-img-top" />
<div className="card-body">
<div className="row">
    <div className="col-md-6 text-left">
<h5>John Doe</h5>
<p>Web Designer</p>
    </div>

   
</div>
<p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>

</div>
</div>
</div>
    </div>



     
    )
}

export default Team;