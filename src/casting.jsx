import React, { Fragment } from "react";
import Nav from "./Nav";
import SideNav from "./sidenav";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
import Col from "react-bootstrap/Col";
import "./pythonH.css";
import End from "./end";
class Casting extends React.Component {
  render() {
    return (
      <Fragment>
        <Nav />

        <Row>
          <Col>
            <SideNav />
          </Col>
          <Col>
          
          <div id="casting" className="container">



<h3>Python Casting</h3> <br />
<div className="container"> <Row>
            <Col>
          <Link to="/N "><button className="btn btn-primary" id="previous" > Previous</button></Link>  
            </Col>
            <Col>
           
           <Link to="/string"> <button className="btn btn-primary" id="Next" >Next</button></Link>
            </Col>
            
            </Row>    </div> <hr />
<h5>Specify a Variable Type</h5>
<br />
<p>There may be times when you want to specify a type on to a variable. This can be done with casting. Python is an object-orientated language, and as such it uses classes to define data types, including its primitive types.

</p>
<br />
<p>Casting in python is therefore done using constructor functions:</p>
<ul>
                <li>
                    <p> <span className="brown">int</span>
                    - constructs an integer number from an integer literal, a float literal (by removing all decimals), or a string literal (providing the string represents a whole number)  
                    </p>
                 
                </li>
                <li>
                <p>  <span className="brown">Float</span>
                - constructs a float number from an integer literal, a float literal or a string literal (providing the string represents a float or an integer)
                </p>
                
                </li>
                <li>
                <p>  <span className="brown">Complex</span> 
                - constructs a string from a wide variety of data types, including strings, integer literals and float literals
                </p>
                
                </li>
              </ul>
<br />
<div id="tryit4" className="container">
                <h3>EXAMPLE</h3>
                <br />
                <span>intigers:</span> <br />
                <p className="text-primary">
                  <Row>
                    <Col>
                      x = int<span className="text-danger">1</span> <br />
                      y = int<span className="text-danger">2.6</span> <br />
                      z= int <span className="brown">"3"</span> <br />
                    </Col>

                    <Col>
                      <span className="text-success">  # x will be 1</span>
                      <br />
                      <span className="text-success">  # y will be 2</span>
                      <br />
                      <span className="text-success"># z will be 3</span>
                      <br />
                    </Col>
                  </Row>
                </p>
                <button className="btn btn-primary text-warning">
                  Try it Yourself
                </button>
              </div>
              
              <br />
<div id="tryit4" className="container">
                <h3>EXAMPLE</h3>
                <br /> <span>float:</span> <br />
                <p className="text-primary">
                  <Row>
                    <Col>
                      x = float(<span className="text-danger">1</span>) <br />
                      y = float(<span className="text-danger">2.8</span>) <br />
                      z= float(<span className="brown">3</span>) <br />
                      w = float(<span className="brown">4.2</span>) <br />
                    </Col>

                    <Col>
                      <span className="text-success">    # x will be 1.0</span>
                      <br />
                      <span className="text-success">  # # y will be 2.8</span>
                      <br />
                      <span className="text-success"> # z will be 3.0</span>
                      <br />
                      <span className="text-success"> # w will be 4.2</span>
                      <br />
                    </Col>
                  </Row>
                </p>
                <Link to="/c"><button className="btn btn-primary text-warning">
                Try it Yourself
              </button></Link> 
              </div>

<br />
<br />
<div id="tryit4" className="container">
                <h3>EXAMPLE</h3>
                <br />
                <span>String:</span> <br />
                <p className="text-primary">
                  <Row>
                    <Col>
                      x = str(<span className="text-danger">1</span>) <br />
                      y =str(<span className="text-danger">2.8</span> )<br />
                      z= str(<span className="brown">3</span>) <br />
                  
                    </Col>

                    <Col>
                      <span className="text-success">    # x will be '1'</span>
                      <br />
                      <span className="text-success">  # # y will be '2' </span>
                      <br />
                      <span className="text-success"> # z will be '3.0' </span>
                      <br />
                    
                    </Col>
                  </Row>
                </p>
                <Link to="/c"><button className="btn btn-primary text-warning">
                Try it Yourself
              </button></Link> 
              </div>


<br />
<div className="container"> <Row>
            <Col>
          <Link to="/N "><button className="btn btn-primary" id="previous" > Previous</button></Link>  
            </Col>
            <Col>
           
           <Link to="/string"> <button className="btn btn-primary" id="Next" >Next</button></Link>
            </Col>
            
            </Row>    </div>
          </div>
          
          
          </Col>
          </Row>
          
          
          <End/>
          </Fragment>
          )}};
export default Casting
