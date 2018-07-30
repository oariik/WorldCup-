import React, { Component } from 'react';
import Team from './components/Team';
import './App.css';
import CroatiaLogo from '../src/components/Croatia.png';
import FranceLogo from '../src/components/France.png';


class App extends Component {

  state = {
    croatiaVotes: 0,
    franceVotes: 0,
  };

  handleClick(team) {
    if (team == 'croatia') {
      this.setState(prevState => ({
        croatiaVotes: prevState.croatiaVotes + 1,
      }));
    }
  }

  handleClick(team) {
    if (team == 'france') {
      this.setState(prevState => ({
        franceVotes: prevState.franceVotes + 1,
      }));
    }
  }

  render() {
    return (
      <div className="app">
        <h1> Russia 2018 World Cup</h1>
        <Team votes={this.state.croatiaVotes} logo={CroatiaLogo} onClick={() => this.handleClick('croatia')} />
        <Team votes={this.state.franceVotes} logo={FranceLogo} onClick={() => this.handleClick('france')} />

      </div>
    );
  }
}

export default App;
