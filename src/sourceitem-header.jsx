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
    const abbr = {
      "Vancouver Sun": {
        style: "si__source--vancouversun"
      },
      "NY Times": {
        style: "si__source--nytimes"
      },
      "The Guardian": {
        style: "si__source--theguardian"
      },
      "Washington Post": {
        style: "si__source--washingtonpost"
      },
      "BBC": {
        style: "si__source--bbc"
      },
      "Globe and Mail": {
        style: "si__source--globeandmail"
      },
      "CBC": {
        style: "si__source--cbc"
      },
      "The Intercept": {
        style: "si__source--theintercept"
      },
      "The Economist": {
        style: "si__source--economist"
      },
      "New Yorker": {
        style: "si__source--newyorker"
      }
    };

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
