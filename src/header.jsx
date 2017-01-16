import React, {Component} from "react";
import LSHeader from "./lsheader.jsx";
import RSHeader from "./rsheader.jsx";


class Header extends Component{
  constructor(props){
    super(props);
    this.state = {

    };
  }

  render(){
    return (
      <div className = "header">
        <LSHeader/>
        <RSHeader/>
      </div>
    );
  }
}

export default Header;
