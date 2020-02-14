import React from 'react';
import axios from 'axios'
import Card from './components/Card'
import Header from './components/Header'
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  state = {
    players:[]
  };

  componentDidMount(){
    axios
    .get('http://localhost:5000/api/players')
    .then(res => {
      console.log('players', res.data)
      this.setState({
        players:res.data
      });
    })
    .catch(err => {
      console.log("error", err);
    });

  }
  
  
  render(){

    return (
      <div className="container">
        <Header />
        <div className="cardBox">
        {this.state.players.map(player => (
          <Card key= {player.id} player={player}/>
        ))};
        </div>
      </div>
    );
  }
}

export default App;
