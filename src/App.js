import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Skills from './pages/Skills';
import Education from './pages/Education';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route exact path="/"><Home /></Route>
        <Route exact path="/about"><About /></Route>
        <Route exact path="/portfolio"><Portfolio /></Route>
        <Route exact path="/skills"><Skills /></Route>
        <Route exact path="/education"><Education /></Route>
        <Route exact path="/contact"><Contact /></Route>
      </div>
    </Router>
  );
}

export default App;
