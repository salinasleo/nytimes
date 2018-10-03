import React, { Component } from 'react';
import './App.css';
// import Books from "./pages/articles";
// import Nav from "./components/Nav";




class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src="./img/nytimes_logo.png" className="App-logo" alt="logo" />
          <h1 className="App-title">The New York Times Article Saver</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          Not Fake News.
        </p>
        {/* <Nav />
        <Books /> */}
      </div>
    );
  }
}


export default App;

