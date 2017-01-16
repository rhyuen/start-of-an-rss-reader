import React, {Component} from "react";

class LSHeader extends Component{
  constructor(props){
    super(props);
    this.state = {

    };
  }
  render(){
    return (
      <div>
        <a href = "/">RSS</a>
        <input type = "button" name = "header-download" value = "Download App"/>
      </div>
    );
  }
}

export default LSHeader;
