import React, { Component } from 'react';
import Players from "./containers/Players";
import "./styles/main.css";

class App extends Component {

  render() {
    return (
      <div className="App">
        <Players />
      </div>
    );
  }
}

export default App;
