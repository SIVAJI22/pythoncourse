import React, { Fragment, isValidElement, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./Signup.css";
import Nav from "./Nav";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
import Col from "react-bootstrap/Col";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { setFlagsFromString } from "v8";
import { FormControl } from "react-bootstrap";
import SimpleReactValidator from 'simple-react-validator';
import { useRef } from "react";
import { match } from "assert";
import { error } from "console";
export const Singup = () => {
  const sign = useNavigate();

  const [signup, Setsignup] = useState({
    Name: "",
    Email: "",
    Password: "",
    Mobile: "",
  });
  const [error, Seterror] = useState(false);
    const [validation, setValidation] = useState({ 
      Name: '',
     Mobile:"",
      Email: '',
      password: '',
    
    });
  
  
    const handleSubmit = (e) => {
      e.preventDefault();
      let errors = validation;
  
      //first Name validation
      if (!signup.Name.trim()) {
        errors.Name = 'First name is required';
      } else {
        errors.Name = '';
      }
      //last Name validation
      // if (!inputValues.lName.trim()) {
      //   errors.lName = 'Last name is required';
      // } else {
      //   errors.lName = '';
      // }
  
      // email validation
      const emailCond =
        "/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/";
      if (!signup.Email.trim()) {
        errors.Email = 'Email is required';
      } else if (!signup.Email.match(emailCond)) {
        errors.Email = 'Please enter a valid email address';
      } else {
        errors.Email = '';
      }
  
      const MobileCond =
    "^[0-9]{10}$";;
      if (!signup.Mobile.trim()) {
        errors.Mobile = 'Mobile  is required';
      } else if (!signup.Mobile.match(MobileCond)) {
        errors.Mobile = 'Please enter a Mobile Number';
      } else {
        errors.Mobile = '';
      }
  
      //password validation
      const cond1 = '/^(?=.*[a-z]).{6,20}$/';
      const cond2 = '/^(?=.*[A-Z]).{6,20}$/';
      const cond3 = '/^(?=.*[0-9]).{6,20}$/';
      const Password = signup.Password;
      if (!Password) {
        errors.password = 'password is required';
      } else if (Password.length < 6) {
        errors.Password = 'Password must be longer than 6 characters';
      } else if (Password.length >= 20) {
        errors.password = 'Password must shorter than 20 characters';
      } else if (!Password.match(cond1)) {
        errors.password = 'Password must contain at least one lowercase';
      } else if (!Password.match(cond2)) {
        errors.password = 'Password must contain at least one capital letter';
      } else if (!Password.match(cond3)) {
        errors.Password = 'Password must contain at least a number';
      }
     

       else  {
        errors.Password = '';
      } 
      return setValidation(errors);
      

      };

  
    
    
      // //matchPassword validation
      // if (!inputValues.confirmPassword) {
      //   errors.confirmPassword = 'Password confirmation is required';
      // } else if (inputValues.confirmPassword !== inputValues.Password) {
      //   errors.confirmPassword = 'Password does not match confirmation password';
      // } else {
      //   errors.password = '';
      // }





  // const [validEmail, SetvalidateEmail] = useState(false);
  // const [mobile, SetMobile] = useState(false);



  const handlechange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    Setsignup({
      ...signup,
      [name]: value,
    });
  };

  // const Mobilevalidate = () => {
  //   var Mobileregex = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/  ;
  //   if (signup.Mobile.match(Mobileregex)) { 
  //     isValidElement();
  //     return true;
  //   } else {
  //     SetMobile(true);

  //     return false;
  //   }
  // };

  // const ValidateEmail = (input) => {
  //   var validRegex =
  //     /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  //   if (signup.Email.match(validRegex)) {
  //     isValidElement();

  //     return true;
  //   } else {
  //     SetvalidateEmail(true);

  //     return false;
  //   }
  // };


//   const handleform = (e) => {
//     e.preventDefault();
//  var nonvalid= !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
// var   validRegex =
// /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

// var Mobileregex =/^(\d{3})[- ]?(\d{3})[- ]?(\d{4})$/;
// var nonmobile= !/^(\d{3})[- ]?(\d{3})[- ]?(\d{4})$/;

//        if(    signup.Name.Length ===""||
//         signup.Mobile.match(Mobileregex)||
//         signup.Email.match(validRegex)||
//           signup.Password.length === ""){
            
//             handleclick()

//           }
          
//    else if(signup.Email.match(nonvalid))
//         {
//           Seterror(true)}
          
// //         }

// //         else if(signup.Mobile.Length===0||
// //           signup.
// //           ){
// // SetMobile(true)
// //         }
// else if(signup.Mobile.match(nonmobile)){
//   SetMobile(true)
// }
       

//           // else if( signup.Name.Length ===0||
          //   signup.Mobile.Length ===0 ||
          //   signup.Email.Length ===0||
          //     signup.Password.length === 0){
          //       Seterror(true)
          //     }

//       else if(        signup.Email !=(validRegex)  ){
//  SetvalidateEmail(true);
  
//  return false;
//       }
//       else if (  signup.Mobile !=(Mobileregex)) { 
//         SetMobile(true);
          
//         return false;
//       }
  




  

  const handleclick = () => {

    if( signup.Name.Length==0||
      signup.Mobile.Length ===0 ||
      signup.Email.Length ===0||
      signup.Password.length === 0){
        Seterror(true)
      }
      else{
        axios.post("http://localhost:4000/login/signup", signup)
        .then(function (response) {
          console.log(response.data.status);
          if (response.data.status === "user register successfully") {
            alert("user register successfully");
            sign("/");
          } else {
            console.log(response);
            alert("user already exist");
          }
        })
        .catch(function (error) {
          console.log(error);
        });
      console.log(signup);
      
      
      }
      

}






  // <form  onSubmit={handleSubmit((data) => console.log(data))}>
  //   <input {...register('firstName')} />
  //   <input {...register('lastName', { required: true })} />
  //   {errors.lastName && <p>Last name is required.</p>}
  //   <input {...register('age', { pattern: /\d+/ })} />
  //   {errors.age && <p>Please enter number for age.</p>}
  //   <input type="submit" />
  // </form>


  // <Input
  //   name="name"
  //   value={companyInformation.name}
  //   onChange={handleInputChange}
  //   onBlur={()=>simpleValidator.current.showMessageFor('name')} />
  // {simpleValidator.current.message('name', companyInformation.name, 'required')}


  return (
    <Fragment>
      {/* 
<form  onSubmit={handleSubmit((data) => console.log(data))}>
      <input {...register('firstName')} />
      <input {...register('lastName', { required: true })} />
      {errors.lastName && <p>Last name is required.</p>}
      <input {...register('age', { pattern: /\d+/ })} />
      {errors.age && <p>Please enter number for age.</p>}
      <input type="submit" />
    </form> */}

      <div className="container">
        <Row>
          <Col sm={10}>
            {" "}
            <h1 className="fst-italic" id="lets">
              Lets's Get Started
            </h1>
          </Col>
          <Col sm={1}>
            <img id="letsimg" src="./python5.jpg" alt="" />
          </Col>
        </Row>

        <div id="Signup" className="container card">
          <Form  onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicname">
              <Form.Label>Your Name</Form.Label>
              <Form.Control

                onChange={handlechange}
                name="Name"
                value={signup.Name}
                type="text"
                placeholder="Enter Name"
                required 
              /> 
                  {validation.Name && <p id="validation"  >{validation.Name}</p>}
            {/* {validation.Name && console.log(validation)} */}
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicMobile">
              <Form.Label>Mobile Number</Form.Label>
              <Form.Control
         
                onChange={ handlechange}
                name="Mobile"
                value={signup.Mobile}
                typeof="Number"
                type="Number"
              
                pattern="[1-9]{1}[0-9]{9}"
                placeholder="Enter Mobile Number"
                required   /> {validation.Mobile && <p id="validation"  >{validation.Mobile}</p>}
              {/* {mobile ? (
                <div id="mobile">Mobile Number should contain 10 numbers!</div>
              ) : (
                ""
              )} */}
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
       
                onChange={handlechange}
                name="Email"
                value={signup.Email}
                type="email"
                placeholder="Enter email"
                required 
              />
                  {validation.Email && <p  id="validation"  >{validation.Email}</p>}
              {/* {validEmail ? <div id="invalid">Invalid Email address!</div> : ""} */}

              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                onChange={handlechange}
                value={signup.Password}
                name="Password"
                type="password"
                max={6}
                placeholder="Password"
                required 
              />
               {validation.Password && <p  id="validation"  >{validation.password}</p>}
               </Form.Group>
            <Button onClick= {handleclick} variant="primary" type="submit"   >
              Login
            </Button>
            <br />{" "}
            <span id="or1" className="fw-semibold ">
              OR
            </span>
            <br /> <br />
            <button id="googlebtn" className="btn btn-light">
              <div class="nsm7Bb-HzV7m-LgbsSe-MJoBVe"></div>
              <svg
                id="google"
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
              </svg>{" "}
              {""}
              Sign in with Google
            </button>
            {error ? (
              <Form.Label id="validation">
                Please fill all the fields
              </Form.Label>
            ) : (
              ""
            )}
      </Form>
        </div>
        <Link to="/login">
          {" "}
          <h6 id="needaccount" className="text-primary  d-flex">
            HAVE AN ACCOUNT? LOG IN
          </h6>
        </Link>
      </div>
    </Fragment>
  );
};
