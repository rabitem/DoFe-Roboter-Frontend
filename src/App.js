import React from "react";
import "./App.css";
import HeaderAppBar from "./components/HeaderAppBar";
import Articles from "./components/Articles";
import StatisticsContainer from "./components/statistics/StatisticsContainer";
import { initWebSocket } from "./WebSocket";

function App() {
  initWebSocket();
  return (
    <div className="App">
      <HeaderAppBar />
      <StatisticsContainer />
      <Articles />
    </div>
  );
}

export default App;
