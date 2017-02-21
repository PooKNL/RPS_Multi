import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'
import fetchGames from '../actions/games/fetch'
import Title from '../components/Title'
import './GameSession.sass'
import PaperPic from '../images/paper.png'
import RockPic from '../images/rock.png'
import ScissorsPic from '../images/scissors.png'

export class GameSession extends PureComponent {


  render() {

    return(
      <div className="gamesession">
        <div className="gamesession-title">
          <Title content="Rock, Paper, Scissors" />
        </div>
        <div className="game-container">
          <div className="image-container-1">
            <img className="rock" src={ RockPic }></img>
            <img className="paper" src={ PaperPic }></img>
            <img className="scissors" src={ ScissorsPic }></img>
          </div>
          <div className="image-container-2">
            <img className="rock" src={ RockPic }></img>
            <img className="paper" src={ PaperPic }></img>
            <img className="scissors" src={ ScissorsPic }></img>
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
