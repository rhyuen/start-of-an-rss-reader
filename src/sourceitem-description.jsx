import React, {Component} from "react";


class SourceItemDescription extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className = "si__description">
        {this.props.description}
      </div>
    );
  }
}

export default SourceItemDescription;
