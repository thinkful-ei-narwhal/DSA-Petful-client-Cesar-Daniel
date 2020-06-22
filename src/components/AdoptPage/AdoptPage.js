import React, { Component, Fragment } from 'react';
import {Link} from 'react-router-dom';
import Cat from '../Cat/Cat';
import Dog from '../Dog/Dog';
import NameForm from '../NameForm/NameForm';
import Countdown from '../Countdown/countdown';
import UserContext from '../../contexts/UserContext';
import countdown from '../Countdown/countdown';

export class AdoptPage extends Component {

  static contextType = UserContext;


  render() {

    const {
      waiting,
      submitted
    } = this.context;

    return (
      <Fragment>
        <h1>Petful - Adopt!</h1>
        <h2>Creating Happy Pet Families since 2020</h2>
        <p>Enter your name here and you'll be placed in a queue!
        After that, you'll have to wait your turn before selecting
        your next pet!</p>
        <NameForm/>
        {submitted && waiting ? <Countdown/> : null}
        {!waiting ? <p>It's your turn!  You can now adopt!</p> : null}
        <div className="pet-container">
          <Cat/>
          <Dog/>
        </div>
        

      </Fragment>
    )
  }
}

export default AdoptPage
