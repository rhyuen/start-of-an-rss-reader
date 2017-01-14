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
    console.log("FIRST %s", response);
    this.setState({
      content: response.results
    });
    console.log("SECOND %s", this.state.content);
  }

  getData(URL){
    $.ajax({
      type: "GET",
      dataType: "json",
      url: URL,
      success: function(response){
        this.showResponse(response);
      }.bind(this)
    });
  }

  componentDidMount(){
    this.getData(this.props.url);
  }

  render(){
    return (
      <SourceItem
        title = {this.state.content.title}
        link = {this.state.content.link}
        pubDate = {this.state.content.pubDate}/>        
    );
  }
}

export default Source;
