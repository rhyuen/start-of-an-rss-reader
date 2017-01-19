import React, {Component} from "react";


class SourceItemSocial extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className = "si__social support-text">
        <div className = "si__social__likes">10 Likes</div>
        <div className = "si__social__comments">Add Comment</div>
      </div>
    );
  }
}

export default SourceItemSocial;
