import React, { Component } from 'react'
import './App.css'

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import Home from './components/Home'
import Header from './components/Header'
import MusicContainer from './containers/MusicContainer'
import About from './components/About'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <div className="content__wrapper">
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <MusicContainer />
          </div>
        </div>
      </Router>
    );
  }
}

export default App
