import React, { Fragment } from "react";
import Nav from "./Nav";
import SideNav from "./sidenav";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
import Col from "react-bootstrap/Col";
import "./pythonH.css";
import End from "./end";
class Boolean extends React.Component {
    render() {
        return (
            <Fragment>
                <Nav />

                <Row>
                    <Col>
                        <SideNav />
                    </Col>
                    <Col id="scroll">

                        <div id="Boolean" className="container">

                            <h3>Python Booleans</h3>
                            <br />
                            <div className="container"> <Row>
            <Col>
          <Link to="/String "><button className="btn btn-primary" id="previous" > Previous</button></Link>  
            </Col>
            <Col>
           
           <Link to="/opera"> <button className="btn btn-primary" id="Next" >Next</button></Link>
            </Col>
            
            </Row>    </div>
                            <hr />

                            <br /><p>Booleans represent one of two values: <span className="brown">True</span> or
                                <span className="brown">False</span>  .</p>
                            <br />
                            <h5>Boolean Values</h5> <br />
                            <p>In programming you often need to know if an expression is    <span className="brown">True</span> or
                                <span className="brown">False</span>.</p>
                            <br />
                            <p>You can evaluate any expression in Python, and get one of two answers, <span className="brown">True</span> or
                                <span className="brown">False</span>.</p>
                            <br />
                            <p>When you compare two values, the expression is evaluated and Python returns the Boolean answer:</p>


                            <br />

                            <div id="tryit4" className="container">
                                <h3>EXAMPLE</h3>
                                <br />

                                <p className="text-primary">

                                    print(<span className="text-danger">10> 9</span>) <br />
                                    print(<span className="text-danger">10==9</span> )<br />
                                    print(<span className="text-danger">10 9</span>) <br />


                                </p>
                                <Link to="/c"><button className="btn btn-primary text-warning">
                Try it Yourself
              </button></Link> 
                            </div>

                            <br />
                            <p>When you run a condition in an if statement, Python returns  <span className="brown">True</span> or
                                <span className="brown">False</span>:</p>

                            <br />

                            <div id="tryit4" className="container">
                                <h3>EXAMPLE</h3>
                                <br />
                                <span>Print a message based on whether the condition is  <span className="brown">True</span> or
                                    <span className="brown">False</span>: </span>
                                <p className="text-primary">

                                    a=<span className="text-danger">200</span>) <br />
                                    b=<span className="text-danger">33</span> )<br />
                    if b > a:
                                    print(      <span className="brown"> "b is greater than a"</span>  ) <br />
                                    else:
                                    print(      <span className="brown">"b is not greater than a"</span>  )
                                </p>
                                <Link to="/c"><button className="btn btn-primary text-warning">
                Try it Yourself
              </button></Link> 
                            </div>
                            <br />
                            <hr />
                            <h4>Evaluate Values and Variables</h4>
                            <br />
                            <p>The   <span className="text-danger">bool()</span>  function allows you to evaluate any value, and give you
                                <span className="text-danger">True</span> or
                                <span className="brown">False</span> in return,</p>


                            <br />

                            <div id="tryit4" className="container">
                                <h3>EXAMPLE</h3>
                                <br />
                                <span>Evaluate a string and a number:</span>
                                <p className="text-primary">


                                    print( bool(     <span className="brown"> "Hello"</span> ) ) <br />

                                    print( bool(     <span className="text-danger">15</span>)  )
                                </p>
                                <Link to="/c"><button className="btn btn-primary text-warning">
                Try it Yourself
              </button></Link> 
                            </div>



                            <br />

                            <div id="tryit4" className="container">
                                <h3>EXAMPLE</h3>
                                <br />
                                <span>Evaluate two variables:</span>
                                <p className="text-primary">


                                    x=  <span className="brown"> "Hello"</span>  <br />

                                    y= <span className="text-danger">15</span> <br />


                                    print(bool(x)) <br />
                                    print(bool(y))
                                </p>
                                <Link to="/c"><button className="btn btn-primary text-warning">
                Try it Yourself
              </button></Link> 
                            </div>
                            <hr />
                            <br />
                            <h4>Most Values are True</h4>
                            <br />
                            <p>Almost any value is evaluated to   <span className="text-danger">True</span> if it has some sort of content.</p>
                            <br />
                            <p>Any string is  <span className="text-danger">True</span>,except empty strings.</p>
                            <p>Any number is   <span className="text-danger">True</span>, except 0.</p> <br />
                            <p>Any list, tuple, set, and dictionary are  <span className="text-danger">True</span>, except empty ones.</p>

                            <br />


                            <div id="tryit4" className="container">
                                <h3>EXAMPLE</h3>
                                <br />
                                <span>The following will return True::</span>
                                <p className="text-primary">


                                    bool(  <span className="brown"> "abc"</span> )  <br />

                                    bool(<span className="text-danger">123</span>)   <br />
                                    bool([   <span className="brown">"apple", "cherry", "banana"</span>]) <br />

                                </p>
                                <Link to="/c"><button className="btn btn-primary text-warning">
                Try it Yourself
              </button></Link> 
                            </div>
                            <br />
                            <hr />
                            <br />
                            <h5>Some Values are False</h5>
                            <br />
                            <p>In fact, there are not many values that evaluate to (<span className="text-danger">False</span>, except empty values, such as
                                <span className="text-danger">()</span>
                                <span className="text-danger">[]</span>,
                                <span className="text-danger">{ }</span>
                                <span className="text-danger">""</span>,
                                the number    <span className="text-danger">0</span>,and the value     <span className="text-danger">None</span>,.
                                And of course the value False evaluates to     <span className="text-danger">False</span>.</p>
                            <br />

                            <div id="tryit4" className="container">
                                <h3>EXAMPLE</h3>
                                <br />
                                <span>The following will return False:</span>
                                <p className="text-primary">

                                    bool(False)
                                    bool(None)
                                    bool(<span className="text-danger">0</span>)   <br />
                                    bool(<span className="brown">""</span>)   <br />
                                    bool(())
                                    bool([])
                                    bool({ })

                                    bool(<span className="text-danger">123</span>)   <br />
                                    <br />

                                </p>
                                <Link to="/c"><button className="btn btn-primary text-warning">
                Try it Yourself
              </button></Link> 
                            </div>
                            <br />
                            <p>One more value, or object in this case, evaluates to  <span className="text-danger">False</span>, and that
                                is if you have an object that is made from a class with a  <span className="text-danger">  __len__ </span>
                                function that returns<span className="text-danger">0</span> or
                                <span className="text-danger">False</span>:</p>
                            <br />


                            <div id="tryit4" className="container">
                                <h3>EXAMPLE</h3>
                                <br />
                                <span>The following will return True::</span>
                                <p className="text-primary">

                                    class myclass(): <br />
                                  def __len__(self): <br />
                                    return {""}
                                    <span className="text-danger">0</span><br />
<br />
                                    myobj = myclass() <br />
                                    print(bool(myobj)) <br />
                                </p>
                                <Link to="/c"><button className="btn btn-primary text-warning">
                Try it Yourself
              </button></Link> 
                            </div>
                            <br /><hr /><br />
                            <h4>Functions can Return a Boolean</h4>
                            <br /> <p>You can create functions that returns a Boolean Value:</p>
                            <br />
                            


                            <div id="tryit4" className="container">
                                <h3>EXAMPLE</h3>
                                <br />
                                <span>Print the answer of a function:</span>
                                <p className="text-primary">
                                    def myFunction() : <br />
                                    return True<br />

                                    print(myFunction())<br />
                                </p>
                                <Link to="/c"><button className="btn btn-primary text-warning">
                Try it Yourself
              </button></Link> 
                            </div>
                            <br /><p>You can execute code based on the Boolean answer of a function:</p>
                            <br />



                            <div id="tryit4" className="container">
                                <h3>EXAMPLE</h3>
                                <br />
                                <span>Print "YES!" if the function returns True, otherwise print "NO!":</span>
                                <p className="text-primary">
                                    def myFunction() :
                                    return True

                                    if myFunction():
                                    print(  <span className="brown">   "YES!"</span>   )
                                    else :
                                    print(  <span className="brown">     "NO!"</span>  )
                                </p>
                                <Link to="/c"><button className="btn btn-primary text-warning">
                Try it Yourself
              </button></Link> 
                            </div>
                            <br />
                            <p>Python also has many built-in functions that return a boolean value, like the
                                <span className="text-danger"> isinstance()</span>  function, which can be used to determine if an object is of a certain data type:</p>




<br />

<div id="tryit4" className="container">
                                <h3>EXAMPLE</h3>
                                <br />
                                <span>Check if an object is an integer or not:</span>
                                <p className="text-primary">
                                x =   <span className="text-danger">   200</span> <br />
print(isinstance(x, int))
                                 
                                </p>
                                <Link to="/c"><button className="btn btn-primary text-warning">
                Try it Yourself
              </button></Link> 
                            </div>


<br />
<div className="container"> <Row>
            <Col>
          <Link to="/String "><button className="btn btn-primary" id="previous" > Previous</button></Link>  
            </Col>
            <Col>
           
           <Link to="/opera"> <button className="btn btn-primary" id="Next" >Next</button></Link>
            </Col>
            
            </Row>    </div>
                        </div>

                    </Col>
                </Row>
                <End/>
            </Fragment>)
    }
};
export default Boolean;