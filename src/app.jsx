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
    this.cleanResponseData = this.cleanResponseData.bind(this);
    this.getData = this.getData.bind(this);
  }

  showResponse(response){
    this.setState({
      content: this.state.content.concat(response)
    });
  }

  cleanResponseData(currResponseItem){
    //Economist Object.
    var cleanedCategory = {
      author: currResponseItem["author"][0],
      description: currResponseItem["description"][0],
      link: currResponseItem["link"][0],
      newsSource: currResponseItem["newsSource"],
      pubDate: currResponseItem["pubDate"][0],
      title: currResponseItem["title"][0],
      category: []
    };

    if(currResponseItem["newsSource"] === "The Economist" && currResponseItem["category"]){
      currResponseItem["category"].map((itr_cat) => {
        cleanedCategory["category"].push(itr_cat["_"] + ", ");
      });
    }

    return cleanedCategory;
  }

  getData(URL){
    $.ajax({
      type: "GET",
      dataType: "json",
      url: URL,
      success: function(response){

        var processed = response.data.map((item) => {
          if(item.newsSource === "The Economist"){
            return this.cleanResponseData(item);
          }return item;
        });

        this.showResponse(processed);
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
      "New Yorker": "/newyorker",
      "The Intercept": "/theintercept",
      "The Economist": "/theeconomist"
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
          key = {index}
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
}

export default App;
