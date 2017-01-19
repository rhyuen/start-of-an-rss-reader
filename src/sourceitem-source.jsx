import React, {Component} from "react";


class SourceItemSource extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className = "si__source support-text">
        <div className ="si__source__icon">ICON</div>
        <div className ="si__source__details">
          <div><a href = "/">FROM WORLD NEWS</a></div>
          <div>News Source<span>{this.props.date}</span></div>
        </div>
      </div>
    );
  }
}

export default SourceItemSource;
