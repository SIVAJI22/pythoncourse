
import React, { Fragment } from "react";
import "./let learn.css"
import Nav from "./Nav";
import SideNav from "./sidenav";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";
import { PythonH } from "./python home";
class Learn extends React.Component{
    render(){

        return(

            <Fragment>


              
                    
                    <PythonH/>
                    
              
            </Fragment>
        )
    }
}
export default Learn;