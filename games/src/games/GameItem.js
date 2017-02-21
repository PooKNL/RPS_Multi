import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import RaisedButton from 'material-ui/RaisedButton'
import JoinButton from '../components/JoinButton'
import JoinGameAction from '../actions/games/join-game'
import './GameItem.sass'

export class GameItem extends PureComponent {

JoinButton() {
    const { _id, joinedBy, currentUser } = this.props
    if (!currentUser) return

    console.log('CLICK (GameItem)', _id)
    this.props.JoinGameAction({ _id, joinedBy }, currentUser)
  }

  render() {
    const { game } = this.props;

    return (
      <li>
        <p> { this.props.title } </p>
        <JoinButton />
      </li>
    )
  }
}

const mapStateToProps = ({ games }) => ({ games })

export default GameItem
