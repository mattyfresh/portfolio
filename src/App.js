import React, { Component } from 'react'
import './App.css'

import {
  HashRouter as Router,
  Route
} from 'react-router-dom'

import Home from './components/Home'
import Header from './components/Header'
import MusicContainer from './containers/MusicContainer'
import About from './components/About'
import PortfolioImage from './components/PortfolioImage'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <div className="content__wrapper">
            <div className="main-content__wrapper">
              <PortfolioImage />
              <Route exact path="/" component={Home}/>
              <Route path="/about" component={About}/>
            </div>
            <MusicContainer />
          </div>
        </div>
      </Router>
    );
  }
}

export default App
