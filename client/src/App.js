import React from "react";
// can use HashRouter if browser router doesn't work 
import MainPage from "./pages/MainPage";
import { HashRouter as Router, Route, Switch } from "react-router-dom";


function App() {
  return (

      < Router >
        <Switch>
          <Route exact path="/" component={MainPage} />
        
        </Switch>
      </Router >

  );
}

export default App;
