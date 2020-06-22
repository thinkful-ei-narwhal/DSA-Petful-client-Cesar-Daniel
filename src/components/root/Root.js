import React, { Component, Fragment } from 'react';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import HomePage from '../HomePage/HomePage';
import AdoptPage from '../AdoptPage/AdoptPage';
import ErrorPage from '../ErrorPage/ErrorPage';
import UserContext from '../../contexts/UserContext';
import apiService from '../../services/apiService';

const Queue = require('../../queue/Queue');

export class Root extends Component {

  state = {
    cats: new Queue(),
    dogs: new Queue(),
    people: new Queue(),
    submitted: false,
    waiting: true,
    savedName: '',
    na: {value: '', touched: false}
  }

  componentDidMount() {
    apiService.getPets()
      .then(data => {
        let cData = data.cats.first;
        let cQueue = new Queue();
        cQueue.enqueue(cData.data)
        
        let nc = cData.next;
        while(nc) {
          cQueue.enqueue(nc.data)
          nc = nc.next
        }
        this.setState({cats: cQueue})


        let dData = data.dogs.first;
        let dQueue = new Queue();
        dQueue.enqueue(dData.data)
        
        let nd = dData.next;
        while(nd) {
          dQueue.enqueue(nd.data)
          nd = nd.next
        }
        this.setState({dogs: dQueue})
      })
    
    apiService.getPeople()
      .then(data => {
        if (data.first){
        let pData = data.first;
        let pQueue = new Queue();
        pQueue.enqueue(pData.data)
        
        let np = pData.next;
        while(np) {
          pQueue.enqueue(np.data)
          np = np.next
        }
        this.setState({people: pQueue, na: {value: '', touched: false}})
      } else {
        let pQueue = new Queue()
        this.setState({people: pQueue, na: {value: '', touched: false}})
      }
      })
  }

  setName = (n) => {
    this.setState({ na: { value: n, touched: true } });
  }

  validateName = () => {
    const n = this.state.na.value;
    if (!n) {
      return 'name is required';
    } 
  }

  

  handleUpdatePeople = (n) => {
    
    
    apiService.postPerson(n)
      .then(data => {
        let pData = data.first;
        let pQueue = new Queue();
        pQueue.enqueue(pData.data)
        
        let np = pData.next;
        while(np) {
          pQueue.enqueue(np.data)
          np = np.next
        }
        this.setState({people: pQueue})
      });

    this.setState({waiting: true, submitted: true, savedName: n});
  }

  handleWaiting = () => {
    this.setState({waiting: false})
  }

  peoplePush = () => {
    const current = this.state.people.first.data;
    if (current !== this.state.savedName) {
      this.handleDeletePerson();
    } else {
      this.handleWaiting();
    }
  }

  handleDeletePerson = () => {
    apiService.deletePerson()
    this.state.people.dequeue();
    const queue = this.state.people;
    this.setState({people: queue})
  }



  render() {
    return (
      <UserContext.Provider value = {{
        cats: this.state.cats,
        dogs: this.state.dogs,
        people: this.state.people,
        name: this.state.na,
        submitted: this.state.submitted,
        waiting: this.state.waiting,
        savedName: this.state.savedName,
        validateName: this.validateName,
        setName: this.setName,
        handleUpdatePeople: this.handleUpdatePeople,
        peoplePush: this.peoplePush,
        handleWaiting: this.handleWaiting,
        handleAdoptAnimal: this.handleAdoptAnimal,
        handleDeletePerson: this.handleDeletePerson
      }}>
        <Fragment>
          <main>
          <BrowserRouter>
          <ErrorPage>
            <Switch>
              <Route
                exact path = {'/'}
                component = {HomePage}/>
              <Route
                exact path = {'/adopt'}
                component = {AdoptPage}/>
            </Switch>
            </ErrorPage>
          </BrowserRouter>
          </main>
        </Fragment>
      </UserContext.Provider>
    );
  };
};

export default Root

