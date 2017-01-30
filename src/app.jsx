import React, {Component} from "react";
import Header from "./header.jsx";
import Banner from "./banner.jsx";
import SourceItem from "./sourceitem.jsx";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      content: []
    };
    this.showResponse = this.showResponse.bind(this);
    this.getData = this.getData.bind(this);
  }

  showResponse(response){
    // var updatedContent = this.state.content.slice(0);
    // updatedContent.push(response.data);

    this.setState({
      content: this.state.content.concat(response.data)
    });
  }

  getData(URL){
    $.ajax({
      type: "GET",
      dataType: "json",
      url: URL,
      success: function(response){
        // this.state.content.push(response);
        this.showResponse(response);
        console.dir(response);
      }.bind(this)
    });
  }

  componentDidMount(){
    const urlList = {
      "The Guardian": "/guardian",
      "Vancouver Sun": "/vsunworld",
      "NY Times": "/nytimesworld",
      "Washington Post": "/wapoworld",
      "BBC": "/bbcworld",
      "Globe and Mail": "/globemailworld",
      "CBC": "/cbcworld",
      "The Intercept": "/theintercept"
    };

    for(var key in urlList){
      this.getData(urlList[key]);
    }
  }


  render(){
    var sources = this.state.content.map((currItem, index) => {
      var regex = /(<([^>]+)>)/ig;
      var newdesc = currItem.description.toString().replace(regex, "");

      return (
        <SourceItem
          newsSource = {currItem.newsSource}
          title = {currItem.title}
          link = {currItem.link}
          description = {newdesc}
          pubDate = {currItem.pubDate}
          author = {currItem.author}
          category = {currItem.category}/>
      );
    });

    return (
      <div className = "root">
        <Header/>
        <Banner/>
        <div className = "primary-content-container">
          {sources}
        </div>
      </div>
    );
  }
  // render(){
  //   const urlList = {
  //     "The Guardian": "/guardian",
  //     "Vancouver Sun": "/vsunworld",
  //     "NY Times": "/nytimesworld",
  //     "Washington Post": "/wapoworld",
  //     "BBC": "/bbcworld",
  //     "Globe and Mail": "/globemailworld",
  //     "CBC": "/cbcworld"
  //   };
  //
  //
  //   const masterSource = Object.keys(urlList).map((currSourceKey, index) => {
  //     return (
  //       <Source
  //         key = {index}
  //         sourceTitle = {currSourceKey.toString()}
  //         url = {urlList[currSourceKey]}/>
  //     );
  //   });
  //
  //   return (
  //     <div className = "root">
  //       <Header/>
  //       <Banner/>
  //       <div className = "primary-content-container">
  //         {masterSource}
  //       </div>
  //     </div>
  //   );
  // }
}

export default App;
