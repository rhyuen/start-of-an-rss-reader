import React, {Component} from "react";

class RSHeader extends Component{
  constructor(props){
    super(props);
    this.state = {

    };
  }
  render(){
    return (
      <div className = "banner__rightside">
        <input type = "text" name = "header-search" value = "Search"/>
        <input type = "button" name = "header-login" value = "Login"/>
        <input type = "button" name = "header-signup" value = "Signup"/>
      </div>
    );
  }
}

export default RSHeader;
