import React, { Fragment } from "react";
import Nav from "./Nav";
import SideNav from "./sidenav";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
import Col from "react-bootstrap/Col";
import "./pythonH.css";
import End from "./end";
class Number extends React.Component {
  render() {
    return (
      <Fragment>
        <Nav />

        <Row>
          <Col>
            <SideNav />
          </Col>
          <Col>
          
            <div id="number" className="container">
            <h3   >Python Numbers</h3>
<br />

<div className="container"> <Row>
            <Col>
          <Link to="/D"><button className="btn btn-primary" id="previous" > Previous</button></Link>  
            </Col>
            <Col>
           
           <Link to="/cast"> <button className="btn btn-primary" id="Next" >Next</button></Link>
            </Col>
            
            </Row>    </div>
<hr />


              <h5>Python Numbers</h5>
              <p>There are three numeric types in Python:</p>
              <ul>
                <li>
                  <span className="brown">int</span>
                </li>
                <li>
                  <span className="brown">Float</span>
                </li>
                <li>
                  <span className="brown">Complex</span>
                </li>
              </ul>
              <br />
              <p>
                Variables of numeric types are created when you assign a value
                to them:{" "}
              </p>
              <div id="tryit4" className="container">
                <h3>EXAMPLE</h3>
                <br /> <br />
                <p className="text-primary">
                  <Row>
                    <Col sm={2}>
                      x = <span className="brown">1</span> <br />
                      y ={" "} <span className="brown">2.6</span> <br />
                      z= <span className="brown">1j</span> <br />
                    </Col>

                    <Col>
                      <span className="text-success"> #int</span>
                      <br />
                      <span className="text-success"> #float</span>
                      <br />
                      <span className="text-success"> #complex</span>
                      <br />
                    </Col>
                  </Row>
                </p>
              </div>
              <br />
              <p>
                To verify the type of any object in Python, use the{" "}
                <span className="brown"> type()</span> function:
              </p>
              <br />
              <div id="tryit4" className="container">
                <h3>EXAMPLE</h3>

                <br />
                <p className="text-primary">
                  print(type(x)) print(type(Y)) print(type(Z))
                </p>
                <Link to="/c"><button className="btn btn-primary text-warning">
                Try it Yourself
              </button></Link> 
              </div>
              <br />
              <hr />
              <h5>Int</h5> <br />
              <p>
                Int, or integer, is a whole number, positive or negative,
                without decimals, of unlimited length.
              </p>
              <br />
              <div id="tryit4" className="container">
                <h3>EXAMPLE</h3>
                <br /> <br />
                <p className="text-primary">
                  x = <span className="brown">1</span> <br />y ={" "}
                  <span className="brown">2345262663</span> <br />
                  z= <span className="brown">-24242</span> <br />
                  print(type(x)) print(type(Y)) print(type(Z))
                </p>
                <Link to="/c"><button className="btn btn-primary text-warning">
                Try it Yourself
              </button></Link> 
              </div>
              <br />
              <hr />
              <h5>Float</h5> <br />
              <p>
                Float, or "floating point number" is a number, positive or
                negative, containing one or more decimals.
              </p>
              <br />
              <div id="tryit4" className="container">
                <h3>EXAMPLE</h3>
                <br /> <br />
                <p className="text-primary">
                  x = <span className="brown">1.10</span> <br />y ={" "}
                  <span className="brown">1.0 </span> <br />
                  z= <span className="brown">-35.50</span> <br />
                  print(type(x)) print(type(Y)) print(type(Z))
                </p>
                <Link to="/c"><button className="btn btn-primary text-warning">
                Try it Yourself
              </button></Link> 
              </div>
              <br />
              <p>
                Float can also be scientific numbers with an "e" to indicate the
                power of 10
              </p>
              <br />
              <div id="tryit4" className="container">
                <h3>EXAMPLE</h3>
                <br /> <br />
                <p className="text-primary">
                  x = <span className="brown">35e3</span> <br />y ={" "}
                  <span className="brown">12E4 </span> <br />
                  z= <span className="brown">-87.7e100</span> <br />
                  print(type(x)) print(type(Y)) print(type(Z))
                </p>
                <Link to="/c"><button className="btn btn-primary text-warning">
                Try it Yourself
              </button></Link> 
              </div>
              <br />
              <hr />
              <h5>Complex</h5>
              <br />
              <p>
                Complex numbers are written with a "j" as the imaginary part:
              </p>
              <br />
              <div id="tryit4" className="container">
                <h3>EXAMPLE</h3>
                <br /> <br />
                <p className="text-primary">
                  x = <span className="brown">3+5j</span> <br />y ={" "}
                  <span className="brown">5j </span> <br />
                  z= <span className="brown">-5j</span> <br />
                  print(type(x)) print(type(Y)) print(type(Z))
                </p>
                <Link to="/c"><button className="btn btn-primary text-warning">
                Try it Yourself
              </button></Link> 
              </div>      <br />
             <hr />
         
              <h5>Type Conversion</h5>
              <br />
              <p>
                You can convert from one type to another with the{" "}
                <span className="brown"> int()</span> ,
                <span className="brown">float()</span>, and
                <span className="brown">complex() </span>
                methods:
              </p>
              <br />
              <div id="tryit4" className="container">
                <h3>EXAMPLE</h3>
                <br /> <br />
                <p className="text-primary">
                  <Row>
                    <Col sm={2}>
                      x = <span className="brown">1</span> <br />y ={" "}
                      <span className="brown">2.6</span> <br />
                      z= <span className="brown">1j</span> <br />
                    </Col>

                    <Col>
                      <span className="text-success"> #int</span>
                      <br />
                      <span className="text-success"> #float</span>
                      <br />
                      <span className="text-success"> #complex</span>
                      <br />
                    </Col>
                  </Row> <br />
                  <span className="text-success">
                    #convert from int to float:
                  </span>
                  <br />a = float(x) <br />
                  <span className="text-success">
                    #convert from int to int:
                  </span>
                  <br />b = int(y) <br />
                  <span className="text-success">
                    #convert from int to complex:
                  </span> <br />
                  c = complex(x)
                  <br /> <br /> <br />
                  print(a)
                  <br />
                  print(b)
                  <br />
                  print(c)
                  <br /> <br /> 
                  print(type(a))
                  <br />
                  print(type(b))
                  <br />
                  print(type(c))
                  <br />
                </p>
                <Link to="/c"><button className="btn btn-primary text-warning">
                Try it Yourself
              </button></Link> 
              </div>
              <br />  <h6 className="remember">
<span className="fw-semibold">Note:</span>You cannot convert complex numbers into another number type.

              </h6>
              <hr /> <br />
              <h5>Random Number</h5>
              <p>
                Python does not have a <span className="brown"> random() </span> function to make a random
                number, but Python has a built-in module called random that can
                be used to make <span className="brown"> random </span>numbers:
              </p>
              <br />

              <div id="tryit4" className="container">
                <h3>EXAMPLE</h3> 
                <span>Import the random module, and display a random number between 1 and 9:</span>
                <br /> <br />
                <p className="text-primary">
                import random
                print(random.randrange( <span className="brown">1,10</span>)) <br />
            
                </p>
                <Link to="/c"><button className="btn btn-primary text-warning">
                Try it Yourself
              </button></Link> 
              </div>
<br />
<p>In our <a href="">Random Module Reference </a> you will learn more about the Random module.

</p>              <br />
          
          
          <br />
          

<div className="container"> <Row>
            <Col>
          <Link to="/D"><button className="btn btn-primary" id="previous" > Previous</button></Link>  
            </Col>
            <Col>
           
           <Link to="/cast"> <button className="btn btn-primary" id="Next" >Next</button></Link>
            </Col>
            
            </Row>    </div>
          
            </div>
          </Col>
        </Row>

        <End/>
      </Fragment>
    );
  }
}

export default Number;
