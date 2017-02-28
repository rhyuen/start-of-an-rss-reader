import React, {Component} from "react";
import Header from "../header.jsx";

class LoginApp extends Component{
  constructor(props){
    super(props);
    this.state = {

    };
  }

  render(){
    return (
        <div className = "root">
          <Header/>
          <div className = "primary-content-container">
            <div>
              {/* <input type = "text" name = "username" placeholder = "Your Username"/>
              <input type = "password" name = "password" placeholder = "Your Password"/>
              <input type = "password" name = "confirm-password" placeholder = "Confirm your password."/>
              <input type = "button" value = "Submit"/> */}
            </div>
          </div>
        </div>
    );
  }
}

export default LoginApp;
