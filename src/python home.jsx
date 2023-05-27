
import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SideNav from "./sidenav";
import "./pythonH.css";
import End from "./end";
import axios, { Axios } from "axios";
import { responsivePropType } from "react-bootstrap/esm/createUtilityClasses";
export const PythonH =()=>{

const handleclick=()=>{
axios.get('https://codepen.io/harunpehlivan/pen/qBNpGKr  ')  
  
    
}

        return(
            <Fragment>
               <Nav/>


               <div id="home" className="contianer">
               <Row>
                <Col sm={6}>
                <SideNav/>
                
                </Col>
 <br /> 
                <Col sm={5}>  

                <div id="home1" className="container">
                <div id="pythont2" className="contianer">
 <div id="pythont" className="contianer">
                <br /> 
                <h3> PYTHON TUTORIAL</h3>
                <br />

                <div className="container"> <Row>
            <Col>
          <Link to="/"><button className="btn btn-primary" id="previous" > Home</button></Link>  
            </Col>
            <Col>
           
           <Link to="/intro"> <button className="btn btn-primary" id="Next" >Next</button></Link>
            </Col>
            
            </Row>    </div>
                <hr />
               <h5> Learn Python</h5>

               <p>Python is a popular programming language.</p>

<p>Python can be used on a server to create web applications.</p>

<Link  to="/intro"><button className="btn btn-primary text-warning">Start Learning Python Now</button></Link>


</div>

<div id="learning" className="container">

<h5>Learning by Examples</h5>
<p>With our "Try it Yourself" editor, you can edit Python code and view the result.</p>
  <div id="tryit" className="container">
<h3>EXAMPLE</h3>

<p className="text-primary">print ("Hello, World!")</p>


<Link to="/c"><button 
 className="btn btn-primary text-warning">Try it Yourself</button></Link>

</div> <br />
<h6 className="fw-semibold">Click on the "Try it Yourself" button to see how it works.</h6>



<hr />
<h5>Python File Handling</h5>

<p>In our database section you will learn how to access and work with MySQL and MongoDB databases:</p>

<a href="">Python MySQL Tutorial</a>
<a href="">Python MongoDB Tutorial</a>

<hr />

<h4>Python Reference</h4>

<p>You will also find complete function and method references:</p>

<div id="refer" className="text-dark">
<a href="">Reference Overview</a>
<a href="">Built-in Functions</a>

<a href="/String">
String Methods</a>
<a href="/array">List/Array Methods</a>
<a href="/Dict">
Dictionary Methods</a>
<a href="">
Tuple Methods</a>

<a href="">Set Methods</a>

<a href="">File Methods</a>

<a href="">Python Keywords</a>

<a href="">Python Exceptions</a>
<a href="">Python Glossary</a>
<a href=""></a>
<a href=""></a>


<a href="/module">Random Module</a>
<a href="/module">Requests Module</a>
<a href="">Math Module</a>
<a href="">
CMath Module</a>
</div> <hr />
<h5>Download Python</h5>

<p>Download Python from the official Python web site: <a id="download" href="https://python.org">https://python.org</a> </p>
<hr />
<div id="certified"  className="container">
<h2 className="text">Kickstart your career</h2> <br />
<h2 className="d-flex ">
Get certified by completing <br />the  PYTHON course</h2> <br />
<button  id="get" className="btn btn ">Get Certified</button>
</div>

</div>

<div>


</div>



</div>


<br />

</div>
                </Col>
               </Row>
 <br />

               </div><End/>
            </Fragment>
        )
    };