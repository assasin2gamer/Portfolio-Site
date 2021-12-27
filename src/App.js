import React from "react";
import "./styles.css";
import { Route, Switch } from "react-router-dom";
import Nav from "./Nav";
import Main from "./Main";
import Design from "./Design";
import About from "./About";
import styled from 'styled-components';
import Competition from "./Competition"
import {background as testimage} from "./background.png"


export default function App() {
  return (

      <div className="App" >
      
      <Nav />
      <Switch>
        <Route exact path="/" render={() => <Main />} />
        <Route exact path="/design" render={() => <Design />} />
        <Route exact path="/About" render={() => <About />} />
        <Route exact path="/Competition" render={() => <Competition />} />
        <Route path="/:other" render={() => "Coming soon"} />
      </Switch>
      
    </div>
  );
}
