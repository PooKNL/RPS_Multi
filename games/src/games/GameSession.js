import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import GameBox from '../components/GameBox'
import GameItem from './GameItem'
import fetchGames from '../actions/games/fetch'
import Title from '../components/Title'
import './GameSession.sass'


export class GameSession extends PureComponent {


  componentDidMount() {
    this.props.fetchGames()
  }

  renderGame(game, index) {
    return <GameItem key={ index } { ...game } />
  }

render() {
  return(
    <div>
      <div className="title">
        <Title content="GameSession" />
      </div>
      <div>
        <GameBox>
        </GameBox>
      </div>
    </div>
  )
}

}

export default GameSession
