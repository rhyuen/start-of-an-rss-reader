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
          <div>
            <h4>Left Panel</h4>
            <div>
              <div>Article Count</div>
              <div>Tag Cloud</div>
            </div>
          </div>
          <div>
            Right Panel, Containing Articles.
          </div>
        </div>
      </div>
    );
  }
}

export default BySourceApp;
