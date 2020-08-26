import React from 'react';
import './App.css';
import Footer from './Components/Footer'
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Components/Home';
import Statistics from './Components/Statictics';
import About from './Components/About';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/statistics" component={Statistics} />
          <Route path="/about" component={About} />

        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
