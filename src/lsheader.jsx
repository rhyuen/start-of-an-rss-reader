import React, {Component} from "react";

class LSHeader extends Component{
  constructor(props){
    super(props);
    this.state = {

    };
  }
  render(){
    return (
      <div className = "banner__leftside">
        <a className = "header__button header__button--root" href = "/">YARR</a>
        <a className = "header__button" href = "/popular">Popular</a>
        <a className = "header__button" href = "/bysource">By Source</a>
      </div>
    );
  }
}

export default LSHeader;
