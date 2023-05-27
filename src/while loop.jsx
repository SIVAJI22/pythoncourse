import React, { Fragment } from "react";
import Nav from "./Nav";
import SideNav from "./sidenav";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
import Col from "react-bootstrap/Col";
import "./pythonH.css";

import End from "./end";
// class Operator extends React.Component {
export const While = () => {
  const dsmaller = <img id="Dsmaller" src="./double small.png" alt="" />;

  const smaller = <img id="Dsmaller" src="./smaller.png" alt="" />;
  const greater = <img id="Dgreater" src="./greater.jpg" alt="" />;
  const dgreater = <img id="Dgreater" src="./double greater.png" alt="" />;

  return (
    <Fragment>
      <Nav />
      <Row>
        <Col>
          <SideNav />
        </Col>
        <Col>
          <div id="while" className="container">
            <h3>Python While Loops</h3> 
            <br />
            <div className="container"> <Row>
            <Col>
          <Link to="/if"><button className="btn btn-primary" id="previous" > Previous</button></Link>  
            </Col>
            <Col>
           
           <Link to="/for"> <button className="btn btn-primary" id="Next" >Next</button></Link>
            </Col>
            
            </Row>    </div> 
            
            <hr />
            <br />
            <h4>Python Loops</h4>
            <br /> <p>Python has two primitive loop commands:</p>
            <ul>
              <li>
                {" "}
                <span className="text-danger"> while</span> loops
              </li>
              <li>
                {" "}
                <span className="text-danger"> for</span> loops
              </li>
            </ul>{" "}
            <br />
            <hr /> <h4>The while Loop</h4> <br />
            <p>
              With the <span className="text-danger"> while</span> loop we can
              execute a set of statements as long as a condition is true.
            </p>

            <div id="tryit4" className="container">
              <h3>EXAMPLE</h3>
              <span>Print i as long as i is less than 6:</span> <br /> <br />
              <p>
                i = <span className="text-danger">1</span> <br />
                while i {smaller} <span className="text-danger">6</span>: <br />
                print(i) <br />
                 i += <span className="text-danger">1</span>
              </p>
              <Link to="/c">   <button className="btn btn-primary text-warning">
                Try it Yourself
              </button></Link>
            </div>
            <br />
            <h6 className="remember">
              <span className="fw-bold"> Note: </span>
              remember to increment i, or else the loop will continue forever. .
            </h6>
            <br />{" "}
            <p>
              he  <span className="text-danger"> while</span>  loop requires relevant variables to be ready, in this
              example we need to define an indexing variable,  <span className="text-danger"> i</span> , which we set to
              1.
            </p>
            <br /> <hr /> <h4>The break Statement</h4>
            <p>With the <span className="text-danger ">break</span>  statement we can stop the loop even if the while condition is true:</p>
         
         <br />
         
         <div id="tryit4" className="container">
              <h3>EXAMPLE</h3>
              <span>Print i as long as i is less than 6:</span> <br /> <br />
              <p>
                i = <span className="text-danger">1</span> <br />
                while i {smaller} <span className="text-danger">6</span>: <br />
                print(i) 
             
              <br />   if i == <span className="text-danger">3</span>: <br />
                break <br />
                i += <span className="text-danger">1</span>
              </p>
              <Link to="/c">   <button className="btn btn-primary text-warning">
                Try it Yourself
              </button></Link>
            </div>
         
          <br /> <hr /> <h5>The continue Statement</h5><br />
          <p>With the  <span className="text-danger"> continue</span> statement we can stop the current iteration, and continue with the next:</p>
       <br />
       
       <div id="tryit4" className="container">
              <h3>EXAMPLE</h3>
              <span>Print i as long as i is less than 6:</span> <br /> <br />
              <p>
                i = <span className="text-danger">0</span> <br />
                while i {smaller} <span className="text-danger">6</span>: <br />
                i += <span className="text-danger">1</span> <br />
               
             
                if i == <span className="text-danger">3</span>: <br />
                continue <br />
                print(i) 
               
              </p>
              <Link to="/c">   <button className="btn btn-primary text-warning">
                Try it Yourself
              </button></Link>
            </div>  
            <br /> <hr />
            <h4>The else Statement</h4>
            <p>With the <span className="text-danger"> else</span> statement we can run a block of code once when the condition no longer is true:

</p>
     <br />
     <div id="tryit4" className="container">
              <h3>EXAMPLE</h3>
              <span>Print i as long as i is less than 6:</span> <br /> <br />
              <p>
                i = <span className="text-danger">0</span> <br />
                while i {smaller} <span className="text-danger">6</span>: <br />
                print(i) <br />
                i += <span className="text-danger">1</span> <br />
               
                else: <br />
                print( <span className="text-danger">  "i is no longer less than 6"</span>  )

             
               
              </p>
              <Link to="/c">   <button className="btn btn-primary text-warning">
                Try it Yourself
              </button></Link>
            </div> 
     <br />
     <div className="container"> <Row>
            <Col>
          <Link to="/if"><button className="btn btn-primary" id="previous" > Previous</button></Link>  
            </Col>
            <Col>
           
           <Link to="/for"> <button className="btn btn-primary" id="Next" >Next</button></Link>
            </Col>
            
            </Row>    </div> 
          </div>
        </Col>
      </Row>
      <End/>
    </Fragment>
  );
};
