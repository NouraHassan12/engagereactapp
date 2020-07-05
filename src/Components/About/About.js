import React from 'react';
// import './App.css';
import img2 from '../../../src/img/businessmain.jpg';
import {Link} from 'react-router-dom';
import Team from '../Team/Team';
import Ourvalues from '../Ourvalues/Ourvalues';
import Convinced from '../Convinced/Convinced';

const About =(props)=>{
  console.log(props.match.url)
    return(
      <div>
      {/* <header id="header"> */}
      <div className="container">

  

<nav className="navbar navbar-expand-lg navbar-light ">
  <h1 className="navbar-brand"  style={{color: 'black'}}>engage</h1>
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
</nav>
      
    </div>
{/* // </header> */}
  <br/>
  <br/>


  <div className="servicesecsss container-fluid">
 <div className="container-fluid" style={{padding:'30px'}}>
   <div className="row">
    <div className="col-md-6">
<h2 style={{fontWeight:'200'}}>About</h2>
    </div>

    <div className="col-md-6">
<h2 className="text-right" style={{color:'gray', fontWeight:'200'}}>Home{props.match.url}</h2>
      </div>
   </div>
 </div>

</div>
        <div className="container-fluid">
               <div className="container serv">
               <div className="row">
                <div className="col-md-12">
                <h3>Our Team</h3>
                <p>Learn more about our fantastic team!</p>
                </div>
               </div>

               <div className="row">
                   <div className="col-md-12">
                      <img src={img2} alt="img" className="card-img-top"/> 
                   </div>
               </div>

               </div>
             
           
               

           </div>
           <br/>
           <br/>
           <Team />
           <Ourvalues />
           <Convinced />
           </div>


     
    )
}

export default About;