import React from "react";
import "./App.css";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import data from "./data.json";
import SignUp from './pages/SignUp/SignUp';

function App() {
  return (
    <div className="App">
      {/* <Home data={data} /> */}
      {/* <Login /> */}
      <SignUp />
    </div>
  );
}

export default App;
