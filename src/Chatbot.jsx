import React, { Fragment } from "react";
import "./Chatbot.css"
class Chatbot extends React.Component{

  
  componentDidMount(){
    (function(d, m){
        var kommunicateSettings = {"appId":"21424902ab81ff5f3ddef733debb69792",
        "popupWidget":true,"automaticChatOpenOnNavigation":true};
        var s = document.createElement("script"); s.type = "text/javascript";
         s.async = true;
        s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
        var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
        window.kommunicate = m; m._globals = kommunicateSettings;
      })(document, window.kommunicate || {});
  }
  

    render(){
        return(
            <Fragment>
                <div id="guido">hui</div>
            </Fragment>
        )
    }
};
export default Chatbot;