import React, { Fragment } from "react";
import Nav from "./Nav";
import SideNav from "./sidenav";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
import Col from "react-bootstrap/Col";
import "./pythonH.css";
import End from "./end";
// class Operator extends React.Component {
 export const Operator =()=>{

 

 
 
const  dsmaller= <img id="Dsmaller" src="./double small.png" alt="" />
 
 const smaller= <img id="Dsmaller" src="./smaller.png" alt="" />
 const greater= <img id="Dgreater" src="./greater.jpg" alt="" /> 
const  dgreater= <img id="Dgreater" src="./double greater.png" alt="" />
    return (
      <Fragment>
        <Nav />

        <Row>
          <Col>
            <SideNav />
          </Col>
          <Col>
            <div id="operator" className="container">
              <h2>Python Operators</h2> <br />
              <div className="container"> <Row>
            <Col>
          <Link to="/bool "><button className="btn btn-primary" id="previous" > Previous</button></Link>  
            </Col>
            <Col>
           
           <Link to="/list"> <button className="btn btn-primary" id="Next" >Next</button></Link>
            </Col>
            
            </Row>    </div>
              <hr />
              <br />
              <h5>Python Operators</h5>
              <br />
              <p>
                Operators are used to perform operations on variables and
                values.
              </p>
              <br />
              <p>
                In the example below, we use the{" "}
                <span className="text-danger">+</span>
                operator to add together two values:
              </p>
              <br />
              <div id="tryit4" className="container">
                <h3>EXAMPLE</h3>
                <br /> <br />
                <p className="text-primary">
                  print(<span className="brown">10</span> +
                  <span className="brown">5</span>) <br />
                </p>
                <Link to="/c"><button className="btn btn-primary text-warning">
                Run Example
              </button></Link> 
                
              </div>
              <br />
              <p>Python divides the operators in the following groups:</p>
              <ul>
                <li>Arithmetic operators</li>
                <li>Assignment operators</li>
                <li>Comparison operators</li>
                <li>Logical operators</li>
                <li>Identity operators</li>
                <li>Membership operators</li>
                <li>Bitwise operators</li>
              </ul>
              <br />
              <hr />
              <br />
              <h4>Python Arithmetic Operators</h4>
              <br />
              <p>
                Arithmetic operators are used with numeric values to perform
                common mathematical operations:
              </p>
              <br />
              <div id="datatypes" className="container">
                <Row>
                  <Col sm={4}>
                    <h6>Operator</h6> <br />
                  </Col>
                  <Col sm={3}>
                    <h6> Name</h6>
                  </Col>

                  <Col sm={3}>
                    <h6> Example</h6>
                  </Col>

                  <Col sm={2}>


                    <h6>Try it</h6>
                  </Col>
                </Row>
                <div id="helogrey">
                  <Row>
                    <Col sm={4}>
                      <p>+</p>
                    </Col>
                    <Col sm={3}>
                      <p> Additon</p>
                    </Col>
                    <Col sm={3}>
                      <p> X+Y</p>
                    </Col>

                    <Col sm={2}>
                    <Link to="/c">  <button>Try it</button></Link>
                    
                    </Col>
                  </Row>
                </div>

                <div id="helowhite">
                  <Row>
                    <Col sm={4}>
                      <p>-</p>
                    </Col>
                    <Col sm={3}>
                      <p> Subraction</p>
                    </Col>
                    <Col sm={3}>
                      <p> X-Y</p>
                    </Col>

                    <Col sm={2}>
                    <Link to="/c">  <button>Try it</button></Link>
                    </Col>
                  </Row>
                </div>

                <div id="helogrey">
                  <Row>
                    <Col sm={4}>
                      <p>*</p>
                    </Col>
                    <Col sm={3}>
                      <p> Multiplication</p>
                    </Col>
                    <Col sm={3}>
                      <p> X*Y</p>
                    </Col>

                    <Col sm={2}>
                    <Link to="/c">  <button>Try it</button></Link>
                    </Col>
                  </Row>
                </div>

                <div id="helowhite">
                  <Row>
                    <Col sm={4}>
                      <p>/</p>
                    </Col>
                    <Col sm={3}>
                      <p> Division</p>
                    </Col>
                    <Col sm={3}>
                      <p> X/Y</p>
                    </Col>

                    <Col sm={2}>
                    <Link to="/c">  <button>Try it</button></Link>
                    </Col>
                  </Row>
                </div>

                <div id="helogrey">
                  <Row>
                    <Col sm={4}>
                      <p>%</p>
                    </Col>
                    <Col sm={3}>
                      <p> Modulus</p>
                    </Col>
                    <Col sm={3}>
                      <p> X%Y</p>
                    </Col>

                    <Col sm={2}>
                    <Link to="/c">  <button>Try it</button></Link>
                    </Col>
                  </Row>
                </div>

                <div id="helowhite">
                  <Row>
                    <Col sm={4}>
                      <p>**</p>
                    </Col>
                    <Col sm={3}>
                      <p> Exponentiation</p>
                    </Col>
                    <Col sm={3}>
                      <p> X**Y</p>
                    </Col>

                    <Col sm={2}>
                    <Link to="/c">  <button>Try it</button></Link>
                    </Col>
                  </Row>
                </div>

                <div id="helogrey">
                  <Row>
                    <Col sm={4}>
                      <p>//</p>
                    </Col>
                    <Col sm={3}>
                      <p> Floor division</p>
                    </Col>
                    <Col sm={3}>
                      <p> X//Y</p>
                    </Col>

                    <Col sm={2}>
                    <Link to="/c">  <button>Try it</button></Link>
                    </Col>
                  </Row>
                </div>
              </div>
              <br /> <h4>Python Assignment Operators</h4>
              <br />
              <p>
                Assignment operators are used to assign values to variables:
              </p>
              <br />
              <div id="datatypes" className="container">
                <Row>
                  <Col sm={4}>
                    <h6>Operator</h6> <br />
                  </Col>

                  <Col sm={3}>
                    <h6> Example</h6>
                  </Col>

                  <Col sm={3}>
                    <h6>Same As</h6>
                  </Col>
                  <Col sm={2}>
                    <h6>Try it</h6>
                  </Col>
                </Row>
                <div id="helogrey">
                  <Row>
                    <Col sm={4}>
                      <p>+</p>
                    </Col>
                    <Col sm={3}>
                      <p>X =5</p>
                    </Col>
                    <Col sm={3}>
                      <p>X=5</p>
                    </Col>

                    <Col sm={2}>
                    <Link to="/c">  <button>Try it</button></Link>
                    </Col>
                  </Row>
                </div>

                <div id="helowhite">
                  <Row>
                    <Col sm={4}>
                      <p>+=</p>
                    </Col>
                    <Col sm={3}>
                      <p> X +=3</p>
                    </Col>
                    <Col sm={3}>
                      <p> x = x + 3</p>
                    </Col>

                    <Col sm={2}>
                    <Link to="/c">  <button>Try it</button></Link>
                    </Col>
                  </Row>
                </div>

                <div id="helogrey">
                  <Row>
                    <Col sm={4}>
                      <p>-=</p>
                    </Col>
                    <Col sm={3}>
                      <p> x -= 3</p>
                    </Col>
                    <Col sm={3}>
                      <p> x = x - 3</p>
                    </Col>

                    <Col sm={2}>
                    <Link to="/c">  <button>Try it</button></Link>
                    </Col>
                  </Row>
                </div>

                <div id="helowhite">
                  <Row>
                    <Col sm={4}>
                      <p>*=</p>
                    </Col>
                    <Col sm={3}>
                      <p> x *= 3</p>
                    </Col>
                    <Col sm={3}>
                      <p> x = x * 3</p>
                    </Col>

                    <Col sm={2}>
                    <Link to="/c">  <button>Try it</button></Link>
                    </Col>
                  </Row>
                </div>

                <div id="helogrey">
                  <Row>
                    <Col sm={4}>
                      <p>/=</p>
                    </Col>
                    <Col sm={3}>
                      <p> x /= 3</p>
                    </Col>
                    <Col sm={3}>
                      <p> x = x / 3</p>
                    </Col>

                    <Col sm={2}>
                    <Link to="/c">  <button>Try it</button></Link>
                    </Col>
                  </Row>
                </div>

                <div id="helowhite">
                  <Row>
                    <Col sm={4}>
                      <p>%=</p>
                    </Col>
                    <Col sm={3}>
                      <p> x %= 3</p>
                    </Col>
                    <Col sm={3}>
                      <p> x = x % 3</p>
                    </Col>

                    <Col sm={2}>
                    <Link to="/c">  <button>Try it</button></Link>
                    </Col>
                  </Row>
                </div>

                <div id="helogrey">
                  <Row>
                    <Col sm={4}>
                      <p>//=</p>
                    </Col>
                    <Col sm={3}>
                      <p> x //= 3</p>
                    </Col>
                    <Col sm={3}>
                      <p>x = x // 3</p>
                    </Col>

                    <Col sm={2}>
                    <Link to="/c">  <button>Try it</button></Link>
                    </Col>
                  </Row>
                </div>

                <div id="helogrey">
                  <Row>
                    <Col sm={4}>
                      <p>**=</p>
                    </Col>
                    <Col sm={3}>
                      <p> x **= 3</p>
                    </Col>
                    <Col sm={3}>
                      <p> x = x ** 3</p>
                    </Col>

                    <Col sm={2}>
                    <Link to="/c">  <button>Try it</button></Link>
                    </Col>
                  </Row>
                </div>

                <div id="helogrey">
                  <Row>
                    <Col sm={4}>
                      <p>&=</p>
                    </Col>
                    <Col sm={3}>
                      <p> x &= 3</p>
                    </Col>
                    <Col sm={3}>
                      <p> x = x & 3</p>
                    </Col>

                    <Col sm={2}>
                    <Link to="/c">  <button>Try it</button></Link>
                    </Col>
                  </Row>
                </div>

                <div id="helogrey">
                  <Row>
                    <Col sm={4}>
                      <p>|=</p>
                    </Col>
                    <Col sm={3}>
                      <p> x |= 3</p>
                    </Col>
                    <Col sm={3}>
                      <p>x = x | 3</p>
                    </Col>

                    <Col sm={2}>
                    <Link to="/c">  <button>Try it</button></Link>
                    </Col>
                  </Row>
                </div>

                <div id="helogrey">
                  <Row>
                    <Col sm={4}>
                      <p>^=</p>
                    </Col>
                    <Col sm={3}>
                      <p> x ^= 3</p>
                    </Col>
                    <Col sm={3}>
                      <p> x = x ^ 3</p>
                    </Col>

                    <Col sm={2}>
                    <Link to="/c">  <button>Try it</button></Link>
                    </Col>
                  </Row>
                </div>

                <div id="helogrey">
                  <Row>
                    <Col sm={4}>
                      <p>{dgreater}=</p>
                    </Col>
                    <Col sm={3}>
                      <p> "x {dgreater} 3" </p>
                    </Col>
                    <Col sm={3}>
                      <p>x = x {dgreater} 3</p>
                    </Col>

                    <Col sm={2}>
                    <Link to="/c">  <button>Try it</button></Link>
                    </Col>
                  </Row>
                </div>

                <div id="helogrey">
                  <Row>
                    <Col sm={4}>
                      <p> {dsmaller}= </p>
                    </Col>
                    <Col sm={3}>
                      <p> x {dsmaller}= 3</p>
                    </Col>
                    <Col sm={3}>
                      <p>x = x {dsmaller} 3</p>
                    </Col>

                    <Col sm={2}>
                    <Link to="/c">  <button>Try it</button></Link>
                    </Col>
                  </Row>
                </div>
              </div>
              <br />
              <h4>Python Comparison Operators</h4>
              <br />
              <p>Comparison operators are used to compare two values:</p>
              <br />
              <div id="datatypes" className="container">
                <Row>
                  <Col sm={4}>
                    <h6>Operator</h6> <br />
                  </Col>

                  <Col sm={3}>
                    <h6> Name</h6>
                  </Col>

                  <Col sm={3}>
                    <h6>Example</h6>
                  </Col>
                  <Col sm={2}>
                    <h6>Try it</h6>
                  </Col>
                </Row>
                <div id="helogrey">
                  <Row>
                    <Col sm={4}>
                      <p>==</p>
                    </Col>
                    <Col sm={3}>
                      <p> Equal</p>
                    </Col>
                    <Col sm={3}>
                      <p> x == y </p>
                    </Col>

                    <Col sm={2}>
                    <Link to="/c">  <button>Try it</button></Link>
                    </Col>
                  </Row>
                </div>
                <div id="helowhite">
                  <Row>
                    <Col sm={4}>
                      <p>!=</p>
                    </Col>
                    <Col sm={3}>
                      <p> Not equal</p>
                    </Col>
                    <Col sm={3}>
                      <p> x != y </p>
                    </Col>

                    <Col sm={2}>
                    <Link to="/c">  <button>Try it</button></Link>
                    </Col>
                  </Row>
                </div>

                <div id="helogrey">
                  <Row>
                    <Col sm={4}>
                      <p>{greater}</p>
                    </Col>
                    <Col sm={3}>
                      <p> 	Greater than</p>
                    </Col>
                    <Col sm={3}>
                      <p> x {greater} y </p>
                    </Col>

                    <Col sm={2}>
                    <Link to="/c">  <button>Try it</button></Link>
                    </Col>
                  </Row>
                </div>

                <div id="helowhite">
                  <Row>
                    <Col sm={4}>
                      <p>{smaller}</p>
                    </Col>
                    <Col sm={3}>
                      <p>	Less than</p>
                    </Col>
                    <Col sm={3}>
                      <p> x {smaller} y </p>
                    </Col>

                    <Col sm={2}>
                    <Link to="/c">  <button>Try it</button></Link>
                    </Col>
                  </Row>
                </div>

                <div id="helogrey">
                  <Row>
                    <Col sm={4}>
                      <p>{smaller}=</p>
                    </Col>
                    <Col sm={3}>
                      <p> Less than or equal to</p>
                    </Col>
                    <Col sm={3}>
                      <p> x {smaller}= y </p>
                    </Col>

                    <Col sm={2}>
                    <Link to="/c">  <button>Try it</button></Link>
                    </Col>
                  </Row>
                </div>
              </div>
              <br />
              <hr />
              <br />
              <h4>Python Logical Operators</h4>
              <p>
                Logical operators are used to combine conditional statements:
              </p>
              <br />
              <div id="datatypes" className="container">
                <Row>
                  <Col sm={2}>
                    <h6>Operator</h6> <br />
                  </Col>

                  <Col sm={6}>
                    <h6> Description</h6>
                  </Col>

                  <Col sm={2}>
                    <h6>Example</h6>
                  </Col>
                  <Col sm={2}>
                    <h6>Try it</h6>
                  </Col>
                </Row>

                <div id="helogrey1">
                  <Row>
                    <Col sm={2}>
                      <p>is </p>
                    </Col>
                    <Col sm={6}>
                      <p> Returns True if both variables are the same object</p>
                    </Col>
                    <Col sm={2}>
                      <p>x is y </p>
                    </Col>

                    <Col sm={2}>
                    <Link to="/c">  <button>Try it</button></Link>
                    </Col>
                  </Row>
                </div>

                <div id="helowhite1">
                  <Row>
                    <Col sm={2}>
                      <p>is not </p>
                    </Col>
                    <Col sm={6}>
                      <p>
                        {" "}
                        Returns True if both variables are not the same object
                      </p>
                    </Col>
                    <Col sm={2}>
                      <p>x is not y </p>
                    </Col>

                    <Col sm={2}>
                    <Link to="/c">  <button>Try it</button></Link>
                    </Col>
                  </Row>
                </div>
              </div>
              <br />
              <hr />
              <br />
              <h5>Python Membership Operators</h5>
              <br />
              <p>
                Membership operators are used to test if a sequence is presented
                in an object:
              </p>
              <br />
              <div id="datatypes" className="container">
                <Row>
                  <Col sm={2}>
                    <h6>Operator</h6> <br />
                  </Col>

                  <Col sm={6}>
                    <h6> Description</h6>
                  </Col>

                  <Col sm={2}>
                    <h6>Example</h6>
                  </Col>
                  <Col sm={2}>
                    <h6>Try it</h6>
                  </Col>
                </Row>

                <div id="helogrey1">
                  <Row>
                    <Col sm={2}>
                      <p>in</p>
                    </Col>
                    <Col sm={6}>
                      <p>
                        {" "}
                        Returns True if a sequence with the specified value is
                        present in the object
                      </p>
                    </Col>
                    <Col sm={2}>
                      <p>x in y </p>
                    </Col>

                    <Col sm={2}>
                    <Link to="/c">  <button>Try it</button></Link>
                    </Col>
                  </Row>
                </div>

                <div id="helowhite1">
                  <Row>
                    <Col sm={2}>
                      <p>not in </p>
                    </Col>
                    <Col sm={6}>
                      <p>
                        {" "}
                        Returns True if a sequence with the specified value is
                        not present in the object
                      </p>
                    </Col>
                    <Col sm={2}>
                      <p>x not in y </p>
                    </Col>

                    <Col sm={2}>
                    <Link to="/c">  <button>Try it</button></Link>
                    </Col>
                  </Row>
                </div>
              </div>
              <br />
              <hr />
              <br />
              <h4>Python Bitwise Operators</h4>
              <br />
              <p>Bitwise operators are used to compare (binary) numbers:</p>
              <br />
              <div id="datatypes1" className="container">
                <Row>
                  <Col sm={2}>
                    <h6>Operator</h6> <br />
                  </Col>
                  <Col sm={2}>
                    <h6> Name</h6>
                  </Col>

                  <Col sm={4 }>
                    <h6> Description</h6>
                  </Col>

                  <Col sm={2}>
                    <h6>Example</h6>
                  </Col>
                  <Col sm={1}>
                    <h6>Try it</h6>
                  </Col>
                </Row>

                <div id="helogrey1">
                  <Row>
                    <Col sm={2}>
                      <p>& </p>
                    </Col>

                    <Col sm={2}>
                      <p> AND</p>
                    </Col>

                    <Col sm={4}>
                      <p>Sets each bit to 1 if both bits are 1</p>
                    </Col>
                    <Col sm={2}>
                      <p>x & y </p>
                    </Col>

                    <Col sm={1}>
                    <Link to="/c">  <button>Try it</button></Link>
                    </Col>
                  </Row>
                </div>

                <div id="helowhite1">
                  <Row>
                    <Col sm={2}>
                      <p>| </p>
                    </Col>

                    <Col sm={2}>
                      <p> OR</p>
                    </Col>

                    <Col sm={4}>
                      <p>Sets each bit to 1 if one of two bits is 1</p>
                    </Col>
                    <Col sm={2}>
                      <p>x | y</p>
                    </Col>

                    <Col sm={1}>
                    <Link to="/c">  <button>Try it</button></Link>
                    </Col>
                  </Row>
                </div>

                <div id="helogrey1">
                  <Row>
                    <Col sm={2}>
                      <p>^</p>
                    </Col>

                    <Col sm={2}>
                      <p> XOR</p>
                    </Col>

                    <Col sm={4}>
                      <p>Sets each bit to 1 if only one of two bits is 1</p>
                    </Col>
                    <Col sm={2}>
                      <p>x ^ y</p>
                    </Col>

                    <Col sm={1}>
                    <Link to="/c">  <button>Try it</button></Link>
                    </Col>
                  </Row>
                </div>

                <div id="helowhite1">
                  <Row>
                    <Col sm={2}>
                      <p>~</p>
                    </Col>

                    <Col sm={2}>
                      <p> NOT</p>
                    </Col>

                    <Col sm={4}>
                      <p>Inverts all the bits</p>
                    </Col>
                    <Col sm={2}>
                      <p>~x</p>
                    </Col>

                    <Col sm={1}>
                    <Link to="/c">  <button>Try it</button></Link>
                    </Col>
                  </Row>
                </div>

                <div id="helogrey1">
                  <Row>
                    <Col sm={2}>
                      <p>{smaller}</p>
                    </Col>

                    <Col sm={2}>
                      <p> Zero fill left shift</p>
                    </Col>

                    <Col sm={4}>
                      <p>
                        Shift left by pushing zeros in from the right and let
                        the leftmost bits fall off
                      </p>
                    </Col>
                    <Col sm={2}>
                      <p>x {dsmaller} 2</p>
                    </Col>

                    <Col sm={1}>
                    <Link to="/c">  <button>Try it</button></Link>
                    </Col>
                  </Row>
                </div>

                <div id="helowhite1">
                  <Row>
                    <Col sm={2}>
                      <p>{dgreater}</p>
                    </Col>

                    <Col sm={2}>
                      <p> Signed right shift</p>
                    </Col>

                    <Col sm={4}>
                      <p>
                        Shift right by pushing copies of the leftmost bit in
                        from the left, and let the rightmost bits fall off
                      </p>
                    </Col>
                    <Col sm={2}>
                      <p>x {dgreater} 2</p>
                    </Col>

                    <Col sm={1}>
                    <Link to="/c">  <button>Try it</button></Link>
                    </Col>
                  </Row>
                </div>
              </div>



              <br /> <hr />
              <br />
              <h4>Operator Precedence
</h4>
<br />
<p>Operator precedence describes the order in which operations are performed.</p>
         
         <br />
         <div id="tryit4" className="container">
                <h3>EXAMPLE</h3>
<br />
<span>Parentheses has the highest precedence, meaning that expressions inside parentheses must be evaluated first:</span>
                <p className="text-primary">
              print (( <span className="text-danger"> 6+3</span> )-
              
             (<span className="text-danger">6+3</span>))
              
              <br />
                  print("Hello, World!")
                </p>
                <Link to="/c">                <button className="btn btn-primary text-warning">
                  Run  example
                </button></Link>

              </div>
         <br />
         <div id="tryit4" className="container">
                <h3>EXAMPLE</h3>
<br />
<span>Multiplication <span className="text-danger">*</span> has higher precedence 
than addition  <span className="text-danger">+</span>, and
   therefor multiplications are evaluated before additions:</span>
                <p className="text-primary">
              print ( <span className="text-danger">   100</span>+
              <span className="text-danger">5</span>*
              <span className="text-danger">3</span>
              
               )
        
                </p>
                <Link to="/c"> <button className="btn btn-primary text-warning">
                  Run  example
                </button></Link>

              </div>
              <br />
              <p>The precedence order is 
                described in the table below, starting with the highest precedence at the top:</p>
         <br />

         
         <div id="datatypes" className="container">
                <Row>
                  <Col sm={4}>
                    <h6>Operator</h6> <br />
                  </Col>
                 

                  <Col sm={6}>
                    <h6> Description</h6>
                  </Col>

                
                  <Col sm={2}>
                    <h6>Try it</h6>
                  </Col>
                </Row>

                <div id="helogrey">
                  <Row>
                    <Col sm={4}>
                     <span className="text-danger">()</span>
                    </Col>

                    <Col sm={6}>
                      <p> 	Parentheses</p>
                    </Col>


                    <Col sm={2}>
                      <Link to="/c">     <button>Try it</button></Link>

                    </Col>
                  </Row>
                </div>
                
                <div id="helowhite">
                  <Row>
                    <Col sm={4}>
                     <span className="text-danger">**</span>
                    </Col>

                    <Col sm={6}>
                      <p> 	Exponentiation</p>
                    </Col>


                    <Col sm={2}>
                    <Link to="/c">     <button>Try it</button></Link>
                    </Col>
                  </Row>
                </div>
                
                <div id="helogrey">
                  <Row>
                    <Col sm={4}>
                     <span className="text-danger">+x  -x  ~x</span>
                    </Col>

                    <Col sm={6}>
                      <p> 	Unary plus, unary minus, and bitwise NOT</p>
                    </Col>


                    <Col sm={2}>
                    <Link to="/c">     <button>Try it</button></Link>
                    </Col>
                  </Row>
                </div>
                
                <div id="helowhite">
                  <Row>
                    <Col sm={4}>
                     <span className="text-danger">*  /  //  %</span>
                    </Col>

                    <Col sm={6}>
                      <p>	Multiplication, division, floor division, and modulus</p>
                    </Col>


                    <Col sm={2}>
                    <Link to="/c">     <button>Try it</button></Link>
                    </Col>
                  </Row>
                </div>

                
                <div id="helogrey">
                  <Row>
                    <Col sm={4}>
                     <span className="text-danger">+  -</span>
                    </Col>

                    <Col sm={6}>
                      <p> 		Addition and subtraction</p>
                    </Col>


                    <Col sm={2}>
                    <Link to="/c">     <button>Try it</button></Link>
                    </Col>
                  </Row>
                </div>
                
                <div id="helowhite">
                  <Row>
                    <Col sm={4}>
                     <span className="text-danger">
                    {dsmaller} {dgreater}
                 
                     
                      
</span>
                    </Col>

                    <Col sm={6}>
                      <p> 		Bitwise left and right shifts</p>
                    </Col>


                    <Col sm={2}>
                    <Link to="/c">     <button>Try it</button></Link>
                    </Col>
                  </Row>
                </div>
                
                <div id="helogrey">
                  <Row>
                    <Col sm={4}>
                     <span className="text-danger">&</span>
                    </Col>

                    <Col sm={6}>
                      <p>	Bitwise AND</p>
                    </Col>


                    <Col sm={2}>
                    <Link to="/c">     <button>Try it</button></Link>
                    </Col>
                  </Row>
                </div>
                
                <div id="helowhite">
                  <Row>
                    <Col sm={4}>
                     <span className="text-danger">|</span>
                    </Col>

                    <Col sm={6}>
                      <p>	Bitwise OR</p>
                    </Col>


                    <Col sm={2}>
                    <Link to="/c">     <button>Try it</button></Link>
                    </Col>
                  </Row>
                </div>
                  
                <div id="helogrey1">
                  <Row>
                    <Col sm={4}>
                     <span className="text-danger">==  !=  {greater} {greater}=  {smaller}
                      {smaller}=  is  is not  in  not in </span>
                    </Col>

                    <Col sm={6}>
                      <p> 		Comparisons, identity, and membership operators</p>
                    </Col>


                    <Col sm={2}>
                    <Link to="/c">     <button>Try it</button></Link>
                    </Col>
                  </Row>
                </div>


                <div id="helowhite">
                  <Row>
                    <Col sm={4}>
                     <span className="text-danger">not </span>
                    </Col>

                    <Col sm={6}>
                      <p> 			Logical NOT</p>
                    </Col>


                    <Col sm={2}>
                    <Link to="/c">     <button>Try it</button></Link>
                    </Col>
                  </Row>
                </div>
                
                <div id="helogrey">
                  <Row>
                    <Col sm={4}>
                     <span className="text-danger">and </span>
                    </Col>

                    <Col sm={6}>
                      <p> 	AND</p>
                    </Col>


                    <Col sm={2}>
                    <Link to="/c">     <button>Try it</button></Link>
                    </Col>
                  </Row>
                </div>
                
                <div id="helowhite">
                  <Row>
                    <Col sm={4}>
                     <span className="text-danger">or </span>
                    </Col>

                    <Col sm={6}>
                      <p>	OR</p>
                    </Col>


                    <Col sm={2}>
                    <Link to="/c">     <button>Try it</button></Link>
                    </Col>
                  </Row>
                </div>

</div>
<br />
<p>If two operators have the same precedence, 
  
  the expression is evaluated from left to right.</p>
            
            <br />

                 <div id="tryit4" className="container">
                <h3>EXAMPLE</h3>
                <br /> 
                
                <span>Addition <span className="text-danger">+</span>
                 and subtraction <span className="text-danger">-</span> has the 
                  same precedence, and therefor we evaluate the expression from left to right:</span>
                <br />
                <p className="text-primary">
                print ( <span className="text-danger">   5</span>+
              <span className="text-danger">4</span>-
              <span className="text-danger">7</span>+
              <span className="text-danger">3</span>
              
               )
                </p>
              </div>
<br />  <div className="container"> <Row>
            <Col>
          <Link to="/bool "><button className="btn btn-primary" id="previous" > Previous</button></Link>  
            </Col>
            <Col>
           
           <Link to="/list"> <button className="btn btn-primary" id="Next" >Next</button></Link>
            </Col>
            
            </Row>    </div> <br />
            </div>



          </Col>
        </Row>
        <br />
        <End/>
      </Fragment>
    );
  }

// export default Operator;
