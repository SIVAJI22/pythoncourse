import React, { Fragment, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./login.css";
import Nav from "./Nav";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
import Col from "react-bootstrap/Col";
import axios, { Axios } from "axios";
import { useNavigate } from "react-router-dom";
import { error, log } from "console";
import { Ifelse } from "./If else";


export const Login = () => {

 
  const [login, Setlogin] = useState({
    Password: "",
    Email: "",
  });
  const [error, Seterror] = useState(false);
 const home=useNavigate();
  const handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const Value = target.value;

    Setlogin({
       ...login,
       [name]: Value });
  };
  

  const handleclick=()=>{
    
    // if( 
    //   login.Email.length===0||
    //   login.Password.length===0){
    //     Seterror(true)
    //   }
    //   else{
      if(
        login.Email.length===0||
  login.Password.length===0){
  Seterror(true)
  }
  else{
    axios.post("http://localhost:4000/login/log",login)
    .then(function (response){
      console.log(response.data.status)
    
     
    if(response.data.status!=="success"){
      
  alert('Incorrect Password or Email')
      
      }  else if(response.data.status ==="success"){
   
  alert("Welcome back")

  home("/")

   }
   
    })
    .catch(function (error){
      console.log(error);
   
      
    })
    
  }
    
        
    
        
          console.log(login);

 
      

  }
   
 
  
  return (
    <Fragment>
 
      <div className="container">
      <Row>
        <Col sm={10}> <h1 className="fst-italic" id="lets">Lets's Get Started
    </h1></Col>
        <Col sm={1}><img id="letsimg" src="./python5.jpg" alt="" /></Col>
    </Row>
    

      <div id="login" className="container card">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              onChange={handleChange}
              name="Email"
              value={login.Email}
              type="email"
              placeholder="Enter email"
              required
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              onChange={handleChange}
              value={login.Password}
              name="Password"
              type="password"
              placeholder="Password"
              required />
          </Form.Group>
          <Button onClick={handleclick} variant="primary" type="submit">
            Login
          </Button>

           <br /> <br /> <span id="or" className="fw-semibold ">OR</span>
          <br /> <br />
          <button id="googlebtn" className="btn btn-light">
            <div class="nsm7Bb-HzV7m-LgbsSe-MJoBVe"></div>
            <svg id="google"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              class="LgbsSe-Bz112c"
            >
              <g>
                <path
                  fill="#EA4335"
                  d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
                ></path>
                <path
                  fill="#4285F4"
                  d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
                ></path>
                <path
                  fill="#FBBC05"
                  d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
                ></path>
                <path
                  fill="#34A853"
                  d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
                ></path>
                <path fill="none" d="M0 0h48v48H0z"></path>
              </g>
            </svg> {""}
            Sign in with Google
          </button>
          {error ? (
              <Form.Label id="validation1">
                Please fill all the fields
              </Form.Label>
            ) : (
              ""
            )}
        </Form>

      </div>
      <Link to="/Signup">      <h6 id="needaccount" className="text-primary  d-flex">NEED AN ACCOUNT? SIGN UP
</h6></Link>
  </div>

    </Fragment>
  );
};
