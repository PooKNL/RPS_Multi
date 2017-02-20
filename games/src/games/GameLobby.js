import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'
import RaisedButton from 'material-ui/RaisedButton'
import GameItem from './GameItem'
import createGame from '../actions/games/create'
// import setupGames from '../actions/setup-games'

const games = []

class GameLobby extends PureComponent {
  constructor(props) {
    super()

    const { title } = props

    this.state = {
      title
    }
  }

  componentDidMount() {
  this.props.createGame()
  }

  updateTitle(event) {
    this.setState({
      title: this.refs.title.value
    })
  }


  saveGame() {
    const {
      title
    } = this.state

    const game = {
      title
    }
  }

  renderGameItem(game, index) {
  return (
    <GameItem key={index} game={game} onJoin={this.joinGame.bind(this)} />
  )
}

  handleClick() {
    this.props.createGame(this.refs.title.value)
  }
  // createGame() {
  //   console.log();
  // }

  render() {
    console.log(this.props)
    return (
      <div className="create">
        <input
          type="text"
          ref="title"
          className="title"
          placeholder="Title"
          defaultValue={this.state.title} />


        <div className="actions">
          <button className="primary" onClick={this.handleClick.bind(this)}>Create game</button>
        </div>

        <div>
            <h3> Available Games </h3>
          <ul>
            { this.renderGameItem.bind(this) }
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
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps, { createGame })(GameLobby)
