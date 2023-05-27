import React, { Fragment } from "react";
import SideNav from "./sidenav";
import Nav from "./Nav";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./pythonH.css";
import End from "./end";
import { Link } from "react-router-dom";
class Multiple extends React.Component{
    render(){
        return(
            <Fragment>


<Nav />

<Row>
  <Col>
    <SideNav />
  </Col>
  <Col>
  <div id="multiple" className=" container">

    <h2>Python Variables - Assign Multiple Values</h2>

<br /> 


<div className="container"> <Row>
            <Col>
          <Link to="/vname"><button className="btn btn-primary" id="previous" > Previous</button></Link>  
            </Col>
            <Col>
           
           <Link to="/out"> <button className="btn btn-primary" id="Next" >Next</button></Link>
            </Col>
            
            </Row>    </div>

<hr />

 <h5>Many Values to Multiple Variables</h5> <br />
 <p>Python allows you to assign values to multiple variables in one line:</p>



<br />
<div id="tryit4" className="container">
              <h3>EXAMPLE</h3>

              <p className="text-primary">

              x, y, z = <span className="brown"> "Orange"</span>,  <span className="brown">"Banana"</span> 
                <span className="brown">"Cherry"" </span> <br />
print(x)     <br />
print(y) <br />
print(z) <br />

              </p>
              <Link to="/c"><button className="btn btn-primary text-warning">
                Try it Yourself
              </button></Link> 
            </div>

            <br /><h6 className="remember"> <span className="fw-semibold"> Note:</span> Make sure the number of variables matches the number of values, or else you will get an error.</h6>
   <br />
  <h4>One Value to Multiple Variables</h4>
  <p>And you can assign the same value to multiple variables in one line:</p>
  <br />


  
<div id="tryit4" className="container">
              <h3>EXAMPLE</h3>

              <p className="text-primary">
              x = y = z =    <span className="brown"> "Orange" </span> <br />
print(x) <br />
print(y) <br />
print(z) <br />
              </p>
              <Link to="/c"><button className="btn btn-primary text-warning">
                Try it Yourself
              </button></Link> 
            </div>
<h5>Unpack a Collection</h5>
<p>If you have a collection of values in a list,
     tuple etc. Python allows you to extract the values into variables. This is called unpacking.</p>

<br />

  
<div id="tryit4" className="container">
              <h3>EXAMPLE</h3>

              <p className="text-primary">



              fruits = [   <span className="brown"> "apple"</span>, 
              
              <span className="brown">"banana" </span>,
              <span className="brown">  "cherry" </span>
              
              
              ]
x, y, z = fruits
print(x)
print(y)
print(z)

      
              </p>
              <Link to="/c"><button className="btn btn-primary text-warning">
                Try it Yourself
              </button></Link> 
            </div> <br />

            <p>Learn more about unpacking in our <a href="">Unpack Tuples </a> Chapter.

</p>
<br />

<div className="container"> <Row>
            <Col>
          <Link to="/vname"><button className="btn btn-primary" id="previous" > Previous</button></Link>  
            </Col>
            <Col>
           
           <Link to="/out"> <button className="btn btn-primary" id="Next" >Next</button></Link>
            </Col>
            
            </Row>    </div>
  </div>







  </Col></Row>
  
  <End/></Fragment>
        )}};
export default Multiple;