import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SideNav from "./sidenav";
import "./pythonH.css";
import End from "./end";

export const Syntax = () => {
  const dsmaller = <img id="Dsmaller" src="./double small.png" alt="" />;

  const smaller = <img id="Dsmaller" src="./smaller.png" alt="" />;
  const greater = <img id="Dgreater" src="./greater.jpg" alt="" />;
  const dgreater = <img id="Dgreater" src="./double greater.png" alt="" />;

  const tgreater = <img id="Dgreater" src="./trigreater.jpg" alt="" />;
  return (
    <Fragment>
      <Nav />
      <Row>
        <Col sm={2}>
          <SideNav />
        </Col>

        <Col>
          <br /> <br />
          <div id="syntax" className="container">
            <h3>Python Syntax</h3> <br />
            <div className="container">
              {" "}
              <Row>
                <Col>
                  <Link to="/start">
                    <button className="btn btn-primary" id="previous">
                      {" "}
                      Previous
                    </button>
                  </Link>
                </Col>
                <Col>
                  <Link to="/comment">
                    {" "}
                    <button className="btn btn-primary" id="Next">
                      Next
                    </button>
                  </Link>
                </Col>
              </Row>{" "}
            </div>
            <hr />
            <Row>
              <Col>
                <div>
                  <h5 id="execute">Execute Python Syntax </h5>
                  <p>
                    As we learned in the previous page, Python syntax can be
                    executed by writing directly in the Command Line:
                  </p>

                  <div id="tryit2" className="container">
                    <p>
                      {" "}
                      <div id="vr"></div>
                      {tgreater}print("Hello, World!") Hello, World!
                    </p>
                  </div>
                </div>
              </Col>
              <Col>
                <div id="onpage" className="container">
                  <h6>On this page</h6>
                  <hr />

                  <a href="#execute">Execute Python Syntax</a>
                  <a href="#Indentation">Python Indentation</a>
                  <a href="#Variables">Python Variables</a>
                  <a href="#Comments">Python Comments</a>
                </div>
              </Col>
            </Row>
            <p>
              Or by creating a python file on the server, using the .py file
              extension, and running it in the Command Line: C:\Users\Your Name
              {greater}python myfile.py
            </p>
            <div id="tryit3" className="container">
              <p>
                {" "}
                <div id="vr"></div>C:\Users\Your Name{greater}python myfile.py
              </p>
            </div>
            <hr />
            <h5 id="Indentation">Python Indentation</h5>
            <p>
              Indentation refers to the spaces at the beginning of a code line.{" "}
            </p>
            <p>
              Where in other programming languages the indentation in code is
              for readability only, the indentation in Python is very important.
            </p>
            <p>Python uses indentation to indicate a block of code.</p>
            <div id="tryit4" className="container">
              <h3>EXAMPLE</h3>

              <p className="text-primary">
                if 5 {greater} 2: <br />
                print("Five is greater than two!")
              </p>
              <Link to="/c">
                {" "}
                <button className="btn btn-primary text-warning">
                  Try it Yourself
                </button>
              </Link>
            </div>
            <p>Python will give you an error if you skip the indentation:</p>
            <div id="tryit4" className="container">
              <h3>EXAMPLE</h3>

              <p className="text-primary">
                if 5 {greater} 2: <br />
                print("Five is greater than two!")
              </p>
              <Link to="/c">
                {" "}
                <button className="btn btn-primary text-warning">
                  Try it Yourself
                </button>
              </Link>
            </div>
            <p>
              You have to use the same number of spaces in the same block of
              code, otherwise Python will give you an error:
            </p>
            <div id="tryit4" className="container">
              <h3>EXAMPLE</h3>

              <p className="text-primary">
                if 5 {greater} 2: <br />
                print("Five is greater than two!")
              </p>
              {greater}
              <Link to="/c">
                {" "}
                <button className="btn btn-primary text-warning">
                  Try it Yourself
                </button>
              </Link>
            </div>
            <hr />
            <h5 id="Variables">Python Variables</h5>
            <p>
              In Python, variables are created when you assign a value to it:
            </p>
            <div id="tryit4" className="container">
              <h3>EXAMPLE</h3>

              <p className="text-primary">
                x = 5 <br />y = "Hello, World!"
              </p>
              <Link to="/c">
                {" "}
                <button className="btn btn-primary text-warning">
                  Try it Yourself
                </button>
              </Link>
            </div>
            <p>Python has no command for declaring a variable.</p>
            <p>
              You will learn more about variables in the{" "}
              <a href=""> Python Variables</a> chapter.
            </p>
            <hr />
            <h5 id="Comments">Comments</h5>
            <p>
              Python has commenting capability for the purpose of in-code
              documentation.
            </p>
            <p>
              Comments start with a #, and Python will render the rest of the
              line as a comment:
            </p>
            <div id="tryit4" className="container">
              <h3>EXAMPLE</h3>

              <p className="text-primary">
                #This is a comment. <br />
                print("Hello, World!")
              </p>
              <Link to="/c">   <button className="btn btn-primary text-warning">
                Try it Yourself
              </button></Link>
            </div>
            <br />
            <div className="container">
              {" "}
              <Row>
                <Col>
                  <Link to="/start">
                    <button className="btn btn-primary" id="previous">
                      {" "}
                      Previous
                    </button>
                  </Link>
                </Col>
                <Col>
                  <Link to="/comment">
                    {" "}
                    <button className="btn btn-primary" id="Next">
                      Next
                    </button>
                  </Link>
                </Col>
              </Row>{" "}
            </div>
          </div>
        </Col>
      </Row>
      <br />
      <End />
    </Fragment>
  );
};
export default Syntax;
