import React, { Component } from 'react';
import './style/App.css';
import Review from "./components/Reviews";
import Desc from './components/Discription';
import Compare from "./components/Comparison";


class App extends Component {
  render() {
    return (
      <div className="App">
          <div>
              <Desc/>
              <h1>Reviews</h1>
              <Review/>
              <h1>Price Comparison</h1>
              <Compare/>
          </div>
      </div>
    );
  }
}

export default App;
