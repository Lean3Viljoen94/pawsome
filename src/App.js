import React from 'react';

import "./App.css";
// import Carousel from "./Components/Carousel";
import Header from "./Components/Header";
import Content from "./Components/Content";

import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        {/* <Carousel /> */}
        <Content />
      </Router>
    </div>
  );
}

export default App;
