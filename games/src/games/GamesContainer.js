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
  static propTypes = {
    games: PropTypes.array.isRequired,
    fetchGames: PropTypes.func.isRequired,
    subscribeToGamesService: PropTypes.func.isRequired,
  }

  componentDidMount() {
    this.props.fetchGames()
    this.props.subscribeToGamesService()
  }

  renderGame(game, index) {
    return <GameItem key={ index } { ...game } liked={ false } />
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
          { this.props.games.map(this.renderGame.bind(this)) }
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
