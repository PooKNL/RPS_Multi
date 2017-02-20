// src/index.js
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute } from 'react-router'
import store, { history } from './store'
import injectTapEventPlugin from 'react-tap-event-plugin'

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin()

import App from './App'
import GamesContainer from './games/GamesContainer'
import GameLobby from './games/GameLobby'
import SignUp from './users/SignUp'
import SignIn from './users/SignIn'
import GameSession from './games/GameSession'

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={GamesContainer} />
        <Route path="/gamelobby" component={GameLobby} />
        <Route path="/sign-up" component={SignUp} />
        <Route path="/sign-in" component={SignIn} />
        <Route path="/games/:gameId" component={GameSession} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)
