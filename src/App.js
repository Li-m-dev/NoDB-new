import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Rocket from './components/Rocket/Rocket';
import Launch from './components/Launch/Launch';
import WatchList from './components/WatchList/WatchList'

class App extends Component {
  state = {
    rockets: [],
    launches: [],
    watchList: [],
    input: "",
    selectLaunches: true,
    selectRocket: false,
    selectWatchList: false
  }
  componentDidMount() {
    axios
    .get('/api/rockets')
    .then(response => {
      console.log('response: ', response);
      this.setState({
        rockets: response.data
      })
    });
    axios
    .get('/api/launches')
    .then(response => {
      console.log('response: ', response);
      this.setState({
        launches: response.data
      })
    });
    axios
    .get('/api/watchlist')
    .then(response => {
      console.log('response: ', response);
      this.setState({
        watchList: response.data
      })
    })

  }

  addToWatchList = (launch) => {
    axios
    .post('/api/watchlist', launch)
    .then(response => {
      console.log('response: ', response);
      this.setState({
        watchList: response.data
      })
    })
  }

  updateWatchList = (id) => {
    axios
    .put(`/api/watchlist/${id}`, {notes: this.state.input})
    .then(response => {
      this.setState({
        watchList:response.data,
        input: ""
      })
    })
  }

  deleteFromWatchList = (id) => {
    axios
    // this endpoint is using query 
    .delete(`/api/watchlist?id=${id}`)
    // the one below is using param
    // .delete(`/api/watchlist/${id}`)
    .then(response => {
      this.setState({
        watchList: response.data
      })
    }
    )
  }
  handleInput = (e) => {
    this.setState({
      input: e.target.value
    })
  }

  renderLaunches = () => {
    this.setState({
      selectLaunches: true,
      selectRocket: false,
      selectWatchList: false
    })
  }
  renderRockets = () => {
    this.setState({
      selectLaunches: false,
      selectRocket: true,
      selectWatchList: false
    })
  }
  renderWatchList = () => {
    this.setState({
      selectLaunches: false,
      selectRocket: false,
      selectWatchList: true
    })
  }

  render() {
    const displayRockets = this.state.rockets.map(rocket => {
      return (
        <Rocket
        key = {rocket.rocketid}
        name = {rocket.name}
        description = {rocket.description}
        img = {rocket.flickr_images[1]}
        />
      )
    });
    const displayLaunches = this.state.launches.map(launch => {
      return (
        <Launch
        key = {launch.flight_number}
        id = {launch.flight_number}
        name = {launch.mission_name}
        details = {launch.details}
        img = {launch.links.mission_patch_small}
        addToWatchList = {this.addToWatchList}
        
        />
      )
    });
    const displayWatchList = this.state.watchList.map((launch,i )=> {
      return (
        <WatchList
        key = {i}
        id = {launch.id}
        name = {launch.name}
        details = {launch.details}
        img = {launch.img}
        notes = {launch.notes}
        input = {this.input}
        deleteFromWatchList = {this.deleteFromWatchList}
        updateWatchList = {this.updateWatchList}
        handleInput = {this.handleInput}
        />
      )
    })
    return (
      <div className="App">
      <button onClick={this.renderLaunches}>Home</button>
      <button onClick={this.renderRockets}>Rockets</button>
      <button onClick={this.renderWatchList}>Watch List</button>
      {this.state.selectRocket ? displayRockets : null}
      {this.state.selectLaunches ? displayLaunches : null}
      {this.state.selectWatchList ? displayWatchList : null}
    
      </div>
    );
  }
}

export default App;
