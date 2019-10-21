import React, { Component } from 'react'
import Toast from 'react-bootstrap/Toast'

class Notification extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div>
                <div
  aria-live="polite"
  aria-atomic="true"
  style={{
    position: 'relative',
    minHeight: '100px',
  }}
>
  <Toast delay={3000} autohide show={this.props.show}
    style={{
      position: 'fixed',
      top: 0,
      right: 0,
    }}
  >
    <Toast.Header>
      <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
      <strong className="mr-auto">{this.props.title}</strong>
      <small>just now</small>
    </Toast.Header>
    <Toast.Body>{this.props.content}</Toast.Body>
  </Toast>
</div>
            </div>
        )
    }
}

export default Notification
