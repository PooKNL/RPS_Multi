import React, { PureComponent } from 'react'

class JoinButton extends PureComponent {
  classNames() {
    const { joined } = this.state
    let classes = 'join'

    if (joined) { classes += joined } // <--- game should be made full

    return classes
  }

  handleClick() {
    console.log('whammy!')

  }

  render() {
    return (
        <div className="actions">
          <button className="primary" onClick={this.handleClick.bind(this)}>Join game</button>
        </div>
    )
  }
}

export default JoinButton
