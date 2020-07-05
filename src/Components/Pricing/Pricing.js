import React from 'react';
import {Link} from 'react-router-dom';
import './style.css';
import Package from '../Package/Package';
import Premiumpackage from '../Premiumpackage/Premiumpackage';
import Convincedprice from '../Convincedprice/Convincedprice'


const Pricing =(props)=>{
    return(
      <div>
      {/* <header id="header"> */}
<div className="container">



<nav className="navbar navbar-expand-lg navbar-light ">
<h1 className="navbar-brand" style={{color: 'black'}}>engage</h1>
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
{/* </header> */}
<br/>

<div className="servicesecsss container-fluid">
 <div className="container-fluid" style={{padding:'30px'}}>
   <div className="row">
    <div className="col-md-6">
<h2 style={{fontWeight:'200'}}>Pricing</h2>
    </div>

    <div className="col-md-6">
<h2 className="text-right" style={{color:'gray', fontWeight:'200'}}>Home{props.match.url}</h2>
      </div>
   </div>
 </div>

</div>


<div className="container">
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <div className="row">
        <div className="col-md-12">
            <h2 className="text-center">Why is it worth it?</h2>
            <p className="text-center">And here goes a super fancy description with a highlighted word to make<br/> it even more cool and to make some words standout more.</p>
        </div>
    </div>
</div>
<Package />
<Premiumpackage />
<Convincedprice />
           </div>


     
    )
}

export default Pricing;