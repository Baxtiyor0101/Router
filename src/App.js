import React from "react";
import  Body  from "./components/Body/Body";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Body />
      </BrowserRouter>

    </div>
  );
}

export default App;
