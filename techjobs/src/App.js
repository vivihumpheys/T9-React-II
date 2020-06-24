import React from "react";
import "./App.css";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import data from "./data.json";

function App() {
  return (
    <div className="App">
      <Home data={data} />
      <Login />
    </div>
  );
}

export default App;
