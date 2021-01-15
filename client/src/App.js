import React from "react";
import { Route, Switch } from "react-router-dom";
import LogIn from "./components/LogIn";
import Register from "./components/Register";
import Container from "./components/Container";
import Genre from "./components/Container/Genres";
import { useSelector } from "react-redux";

function App() {
  const logged = useSelector((store) => store.logged);
  return (
    <Switch style={{ height: "100%", width: "100%" }}>
      <Route path="/genres" exact>
        {logged ? <Genre /> : <LogIn />}
        <Genre />
      </Route>
      <Route path="/albums" exact>
        {logged ? <Container /> : <LogIn />}
      </Route>
      <Route path="/bands" exact>
        {logged ? <Container /> : <LogIn />}
      </Route>
      <Route path="/register" exact>
        {logged ? <Container /> : <Register />}
      </Route>
      <Route path="/" exact>
        {logged ? <Container /> : <LogIn />}
      </Route>
    </Switch>
  );
}

export default App;
