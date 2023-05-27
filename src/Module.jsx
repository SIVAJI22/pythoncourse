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
export const Module = () => {
  const dsmaller = <img id="Dsmaller" src="./double small.png" alt="" />;

  const smaller = <img id="Dsmaller" src="./smaller.png" alt="" />;
  const greater = <img id="Dgreater" src="./greater.jpg" alt="" />;
  const dgreater = <img id="Dgreater" src="./double greater.png" alt="" />;
  const self = <img id="self" src="./self.jpg" alt="" />;
  const openb= <img id="bracket1" src="./openbracket.png" alt="" />
  const closeb= <img  id="bracket" src="./closebracket.jpg" alt="" />
  return (
    <Fragment>
      <Nav />
      <Row>
        <Col>
          <SideNav />
        </Col>
        <Col>
          <div id="module" className="container">
            <h3>Python Modules</h3> <br />
            <div className="container">
              {" "}
              <Row>
                <Col>
                  <Link to="/scope">
                    <button className="btn btn-primary" id="previous">
                      {" "}
                      Previous
                    </button>
                  </Link>
                </Col>
                <Col>
                  <Link to="/Date">
                    {" "}
                    <button className="btn btn-primary" id="Next">
                      Next
                    </button>
                  </Link>
                </Col>
              </Row>{" "}
            </div>{" "}
            <hr /> <br />
            <h4>What is a Module?</h4>
            <p>Consider a module to be the same as a code library.</p>
            <p>
              A file containing a set of functions you want to include in your
              application.
            </p>
            <hr />
            <h4>Create a Module</h4>
            <p>
              To create a module just save the code you want in a file with the
              file extension
              <span className="text-danger">.py</span> :
            </p>
            <br />
            <div id="tryit4" className="container">
              <h3>EXAMPLE</h3>
              <span>
                Save this code in a file named{" "}
                <span className="text-danger"> mymodule.py</span>
              </span>
              <br /> <br />
              <p className="text-primary">
                def
                <span className="text-dark">greeting(name):</span> <br /> print{" "}
                <span className="text-dark">
                  {" "}
                  (<span className="brown"> "Hello", </span>+ name)
                </span>
              </p>
              <Link to="/c"><button className="btn btn-primary text-warning">
                Try it Yourself
              </button></Link> 
            </div>{" "}
            <hr />
            <br /> <h4>Use a Module</h4>
            <p>
              Now we can use the module we just created, by using the
              <span className="text-danger">import</span> statement:
            </p>
            <div id="tryit4" className="container">
              <h3>EXAMPLE</h3>
              <span>
                Import the module named mymodule, and call the greeting
                function:
              </span>
              <br /> <br />
              <p className="text-primary">
                import
                <span className="text-dark">mymodule</span> <br />{" "}
                <span className="text-dark">
                  mymodule.greeting(
                  <span className="brown"> "Jonathan" </span>)
                </span>
              </p>
              <Link to="/c"><button className="btn btn-primary text-warning">
                Try it Yourself
              </button></Link> 
            </div>{" "}
            <br />
            <h6 className="remember">
              <span className="fw-semibold">Note:</span>
              When using a function from a module, use the syntax:
              module_name.function_name.
            </h6>
            <hr /> <br />
            <h4>Variables in Module</h4>
            <p>
              The module can contain functions, as already described, but also
              variables of all types (arrays, dictionaries, objects etc):
            </p>
            <div id="tryit4" className="container">
              <h3>EXAMPLE</h3>
              <span>
                Save this code in the file{" "}
                <span className="text-danger"> mymodule.py</span>
              </span>
              <br /> <br />
              <p className="text-primary">
                <span className="text-dark">
                  person=  {openb} <br />
                    <span className="brown">
                      "name": "John", <br />
                      "age": <span className="text-danger">36</span> , <br />
                      "country": "Norway"
                    </span> <br />
                    {closeb}
                    </span>
               {" "}
                <br /> <span className="text-dark"></span>
              </p>
              <Link to="/c"><button className="btn btn-primary text-warning">
                Try it Yourself
              </button></Link> 
            </div>{" "}
            <br />
            <div id="tryit4" className="container">
              <h3>EXAMPLE</h3>
              <span>
                Import the module named mymodule, and access the person1
                dictionary:
              </span>
              <br /> <br />
              <p className="text-primary">
                import
                <span className="text-dark">
                  mymodule <br /> <br />a = mymodule.person1["
                  <span className="brown">"age"</span>] <br />
                  <span className="text-primary"> print</span>(a)
                </span>{" "}
                <br />
              </p>
              <Link to="/c"><button className="btn btn-primary text-warning">
                Try it Yourself
              </button></Link> 
            </div>{" "}
            <hr />
            <br />
            <h4>Naming a Module</h4>
            <p>
              You can name the module file whatever you like, but it must have
              the file extension
              <span className="text-danger">.py</span>
            </p>
            <h4>Re-naming a Module</h4>
            <p>
              You can create an alias when you import a module, by using the{" "}
              <span className="text-danger">as</span> keyword:
            </p>
            <br />
            <div id="tryit4" className="container">
              <h3>EXAMPLE</h3>
              <span>
                Create an alias for{" "}
                <span
                  className="text-danger"  >
                  mymodule
                </span>{" "}
                called{" "}
                <span
                  className="text-danger
              "
                >
                  {" "}
                  mx:
                </span>
              </span>
              <br /> <br />
              <p className="text-primary">
                import
                <span className="text-dark">
                  mymodule <span className="text-primary">as</span> mx <br />{" "}
                  <br />a = mx.person1["
                  <span className="brown">"age"</span>] <br />
                  <span className="text-primary"> print</span>(a)
                </span>{" "}
                <br />
              </p>
              <Link to="/c"><button className="btn btn-primary text-warning">
                Try it Yourself
              </button></Link> 
            </div>{" "}
            <hr /> <br />
            <h4>Built-in Modules</h4>
            <p>
              There are several built-in modules in Python, which you can import
              whenever you like.
            </p>
            <br />
            <div id="tryit4" className="container">
              <h3>EXAMPLE</h3>
              <span>
                Import and use the{" "}
                <span
                  className="text-danger
              "
                >
                  platform
                </span>{" "}
                module:
              </span>
              <br /> <br />
              <p className="text-primary">
                import
                <span className="text-dark">
                  platform <br /> <br /> x = platform.system()
                  <br />
                  <span className="text-primary"> print</span>(x)
                </span>{" "}
                <br />
              </p>
              <Link to="/c"><button className="btn btn-primary text-warning">
                Try it Yourself
              </button></Link> 
            </div>{" "}
            <hr /> <br />
            <h4>Using the dir() Function</h4>
            <p>
              There is a built-in function to list all the function names (or
              variable names) in a module. The{" "}
              <span className="text-danger"> dir()</span> function:
            </p>
            <br />
            <div id="tryit4" className="container">
              <h3>EXAMPLE</h3>
              <span>
                List all the defined names belonging to the platform module:
              </span>
              <br /> <br />
              <p className="text-primary">
                import
                <span className="text-dark">
                  platform <br /> <br /> x ={" "}
                  <span className="text-primary"> dir</span> (platform)
                  <br />
                  <span className="text-primary"> print</span>(x)
                </span>{" "}
                <br />
              </p>
              <Link to="/c"><button className="btn btn-primary text-warning">
                Try it Yourself
              </button></Link> 
            </div>{" "}
            <br />
            <h6 className="remember">
              <span className="fw-semibold">Note:</span>The dir() function can
              be used on all modules, also the ones you create yourself.
            </h6>
            <hr />
            <br />
            <h4>Import From Module</h4>
            <p>
              You can choose to import only parts from a module, by using the{" "}
              <span className="text-danger">from</span> keyword.
            </p>
            <br />
            <div id="tryit4" className="container">
              <h3>EXAMPLE</h3>
              <span>
                The module named <span className="text-danger">mymodule </span>{" "}
                has one function and one dictionary:
              </span>
              <br /> <br />
              <p className="text-primary">
                def
                <span className="text-dark">
                  greeting(name):
                  <br />  <span className="text-primary"> print</span>(
           
                  <span className="brown"> "Hello, "</span> + name){" "}
                </span>{" "}
                <br />
                <span className="text-dark">
                  person1 ={" "}
                  {openb} <br />
                    <span className="brown">
                      "name": "John", <br />
                      "age": <span className="text-danger">36</span> , <br />
                      "country": "Norway"
                    </span> <br />
                  {closeb}
                </span>{" "}
              </p>
              <Link to="/c"><button className="btn btn-primary text-warning">
                Try it Yourself
              </button></Link> 
            </div>{" "}
            <br />
            <div id="tryit4" className="container">
              <h3>EXAMPLE</h3>
              <span>Import only the person1 dictionary from the module:</span>
              <br /> <br />
              <p className="text-primary">
                from
                <span className="text-dark">
                  mymodule <span className="text-primary"> import </span>{" "}
                  person1
                </span>{" "}
                <br /> <br />
                print
                <span className="text-dark">
                  (person1[
                  <span className="brown">"age"</span> ])
                </span>{" "}
              </p>
              <Link to="/c"><button className="btn btn-primary text-warning">
                Try it Yourself
              </button></Link> 
            </div>{" "}
            <br />
            <h6 className="remember">
              <span className="fw-semibold">Note:</span> When importing using
              the <span className="text-danger">from</span>  keyword, do not use the module name when referring to
              elements in the module. Example:  <span className="text-danger">person1["age"]</span> ,
              <span className="fw-semibold"> not</span>
              <strike className="text-danger">    mymodule.person1["age"]</strike>
          
            </h6>
            <br />
            <div className="container">
              {" "}
              <Row>
                <Col>
                  <Link to="/scope">
                    <button className="btn btn-primary" id="previous">
                      {" "}
                      Previous
                    </button>
                  </Link>
                </Col>
                <Col>
                  <Link to="/Date">
                    {" "}
                    <button className="btn btn-primary" id="Next">
                      Next
                    </button>
                  </Link>
                </Col>
              </Row>{" "}
            </div>{" "}
          </div>
        </Col>
      </Row>
    </Fragment>
  );
};
