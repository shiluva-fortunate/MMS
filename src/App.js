import React, { Component } from "react";
import "./App.css";
import View from "./components/view.js";
import { Routes, Route } from "react-router-dom";
import Upload from "./components/upload";
import Landing from "./components/landing";
import { LandingBgConatiner } from "./styles/styles.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <LandingBgConatiner></LandingBgConatiner>

        <Routes>
          <Route path="/" exact element={<Landing />} />
          <Route path="capture" exact element={<Upload />} />
          <Route path="view" exact element={<View />} />
        </Routes>
      </div>
    );
  }
}

export default App;
