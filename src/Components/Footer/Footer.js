import React from 'react';
// import './App.css';
import './style.css';


const Footer =()=>{
    return(
        <div className="container-fluid bgimmfooter">

<br/>
<br/>
        <section className="footer">
     <div className="footer-container">
        
        <div className="row">
           <div className="col-md-3">
           <h2>About us</h2><br/>
           <p>I am text block. Click edit button to change this text. Lorem ipsum dolor 
               sit amet, consectetur. I am text block. Click edit button to
                change this text. Lorem ipsum dolor sit amet, consectetur.</p>
           </div>


           <div className="col-md-3">
<h2>Opening Hours</h2><br/>
<ul className="ull">
    <li><i class="fas fa-angle-right"></i>Mon-Thu: 8:00 - 17:00</li>

<li><i class="fas fa-angle-right"></i>Mon-Thu: 8:00 - 17:00</li>

<li><i class="fas fa-angle-right"></i>Mon-Thu: 8:00 - 17:00</li>

<li><i class="fas fa-angle-right"></i>Mon-Thu: 8:00 - 17:00</li>

</ul>
           </div>


           <div className="col-md-3">
               <h2>Pages</h2><br/>
               <ul className="ull">
    <li><i class="fas fa-angle-right"></i>About</li>

<li><i class="fas fa-angle-right"></i>Service</li>

<li><i class="fas fa-angle-right"></i>ContactS</li>

<li><i class="fas fa-angle-right"></i>News</li>

</ul>
           </div>


           <div className="col-md-3">
                     <h2>Contact Details</h2><br/>
                    <p><i class="fas fa-map-marker-alt"></i>
                    Manchester Road 123-78B, Silictown</p> 

                    <p> <i class="fas fa-phone-volume"></i>
                   +46 123 456 789</p>

                <p><i class="fas fa-envelope"></i>hello@sitename.com</p> 



           </div>
        </div>
   
     
       
     </div>
  

   </section>
   

<div className="container">
<div className="row">



<div className="col-md-6">
  
  <p>copyrights 2017  all rights reserved</p>
    
       </div>
   <div className="col-md-6 iconssec text-right">
  
  <a href="//#endregion" className="facebookicon"><i class="fab fa-facebook"></i></a> 
  <a href="//#endregion"className="twittericon"><i class="fab fa-twitter-square"></i></a>
  <a href="//#endregion" className="linkedin"><i class="fab fa-linkedin"></i></a>
  <a href="//#endregion" className="google"><i class="fab fa-google"></i></a>

  </div>
     
     
   </div>
</div>
  </div>
    
    )
}

export default Footer;