import React, { Fragment } from "react";
import { BrowserRouter,Route,Routes,Link } from 'react-router-dom';
import "./Nav.css"
import SideNav from "./sidenav";
class Nav extends React.Component{
    render(){
        return(
            <Fragment>
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div id="nav" class="container-fluid">

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
     data-bs-target="#navbarTogglerDemo02" aria-controls="#navbarTogglerDemo02" aria-expanded="false" 
     aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <Link to="/">
  
  <a class="nav-item" href="#">Home</a>
  
  </Link> 
        <li class="nav-item">
        <Link to="/Lets Learn">  <a class="nav-link active" aria-current="page" href="#">Let's Learn</a></Link>
        </li>
        <li class="nav-item">
        <Link to="/about"><a class="nav-link" href="#">About</a></Link> 
        </li>
      
      </ul>

      
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      
    <Link to="/login">     <button class="btn btn-outline-success  " type="submit">login</button>  </Link>
    <Link to="/Signup">     <button class="btn btn-outline-success   " type="submit">SIGNUP</button>  </Link>
      </form>
    </div>
  </div>
</nav>



{/* 






            <nav  class="navbar navbar-expand-lg bg-body-tertiary">
  <div id="nav" class="container-fluid">
  <Link to="/">
  
  <a class="nav-item" href="#">Home</a>
  
  </Link> 
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" 
    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
    aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
     <Link to="/Lets Learn">  <a class="nav-link active" aria-current="page" href="#">Let's Learn</a></Link>   
        </li>
        <li class="nav-item">
         <Link to="/about"><a class="nav-link" href="#">About</a></Link> 
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled">Disabled</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-4" type="search" placeholder="Search" aria-label="Search"/>
    
    <Link to="/login">     <button class="btn btn-outline-success  " type="submit">login</button>  </Link>
    <Link to="/login">     <button class="btn btn-outline-success   " type="submit">SIGNUP</button>  </Link>
      </form>
    </div>
  </div>
</nav> */}
</Fragment>
        )
    }
};
export default Nav;