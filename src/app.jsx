import React, {Component} from "react";
import Source from "./source.jsx";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {

    };
  }



  render(){
    const urlList = {
      guardian: "/guardian",
      vsun: "/vsunworld",
      nyt: "/nytimesworld",
      wapo: "/wapoworld",
      bbc: "/bbcworld",
      globemail: "/globemailworld",
      cbc: "/cbcworld"
    };


    const masterSource = Object.keys(urlList).map((key) => {
      return (
        <Source url = {urlList[key]}/>
      );
    });

    return (
      <div>{masterSource}</div>
    );

    // return (
    //   <div>
    //     <Source url = "/guardian"/>
    //     <Source url = "/wapoworld"/>
    //     <Source url = "/vsunworld"/>
    //     <Source url = "/nytimesworld"/>
    //   </div>
    // );
  }
}

export default App;
