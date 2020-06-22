import React, { Component } from 'react'
import ValidationError from '../ValidationError/ValidationError'
import UserContext from '../../contexts/UserContext';

export class NameForm extends Component {

  static contextType = UserContext;

  render() {
    const {
      name,
      setName,
      handleUpdatePeople,
      validateName,
    } = this.context;

    const nameError = validateName();
    return (
      <form>
        {name.touched && <ValidationError message={nameError} />}
        <label htmlFor='name'>Name:</label>
        <input type= 'text' name='name' id= 'name' value={name.value}
        onChange={(e) => setName(e.target.value)}>
        </input>
    
        <button type= 'submit' disabled={validateName()}
        onClick={(e) => {
          e.preventDefault();
          handleUpdatePeople(name.value);
        }}>
          Submit
        </button>
      </form>
    )
  }
}

export default NameForm
