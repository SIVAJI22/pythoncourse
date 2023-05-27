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
export const Function = () => {
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
          <div id="function" className="container">
            <h4>Python Functions</h4> <hr />
            <div className="container">
              {" "}
              <Row>
                <Col>
                  <Link to="/for">
                    <button className="btn btn-primary" id="previous">
                      {" "}
                      Previous
                    </button>
                  </Link>
                </Col>
                <Col>
                  <Link to="/lambda">
                    {" "}
                    <button className="btn btn-primary" id="Next">
                      Next
                    </button>
                  </Link>
                </Col>
              </Row>{" "}
            </div>
            <br />
            <p>
              A function is a block of code which only runs when it is called.
            </p>
            <br />
            <p>You can pass data, known as parameters, into a function.</p>
            <br />
            <p>A function can return data as a result.</p>
            <hr />
            <br />
            <h5>Creating a Function</h5> <br />
            <p>
              In Python a function is defined using the{" "}
              <span className="text-danger">def </span> keyword:
            </p>
            <br />
            <div id="tryit4" className="container">
              <h3>EXAMPLE</h3>
              <br />
              <br />
              <p className="text-primary">
                def my_function(): <br />
                print ( <span className="brown">
                  "Hello from a function"
                </span>){" "}
              </p>
              <Link to="/c">
                <button className="btn btn-primary text-warning">
                  Try it Yourself
                </button>
              </Link>
            </div>{" "}
            *
            <br />
            <hr />
            <h4>Calling a Function</h4>
            <br />
            <p>
              To call a function, use the function name followed by parenthesis:
            </p>
            <br />
            <div id="tryit4" className="container">
              <h3>EXAMPLE</h3>
              <br />
              <br />
              <p className="text-primary">
                def my_function(): <br />
                print ( <span className="brown">"Hello from a function"</span>)
                <br /> <br />
                <span className="text-dark">my_function()</span>
              </p>
              <Link to="/c">
                <button className="btn btn-primary text-warning">
                  Try it Yourself
                </button>
              </Link>
            </div>
            <hr />
            <br />
            <h5>Arguments</h5>
            <br /> <p>Information can be passed into functions as arguments.</p>
            <br />
            <p>
              Arguments are specified after the function name, inside the
              parentheses. You can add as many arguments as you want, just
              separate them with a comma.
            </p>
            <br />
            <p>
              The following example has a function with one argument (fname).
              When the function is called, we pass along a first name, which is
              used inside the function to print the full name:
            </p>
            <br />
            <div id="tryit4" className="container">
              <h3>EXAMPLE</h3>
              <br />
              <br />
              <p className="text-primary">
                def my_function(fname):
                <br />
                print ( <span className="text-dark">fname +</span>{" "}
                <span className="brown">" Refsnes"</span>) <br /> <br />
                <span className="text-dark">
                  my_function( <span className="brown">"Emil" </span> )
                </span>{" "}
                <br />
                <span className="text-dark">
                  my_function( <span className="brown">"Tobias" </span> )
                </span>{" "}
                <br />
                <span className="text-dark">
                  my_function( <span className="brown">"Linus") </span> )
                </span>
              </p>
              <Link to="/c">
                <button className="btn btn-primary text-warning">
                  Try it Yourself
                </button>
              </Link>
            </div>{" "}
            <br />
            <h6 className="remember">
              Arguments are often shortened to args in Python documentations.
            </h6>
            <hr /> <br />
            <h5>Parameters or Arguments?</h5>
            <br />
            <p>
              The terms parameter and argument can be used for the same thing:
              information that are passed into a function.
            </p>{" "}
            <br />
            <h6 className="remember">
              From a function's perspective: <br />
              A parameter is the variable listed inside the parentheses in the
              function definition. <br />
              An argument is the value that is sent to the function when it is
              called.
            </h6>
            <hr /> <br />
            <h4>Number of Arguments</h4> <br />
            <p>
              By default, a function must be called with the correct number of
              arguments. Meaning that if your function expects 2 arguments, you
              have to call the function with 2 arguments, not more, and not
              less.
            </p>{" "}
            <br />
            <div id="tryit4" className="container">
              <h3>EXAMPLE</h3>
              <span>
                This function expects 2 arguments, and gets 2 arguments:
              </span>{" "}
              <br />
              <br />
              <p className="text-primary">
                def
                <span className="text-dark">
                  {" "}
                  my_function ( fname , lname{" "}
                </span>{" "}
                )
                <br />
                {""} print <span className="text-dark">(fname +""+ lname)</span>{" "}
                <br />
                <br />{" "}
                <span className="text-dark">
                  my_function ({" "}
                  <span className="brown">"Emil" , "Refsnes" </span> )
                </span>{" "}
              </p>
              <Link to="/c">
                <button className="btn btn-primary text-warning">
                  Try it Yourself
                </button>
              </Link>
            </div>{" "}
            <br />
            <p>
              If you try to call the function with 1 or 3 arguments, you will
              get an error:
            </p>
            <br />
            <div id="tryitpinky" className="container">
              <h3>EXAMPLE</h3>
              <span>This function expects 2 arguments, but gets only 1:</span>
              <br /> <br />
              <p className="text-primary">
                def my_function(fname):
                <br />
                print{" "}
                <span className="text-dark">
                  (fname +<span className="brown">""</span>+ lname)
                </span>{" "}
                )
                <br /> <br />
                <span className="text-dark">
                  my_function ( <span className="brown">"Emil" </span> )
                </span>{" "}
              </p>
              <Link to="/c">
                <button className="btn btn-primary text-warning">
                  Try it Yourself
                </button>
              </Link>
            </div>{" "}
            <hr />
            <br />
            <h4>Arbitrary Arguments, *args</h4> <br />
            <p>
              If you do not know how many arguments that will be passed into
              your function, add a <span className="text-danger">*</span> before
              the parameter name in the function definition.
            </p>
            <br />
            <p>
              This way the function will receive a tuple of arguments, and can
              access the items accordingly:
            </p>
            <br />
            <div id="tryit4" className="container">
              <h3>EXAMPLE</h3>
              <span>
                If the number of arguments is unknown, add a{" "}
                <span className="text-danger">*</span> before the parameter
                name:
              </span>{" "}
              <br />
              <br />
              <p className="text-primary">
                def
                <span className="text-dark"> my_function(*kids):</span>
                <br />
                print{" "}
                <span className="text-dark">
                  (<span className="brown">"The youngest child is " </span> +
                  kids[<span className="text-danger">2</span>
                  ])
                </span>{" "}
                <br /> <br />
                <span className="text-dark">
                  my_function ({" "}
                  <span className="brown">"Emil" ,"Tobias", "Linus" </span> )
                </span>{" "}
              </p>
              <Link to="/c">
                <button className="btn btn-primary text-warning">
                  Try it Yourself
                </button>
              </Link>
            </div>{" "}
            <br />
            <h6 className="remember">
              Arbitrary Arguments are often shortened to *args in Python
              documentations.
            </h6>{" "}
            <hr />
            <h4>Keyword Arguments</h4> <br />
            <p>You can also send arguments with the key = value syntax.</p>
            <p>This way the order of the arguments does not matter.</p> <br />
            <div id="tryit4" className="container">
              <h3>EXAMPLE</h3>
              <br /> <br />
              <p className="text-primary">
                def{" "}
                <span className="text-dark">
                  my_function(child3, child2, child1):
                </span>{" "}
                <br />
                print{" "}
                <span className="text-dark">
                  (<span className="brown">"The youngest child is " </span>
                  <span className="text-dark">+ child3</span>)
                </span>{" "}
                <br /> <br />
                <span className="text-dark">
                  my_function(child1 = <span className="brown">"Emil"</span> ,
                  child2 = <span className="brown">"Tobias"</span> , child3 =
                  <span className="brown"> "Linus"</span> ):
                </span>{" "}
                <br />
              </p>
              <Link to="/c">
                <button className="btn btn-primary text-warning">
                  Try it Yourself
                </button>
              </Link>
            </div>{" "}
            <br />
            <h6 className="remember">
              The phrase Keyword Arguments are often shortened to kwargs in
              Python documentations.
            </h6>
            <hr />
            <h4>Arbitrary Keyword Arguments, **kwargs</h4>
            <br />{" "}
            <p>
              If you do not know how many keyword arguments that will be passed
              into your function, add two asterisk:{" "}
              <span className="text-danger"> **</span> before the parameter name
              in the function definition.
            </p>
            <p>
              This way the function will receive a dictionary of arguments, and
              can access the items accordingly:
            </p>{" "}
            <br />
            <div id="tryit4" className="container">
              <h3>EXAMPLE</h3>
              <span>
                If the number of keyword arguments is unknown, add a double
                <span className="text-danger">**</span> before the parameter
                name:
              </span>
              <br /> <br />
              <p className="text-primary">
                def <span className="text-dark">my_function(*kids):</span>
                <br />
                print{" "}
                <span className="text-dark">
                  (<span className="brown">"His last name is " </span> + kid[
                  <span className="brown">"lname"</span>
                  ])
                </span>{" "}
                <br /> <br />
                <span className="text-dark">
                  my_function(fname =
                  <span className="brown">
                    "Tobias", <span className="text-dark">lname =</span>
                    "Refsnes"{" "}
                  </span>{" "}
                  )
                </span>{" "}
              </p>
              <Link to="/c">
                <button className="btn btn-primary text-warning">
                  Try it Yourself
                </button>
              </Link>
            </div>{" "}
            <br />
            <h6 className="remember">
              Arbitrary Kword Arguments are often shortened to **kwargs in
              Python documentations.
            </h6>{" "}
            <hr /> <br />
            <h4>Default Parameter Value</h4> <br />
            <p>
              The following example shows how to use a default parameter value.
            </p>{" "}
            <p>
              If we call the function without argument, it uses the default
              value:
            </p>
            <br />
            <div id="tryit4" className="container">
              <h3>EXAMPLE</h3>
              <br /> <br />
              <p className="text-primary">
                <span className="text-dark">
                  {" "}
                  def my_function( <span className="fw-bold">
                    country
                  </span> = <span className="brown fw-bold">"Norway"</span> ):
                </span>
                <br />
                print{" "}
                <span className="text-dark">
                  (<span className="brown">"I am from " </span>+ country)
                </span>{" "}
                <br /> <br />
                <span className="text-dark">
                  my_function (<span className="brown">"Sweden" </span>)
                </span>{" "}
                <br />
                <span className="text-dark">
                  my_function (<span className="brown">"India"</span>)
                </span>{" "}
                <br />
                <span className="text-dark">my_function ( ) </span> <br />
                <span className="text-dark">
                  my_function (<span className="brown">"Brazil"</span>)
                </span>{" "}
              </p>
              <Link to="/c">
                <button className="btn btn-primary text-warning">
                  Try it Yourself
                </button>
              </Link>
            </div>{" "}
            <hr />
            <h4>Passing a List as an Argument</h4>
            <br />
            <p>
              You can send any data types of argument to a function (string,
              number, list, dictionary etc.), and it will be treated as the same
              data type inside the function.
            </p>{" "}
            <p>
              E.g. if you send a List as an argument, it will still be a List
              when it reaches the function:
            </p>{" "}
            <br />
            <div id="tryit4" className="container">
              <h3>EXAMPLE</h3>
              <br />
              <br />
              <p className="text-primary">
                <span className="text-dark">def my_function(food):</span> <br />
                for x in food: <br />
                print(x)
                <br /> <br />
                fruits = [ <span className="brown">"apple"</span> ,{" "}
                <span className="brown">"banana"</span>,{" "}
                <span className="brown">"cherry"</span>] <br />
                <br /> <span className="text-dark">my_function(fruits)</span>
              </p>
              <Link to="/c">
                <button className="btn btn-primary text-warning">
                  Try it Yourself
                </button>
              </Link>
            </div>
            <hr />
            <h4>Return Values</h4>
            <p>
              To let a function return a value, use the{" "}
              <span className="text-danger">return </span> statement:
            </p>
            <br />
            <div id="tryit4" className="container">
              <h3>EXAMPLE</h3>
              <br />
              <br />
              <p className="text-primary">
                def <span className="text-dark">my_function(x):</span> <br />
                return <span className="text-danger">5</span>
                <span className="text-dark">* x</span>
                <br />
                <br /> print{" "}
                <span className="text-dark">
                  ( my_function (<span className="text-danger">3 </span>))
                </span>{" "}
                <br />
                print{" "}
                <span className="text-dark">
                  ( my_function (<span className="text-danger">5</span>))
                </span>{" "}
                <br />
                print{" "}
                <span className="text-dark">
                  ( my_function (<span className="text-danger">9</span>))
                </span>{" "}
                <br />
              </p>
              <Link to="/c">
                <button className="btn btn-primary text-warning">
                  Try it Yourself
                </button>
              </Link>
            </div>
            <hr />
            <h4>The pass Statement</h4>
            <p>
              {" "}
              <span className="text-danger">function</span> function definitions
              cannot be empty, but if you for some reason have a
              <span className="text-danger">function</span>
              definition with no content, put in the{" "}
              <span className="text-danger">pass</span> statement to avoid
              getting an error.
            </p>{" "}
            <br />
            <div id="tryit4" className="container">
              <h3>EXAMPLE</h3>
              <br />
              <br />
              <p className="text-primary">
                def <span className="text-dark">my_function():</span> <br />
                pass
              </p>
              <Link to="/c">
                <button className="btn btn-primary text-warning">
                  Try it Yourself
                </button>
              </Link>
            </div>{" "}
            <hr />
            <br />
            <h4>Recursion</h4> <br />
            <p>
              Python also accepts function recursion, which means a defined
              function can call itself.
            </p>
            <p>
              Recursion is a common mathematical and programming concept. It
              means that a function calls itself. This has the benefit of
              meaning that you can loop through data to reach a result.
            </p>
            <p>
              The developer should be very careful with recursion as it can be
              quite easy to slip into writing a function which never terminates,
              or one that uses excess amounts of memory or processor power.
              However, when written correctly recursion can be a very efficient
              and mathematically-elegant approach to programming.
            </p>{" "}
            <p>
              In this example,{" "}
              <span className="text-danger">tri_recursion()</span> is a function
              that we have defined to call itself ("recurse"). We use the{" "}
              <span className="text-danger">K</span> variable as the data, which
              decrements ( <span className="text-danger">-1</span> ) every time
              we recurse. The recursion ends when the condition is not greater
              than 0 (i.e. when it is 0).
            </p>
            <p>
              To a new developer it can take some time to work out how exactly
              this works, best way to find out is by testing and modifying it.
            </p>
            <br />
            <div id="tryit4" className="container">
              <h3>EXAMPLE</h3>
              <span>Recursion Example</span>
              <br /> <br />
              <p className="text-primary">
                <span className="text-dark">def tri_recursion(k):</span> <br />
                if{" "}
                <span className="text-dark">
                  (k {greater} <span className="text-danger">0</span> ):
                </span>{" "}
                <br />
                <span className="text-dark">
                  {" "}
                  result = k + tri_recursion(k -{" "}
                  <span className="text-danger">1</span>) <br />
                  {""} print(result){" "}
                </span>
                <br /> else:
                <span className="text-dark">
                  result = <span className="text-danger">0</span> ):
                </span>
                <br /> return <span className="text-dark">result</span>
                <br />
                <br />{" "}
                <span className="text-dark">
                  print (
                  <span className="brown">
                    "\n\nRecursion Example Results"{" "}
                  </span>
                  )
                  <br />
                  tri_recursion ( <span className="text-danger">6</span> ){" "}
                </span>{" "}
                <br />
              </p>
              <Link to="/c">
                <button className="btn btn-primary text-warning">
                  Try it Yourself
                </button>
              </Link>
            </div>
            <br />
            <div className="container">
              {" "}
              <Row>
                <Col>
                  <Link to="/for">
                    <button className="btn btn-primary" id="previous">
                      {" "}
                      Previous
                    </button>
                  </Link>
                </Col>
                <Col>
                  <Link to="/lambda">
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
