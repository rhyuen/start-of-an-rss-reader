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
      <div className = "si" key = {this.props.key}>
        <SourceItemSource date = {this.props.pubDate}
                          link = {this.props.link}
                          newsSource = {this.props.newsSource}/>
        <SourceItemHeader title = {this.props.title}
                          link = {this.props.link}
                          author = {this.props.author}
                          category = {this.props.category}/>
        <SourceItemDescription description = {this.props.description}/>
        <SourceItemSocial />
      </div>
    );
  }
}

SourceItem.propTypes = {
  key: React.PropTypes.number.isRequired,
  newsSource: React.PropTypes.string.isRequired,
  title: React.PropTypes.string.isRequired,
  description: React.PropTypes.string.isRequired,
  pubDate: React.PropTypes.string,
  author: React.PropTypes.string.isRequired,
  category: React.PropTypes.string
};

export default SourceItem;
