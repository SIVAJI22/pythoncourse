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
export const Lambda = () => {
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
          <div id="Lambda" className="container">
            <h3>Python Lambda</h3> <br />
            <div className="container">
              {" "}
              <Row>
                <Col>
                  <Link to="/func">
                    <button className="btn btn-primary" id="previous">
                      {" "}
                      Previous
                    </button>
                  </Link>
                </Col>
                <Col>
                  <Link to="/array">
                    {" "}
                    <button className="btn btn-primary" id="Next">
                      Next
                    </button>
                  </Link>
                </Col>
              </Row>{" "}
            </div>
            <hr /> <p>A lambda function is a small anonymous function.</p>
            <p>
              A lambda function can take any number of arguments, but can only
              have one expression.
            </p>
            <hr />
            <h4>Syntax</h4>
            <br />
            <p id="lambda1" className="fst-italic">
              lambda arguments : expression
            </p>
            <p>The expression is executed and the result is returned:</p>
            <div id="tryit4" className="container">
              <h3>EXAMPLE</h3>
              <span>
                Add 10 to argument <span className="text-danger">a</span> , and
                return the result:
              </span>{" "}
              <br /> <br />
              <p className="text-primary">
                x = lambda{" "}
                <span className="text-dark">
                  {" "}
                  a : a +<span className="text-danger">10</span>{" "}
                </span>{" "}
                <br />
                print(x(
                <span className="text-dark">
                  <span className="text-danger">5</span>)) :
                </span>{" "}
                <br />
              </p>
              <Link to="/c"><button className="btn btn-primary text-warning">
                Try it Yourself
              </button></Link> 
            </div>
            <br />
            <p>Lambda functions can take any number of arguments:</p>
            <div id="tryit4" className="container">
              <h3>EXAMPLE</h3>
              Multiply argument <span className="text-danger">a</span> with
              argument <span className="text-danger">b</span> and return the
              result: <br /> <br />
              <p className="text-primary">
                x = lambda <span className="text-dark"> a, b : a * b </span>{" "}
                <br />
                <br /> print(x(
                <span className="text-dark">
                  <span className="text-danger">5, 6</span>)) :
                </span>{" "}
                <br />
              </p>
              <Link to="/c"><button className="btn btn-primary text-warning">
                Try it Yourself
              </button></Link> 
            </div>
            <br />
            <div id="tryit4" className="container">
              <h3>EXAMPLE</h3>{" "}
              <span>
                Summarize argument <span className="text-danger">a</span>,{" "}
                <span className="text-danger">b</span>, and{" "}
                <span className="text-danger">c </span> {""} and return the
                result:
              </span>{" "}
              <br /> <br />
              <p className="text-primary">
                x = lambda{" "}
                <span className="text-dark">a, b, c : a + b + c </span> <br />
                print{""}
                <span className="text-dark">
                  (x(
                  <span className="text-danger">5, 6, 2</span>)) :
                </span>{" "}
                <br />
              </p>
              <Link to="/c"><button className="btn btn-primary text-warning">
                Try it Yourself
              </button></Link> 
            </div>{" "}
            <hr />
            <br />
            <h4>Why Use Lambda Functions?</h4>
            <p>
              The power of lambda is better shown when you use them as an
              anonymous function inside another function.
            </p>
            <p>
              Say you have a function definition that takes one argument, and
              that argument will be multiplied with an unknown number:
            </p>
            <br />
            <div id="tryit4" className="container">
              <p className="text-primary">
                def <span className="text-dark">myfunc(n): </span> <br />
                return lambda
                <span className="text-dark">a : a * n :</span> <br />
              </p>
            </div>
            <br />
            <p>
              Use that function definition to make a function that always
              doubles the number you send in:
            </p>
            <div id="tryit4" className="container">
              <h3>EXAMPLE</h3>

              <p className="text-primary">
                def <span className="text-dark">myfunc(n): </span> <br />
                return lambda
                <span className="text-dark">a : a * n :</span> <br />
                <br />
                <span className="text-dark">
                  mydoubler = myfunc(
                  <span className="text-danger">2</span>)
                </span>{" "}
                <br /> <br />
                print{" "}
                <span className="text-dark">
                  (mydoubler(
                  <span className="text-danger">11</span>))
                </span>
              </p>
              <Link to="/c"><button className="btn btn-primary text-warning">
                Try it Yourself
              </button></Link> 
            </div>
            <br />
            <p>
              Or, use the same function definition to make a function that
              always triples the number you send in
            </p>
            <div id="tryit4" className="container">
              <h3>EXAMPLE</h3>

              <p className="text-primary">
                def <span className="text-dark">myfunc(n): </span> <br />
                return lambda
                <span className="text-dark">a : a * n :</span> <br />
                <br />
                <span className="text-dark">
                  mytripler = myfunc(
                  <span className="text-danger">3</span>)
                </span>{" "}
                <br /> <br />
                print{" "}
                <span className="text-dark">
                  (mytripler(
                  <span className="text-danger">11</span>))
                </span>
              </p>
              <Link to="/c"><button className="btn btn-primary text-warning">
                Try it Yourself
              </button></Link> 
            </div>
            <br />
            <p>
              Or, use the same function definition to make both functions, in
              the same program:
            </p>
            <div id="tryit4" className="container">
              <h3>EXAMPLE</h3>

              <p className="text-primary">
                def <span className="text-dark">myfunc(n): </span> <br />
                return lambda
                <span className="text-dark">a : a * n :</span> <br />
                <br />
                <span className="text-dark">
                  mydoubler = myfunc(
                  <span className="text-danger">2</span>)
                </span>
                <br />
                <span className="text-dark">
                  mytripler = myfunc(
                  <span className="text-danger">3</span>)
                </span>
                <br /> <br />
                <br /> <br />
                print{" "}
                <span className="text-dark">
                  (mydoubler(
                  <span className="text-danger">11</span>))
                </span>{" "}
                <br />
                print{" "}
                <span className="text-dark">
                  (mytripler(
                  <span className="text-danger">11</span>))
                </span>
              </p>
              <Link to="/c"><button className="btn btn-primary text-warning">
                Try it Yourself
              </button></Link> 
            </div>
            <br />
            <div className="container">
              {" "}
              <Row>
                <Col>
                  <Link to="/func">
                    <button className="btn btn-primary" id="previous">
                      {" "}
                      Previous
                    </button>
                  </Link>
                </Col>
                <Col>
                  <Link to="/array">
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
      <End />
    </Fragment>
  );
};
