import React, {Component} from "react";
import Source from "./source.jsx";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {

    };
  }

  render(){
    return (
      <div>
        <Source url = "/guardian"/>
        <Source url = "/wapoworld"/>
        <Source url = "/vsunworld"/>
        <Source url = "/nytimesworld"/>
      </div>
    );
  }
}

export default App;
