import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'
import RaisedButton from 'material-ui/RaisedButton'
import GameItem from './GameItem'
import createGameAction from '../actions/games/create'
// import setupGames from '../actions/setup-games'


export class GameLobby extends PureComponent {
  constructor(props) {
    super()

    const { title } = props

    this.state = {
      title,
    }
  }

  createGame(event) {
    this.setState({
      title: this.refs.title.value
    })
  }

  render() {
    return (
      <div>
        <h1>Game Lobby</h1>
        <div>
          <input type="text" ref="title" className="title"
            placeholder="Title of the game" /> <br></br>
          <RaisedButton
            label="New Game"
            primary={true}
            onClick={this.createGame.bind(this)} />
        </div>
        <div>
          <ul>
            {  }
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

export default (GameLobby)
