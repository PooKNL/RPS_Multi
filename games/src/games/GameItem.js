// src/games/GameItem.js
import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import RaisedButton from 'material-ui/RaisedButton'
import toggleLikeAction from '../actions/games/toggle-like'
import './GameItem.sass'



export class GameItem extends PureComponent {
  constructor(title) {
    super(title)
  }
  joinGame() {
    this.props.onJoin(this.props.game)
  }

  render() {
    const { game } = this.props

    return (
      <li>
        Game by
        <RaisedButton onClick={this.joinGame.bind(this)} label="Join game" />
      </li>
    )
  }
}
export default GameItem
