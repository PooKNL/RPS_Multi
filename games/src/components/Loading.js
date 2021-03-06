import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'
import LoadingPic from '../images/Loadingpic.gif'
import './Loading.sass'

export class Loading extends PureComponent {
  static propTypes = {
    loading: PropTypes.bool.isRequired,
  }

  render() {
    const { loading } = this.props
    if (!loading) return null

    return (
      <div className="loading">
        <img src={ LoadingPic } />
      </div>
    )
  }
}

const mapStateToProps = ({ loading }) => ({ loading })

export default connect(mapStateToProps)(Loading)
