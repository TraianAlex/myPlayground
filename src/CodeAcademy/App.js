// @ts-nocheck
import React, { Component } from 'react';
import { TopNumber } from './TopNumber';
import { Display } from './Display';
import { Target } from './Target';
import { random, clone } from './helpers';
import 'bootstrap/dist/css/bootstrap.css';

const fieldStyle = {
  position: 'absolute',
  width: 250,
  bottom: 60,
  left: 10,
  height: '60%',
};

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      game: false,
      targets: {},
      latestClick: 0,
    };

    this.intervals = null;
    this.endGame = this.endGame.bind(this);
  }

  createTarget(key, ms) {
    ms = ms || random(500, 2000);
    this.intervals.push(
      setInterval(() => {
        let targets = clone(this.state.targets);
        let num = random(1, 1000 * 1000);
        targets[key] = targets[key] !== 0 ? 0 : num;
        this.setState({ targets: targets });
      }, ms),
    );
  }

  hitTarget(e) {
    if (e.target.className !== 'target') return;
    let num = parseInt(e.target.innerText);
    // eslint-disable-next-line
    for (let target in this.state.targets) {
      let key = Math.random().toFixed(4);
      this.createTarget(key);
    }
    this.setState({ latestClick: num });
  }

  startGame() {
    this.createTarget('first', 750);
    this.setState({
      game: true,
    });
  }

  endGame() {
    this.intervals.forEach(int => {
      clearInterval(int);
    });
    this.intervals = [];
    this.setState({
      game: false,
      targets: {},
      latestClick: 0,
    });
  }

  componentWillMount() {
    this.intervals = [];
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.latestClick < prevState.latestClick) {
      this.endGame();
    }
  }

  render() {
    let buttonStyle = {
      display: this.state.game ? 'none' : 'inline-block',
    };
    let targets = [];
    for (let key in this.state.targets) {
      targets.push(<Target number={this.state.targets[key]} key={key} />);
    }
    return (
      <div className="container mb-5">
        <TopNumber number={this.state.latestClick} game={this.state.game} />
        <Display number={this.state.latestClick} />
        <button onClick={() => this.startGame()} style={buttonStyle}>
          New Game
        </button>
        <div style={fieldStyle} onClick={(e) => this.hitTarget(e)}>
          {targets}
        </div>
      </div>
    );
  }
}
