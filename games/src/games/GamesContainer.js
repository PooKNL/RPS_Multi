// src/games/GamesContainer.js
import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'
import fetchGames from '../actions/games/fetch'
import subscribeToGamesService from '../actions/games/subscribe'
import Title from '../components/Title'
import './GamesContainer.sass'
import Intro from './GameIntro'
import SignIn from '../users/SignIn'
import GameLobby from './GameLobby'

export class GamesContainer extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      games: [
        {
          id: 1,
          title: 'game one',
        },
        {
          id: 2,
          title: 'game two',
        }
      ]
    };
  }


  render() {
    return(
      <div className="games wrapper">
        <header>
          <Title content="About the game" />
          <Intro />
        </header>
        <main className="container">
          < SignIn />
        </main>
      </div>
    )
  }
}

const mapStateToProps = ({ games }) => ({ games })

export default connect(mapStateToProps, {
  fetchGames,
  subscribeToGamesService
})(GamesContainer)
