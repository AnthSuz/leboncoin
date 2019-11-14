//Import des packages
import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
//Import du CSS
import "./App.css";
//Import des Components
//Import des Containers
import Offers from "./containers/Offers";
import Offer from "./containers/Offer";

import "./App.css";

function App() {
  return (
    <Router>
      <Route path="/Offers">
        <Offers />
      </Route>
      <Route path="/Offer">
        <Offer />
      </Route>
    </Router>
  );
}

export default App;
