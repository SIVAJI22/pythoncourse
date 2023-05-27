import React, { Fragment } from "react";
import Nav from "./Nav";
import SideNav from "./sidenav";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
import Col from "react-bootstrap/Col";
import "./pythonH.css";
import End from "./end";
// class Operator extends React.Component {
export const Sets = () => {
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
        <div id="sets" className="container">
        <h4>Python Sets</h4> 
      <br />  
      <div className="container"> <Row>
            <Col>
          <Link to="/Tuple"><button className="btn btn-primary" id="previous" > Previous</button></Link>  
            </Col>
            <Col>
           
           <Link to="/Dict"> <button className="btn btn-primary" id="Next" >Next</button></Link>
            </Col>
            
            </Row>    </div>  <hr />
      <div id="mylist" className="container">
              <p>
              myset  =  [ <span className="brown">"apple"</span> ,{" "}
                <span className="brown">"banana"</span>,{" "}
                <span className="brown">"cherry"</span>]
              </p>
            </div>
            <br /> <hr />
            <h5>Set</h5>
            <p>Sets are used to store multiple items in a single variable.</p> <br />
           
            <p>
              Sets is one of 4 built-in data types in Python used to store
              collections of data, the other 3 are  
           <Link to="/tuple">   <a href="">Tuple</a> </Link>
              ,  <Link to="/list"> <a href=""> List</a>,</Link>

              and <a href=""> Dictionary</a>, all with different qualities and
              usage.
            </p>

            <br />
            <h6 className="remember">
              {" "}
              <span className="fw-bold">Note: </span> Set items are unchangeable, but you can remove items and add new items.
            </h6>
            <hr />
            <p>Sets are written with curly brackets.</p>
           
           <br />
           <div id="tryit4" className="container">
              <h3>EXAMPLE</h3>
              <br />
              <span>Create a set:</span> <br />
              <p className="text-primary">
              thisset = [ <span className="brown">"apple"</span> ,{" "}
                <span className="brown">"banana"</span>,{" "}
                <span className="brown">"cherry"</span>] <br /> print(thisset)
              </p>
              <Link to="/c">   <button className="btn btn-primary text-warning">
                Try it Yourself
              </button></Link>
            </div> 
            <br />
                      <h6 className="remember">
              {" "}
              <span className="fw-bold">Note: </span> Sets are unordered, so you cannot be sure in which order the items will appear.
            </h6>
             <br /> <hr />
             <h4>Set Items</h4>
             <p>Set items are unordered, unchangeable, and do not allow duplicate values.</p>
         <hr />
         <h5>Unordered</h5>
         <br />
         <p>Unordered means that the items in a set do not have a defined order.    </p>
         <br />
         <p>Set items can appear in a different order every time you use them, and cannot be referred to by index or key.

</p>
<hr />
<h4>Unchangeable</h4>

<p>Set items are unchangeable, meaning that we cannot change the items after the set has been created.

</p>

<h6 className="remember">
Once a set is created, you cannot change its items, but you can remove items and add new items.


            </h6> <hr />
            <br />
            <h5>Duplicates Not Allowed </h5>
            <br />
            <p>Sets cannot have two items with the same value.</p>
            <br />

            <div id="tryit4" className="container">
              <h3>EXAMPLE</h3>
              <br />
              <span>Duplicate values will be ignored:</span> <br />
              <p className="text-primary">
              thisset = [ <span className="brown">"apple"</span> ,{" "}
                <span className="brown">"banana"</span>,{" "}
                <span className="brown">"cherry"</span>
                <span className="brown">"apple"</span>] <br /> print(thisset)
              </p>
              <Link to="/c">   <button className="btn btn-primary text-warning">
                Try it Yourself
              </button></Link>
            </div> 
            <br />
            <h6 className="remember">
              {" "}
              <span className="fw-bold">Note: </span> The values <span className="text-danger">True</span>  and  <span className="text-danger">1</span>  are considered the same value in sets, and are treated as duplicates:
            </h6>
            < br />
            
            <div id="tryit4" className="container">
              <h3>EXAMPLE</h3>
              <br />
              <span>    <span className="text-danger">True</span>  and  <span className="text-danger">1</span> is considered the same value:</span> <br />
              <p className="text-primary">
              thisset = [ <span className="brown">"apple"</span> ,{" "}
                <span className="brown">"banana"</span>,{" "} 
                <span className="brown">"cherry"</span> 
                <span className="text-primary">True</span> ,
                  <span className="text-danger">1</span>
                <span className="text-danger">2</span>]  <br /> print(thisset)
              </p>
              <Link to="/c">   <button className="btn btn-primary text-warning">
                Try it Yourself
              </button></Link>
            </div> 
            <br /> 
            <hr />
            <h4>Get the Length of a Set</h4>
            <br />
            <p>To determine how many items a set has, use the <span className="text-danger">len()</span>  function.</p>
            
            
            <br />
            
            
            <div id="tryit4" className="container">
              <h3>EXAMPLE</h3>
              <br />
              <span> Get the number of items in a set:</span>  <br />
              <p className="text-primary">
              thisset = [ <span className="brown">"apple"</span> ,{" "} 
                <span className="brown">"banana"</span>,{" "}
                <span className="brown">"cherry"</span>] <br />
              print(thisset)
              </p>
              <Link to="/c">   <button className="btn btn-primary text-warning">
                Try it Yourself
              </button></Link>
            </div> 

            <br />
            <h4>Set Items - Data Types</h4>
            <p>Set items can be of any data type:</p>
            <br />
            
            <div id="tryit4" className="container">
              <h3>EXAMPLE</h3>
              <br />
              <span> Get the number of items in a set:</span>  <br />
              <p className="text-primary">
            set1 = [ <span className="brown">"apple"</span> ,{" "}
                <span className="brown">"banana"</span>,{" "}
                <span className="brown">"cherry"</span>]
                
            
            set2 = [ <span className="text-danger">1</span> ,{" "}
                <span className="text-danger">2</span>,{" "}
                <span className="text-danger">3</span>]
                

                
            set3 = [ <span className="text-primary">True</span> ,{" "}
                <span className="text-primary">False</span>,{" "} 
                <span className="text-primary">False</span>]
                
                
                 <br />
              print(thisset)
              </p>
              <Link to="/c">   <button className="btn btn-primary text-warning">
                Try it Yourself
              </button></Link>
            </div> 
            <br /> <p>A set can contain different data types:</p>
            <br />
            
            <div id="tryit4" className="container">
              <h3>EXAMPLE</h3>
              <br />
              <span> Get the number of items in a set:</span>  <br />
              <p className="text-primary">
            set1 = [ <span className="brown">"abc"</span> ,{" "}
            <span className="text-danger">34</span> ,
        
            <span className="text-primary">True</span>,
        
            
            <span className="text-danger">40</span> ,
            {" "}
                <span className="brown">"male"</span>]
                
           
                
                 <br />
              print(thisset)
              </p>
              <Link to="/c">   <button className="btn btn-primary text-warning">
                Try it Yourself
              </button></Link>
            </div> 
            <br />
            <hr />
            <h4>type()</h4>

            <br />
            <p>From Python's perspective, sets are defined as objects with the data type 'set':</p>
           
           <br />  <div id="mylist" className="container">
              {smaller}class 'set '{greater}
            </div>
           
           <br />
           <div id="tryit4" className="container">
              <h3>EXAMPLE</h3>
              <br />
              <span> What is the data type of a set?</span>  <br />
              <p className="text-primary">
            myset = [ <span className="brown">"apple"</span> ,
          
            <span className="brown">"cherry"</span>,
            <span className="brown">"banana"</span> ]
            
          
                
                 <br />
              print(myset)
              </p>
              <Link to="/c">   <button className="btn btn-primary text-warning">
                Try it Yourself
              </button></Link>
            </div>      <hr />
            <br />




                  <h5>The set() Constructor</h5>
                  <br />
                  <p>It is also possible to use the  <span className="text-danger">set()
                  </span>  constructor to make a set.</p>
           
                  <div id="tryit4" className="container">
              <h3>EXAMPLE</h3>
              <br />
              <span> Using the set() constructor to make a set:</span>  <br />
              <p className="text-primary">
           thisset= set (( <span className="brown">"apple"</span> ,
            
            <span className="brown">"cherry"</span>,
            <span className="brown">"banana"</span> )) 
            <span className="text-success">{""} # note the double round-brackets</span>
            
          
                
                 <br />
              print(thisset)
              </p>
              <Link to="/c">   <button className="btn btn-primary text-warning">
                Try it Yourself
              </button></Link>
            </div>      <hr />
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
            <p>When choosing a collection type, it is useful to understand the properties of that type. Choosing the right type for a particular data set could mean
                 retention of meaning, and, it could mean an increase in efficiency or security.</p>
       
       
       
       
        <br />

        <div className="container"> <Row>
            <Col>
          <Link to="/Tuple"><button className="btn btn-primary" id="previous" > Previous</button></Link>  
            </Col>
            <Col>
           
           <Link to="/Dict"> <button className="btn btn-primary" id="Next" >Next</button></Link>
            </Col>
            
            </Row>    </div>
            </div>
        </Col>
        
        
        </Row>
        
        <End/>
        
        </Fragment>)};