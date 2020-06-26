import React, { Component } from "react";
import "./App.css";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import data from "./data.json";
import SignUp from "./pages/SignUp/SignUp";
import { Switch, Route } from "react-router-dom"; //o switch serve pra trocar de pagina, e o route qual pagina mostra em determinada rota

class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedUser: false,
    };
  }

  login = () => {
    this.setState({
      loggedUser: true,
    });
    
  };

  logout = () => {
    this.setState({
      loggedUser: false,
    });
    
  };

  render() {
    const { loggedUser } = this.state;

    return (
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => (
            <Home
              data={data}
              {...props}
              loggedUser={loggedUser}
              logout={this.logout}
            />
          )}
        />
        <Route
          path="/login"
          render={(props) => (
            <Login {...props} loggedUser={loggedUser} login={this.login} />
          )}
        />
        <Route
          path="/signup"
          render={(props) => (
            <SignUp {...props} loggedUser={loggedUser} login={this.login} />
          )}
        />
      </Switch>
    );
  }
}

export default App;
