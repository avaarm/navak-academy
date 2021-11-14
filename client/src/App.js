import React from "react";
// can use HashRouter if browser router doesn't work
import MainPage from "./pages/Home";
import "./index.css";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import MobileNav from "./components/Navbar/MobileNav";
import SectionOne from "./components/Section1";
import SectionTwo from "./components/Section2";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/Section1" component={SectionOne} />
        <Route exact path="/Section2" component={SectionTwo} />
      </Switch>
      <MobileNav />
    </Router>
  );
}

export default App;
