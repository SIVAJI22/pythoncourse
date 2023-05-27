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
export const Array = () => {
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
          <div id="array" className="container">
            <h3>Python Arrays</h3> <br />
            <div className="container">
              {" "}
              <Row>
                <Col>
                  <Link to="/lambda">
                    <button className="btn btn-primary" id="previous">
                      {" "}
                      Previous
                    </button>
                  </Link>
                </Col>
                <Col>
                  <Link to="/class">
                    {" "}
                    <button className="btn btn-primary" id="Next">
                      Next
                    </button>
                  </Link>
                </Col>
              </Row>{" "}
            </div>
            <hr />
            <br />
            <h6 className="remember">
              <span className="fw-semibold">Note:</span>
              Python does not have built-in support for Arrays, but Python Lists
              can be used instead.
            </h6>{" "}
            <hr />
            <h4>Arrays</h4> <br />
            <h6 className="remember">
              <span className="fw-semibold">Note:</span>This page shows you how
              to use LISTS as ARRAYS, however, to work with arrays in Python you
              will have to import a library, like the
              <a href=""> NumPy library.</a>
            </h6>
            <br />{" "}
            <p>
              Arrays are used to store multiple values in one single variable:
            </p>
            <br />
            <div id="tryit4" className="container">
              <h3>EXAMPLE</h3>
              <span>Create an array containing car names:</span>
              <br /> <br />
              <p className="text-primary">
                car= [ <span className="brown">"Ford", "Volvo", "BMW"</span>]{" "}
              </p>
             <Link to="/c"><button className="btn btn-primary text-warning">
                Try it Yourself
              </button></Link>   
            </div>{" "}
            <hr />
            <br />
            <h4>What is an Array?</h4>
            <p>
              An array is a special variable, which can hold more than one value
              at a time.
            </p>
            <p>
              If you have a list of items (a list of car names, for example),
              storing the cars in single variables could look like this:
            </p>
            <div id="lambda1" className="container">
              <span className="text-dark">car1 =</span>{" "}
              <span className="brown">"Ford"</span> <br />
              <span className="text-dark">car2 =</span>{" "}
              <span className="brown">"Volvo"</span> <br />
              <span className="text-dark">car3 =</span>{" "}
              <span className="brown">"BMW"</span>
            </div>
            <br />
            <p>
              However, what if you want to loop through the cars and find a
              specific one? And what if you had not 3 cars, but 300?
            </p>
            <p>The solution is an array!</p>
            <p>
              An array can hold many values under a single name, and you can
              access the values by referring to an index number.
            </p>
            <hr />
            <br /> <h4>Access the Elements of an Array</h4>
            <p>
              You refer to an array element by referring to the index number.
            </p>
            <br />
            <div id="tryit4" className="container">
              <h3>EXAMPLE</h3>
              <span>Get the value of the first array item:</span>
              <br /> <br />
              <p className="text-primary">
                <span className="text-dark">
                  x= cars[ <span className="text-danger">0</span>]
                </span>{" "}
              </p>
              <Link to="/c"><button className="btn btn-primary text-warning">
                Try it Yourself
              </button></Link> 
            </div>{" "}
            <br />
            <div id="tryit4" className="container">
              <h3>EXAMPLE</h3>
              <span>Modify the value of the first array item</span>
              <br /> <br />
              <p className="text-primary">
                <span className="text-dark">
                  cars[ <span className="text-danger">0</span>]={" "}
                  <span className="brown">"Toyota"</span>
                </span>{" "}
              </p>
              <Link to="/c"><button className="btn btn-primary text-warning">
                Try it Yourself
              </button></Link> 
            </div>{" "}
            <hr />
            <br />
            <h4>The Length of an Array</h4>
            <p>
              Use the <span className="text-danger">len()</span> method to
              return the length of an array (the number of elements in an
              array).
            </p>
            <br />
            <div id="tryit4" className="container">
              <h3>EXAMPLE</h3>
              <span>
                Return the number of elements in the{" "}
                <span className="text-danger">cars</span> array:
              </span>
              <br /> <br />
              <p className="text-primary">
                <span className="text-dark">
                  x= <span className="text-primary">len</span>(cars)
                </span>{" "}
              </p>
              <Link to="/c"><button className="btn btn-primary text-warning">
                Try it Yourself
              </button></Link> 
            </div>{" "}
            <br />
            <h6 className="remember">
              <span className="fw-semibold">Note:</span>The length of an array
              is always one more than the highest array index.
            </h6>{" "}
            <hr />
            <br />
            <h4>Looping Array Elements</h4>
            <p>
              You can use the <span className="text-danger"> for in</span> loop
              to loop through all the elements of an array.
            </p>
            <br />
            <div id="tryit4" className="container">
              <h3>EXAMPLE</h3>
              <span>
                Print each item in the <span className="text-danger">cars</span>{" "}
                array:
              </span>
              <br /> <br />
              <p className="text-primary">
                for{" "}
                <span className="text-dark">
                  x <span className="text-primary">in</span>cars:
                </span>{" "}
                <br />
                print(x)
              </p>
              <Link to="/c"><button className="btn btn-primary text-warning">
                Try it Yourself
              </button></Link> 
            </div>{" "}
            <hr /> <br />
            <h4>Adding Array Elements </h4>
            <p>
              You can use the <span className="text-danger">append()</span>{" "}
              method to add an element to an array.
            </p>
            <br />
            <div id="tryit4" className="container">
              <h3>EXAMPLE</h3>
              <span>
                Add one more element to the{" "}
                <span className="text-danger">cars</span> array:
              </span>
              <br /> <br />
              <p className="text-primary">
                <span className="text-dark">
                  cars.append(<span className="brown">"Honda"</span>)
                </span>{" "}
              </p>
              <Link to="/c"><button className="btn btn-primary text-warning">
                Try it Yourself
              </button></Link> 
            </div>{" "}
            <hr /> <br />
            <h4>Removing Array Elements</h4>
            <p>
              you can use the <span className="text-danger">pop() </span> method
              to remove an element from the array.
            </p>
            <br />
            <div id="tryit4" className="container">
              <h3>EXAMPLE</h3>
              <span>
                Delete the second element of the{" "}
                <span className="text-danger">cars</span> array:
              </span>
              <br /> <br />
              <p className="text-primary">
                <span className="text-dark">
                  cars.pop(<span className="text-danger">1</span>)
                </span>{" "}
              </p>
              <Link to="/c"><button className="btn btn-primary text-warning">
                Try it Yourself
              </button></Link> 
            </div>{" "}
            <br />
            <p>
              You can also use the{" "}
              <span className="text-danger"> remove()</span> method to remove an
              element from the array.
            </p>
            <br />
            <div id="tryit4" className="container">
              <h3>EXAMPLE</h3>
              <span>Delete the element that has the value "Volvo":</span>
              <br /> <br />
              <p className="text-primary">
                <span className="text-dark">
                  ccars.remove(<span className="brown">"Volvo"</span>)
                </span>{" "}
              </p>
              <Link to="/c"><button className="btn btn-primary text-warning">
                Try it Yourself
              </button></Link> 
            </div>{" "}
            <br />
            <h6 className="remember">
              <span className="fw-semibold">Note:</span>The list's
              <span className="text-danger">remove()</span>
              method only removes the first occurrence of the specified value.
            </h6>
            <hr />
            <br />
            <h4>Array Methods </h4>
            <p>
              Python has a set of built-in methods that you can use on
              lists/arrays.
            </p>
            <br />
            <div id="arraymethods" className="container">
              <div id="helowhite">
                <Row>
                  <Col sm={3}>
                    <h4>Method</h4>
                  </Col>
                  <Col sm={9}>
                    <h4>Description</h4>
                  </Col>
                </Row>
              </div>

              <div id="helogrey">
                <Row>
                  <Col sm={3}>
                    <a href="">append()</a>
                  </Col>
                  <Col sm={9}>
                    <p>Adds an element at the end of the list</p>
                  </Col>
                </Row>
              </div>

              <div id="helowhite">
                <Row>
                  <Col sm={3}>
                    <a href="">clear()</a>
                  </Col>
                  <Col sm={9}>
                    <p>Removes all the elements from the list</p>
                  </Col>
                </Row>
              </div>

              <div id="helogrey">
                <Row>
                  <Col sm={3}>
                    <a href="">copy()</a>
                  </Col>
                  <Col sm={9}>
                    <p> Returns a copy of the list</p>
                  </Col>
                </Row>
              </div>

              <div id="helowhite">
                <Row>
                  <Col sm={3}>
                    <a href="">count()</a>
                  </Col>
                  <Col sm={9}>
                    <p>
                      {" "}
                      Returns the number of elements with the specified value
                    </p>
                  </Col>
                </Row>
              </div>

              <div id="helogrey">
                <Row>
                  <Col sm={3}>
                    <a href="">extend()</a>
                  </Col>
                  <Col sm={9}>
                    <p>
                      Add the elements of a list (or any iterable), to the end
                      of the current list
                    </p>
                  </Col>
                </Row>
              </div>

              <div id="helowhite">
                <Row>
                  <Col sm={3}>
                    <a href="">index()</a>
                  </Col>
                  <Col sm={9}>
                    <p>
                      {" "}
                      Returns the index of the first element with the specified
                      value
                    </p>
                  </Col>
                </Row>
              </div>

              <div id="helogrey">
                <Row>
                  <Col sm={3}>
                    <a href="">insert()</a>
                  </Col>
                  <Col sm={9}>
                    <p> Adds an element at the specified position</p>
                  </Col>
                </Row>
              </div>

              <div id="helowhite">
                <Row>
                  <Col sm={3}>
                    <a href="">pop()</a>
                  </Col>
                  <Col sm={9}>
                    <p> Removes the element at the specified position</p>
                  </Col>
                </Row>
              </div>

              <div id="helogrey">
                <Row>
                  <Col sm={3}>
                    <a href="">remove()</a>
                  </Col>
                  <Col sm={9}>
                    <p> Removes the first item with the specified value</p>
                  </Col>
                </Row>
              </div>

              <div id="helowhite">
                <Row>
                  <Col sm={3}>
                    <a href="">reverse()</a>
                  </Col>
                  <Col sm={9}>
                    <p>Reverses the order of the list</p>
                  </Col>
                </Row>
              </div>

              <div id="helogrey">
                <Row>
                  <Col sm={3}>
                    <a href="">sort()</a>
                  </Col>
                  <Col sm={9}>
                    <p> Sorts the list</p>
                  </Col>
                </Row>
              </div>
            </div> <br />
            <h6 className="remember">
              <span className="fw-semibold">Note:</span>
              Python does not have built-in support for Arrays, but Python Lists
              can be used instead.
            </h6> <br />
            <div className="container">
              {" "}
              <Row>
                <Col>
                  <Link to="/lambda">
                    <button className="btn btn-primary" id="previous">
                      {" "}
                      Previous
                    </button>
                  </Link>
                </Col>
                <Col>
                  <Link to="/class">
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
    </Fragment>
  );
};
