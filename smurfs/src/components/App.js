/* ------------------------------------------------------------------------------- */

import React, { Component } from "react";
import "./App.css";

/* ------------------------------------------------------------------------------- */

import SmurfData from "../components/SmurfData";
import SmurfForm from "../components/SmurfForm";

/* ------------------------------------------------------------------------------- */

class App extends Component {
  render() {
    return (
      <div className="App">
        <SmurfData />
        <SmurfForm />
      </div>
    );
  }
}

/* ------------------------------------------------------------------------------- */

export default App;

/* ------------------------------------------------------------------------------- */