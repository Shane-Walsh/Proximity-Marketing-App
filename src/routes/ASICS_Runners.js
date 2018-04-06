import React, { Component } from 'react';
import Review from "../components/Reviews/Reviews";
import Desc from '../components/Descriptions/Description';
import Compare from "../components/Compare/Comparison";
import FloatingButton from '../components/Menu/Button';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


class FootwarePage extends Component {

    render() {
        return(
            <MuiThemeProvider>
                <div>
                    <Desc/>
                    <h1>Reviews</h1>
                    <Review/>
                    <h1>Price Comparison</h1>
                    <Compare/>
                    <FloatingButton />
                </div>
            </MuiThemeProvider>
        )
    }
}

export default FootwarePage;