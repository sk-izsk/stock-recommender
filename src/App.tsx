import React from "react";
import "./App.css";
import { Header } from "./Components/Header";
import { stockData } from "./utils/mock-data";

function App() {
  console.log(stockData);
  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
