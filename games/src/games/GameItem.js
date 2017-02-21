import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import RaisedButton from 'material-ui/RaisedButton'

import './GameItem.sass'
import joinGame from '../actions/games/join-game'


export class GameItem extends PureComponent {

  handleClick() {
    this.props.joinGame(this.props._id)
  }


  render() {
       const { currentUser, createdBy } = this.props

    return (
      <li>
        <p> { this.props.title } created by   </p>
        <button className="primary" onClick={this.handleClick.bind(this)}>Join game</button>
      </li>
      )
    }

  }

const mapStateToProps = ({ currentUser }) => ({ currentUser })
export default connect(mapStateToProps, { joinGame })(GameItem)
