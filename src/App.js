import React from "react"
import {BrowserRouter as Router} from 'react-router-dom';
import {GlobalStyle} from "./globalStyles"
import Hero from "./components/Hero";
import Products from "./components/Products/index";
import { prodcutsData } from "./components/Products/data";


function App() {
  return (
    <Router>
    <GlobalStyle />
    <Hero />
    <Products heading="Choose Your Favourite"/>
    </Router>
  );
}

export default App;
