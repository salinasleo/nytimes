import React, { Component } from 'react';
import './App.css';
import Search from "./components/Search";
import Results from "./components/Results";
import Saved from "./components/Saved";





class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src="./img/nytimes_logo.png" className="App-logo" alt="logo" />
          <h1 className="App-title">The New York Times Article Scrubber</h1>
        </header>
        <p className="App-intro">
          Search for and annotate non fake news articles of interest.
        </p>
        <Search/>
        <Results/>
        <Saved/>
      </div>
            );
          }
        }
        
        
        export default App;
        
