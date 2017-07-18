import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'
import {Home, NotMatch}  from './views'

import Login from './views/Login';
import BasicRouting from './views/BasicRouting';
import Dashboard from './views/Dashboard';
import Application from './views/Application'

const NoMatch1 = ({ location }) => (
  <div>
    <h3>No match for <code>{location.pathname}</code></h3>
  </div>
)

const BasicExample = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Root</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/basic-routing">BasicRouting</Link></li>
        <li><Link to="/basic">NoMatch1</Link></li>
      </ul>
      <Switch>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/basic-routing" component={BasicRouting} />
        <Route path="/" component={Application} />
        {
          // <Route component={NoMatch1} />
        }
      </Switch>
    </div>
  </Router>
)



export default BasicExample
