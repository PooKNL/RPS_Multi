import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'
import RaisedButton from 'material-ui/RaisedButton'
import fetchGames from '../actions/games/fetch'
import GameItem from './GameItem'
import createGame from '../actions/games/create'
import subscribeToGamesService from '../actions/games/subscribe'
import { Router, Route, Link, IndexLink, browserHistory } from 'react-router'
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
  this.props.fetchGames()
  // this.props.subscribeToGamesService()

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

  renderGame(game, index) {
    return <GameItem key={ index } { ...game }/>
  }

  handleClick() {
    this.props.createGame(this.refs.title.value)
  }

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
          <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}} className="titanium">Go to home</IndexLink>
        </div>

        <div>
            <h3> Available Games </h3>
          <ul>
              { this.props.games.map(this.renderGame.bind(this)) }
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

export default connect(mapStateToProps, { createGame, fetchGames, subscribeToGamesService })(GameLobby)
