import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { AUTH_USER } from './actions/types'
import Nav from './components/Nav/nav.js'
import Welcome from './components/Welcome/welcome'
import injectTapEventPlugin from 'react-tap-event-plugin'
import Signin from './components/auth/signin'
import Signout from './components/auth/signout'
import Signup from './components/auth/signup'
import Profile from './components/auth/profile'
import { PrivateRoute } from './components/auth/require_auth'
import Feature from './components/feature'
import Landing from'./components/Landing/landing'
import reducers from './reducers'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

// Needed for onTouchTap with material-ui
// http://stackoverflow.com/a/34015469/988941

injectTapEventPlugin()

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore)
const store = createStoreWithMiddleware(reducers)
const token = localStorage.getItem('token')

if (token) {
  store.dispatch({type: AUTH_USER})
}


ReactDOM.render(
  <Provider store={store}>
    <Router>
      <MuiThemeProvider>
        <div>
          <Nav/>
          <Route path="/welcome"  component={Welcome}/>
          <Route path="/signin" component={Signin}/>
          <Route path="/signout" component={Signout}/>
          <Route path="/signup" component={Signup}/>
          <Route path="/profile" component={Profile}/>
          <Route path="/" exact={true} component={Landing}/>
          <PrivateRoute path="/feature" component={Feature}/>
        </div>
      </MuiThemeProvider>
    </Router>
  </Provider>
  , document.getElementById('root'))
