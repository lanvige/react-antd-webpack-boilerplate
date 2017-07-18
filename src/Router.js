// rr4 nm https://github.com/ReactTraining/react-router/issues/4698

import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'
import {Home, NoMatch}  from './views'

import Login from './views/Login';
import BasicRouting from './views/BasicRouting';
import Dashboard from './views/Dashboard';
import Application from './views/Application'


const BasicExample = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Root</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/basic-routing">BasicRouting</Link></li>
        <li><Link to="/notmatch">NotMatch</Link></li>
      </ul>
      <Switch>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/basic-routing" component={BasicRouting} />
        <Route path="/" component={Application} />
        {
          // <Route component={NoMatch} />
        }
      </Switch>
    </div>
  </Router>
)



export default BasicExample
