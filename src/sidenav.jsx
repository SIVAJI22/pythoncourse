

import React, { Fragment } from "react";
import "./SideNav.css"
import Nav from "./Nav";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";
class SideNav extends React.Component{

    render(){
        return(
            <Fragment>
<Nav/> <br /> <br />
<nav   class="navbar navbar-expand-lg bg-body-tertiary">
  <div id="toggle" class="container-fluid">
    <a class="navbar-brand" href="#"></a>
   <div className="toggle">
    <button  class="navbar-toggler"
     type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button></div>
    <div  class="collapse navbar-collapse" id="navbarScroll">
      <ul   class="navbar-nav me-5 my-4 my-lg-0 navbar-nav-scroll"
       >
        <li class="nav-item">
            

<div id="navbar"   >

<Row>
    <Col> 




<div id="pythonscroll" className="pythonscroll fst-italic  "> 

    <h5 id="tutorial" >Python Tutorial</h5>
   <Link to="/code"> <a typeof="button" className=" btn btn" href=""> Python Home</a></Link>

<Link to='/intro'><a href="">Python Intro</a></Link>
<Link to="/start"><a href="">Python Get Started</a></Link>
<Link  to="/syntax"><a href="">Python Syntax</a></Link>
<Link to="/comment"><a href="">Python Comments</a></Link>




          <div class="dropdown">
  <a  class=" dropdown" type="button" data-bs-toggle="dropdown" aria-expanded="false">  <Link to="/V1"><a href="">Python Variables</a></Link>
  </a>
  <ul class="dropdown-menu">
  <Link to="/V1"><a id="variable" href="">Python Variables</a></Link>
   <Link to="/vname"> <li><a class="dropdown-item" href="#">Variable Names</a></li></Link>
    
    
    
    <Link to='/M'>    <li><a class="dropdown-item" href="#">Assign Multiple values</a></li></Link>
<Link  to="/out"> <li><a class="dropdown-item" href="#">Output Variable</a></li></Link>
  <Link to="/G">  <li><a class="dropdown-item" href="#">Global Variable</a></li></Link> 
  
    <li><a class="dropdown-item" href="#"> Variable  exercise</a></li>
  </ul>
</div>


<Link to="/D"><a href="">Python Data Types</a></Link>
<Link to="/N"><a href="">Python Numbers</a></Link>
<Link to="/Cast"><a href="">Python Casting</a></Link>
<Link to="/String"><a href="">Python Strings</a></Link>
<Link to="/bool"><a href="">Python Booleans</a></Link>
<Link to="/opera"><a href="">
Python Operators</a></Link>
<Link to="/list"><a href="">Python Lists</a></Link>
<Link to="/Tuple">
<a href="">Python Tuples</a>

</Link>

<Link to="/Sets"><a href="">
Python Sets</a></Link>
<Link to="/Dict"><a href="">Python Dictionaries</a></Link>
<Link to="/if"><a href="">

Python If...Else</a></Link>

<Link to="/while"><a href="">Python While Loops</a></Link>
<Link to="/for"><a href="">
Python For Loops</a></Link>
<Link to="/func"><a href="">
Python Functions</a></Link>
<Link to="/lambda"><a href="">Python Lambda</a></Link>
<Link to="/array"><a href="">Python Arrays</a></Link>
<Link to="/class"><a href="">Python Classes/Objects</a></Link>
<Link to="/inheritance"><a href="">Python Inheritance</a></Link>
<Link to="/iterator"><a href="">Python Iterators</a></Link>
<Link to="/poly"><a href="">Python Polymorphism</a></Link>
<Link to="/scope"><a href="">Python Scope</a> </Link>
<Link to="/module"><a href="">Python Modules</a></Link>
<Link to="/Date"><a href="">
Python Dates</a></Link>
{/* 
<a href="">
Python Math</a>
<a href=""></a>

<a href="">Python JSON</a>
<a href="">
Python RegEx</a>
<a href="">
Python PIP</a>

<a href="">Python Try...Except</a>
<a href="">
Python User Input</a>
<a href="">Python String Formatting</a>
<a href="">File Handling</a>
<a href="">Python File Handling</a>
<a href="">Python Read Files</a>
<a href="">Python Write/Create Files</a>
<a href="">Python Delete Files</a>
<a href="">Python Modules</a>
<a href="">NumPy Tutorial</a>
<a href="">Pandas Tutorial</a>
<a href="">
SciPy Tutorial</a>
<a href="">
Django Tutorial</a>
<a href="">Python Matplotlib</a>
<a href=""></a>

















Matplotlib Intro
Matplotlib Get Started
Matplotlib Pyplot
Matplotlib Plotting
Matplotlib Markers
Matplotlib Line
Matplotlib Labels
Matplotlib Grid
Matplotlib Subplot
Matplotlib Scatter
Matplotlib Bars
Matplotlib Histograms
Matplotlib Pie Charts

Machine Learning
Getting Started
Mean Median Mode
Standard Deviation
Percentile
Data Distribution
Normal Data Distribution
Scatter Plot
Linear Regression
Polynomial Regression
Multiple Regression
Scale
Train/Test
Decision Tree
Confusion Matrix
Hierarchical Clustering
Logistic Regression
Grid Search
Categorical Data
K-means
Bootstrap Aggregation
Cross Validation
AUC - ROC Curve
K-nearest neighbors

Python MySQL
MySQL Get Started
MySQL Create Database
MySQL Create Table
MySQL Insert
MySQL Select
MySQL Where
MySQL Order By
MySQL Delete
MySQL Drop Table
MySQL Update
MySQL Limit
MySQL Join

Python MongoDB
MongoDB Get Started
MongoDB Create Database
MongoDB Create Collection
MongoDB Insert
MongoDB Find
MongoDB Query
MongoDB Sort
MongoDB Delete
MongoDB Drop Collection
MongoDB Update
MongoDB Limit

Python Reference
Python Overview
Python Built-in Functions
Python String Methods
Python List Methods
Python Dictionary Methods
Python Tuple Methods
Python Set Methods
Python File Methods
Python Keywords
Python Exceptions
Python Glossary

Module Reference
Random Module
Requests Module
Statistics Module
Math Module
cMath Module

Python How To
Remove List Duplicates
Reverse a String
Add Two Numbers

Python Examples
Python Examples
Python Compiler
Python Exercises
Python Quiz
Python Certificate



Python Tutorial
Learn Python
Python is a popular programming language.

Python can be used on a server to create web applications.




























 */}







</div>

    
    </Col>
</Row>
</div>


        </li>
      
      </ul>

    </div>
  </div>
</nav>













            </Fragment>
        )
    }
};
export default SideNav;