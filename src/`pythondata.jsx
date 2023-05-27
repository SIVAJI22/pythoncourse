
import React ,{Fragment} from "react";
import Nav from "./Nav";
import SideNav from "./sidenav";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";

import Col from "react-bootstrap/Col";
import "./pythonH.css";
import End from "./end";
class Datatypes extends React.Component{
    render(){
        return(
            <Fragment>


<Nav />

<Row>
  <Col>
    <SideNav />
  </Col>
  <Col>


<div id="datacontainer" className="container">

<h2>Python Data Types</h2> <br />


<div className="container"> <Row>
            <Col>
          <Link to="/G"><button className="btn btn-primary" id="previous" > Previous</button></Link>  
            </Col>
            <Col>
           
           <Link to="/N"> <button className="btn btn-primary" id="Next" >Next</button></Link>
            </Col>
            
            </Row>    </div>
<hr />
    <h5>Built-in Data Types</h5>
    <p>In programming, data type is an important concept.</p>
    <p>Variables can store data of different types, and different types can do different things.</p>
    <p>Python has the following data types built-in by default, in these categories:</p>
<br /> <br />

<p>Text Type:  <span className="brown">str</span>	</p>
<p>Numeric Types:	 <span className="brown">int,float.complex</span></p> 
<p>Sequence Types:  <span className="brown">list.tuple/range</span> 	</p>
<p>Mapping Type:	 <span className="brown">dict</span> </p>
<p>Set Types:	  <span className="brown">frozenset</span></p>
<p>Boolean Type:	 <span className="brown">boll</span></p>
<p>Binary Types:	 <span className="brown">bytes, bytearray, memoryview</span></p>
<p>None Type:	 <span className="brown">NoneType</span></p>
<hr />


<br />
<h3>Getting the Data Type</h3>
<br />
<p>You can get the data type of any object by using the  <span className="brown">type()</span> function:</p>



<br />



  
<div id="tryit4" className="container">
              <h3>EXAMPLE</h3>
<span>Print the data type of the variable x:</span>
            <br />  <br />
              <p className="text-primary">

           
   

              x =  <span className="brown">5</span> <br />

              print(type(x))

       
            
 


              </p>
              <button className="btn btn-primary text-warning">
                Try it Yourself
              </button>
            </div>
 <br />

 <hr /> <br />
 <h3>Setting the Data Type</h3>
 <br /> <p>In Python, the data type is set when you assign a value to a variable:</p>


 <br />




 <div id="datatypes" className="container">




<Row>

    
    <Col sm={7}>
    

    <h6 >
Example</h6> <br />

    
    
    </Col>
    <Col sm={3}>
    <h6>	Data Type</h6>

    
    </Col>
    <Col sm={2}>
    
    <h6>Try it</h6>

    </Col>
   
</Row>
<div id="helogrey">
    
<Row>

    
    <Col sm={7}>
    

    
<p >x = "Hello World"</p>
    
    
    </Col>
    <Col sm={3}>

  <p>	str</p>
    
    </Col>
    <Col sm={2}>
    
    
    <button>
        Try it
    </button>
    </Col>
   
</Row>
</div>

<div id="helowhite">
      
<Row>

    
<Col sm={7}>



<p >x = 20</p>


</Col>
<Col sm={3}>

<p>int</p>

</Col>
<Col sm={2}>


<button>
    Try it
</button>
</Col>

</Row>
</div>



<div id="helogrey">
    
<Row>

    
    <Col sm={7}>
    

    
<p >x = 20.5</p>
    
    
    </Col>
    <Col sm={3}>

  <p>	float</p>
    
    </Col>
    <Col sm={2}>
    
    
    <button>
        Try it
    </button>
    </Col>
   
</Row>
</div>

<div id="helowhite">
      
<Row>

    
<Col sm={7}>



<p >x=1j</p>


</Col>
<Col sm={3}>

<p>complex</p>

</Col>
<Col sm={2}>


<button>
    Try it
</button>
</Col>

</Row>
</div>


<div id="helogrey">
    
<Row>

    
    <Col sm={7}>
    

    
<p >x = ["apple", "banana", "cherry"]</p>
    
    
    </Col>
    <Col sm={3}>

  <p>	list</p>
    
    </Col>
    <Col sm={2}>
    
    
    <button>
        Try it
    </button>
    </Col>
   
</Row>
</div>


<div id="helowhite">
      
<Row>

    
<Col sm={7}>



<p >x = ("apple", "banana", "cherry")</p>


</Col>
<Col sm={3}>

<p>Tuple</p>

</Col>
<Col sm={2}>


<button>
    Try it
</button>
</Col>

</Row>
</div>

<div id="helogrey">
    
<Row>

    
    <Col sm={7}>
    

    
<p >x = range(6)</p>
 
    </Col>
    <Col sm={3}>

  <p>	range</p>
  
 
    </Col>
    <Col sm={2}>
    
    
    <button>
        Try it
    </button>
    </Col>
   
</Row>
</div>

<div id="helowhite">
      
<Row>

    
<Col sm={7}>



<p >x = ("name" : "John", "age" : 36)</p>


</Col>
<Col sm={3}>

<p>dict</p>

</Col>
<Col sm={2}>


<button>
    Try it
</button>
</Col>

</Row>
</div>



<div id="helogrey">
    
<Row>

    
    <Col sm={7}>
    

    
<p >x = {"apple", "banana", "cherry"}</p>
 
    </Col>
    <Col sm={3}>

  <p>	set</p>
  
 
    </Col>
    <Col sm={2}>
    
    
    <button>
        Try it
    </button>
    </Col>
   
</Row>
</div>

<div id="helowhite">
      
<Row>

    
<Col sm={7}>



<p >x = frozenset({"apple", "banana", "cherry"})</p>


</Col>
<Col sm={3}>

<p>frozenset</p>

</Col>
<Col sm={2}>


<button>
    Try it
</button>
</Col>

</Row>
</div>

<div id="helogrey">
    
<Row>

    
    <Col sm={7}>
    

    
<p >x = True</p>
 
    </Col>
    <Col sm={3}>

  <p>	bool</p>
  
 
    </Col>
    <Col sm={2}>
    
    
    <button>
        Try it
    </button>
    </Col>
   
</Row>
</div>

<div id="helowhite">
      
<Row>

    
<Col sm={7}>



<p >x = b"Hello"</p>


</Col>
<Col sm={3}>

<p>bytes</p>

</Col>
<Col sm={2}>


<button>
    Try it
</button>
</Col>

</Row>
</div>


<div id="helogrey">
    
<Row>

    
    <Col sm={7}>
    

    
<p >x = bytearray(5)</p>
 
    </Col>
    <Col sm={3}>

  <p>		bytearray
  </p>
  
 
    </Col>
    <Col sm={2}>
    
    
    <button>
        Try it
    </button>
    </Col>
   
</Row>
</div>


<div id="helowhite">
      
<Row>

    
<Col sm={7}>



<p >x = memoryview(bytes(5))</p>


</Col>
<Col sm={3}>

<p>memoryview</p>

</Col>
<Col sm={2}>


<button>
    Try it
</button>
</Col>

</Row>
</div>


<div id="helogrey">
    
<Row>

    
    <Col sm={7}>
    

    
<p >x = None(5)</p>
 
    </Col>
    <Col sm={3}>

  <p>			NoneType
  </p>
  
 
    </Col>
    <Col sm={2}>
    
    
    <button>
        Try it
    </button>
    </Col>
   
</Row>
</div>



 </div>




<br />

<div className="container"> <Row>
            <Col>
          <Link to="/G"><button className="btn btn-primary" id="previous" > Previous</button></Link>  
            </Col>
            <Col>
           
           <Link to="/N"> <button className="btn btn-primary" id="Next" >Next</button></Link>
            </Col>
            
            </Row>    </div>


</div>


  </Col></Row>
  <End/>
  </Fragment>
        )}};
        export default Datatypes;