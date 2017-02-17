import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import GameBox from '../components/GameBox'
import Title from '../components/Title'


export class GameSession extends PureComponent {
render() {
  return(
    <div>
      <div>
        <Title content="GameSession" />
      </div>
      <div>
        <GameBox />
      </div>

    </div>
  )
}

}

export default GameSession
