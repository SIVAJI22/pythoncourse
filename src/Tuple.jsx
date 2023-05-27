import React, { Fragment } from "react";
import Nav from "./Nav";
import SideNav from "./sidenav";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
import Col from "react-bootstrap/Col";
import "./pythonH.css";
import End from "./end";
// class Operator extends React.Component {
export const Tuple = () => {
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

 <div id="tuple" className="container">
        <h4>Python Tuples</h4><br />
        <div className="container"> <Row>
            <Col>
          <Link to="/list"><button className="btn btn-primary" id="previous" > Previous</button></Link>  
            </Col>
            <Col>
           
           <Link to="/sets"> <button className="btn btn-primary" id="Next" >Next</button></Link>
            </Col>
            
            </Row>    </div>
        <br />
        <div id="mylist" className="container">
              <p>
              mytuple =  [ <span className="brown">"apple"</span> ,{" "}
                <span className="brown">"banana"</span>,{" "}
                <span className="brown">"cherry"</span>]
              </p>
            </div>
            <br /> <hr />
            <h5>Tuple</h5>
            <br />
            <p>Tuples are used to store multiple items in a single variable.</p>
            <br />
            <p>Tuple is one of 4 built-in data types in Python used to store collections
                 of data, the other 3 are
                 <Link to="/list"> <a href="">List</a></Link> ,
                 <Link to="/Sets"> <a href=""> Set</a></Link>, and
                  <a href="">Dictionary</a> ,
                  all with different qualities and usage.</p>
                  <br />
                  <p>A tuple is a collection which is ordered and 
                    <span className="fw-bold">unchangeable</span> .</p>
        <br />
        <p>Tuples are written with round brackets.

</p>
<br />
<div id="tryit4" className="container">
              <h3>EXAMPLE</h3>
              <br />
              <span>Create a Tuple:

</span> <br />
              <p className="text-primary">
              thistuple  = [ <span className="brown">"apple"</span> ,{" "}
                <span className="brown">"banana"</span>,{" "}
                <span className="brown">"cherry"</span>] <br /> print(thistuple)
              </p>
              <Link to="/c">   <button className="btn btn-primary text-warning">
                Try it Yourself
              </button></Link>
            </div>
            <br />
            <hr />
            <h4>Tuple Items</h4>
            <p>Tuple items are ordered, unchangeable, and allow duplicate values.</p>
        
        <br />
        <p>
        Tuple items are indexed, the first item has index{" "}
              <span className="text-danger"> [0]</span>, the second item has
              index <span className="text-danger"> [1]</span> etc.
            </p>
        <br />
        <hr />
        <h5>Ordered</h5>
        <p>When we say that tuples are ordered,
             it means that the items have a defined order, and that order will not change.</p>
        
        <br /> <hr />
        <h5>Unchangeable</h5> <br />
        <p>Tuples are unchangeable, 
            meaning that we cannot change, add or remove items after the tuple has been created.</p>
        <br />
        <hr />
        <h5>Allow Duplicates</h5>
 <br />
<p>Since tuples are indexed, they can have items with the same value:</p>

<br />


<div id="tryit4" className="container">
              <h3>EXAMPLE</h3>
              <br />
              <span>Tuples allow duplicate values:

</span> <br />
              <p className="text-primary">
              thistuple  = [  <span className="brown">"apple"</span> ,{" "}
                <span className="brown">"banana"</span>,{" "}
                <span className="brown">"cherry"</span>,
                <span className="brown">"apple"</span>,
                <span className="brown">"cherry"</span>] <br /> print(thistuple)
              </p>
              <Link to="/c">   <button className="btn btn-primary text-warning">
                Try it Yourself
              </button></Link>
            </div>
            <br />
            <hr />
            <h5>Tuple Length</h5>
            <br />
            <p>To determine how many items a Tuple has, use the 
                <span className="text-danger"> len()</span> 
            function:</p>

<br />

<div id="tryit4" className="container">
              <h3>EXAMPLE</h3>
              
              <span>Print the number of items in the list:</span> <br />
              <br />
              <p className="text-primary">
                thistuple = [ <span className="brown">"apple"</span> ,{" "}
                <span className="brown">"banana"</span>,{" "}
                <span className="brown">"cherry"</span>,
              ]  <br />
                 print(len(thisTuple))
              </p>
              <Link to="/c">   <button className="btn btn-primary text-warning">
                Try it Yourself
              </button></Link>
            </div>
<br />
<hr />
<h4>Create Tuple With One Item</h4>
<br />

<p>To create a tuple with only one item, you have to add a comma after the item, otherwise Python will not recognize it as a tuple.</p>
 <br />
 
<div id="tryit4" className="container">
              <h3>EXAMPLE</h3>
              <br />
              <span>One item tuple, remember the comma:

</span> <br />
              <p className="text-primary">
              thistuple  = [  <span className="brown">"apple"</span>]{" "}
             <br /> print(type(thistuple))
  
<span className="text-success">#NOT a tuple</span> <br />
thistuple  = [  <span className="brown">"apple"</span>] <br />
print(type(thistuple))
              </p>
              <Link to="/c">   <button className="btn btn-primary text-warning">
                Try it Yourself
              </button></Link>
            </div>
<br /> <hr />
<h4>Tuple Items - Data Types</h4> <br />
<p>Tuple items can be of any data type:</p>
<br />
<div id="tryit4" className="container">
              <h3>EXAMPLE</h3>
              
              <span>String, int and boolean data types:</span> <br /> <br />
              <p className="text-primary">
              tuple1 = [ <span className="brown">"apple"</span> ,{" "}
                <span className="brown">"banana"</span>,{" "}
                <span className="brown">"cherry"</span>,]
                <br />
                tuple2 = [ <span className="text-danger">1</span>,
                <span className="text-danger">5</span>,
                <span className="text-danger">7</span>,
                <span className="text-danger">9</span>,
                <span className="text-danger">3</span>
                ]
                <br />
                tuple3  = [True, False, False]
              </p>
              <Link to="/c">   <button className="btn btn-primary text-warning">
                Try it Yourself
              </button></Link>
            </div>
            <br />
            <p>A tuple can contain different data types:</p>

            <br />
            <div id="tryit4" className="container">
              <h3>EXAMPLE</h3>
          
              <span>
                A Tuple with strings, integers and boolean values:
              </span>{" "}
              <br /> <br />
              <p className="text-primary">
                Tuple1 = [ <span className="brown">"abc"</span> ,
                <span className="text-danger">34</span>,True
                <span className="text-danger">40</span>,
                <span className="brown">"male"</span>, ]
              </p>
              <Link to="/c">   <button className="btn btn-primary text-warning">
                Try it Yourself
              </button></Link>
            </div>
            <br />
            <hr />
            <h5>type()</h5> <br />
            <p>From Python's perspective, tuples are defined as objects with the data type 'tuple'::</p>
        <br />
        <div id="mylist" className="container">
              {smaller}class 'Tuple'{greater}
            </div>
            <br />
            <div id="tryit4" className="container">
              <h3>EXAMPLE</h3>
          
              <span>What is the data type of a tuple?</span>  <br /><br />
              <p className="text-primary">
                Tuple = [ <span className="brown">"apple"</span> ,{" "}
                <span className="brown">"banana"</span>,{" "}
                <span className="brown">"cherry"</span>,]
                <br />
                print(type(mytuple))
              </p>
              <Link to="/c">   <button className="btn btn-primary text-warning">
                Try it Yourself
              </button></Link>
            </div>
            <br />
            <hr /><h4>The tuple() Constructor</h4>
            <br />
            <p>It is also possible to use the <span className="text-danger">tuple() </span> constructor to make a tuple.

</p>
<br />
<div id="tryit4" className="container">
              <h3>EXAMPLE</h3>
              
              <span>
              Using the tuple() method to make a tuple:
              </span>{" "}
              <br /> <br />
              <p className="text-primary">
                thistuple = tuple (( <span className="brown">"apple"</span> ,{" "}
                <span className="brown">"banana"</span>,{" "}
                <span className="brown">"cherry"</span>,))
                <span className="text-success">
                  # note the double round-brackets
                </span>
                <br />
                print(thistuple)
              </p>
              <Link to="/c">   <button className="btn btn-primary text-warning">
                Try it Yourself
              </button></Link>
            </div>
            <br />
            
            <h4>Python Collections (Arrays)</h4> <br />
            <p>
              There are four collection data types in the Python programming
              language:
            </p>
            <br />
            <ul>
              <li>
                {" "}
               <a href=""><span className="fw-bold">List</span></a>  is a collection which is
                ordered and changeable. Allows duplicate members.
              </li>
              <li>
                {" "}
                <span span className="fw-bold" href="">
                  Tuple
                </span>{" "}
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
          <Link to="/list"><button className="btn btn-primary" id="previous" > Previous</button></Link>  
            </Col>
            <Col>
           
           <Link to="/sets"> <button className="btn btn-primary" id="Next" >Next</button></Link>
            </Col>
            
            </Row>    </div>
            </div>
     
        </Col>
        
        </Row>
        
        </Fragment>)};