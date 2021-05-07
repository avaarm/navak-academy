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
          <BlueBackground1/>
          <BlueBackground2/>
          <BlueBackground3/>
          <BlueBackground4/>
          <BlueBackground5/>
          <Footer/>
          {/* <Route exact path="/" component={AboutUs} />
          <Route exact path="/" component={MainPage} />
          <Route exact path="/" component={MainPage} />
          <Route exact path="/" component={MainPage} />
          <Route exact path="/" component={MainPage} /> */}
        </Switch>
        <MobileNav/>
  
      </Router >
      

  );
}

export default App;
