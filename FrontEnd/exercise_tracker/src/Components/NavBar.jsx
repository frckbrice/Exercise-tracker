import React from 'react'
import PropTypes from 'prop-types'

const NavBar = props => {
  return (
    <nav className="nav">
      <ul>
        <li>
          <a href="/createStudent"> Create Student</a>
        </li>
        <li>
          <a href="/createExercise">Create Exercise</a>{" "}
        </li>
        <li>
          <a href="/exerciseLogs">Student&#39;s exercises log</a>{" "}
        </li>
      </ul>
    </nav>
  );
}

NavBar.propTypes = {

}

export default NavBar
