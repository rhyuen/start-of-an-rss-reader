import React, {Component} from "react";


class SourceItemSocial extends Component {
  constructor(props){
    super(props);
    this.getRandomNumber = this.getRandomNumber.bind(this);
  }

  getRandomNumber(){
    return Math.floor(Math.random() * 100).toString();
  }

  render(){
    return (
      <div className = "si__social support-text">
        <div className = "si__social__likes">{this.getRandomNumber()} Likes</div>
        <div className = "si__social__comments">Add Comment</div>
        <div className = "si__social__more">
          <a href = {this.props.link} target = "_blank">More</a>
        </div>
      </div>
    );
  }
}

SourceItemSocial.propTypes = {
  link: React.PropTypes.string.isRequired
};

export default SourceItemSocial;
