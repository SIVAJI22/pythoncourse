import React, { Fragment } from "react";
import "./home.css"
import Nav from "./Nav";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import End from "./end";
import { Link } from "react-router-dom";
class Home extends React.Component{
    render(){
        return(
      
            <Fragment>    
          
              
                  <Nav/>
             <br /> <br />
             <div id="homebody" className="container-fluid">
         

             <Row>


                <Col sm={8}>

                
                <div id="learn" className="container"><h1>Are You Learning Python, But You’re <br /> Not Sure 
             Where to Start and What the  <br /> “Roadmap” Looks Like?</h1>
      <br />      
            <h5 id="go" className="fw-light fs-3 text-dark">Go From Basic to Intermediate <br />
Python Knowledge</h5> 
<Link  to="/Lets Learn">
    <button id="learnbutton" className="btn btn-primary text-warning">Let's Learn</button></Link>

                </div>
                
                </Col>

                
                <Col sm={4}>
                
                <img id="basiclogo" src= "./python-basics-wide2.webp" alt="" />
               
                
                </Col>
             </Row>
            <br /> 
 <br /> <br />
<div id="paras">
{/* 
    <p>Learning how to program or getting started with a new language isn’t easy:</p>
    <p>I’m sure your head is spinning from all the new concepts you need to ingest, and the influx of information can feel overwhelming at times.</p>
    <p>But first of all, congratulations for choosing Python and welcome to the community! 😊 Python is a fantastic language to learn and work with.</p>
    <p>Currently, it is also one of the most popular—and best paid—programming languages world-wide.

</p>
    <p>Python is also my favorite programming language by far and I’d love to help you on your Python journey.</p>
    <p>Have a look at our Python tutorials and courses below and see what’s right for you.</p>
    <p>— Dan Bader (“Chief Python Nut” at Real Python)</p>
             */}

</div>
  <div id="ourpython" className="container">

    <h3>Our Python Courses and Books for Beginners:</h3>
    <p className="fst-italic">Besides working with our free tutorials and guides you can also check out our professional Python books and courses.
         They will help you speed up your learning curve so you can get better, faster:</p>
         <h4 className="intro">Python Basics:
A Practical Introduction to Python 3</h4> <br /> <br />
<Row>
    <Col sm={4}><img id="book" src="./book.webp" alt="" /></Col>
    <Col> <p className=" fw-semibold fs-5" >Go from beginner to intermediate in Python with
    this complete curriculum, up-to-date for Python 3.9.</p>
<p className=" fw-semibold fs-5">
Python Basics includes exercises, interactive quizzes, and sample projects, so you’ll always know what to 
focus on next in order to build a strong Python foundation:</p>
<a href="https://www.amazon.in/Python-Basics-Practical-Introduction/dp/1775093328/ref=sr_1_6?crid=1ZZFI4Y12IQDC&keywords=python+basic&qid=1683785473&sprefix=python+basic%2Caps%2C221&sr=8-6">

<button className="btn btn-primary text-warning"> Explore</button></a>


</Col>
</Row>

  </div> <br />
  </div>

<End/>

</Fragment>
         
        )
    }
};
export default Home;