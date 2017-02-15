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
        <input className = "header_search"
              type = "text"
              name = "header-search"
              placeholder = "Search"/>
        <a href = "/login"
          className = "header__button"
          name = "header-login" >Login</a>
        <a href = "/signup"
          className = "header__button"
          name = "header-signup" >Signup</a>
      </div>
    );
  }
}

export default RSHeader;
