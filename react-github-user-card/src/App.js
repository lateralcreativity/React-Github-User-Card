import React from 'react';
import './App.css';
import UserCard from './components/UserCard';
import FollowerCard from './components/FollowerCard';
import axios from 'axios';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: {},
      followers: []
    }
  }

  componentDidMount() {
    axios.get('https://api.github.com/users/lateralcreativity')
    .then(response => {
      this.setState({
        user: {...response.data}
      })
    })
    .catch(error => {
      console.log(error);
    });

    axios.get('https://api.github.com/users/lateralcreativity/followers')
    .then(response => {
      this.setState({
        followers: [...response.data]
      })
    })
    .catch(error => {
      console.log(error);
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Github User Card</h1>
        <UserCard user={this.state.user}/>
        {this.state.followers.map(follower => {
          return (
            <FollowerCard follower={follower}/>
          )
        })}
      </div>
    );
  }
}

export default App;
