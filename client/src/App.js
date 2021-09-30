import React from "react";
// can use HashRouter if browser router doesn't work 
import MainPage from "./pages/Home";
import "./index.css"
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import MobileNav from "./components/Navbar/MobileNav"
import BlueBackground1 from "./components/Section1";
import BlueBackground2 from "./components/Section2";
import BlueBackground3 from "./components/Section3";
import BlueBackground4 from "./components/Section4";
import BlueBackground5 from "./components/Section5";
import Footer from "./components/Footer"


function App() {
  return (

      < Router >
      <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/Section1" component={BlueBackground1} />
          <Route exact path="/Section2" component={BlueBackground2} />
          <Route exact path="/Section3" component={BlueBackground3} />
          <Route exact path="/Section4" component={BlueBackground4} />
          <Route exact path="/Section5" component={BlueBackground5} /> 
          <Footer/>
        </Switch>
        <MobileNav/>
  
      </Router >
      

  );
}

export default App;
