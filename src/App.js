import React, { Component } from "react";
import GamePicker from "./components/GamePicker/GamePicker";
import GroupCard from "./components/GroupCard/GroupCard";
import AttrPicker from "./components/AttrPicker/AttrPicker";
import ScoreKeeper from "./components/ScoreKeeper/ScoreKeeper";
import GameActions from "./components/GameActions/GameActions";
import Spinner from "./components/Spinner/Spinner";
import "./App.css";

class App extends Component {
  state = {
    isLoading: false,
    api: "people",
    population: [],
    firstPlayer: [],
    secondPlayer: [],
    attribute: "mass",
    winner: "",
    scores: [0, 0]
  };

  starshipSelector = () => {
    this.setState({ api: "starships", attribute: "crew", isLoading: true });
    setTimeout(() => {
      this.fetchData();
    }, 0);
    console.log(this.state);
  };

  peopleSelector = () => {
    this.setState({ api: "people", attribute: "mass", isLoading: true });
    setTimeout(() => {
      this.fetchData();
    }, 0);
  };

  fetchData = () => {
    this.setState({ isLoading: true });
    fetch(`https://swapi.co/api/${this.state.api}/?format=json`)
      .then(res => {
        if (res.status !== 200 && res.status !== 201) {
          throw new Error("Failed!");
        }
        return res.json();
      })
      .then(resData => {
        this.setState({ population: [...resData.results] });
      })
      .then(data => {
        this.setState({ isLoading: false });
        this.playGame();
      })
      .catch(err => {
        console.log(err);
        this.setState({ isLoading: false });
      });
  };

  componentDidMount() {
    this.fetchData();
  }

  playGame = () => {
    this.setState(prevState => {
      const random = () =>
        Math.floor(Math.random() * this.state.population.length);
      const firstPlayer = this.state.population[random()];
      const secondPlayer = this.state.population[random()];
      const attribute = this.state.attribute;
      let scores = prevState.scores;
      let winner =
        parseInt(firstPlayer[attribute]) > parseInt(secondPlayer[attribute])
          ? "firstPlayer"
          : "secondPlayer";
      winner === "firstPlayer" ? scores[0]++ : scores[1]++;
      if (firstPlayer[attribute] === secondPlayer[attribute]) {
        winner = "";
        scores[1]--;
      }

      return {
        firstPlayer: firstPlayer,
        secondPlayer: secondPlayer,
        winner: winner
      };
    });
  };

  attributeSelector = attribute => {
    this.setState({ attribute: attribute });
  };

  resetGame = () => {
    this.setState({ scores: [0, 0] });
  };

  render() {
    return (
      <div className="container main">
        <GamePicker
          onPeople={this.peopleSelector}
          onStarship={this.starshipSelector}
          active={this.state.api}
        />

        <AttrPicker
          active={this.state.attribute}
          attributeSelector={this.attributeSelector}
          api={this.state.api}
        />
        <ScoreKeeper score={this.state.scores} />
        <GameActions nextRound={this.playGame} onReset={this.resetGame} />
        {this.state.isLoading ? (
          <Spinner />
        ) : (
          <GroupCard
            firstPlayer={this.state.firstPlayer}
            secondPlayer={this.state.secondPlayer}
            winner={this.state.winner}
            gammerType={this.state.api}
          />
        )}
      </div>
    );
  }
}

export default App;
