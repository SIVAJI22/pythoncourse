import React, { Fragment } from "react";
import Nav from "./Nav";
import SideNav from "./sidenav";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
import Col from "react-bootstrap/Col";
import "./pythonH.css";
import { PropsWithChildren } from "react";
import End from "./end";
// class Operator extends React.Component {
export const Scope = () => {
  const dsmaller = <img id="Dsmaller" src="./double small.png" alt="" />;

  const smaller = <img id="Dsmaller" src="./smaller.png" alt="" />;
  const greater = <img id="Dgreater" src="./greater.jpg" alt="" />;
  const dgreater = <img id="Dgreater" src="./double greater.png" alt="" />;
  const self = <img id="self" src="./self.jpg" alt="" />;
  return (
    <Fragment>
      <Nav />
      <Row>
        <Col>
          <SideNav />
        </Col>
        <Col>
          <div id="scope" className="container">
            <h3>Python Scope</h3> <br />
            <div className="container">
              {" "}
              <Row>
                <Col>
                  <Link to="/poly">
                    <button className="btn btn-primary" id="previous">
                      {" "}
                      Previous
                    </button>
                  </Link>
                </Col>
                <Col>
                  <Link to="/modules">
                    {" "}
                    <button className="btn btn-primary" id="Next">
                      Next
                    </button>
                  </Link>
                </Col>
              </Row>{" "}
            </div>{" "}
            <hr />
            <p>
              A variable is only available from inside the region it is created.
              This is called scope.
            </p>
            <hr />
            <h4>Local Scope</h4> <br />
            <p>
              A variable created inside a function belongs to the local scope of
              that function, and can only be used inside that function.
            </p>
            <br />
            <div id="tryit4" className="container">
              <h3>EXAMPLE</h3>
            
              <span>
                A variable created inside a function is available inside that
                function:
              </span>{" "}
              <br /> <br />            <p className="text-primary">
                def{" "}
                <span className="text-dark">
                  myfunc():
                  <br /> x =<span className="text-danger"> 300</span>
                </span>{" "}
                <br /> print
                <span className="text-dark">
                  (x)
                  <br /> <br />
                  myfunc()
                </span>{" "}
              </p>
              <Link to="/c">   <button className="btn btn-primary text-warning">
                Try it Yourself
              </button></Link>
            </div>{" "}
            <hr /> <br />
            <h4>Function Inside Function</h4>
            <p>
              As explained in the example above, the variable{" "}
              <span className="text-danger">x</span> is not available outside
              the function, but it is available for any function inside the
              function:
            </p>
            <br />
            <div id="tryit4" className="container">
              <h3>EXAMPLE</h3>
          
              <span>
                The local variable can be accessed from a function within the
                function:
              </span>{" "}  <br />
              <br />
              <p className="text-primary">
                def{" "}
                <span className="text-dark">
                  myfunc():
                  <br /> x =<span className="text-danger"> 300</span>
                </span>{" "}
                <br />
                def <span className="text-dark">
                  myinnerfunc():
                </span> <br /> print
                <span className="text-dark">
                  (x)
                  <br /> myinnerfunc() <br /> <br />
                  myfunc()
                </span>{" "}
              </p>
              <Link to="/c">   <button className="btn btn-primary text-warning">
                Try it Yourself
              </button></Link>
            </div>{" "}
            <hr /> <br />
            <h4>Global Scope</h4>
            <p>
              A variable created in the main body of the Python code is a global
              variable and belongs to the global scope.
            </p>
            <p>
              Global variables are available from within any scope, global and
              local.
            </p>{" "}
            <br />
            <div id="tryit4" className="container">
              <h3>EXAMPLE</h3>
            
              <span>
                A variable created outside of a function is global and can be
                used by anyone:
              </span>{" "}
              <br />  <br />
              <p className="text-primary">
                <span className="text-dark">
                  x =<span className="text-danger"> 300</span>
                </span>{" "}
                <br />
                <br />
                def <span className="text-dark">myfunc():</span> <br /> print
                <span className="text-dark">
                  (x)
                  <br /> myfunc()
                </span>{" "}
                <br /> <br />
                print
                <span className="text-dark">(x)</span>
              </p>
              <Link to="/c">   <button className="btn btn-primary text-warning">
                Try it Yourself
              </button></Link>
            </div>{" "}
            <hr /> <br />
            <h4>Naming Variables</h4>
            <p>
              If you operate with the same variable name inside and outside of a
              function, Python will treat them as two separate variables, one
              available in the global scope (outside the function) and one
              available in the local scope (inside the function):
            </p> <br />
            <div id="tryit4" className="container">
              <h3>EXAMPLE</h3>
             
              <span>
              The function will print the local <span className="text-danger">x</span> , 
              and then the code will print the global <span className="text-danger">x</span> :
              </span>{" "}
              <br /> <br />
              <p className="text-primary">
                <span className="text-dark">
                  x =<span className="text-danger"> 300</span>
                </span>{" "}
                <br />
                <br />
                def <span className="text-dark">myfunc():</span> <br />
                
                <br />
                <span className="text-dark">
                  x =<span className="text-danger"> 200</span>
                </span>{" "}
                
                 print
                <span className="text-dark">
                  (x)
                 <br /> <br />myfunc()
                </span>{" "}
                <br /> <br />
                print
                <span className="text-dark">(x)</span>
              </p>
              <Link to="/c">   <button className="btn btn-primary text-warning">
                Try it Yourself
              </button></Link>
            </div>{" "} <hr />
            <br />
<h4>Global Keyword</h4>
<p>If you need to create a global variable, but are stuck in the local scope, you can use the
    <span className="text-danger"> global</span> keyword.</p>
    <br />
    <p>The global keyword makes the variable   <span className="text-danger"> global</span>.</p>
        
        <br />
        <div id="tryit4" className="container">
              <h3>EXAMPLE</h3>
            
              <span>
              If you use the  <span className="text-danger"> global</span> keyword, the variable belongs to the global scope:


              </span>{" "}
              <br />  <br />
              <p className="text-primary">

              def <span className="text-dark">myfunc():</span> <br />
              global     <span className="text-dark"> x <br />
                  x =<span className="text-danger"> 300</span>
                </span>{" "}
                <br />
                <br />
             
                
                 
                <span className="text-dark">
                 myfunc( )
                </span>{" "}
                <br /> <br />
                print
                <span className="text-dark">(x)</span>
              </p>
              <Link to="/c">   <button className="btn btn-primary text-warning">
                Try it Yourself
              </button></Link>
            </div>{" "} 
<br />
<p>Also, use the  <span className="text-danger"> global</span> keyword if you want to make a change to a global variable inside a function.</p>
<br />

<div id="tryit4" className="container">
              <h3>EXAMPLE</h3>
              
              <span>
              To change the value of a global variable inside a function, refer to the 
              variable by using the          <span className="text-danger"> global</span>
               keyword:
                
              </span>{" "}
              <br /><br />
              <p className="text-primary">
              <span className="text-dark"> 
                  x =<span className="text-danger"> 300</span>
                </span>{" "} <br /> <br />
              def <span className="text-dark">myfunc():</span> <br />
              global     <span className="text-dark"> x <br />
                  x =<span className="text-danger"> 200</span>
                </span>{" "}
                <br />
                <br />
             
                
                 
                <span className="text-dark">
                 myfunc( )
                </span>{" "}
                <br /> <br />
                print
                <span className="text-dark">(x)</span>
              </p>
              <Link to="/c">   <button className="btn btn-primary text-warning">
                Try it Yourself
              </button></Link>
            </div>{" "} 

            <br />


            <div className="container">
              {" "}
              <Row>
                <Col>
                  <Link to="/poly">
                    <button className="btn btn-primary" id="previous">
                      {" "}
                      Previous
                    </button>
                  </Link>
                </Col>
                <Col>
                  <Link to="/modules">
                    {" "}
                    <button className="btn btn-primary" id="Next">
                      Next
                    </button>
                  </Link>
                </Col>
              </Row>{" "}
            </div>{" "}
          </div>
        </Col>
      </Row>
    </Fragment>
  );
};
