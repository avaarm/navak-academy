import React from "react";
// can use HashRouter if browser router doesn't work
import MainPage from "./pages/Home";
import "./index.css";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import MobileNav from "./components/Navbar/MobileNav";
import SectionOne from "./components/Section1";
import SectionTwo from "./components/Section2";
import SectionThree from "./components/Section3";
import SectionFour from "./components/Section4";
import SectionFive from "./components/Section5";
import Footer from "./components/Footer";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/Section1" component={SectionOne} />
        <Route exact path="/Section2" component={SectionTwo} />
        <Route exact path="/Section3" component={SectionThree} />
        <Route exact path="/Section4" component={SectionFour} />
        <Route exact path="/Section5" component={SectionFive} />
        <Route exact path="/Footer" component={Footer} />
      </Switch>
      <MobileNav />
    </Router>
  );
}

export default App;
