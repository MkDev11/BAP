import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/css/nucleo-icons.css";
import "assets/scss/blk-design-system-react.scss";



import LandingPage from "views/examples/LandingPage.js";


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Switch>
     
      <Route
        path="/"
        render={(props) => <LandingPage {...props} />}
      />


      <Redirect from="/" to="/" />
    </Switch>
  </BrowserRouter>
);
