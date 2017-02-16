import React, { PureComponent } from 'react'
import RPSintro from '../images/RPSintro.png'

class Intro extends PureComponent {
  render() {
    return(
      <div className="intro">
        <h1>{ How does Rock / Paper / Scissors work? }</h1>
          <ul>
            <p> { Rock, Paper, Scissors (aka Ro-Sham-Bo, janken, and Scissors, Paper, Stone) is a simple hand game } </p>
            <p> { that is played around the world, with many different names and variations.} </p>
            <p> { It is commonly used as a way of coming to decisions, and in some cases is even played for sport.} </p>
            <p> { The rules require that competing players use one hand to form one of three shapes at an agreed-upon time.} </p>
            <p> { The person that plays the strongest object is the winner of the game. Its that easy! } </p>
          </ul>
            <img className="intro" src={ RPSintro } />
      </div>
    )
  }
}

export default Intro
