import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'
import RaisedButton from 'material-ui/RaisedButton'
import GameItem from './GameItem'
import createGameAction from '../actions/games/create'
// import setupGames from '../actions/setup-games'

const games = [
  {
    id: 1,
    title: " game one",
  }
]

export class GameLobby extends PureComponent {
  render() {
    const renderGames = () => {
      return games.map((game) => {
        return (
          <GameItem key={game.id} {...game} />
        )
      })
    }

    const handleClick = (e) => {
      e.preventDefault();
      console.log('The link was clicked.', e.state);
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
            onClick={handleClick} />
        </div>
        <div>
          <ul>
            {renderGames()}
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

export default connect (mapStateToProps)(GameLobby)
