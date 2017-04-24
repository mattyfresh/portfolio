import React, { Component } from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';

import Home from './components/Home';
import Header from './components/Header';
import MusicContainer from './containers/MusicContainer'

const AboutPage = (props) => {
  return <h1>THIS IS THE ABOUT PAGE</h1>;
};

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={AboutPage}/>
          <MusicContainer />
        </div>
      </Router>
    );
  }
}

export default App;
