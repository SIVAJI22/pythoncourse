import React, { Fragment } from "react";
import SideNav from "./sidenav";
import Nav from "./Nav";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./pythonH.css";
import End from "./end";
import { Link } from "react-router-dom";
class Global extends React.Component{
    render(){
        return(
            <Fragment>


<Nav />

<Row>
  <Col>
    <SideNav />
  </Col>
  <Col>
  <div id="Global" className=" container">

    <h2>Python - Global Variables</h2>

<br /> 

<div className="container"> <Row>
            <Col>
          <Link to="/out"><button className="btn btn-primary" id="previous" > Previous</button></Link>  
            </Col>
            <Col>
           
           <Link to="/D"> <button className="btn btn-primary" id="Next" >Next</button></Link>
            </Col>
            
            </Row>    </div>

<hr />
 <h5>Global Variables</h5> <br />
 <p>Variables that are created outside of a function 
    (as in all of the examples above) are known as global variables.</p>

<p>Global variables can be used by everyone, both inside of functions and outside.</p>

<br />
<div id="tryit4" className="container">
              <h3>EXAMPLE</h3>

              <p className="text-primary">

            
            
              x =  <span className="brown">"awesome"</span> 
              
def myfunc():
               <br />
print( <span className="brown">"Python  is"</span> + x )     <br />
myfunc()

              </p>
              <Link to="/c"><button className="btn btn-primary text-warning">
                Try it Yourself
              </button></Link> 
            </div>


 <br />
<p>If you create a variable with the same name inside a function, this variable will be local, and can only be used inside the function. The global variable with the same name will remain as it was, global and with the original value.

</p>
            <br />
 


  
<div id="tryit4" className="container">
              <h3>EXAMPLE</h3>
<span>Create a variable inside a function, with the same name as the global variable</span>
            <br />  <br />
              <p className="text-primary">

           
              
              x =  <span className="brown">"awesome"</span> <br />



              def myfunc():
  x =   <span className="brown"> "fantastic"</span> <br />
  print( <span className="brown">"Python is"</span> + x )  <br />

myfunc() <br />
<br />
print( <span className="brown">"Python  is"</span> + x ) 

               <br />
 


              </p>
              <Link to="/c"><button className="btn btn-primary text-warning">
                Try it Yourself
              </button></Link> 
            </div>
 <br />

 <h5>The global Keyword</h5>
 <p>Normally, when you create a variable inside a function, that variable is local, and can only be used inside that function</p>
<p>To create a global variable inside a function, you can use the <span className="brown">global</span>  keyword.</p>


<div id="tryit4" className="container">
              <h3>EXAMPLE</h3>
<span>If you use the  <span className="brown">global</span> keyword, the variable belongs to the global scope</span> <br />
            <br /> 
             <p className="text-primary">

           
        



              def myfunc(): <br />
              global x

  x =   <span className="brown"> "fantastic"</span> <br />
  

myfunc() <br />
<br />
print( <span className="brown">"Python  is"</span> + x ) 
               <br />
 


              </p>
              <Link to="/c"><button className="btn btn-primary text-warning">
                Try it Yourself
              </button></Link> 
            </div> <br />
<p>Also, use the <span className="brown">global</span> keyword if you want to change a global variable inside a function.</p>

          
<div id="tryit4" className="container">
              <h3>EXAMPLE</h3>
<span>To change the value of a global variable inside a function, refer to the variable by using the<span className="brown">global</span> keyword:</span>
           <br /> 
           <br />
             <p className="text-primary">

           
        
  x =   <span className="brown"> "awesome"</span> <br />
          


              def myfunc(): <br />
              global x

  x =   <span className="brown"> "fantastic"</span> <br />
  

myfunc() <br />

print( <span className="brown">"Python  is"</span> + x ) 

               <br />
 


              </p>
              <Link to="/c"><button className="btn btn-primary text-warning">
                Try it Yourself
              </button></Link> 
            </div>
          
          
         
  
  <br />
  
<div className="container"> <Row>
            <Col>
          <Link to="/out"><button className="btn btn-primary" id="previous" > Previous</button></Link>  
            </Col>
            <Col>
           
           <Link to="/D"> <button className="btn btn-primary" id="Next" >Next</button></Link>
            </Col>
            
            </Row>    </div>
  </div>







  </Col></Row>
  
  <End/></Fragment>
        )}};
export default Global;