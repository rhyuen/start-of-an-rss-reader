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
    console.log("FIRST %s", response.data);
    this.setState({
      content: response.data
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

        console.log("AJAX CALL");
        console.dir(response);
      }.bind(this)
    });
  }

  componentDidMount(){
    this.getData(this.props.url);
  }

  render(){
    var sources = this.state.content.map((currItem) => {
      return (
        <SourceItem
          title = {currItem.title}
          link = {currItem.link}
          pubDate = {currItem.pubDate}/>
      )
    })

    return (
      <div>
        {sources}
      </div>
    );
  }
}

export default Source;
