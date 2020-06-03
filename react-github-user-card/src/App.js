import React, { Component } from 'react';
import UserList from './components/UserList';
import FollowersList from './components/FollowersList'
import axios from 'axios';
import './App.css';

class App extends Component {

  state = {
    user: [],
    followers: []
  }
  
  componentDidMount() {
    axios.get(`https://api.github.com/users/lateralcreativity`)
    .then(res => {
      this.setState({
        user: [...this.state.user, res.data]
      })
    })
    .catch(err => console.log('Error', err))

    axios.get(`https://api.github.com/users/lateralcreativity/followers`)
    .then(res => {
      this.setState({
        followers: [...this.state.followers, ...res.data]
      })
    })
    .catch(err => console.log('Error', err))
  }

  render() {
    return (
      <div>
        <UserList userData={this.state.user} />
        <FollowersList followerData={this.state.followers} />
      </div>
    )
  }
}

export default App;
