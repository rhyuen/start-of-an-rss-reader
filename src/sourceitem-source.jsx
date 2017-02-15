import React, {Component} from "react";
import abbr from "./news-config.js";


class SourceItemSource extends Component {
  constructor(props){
    super(props);
  }

  render(){    
    var circleClassNames = "si__source__icon__circle " + abbr[this.props.newsSource].style;

    return (
      <div className = "si__source support-text">
        <div className ="si__source__icon">
          <div className = {circleClassNames}>
            <div className = "content">
              <span>
                {abbr[this.props.newsSource].letter}
              </span>
            </div>
          </div>
        </div>
        <div className ="si__source__details">
          <div className = "si__source__details__content">
            <div className = "si__source__details__content__category">
              FROM <a href = "/">WORLD NEWS</a>
            </div>
            <div className = "si__source__details__content__datetime">
              <a href = "#" target = "_blank">{this.props.newsSource} </a>
              <span>{this.props.date}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

SourceItemSource.propTypes = {
  date: React.PropTypes.string.isRequired,
  link: React.PropTypes.string.isRequired,
  newsSource: React.PropTypes.string.isRequired
};

export default SourceItemSource;
