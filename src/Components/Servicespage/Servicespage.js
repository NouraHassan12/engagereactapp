import React from 'react';
// import './App.css';
import './style.css';
import img2 from '../../../src/img/businessmain.jpg';
import Powerfuloptions from '../Powerfuloptions/Powerfuloptions';
import Worth from '../Worth/Worth';
import Convincedservices from '../Convincedservices/Convincedservices';
import {Link} from 'react-router-dom';


const Servicespage =(props)=>{
    return(

      <div>
      {/* <header id="header"> */}
      <div className="container">

  

{/* <nav className="navbar navbar-expand-lg navbar-light ">
  <h1 className="navbar-brand" style={{color: 'blak'}}>engage</h1>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <Link className="nav-link" to="/" style={{color: 'black'}}>Home <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/about" style={{color: 'black'}}>About</Link>
      </li>

      <li className="nav-item">
        <Link className="nav-link" to="/Services" style={{color: 'black'}}>Services</Link>
      </li>


      <li className="nav-item">
        <Link className="nav-link" to="/Pricing" style={{color: 'black'}}>Pricing</Link>
      </li>
     
      <li className="nav-item">
        <Link className="nav-link" to="/Contact" style={{color: 'black'}}>Contact</Link>
      </li>

      <li className="nav-item">
        <Link className="nav-link" to="/News" style={{color: 'black'}}>News</Link>
      </li>

    </ul>
  
  </div>
</nav> */}
      
    </div>
{/* </header> */}
<br/>
<br/>

<div className="servicesecsss container-fluid">
 <div className="container-fluid" style={{padding:'30px'}}>
   <div className="row">
    <div className="col-md-6">
<h2 style={{fontWeight:'200'}}>Services</h2>
    </div>

    <div className="col-md-6">
<h2 className="text-right" style={{color:'gray', fontWeight:'200'}}>Home{props.match.url}</h2>
      </div>
   </div>
 </div>

</div>
<div className="container" style={{marginTop:'70px' , marginBottom:'70px'}}>
    <div className="row">
        <div className="col-md-6">
        <img src={img2} alt="img" className="card-img-top"/> 
        </div>


        <div className="col-md-6" style={{marginTop:'70px'}}>
            <h3>Brilliant Services.</h3>

           <p>Morbi pellentesque, nisl id semper bibendum, nibh sem 
               fermentum magna, eget commodo leo velit sit amet velit.
                Aliquam fermentum, lorem quis posuere mattis, est justo porttitor magna. 
                Cras auctor consectetur pharetra. Phasellus 
               sollicitudin diam purus, at sagittis diam elementum venenatis.</p>
            </div>
    </div>
    
</div>


    <Powerfuloptions />
    <Worth />
    <Convincedservices />
   




</div>

    )
}

export default Servicespage;