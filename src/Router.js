import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'
import {Home,BasicRouting,NotMatch}  from './views'

import Login from './views/Login';

const NoMatch1 = ({ location }) => (
  <div>
    <h3>No match for <code>{location.pathname}</code></h3>
  </div>
)

const BasicExample = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/basic-routing">BasicRouting</Link></li>
        <li><Link to="/basic">NoMatch1</Link></li>
      </ul>
      <Switch>
        <Route path="/login" component={Login}/>
        <Route exact path="/" component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/basic-routing" component={BasicRouting} />
        <Route component={NoMatch1} />
      </Switch>
    </div>
  </Router>
)



export default BasicExample
