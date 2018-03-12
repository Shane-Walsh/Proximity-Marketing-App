import React, { Component } from 'react';
import './style/App.css';


import { BrowserRouter, Route } from 'react-router-dom';
import * as routes from './constants/routes';
import RedeemVoucher from "./routes/Voucher";

import LandingPage from "./routes/Landing";
import TestPage from './routes/Test';

class App extends Component {
  render() {
    return (
        <BrowserRouter>
            <div className="App">

                <Route
                    exact path={routes.LANDING}
                    component={() => <LandingPage />}
                />
                <Route
                    exact path={routes.VOUCHER}
                    component={() => <RedeemVoucher />}
                    />
                <Route
                    exact path={routes.TEST}
                    component={() => <TestPage />}
                />
            </div>
        </BrowserRouter>
    );
  }
}

export default App;
