import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SideNav from "./sidenav";
import "./pythonH.css";
import End from "./end";
 export const Start=()=>{

  const dsmaller = <img id="Dsmaller" src="./double small.png" alt="" />;

  const smaller = <img id="Dsmaller" src="./smaller.png" alt="" />;
  const greater = <img id="Dgreater" src="./greater.jpg" alt="" />;
  const dgreater = <img id="Dgreater" src="./double greater.png" alt="" />;

 
    return (
      <Fragment>
        <Row>
          <Col sm={4}>
            <SideNav />
          </Col>

          <Col>
            <br /> <br /> <br />
            <div id="start" className="container">

<h1 className="ml-3">Python Getting Started</h1> <br />
<div className="container"> <Row>
            <Col>
          <Link to="/intro"><button className="btn btn-primary" id="previous" > Previous</button></Link>  
            </Col>
            <Col>
           
           <Link to="/syntax"> <button className="btn btn-primary" id="Next" >Next</button></Link>
            </Col>
            
            </Row>    </div>
<hr />


              <h5>Python Install</h5>
              <p>Many PCs and Macs will have python already installed.</p>
              <p>
                To check if you have python installed on a Windows PC, search in
                the start bar for Python or run the following on the Command
                Line (cmd.exe):
              </p>
              <div id="tryit1" className="container">
                <p>
                  {" "}
                  <div id="vr"></div> C:\Users\Your Name{greater} python --version
                </p>
              </div>{" "}
              <br />
              <p>
                To check if you have python installed on a Linux or Mac, then on
                linux open the command line or on Mac open the Terminal and
                type:
              </p>
              <div id="tryit1" className="container">
                <p>
                  {" "}
                  <div id="vr"></div>python --version
                </p>
              </div>
              <p>
                If you find that you do not have Python installed on your
                computer, then you can download it for free from the following
                website: <a href=" https://www.python.org/"> https://www.python.org/</a>
              </p>
              <hr />
              <h5>Python Quickstart</h5>
              <p>
                Python is an interpreted programming language, this means that
                as a developer you write Python (.py) files in a text editor and
                then put those files into the python interpreter to be executed.
              </p>
              <p>
                The way to run a python file is like this on the command line:
              </p>
              <div id="tryit1" className="container">
                <p>
                  {" "}
                  <div id="vr"></div>C:\Users\Your Name{greater}python helloworld.py
                </p>
              </div>
              <p>Where "helloworld.py" is the name of your python file.</p>
              <p>
                Let's write our first Python file, called helloworld.py, which
                can be done in any text editor.
              </p>
              <div id="tryit" className="container">
                <h3>EXAMPLE</h3>

                <p className="text-primary">print ("Hello, World!")</p>
                <Link to="/c">   <button className="btn btn-primary text-warning">
                Try it Yourself
              </button></Link>
              </div>{" "}
              <br />
              <p>
                Simple as that. Save your file. Open your command line, navigate
                to the directory where you saved your file, and run:
              </p>


              <div id="tryit1" className="container">
                <p>
                  {" "}
                  <div id="vr"></div>C:\Users\Your Name{greater} python helloworld.py
                </p>
              </div>
              <p>The output should read:</p>

              <div id="tryit1" className="container">
                <p>
                  {" "}
                  <div id="vr"></div>Hello, World!
                </p>
              </div>
              <hr />


              <h5>The Python Command Line</h5>

              <p>
To test a short amount of code in python sometimes it is quickest and easiest
 not to write the code in a file. This is made possible because Python can be run as a command line itself.</p>
         
         <p>Type the following on the Windows, Mac or Linux command line:

</p>

<div id="tryit1" className="container">
                <p>
                  {" "}
                  <div id="vr"></div>C:\Users\Your Name{greater}python 
                </p>
              </div>
              <p>Or, if the "python" command did not work, you can try "py":</p>
         
              <div id="tryit1" className="container">
                <p>
                  {" "}
                  <div id="vr"></div>C:\Users\Your Name {greater} py
                </p>



              </div>
         <p>From there you can write any python, including our hello world example from earlier in the tutorial:</p>
         <div id="tryit1" className="container">
                <p>
                  {" "}
                  <div id="vr"></div>{dgreater}{greater} print("Hello, World!")
                </p>



              </div>

              <p>Whenever you are 
                done in the python command line, you can simply type the following to quit the python command line interface:</p>
           
                <div id="tryit1" className="container">
                <p>
                  {" "}
                  <div id="vr"></div>exit()
                </p>



              </div>
           <br />
           <div className="container"> <Row>
            <Col>
          <Link to="/intro"><button className="btn btn-primary" id="previous" > Previous</button></Link>  
            </Col>
            <Col>
           
           <Link to="/syntax"> <button className="btn btn-primary" id="Next" >Next</button></Link>
            </Col>
            
            </Row>    </div>
           
            </div>
          </Col>
        </Row>

        <End />
      </Fragment>
    )
  };

