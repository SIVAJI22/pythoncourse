
import React, { Fragment } from "react"
import "./codpen.css"
import Nav from "./Nav"


import  { useEffect } from 'react';

const Codepen = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://www.jdoodle.com/assets/jdoodle-pym.min.js";
    script.type = "text/javascript";
    document.body.appendChild(script);
  }, []);

  const htmlCode = `
    <div data-pym-src="https://www.jdoodle.com/embed/v0/6ewq"></div>
  `;

  return <div dangerouslySetInnerHTML={{ __html: htmlCode }} />;
};

export default Codepen;





// export const Codepen=()=>{
//    return(
//     <Fragment>

//         <Nav/> <br />
       
// <iframe src="https://trinket.io/embed/python/f5fe77d3e7?start=result" width="100%" height="356" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>
   
   
   
//    <br />
//    <div id="compiler1" className="container">
//    <Row>
//             <Col>
//             <img id="compilerimg" src="./pycompilers.png" alt="" />
//             </Col>
//             <Col>
            
//  <div id="compiler" className="container">


// Here is the list of commonly used Python Compilers:
// <ul>

//    <li>Programiz</li>
//    <li>
// PyDev</li>
//    <li>
// PyCharm</li>
//    <li>
// Sublime Text</li>
//    <li>
// Thonny</li>
//    <li>
// Visual Studio Code</li>
//    <li>Jupyter Notebook</li>
//    <li>Vim</li>
//    <li>Atom</li>
//    <li>Spyder</li>
//    <li>IDLE</li>
//    <li>Eric</li>
//    <li>GNU/Emacs</li>

// </ul>

// </div>

//             </Col>
//         </Row>

 
//         </div>
//     </Fragment>



//    )
// }