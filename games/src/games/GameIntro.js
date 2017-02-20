import React, { PureComponent } from 'react'
import RPSintro2 from '../images/RPSintro2.png'
import RPSintro from '../images/RPSintro.png'
import './GameIntro.sass'
import { Router, Route, Link, IndexLink, browserHistory } from 'react-router'

class Intro extends PureComponent {
  render() {
    return(
      <div className="intro wrapper">
        <div className="intro text">
          <h1> How does Rock Paper Scissors work? </h1>
            <ul>
              <p>  Rock, Paper, Scissors (aka Ro-Sham-Bo, janken, and Scissors, Paper, Stone) is a simple hand game.  </p>
              <p>  Played around the world, with many different names and variations. </p>
              <p>  It is commonly used as a way of coming to decisions, and in some cases is even played for sport. </p>
              <p>  The rules require that competing players use one hand to form one of three shapes at an agreed-upon time. </p>
              <p>  The person that plays the strongest object is the winner of the game. Its that easy!  </p>
                    <img className="intro" src={ RPSintro } />
             <IndexLink to="/gamelobby" activeClassName="active" activeStyle={{fontWeight: 'bold'}} className="titanium">Go to lobby</IndexLink> 
            </ul>
        </div>

        <div className="intro">
            <img className="intro" src={ RPSintro2 } />
        </div>

      </div>
    )
  }
}

export default Intro
