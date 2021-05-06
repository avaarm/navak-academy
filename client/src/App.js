import React from "react";
// can use HashRouter if browser router doesn't work 
import MainPage from "./pages/MainPage";
import "./index.css"
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import MobileNav from "./components/Navbar/MobileNav"

function App() {
  return (

      < Router >
      <Switch>
          <Route exact path="/" component={MainPage} />
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
