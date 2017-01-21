import React, {Component} from "react";


class SourceItemHeader extends Component {
  constructor(props){
    super(props);
    this.shortenCategory = this.shortenCategory.bind(this);
  }

  shortenCategory(){
    // if(this.props.category.split(",").length > 2){
    //   return this.props.category.split(",").slice(0,2).join().push("...");
    // }
    // else{
      return this.props.category;
    // }

  }

  render(){
    return (
      <div className = "si__header support-text">
        <div className = "si__header__category">
          <a href = "/">{this.shortenCategory()}</a>
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
