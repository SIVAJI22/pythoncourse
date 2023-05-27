import React, { Fragment } from "react";
import "./ends.css"
import Nav from "./Nav";
import { Link } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
class End extends React.Component{
    render(){
        return(
            <Fragment>
               
               <div id="ends" className="container-fluid bg-dark text-light">
               
                <Row>
                    <Col>
                    <img src="./facebook.svg" alt="" />  <a href=""><span>Facebook</span></a>  <br />
                    <img src="./instagram.svg" alt="" /> <a href=""><span>Instagram</span></a>  <br />
                    <img src="./linkedin.svg" alt="" />  <a href=""><span>LinkedIn</span> </a>  <br />
                    <img src="./twiter.svg" alt="" />   <a href=""><span>Twitter</span> </a> <br />
                    <img src="./youtube.svg" alt="" />   <a href=""> <span>YouTube</span> </a><br />
                    </Col>
                    <Col>
                    <h4 className="d-flex">Terms & Policies</h4>
                   <a href="">Terms and Conditions</a> <br />
                   
                   <a href="">Privacy Policy <br /></a>
<a href="">Cookie Policy</a>
                   
                    </Col>
                    <Col>
                    
                



                    
                    <h4>Study Resources </h4>

<h6 className="d-flex">About Python Institute Courses</h6>

<Link to="/about"><a href="">   Why learn Python?</a></Link>

</Col>
<Col>
<h4 className="d-flex">    General-Purpose Programming</h4>

<ul>
    <li><a href="">Python Essentials 1 (Beginner)</a></li>

    <li><a href="">python Essentials 2 (Intermediate)</a></li>
    <li>
<a href="">Python Professional (Advanced)Testing</a></li>
</ul>
 <br />







                    </Col>
                    <Col><img id="pythonend" src="./python3.png" alt="" /></Col>
                </Row>
                
           <div id="copyright">© Copyright Open Education and Development Group 2012-2022. 
           All Rights Reserved.</div>

                </div>


            
            </Fragment>
        )
    }
};
export default End;