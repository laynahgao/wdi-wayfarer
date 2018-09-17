import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../actions'
import Landing from'../Landing/landing'

class Signout extends Component {

  componentWillMount() {
    this.props.signoutUser()
  }

  render() {
    return (
      <Landing/>
    )
  }
}

export default connect(null, actions)(Signout)