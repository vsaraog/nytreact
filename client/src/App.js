import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header.js"
import SearchArticles from "./components/SearchArticles.js"
import SearchResults from "./components/SearchResults.js"
import SavedArticles from "./components/SavedArticles.js"
// import "./rover.scss";

class App extends Component {
  // state = {
  //   terms: ""
  // }

  searchTerm = terms => {
    // console.log("In App:", terms)
    this.searchArticles(terms)
    // this.setState({
    //   terms: terms
    // })
  }

  render() {
    return (
      <div className="App">
        {/* <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload. This is a test2
        </p> */}
        <Header />
        <SearchArticles searchTerm={this.searchTerm}/>
        {/* <SearchResults terms={this.state.terms} searchClicked= {clicked => this.searchArticles = clicked} /> */}
        <SearchResults searchClicked= {clicked => this.searchArticles = clicked} />
        <SavedArticles />
      </div>
    );
  }
}

export default App;
