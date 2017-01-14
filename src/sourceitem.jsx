import React, {Component} from "react";

class SourceItem extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <ul>
        <li>{this.props.title}</li>
        <li>{this.props.link}</li>
        <li>{this.props.pubDate}</li>
      </ul>
    );
  }
}

export default SourceItem;
