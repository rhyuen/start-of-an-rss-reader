import React, {Component} from "react";
import Header from "../header.jsx";

class PopularApp extends Component{
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
            Popular
          </div>
        </div>
    );
  }
}

export default PopularApp;
