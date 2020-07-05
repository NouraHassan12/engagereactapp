import React from 'react';
import './style.css';


const Package =()=>{
    return(
        <div>
    
    <br/>
    <br/>
    <br/>
    <div className="package container-fluid">
    <div className="row">
    <div className="col-md-12">

        <h2 className="text-center mt-5">Standard Packages</h2>
        <p className="text-center">And here goes a super fancy description of the section.</p>
    </div>
</div>

<div className="container">
    <div className="row ourstyle">
        
        <div className=" col-lg-4 col-md-12 col-sm-12">
<br/>
<br/>
<br/>
        <div className="card border-light mb-3"  style={{maxWidth:'30rem' , height:'30rem'}}>
  <div className="card-header"  style={{height:'10rem' , backgroundColor:'white'}}>
      <h3 className="text-center">Simple</h3>
      <h3  className="text-center">$39</h3>
      <p  className="text-center">/ Month</p>
  </div>
  <div className="card-body text-dark">

    <ul className="ulpackage text-center">
    <li><i class="fas fa-angle-right"></i> Awesome feature.</li>

<li><i class="fas fa-angle-right"></i>Incredible support.</li>

<li><i class="fas fa-angle-right"></i>Another stuff.</li>

<li><i class="fas fa-angle-right"></i>Free bonus!</li>

<li><button type="button" className="btn btn-light mt-5" style={{backgroundColor:'rgb(204, 202, 202)' , height:'50px'}}>BUY NOW</button></li>
</ul>



  </div>
</div> 
        </div>


        <div className=" col-lg-4 col-md-12 col-sm-12">
<br/>
<br/>
<br/>
        <div className="card border-light mb-3"  style={{maxWidth:'30rem' , height:'30rem'}}>
  <div className="card-header"  style={{height:'10rem' , backgroundColor:'rgba(76, 175, 80)'}}>
      <h3 className="text-center" style={{color:'white'}}>Simple</h3>
      <h3  className="text-center" style={{color:'white'}}>$39</h3>
      <p  className="text-center" style={{color:'white'}}>/ Month</p>
  </div>
  <div className="card-body text-dark">
  <ul className="ulpackage text-center">
    <li><i class="fas fa-angle-right"></i> Awesome feature.</li>

<li><i class="fas fa-angle-right"></i>Incredible support.</li>

<li><i class="fas fa-angle-right"></i>Another stuff.</li>

<li><i class="fas fa-angle-right"></i>Free bonus!</li>

<li><button type="button" className="btn btn-light mt-5" style={{backgroundColor:'rgba(76, 175, 80)' , height:'50px', color:'white'}}>BUY NOW</button></li>
</ul>


  </div>
</div> 
        </div>



    
        <div className=" col-lg-4 col-md-12 col-sm-12">
<br/>
<br/>
<br/>
        <div className="card border-light mb-3 cardheight"  style={{maxWidth:'30rem' , height:'30rem'}}>
  <div className="card-header"  style={{height:'10rem' , backgroundColor:'white'}}>
      <h3 className="text-center">Simple</h3>
      <h3  className="text-center">$39</h3>
      <p  className="text-center">/ Month</p>
  </div>
  <div className="card-body text-dark" >
  <ul className="ulpackage text-center">
    <li><i class="fas fa-angle-right"></i> Awesome feature.</li>

<li><i class="fas fa-angle-right"></i>Incredible support.</li>

<li><i class="fas fa-angle-right"></i>Another stuff.</li>

<li><i class="fas fa-angle-right"></i>Free bonus!</li>

<li><button type="button" className="btn btn-light mt-5" style={{backgroundColor:'rgb(204, 202, 202)' , height:'50px'}}>BUY NOW</button></li>
</ul>
  </div>
</div> 
        </div>

        <br/>




        </div>
        </div>
        <br/>

<br/>
<br/>
        </div>





          
           </div>


     
    )
}

export default Package;