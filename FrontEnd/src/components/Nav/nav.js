import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import './nav.css'
import Logo from './logo.png'

class Nav extends Component {

  renderLinks() {
    if (this.props.authenticated) {
      return [
        <div className="row">
        <div className="container">
        <ul className="nav-menu list-unstyled">

        <div className="logo">
        <a href={"/welcome"}><h2>WAYFARER</h2></a>
       </div>
        <li key={2} >
          <Link  to="/welcome">Home</Link>
        </li>
        <li key={1} >
          <Link  to="/signout">Sign Out</Link>
        </li>
        <li key={3} >
          <Link  to="/profile">Profile</Link>
        </li>
        </ul>
        </div>
        </div>
      ]
    } else {
      return [
        <div className="row">
        <div className="container">
        <ul className="nav-menu list-unstyled">
        <div className="logo">
        <a href={"/"}><h2>WAYFARER</h2></a>
       </div>
        <li key={1} >
          {/* <Link  to="/signin">Sign In</Link> */}
          <a href="/signin">Sign In</a>
        </li>
        <li key={2} >
          {/* <Link  to="/signup">Sign Up</Link> */}
          <a href="/signup">Sign Up</a>

        </li>
        <li key={3} >
          {/* <Link  to="/feature">Protected Site</Link> */}
          {/* <a href="/feature">Protected Site</a> */}

        </li>
        </ul>
        </div>
        </div>
      ]
    }
  }

  render() {
    return (
      <nav className="navbar navbar-light">
        {/* <Link to="/" className="navbar-brand">Home</Link> */}
        <ul className="nav navbar-nav">
          {this.renderLinks()}
        </ul>
      </nav>
    )
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated
  }
}

export default connect(mapStateToProps,)(Nav)
