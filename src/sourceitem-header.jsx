import React, {Component} from "react";


class SourceItemHeader extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className = "si__header support-text">
        <div className = "si__header__category">
          <a href = "/">{this.props.category}</a>
        </div>
        <div className = "si__header__title">
          <a href = {this.props.link}>{this.props.title}</a>
        </div>
        <div className = "si__header__author">{this.props.author}</div>
      </div>
    );
  }
}

export default SourceItemHeader;
