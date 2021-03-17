import React from "react";
// can use HashRouter if browser router doesn't work 
import MainPage from "./pages/MainPage";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import MobileNav from "./components/MobileNavbar"

function App() {
  return (

      < Router >
          <Route exact path="/" component={MainPage} />
          {/* <Route exact path="/" component={AboutUs} />
          <Route exact path="/" component={MainPage} />
          <Route exact path="/" component={MainPage} />
          <Route exact path="/" component={MainPage} />
          <Route exact path="/" component={MainPage} /> */}
        <MobileNav/>
      </Router >
      

  );
}

export default App;
