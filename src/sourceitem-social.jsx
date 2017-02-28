import React, {Component} from "react";


class SourceItemSocial extends Component {
  constructor(props){
    super(props);
    this.state = {
      showReaderHere: true
    };
    this.getRandomNumber = this.getRandomNumber.bind(this);
  }

  getRandomNumber(){
    return Math.floor(Math.random() * 100).toString();
  }

  render(){
    return (
      <div className = "si__social support-text">
        <div className = "si__social__likes">{this.getRandomNumber()} Likes</div>
        <div className = "si__social__more-here">
          <a onClick = {this.props.updateReader}>
            <span className = "si__social__more-here--hidden">
              {this.props.link}
            </span>
            More Here
          </a>
        </div>
        <div className = "si__social__more-there">
          <a href = {this.props.link} target = "_blank">More There</a>
        </div>
      </div>
    );
  }
}

SourceItemSocial.propTypes = {
  link: React.PropTypes.string.isRequired,
  updateReader: React.PropTypes.func.isRequired
};

export default SourceItemSocial;
