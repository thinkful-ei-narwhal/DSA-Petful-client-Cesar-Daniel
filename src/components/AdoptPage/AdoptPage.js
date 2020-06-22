import React, { Component, Fragment } from 'react';
import {Link} from 'react-router-dom';
import Cat from '../Cat/Cat';
import Dog from '../Dog/Dog';
import NameForm from '../NameForm/NameForm';
import UserContext from '../../contexts/UserContext';

export class AdoptPage extends Component {

  static contextType = UserContext;

  componentDidMount() {

    const {people, handleDeletePerson} = this.context;

    while(people.last) {
      setTimeout(handleDeletePerson(), 5000)
    }
  }

  render() {

    return (
      <Fragment>
        <h1>Petful - Adopt!</h1>
        <h2>Creating Happy Pet Families since 2020</h2>
        <NameForm/>
        <div className="pet-container">
          <Cat/>
          <Dog/>
        </div>

      </Fragment>
    )
  }
}

export default AdoptPage
