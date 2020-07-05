import React ,{Component} from 'react';
// import './App.css';

import {Link} from 'react-router-dom';

import dataa from "../../database/datafinal"

export default class News extends Component {
    constructor(props) {
        super(props);
        this.state = {data: dataa ,
            term:'',
        holder:dataa};
        console.log(this.state.data)
    
        this.searchhandler = this.searchhandler.bind(this);
    
    }
 
//     filterhandel =(e)=>{
//          listofcat.length===0
//          &&
//     this.state.data.map((item) =>(
//         item.cateigory===e.target.id? 
// listofcat.push(item)

// :null)&&
//  console.log(listofcat)
//     )
//     }

filterhandel = (e) => {
    const h =e.target.id
    let list = [];
    this.state.data.map((item) => 
    item.cateigory === h? list.push(item):null
          );
        
this.setState({holder:list}) 
console.log(this.state.holder)
 };


    searchhandler(e){

        this.setState({
        term:e.target.value
        })
        
        
              }

              searchfor=(term)=>{
                return function(x){
                    return x.title.toLowerCase().includes(term.toLowerCase()) || !term;
                }
                      }

      

        render(){
            const {term} = this.state
    return(
        <div>
             {/* <header id="header"> */}
    <div className="container">
   

  

<nav className="navbar navbar-expand-lg navbar-light ">
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
</nav>
      
    </div>
  {/* </header> */}
 

  <div className="servicesecsss container-fluid">
 <div className="container-fluid" style={{padding:'30px'}}>
   <div className="row">
    <div className="col-md-6">
<h2 style={{fontWeight:'200'}}>News</h2>
    </div>

    <div className="col-md-6">
<h2 className="text-right" style={{color:'gray', fontWeight:'200'}}>Home{this.props.match.url}</h2>
      </div>
   </div>
 </div>

</div>

<br/>
<br/>
  <div className="container">
             <div className="row">
             <div className="col-md-9">
 { this.state.holder.filter(this.searchfor(this.state.term)).map((item) =>
     (
            
                 <div class="card mb-3">
       <div class="row no-gutters">
         <div class="col-md-4">
           <img src={item.imgs}  alt="iimg" class="card-img-top" style={{height:'100%'}} />
         </div>
         <div class="col-md-8">
           <div class="card-body">
 <h5 class="card-title">{item.title}</h5>
             <p class="card-text"></p>
 <p class="card-text"><small class="text-muted">{item.date}</small>
     <p class="card-text">{item.description}</p>
 </p>
 
           </div>
         </div>
       </div>
     </div>
              

                 
           
       
 )

       
     
      )}

</div>

<div className="col-md-3">
                     <form className="mb-3">
                         <input type="text" className="form-control"
                         placeholder="search"  onChange={this.searchhandler} value={term} />
                         </form>
                      
                         <hr/>


                         { this.state.data.map((item) =>
     (   <div>
      
      <p>  <i class="fas fa-chevron-right"></i>{item.title}</p>

     </div>))}

     <hr/>

     { this.state.data.map((item) =>
     (   <div>
        <p onClick={this.filterhandel} id={item.cateigory}>
        <i class="fas fa-chevron-right"></i> {item.cateigory}</p>
    
     </div>))}

     <hr/>
                 </div> 


                
        </div>

           
</div>
  

      
           </div>


     
    )
}
}


