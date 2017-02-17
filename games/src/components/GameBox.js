import React, { Component } from 'react'
import CardExampleWithAvatar from './RockPaperScissors'
import './GameBox.sass'

class GameBox extends Component {

render() {
  return (
    <div className="gameboxx">
      <CardExampleWithAvatar />
    </div>
  )
}

}

export default GameBox
