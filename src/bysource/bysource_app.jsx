import React, {Component} from "react";
import Header from "../header.jsx";

class BySourceApp extends Component{
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
          BySource
        </div>
      </div>
    );
  }
}

export default BySourceApp;
