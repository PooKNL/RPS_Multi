import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'
import RaisedButton from 'material-ui/RaisedButton'
import GameItem from './GameItem'
import createGameAction from '../actions/games/create'
// import setupGames from '../actions/setup-games'


export class GameLobby extends PureComponent {


  render() {
    const { games } = this.props
    const renderGames = () => {
      return games.map((game) => {
        return (
          <GameItem key={game.id} />
        )
      })
    }
    return (
      <div>
        <h1>Game Lobby</h1>
        <div>
          <input type="text" ref="title" className="title"
            placeholder="Title of the game" /> <br></br>
          <RaisedButton
            label="New Game"
            primary={true}
            onClick={this.createGameHandler} />
        </div>
        <div>
          {renderGames()}
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

export default connect (mapStateToProps)(GameLobby)
