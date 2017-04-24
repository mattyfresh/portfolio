import React, { Component } from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';

const HomePage = (props) => {
 return <h1>THIS IS THE HOMEPAGE</h1>;
};

const AboutPage = (props) => {
 return <h1>THIS IS THE ABOUT PAGE</h1>;
};

const MusicPage = (props) => {
 return <h1>THIS IS THE MUSIC PAGE</h1>;
};

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="App-header">
            <h2>Matthew Padich</h2>
          </div>
          <Route exact path="/" component={HomePage}/>
          <Route path="/about" component={AboutPage}/>
          <Route path="/music" component={MusicPage}/>
        </div>
      </Router>
    );
  }
}

export default App;
