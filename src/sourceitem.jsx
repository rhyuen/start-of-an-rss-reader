import React, {Component} from "react";

class SourceItem extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <ul>
        <li className = "source-item">
          <a href = {this.props.link} target = "_blank">
            {this.props.title}
          </a>
        </li>
        <li className = "source-item">
          {this.props.description}
        </li>
        <li className = "source-item">
          {this.props.pubDate}
        </li>
      </ul>
    );
  }
}

export default SourceItem;
