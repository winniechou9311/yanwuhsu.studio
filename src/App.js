import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Booking from "./pages/Booking";
import Contact from "./pages/Contact";
import Introduction from "./pages/Introduction";
import Project from "./pages/Project";
import Error from "./pages/Error";
import CallbackPage from "./pages/callback-page";
import RootLayout from "./pages/Root";
import Footer from "./footer";

function App() {
  return (
    <>
      <div className="row">
        <Router>
          <RootLayout />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/about" component={About} />
            <Route path="/booking" component={Booking} />
            <Route path="/contact" component={Contact} />
            <Route path="/introduction" component={Introduction} />
            <Route path="/project" component={Project} />
            <Route path="/callback" component={CallbackPage} />
            <Route path="*" component={Error} />
          </Switch>
          <Footer />
        </Router>
      </div>
    </>
  );
}

export default App;
