import React, { Fragment } from "react";
import Nav from "./Nav";
import SideNav from "./sidenav";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
import Col from "react-bootstrap/Col";
import "./pythonH.css";
import End from "./end";
// class Operator extends React.Component {
export const Dict = () => {
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
        <div id="Dict" className="container">


            <h4>Python Dictionaries</h4>
            <br />  <div className="container"> <Row>
            <Col>
          <Link to="/sets"><button className="btn btn-primary" id="previous" > Previous</button></Link>  
            </Col>
            <Col>
           
           <Link to="/if"> <button className="btn btn-primary" id="Next" >Next</button></Link>
            </Col>
            
            </Row>    </div> 
            <br />
            <div id="mylist1" className="container">
              <p>
              thisdict =[ <br /><span className="brown">"brand" :"Ford"</span> , <br />{" "}
                <span className="brown">"Model": "Mustang"</span>, <br />{" "}
                <span className="brown">"Year"</span>
                <span className="text-danger">1994</span> <br />
              ]
                
              </p>
            </div>

            <br />
            <hr />
            <h5>Dictionary</h5>

            <br />
            <p>Dictionaries are used to store data values in key:value pairs.</p>

            <br />
            <p>A dictionary is a collection which is ordered*, changeable and do not allow duplicates.</p>
        
            <h6 className="remember">
            As of Python version 3.7, dictionaries are ordered. In Python 3.6 and earlier, dictionaries are unordered.
            </h6>
         <br />
         <p>Dictionaries are written with curly brackets, and have keys and values:</p>
        
        
        <br />


        <div id="tryit4" className="container">
              <h3>EXAMPLE</h3>
              <br />
              <span>Create and print a dictionary:</span> <br />
              <p>
              thisdict =[ <br /><span className="brown">"brand" :"Ford"</span> , <br />{" "}
                <span className="brown">"Model": "Mustang"</span>, <br />{" "}
                <span className="brown">"Year"</span>
                <span className="text-danger">1994</span> <br />
              ] <br />
              print(thisdict)
              </p>
    
              <Link to="/c"><button className="btn btn-primary text-warning">
                Try it Yourself
              </button></Link> 
            </div>
            <br />
            <hr />
            <h4>Dictionary Items</h4>
            <br />
            <p>Dictionary items are ordered, changeable, and does not allow duplicates.</p>
       
       <br />
       <p>Dictionary items are presented in key:value pairs, and can be referred to by using the key name.</p>
        
        
        <br />
        <hr />
        

        <div id="tryit4" className="container">
              <h3>EXAMPLE</h3>
              <br />
              <span>Print the "brand" value of the dictionary:</span> <br />
              <p>
              thisdict =[ <br /><span className="brown">"brand" :"Ford"</span> , <br />{" "}
                <span className="brown">"Model": "Mustang"</span>, <br />{" "}
                <span className="brown">"Year"</span>
                <span className="text-danger">1994</span> <br />
              ] <br />
              print(thisdict["brand"])
              </p>
    
              <Link to="/c"><button className="btn btn-primary text-warning">
                Try it Yourself
              </button></Link> 
            </div> <hr /> <br />
            <h4>Ordered or Unordered?</h4> <br />
            <h6 className="remember">
            As of Python version 3.7, dictionaries are ordered. In Python 3.6 and earlier, dictionaries are unordered.
            </h6>

            <br />
            <p>When we say that dictionaries are ordered, it means that the items have a defined order, and that order will not change.</p>
<br />
<p>Unordered means that the items does not have a defined order, you cannot refer to an item by using an index.

</p>
<hr />
<h4>Changeable</h4>
<br />
<p>Dictionaries are changeable, meaning that we can change, add or remove items after the dictionary has been created.

</p> <br />
<hr />
<h4>Duplicates Not Allowed
</h4>
<br />
<p>Dictionaries cannot have two items with the same key:</p>

<br />

<div id="tryit4" className="container">
              <h3>EXAMPLE</h3>
              <br />
              <span>Duplicate values will overwrite existing values:

</span> <br />
              <p>
              thisdict =[ <br /><span className="brown">"brand" :"Ford"</span> , <br />{" "}
                <span className="brown">"Model": "Mustang"</span>, <br />{" "}
                <span className="brown">"Year"</span>
                <span className="text-danger">1994</span> <br />
                <span className="brown">"Year"</span>
                <span className="text-danger">2020</span> <br />
              ] <br />
              print(thisdict)
              </p>
    
              <Link to="/c"><button className="btn btn-primary text-warning">
                Try it Yourself
              </button></Link> 
            </div>
            <br /> <hr />
            <h4>Dictionary Length</h4> <br />
            <p>To determine how many items a dictionary has, use the
               <span className="text-danger">len() </span>  function:</p>


               <br />
               

<div id="tryit4" className="container">
              <h3>EXAMPLE</h3>
              <br />
              <span>Print the number of items in the dictionary:

</span> <br />
              <p>
              print(len(thisdict))
              </p>
    
              <Link to="/c"><button className="btn btn-primary text-warning">
                Try it Yourself
              </button></Link> 
            </div> <br />
            <hr />
            <h4>Dictionary Items - Data Types</h4> <br />
            <p>The values in dictionary items can be of any data type:</p>
       
       <br />
       
<div id="tryit4" className="container">
              <h3>EXAMPLE</h3>
              <br />
              <span>Duplicate values will overwrite existing values:

</span> <br />
              <p>
              thisdict =[ <br /><span className="brown">"brand" :"Ford"</span> , <br />{" "}
                <span className="brown">"electric"</span> : <span className="text-primary">False</span> , <br />{" "}
                <span className="brown">"Year"</span>
                <span className="text-danger">1994</span> <br />
                <span className="brown">"colors"</span>  :[ <span className="brown">"red", "white", "blue"</span>]
            <br /> ] <br />
              print(thisdict)
              </p>
    
              <Link to="/c"><button className="btn btn-primary text-warning">
                Try it Yourself
              </button></Link> 
            </div>

            <br />
            <h4>type()</h4>
            <br />
            <p>From Python's perspective, dictionaries are defined as objects with the data type 'dict':</p>
        
        
        <br />
        <div id="mylist" className="container">
              {smaller}class 'set '{greater}
            </div>
           <br />
           

        <div id="tryit4" className="container">
              <h3>EXAMPLE</h3>
              <br />
              <span>Print the data type of a dictionary:</span> <br />
              <p>
              thisdict =[ <br /><span className="brown">"brand" :"Ford"</span> , <br />{" "}
                <span className="brown">"Model": "Mustang"</span>, <br />{" "}
                <span className="brown">"Year"</span>
                <span className="text-danger">1994</span> <br />
              ] <br />
              print(type(thisdict))
              </p>
    
              <Link to="/c"><button className="btn btn-primary text-warning">
                Try it Yourself
              </button></Link> 
            </div> <br />
            <hr />
            <h4>The dict() Constructor</h4> <br />
            <p>It is also possible to use the <span className="text-danger"> dict()</span> constructor to make a dictionary.</p>
      
       <br />
       
       
       <div id="tryit4" className="container">
              <h3>EXAMPLE</h3>
              <br />
              <span>Print the data type of a dictionary:</span> <br />
              <p>
              thisdict = dict(name=<span className="brown">"jhon" </span> , <br />
              {" "}
              age=  <span className="text-danger">36 </span>, <br />{" "}
               country = <span className="brown">"Norway"</span>
               
              ) <br />
              print(thisdict)

              </p>
              <Link to="/c"><button className="btn btn-primary text-warning">
                Try it Yourself
              </button></Link> 
            </div> <br />


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
          <Link to="/sets"><button className="btn btn-primary" id="previous" > Previous</button></Link>  
            </Col>
            <Col>
           
           <Link to="/if"> <button className="btn btn-primary" id="Next" >Next</button></Link>
            </Col>
            
            </Row>    </div> 
            
             </div>
        
        
        
        </Col>
        </Row>

        <End/>
        </Fragment>)};
