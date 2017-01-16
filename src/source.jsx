import React, {Component} from "react";
import SourceItem from "./sourceitem.jsx";

class Source extends Component {
  constructor(props){
    super(props);
    this.state = {
      content: []
    };

    this.showResponse = this.showResponse.bind(this);
    this.getData = this.getData.bind(this);
  }

  showResponse(response){
    this.setState({
      content: response.data
    });
  }

  getData(URL){
    $.ajax({
      type: "GET",
      dataType: "json",
      url: URL,
      success: function(response){
        this.showResponse(response);
        console.dir(response);
      }.bind(this)
    });
  }

  componentDidMount(){
    this.getData(this.props.url);
  }

  render(){
    var sources = this.state.content.map((currItem, index) => {
      return (
        <SourceItem
          key = {index}
          title = {currItem.title}
          link = {currItem.link}
          pubDate = {currItem.pubDate}/>
      );
    });

    return (
      <div className = "source-list">
        <h4>{this.props.sourceTitle}
          <span> ( {sources.length} )</span>
        </h4>
        {sources}
      </div>
    );
  }
}

export default Source;
