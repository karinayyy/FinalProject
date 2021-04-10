import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {NaviBar} from './Components/Navibar';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

import {Home} from './Pages/Home'
import {Users} from './Pages/Users'
import {About} from './Pages/About'
import {Product} from './Pages/Product'

function App() {
  return (
    <>
      <Router>
        <NaviBar />

        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/product/:id" component={Product} />
            <Route path="/users" component={Users} />
            <Route path="/about" component={About} />
        </Switch>
      </Router>
    </>
  );
}

export default App;