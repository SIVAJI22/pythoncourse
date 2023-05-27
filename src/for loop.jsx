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
export const Forloop = () => {
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
          <div id="for" className="container">
            <h3>Python For Loops</h3> <br />
            
            <div className="container"> <Row>
            <Col>
          <Link to="/while"><button className="btn btn-primary" id="previous" > Previous</button></Link>  
            </Col>
            <Col>
           
           <Link to="/func"> <button className="btn btn-primary" id="Next" >Next</button></Link>
            </Col>
            
            </Row>    </div> 
            
             <hr />
            <h5>Python For Loops</h5> <br />
            <p>
              A <span className="text-danger">for</span> for loop is used for
              iterating over a sequence (that is either a list, a tuple, a
              dictionary, a set, or a string).
            </p>
            <br />
            <p>
              This is less like the <span className="text-danger">for</span>{" "}
              keyword in other programming languages, and works more like an
              iterator method as found in other object-orientated programming
              languages.
            </p>
            <br />
            <p>
              With the <span className="text-danger">for</span>loop we can
              execute a set of statements, once for each item in a list, tuple,
              set etc.
            </p>
            <br />
            <div id="tryit4" className="container">
              <h3>EXAMPLE</h3>
              <br />
              <span>Print each fruit in a fruit list:</span> <br />
              <p className="text-primary">
                fruits = [ <span className="brown">"apple"</span> ,{" "}
                <span className="brown">"banana"</span>,{" "}
                <span className="brown">"cherry"</span>] <br />
                for x in fruits: <br />
                print(x)
              </p>
              <Link to="/c"><button className="btn btn-primary text-warning">
                Try it Yourself
              </button></Link> 
            </div>
            <br />{" "}
            <p>
              The <span className="text-danger">for</span> loop does not require
              an indexing variable to set beforehand.
            </p>
            <br /> <hr /> <h4>Looping Through a String</h4> <br />
            <p>
              Even strings are iterable objects, they contain a sequence of
              characters:
            </p>
            <div id="tryit4" className="container">
              <h3>EXAMPLE</h3>
              <br />
              <span>Loop through the letters in the word "banana":</span> <br />
              <p className="text-primary">
                for x in <span className="brown">"banana"</span>, <br />
                print(x)
              </p>
              <Link to="/c"><button className="btn btn-primary text-warning">
                Try it Yourself
              </button></Link> 
            </div>
            <br /> <hr />
            <h4> The break Statement</h4> <br />
            <p>
              With the <span className="text-danger">break </span> statement we
              can stop the loop before it has looped through all the items:
            </p>
            <br />
            <div id="tryit4" className="container">
              <h3>EXAMPLE</h3>
              <br />
              <span>
                Exit the loop when <span className="text-danger">x</span> is
                "banana":
              </span>{" "}
              <br />
              <p className="text-primary">
                fruits = [ <span className="brown">"apple"</span> ,{" "}
                <span className="brown">"banana"</span>,{" "}
                <span className="brown">"cherry"</span>] <br />
                for x in fruits: <br />
                print(x) <br />
                if x == <span className="brown">"banana"</span>, <br />
                break
              </p>
              <Link to="/c"><button className="btn btn-primary text-warning">
                Try it Yourself
              </button></Link> 
            </div>{" "}
            <br />
            <div id="tryit4" className="container">
              <h3>EXAMPLE</h3>
              <br />
              <span>
                Exit the loop when
                <span className="text-danger">x</span> is "banana", but this
                time the break comes before the print:
              </span>{" "}
              <br />
              <p className="text-primary">
                fruits = [ <span className="brown">"apple"</span> ,{" "}
                <span className="brown">"banana"</span>,{" "}
                <span className="brown">"cherry"</span>] <br />
                for x in fruits: <br />
                if x == <span className="brown">"banana"</span>, <br />
                break <br />
                print(x)
              </p>
              <Link to="/c"><button className="btn btn-primary text-warning">
                Try it Yourself
              </button></Link> 
            </div>{" "}
            <br /> <hr /> <h5>The continue Statement</h5> <br />
            <p>
              With the <span className="text-danger"> continue </span>statement
              we can stop the current iteration of the loop, and continue with
              the next:
            </p>
            <br />
            <div id="tryit4" className="container">
              <h3>EXAMPLE</h3>
              <br />
              <span>Do not print banana:</span> <br />
              <p className="text-primary">
                fruits = [ <span className="brown">"apple"</span> ,{" "}
                <span className="brown">"banana"</span>,{" "}
                <span className="brown">"cherry"</span>] <br />
                for x in fruits: <br />
                if x == <span className="brown">"banana"</span>, <br />
                continue <br />
                print(x)
              </p>
              <Link to="/c"><button className="btn btn-primary text-warning">
                Try it Yourself
              </button></Link> 
            </div>
            <br />
            <hr /> <h4>The range() Function</h4>
            <br />{" "}
            <p>
              To loop through a set of code a specified number of times, we can
              use the <span className="text-danger"> range() </span>
              function,
            </p>{" "}
            <br />
            <p>
              {" "}
              <span className="text-danger"> range() </span>function returns a
              sequence of numbers, starting from 0 by default, and increments by
              1 (by default), and ends at a specified number.
            </p>
            <br />
            <div id="tryit4" className="container">
              <h3>EXAMPLE</h3>
              <br />
              <span>Using the range() function:</span> <br />
              <p className="text-primary">
                for x in range(<span className="text-danger">6</span>): , <br />
                print(x)
              </p>
              <Link to="/c"><button className="btn btn-primary text-warning">
                Try it Yourself
              </button></Link> 
            </div>{" "}
            <br />
            <h6 className="remember">
              Note that <span className="text-danger"> range(6)</span> is not
              the values of 0 to 6, but the values 0 to 5.
            </h6>
            <br />
            <p>
              The <span className="text-danger"> range()</span>
              function defaults to 0 as a starting value, however it is possible
              to specify the starting value by adding a parameter:{" "}
              <span className="text-danger"> range(2, 6)</span>, which means
              values from 2 to 6 (but not including 6):
            </p>{" "}
            <br />
            <div id="tryit4" className="container">
              <h3>EXAMPLE</h3>
              <br />
              <span>Using the start parameter:</span> <br />
              <p className="text-primary">
                for x in range(<span className="text-danger">2,6</span>): ,{" "}
                <br />
                print(x)
              </p>
              <Link to="/c"><button className="btn btn-primary text-warning">
                Try it Yourself
              </button></Link> 
            </div>{" "}
            <br />
            <p>
              The <span className="text-danger"> range()</span> function
              defaults to increment the sequence by 1, however it is possible to
              specify the increment value by adding a third parameter:{" "}
              <span className="text-danger"> range(2,30, 3)</span>:
            </p>
            <br />
            <div id="tryit4" className="container">
              <h3>EXAMPLE</h3>
           
              <span>Increment the sequence with 3 (default is 1):</span> <br /> <br />
              <p className="text-primary">
                for x in range (<span className="text-danger">2,30,3</span>): ,{" "}
                <br />
                print(x)
              </p>
              <Link to="/c"><button className="btn btn-primary text-warning">
                Try it Yourself
              </button></Link> 
            </div>{" "}
            <br /> <hr />
            <h4>Else in For Loop</h4> <br />
            <p>
              The <span className="text-danger">else</span>
              keyword in a <span className="text-danger">for</span> loop
              specifies a block of code to be executed when the loop is
              finished:
            </p>
            <br />
            <div id="tryit4" className="container">
              <h3>EXAMPLE</h3>
              <br />
              <span>Print all numbers from 0 to 5, and print a message when the loop has ended:</span> <br />
              <p className="text-primary">
                for x in range(<span className="text-danger">6</span>): , <br />
                print(x) <br />
                else: <br />
                print( <span className="brown">"Finally finished!"</span> )
              </p>
              <Link to="/c"><button className="btn btn-primary text-warning">
                Try it Yourself
              </button></Link> 
            </div>{" "}
            <br />
            <h6 className="remember">
              <span className="fw-bold"> Note:</span> The{" "}
              <span className="text-danger"> else</span>
              block will NOT be executed if the loop is stopped by a
              <span className="text-danger">break</span> statement.
            </h6>
            <br />
            <div id="tryit4" className="container">
              <h3>EXAMPLE</h3>
       
              <span>
                Break the loop when <span className="text-danger">x</span> is 3,
                and see what happens with the{" "}
                <span className="text-danger">else</span> block:
              </span>{" "}
              <br /> <br />
              <p className="text-primary">
                for x in range(<span className="text-danger">6</span>): , <br />
                if x == <span className="text-danger">3</span>: break <br />
                print(x) else: <br />
                print( <span className="brown">"Finally finished!"</span> )
              </p>
              <Link to="/c"><button className="btn btn-primary text-warning">
                Try it Yourself
              </button></Link> 
            </div>{" "}
            <br /> <hr />
            <h4>Nested Loops</h4> <br />
            <p>A nested loop is a loop inside a loop.</p>
            <br />
            <p>
              The "inner loop" will be executed one time for each iteration of
              the "outer loop":
            </p>
            <br />
            <div id="tryit4" className="container">
              <h3>EXAMPLE</h3>
           
              <span>Print each adjective for every fruit:</span> <br /> <br />
              <p className="text-primary">
                adj = [ <span className="brown">"red"</span> ,{" "}
                <span className="brown">"big"</span>,{" "}
                <span className="brown">"tasty"</span>] <br />
                fruits = [ <span className="brown">"apple"</span> ,{" "}
                <span className="brown">"banana"</span>,{" "}
                <span className="brown">"cherry"</span>] <br /> print(thisset)
                for x in adj: <br />
                for y in fruits: <br />
                print(x, y)
              </p>
              <Link to="/c"><button className="btn btn-primary text-warning">
                Try it Yourself
              </button></Link> 
            </div>{" "}
            <br />
            <hr />
            <h4>The pass Statement</h4> <br />
            <p>
           <span className="text-danger">for</span>    loops cannot be empty, but if you 
           for some reason have a  <span className="text-danger">for</span> 
              loop with no content, put in the <span className="text-danger">pass   </span> statement to avoid getting
              an error.
            </p> <br />
            <div id="tryit4" className="container">
              <h3>EXAMPLE</h3>
              <br />
           
              <p className="text-primary">
                for x in (<span className="text-danger">0,1,2</span>): ,{" "}
                <br />
                pass
              </p>
              <Link to="/c"><button className="btn btn-primary text-warning">
                Try it Yourself
              </button></Link> 
            </div>{" "}
            <br />
            <div className="container"> <Row>
            <Col>
          <Link to="/while"><button className="btn btn-primary" id="previous" > Previous</button></Link>  
            </Col>
            <Col>
           
           <Link to="/func"> <button className="btn btn-primary" id="Next" >Next</button></Link>
            </Col>
            
            </Row>    </div> 
            
          </div>
        </Col>
      </Row>
      <End/>
    </Fragment>
  );
};
