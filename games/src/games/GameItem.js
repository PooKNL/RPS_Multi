// src/games/GameItem.js
import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import RaisedButton from 'material-ui/RaisedButton'
import toggleLikeAction from '../actions/games/toggle-like'
import './GameItem.sass'

export class GameItem extends PureComponent {

  render() {
    const { game } = this.props;

    return (
      <li>
        (game title)
        <RaisedButton label="Join game" />
      </li>
    )
  }
}

const mapStateToProps = ({ games }) => ({ games })

export default GameItem
