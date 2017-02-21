import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'
import fetchGames from '../actions/games/fetch'
import Title from '../components/Title'
import './GameSession.sass'

export class GameSession extends PureComponent {


  render() {

    return(
      <div className="gamesession">
        <div className="gamesession-title">
          <Title content="Rock, Paper, Scissors" />
        </div>
        <div className="game-container">
          <div className="image-container-1">
            <img className="rock">

            </img>
            <img className="paper">

            </img>
            <img className="scissors">

            </img>
          </div>
          <div className="image-container-2">
            <img className="rock">

            </img>
            <img className="paper">

            </img>
            <img className="scissors">

            </img>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ games }, { params }) => {
  const game = games.reduce((prev, next) => {
    if (next._id === params.gameId) {
      return next
    }
    return prev
  }, {})

  return {
    ...game
  }
}

export default connect(mapStateToProps, { fetchGames })(GameSession)
