import React , {Component}from 'react';
import {BrowserRouter , Route  } from 'react-router-dom';
// import { Route, Switch} from 'react-router-dom';

import './App.css';
// import Navb from './Components/navbaar/Navb.js';

import About from './Components/About/About';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import Servicespage from './Components/Servicespage/Servicespage';
import Pricing from './Components/Pricing/Pricing';
import Pageofcontacts from './Components/Pageofcontacts/Pageofcontacts';
import News from './Components/News/News';
// import Index from './Components/Header/Index';




class App extends Component{
  render(){
    return(
  <>
      <BrowserRouter>
<div>
          <Route exact path='/' component={Home}/>
          <Route exact path='/about' component={About}/>
          <Route exact path='/Services' component={Servicespage} />
          <Route exact path='/Pricing' component={Pricing} />
          <Route exact path='/Contact' component={Pageofcontacts}/>
          <Route exact path='/News' component={News}/>
     
            
          <Footer />
          </div>
             </BrowserRouter>
        
         </>
        


    )
  }
}

export default App;
