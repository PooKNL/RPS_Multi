import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'


export class Loading extends PureComponent {
  static propTypes = {
    error: PropTypes.isRequired,
  }

  render() {
    const { error } = this.props

    if (!error) return null

    return (
      <div className="loading">
        <h3>Loading</h3>
        <p> </p>
      </div>
    )
  }
}

const mapStateToProps = ({ loading }) => ({ loading })

export default connect(mapStateToProps)(Loading)
