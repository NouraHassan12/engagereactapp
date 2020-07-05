import React from 'react';
// import './App.css';
import './style.css';
import Service from '../Service/Service'
import Secret from '../Secretsec/Secret';
import Comment from '../Comment/Comment';
// import Likess from '../Likesss';
import Additional from '../Additionalvalue/Additional';
import Otherservice from '../otherservices/Otherservice';
import Contact from '../Contact/Contact';
import Navb from '../navbaar/Navb.js';
// import Navbaar from '../Navbaar';
// import Footer from '../Footer';

const Home =()=>{
    return(
        <div>
<Navb /> 
<section className="secsection">
    <div className="container">
      <div className="row">
        <div className="col-md-4 secsection-item">
          <div className="secsection-icon"><i className="fas fa-key"></i></div>
          <h4 className="secsection-title">Lorem Ipsum</h4>
          <p className="secsection-description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
        </div>
        <div className="col-md-4 secsection-item">
          <div className="secsection-icon"><i className="fas fa-thumbs-up"></i></div>
          <h4 className="secsection-title">Lorem Ipsum</h4>
          <p className="secsection-description">Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata</p>
        </div>
        <div className="col-md-4 secsection-item">
          <div className="secsection-icon"><i className="fas fa-heart"></i></div>
          <h4 className="secsection-title">Lorem Ipsum</h4>
          <p className="secsection-description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
        </div>
       
       
      
      </div>
    </div>
  </section>
{/* <Navbaar /> */}

<Service />
<Secret />
<Comment />
{/* <Likess /> */}
<Additional />
<Otherservice />
<Contact />

      </div>

    )
}

export default Home;