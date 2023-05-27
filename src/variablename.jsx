import React, { Fragment } from "react";
import SideNav from "./sidenav";
import Nav from "./Nav";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./pythonH.css";
import { Link } from "react-router-dom";
import End from "./end";
class Vn extends React.Component{
    render(){
        return(
            <Fragment>


<Nav />

<Row>
  <Col>
    <SideNav />
  </Col>
  <Col>

  
  <div id="vname" className="container">
<h4>Python - Variable Names</h4> <br />

<div className="container"> <Row>
            <Col>
          <Link to="/V1"><button className="btn btn-primary" id="previous" > Previous</button></Link>  
            </Col>
            <Col>
           
           <Link to="/M"> <button className="btn btn-primary" id="Next" >Next</button></Link>
            </Col>
            
            </Row>    </div>
<hr />
<h5>Variable Names</h5>
<br />
<p>A variable can have a short name (like x and y) or a more descriptive name (age, carname, <br /> total_volume). Rules for Python variables:</p>

<ul>
    <li>A variable name must start with a letter or the underscore character</li>
    <li>A variable name cannot start with a number</li>
    <li>A variable name can only contain alpha-numeric characters and underscores (A-z, 0-9, and _ )</li>
    <li>Variable names are case-sensitive (age, Age and AGE are three different variables)</li>
    <li>A variable name cannot be any of the <a href="">Python keywords.</a> </li>
   
</ul>
<br />

<div id="tryit4" className="container">
              <h3>EXAMPLE</h3> <br />
<span>Legal variable names:</span>
              <p className="text-primary">
             


    
                <span className="brown">  myvar = "John"</span> <br />
                <span className="brown">  my_var = "John"</span> <br />
                <span className="brown"> _my_var = "John"</span> <br />
                <span className="brown">  myVar = "John"</span> <br />
                <span className="brown"> MYVAR = "John"</span> <br />
<span className="brown"> myvar2 = "John"</span> <br />

              </p>
              <Link to="/c">   <button className="btn btn-primary text-warning">
                Try it Yourself
              </button></Link>
            </div>
<br />

<div id="tryit4" className="container">
              <h3>EXAMPLE</h3> <br />
<span>Illegal variable names:</span>
              <p className="text-primary">
             
            


    
                <span className="brown">   2myvar = "John"</span> <br />
                <span className="brown">  my-var = "John"</span> <br />
                <span className="brown"> my var = "John"
</span> <br />
               

              </p>
              <Link to="/c">   <button className="btn btn-primary text-warning">
                Try it Yourself
              </button></Link>
            </div>
            <br /> <br />

 <h6 className="remember">Remember that variable names are case-sensitive</h6>
<br /> <h5>Multi Words Variable Names </h5>


<p>Variable names with more than one word can be difficult to read.</p> <br />
<p>There are several techniques you can use to make them more readable:</p>
<br /> <h5>Camel Case</h5>
<p>Each word, except the first, starts with a capital letter:</p>
<p id="varjhon">myVariableName =  <span className="brown"> "John"</span></p>
 <br />
<h5>Pascal Case</h5> <br />
<p>Each word starts with a capital letter:</p> <br />
<p id="varjhon">myVariableName =  <span className="brown"> "John"</span></p> <br />
<h5>Snake Case</h5>
<p>Each word is separated by an underscore character:</p> <br />

<p id="varjhon">my_variable_name = <span className="brown"> "John"</span></p> <br />


<div className="container"> <Row>
            <Col>
          <Link to="/V1"><button className="btn btn-primary" id="previous" > Previous</button></Link>  
            </Col>
            <Col>
           
           <Link to="/M"> <button className="btn btn-primary" id="Next" >Next</button></Link>
            </Col>
            
            </Row>    </div>

</div>
  </Col>
  </Row>
           
           <End/>
            </Fragment>
        )
    }
};
export default Vn;