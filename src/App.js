import React from "react"
import {BrowserRouter as Router} from 'react-router-dom';
import {GlobalStyle} from "./globalStyles"
import Hero from "./components/Hero";
import Products from "./components/Products/index";
import PizzaDay from "./components/PizzaDay/index"


function App() {
  return (
    <Router>
    <GlobalStyle />
    <Hero />
    <Products heading="Choose Your Favourite"/>
    <PizzaDay src={`https://www.linkedin.com/in/simone-bucciol/`} />
    </Router>
  );
}

export default App;
