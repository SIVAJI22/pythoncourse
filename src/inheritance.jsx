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
export const Inheritance = () => {
  const dsmaller = <img id="Dsmaller" src="./double small.png" alt="" />;

  const smaller = <img id="Dsmaller" src="./smaller.png" alt="" />;
  const greater = <img id="Dgreater" src="./greater.jpg" alt="" />;
  const dgreater = <img id="Dgreater" src="./double greater.png" alt="" />;
  const self = <img id="self" src="./self.jpg" alt="" />;
  return (
    <Fragment>
      <Nav />
      <Row>
        <Col>
          <SideNav />
        </Col>
        <Col>
          <div id="inheritance" className="container">
            <h3>Python Inheritance</h3> <br />
            <div className="container">
              {" "}
              <Row>
                <Col>
                  <Link to="/class">
                    <button className="btn btn-primary" id="previous">
                      {" "}
                      Previous
                    </button>
                  </Link>
                </Col>
                <Col>
                  <Link to="/iterator">
                    {" "}
                    <button className="btn btn-primary" id="Next">
                      Next
                    </button>
                  </Link>
                </Col>
              </Row>{" "}
            </div>{" "}
            <hr />
            <br />
            <h4>Python Inheritance</h4>
            <p>
              Inheritance allows us to define a class that inherits all the
              methods and properties from another class.
            </p>
            <p>
              {" "}
              <span className="fw-semibold">Parent class</span> is the class
              being inherited from, also called base class.
            </p>
            <p>
              {" "}
              <span className="fw-semibold"> Child class</span> is the class
              that inherits from another class, also called derived class.
            </p>
            <hr />
            <br />
            <h4>Create a Parent Class</h4>
            <p>
              Any class can be a parent class, so the syntax is the same as
              creating any other class:
            </p>{" "}
            <br />
            <div id="tryit4" className="container">
              <h3>EXAMPLE</h3>
              <span>
                Create a class named <span className="text-danger">Person</span>{" "}
                , with <span className="text-danger">firstname</span> and{" "}
                <span className="text-danger"> lastname</span>
                properties, and a{" "}
                <span className="text-danger"> printname</span>
                method:
              </span>
              <br /> <br />
              <p className="text-primary">
                class <span className="text-dark"> Person:</span> <br />
                {""} def{" "}
                <span className="text-dark">
                  {" "}
                  __init__(self, fname, lname):
                </span>
                <br /> {""}
                {""} <span className="text-dark"> self.firstname = fname</span>{" "}
                <br />
                {""}
                {""} <span className="text-dark"> self.lastname = lname</span>{" "}
                <br /> <br />
                def <span className="text-dark"> printname(self):</span> <br />
                print(self.firstname, self.lastname)
               <br /> <br />  <span className="text-success">
                  #Use the Person class to create an object, and then execute
                  the printname method:
                </span>
                <br /> <br />
                <span className="text-dark">
                  x = Person( <span className="brown">"John", "Doe"</span>,{" "}
                  <span className="text-danger">36</span>)
                </span>{" "}
                <br />
                <span className="text-dark">x.printname(  )</span>
              </p>
              <Link to="/c"><button className="btn btn-primary text-warning">
                Try it Yourself
              </button></Link> 
            </div>{" "}
            <hr />
            <br />
            <h4>Create a Child Class</h4>
            <p>
              To create a class that inherits the functionality from another
              class, send the parent class as a parameter when creating the
              child class:
            </p>{" "}
            <br />
            <div id="tryit4" className="container">
              <h3>EXAMPLE</h3>
              <span>
                Create a class named{" "}
                <span className="text-danger">Student</span> , which will
                inherit the properties and methods from the{" "}
                <span className="text-danger">Person</span> class:
              </span>
              <br /> <br />
              <p className="text-primary">
                class<span className="text-dark">Student(Person):</span> <br />
                pass
              </p>
              <Link to="/c"><button className="btn btn-primary text-warning">
                Try it Yourself
              </button></Link> 
            </div>{" "}
            <br />
            <h6 className="remember">
              <span className="fw-semibold">Note:</span>
              Use the <span className="text-danger"> pass </span> keyword when
              you do not want to add any other properties or methods to the
              class.
            </h6>{" "}
            <br />
            <p>
              Now the Student class has the same properties and methods as the
              Person class.
            </p>
            <br />
            <div id="tryit4" className="container">
              <h3>EXAMPLE</h3>
              <span>
                Use the <span className="text-danger">Student</span>
                class to create an object, and then execute the{" "}
                <span className="text-danger"> printname</span>
                method:
              </span>
              <br /> <br />
              <p className="text-primary">
                <span className="text-dark">
                  x = Student( <span className="brown">"Mike", "Olsen"</span> )
                </span>{" "}
                <br />
                <span className="text-dark">x.printname(  )</span>
              </p>
              <Link to="/c"><button className="btn btn-primary text-warning">
                Try it Yourself
              </button></Link> 
            </div>{" "}
            <hr /> <br />
            <h4>Add the __init__(  ) Function</h4>
            <p>
              So far we have created a child class that inherits the properties
              and methods from its parent.
            </p>
            <p>
              We want to add the <span className="text-danger">__init__(  )</span>
              function to the child class (instead of the{" "}
              <span className="text-danger"> pass</span> keyword).
            </p>
            <br />
            <h6 className="remember">
              <span className="fw-semibold">Note:</span>
              The
              <span className="text-danger"> __init__(  ) </span>
              function is called automatically every time the class is being
              used to create a new object.
            </h6>{" "}
            <br />
            <div id="tryit4" className="container">
              <h3>EXAMPLE</h3>
              <span>
                Add the
                <span className="text-danger"> __init__(  ) </span> function to
                the
                <span className="text-danger">Student</span>
                class:
              </span>
              <br /> <br />
              <p className="text-primary">
                class
                <span className="text-dark">Student(Person): </span> <br />
                def{" "}
                <span className="text-dark">
                  __init__(self, fname, lname):
                </span>{" "}
                <br />
                <span className="text-success"> #add properties etc.</span>
              </p>
              <Link to="/c"><button className="btn btn-primary text-warning">
                Try it Yourself
              </button></Link> 
            </div>{" "}
            <br />
            <p>
              When you add the <span className="text-danger"> __init__(  ) </span>{" "}
              function, the child class will no longer inherit the parent's{" "}
              <span className="text-danger"> __init__(  ) </span>function.
            </p>
            <br />
            <h6 className="remember">
              <span className="fw-semibold">Note:</span>
              The child's <span className="text-danger"> __init__(  ) </span>
              function overrides the inheritance of the parent's{" "}
              <span className="text-danger"> __init__(  ) </span>function.
            </h6>{" "}
            <br />
            <p>
              To keep the inheritance of the parent's{" "}
              <span className="text-danger"> __init__(  ) </span>
              function, add a call to the parent's{" "}
              <span className="text-danger"> __init__(  ) </span>function:
            </p>
            <br />
            <div id="tryit4" className="container">
              <h3>EXAMPLE</h3>
              <span>
                Add the
                <span className="text-danger"> __init__(  ) </span> function to
                the
                <span className="text-danger">Student</span>
                class:
              </span>
              <br /> <br />
              <p className="text-primary">
                class
                <span className="text-dark">Student(Person): </span> <br />
                def{" "}
                <span className="text-dark">
                  __init__(self, fname, lname):
                </span>{" "}
                <br />
                <span className="text-dark">
                  {" "}
                  Person.__init__(self, fname, lname)
                </span>
              </p>
              <Link to="/c"><button className="btn btn-primary text-warning">
                Try it Yourself
              </button></Link> 
            </div>{" "}
            <br />
            <p>
              Now we have successfully added the __init__(  ) function, and kept
              the inheritance of the parent class, and we are ready to add
              functionality in the{" "}
              <span className="text-danger"> __init__(  ) </span> function.
            </p>{" "}
            <hr /> <br />
            <h4>Use the super(  ) Function</h4>
            <p>
              Python also has a <span className="text-danger">super(  )</span>
              function that will make the child class inherit all the methods
              and properties from its parent:
            </p>
            <br />
            <div id="tryit4" className="container">
              <h3>EXAMPLE</h3>
              <span>
                Add the
                <span className="text-danger"> __init__(  ) </span> function to
                the
                <span className="text-danger">Student</span>
                class:
              </span>
              <br /> <br />
              <p className="text-primary">
                class
                <span className="text-dark">Student(Person): </span> <br />
                def{" "}
                <span className="text-dark">
                  __init__(self, fname, lname):
                </span>{" "}
                <br />
                super
                <span className="text-dark"> (  ).__init__(fname, lname)</span>
                <br /> <span className="text-dark">
                  {" "}
                  self.graduationyear ={" "}
                  <span className="text-danger">2019</span>
                </span>
              </p>
              <Link to="/c"><button className="btn btn-primary text-warning">
                Try it Yourself
              </button></Link> 
            </div>{" "}
            <br />
            <p>
              In the example below, the year{" "}
              <span className="text-danger"> 2019</span>
              should be a variable, and passed into the{" "}
              <span className="text-danger"> Student</span>
              class when creating student objects. To do so, add another
              parameter in the __init__(  ) function:
            </p>
            <br />
            <div id="tryit4" className="container">
              <h3>EXAMPLE</h3>
              <span>
                Add a <span className="text-danger"> year </span> parameter, and
                pass the correct year when creating objects:
              </span>
              <br /> <br />
              <p className="text-primary">
                class
                <span className="text-dark">Student(Person): </span> <br />
                def{" "}
                <span className="text-dark">
                  {" "}
                  __init__(self, fname, lname, year):
                </span>{" "}
                <br />
                super
                <span className="text-dark"> (  ).__init__(fname, lname)</span>
             
             <br />    <span className="text-dark">
                  self.graduationyear = year{" "}
                </span>{" "}
                <br /> <br />

                <span className="text-dark">
                  x = Student( <span className="brown">"Mike", "Olsen",</span>{" "}
                  <span className="text-danger">2019</span>)
                </span>
              </p>
              <Link to="/c"><button className="btn btn-primary text-warning">
                Try it Yourself
              </button></Link> 
            </div>{" "}
            <hr />
            <br />
            <h4>Add Methods</h4>
            <br />
            <div id="tryit4" className="container">
              <h3>EXAMPLE</h3>
              <span>
                Add a method called{" "}
                <span className="text-danger"> welcome </span>
                to the <span className="text-danger"> Student </span>
                class:
              </span>
              <br /> <br />
              <p className="text-primary">
                class
                <span className="text-dark">Student(Person): </span> <br />
                def{" "}
                <span className="text-dark">
                  {" "}
                  __init__(self, fname, lname, year):
                </span>{" "}
                <br />
                super
                <span className="text-dark"> (   ).__init__(fname, lname)</span>
              
              
              <br />  <span className="text-dark">
                  self.graduationyear = year{" "}
                </span>{" "}
                <br /> <br />
                def
                <span className="text-dark">welcome(self): </span> <br />
                print
                <span className="text-dark">
                  ( <span className="brown">"Welcome"</span> , self.firstname,
                  self.lastname,{" "}
                  <span className="brown">"to the class of"</span> ,
                  self.graduationyear)
                </span>
              </p>
              <Link to="/c"><button className="btn btn-primary text-warning">
                Try it Yourself
              </button></Link> 
            </div>{" "} <br />
            <p>If you add a method in the child class with the same name as a function in the parent class, the inheritance of the parent method will be overridden.

</p> <br />
<div className="container">
              {" "}
              <Row>
                <Col>
                  <Link to="/class">
                    <button className="btn btn-primary" id="previous">
                      {" "}
                      Previous
                    </button>
                  </Link>
                </Col>
                <Col>
                  <Link to="/iterator">
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
