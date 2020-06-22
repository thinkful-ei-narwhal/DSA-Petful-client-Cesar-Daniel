import React, { Component, Fragment } from 'react';
import {Link} from 'react-router-dom';

export class HomePage extends Component {
  render() {
    return (
      <Fragment>
        <h1>Petful</h1>
        <h2>Creating Happy Pet Families since 2020</h2>

        {/* picture here*/}

        <p>At Petful, we strive to make sure that the dogs and 
        cats in the most need are those adopted first!  Those
        who have been with us the longest will be the first to
        find happy families!  When you enter the adoption process,
        you'll be placed in our family-friendly queue in order to wait
        for your new furry friend!</p>

        <h3>Adopt Here!</h3>
        <Link to='/adopt'>Enter:</Link>
      </Fragment>
    )
  }
}

export default HomePage
