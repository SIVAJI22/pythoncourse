import React, { Fragment } from "react";
import SideNav from "./sidenav";
import Nav from "./Nav";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./pythonH.css";
import End from "./end";
import { Link } from "react-router-dom";
class Out extends React.Component{
    render(){
        return(
            <Fragment>


<Nav />

<Row>
  <Col>
    <SideNav />
  </Col>
  <Col>
  <div id="Out" className=" container">

    <h2>Python - Output Variables</h2>

<br /> 


<div className="container"> <Row>
            <Col>
          <Link to="/M"><button className="btn btn-primary" id="previous" > Previous</button></Link>  
            </Col>
            <Col>
           
           <Link to="/G"> <button className="btn btn-primary" id="Next" >Next</button></Link>
            </Col>
            
            </Row>    </div>
<hr />
 <h5>Output Variables</h5> <br />
 <p>The Python print() function is often used to output variables.</p>



<br />
<div id="tryit4" className="container">
              <h3>EXAMPLE</h3>

              <p className="text-primary">

              x=    <span className="brown"> "Python"</span><br /> 
              y= <span className="brown"> "is"</span>
              <br /> 
              z =  <span className="brown">"awesome"</span> 
               <br />
print(x,y,z)     <br />


              </p>
              <Link to="/c">   <button className="btn btn-primary text-warning">
                Try it Yourself
              </button></Link>
           
            </div>

 <br />
<p>You can also use the + operator to output multiple variables:</p>
            <br />
 


  
<div id="tryit4" className="container">
              <h3>EXAMPLE</h3>

              <p className="text-primary">

              x=    <span className="brown"> "Python"</span><br /> 
              y= <span className="brown"> "is"</span>
              <br /> 
              z =  <span className="brown">"awesome"</span> 
               <br />
print(x+y+z)     <br />


              </p>
              <Link to="/c">   <button className="btn btn-primary text-warning">
                Try it Yourself
              </button></Link>
            </div>
 <br />

            <h6 className="remember">Notice the space character after  <span className="brown"> "Python "</span> and 
             <span className="brown"> "is"</span> , without them the result would be "Pythonisawesome".</h6>
 <br />
 <p>For numbers, the   <span className="brown"> +</span>   character works as a mathematical operator:</p>



  
 <div id="tryit4" className="container">
              <h3>EXAMPLE</h3>

              <p className="text-primary">

              x=    <span className="brown"> "5"</span><br /> 
              y= <span className="brown"> "10"</span>
              <br /> 
           
print(x+y)     <br />


              </p>
              <Link to="/c">   <button className="btn btn-primary text-warning">
                Try it Yourself
              </button></Link>
            </div> <br />

<p>In the  
     <span className="brown">print() </span>function, 
     when you try to combine a string and a number with the + operator, Python will give you an error:</p>


     <div id="tryit4" className="container">
              <h3>EXAMPLE</h3>

              <p className="text-primary">

              x=    <span className="brown"> "5"</span><br /> 
              y= <span className="brown"> "Jhon"</span>
              <br /> 
           
print(x+y)     <br />


              </p>
              <Link to="/c">   <button className="btn btn-primary text-warning">
                Try it Yourself
              </button></Link>
            </div>
<br />
<p>The best way to output multiple variables in the    <span className="brown"> print() </span> function is to separate them with commas, which even support different data types:</p>

<br />


<div id="tryit4" className="container">
              <h3>EXAMPLE</h3>

              <p className="text-primary">

              x=    <span className="brown"> "5"</span><br /> 
              y= <span className="brown"> "Jhon"</span>
              <br /> 
           
print(x,y)     <br />


              </p>
              <Link to="/c">   <button className="btn btn-primary text-warning">
                Try it Yourself
              </button></Link>
            </div>


  <br />


  
<div className="container"> <Row>
            <Col>
          <Link to="/M"><button className="btn btn-primary" id="previous" > Previous</button></Link>  
            </Col>
            <Col>
           
           <Link to="/G"> <button className="btn btn-primary" id="Next" >Next</button></Link>
            </Col>
            
            </Row>    </div>
  </div>







  </Col></Row>
  
  <End/></Fragment>
        )}};
export default Out;