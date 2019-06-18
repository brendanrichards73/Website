import React, { Component } from "react";

import Header from "../Components/Header/Header";
import Home from "../Components/Home/Home";
import About from "../Components/About/About";
import Projects from "../Components/Projects/Projects";
import Contact from "../Components/Contact/Contact";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";
class App extends Component {
    render() {
        return (
            <Router>
                <Header />
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/projects" component={Projects} />
                <Route path="/contact" component={Contact} />
            </Router>
        );
    }
}

export default App;
