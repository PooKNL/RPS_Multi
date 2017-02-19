
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import RaisedButton from 'material-ui/RaisedButton'

import model from '../models/game-model'
import GameItem from '../components/GameItem'

import setupGames from '../actions/setup-games'
// import joinGame from '../actions/join-game'

class Lobby extends Component {
  componentDidMount() {
    this.props.setupGames()
  }

  createGame() {
    model.create({})
  }

  joinGame(game) {
    this.props.joinGame(game, this.props.currentUser)
  }

  renderGameItem(game, index) {
    return (
      <GameItem key={index} game={game} onJoin={this.joinGame.bind(this)} />
    )
  }

  render() {
    return (
      <div>
        <h1>Lobby</h1>
        <div>
          <RaisedButton
            label="New Game"
            primary={true}
            onClick={this.createGame.bind(this)}/>
        </div>
        <div>
          <ul>
            { this.props.games.map(this.renderGameItem.bind(this)) }
          </ul>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    games: state.games,
    currentGame: state.currentGame,
    currentUser: state.currentUser,
  }
}

export default connect(mapStateToProps, { setupGames })(Lobby)
