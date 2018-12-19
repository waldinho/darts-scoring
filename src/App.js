import React, { Component } from 'react';
import './App.css';
class App extends Component {

  constructor() {
    super();
    this.addScore = this.addScore.bind(this);
    this.handleScoreChange1 = this.handleScoreChange1.bind(this);
    this.handleScoreChange2 = this.handleScoreChange2.bind(this);
    this.state = {
      player1scores: [],
      player1scoreInput: 0,
      player2scores: [],
      player2scoreInput: 0,
    };
  }

  addScore() {
    const currentScoresPlayer1 = this.state.player1scores;
    const currentScoresPlayer2 = this.state.player2scores;
    const newScores1 = currentScoresPlayer1.concat(this.state.scoreInput1);
    const newScores2 = currentScoresPlayer2.concat(this.state.scoreInput2);
    const player1Sum = this.state.player1Sum;
    const player2Sum = this.state.player2Sum;
    this.setState({ 
      player1scores: newScores1,
      player2scores: newScores2,
      player1Sum: 501 - this.state.player1scores.reduce((a, b) => a + b, 0) - this.state.scoreInput1,
      player2Sum: 501 - this.state.player2scores.reduce((a, b) => a + b, 0) - this.state.scoreInput2,
    })
    if (player1Sum < this.state.scoreInput1) {
      this.setState({ 
        player1Sum: player1Sum,
      })
      newScores1.pop(newScores1.length - 1, newScores1.length)
    }
    if (player1Sum - this.state.scoreInput1 === 1) {
      this.setState({ 
        player1Sum: newScores1[newScores1.length -1] + 1
      })
      newScores1.pop(newScores1.length - 1, newScores1.length)
    }
    if (player2Sum < this.state.scoreInput2) {
      this.setState({ 
        player2Sum: player2Sum,
      })
      newScores2.pop(newScores2.length - 1, newScores2.length)
    }
    if (player2Sum - this.state.scoreInput2 === 1) {
      this.setState({ 
        player2Sum: newScores2[newScores2.length -1] + 1
      })
      newScores2.pop(newScores2.length - 1, newScores2.length)
    }
  }

  handleScoreChange1(e) {
    this.setState({ 
      scoreInput1: parseInt(e.target.value),
    });
  }

  handleScoreChange2(e) {
    this.setState({ 
      scoreInput2: parseInt(e.target.value),
    });
  }

  render() {
    const player1Sum = this.state.player1Sum
    const player2Sum = this.state.player2Sum
    return (
      <div>
        <input name="player1scores" type="number" max="180" placeholder="Score" onChange={this.handleScoreChange1}/>
        <input name="player2scores" type="number" max="180" placeholder="Score" onChange={this.handleScoreChange2}/>
        <button onClick={this.addScore.bind(this, this.state.scoreInput1, this.state.scoreInput2)}>add</button>
        <p>{player1Sum ? player1Sum : '501'}</p>
        <p>{player2Sum ? player2Sum : '501'}</p>
      </div>
    );
  }
}

export default App;
