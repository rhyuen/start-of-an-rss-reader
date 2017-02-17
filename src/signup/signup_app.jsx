import React, {Component} from "react";
import Header from "../header.jsx";

class SignupApp extends Component{
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
            Signup
          </div>
        </div>
    );
  }
}

export default SignupApp;
