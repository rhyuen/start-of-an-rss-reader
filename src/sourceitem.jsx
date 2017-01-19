import React, {Component} from "react";
import SourceItemSource from "./sourceitem-source.jsx";
import SourceItemHeader  from "./sourceitem-header.jsx";
import SourceItemDescription from "./sourceitem-description.jsx";
import SourceItemSocial from "./sourceitem-social.jsx";


class SourceItem extends Component {
  constructor(props){
    super(props);
    this.state = {

    };
  }

  render(){

    return (
      <div className = "si">
        <SourceItemSource date = {this.props.pubDate} link = {this.props.link}/>
        <SourceItemHeader title = {this.props.title} link = {this.props.link}/>
        <SourceItemDescription description = {this.props.description}/>
        <SourceItemSocial />
      </div>
    );
  }
}

export default SourceItem;
