import React, { Component } from 'react'
import UserContext from '../../contexts/UserContext'

export class countdown extends Component {

  static contextType = UserContext;

  componentDidMount() {
    this.interval = setInterval(this.context.peoplePush,10000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {

    const {
     people
    } = this.context;

    return (
      <div>
        <p>Thanks For Choosing to Adopt Today!</p>
        <p>Serving Next: {`${people.all()}`}</p>
      </div>
    )
  }
}

export default countdown
