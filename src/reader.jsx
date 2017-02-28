import React, {Component} from "react";

class Reader extends Component{
  constructor(props){
    super(props);
    this.state = {
    };
  };

  render(){
    return (
      <div className = "reader" onClick = {this.props.closeReader}>
        <div className ="reader__textframe">
          {this.props.currReaderContent}
        </div>
      </div>
    );
  }
}

Reader.propTypes = {
  currReaderContent: React.PropTypes.string,
  closeReader: React.PropTypes.func
};

export default Reader;
