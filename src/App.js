import React, { Component } from 'react';
import './style/App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import * as routes from './constants/routes';
import RedeemVoucher from "./routes/Voucher";
import LandingPage from "./routes/Landing";
import SignInPage from "./routes/Signin";
import TvPage from './routes/SAMSUNG_TV';
import FootwarePage from "./routes/ASICS_Runners";


class App extends Component {
  render() {
    return (
        <BrowserRouter>
            <div className="App">
                <Route
                    exact path={routes.ASICS_RUNNERS}
                    component={() => <FootwarePage/>}
                />
                <Route
                    exact path={routes.ELECTRONIC}
                    component={() => <TvPage />}
                />
                <Route
                    exact path={routes.LANDING}
                    component={() => <LandingPage />}
                />
                <Route
                    exact path={routes.SIGNIN}
                    component={() => <SignInPage />}
                />
                <Route
                    exact path={routes.VOUCHER}
                    component={() => <RedeemVoucher />}
                    />
            </div>
        </BrowserRouter>
    );
  }
}

export default App;
