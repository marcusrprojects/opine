import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Categories from './components/Categories';
import Profile from './components/Profile';
import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';
import './firebaseConfig';

function App() {
  return (
    <div className="App">
      <Router>
        <div className="App-router">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/categories" component={Categories} />
            <Route path="/profile" component={Profile} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;