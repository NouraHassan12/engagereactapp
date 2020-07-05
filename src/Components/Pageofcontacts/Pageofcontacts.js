import React from 'react';
import {Link} from 'react-router-dom';
import './style.css';



const Pageofcontacts =(props)=>{
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



<div className="servicesecsss container-fluid">
 <div className="container-fluid" style={{padding:'30px'}}>
   <div className="row">
    <div className="col-md-6">
<h2 style={{fontWeight:'200'}}>Contact</h2>
    </div>

    <div className="col-md-6">
<h2 className="text-right" style={{color:'gray', fontWeight:'200'}}>Home{props.match.url}</h2>
      </div>
   </div>
 </div>

</div>

<div className="container formcontainer" style={{marginTop:'50px'}} >
<div className="row">
<div className="col-md-7" style={{marginTop:'35px'}}>
<form>
  <div className="form-row">
    <div className="col">
      <input type="text" className="form-control" placeholder="Name" />
    </div>
    <div className="col">
      <input type="text" className="form-control" placeholder="Email" />
    </div>

</div>
<br/>
<div className="row">
    <div className="col-md-12">
      <input type="text" className="form-control" placeholder="Subject" />
    </div>
  </div>


  <br/>
<div className="row">
    <div className="col-md-12">
   ​<textarea id="txtArea" rows="10" cols="87" className="form-control" placeholder="Message"></textarea>
    </div>
  </div>
 <button type="button" class="btn btn-success mt-4">Send</button>
</form>

</div>

<div className="col-md-5">

<h2 style={{fontWeight:'300'}}>Contact Information</h2>
<p style={{color:'gray'}}>I am text block. Click edit button to change this text. 
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, 
luctus nec ullamcorper mattis, pulvinar dapibus leo
</p>
<br/>
<h3 style={{fontWeight:'300'}}>Contact Details</h3>


   <div class="media">
 <a href="#ggg"><div className="contactsection-icon contactlisticon"><i class="far fa-map"></i></div></a> 
  <div class="media-body">
    <p class="mt-3 ml-2">35th Ave, Queens, NY 11106, USA</p>

  </div>
</div>
<br/>

 <div class="media">
 <a href="#ggg"><div className="contactsection-icon contactlisticon"><i class="fas fa-phone-volume"></i></div></a> 
  <div class="media-body">
    <p class="mt-3 ml-2">123 456 7893</p>

  </div>
</div>
<br/>
 <div class="media">
 <a href="#ggg"><div className="contactsection-icon contactlisticon"><i class="fas fa-mobile-alt"></i></div></a> 
  <div class="media-body">
    <p class="mt-3 ml-2">123 456 7893</p>

  </div>
</div>

<br/>
 <div class="media">
 <a href="#ggg"><div className="contactsection-icon contactlisticon"><i class="fas fa-envelope"></i></div></a> 
  <div class="media-body">
    <p class="mt-3 ml-2">contact@mywebsite.com</p>

  </div>
</div>
<br/>
        </div>
<br/>

        

</div>
</div>
<br />
<div className="container-fluid">
<div className="row">
<div className="col-lg-12">
<iframe width="100%"  title="location" height="600" src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=Malet%20St%2C%20London%20WC1E%207HU%2C%20United%20Kingdom+(Your%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"><a href="https://www.mapsdirections.info/en/journey-planner.htm">Map Directions</a></iframe>
</div>
</div>
</div>
           </div>


     
    )
}

export default Pageofcontacts;