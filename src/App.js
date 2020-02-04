import React from "react";
import Header from "../src/components/Header";
import MainContent from "./components/MainContent";
import Aboutme from "./components/Aboutme";

import "./Header.css";

function App() {
  return (
    <div className="App">
      <div>
        <Header />
      </div>

      <div>
        <Aboutme />
      </div>
      <div>
        <MainContent />
        <MainContent />
      </div>
    </div>
  );
}

export default App;
