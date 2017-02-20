import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'
import fetchGames from '../actions/games/fetch'
import Title from '../components/Title'

export class GameSession extends PureComponent {
  static propTypes = {}

  componentDidMount() {
    this.props.fetchgames()
  }

  render() {
    const { title } = this.props

    return(
      <div className="game session">
        <Title content={ title } />
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
