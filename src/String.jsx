import React, { Fragment } from "react";
import Nav from "./Nav";
import SideNav from "./sidenav";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
import Col from "react-bootstrap/Col";
import "./pythonH.css";
import End from "./end";
class String extends React.Component {
  render() {
    return (
      <Fragment>
        <Nav />

        <Row>
          <Col>
            <SideNav />
          </Col>
          <Col id="scrolling" >
            <div id="String" className="container">
              <h3>Python Strings</h3>
              <br />
              <div className="container"> <Row>
            <Col>
          <Link to="/cast "><button className="btn btn-primary" id="previous" > Previous</button></Link>  
            </Col>
            <Col>
           
           <Link to="/bool"> <button className="btn btn-primary" id="Next" >Next</button></Link>
            </Col>
            
            </Row>    </div>
              
              
              
               <hr />
              <h5>Strings</h5>
              <p>
                Strings in python are surrounded by either single quotation
                marks, or double quotation marks.
              </p>
              <p>
                <span className="brown">'hello' {}</span>                  is the same as{}
                <span className="brown">"hello"</span>
              </p>
              <br />
              <p>
                You can display a string literal with the{" "}
                <span className="brown">print()</span> function:
              </p>
              <br />
              <div id="tryit4" className="container">
                <h3>EXAMPLE</h3>
                <br />
                <br />
                <p className="text-primary">
                  print(<span className="text-danger">"Hello"</span>) <br />
                  print(<span className="text-danger">'Hello'</span>) <br />
                </p>
                <Link to="/c">   <button className="btn btn-primary text-warning">
                Try it Yourself
              </button></Link>
              </div>
              <br />
              <hr />
              <h5>Assign String to a Variable</h5>
              <br />
              <p>
                Assigning a string to a variable is done with the variable name
                followed by an equal sign and the string:
              </p>
              <br />
              <div id="tryit4" className="container">
                <h3>EXAMPLE</h3>
                <br />
                <br />
                <p className="text-primary">
                  a=<span className="text-danger">"Hello"</span> <br />
                  print(a) <br />
                </p>
                <Link to="/c">   <button className="btn btn-primary text-warning">
                Try it Yourself
              </button></Link>
              </div>
              <br /> <hr />
              <h5>Multiline Strings</h5>
              <p>
                You can assign a multiline string to a variable by using three
                quotes:
              </p>
              <br />
              <div id="tryit4" className="container">
                <h3>EXAMPLE</h3>
                <br />
                <br />
                <p className="text-primary">
                  a=
                  <span className="text-danger">
                    """Lorem ipsum dolor sit amet, consectetur <br />  {""} {""} adipiscing elit,
                    sed do eiusmod tempor incididunt ut <br /> labore et dolore magna
                    aliqua."""
                  </span>{" "}
                  <br />
                  print(a) <br />
                </p>
                <Link to="/c">   <button className="btn btn-primary text-warning">
                Try it Yourself
              </button></Link>
              </div>
              <br />
              <p>Or three single quotes:</p>
              <br />
              <div id="tryit4" className="container">
                <h3>EXAMPLE</h3>
                <br />
                <br />
                <p className="text-primary">
                  a=
                  <span className="text-danger">
                    '''Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.'''{" "}
                  </span>{" "}
                  <br />
                  print(a) <br />
                </p>
                <Link to="/c">   <button className="btn btn-primary text-warning">
                Try it Yourself
              </button></Link>
              </div>{" "}
              <br />
              <h6 className="remember">
                {" "}
                <span className="fw-bold"> Note: </span>in the result, the line
                breaks are inserted at the same position as in the code.
              </h6>
              <br />
              <h4>Strings are Arrays</h4>
              <br />
              <p>
                Like many other popular programming languages, strings in Python
                are arrays of bytes representing unicode characters.
              </p>
              <br />
              <p>
                However, Python does not have a character data type, a single
                character is simply a string with a length of 1.
              </p>
              <br />
              <p>
                Square brackets can be used to access elements of the string.
              </p>
              <br />
              <div id="tryit4" className="container">
                <h3>EXAMPLE</h3>
                <br />{" "}
                <span>
                  Get the character at position 1 (remember that the first
                  character has the position 0):
                </span>
                <br />
                <p className="text-primary">
                  a=<span className="text-danger"> "Hello, World!" </span>{" "}
                  <br />
                  print(a[ <span className="text-danger">1</span>]) <br />
                </p>
                <Link to="/c">   <button className="btn btn-primary text-warning">
                Try it Yourself
              </button></Link>
              </div>{" "}
              <br />
              <hr />
              <h5>Looping Through a String</h5> <br />
              <p>
                Since strings are arrays, we can loop through the characters in
                a string, with a <span className="text-danger"> for </span>{" "}
                loop.
              </p>
              <br />
              <div id="tryit4" className="container">
                <h3>EXAMPLE</h3>
                <br />{" "}
                <span>Loop through the letters in the word "banana":</span>
                <br />
                <p className="text-primary">
                  for x in<span className="text-danger"> "banana"</span> <br />
                  print(x)
                  <br />
                </p>
                <Link to="/c">   <button className="btn btn-primary text-warning">
                Try it Yourself
              </button></Link>
              </div>{" "}
              <br />
              <p>
                Learn more about For Loops in our{" "}
                <a href="">Python For Loops </a> chapter.
              </p>
              <br />
              <h4>String Length</h4>
              <p>
                To get the length of a string, use the{" "}
                <span className="text-danger"> len() </span>function.
              </p>
              <br />
              <div id="tryit4" className="container">
                <h3>EXAMPLE</h3>
                <br />{" "}
                <span> The
                  <span className="text-danger">  len() </span>function returns
                  the length of a string:
                </span> <br />
                <br />
                <p className="text-primary">
                  a=<span className="text-danger">"Hello, World!"</span> <br />
                  print(len(a))
                  <br />
                </p>
                <Link to="/c">   <button className="btn btn-primary text-warning">
                Try it Yourself
              </button></Link>
              </div>{" "}
              <br />
              <h5>Check String</h5> <br />
              <p>
                To check if a certain phrase or character is present in a
                string, we can use the keyword{" "}
                <span className="text-danger">in.</span>{" "}
              </p>

              <br />


              <div id="tryit4" className="container">
                <h3>EXAMPLE</h3>
                <br />{" "}
                <span>
                Check if "free" is present in the following text:
                </span>
                <br />
                <p className="text-primary">
                  txt=<span className="brown"> "The best things in life are free!"</span> <br />
                  print(   <span className="brown">"free"</span>  in txt)

                  <br />
                </p>
                <Link to="/c">   <button className="btn btn-primary text-warning">
                Try it Yourself
              </button></Link>
              </div>{" "}
              <br />
              <p>Use it in an <span className="text-danger">if</span> statement:</p>
              <br />
              <div id="tryit4" className="container">
                <h3>EXAMPLE</h3>
                <br />{" "}
                <span>
                Print only if "free" is present:
                </span>
                <br />
                <p className="text-primary">
                  txt=<span className="brown"> "The best things in life are free!"</span> <br />
                  if(   <span className="brown">"free"</span>  in txt)
<br />
<p>  print(
<span className="brown">"Yes, 'free' is present."</span> )

</p>
                  <br />
                </p>
                <Link to="/c">   <button className="btn btn-primary text-warning">
                Try it Yourself
              </button></Link>
              </div>{" "}

              <br />
              <p>Learn more about If statements in our  <a href=""> Python If...Else </a> chapter.

</p>
<hr />
<br />
<h4>Check if NOT</h4>

<p>To check if a certain phrase or character is NOT present in a string, we can use the keyword <span className="text-danger">not in.</span> </p>
          
          
          <br />
          
          <div id="tryit4" className="container">
                <h3>EXAMPLE</h3>
                <br />{" "}
                <span>
                Check if "expensive" is NOT present in the following text:
                </span>
                <br />
                <p className="text-primary">
                  txt=<span className="brown">  "The best things in life are free!"
</span> <br />
              
<p>  print(
<span className="brown">"expensive"</span> not in txt )

</p>
                  <br />
                </p>
                <Link to="/c">   <button className="btn btn-primary text-warning">
                Try it Yourself
              </button></Link>
              </div>{" "}

              <br />
              <p>Use it in an  <span className="text-danger"> if</span>  statement:</p>
<br />
      
<div id="tryit4" className="container">
                <h3>EXAMPLE</h3>
                <br />{" "}
                <span>
                print only if "expensive" is NOT present:
                </span>
                <br />
                <p className="text-primary">
                  txt=<span className="brown">  "The best things in life are free!"
</span> <br />
                  if(   <span className="brown"> "expensive" </span> not  in txt)
<br />
<p>  print(
<span className="brown">"No, 'expensive' is NOT present."</span>  )

</p>
                  <br />
                </p>
                <Link to="/c">   <button className="btn btn-primary text-warning">
                Try it Yourself
              </button></Link>
              </div>{" "}

<br />
<div className="container"> <Row>
            <Col>
          <Link to="/cast "><button className="btn btn-primary" id="previous" > Previous</button></Link>  
            </Col>
            <Col>
           
           <Link to="/bool"> <button className="btn btn-primary" id="Next" >Next</button></Link>
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
export default String;
