import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import './style.css';
import Index from '../Header/Header';
export default class Navb extends Component {
  render() {
    return (
      <div>
         <div className="container-fluid bgim">

           
         {/* <header id="header">
    <div className="container">

  

<nav className="navbar navbar-expand-lg navbar-light ">
  <a className="navbar-brand" style={{color: 'white'}}>engage</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <Link className="nav-link" to="/" style={{color: 'white'}}>Home <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/about" style={{color: 'white'}}>About</Link>
      </li>

      <li className="nav-item">
        <Link className="nav-link" to="/Services" style={{color: 'white'}}>Services</Link>
      </li>
     
      <li className="nav-item">
        <Link className="nav-link" to="/Pricing" style={{color: 'white'}}>Pricing</Link>
      </li>


       <li className="nav-item">
        <Link className="nav-link" to="/Contact" style={{color: 'white'}}>Contact</Link>
      </li>

      <li className="nav-item">
        <Link className="nav-link" to="/News" style={{color: 'white'}}>News</Link>
      </li>
     
    </ul>
  
  </div>
</nav>
      
    </div>
  </header> */}


<nav class="navbar navbar-expand-lg ">
<h1 className="navbar-brand" style={{color: 'white'}}>engage</h1>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto">
    <li className="nav-item active">
        <Link className="nav-link" to="/" style={{color: 'white'}}>Home <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/about" style={{color: 'white'}}>About</Link>
      </li>

      <li className="nav-item">
        <Link className="nav-link" to="/Services" style={{color: 'white'}}>Services</Link>
      </li>
     
      <li className="nav-item">
        <Link className="nav-link" to="/Pricing" style={{color: 'white'}}>Pricing</Link>
      </li>


       <li className="nav-item">
        <Link className="nav-link" to="/Contact" style={{color: 'white'}}>Contact</Link>
      </li>

      <li className="nav-item">
        <Link className="nav-link" to="/News" style={{color: 'white'}}>News</Link>
      </li>
    </ul>
  
  </div>
</nav>
  <Index />
     </div>
      </div>
    )
  }
}
