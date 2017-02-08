import React, {Component} from "react";


class SourceItemSource extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className = "si__source support-text">
        <div className ="si__source__icon">
          <div className = "si__source__icon__circle">
            <div className = "content">
              <span>
                Icon
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
