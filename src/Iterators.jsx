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
export const Iterator = () => {
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
          <div id="iterator" className="container">
            <h3>Python Iterators</h3> <br />
            <div className="container">
              {" "}
              <Row>
                <Col>
                  <Link to="/inheritance">
                    <button className="btn btn-primary" id="previous">
                      {" "}
                      Previous
                    </button>
                  </Link>
                </Col>
                <Col>
                  <Link to="/poly">
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
            <h4>Python Iterators</h4>
            <p>
              An iterator is an object that contains a countable number of
              values.
            </p>
            <p>
              An iterator is an object that can be iterated upon, meaning that
              you can traverse through all the values.
            </p>
            <p>
              Technically, in Python, an iterator is an object which implements
              the iterator protocol, which consist of the methods
              <span className="text-danger">__iter__() </span> and{" "}
              <span className="text-danger">__next__()</span> .
            </p>
            <hr /> <br />
            <h4>Iterator vs Iterable</h4>
            <p>
              Lists, tuples, dictionaries, and sets are all iterable objects.
              They are iterable containers which you can get an iterator from.
            </p>
            <p>
              All these objects have a{" "}
              <span className="text-danger"> iter() </span>method which is used
              to get an iterator:
            </p>
            <br />
            <div id="tryit4" className="container">
              <h3>EXAMPLE</h3>
              <span>
                Return an iterator from a tuple, and print each value:
              </span>
              <br /> <br />
              <p className="text-primary">
                <span className="text-dark">
                  {" "}
                  mytuple = (
                  <span className="brown">"apple", "banana", "cherry"</span>)
                </span>{" "}
                <br />
                <span className="text-dark">myit =</span> iter
                <span className="text-dark">(mytuple)</span>
                <br /> {""}
                <br />
                <span className="text-dark">
                  <span className="text-primary"> print</span>({" "}
                  <span className="text-primary">next</span>
                  (myit))
                </span>
                <br />
                <span className="text-dark">
                  <span className="text-primary"> print</span>({" "}
                  <span className="text-primary">next</span>
                  (myit))
                </span>
                <br />
                <span className="text-dark">
                  <span className="text-primary"> print</span>({" "}
                  <span className="text-primary">next</span>
                  (myit))
                </span>
                <br />
              </p>
              <Link to="/c"><button className="btn btn-primary text-warning">
                Try it Yourself
              </button></Link> 
            </div>{" "}
            <br />
            <p>
              Even strings are iterable objects, and can return an iterator:
            </p>
            <br />
            <div id="tryit4" className="container">
              <h3>EXAMPLE</h3>
              <span>
                Strings are also iterable objects, containing a sequence of
                characters:
              </span>
              <br /> <br />
              <p className="text-primary">
                <span className="text-dark">
                  {" "}
                  mystr = (<span className="brown">"banana"</span>)
                </span>{" "}
                <br />
                <span className="text-dark">myit =</span> iter
                <span className="text-dark">(mystr)</span>
                <br /> {""}
                <br />
                <span className="text-dark">
                  <span className="text-primary"> print</span>({" "}
                  <span className="text-primary">next</span>
                  (myit ))
                </span>
                <br />
                <span className="text-dark">
                  <span className="text-primary"> print</span>({" "}
                  <span className="text-primary">next</span>
                  (myit ))
                </span>
                <br />
                <span className="text-dark">
                  <span className="text-primary"> print</span>({" "}
                  <span className="text-primary">next</span>
                  (myit ))
                </span>
                <br />
                <span className="text-dark">
                  <span className="text-primary"> print</span>({" "}
                  <span className="text-primary">next</span>
                  (myit ))
                </span>
                <br />
                <span className="text-dark">
                  <span className="text-primary"> print</span>({" "}
                  <span className="text-primary">next</span>
                  (myit ))
                </span>
                <br />
                <span className="text-dark">
                  <span className="text-primary"> print</span>({" "}
                  <span className="text-primary">next</span>
                  (myit ))
                </span>
              </p>
              <Link to="/c"><button className="btn btn-primary text-warning">
                Try it Yourself
              </button></Link> 
            </div>{" "}
            <br />
            <hr />
            <h4>Looping Through an Iterator</h4>
            <p>
              We can also use a <span className="text-danger">for</span> loop to
              iterate through an iterable object:
            </p>
            <br />
            <div id="tryit4" className="container">
              <h3>EXAMPLE</h3>
              <span>Iterate the values of a tuple:</span>
              <br /> <br />
              <p className="text-primary">
                <span className="text-dark">
                  {" "}
                  mytuple = (
                  <span className="brown">"apple", "banana", "cherry"</span>)
                </span>{" "}
                <br />
                for x in
                <span className="text-dark">
                  {""} {""} mytuple:
                </span>{" "}
                <br />
                print
                <span className="text-dark">(x)</span>
                <br /> {""}
                <br />
              </p>
              <Link to="/c"><button className="btn btn-primary text-warning">
                Try it Yourself
              </button></Link> 
            </div>{" "}
            <br />
            <div id="tryit4" className="container">
              <h3>EXAMPLE</h3>
              <span>Iterate the values of a tuple:</span>
              <br /> <br />
              <p className="text-primary">
                <span className="text-dark">
                  mystr = (<span className="brown">"banana"</span>)
                </span>{" "}
                <br />
                for x in
                {""}
                <span className="text-dark">
                  {""}
                  {""} mystr:
                </span>{" "}
                <br />
                print
                <span className="text-dark">(x)</span>
                <br /> {""}
                <br />
              </p>
              <Link to="/c"><button className="btn btn-primary text-warning">
                Try it Yourself
              </button></Link> 
            </div>{" "}
            <br />
            <p>
              The <span className="text-danger"> for</span> loop actually
              creates an iterator object and executes the next() method for each
              loop.
            </p>
            <br />
            <hr /> <br />
            <h4>Create an Iterator</h4> <br />
            <p>
              To create an object/class as an iterator you have to implement the
              methods <span className="text-danger"> __iter__()</span> and
              <span className="text-danger">__next__()</span> to your object.
            </p>
            <br />
            <p>
              As you have learned in the
              <a href="/class"> Python Classes/Objects</a> chapter, all classes
              have a function called{" "}
              <span className="text-danger">__init__(),</span>
              which allows you to do some initializing when the object is being
              created.
            </p>
            <br />
            <p>
              The <span className="text-danger">__iter__() </span> method acts
              similar, you can do operations (initializing etc.), but must
              always return the iterator object itself.
            </p>
            <p>
              The <span className="text-danger"> __next__() </span>
              method also allows you to do operations, and must return the next
              item in the sequence.
            </p>
            <br />
            <div id="tryit4" className="container">
              <h3>EXAMPLE</h3>
              <span>
                Create an iterator that returns numbers, starting with 1, and
                each sequence will increase by one (returning 1,2,3,4,5 etc.):
              </span>
              <br /> <br />
              <p className="text-primary">
              class  <span className="text-dark">
                  {" "}
                  MyNumbers:
                </span>{" "}
                <br />
                def
                <span className="text-dark">__iter__(self):</span> <br />
                <span className="text-dark">   self.a =</span> <span className="text-danger">1</span>
                <br /> {""} return <span className="text-dark">self</span>
                <br /> <br /> def  <span className="text-dark">__next__(self): <br />
                x = self.a <br />   self.a +=  <span className="text-danger">1</span>
                
                </span>
<br />
                return <span className="text-dark">x</span>

                <br />
                <br />
                <span className="text-dark">
myclass = MyNumbers() <br />
myiter =  <span className="text-primary">iter</span> (myclass)

</span> <br /> <br />
                <span className="text-dark">
                  <span className="text-primary"> print</span>({" "}
                  <span className="text-primary">next</span>
                  (myiter))
                </span>
                <br />
                <span className="text-dark">
                  <span className="text-primary"> print</span>({" "}
                  <span className="text-primary">next</span>
                  (myiter))
                </span>
                <br />
                <span className="text-dark">
                  <span className="text-primary"> print</span>({" "}
                  <span className="text-primary">next</span>
                  (myiter))
                </span>
                <br />
                <span className="text-dark">
                  <span className="text-primary"> print</span>({" "}
                  <span className="text-primary">next</span>
                  (myiter))
                </span>
                <br />
                <span className="text-dark">
                  <span className="text-primary"> print</span>({" "}
                  <span className="text-primary">next</span>
                  (myiter))
                </span>
                <br />

              </p>
              <Link to="/c"><button className="btn btn-primary text-warning">
                Try it Yourself
              </button></Link> 
            </div>{" "}
            <br /> <hr />
            <br />
            <h4>StopIteration</h4>
            <p>The example above would continue forever if you had enough next()
               statements, or if it was used in a  <span className="text-danger">
               for   </span>  loop.</p>
        
        <p>To prevent the iteration from going on forever, we can use the 
        <span className="text-danger">
        StopIteration  </span> statement.</p>
        <p>In the         <span className="text-danger">
        __next__(  ) </span>  method, we can add a terminating condition to raise an error if the iteration is done a specified number of times:

</p>
<br />

<div id="tryit4" className="container">
              <h3>EXAMPLE</h3>
              <span>
              Stop after 20 iterations:
              </span>
              <br /> <br />
              <p className="text-primary">
              class  <span className="text-dark">
                  {" "}
                  MyNumbers:
                </span>{" "}
                <br />
                def
                <span className="text-dark">__iter__(self):</span> <br />
                <span className="text-dark">   self.a =</span> <span className="text-danger">1</span>
                <br /> {""} return <span className="text-dark">self</span>
                <br /> <br /> def  <span className="text-dark">__next__(self): <br /> {""} {""}
                <span className="primary">if</span> self.a {smaller}=  
               <span className="text-danger">20</span>
                <br />
               x = self.a <br />
                self.a += <span className="text-danger">1</span>
                </span>
<br />
                return <span className="text-dark">x</span>
<br />
else: <br />
raise  <span className="text-dark">StopIteration</span>
                <br />
                <br />
                <span className="text-dark">
myclass = MyNumbers() <br />
myiter =  <span className="text-primary">iter</span> (myclass)

</span>
<br /> <br />
for x in 
                <span className="text-dark"> myiter:
                
                </span>
<br />  print
                <span className="text-dark">(x)</span>

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
                  <Link to="/inheritance">
                    <button className="btn btn-primary" id="previous">
                      {" "}
                      Previous
                    </button>
                  </Link>
                </Col>
                <Col>
                  <Link to="/poly">
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
