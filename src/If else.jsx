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
export const Ifelse = () => {
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
          <div id="ifelse" className="container">
            <h4>Python If ... Else</h4><br />
            <div className="container"> <Row>
            <Col>
          <Link to="/Dict"><button className="btn btn-primary" id="previous" > Previous</button></Link>  
            </Col>
            <Col>
           
           <Link to="/while"> <button className="btn btn-primary" id="Next" >Next</button></Link>
            </Col>
            
            </Row>    </div> 
            <hr /> <br />
            <h5>Python Conditions and If statements</h5>
            <br />{" "}
            <p>
              Python supports the usual logical conditions from mathematics:
            </p>
            <br />
            <ul>
              <li>
                Equals: <span className="text-danger">a == b</span>
              </li>
              <li>
                Not Equals: <span className="text-danger">a != b</span>{" "}
              </li>
              <li>
                Less than: <span className="text-danger"> a {smaller} b</span>{" "}
              </li>
              <li>
                Less than or equal to:{" "}
                <span className="text-danger">a {smaller}= b </span>{" "}
              </li>
              <li>
                Greater than: <span className="text-danger">a {greater}b</span>
              </li>
              <li>
                Greater than or equal to:{" "}
                <span className="text-danger">a {greater}= b</span>
              </li>
            </ul>
            <br />{" "}
            <p>
              These conditions can be used in several ways, most commonly in "if
              statements" and loops.
            </p>
            <br />
            <p>
              An "if statement" is written by using the {""}
              <span className="text-danger">if</span>
              keyword.
            </p>
            <br />
            <div id="tryit4" className="container">
              <h3>EXAMPLE</h3>
              <span>If statement:</span> <br /> <br />
              <p>
                a=
                <span className="text-danger">33</span> , <br /> b={" "}
                <span className="text-danger">200</span>, <br /> <br /> if b{" "}
                {greater} a:
                <br />
                print (<span className="brown"> "b is greater than a"</span>)
              </p>
              <Link to="/c"><button className="btn btn-primary text-warning">
                Try it Yourself
              </button></Link> 
            </div>
            <br />
            <p>
              In this example we use two variables,{" "}
              <span className="text-danger">a</span>
              and<span className="text-danger"> b</span>, which are used as part
              of the if statement to test whether
              <span className="text-danger"> b</span>
              is greater than<span className="text-danger">a </span>. As
              <span className="text-danger">a </span>
              is <span className="text-danger">33</span>, and{" "}
              <span className="text-danger"> b</span>
              is <span className="text-danger">200</span>, we know that 200 is
              greater than 33, and so we print to screen that "b is greater than
              a".
            </p>
            <br />
            <h4>Indentation</h4> <br />
            <p>
              Python relies on indentation (whitespace at the beginning of a
              line) to define scope in the code. Other programming languages
              often use curly-brackets for this purpose.
            </p>
            <br />
            <div id="tryitpinky" className="container">
              <h3>EXAMPLE</h3>
              <span>
                If statement, without indentation (will raise an error):
              </span>{" "}
              <br /> <br />
              <p>
                a=
                <span className="text-danger">33</span> , <br /> b={" "}
                <span className="text-danger">200</span>, <br /> <br /> if b{" "}
                {greater} a:
                <br />
                print (<span className="brown"> "b is greater than a"</span>)
                <span className="text-success"># you will get an error</span>
              </p>
              <Link to="/c"><button className="btn btn-primary text-warning">
                Try it Yourself
              </button></Link> 
            </div>
            <br />
            <hr />
            <h4>Elif</h4>
            <p>
              The <span className="text-danger">elif</span> keyword is Python's
              way of saying "if the previous conditions were not true, then try
              this condition".
            </p>
            <br />
            <div id="tryit4" className="container">
              <h3>EXAMPLE</h3>
              <br />
              <br />
              <p>
                a=
                <span className="text-danger">33</span> , <br /> b={" "}
                <span className="text-danger">200</span>, <br /> <br /> if b{" "}
                {greater} a:
                <br />
                print (<span className="brown"> "b is greater than a"</span>)
                elif a == b: print (
                <span className="brown"> "a and b are equal"</span>)
              </p>
              <Link to="/c"><button className="btn btn-primary text-warning">
                Try it Yourself
              </button></Link> 
            </div>{" "}
            <br />
            <p>
              In this example <span className="text-danger">a</span> is equal to
              <span className="text-danger">b</span> , so the first condition is
              not true, but the
              <span className="text-danger">elif</span> condition is true, so we
              print to screen that "a and b are equal".
            </p>
            <br /> <hr /> <h4>Else</h4>
            <p>
              The <span className="text-danger">else</span>
              keyword catches anything which isn't caught by the preceding
              conditions.
            </p>
            <div id="tryit4" className="container">
              <h3>EXAMPLE</h3>
              <br />
              <br />
              <p>
                a=
                <span className="text-danger">33</span> , <br /> b={" "}
                <span className="text-danger">200</span>, <br /> <br /> if b{" "}
                {greater} a:
                <br />
                print (<span className="brown"> "b is greater than a"</span>)
                elif a == b: print (
                <span className="brown"> "a and b are equal"</span>)
                <br />
                else:
                <br />
                print (<span className="brown"> "a is greater than b"</span>)
              </p>
              <Link to="/c"><button className="btn btn-primary text-warning">
                Try it Yourself
              </button></Link> 
            </div>
            <br />{" "}
            <p>
              In this example<span className="text-danger">a</span> is greater
              than <span className="text-danger">b</span>, so the first
              condition is not true, also the{" "}
              <span className="text-danger">elif</span>
              condition is not true, so we go to the{" "}
              <span className="text-danger">else</span>
              condition and print to screen that "a is greater than b".
            </p>
            <br />
            <p>
              You can also have an <span className="text-danger">else</span>
              without the <span className="text-danger">elif</span>:
            </p>
            <div id="tryit4" className="container">
              <h3>EXAMPLE</h3>
              <br />
              <br />
              <p>
                a=
                <span className="text-danger">33</span> , <br /> b={" "}
                <span className="text-danger">200</span>, <br /> if b {greater}{" "}
                a:
                <br />
                print (<span className="brown"> "b is greater than a"</span>)
                <br />
                else:
                <br />
                print (<span className="brown"> "b is not greater than a"</span>
                )
              </p>
              <Link to="/c"><button className="btn btn-primary text-warning">
                Try it Yourself
              </button></Link> 
            </div>
            <br />
            <hr />
            <h4>Short Hand If</h4>
            <br />{" "}
            <p>
              If you have only one statement to execute, you can put it on the
              same line as the if statement.
            </p>
            <br />
            <div id="tryit4" className="container">
              <h3>EXAMPLE</h3>
              <br /> <span>One line if statement:</span>
              <br />
              <p>
                if a {greater} b: print (
                <span className="brown"> "a is greater than b"</span>)
              </p>
              <Link to="/c"><button className="btn btn-primary text-warning">
                Try it Yourself
              </button></Link> 
            </div>{" "}
            <br /> <hr />
            <h4> Short Hand If ... Else</h4> <br />
            <p>
              If you have only one statement to execute, one for if, and one for
              else, you can put it all on the same line:
            </p>
            <br />
            <div id="tryit4" className="container">
              <h3>EXAMPLE</h3>
              <br /> <span>One line if else statement:</span>
              <br />
              <p>
                a=
                <span className="text-danger">33</span> , <br /> b={" "}
                <span className="text-danger">200</span>, <br />
                print( <span className="brown">"A"</span> ) if a{greater} b else
                print( <span className="brown">"B"</span> )
              </p>
              <Link to="/c"><button className="btn btn-primary text-warning">
                Try it Yourself
              </button></Link> 
            </div>
            <br />
            <h6 className="remember">
              This technique is known as{" "}
              <span className="fw-bold"> Ternary Operators</span>, or
              <span className=" fw-bold"> Conditional Expressions</span> .
            </h6>{" "}
            <br />{" "}
            <p>You can also have multiple else statements on the same line:</p>
            <br />
            <div id="tryit4" className="container">
              <h3>EXAMPLE</h3>
              <br /> <span>One line if else statement, with 3 conditions:</span>
              <br />
              <p>
                a=
                <span className="text-danger">33</span> , <br /> b={" "}
                <span className="text-danger">200</span>, <br />
                print( <span className="brown">"A"</span> ) if a{greater} b else
                print( <span className="brown">"="</span> ) if a == b elseprint({" "}
                <span className="brown">"B"</span> )
              </p>
              <Link to="/c"><button className="btn btn-primary text-warning">
                Try it Yourself
              </button></Link> 
            </div>{" "}
            <br /> <hr />
            <h4>And</h4>
            <br />{" "}
            <p>
              The <span className="text-danger">and</span> keyword is a logical
              operator, and is used to combine conditional statements:
            </p>{" "}
            <br />
            <div id="tryit4" className="container">
              <h3>EXAMPLE</h3>
              <span>
                Test if <span className="text-danger">a</span>
                is greater than <span className="text-danger">b</span> , AND if
                than <span className="text-danger">c</span>is greater than{" "}
                <span className="text-danger">a</span>:
              </span>{" "}
              <br />
              <br />
              <p>
                a=
                <span className="text-danger">200</span> , <br /> b={" "}
                <span className="text-danger">33</span>, <br />
                c= <span className="text-danger">500</span>
                if a {greater} b and c {greater} a:
                <br />
                print( <span className="brown">
                  "Both conditions are True"
                </span>{" "}
                )
              </p>
              <Link to="/c"><button className="btn btn-primary text-warning">
                Try it Yourself
              </button></Link> 
            </div>{" "}
            <br /> <hr /> <h4>Or</h4>
            <p>
              The <span className="text-danger">or</span> keyword is a logical
              operator, and is used to combine conditional statements:
            </p>
            <br />
            <div id="tryit4" className="container">
              <h3>EXAMPLE</h3>
              <span>
                Test if <span className="text-danger">a</span>
                is greater than <span className="text-danger">b</span> , OR if
                <span className="text-danger">a</span>is greater than than{" "}
                <span className="text-danger">c</span>:
              </span>{" "}
              <br />
              <br />
              <p>
                a=
                <span className="text-danger">200</span> , <br /> b={" "}
                <span className="text-danger">33</span>, <br />
                c= <span className="text-danger">500</span>
                if a {greater} b or a {greater}c: a:
                <br />
                print({" "}
                <span className="brown">
                  "At least one of the conditions is True"
                </span>{" "}
                )
              </p>
              <Link to="/c"><button className="btn btn-primary text-warning">
                Try it Yourself
              </button></Link> 
            </div>{" "}
            <br /> <hr />
            <h4>Not</h4>
            <p>
              The <span>not</span> keyword is a logical operator, and is used to
              reverse the result of the conditional statement:
            </p>
            <br />
            <div id="tryit4" className="container">
              <h3>EXAMPLE</h3>
              <span>
                Test if <span className="text-danger">a</span>
                is NOT greater than <span className="text-danger">
                  b
                </span> :{" "}
              </span>
              <br /> <br />
              <p>
                a=
                <span className="text-danger">200</span> , <br /> b={" "}
                <span className="text-danger">33</span>, <br />
                c= <span className="text-danger">500</span>
                if not a {greater} b:
                <br />
                print( <span className="brown">
                  "a is NOT greater than b"
                </span>{" "}
                )
              </p>
              <Link to="/c"><button className="btn btn-primary text-warning">
                Try it Yourself
              </button></Link> 
            </div>
            <br /> <hr />
            <h4>Nested If</h4> <br />
            <p>
              You can have <span className="text-danger">if</span>
              statements inside <span className="text-danger">if</span>
              statements, this is called nested{" "}
              <span className="text-danger">if</span> statements.
            </p>
            <br />
            <div id="tryit4" className="container">
              <h3>EXAMPLE</h3>
              <span>
                Test if <span className="text-danger">a</span>
                is NOT greater than <span className="text-danger">
                  b
                </span> :{" "}
              </span>
              <br /> <br />
              <p>
                x=
                <span className="text-danger">41</span> , <br /> if x {greater}{" "}
                <span className="text-danger">10</span>: <br />
                print( <span className="brown">"Above ten,"</span> ) if x{" "}
                {greater}
                <span className="text-danger">20</span>: <br />
                print( <span className="brown">"and also above 20!"</span> )
                else: <br />
                print( <span className="brown">"but not above 20."</span> )
              </p>
              <Link to="/c"><button className="btn btn-primary text-warning">
                Try it Yourself
              </button></Link> 
            </div>{" "}
            <br />
            <hr />
            <h4>The pass Statement</h4>
            <br />
            <p>
              {" "}
              <span className="text-danger">if</span> statements cannot be
              empty, but if you for some reason have an
              <span className="text-danger">if</span>statement with no content,
              put in the <span className="text-danger">pass</span> statement to
              avoid getting an error.
            </p>
            <br />
            <div id="tryit4" className="container">
              <h3>EXAMPLE</h3>
              <span>
                Test if <span className="text-danger">a</span>
                is NOT greater than <span className="text-danger">
                  b
                </span> :{" "}
              </span>
              <br /> <br />
              <p>
                a=
                <span className="text-danger">33</span> , <br /> b={" "}
                <span className="text-danger">200</span>: <br />
                if b {greater} a: <br />
                pass
              </p>
              <Link to="/c"><button className="btn btn-primary text-warning">
                Try it Yourself
              </button></Link> 
            </div>
            <br />
            <div className="container"> <Row>
            <Col>
          <Link to="/Dict"><button className="btn btn-primary" id="previous" > Previous</button></Link>  
            </Col>
            <Col>
           
           <Link to="/while"> <button className="btn btn-primary" id="Next" >Next</button></Link>
            </Col>
            
            </Row>    </div> 
          </div>
        </Col>
      </Row> <End/>
    </Fragment>
  );
};
