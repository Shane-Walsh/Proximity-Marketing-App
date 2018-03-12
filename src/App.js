import React, { Component } from 'react';
import './style/App.css';
import Review from "./components/Reviews";
import Desc from './components/Discription';
import Compare from "./components/Comparison";
import FloatingButton from './components/Menu/Button';

//import FloatingActionButton from 'material-ui/FloatingActionButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MenuButton from "./components/Menu/ActionButton";
import MfButton from "./components/MfbButton/MfButton";
import ButtonSem from "./components/Menu/Button";
//import ContentAdd from 'material-ui/svg-icons/content/add';


const style = {
    marginRight: 20,
};



class App extends Component {
  render() {
    return (
      <div className="App">
          <MuiThemeProvider>
          <div>
              <Desc/>
              <h1>Reviews</h1>
              <Review/>
              <h1>Price Comparison</h1>
              <Compare/>
              {/*<FloatingMenu/>*/}
              {/*<MenuButton/>*/}
              {/*<MfButton/>*/}
              <FloatingButton/>
          </div>
          </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
