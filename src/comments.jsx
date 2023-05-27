import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SideNav from "./sidenav";
import "./pythonH.css";
import End from "./end";

class Comments extends React.Component {
  render() {
    return (
      <Fragment>
        <Nav />
        <Row>
          <Col sm={2}>
            <SideNav />
          </Col>

          <Col>
            <br /> <br />
            <div id="comment" className="container">
              <h3>Python Comments</h3> <br />
              <div className="container"> <Row>
            <Col>
          <Link to="/syntax"><button className="btn btn-primary" id="previous" > Previous</button></Link>  
            </Col>
            <Col>
           
           <Link to="/V1"> <button className="btn btn-primary" id="Next" >Next</button></Link>
            </Col>
            
            </Row>    </div>

              <hr />

              <p>Comments can be used to explain Python code.</p>
              <p>Comments can be used to make the code more readable.</p>
              <p>
                Comments can be used to prevent execution when testing code.
              </p>

              <div>
                <h5 id="execute">Creating a Comment </h5>

                <p>Comments starts with a #, and Python will ignore them:</p>
                <div id="tryit4" className="container">
                <h3>EXAMPLE</h3>

                <p className="text-primary">
                <span className="text-success"> #This is a comment</span><br />
                  print("Hello, World!")
                </p>
                <Link to="/c"><button className="btn btn-primary text-warning">
                Try it Yourself
              </button></Link> 
              </div>

                <p>
                  Comments can be placed at the end of a line, and Python will
                  ignore the rest of the line:
                </p>

                <div id="tryit4" className="container">
                <h3>EXAMPLE</h3>

                <p className="text-primary">
                <span className="text-success"> #This is a comment</span>
                  print("Hello, World!")
                </p>
                <Link to="/c"><button className="btn btn-primary text-warning">
                Try it Yourself
              </button></Link> 
              </div>
                <p>
                  A comment does not have to be text that explains the code, it
                  can also be used to prevent Python from executing code:
                </p>



                <div id="tryit4" className="container">
                <h3>EXAMPLE</h3>

                <p className="text-primary">
                <span className="text-success"> #print("Hello, World!")</span><br />
               
print("Cheers, Mate!")         
                </p>
                <Link to="/c"><button className="btn btn-primary text-warning">
                Try it Yourself
              </button></Link> 
              </div>
<hr />
<h5>Multiline Comments</h5>


<p>Python does not really have a syntax for multiline comments.

</p>
<p>To add a multiline comment you could insert a # for each line:</p>
             

<div id="tryit4" className="container">
                <h3>EXAMPLE</h3>

                <p className="text-primary">
                <span className="text-success"> #This is a comment <br />
#written in <br />
#more than just one line
</span><br />
               
print("Hello, World!")        
                </p>
                <Link to="/c"><button className="btn btn-primary text-warning">
                Try it Yourself
              </button></Link> 
              </div>
               
              
              </div>
 <br />
 <div className="container"> <Row>
            <Col>
          <Link to="/syntax"><button className="btn btn-primary" id="previous" > Previous</button></Link>  
            </Col>
            <Col>
           
           <Link to="/V1"> <button className="btn btn-primary" id="Next" >Next</button></Link>
            </Col>
            
            </Row>    </div>
           </div>
          </Col>
        </Row>
        <br />
        <End />
      </Fragment>
    );
  }
}
export default Comments;
