import React, {Component} from "react";
import abbr from "./news-config.js";


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
    var colorblockClassNames = "si__header__colorblock " + abbr[this.props.newsSource].style;

    return (
      <div className = "si__header support-text">
        <div className = {colorblockClassNames}></div>
        <div className = "si__header__category">
          <a href = "/">{this.shortenCategory()}</a>
        </div>
        <div className = "si__header__title">
          <a href = {this.props.link} target = "_blank">{this.props.title}</a>
        </div>
        <div className = "si__header__author">{this.props.author}</div>
      </div>
    );
  }
}

SourceItemHeader.propTypes = {
  title: React.PropTypes.string,
  link: React.PropTypes.string,
  author: React.PropTypes.string,
  category: React.PropTypes.string,
  newsSource: React.PropTypes.string
};

export default SourceItemHeader;
