import React, { Fragment } from "react";

import Nav from "./Nav";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SideNav from "./sidenav";
import "./pythonH.css";
import End from "./end";
import { Link } from "react-router-dom";
class Intro extends React.Component {
  render() {
    return (
      <Fragment>
        <Nav />

        <div id="home" className="contianer">
          <Row>
            <Col sm={6}>
              <SideNav />
            </Col>
            <br />
            <Col sm={5}>
              <div id="pythont2" className="contianer">
                <div id="pythont" className="contianer">
                  <br /> 
                  <h3>Python Introduction</h3>
                  <br />
                  <div className="container"> <Row>
            <Col>
          <Link to="/code"><button className="btn btn-primary" id="previous" > Home</button></Link>  
            </Col>
            <Col>
           
           <Link to="/start"> <button className="btn btn-primary" id="Next" >Next</button></Link>
            </Col>
            
            </Row>    </div>
                  <hr />
                  <h5>What is Python?</h5>
                  <p>
                    Python is a popular programming language. It was created by
                    Guido van Rossum, and released in 1991.
                  </p>
                  <p>
                    Python can be used on a server to create web applications.
                  </p>
                  <p>It is used for:</p>
                  <ul>
                    <li>web development (server-side),</li>
                    <li>software development,</li>
                    <li>mathematics,</li>
                    <li>system scripting.</li>
                  </ul>
                  <h5>What can Python do?</h5>
                  <ul>
                    <li>
                      Python can be used on a server to create web applications.
                    </li>
                    <li>
                      Python can be used alongside software to create workflows.
                    </li>
                    <li>
                      Python can connect to database systems. It can also read
                      and modify files.
                    </li>
                    <li>
                      Python can be used to handle big data and perform complex
                      mathematics.
                    </li>
                    <li>
                      Python can be used for rapid prototyping, or for
                      production-ready software development
                    </li>
                  </ul>
                  <h5>Why Python?</h5>
                  <ul>
                    <li>
                      Python works on different platforms (Windows, Mac, Linux,
                      Raspberry Pi, etc).
                    </li>
                    <li>
                      Python has a simple syntax similar to the English
                      language.
                    </li>
                    <li>
                      Python has syntax that allows developers to write programs
                      with fewer lines than some other programming languages.
                    </li>
                    <li>
                      Python runs on an interpreter system, meaning that code
                      can be executed as soon as it is written. This means that
                      prototyping can be very quick.
                    </li>
                    <li>
                      Python can be treated in a procedural way, an
                      object-oriented way or a functional way.
                    </li>
                  </ul>
                  <h5>Good to know</h5>
                  <ul>
                    <li>
                      The most recent major version of Python is Python 3, which
                      we shall be using in this tutorial. However, Python 2,
                      although not being updated with anything other than
                      security updates, is still quite popular.
                    </li>
                    <li>
                      In this tutorial Python will be written in a text editor.
                      It is possible to write Python in an Integrated
                      Development Environment, such as Thonny, Pycharm, Netbeans
                      or Eclipse which are particularly useful when managing
                      larger collections of Python files.
                    </li>
                  </ul>
                  <h5>Python Syntax compared to other programming languages</h5>
                  <ul>
                    <li>
                      Python was designed for readability, and has some
                      similarities to the English language with influence from
                      mathematics.
                    </li>
                    <li>
                      Python uses new lines to complete a command, as opposed to
                      other programming languages which often use semicolons or
                      parentheses.
                    </li>
                    <li>
                      Python relies on indentation, using whitespace, to define
                      scope; such as the scope of loops, functions and classes.
                      Other programming languages often use curly-brackets for
                      this purpose.
                    </li>
                  </ul>
                 
                </div>
 <br /> <br />
                <div id="learning" className="container">
                  <h5>Learning by Examples</h5>
                
                  <p>
                    With our "Try it Yourself" editor, you can edit Python code
                    and view the result.
                  </p>
                  <br />
                  <div id="tryit" className="container">
                  <br />

                    <p>print("Hello, World!")</p>
                
                
                <Link to="/c">                
                    <button className="btn btn-primary text-warning">
                      Try it Yourself
                    </button></Link>

                  </div>
                  <br />
                  
           
                </div>

               

              </div>
            </Col>
          </Row>
       
       
        </div>
        <End />
      </Fragment>
    );
  }
}
export default Intro;
