import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


class LandingPage extends Component {

    render() {
        return(
            <MuiThemeProvider>

                <div className="card">
                    <br/>
                    <img src={ require('../assets/mallbeacons.jpg') } alt="Beacons" className="imgDesc" />
                    <br/><br/>
                </div>
                <p><h1>Proximity Marketing App</h1></p>
                <div className="card">
                    <br/><br/>
                    <p>Don't forget to switch Bluetooth on at Shane's Super Stores to avail of product reviews & special offers</p>
                    <br/><br/>
                </div>
            </MuiThemeProvider>
        )
    }
}

export default LandingPage;