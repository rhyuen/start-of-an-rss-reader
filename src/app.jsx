import React, {Component} from "react";
import Source from "./source.jsx";
import Header from "./header.jsx";
import Banner from "./banner.jsx";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {

    };
  }



  render(){
    const urlList = {
      "The Guardian": "/guardian",
      "Vancouver Sun": "/vsunworld",
      "NY Times": "/nytimesworld",
      "Washington Post": "/wapoworld",
      "BBC": "/bbcworld",
      "Globe and Mail": "/globemailworld",
      "CBC": "/cbcworld"
    };


    const masterSource = Object.keys(urlList).map((currSourceKey, index) => {
      return (
        <Source
          key = {index}
          sourceTitle = {currSourceKey.toString()}
          url = {urlList[currSourceKey]}/>
      );
    });

    return (
      <div className = "root">
        <Header/>
        <Banner/>
        <div className = "primary-content-container">
          {masterSource}
        </div>
      </div>
    );
  }
}

export default App;
