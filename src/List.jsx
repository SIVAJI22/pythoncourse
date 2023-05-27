import React, { Fragment } from "react";
import Nav from "./Nav";
import SideNav from "./sidenav";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
import Col from "react-bootstrap/Col";
import "./pythonH.css";
import End from "./end";
// class Operator extends React.Component {
export const List = () => {
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
          <div id="List" className="container">
            <h3>Python Lists</h3> <br />
            <div className="container"> <Row>
            <Col>
          <Link to="/opera  "><button className="btn btn-primary" id="previous" > Previous</button></Link>  
            </Col>
            <Col>
           
           <Link to="/Tuple"> <button className="btn btn-primary" id="Next" >Next</button></Link>
            </Col>
            
            </Row>    </div>
            <br />
            <div id="mylist" className="container">
              <p>
                mylist = [ <span className="brown">"apple"</span> ,{" "}
                <span className="brown">"banana"</span>,{" "}
                <span className="brown">"cherry"</span>]
              </p>
            </div>
            <br />
            <h5>List</h5>
            <p>
              Lists are used to store multiple items in a single variable.
            </p>{" "}
            <br />
            <p>
              Lists are one of 4 built-in data types in Python used to store
              collections of data, the other 3 are <Link to="/tuple">  
              <a href="">Tuple</a></Link> ,
               <Link to="/Sets"> <a href=""> Set</a>,</Link>
              and <a href=""> Dictionary</a>, all with different qualities and
              usage.
            </p>
            <br />
            <p> Lists are created using square brackets:</p>
            <br />
            <div id="tryit4" className="container">
              <h3>EXAMPLE</h3>
              <br />
              <span>Create a List:</span> <br />
              <p className="text-primary">
                thislist = [ <span className="brown">"apple"</span> ,{" "}
                <span className="brown">"banana"</span>,{" "}
                <span className="brown">"cherry"</span>] print(thislist)
              </p>
              <Link to="/c"><button className="btn btn-primary text-warning">
                Try it Yourself
              </button></Link> 
            </div>
            <br />
            <hr />
            <h5>List Items</h5> <br />
            <p>
              List items are ordered, changeable, and allow duplicate values.
            </p>
            <br />
            <p>
              List items are indexed, the first item has index{" "}
              <span className="text-danger"> [0]</span>, the second item has
              index <span className="text-danger"> [1]</span> etc.
            </p>
            <br /> <hr /> <br />
            <h5>Ordered</h5>
            <br />
            <p>
              When we say that lists are ordered, it means that the items have a
              defined order, and that order will not change.
            </p>
            <br />
            <p>
              If you add new items to a list, the new items will be placed at
              the end of the list.
            </p>
            <br />
            <h6 className="remember">
              {" "}
              <span className="fw-bold">Note: </span> There are some
           {''}   <a href="">list methods</a> that will change the order, but in
              general: the order of the items will not change.
            </h6>
            <hr />
            <h4>Changeable</h4>
            <p>
              The list is changeable, meaning that we can change, add, and
              remove items in a list after it has been created.
            </p>
            <hr />
            <h4>Allow Duplicates</h4> <br />
            <p>
              Since lists are indexed, lists can have items with the same value:
            </p>
            <br />
            <div id="tryit4" className="container">
              <h3>EXAMPLE</h3>
              
              <span>Lists allow duplicate values:</span> <br />
              <br />
              <p className="text-primary">
                thislist = [ <span className="brown">"apple"</span> ,{" "}
                <span className="brown">"banana"</span>,{" "}
                <span className="brown">"cherry"</span>,
                <span className="brown">"apple"</span>,
                <span className="brown">"cherry"</span>]  <br />
                 print(thislist)
              </p>
              <Link to="/c"><button className="btn btn-primary text-warning">
                Try it Yourself
              </button></Link> 
            </div>
            <br />
            <hr /> <br />
            <h4>List Length</h4> <br />
            <p>To determine how many items a list has, use the 
                <span className="text-danger"> len()</span> 
            function:</p>
 <br />
 <div id="tryit4" className="container">
              <h3>EXAMPLE</h3>
              
              <span>Print the number of items in the list:</span> <br />
              <br />
              <p className="text-primary">
                thislist = [ <span className="brown">"apple"</span> ,{" "}
                <span className="brown">"banana"</span>,{" "}
                <span className="brown">"cherry"</span>,
              ]  <br />
                 print(len(thislist))
              </p>
              <Link to="/c"><button className="btn btn-primary text-warning">
                Try it Yourself
              </button></Link> 
            </div>





            <hr /> 
            <h5>List Items - Data Types</h5>
            <br />
            <p>List items can be of any data type: </p>
            <br />
            <div id="tryit4" className="container">
              <h3>EXAMPLE</h3>
              
              <span>String, int and boolean data types:</span> <br /> <br />
              <p className="text-primary">
                list1 = [ <span className="brown">"apple"</span> ,{" "}
                <span className="brown">"banana"</span>,{" "}
                <span className="brown">"cherry"</span>,]
                <br />
                list2 = [ <span className="text-danger">1</span>,
                <span className="text-danger">5</span>,
                <span className="text-danger">7</span>,
                <span className="text-danger">9</span>,
                <span className="text-danger">3</span>
                ]
                <br />
                list3 = [True, False, False]
              </p>
              <Link to="/c"><button className="btn btn-primary text-warning">
                Try it Yourself
              </button></Link> 
            </div>
            <br />
            <p>A list can contain different data types:</p>
            <br />
            <div id="tryit4" className="container">
              <h3>EXAMPLE</h3>
          
              <span>
                A list with strings, integers and boolean values:
              </span>{" "}
              <br /> <br />
              <p className="text-primary">
                list1 = [ <span className="brown">"abc"</span> ,
                <span className="text-danger">34</span>,True
                <span className="text-danger">40</span>,
        <span className="brown">"male"</span>, ]
              </p>
              <Link to="/c"><button className="btn btn-primary text-warning">
                Try it Yourself
              </button></Link> 
            </div>
            <br />
            <hr />
            
            <h5>type()</h5>
            <p>
              From Python's perspective, lists are defined as objects with the
              data type 'list':
            </p>
            <br />
            <div id="mylist" className="container">
              {smaller}class 'list'{greater}
            </div>
            <br />
            <div id="tryit4" className="container">
              <h3>EXAMPLE</h3>
          
              <span>What is the data type of a list?</span>  <br /><br />
              <p className="text-primary">
                mylist = [ <span className="brown">"apple"</span> ,{" "}
                <span className="brown">"banana"</span>,{" "}
                <span className="brown">"cherry"</span>,]
                <br />
                print(type(mylist))
              </p>
              <Link to="/c"><button className="btn btn-primary text-warning">
                Try it Yourself
              </button></Link> 
            </div>
            <br />
            <hr />
            
            <h4>The list() Constructor</h4> <br />
            <p>
              It is also possible to use the{" "}
              <span className="text-danger">list()</span> constructor when
              creating a new list.
            </p>
            <br />
            <div id="tryit4" className="container">
              <h3>EXAMPLE</h3>
              
              <span>
                Using <span className="text-danger">the list()</span>{" "}
                constructor to make a List:
              </span>{" "}
              <br /> <br />
              <p className="text-primary">
                thislist = list (( <span className="brown">"apple"</span> ,{" "}
                <span className="brown">"banana"</span>,{" "}
                <span className="brown">"cherry"</span>,))
                <span className="text-success">
                  # note the double round-brackets
                </span>
                <br />
                print(thislist)
              </p>
              <Link to="/c"><button className="btn btn-primary text-warning">
                Try it Yourself
              </button></Link> 
            </div>
            <br />
            <hr />
            
            <h4>Python Collections (Arrays)</h4> <br />
            <p>
              There are four collection data types in the Python programming
              language:
            </p>
            <br />
            <ul>
              <li>
                {" "}
                <span className="fw-bold">List</span> is a collection which is
                ordered and changeable. Allows duplicate members.
              </li>
              <li>
                {" "}
                <a span className="fw-bold" href="">
                  Tuple
                </a>{" "}
                is a collection which is ordered and unchangeable. Allows
                duplicate members.
              </li>
              <li>
                {" "}
                <a span className="fw-bold" href="">
                  Set
                </a>{" "}
                is a collection which is unordered, unchangeable*, and
                unindexed. No duplicate members.
              </li>
              <li>
                {" "}
                <a span className="fw-bold" href="">
                  Dictionary
                </a>{" "}
                is a collection which is ordered** and changeable. No duplicate
                members.
              </li>
            </ul>
            <br />
            <h6 className="remember">
              *Set items are unchangeable, but you can remove and/or add items
              whenever you like
              <br />
              **As of Python version 3.7, dictionaries are ordered. In Python
              3.6 and earlier, dictionaries are unordered.
            </h6>
            <br />
            <p>
              When choosing a collection type, it is useful to understand the
              properties of that type. Choosing the right type for a particular
              data set could mean retention of meaning, and, it could mean an
              increase in efficiency or security.
            </p>
            <br />
            <div className="container"> <Row>
            <Col>
          <Link to="/opera  "><button className="btn btn-primary" id="previous" > Previous</button></Link>  
            </Col>
            <Col>
           
           <Link to="/Tuple"> <button className="btn btn-primary" id="Next" >Next</button></Link>
            </Col>
            
            </Row>    </div> <br />
          </div>
        </Col>
      </Row>
      <End/>
    </Fragment>
  );
};
