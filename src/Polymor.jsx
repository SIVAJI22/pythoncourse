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
export const Poly = () => {
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
          <div id="poly" className="container">
            <h3>Python Polymorphism</h3> <br />
            <div className="container">
              {" "}
              <Row>
                <Col>
                  <Link to="/iterator">
                    <button className="btn btn-primary" id="previous">
                      {" "}
                      Previous
                    </button>
                  </Link>
                </Col>
                <Col>
                  <Link to="/scope">
                    {" "}
                    <button className="btn btn-primary" id="Next">
                      Next
                    </button>
                  </Link>
                </Col>
              </Row>{" "}
            </div>{" "}
            <hr />
            <p>
              The word "polymorphism" means "many forms", and in programming it
              refers to methods/functions/operators with the same name that can
              be executed on many objects or classes.
            </p>
            <hr />
            <h4>Function Polymorphism</h4>
            <p>
              An example of a Python function that can be used on different
              objects is the
              <span className="text-danger"> len( ) </span> function.
            </p>
            <br />
            <h4>String</h4>
            <p>
              For strings <span className="text-danger"> len( ) </span> returns
              the number of characters:
            </p>
            <br />
            <div id="tryit4" className="container">
              <h3>EXAMPLE</h3>
              <br /> <br />
              <p className="text-primary">
                <span className="text-dark">
                  x = <span className="brown"> "Hello World!"</span>
                </span>{" "}
                <br />
                <br />
                <span className="text-dark">
                  <span className="text-primary">print</span>(
                  <span className="text-primary">len</span>
                  (x))
                </span>{" "}
              </p>
              <Link to="/c">   <button className="btn btn-primary text-warning">
                Try it Yourself
              </button></Link>
            </div>{" "}
            <br />
            <h4>Tuple</h4>
            <br />
            <p>
              For tuples <span className="text-danger">len( ) </span> returns
              the number of items in the tuple:
            </p>
            <br />
            <div id="tryit4" className="container">
              <h3>EXAMPLE</h3>
              <br /> <br />
              <p className="text-primary">
                <span className="text-dark">
                  {" "}
                  mytuple = (
                  <span className="brown">"apple", "banana", "cherry"</span>)
                </span>{" "}
                <br />
                <span className="text-dark">
                  <span className="text-primary">print</span>(
                  <span className="text-primary">len</span>
                  (mytuple))
                </span>{" "}
              </p>
              <Link to="/c">   <button className="btn btn-primary text-warning">
                Try it Yourself
              </button></Link>
            </div>{" "}
            <br />
            <h4>Dictionary</h4>
            <p>
              For dictionaries <span className="text-danger">len( ) </span>
              returns the number of key/value pairs in the dictionary:
            </p>
            <div id="tryit4" className="container">
              <h3>EXAMPLE</h3>
              <br />
              <br />
              <p>
                thisdict =[ <br />
                <span className="brown">"brand" :"Ford"</span> , <br />{" "}
                <span className="brown">"Model": "Mustang"</span>, <br />{" "}
                <span className="brown">"Year"</span>
                <span className="text-danger">1994</span> <br />
                ] <br />
                <span className="text-dark">
                  <span className="text-primary">print</span>(
                  <span className="text-primary">len</span>
                  (thisdict))
                </span>{" "}
              </p>
              <Link to="/c">   <button className="btn btn-primary text-warning">
                Try it Yourself
              </button></Link>
            </div>
            <br /> <hr />
            <h4>Class Polymorphism</h4>
            <br />
            <p>
              Polymorphism is often used in Class methods, where we can have
              multiple classes with the same method name.
            </p>
            <p>
              For example, say we have three classes:{" "}
              <span className="text-danger">Car</span> ,
              <span className="text-danger"> Boat</span>, and{" "}
              <span className="text-danger"> Plane</span> , and they all have a
              method called <span className="text-danger">move( )</span> :
            </p>{" "}
            <br />
            <div id="tryit4" className="container">
              <h3>EXAMPLE</h3>
              <span>Different classes with the same method:</span>
              <br /> <br />
              <p className="text-primary">
                class <span className="text-dark">Car:</span> <br />
                def
                <span className="text-dark">
                  __init__(self, brand, model):
                </span>{" "}
                <br />
                <span className="text-dark"> self.brand = brand</span> <br />
                <span className="text-dark"> self.model = model</span>
                <br /> <br /> def{" "}
                <span className="text-dark">
                  move(self):
                  <br /> {""} {""}
                  <span className="primary"> print</span>({" "}
                  <span className="brown">"Drive!"</span> ){" "}
                </span>{" "}
                <br /> <br />
                class
                <span className="text-dark"> Boat:</span> <br />
                def{" "}
                <span className="text-dark">
                  __init__(self, brand, model):
                </span>{" "}
                <br />
                <span className="text-dark"> self.brand = brand</span> <br />
                <span className="text-dark"> self.model = model</span>
                <br />
                <br />
                def{" "}
                <span className="text-dark">
                  {" "}
                  move(self):
                  <br />
                  <span className="text-primary">print</span>(
                  <span className="brown">"Fly!"</span>)
                </span>
                <br /> <br />
                <span className="text-dark">
                  car1 = Car (
                  <span className="text-brown">"Ford", "Mustang"</span>){" "}
                </span>{" "}
                <span className="text-success">#Create a Car class</span>
                <br />
                <span className="text-dark">
                  boat1 = Boat (
                  <span className="text-brown">"Ibiza", "Touring 20"</span>){" "}
                </span>{" "}
                <span className="text-success">#Create a Boat class</span>
                <br />
                <span className="text-dark">
                  plane1 = Plane (
                  <span className="text-brown">"Boeing", "747" </span>){" "}
                </span>{" "}
                <span className="text-success">#Create a Plane class</span>
                <br />
                <br />
                for x in
                <span className="text-dark">
                  (car1, boat1, plane1):
                  <br />
                  x.move( )
                </span>
              </p>
              <Link to="/c">   <button className="btn btn-primary text-warning">
                Try it Yourself
              </button></Link>
            </div>{" "}
            <br />
            <p>
              Look at the for loop at the end. Because of polymorphism we can
              execute the same method for all three classes.
            </p>
            <br />
            <hr />
            <h4>Inheritance Class Polymorphism</h4>
            <p>
              What about classes with child classes with the same name? Can we
              use polymorphism there?
            </p>
            <p>
              Yes. If we use the example above and make a parent class called{" "}
              <span className="text-danger"> Vehicle</span> , and make
              <span className="text-danger">Car</span> ,
              <span className="text-danger"> Boat</span>, and{" "}
              <span className="text-danger"> Plane</span> child classes of
              <span className="text-danger"> Vehicle</span> , the child classes
              inherits the <span className="text-danger"> Vehicle</span>{" "}
              methods, but can override them:
            </p>
            <br />
            <div id="tryit4" className="container">
              <h3>EXAMPLE</h3>
              <span>
                Create a class called{" "}
                <span className="text-danger"> Vehicle</span> and make{" "}
                <span className="text-danger">Car</span> ,
                <span className="text-danger"> Boat</span>, and{" "}
                <span className="text-danger"> Plane</span>child classes of{" "}
                <span className="text-danger"> Vehicle</span>:
              </span>
              <br /> <br />
              <p className="text-primary">
                class <span className="text-dark">Vehicle:</span> <br />
                def
                <span className="text-dark">
                  __init__(self, brand, model):
                </span>{" "}
                <br />
                <span className="text-dark"> self.brand = brand</span> <br />
                <span className="text-dark"> self.model = model</span>
                <br /> <br /> def{" "}
                <span className="text-dark">
                  move(self):
                  <br /> {""} {""}
                  <span className="primary"> print</span>({" "}
                  <span className="brown">"Move!"</span> ){" "}
                </span>{" "}
                <br /> <br />
                class
                <span className="text-dark"> Car(Vehicle)</span> <br />
                pass
                <br /> <br />
                class
                <span className="text-dark">Boat(Vehicle):</span> <br />
                def{" "}
                <span className="text-dark">
                  move(self):
                  <br /> {""} {""}
                  <span className="primary"> print</span>({" "}
                  <span className="brown">"Sail!"</span> ){" "}
                </span>{" "}
                <br /> <br />
                class
                <span className="text-dark">Plane(Vehicle):</span> <br />
                def{" "}
                <span className="text-dark">
                  move(self):
                  <br /> {""} {""}
                  <span className="primary"> print</span>({" "}
                  <span className="brown">"Fly!"</span> )
                </span>
                <br /> <br />
                <span className="text-dark">
                  car1 = Car (
                  <span className="text-brown">"Ford", "Mustang"</span>){" "}
                </span>{" "}
                <span className="text-success">#Create a Car class</span>
                <br />
                <span className="text-dark">
                  boat1 = Boat (
                  <span className="text-brown">"Ibiza", "Touring 20"</span>){" "}
                </span>{" "}
                <span className="text-success">#Create a Boat class</span>
                <br />
                <span className="text-dark">
                  plane1 = Plane (
                  <span className="text-brown">"Boeing", "747" </span>){" "}
                </span>{" "}
                <span className="text-success">#Create a Plane class</span>
                <br />
                <br />
                for x in
                <span className="text-dark">(car1, boat1, plane1):</span> <br />
                print <span className="text-dark">(x.brand)</span> <br />
                print{" "}
                <span className="text-dark">
                  (x.model)
                  <br /> x.move( )
                </span>
              </p>
              <Link to="/c">   <button className="btn btn-primary text-warning">
                Try it Yourself
              </button></Link>
            </div>{" "}
            <br />
            <p>
              Child classes inherits the properties and methods from the parent
              class.
            </p>
            <p>
              In the example above you can see that the  <span className="text-danger"> Car</span> class i empty, but
              it inherits  <span className="text-danger">brand</span> ,  <span className="text-danger"> model</span>, and 
               <span className="text-danger">move( ) </span> from   <span className="text-danger">Vehicle</span>.
            </p>{" "}
            <p>The <span className="text-danger">Boat</span>  and  <span className="text-danger">  Plane</span>
            classes also inherit  <span className="text-danger">brand</span> ,  <span className="text-danger">model</span>
               , and <span className="text-danger"> move( )</span> from <span className="text-danger">  Vehicle</span>
             , but they both override the  <span className="text-danger">move( ) </span> method.</p>
        
        
        <p>Because of polymorphism we can execute the same method for all classes.</p> 
        
        <br />
        <div className="container">
              {" "}
              <Row>
                <Col>
                  <Link to="/iterator">
                    <button className="btn btn-primary" id="previous">
                      {" "}
                      Previous
                    </button>
                  </Link>
                </Col>
                <Col>
                  <Link to="/scope">
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
