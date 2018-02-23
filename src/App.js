import React, { Component } from 'react';
import logo from './logo.svg';
import './style/App.css';
import Review from "./components/Reviews";
import Desc from './components/Discription';
import Compare from "./components/Comparison";


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Proximity Marketing App</h1>
        </header>
        <p className="App-intro">
            <img src="../images/shoe.png" className="Shoe-info" alt="Hurrican 16" />
            <br/>
            <img src="../images/demoreview.png" className="Review-info" alt="Review Info" />
            <br/>
            <img src="../images/pricecompare.png" className="Price-info" alt="Price Info" />
        </p>
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
