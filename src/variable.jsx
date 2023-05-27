import React, { Fragment } from "react";
import SideNav from "./sidenav";
import Nav from "./Nav";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./pythonH.css";
import { Link } from "react-router-dom";
import End from "./end";
export const Variable = () => {
  return (
    <Fragment>
      <Nav />

      <Row>
        <Col>
          <SideNav />
        </Col>
        <Col>
          {" "}
          <div id="var" className="container">
            <h3>Python Variables</h3> <br />
                
            <div className="container"> <Row>
            <Col>
          <Link to="/comment"><button className="btn btn-primary" id="previous" > Previous</button></Link>  
            </Col>
            <Col>
           
           <Link to="/vname"> <button className="btn btn-primary" id="Next" >Next</button></Link>
            </Col>
            
            </Row>    </div>
            <hr />

            <h5>Variables</h5>
            <br />
            <div id="tryit4" className="container">
              <h3>EXAMPLE</h3>

              <p className="text-primary">
                x=<span className="text-danger">5</span> <br />y ={" "}
                <span className="brown"> "John" </span> <br />
                print(x) <br />
                print(y)
              </p>
              <Link to="/c">   <button className="btn btn-primary text-warning">
                Try it Yourself
              </button></Link>
            </div>
            <br />
            <p>
              Variables do not need to be declared with any particular type, and
              can even change type after they have been set.
            </p>
            <br />
            <div id="tryit4" className="container">
              <h3>EXAMPLE</h3>

              <p className="text-primary">
                <Row>
                  <Col sm={2}>
                    {" "}
                    x = <span className="text-danger">4</span> <br /> x =
                    <span className="brown"> "Sally" </span> <br /> print(x)
                  </Col>
                  <Col>
                    <span className="text-success"># x is of type int</span>{" "}
                    <br />
                    <span className="text-success"># x is now of type str</span>
                  </Col>
                </Row>
              </p>
              <Link to="/c">   <button className="btn btn-primary text-warning">
                Try it Yourself
              </button></Link>
            </div>
            <br />
            <h5>Casting</h5>

            <p>
              If you want to specify the data type of a variable, this can be
              done with casting.
            </p>
            <br />
            <div id="tryit4" className="container">
              <h3>EXAMPLE</h3>

              <p className="text-primary">
                <Row>
                  <Col sm={2}>
                  x = str(3) <br />
                  y = int(3) <br />
                  z = float(3) <br />
                  </Col>
                
                 
                <Col> <span className="text-success"> # x will be '3'</span> <br />
                  <span className="text-success"> # y will be 3 </span> <br />
                  <span className="text-success"> # z will be 3.0</span> <br />

                </Col>               </Row>
                  
               
              </p>
              <Link to="/c">   <button className="btn btn-primary text-warning">
                Try it Yourself
              </button></Link>
            </div>

            <h5>Get the Type</h5>
            <p>
              You can get the data type of a variable with the type() function.
            </p>
            <br />
            <div id="tryit4" className="container">
              <h3>EXAMPLE</h3>

              <p className="text-primary">
              x=<span className="text-danger">5</span> <br />y ={" "}
                <span className="brown"> "John" </span> <br />
                print(x) <br />
                print(y)
              </p>
              <Link to="/c">   <button className="btn btn-primary text-warning">
                Try it Yourself
              </button></Link>
            </div>

            <h5>Single or Double Quotes?</h5>

            <p>
              String variables can be declared either by using single or double
              quotes:
            </p>
            <div id="tryit4" className="container">
              <h3>EXAMPLE</h3>

              <p className="text-primary">
            x=  <span className="brown"> "John" </span> <br />
                <span className="text-success"> # is the same as</span> <br />
                x =  <span className="brown"> "John" </span> <br />
              </p>
              <Link to="/c">   <button className="btn btn-primary text-warning">
                Try it Yourself
              </button></Link>
            </div>
            <h5>Case-Sensitive</h5>
            <p>Variable names are case-sensitive.</p>

            <div id="tryit4" className="container">
              <h3>EXAMPLE</h3>

              <p className="text-primary">


              a = <span className="text-danger">4</span> <br />
              <span className="text-success"> #A will not overwrite a</span> 
         
                
                
                <br />
                A =  <span className="brown"> "Sally" </span> <br />
              </p>
              <Link to="/c">   <button className="btn btn-primary text-warning">
                Try it Yourself
              </button></Link>
            </div>
            <br />
                  
<div className="container"> <Row>
            <Col>
          <Link to="/comment"><button className="btn btn-primary" id="previous" > Previous</button></Link>  
            </Col>
            <Col>
           
           <Link to="/vname"> <button className="btn btn-primary" id="Next" >Next</button></Link>
            </Col>
            
            </Row>    </div>
          </div>
        </Col>
      </Row>

      <End />
    </Fragment>
  );
};
