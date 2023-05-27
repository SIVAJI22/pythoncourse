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
export const Class = () => {
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
        


      <div id="class" className="container">
        <h3>Python Classes and Objects</h3>
        <br />
        <div className="container">
          {" "}
          <Row>
            <Col>
              <Link to="/array">
                <button className="btn btn-primary" id="previous">
                  {" "}
                  Previous
                </button>
              </Link>
            </Col>
            <Col>
              <Link to="/inheritance">
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
        <h4>Python Classes/Objects</h4>
        <p>Python is an object oriented programming language.</p>
        <p>
          Almost everything in Python is an object, with its properties and
          methods.
        </p>
        <p>
          A Class is like an object constructor, or a "blueprint" for creating
          objects.
        </p>
        <hr />
        <br />
        <h4>Create a Class</h4>
        <p>
          To create a class, use the keyword{" "}
          <span className="text-danger"> class</span>:
        </p>
        <br />
        <div id="tryit4" className="container">
          <h3>EXAMPLE</h3>
          <span>Create a class named MyClass, with a property named x:</span>
          <br /> <br />
          <p className="text-primary">
            class <span className="text-dark"> MyClass:</span> <br />
            <span className="text-dark">x=</span>{" "}
            <span className="text-danger">5</span>
          </p>
          <Link to="/c"><button className="btn btn-primary text-warning">
                Try it Yourself
              </button></Link> 
        </div>{" "}
        <hr />
        <br />
        <h4>Create Object</h4>
        <p>Now we can use the class named MyClass to create objects:</p>
        <div id="tryit4" className="container">
          <h3>EXAMPLE</h3>
          <span>Create an object named p1, and print the value of x:</span>
          <br /> <br />
          <p className="text-primary">
            <span className="text-dark"> p1 = MyClass()</span> <br />
            print <span className="text-dark">(p1.x)</span>
          </p>
          <Link to="/c"><button className="btn btn-primary text-warning">
                Try it Yourself
              </button></Link> 
        </div>{" "}
        <hr />
        <br />
        <h4>The __init__() Function</h4>
        <p>
          The examples above are classes and objects in their simplest form, and
          are not really useful in real life applications.
        </p>
        <p>
          To understand the meaning of classes we have to understand the
          built-in __init__() function.
        </p>
        <p>
          All classes have a function called __init__(), which is always
          executed when the class is being initiated.
        </p>
        <p>
          Use the __init__() function to assign values to object properties, or
          other operations that are necessary to do when the object is being
          created:
        </p>
        <br />
        <div id="tryit4" className="container">
          <h3>EXAMPLE</h3>
          <span>
            Create a class named Person, use the __init__() function to assign
            values for name and age:
          </span>
          <br /> <br />
          <p className="text-primary">
            class <span className="text-dark"> Person:</span> <br />
            {""} def{" "}
            <span className="text-dark">__init__(self, name, age):</span>
            <br /> {""}
            {""} <span className="text-dark">self.name = name</span> <br />
            {""}
            {""} <span className="text-dark">_self.age = age</span> <br />{" "}
            <br />
            <span className="text-dark">
              p1 = Person( <span className="brown">"John"</span>,{" "}
              <span className="text-danger">36</span>)
            </span>{" "}
            <br /> <br />
            print
            <span className="text-dark">(p1.name)</span>
            print
            <span className="text-dark">(p1.age)</span>
          </p>
          <Link to="/c"><button className="btn btn-primary text-warning">
                Try it Yourself
              </button></Link> 
        </div>{" "}
        <br />
        <h6 className="remember">
          <span className="fw-semibold">Note:</span>
          The <span className="text-danger">__init__() </span> function is
          called automatically every time the class is being used to create a
          new object.
        </h6>
        <hr />
        <br />
        <h4>The __str__() Function</h4>
        <p>
          The __str__() function controls what should be returned when the class
          object is represented as a string.
        </p>
        <p>
          If the __str__() function is not set, the string representation of the
          object is returned:
        </p>
        <br />
        <div id="tryit4" className="container">
          <h3>EXAMPLE</h3>
          <span>
            The string representation of an object WITHOUT the __str__()
            function:
          </span>
          <br /> <br />
          <p className="text-primary">
            class <span className="text-dark"> Person:</span> <br />
            {""} def{" "}
            <span className="text-dark">__init__(self, name, age):</span>
            <br /> {""}
            {""} <span className="text-dark">self.name = name</span> <br />
            {""}
            {""} <span className="text-dark">_self.age = age</span> <br />{" "}
            <br />
            <span className="text-dark">
              p1 = Person( <span className="brown">"John"</span>,{" "}
              <span className="text-danger">36</span>)
            </span>{" "}
            <br /> <br />
            print
            <span className="text-dark">(p1)</span>
          </p>
          <Link to="/c"><button className="btn btn-primary text-warning">
                Try it Yourself
              </button></Link> 
        </div>{" "}
        <br />
        <div id="tryit4" className="container">
          <h3>EXAMPLE</h3>
          <span>
            The string representation of an object WITH the __str__() function:
          </span>
          <br /> <br />
          <p className="text-primary">
            class <span className="text-dark"> Person:</span> <br />
            {""} def{" "}
            <span className="text-dark">__init__(self, name, age):</span>
            <br /> {""}
            {""} <span className="text-dark">self.name = name</span> <br />
            {""}
            {""} <span className="text-dark">_self.age = age</span> <br />{" "}
            <br />
            def <span className="text-dark">__str__(self):</span> <br />
            {""} return{" "}
            <span className="text-dark">
              f <span className="brown">{self}</span>
            </span>
            <br />
            <span className="text-dark">
              p1 = Person( <span className="brown">"John"</span>,{" "}
              <span className="text-danger">36</span>)
            </span>{" "}
            <br /> <br />
            print
            <span className="text-dark">(p1)</span>
          </p>
          <Link to="/c"><button className="btn btn-primary text-warning">
                Try it Yourself
              </button></Link> 
        </div>{" "}
        <hr /> <br />
        <h4>Object Methods</h4>
        <p>
          Objects can also contain methods. Methods in objects are functions
          that belong to the object.
        </p>
        <p>Let us create a method in the Person class:</p>
        <div id="tryit4" className="container">
          <h3>EXAMPLE</h3>
          <span>
            Insert a function that prints a greeting, and execute it on the p1
            object:
          </span>
          <br /> <br />
          <p className="text-primary">
            class <span className="text-dark"> Person:</span> <br />
            {""} def{" "}
            <span className="text-dark">__init__(self, name, age):</span>
            <br /> {""}
            {""} <span className="text-dark">self.name = name</span> <br />
            {""}
            {""} <span className="text-dark">_self.age = age</span> <br />{" "}
            <br />
            def <span className="text-dark">myfunc(self):</span> <br />
            print{" "}
            <span className="text-dark">
              ( <span className="brown">"Hello my name is "</span>+ self.name){" "}
            </span>
            <br /> <br />
            <span className="text-dark">
              p1 = Person( <span className="brown">"John"</span>,{" "}
              <span className="text-danger">36</span>)
            </span>{" "}
            <br />
            <span className="text-dark">p1.myfunc()</span>
          </p>
          <Link to="/c"><button className="btn btn-primary text-warning">
                Try it Yourself
              </button></Link> 
        </div>{" "}
        <br />
        <h6 className="remember">
          <span className="fw-semibold">Note:</span>
          The <span className="text-danger">self </span> parameter is a
          reference to the current instance of the class, and is used to access
          variables that belong to the class.
        </h6>{" "}
        <hr /> <br />
        <h4>The self Parameter</h4>
        <p>
          The <span className="text-danger">self </span> parameter is a
          reference to the current instance of the class, and is used to access
          variables that belongs to the class.
        </p>
        <p>
          It does not have to be named{" "}
          <span className="text-danger">self </span>, you can call it whatever
          you like, but it has to be the first parameter of any function in the
          class:
        </p>
        <br />
        <div id="tryit4" className="container">
          <h3>EXAMPLE</h3>
          <span>Use the words mysillyobject and abc instead of self:</span>
          <br /> <br />
          <p className="text-primary">
            class <span className="text-dark"> Person:</span> <br />
            {""} def{" "}
            <span className="text-dark">
              __init__(mysillyobject, name, age):
            </span>
            <br /> {""}
            {""} <span className="text-dark"> mysillyobject.name = name</span>{" "}
            <br />
            {""}
            {""} <span className="text-dark">mysillyobject.age = age</span>{" "}
            <br /> <br />
            def <span className="text-dark">myfunc(abc):</span> <br />
            print{" "}
            <span className="text-dark">
              ( <span className="brown">"Hello my name is "</span>+ abc.name){" "}
            </span>
            <br /> <br />
            <span className="text-dark">
              p1 = Person( <span className="brown">"John"</span>,{" "}
              <span className="text-danger">36</span>)
            </span>{" "}
            <br />
            <span className="text-dark">p1.myfunc()</span>
          </p>
          <Link to="/c"><button className="btn btn-primary text-warning">
                Try it Yourself
              </button></Link> 
        </div>{" "}
        <hr /> <br />
        <h4>Modify Object Properties</h4>
        <p>You can modify properties on objects like this:</p>
        <br />
        <div id="tryit4" className="container">
          <h3>EXAMPLE</h3>
          <span>Set the age of p1 to 40:</span>
          <br /> <br />
          <p className="text-primary">
            <span className="text-dark">
              p1.age = <span className="text-danger">40</span>{" "}
            </span>
          </p>
          <Link to="/c"><button className="btn btn-primary text-warning">
                Try it Yourself
              </button></Link> 
        </div>{" "}
        <hr />
        <br />
        <h4>Delete Object Properties</h4>
        <p>
          You can delete properties on objects by using the{" "}
          <span className="text-danger">del</span> keyword
        </p>{" "}
        <br />
        <div id="tryit4" className="container">
          <h3>EXAMPLE</h3>
          <span>Delete the age property from the p1 object</span>
          <br /> <br />
          <p className="text-primary">
            del<span className="text-dark">p1.age</span>
          </p>
          <Link to="/c"><button className="btn btn-primary text-warning">
                Try it Yourself
              </button></Link> 
        </div>{" "}
        <hr />
        <br />
        <h4>Delete Objects</h4>
        <p>You can delete objects by using the del keyword:</p>
        <br />
        <div id="tryit4" className="container">
          <h3>EXAMPLE</h3>
          <span>Delete the p1 object::</span>
          <br /> <br />
          <p className="text-primary">
            del<span className="text-dark">p1</span>
          </p>
          <Link to="/c"><button className="btn btn-primary text-warning">
                Try it Yourself
              </button></Link> 
        </div>{" "}
        <hr /> <br />
        <h4>The pass Statement</h4>
        <p>
          {" "}
          <span className="text-danger">class</span> definitions cannot be
          empty, but if you for some reason have a
          <span className="text-danger">class</span> definition with no content,
          put in the <span className="text-danger">pass</span> statement to
          avoid getting an error.
        </p>
        <br />
        <div id="tryit4" className="container">
          <h3>EXAMPLE</h3>
          <span>Delete the p1 object::</span>
          <br /> <br />
          <p className="text-primary">
            class<span className="text-dark">Person:</span> <br />
            pass
          </p>
          <Link to="/c"><button className="btn btn-primary text-warning">
                Try it Yourself
              </button></Link> 
        </div>{" "}
        <br />
        <div className="container">
          {" "}
          <Row>
            <Col>
              <Link to="/array">
                <button className="btn btn-primary" id="previous">
                  {" "}
                  Previous
                </button>
              </Link>
            </Col>
            <Col>
              <Link to="/inheritance">
                {" "}
                <button className="btn btn-primary" id="Next">
                  Next
                </button>
              </Link>
              </Col>
          </Row>
</div>
     
  
      </div>
              
      </Col>
      </Row>
   

      <End/>
    </Fragment>
  );
};
