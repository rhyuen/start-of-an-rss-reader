import React, {Component} from "react";


class SourceItemSource extends Component {
  constructor(props){
    super(props);
  }

  render(){
    const abbr = {
      "Vancouver Sun": {
        letter: "VS",
        style: "si__source--vancouversun"
      },
      "NY Times": {
        letter: "NYT",
        style: "si__source--nytimes"
      },
      "The Guardian": {
        letter: "G",
        style: "si__source--theguardian"
      },
      "Washington Post": {
        letter: "WP",
        style: "si__source--washingtonpost"
      },
      "BBC": {
        letter: "B",
        style: "si__source--bbc"
      },
      "Globe and Mail": {
        letter: "G",
        style: "si__source--globeandmail"
      },
      "CBC": {
        letter: "C",
        style: "si__source--cbc"
      },
      "The Intercept": {
        letter: "I",
        style: "si__source--theintercept"
      },
      "The Economist": {
        letter: "E",
        style: "si__source--economist"
      },
      "New Yorker": {
        letter: "N",
        style: "si__source--newyorker"
      }
    };

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
