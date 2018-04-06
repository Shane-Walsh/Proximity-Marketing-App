import React, { Component } from 'react';
import FloatingButton from '../components/Menu/Button';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import DescTvPage from "../components/Descriptions/DescTv";
import ReviewsTvPage from "../components/Reviews/ReviewsTv";
import CompareTvPage from "../components/Compare/CompareTv";


class LandingPage extends Component {

    render() {
        return(
            <MuiThemeProvider>
                <div>
                    <DescTvPage/>
                    <h1>Reviews</h1>
                    <ReviewsTvPage/>
                    <h1>Price Comparison</h1>
                    <CompareTvPage/>
                    <FloatingButton />
                </div>
            </MuiThemeProvider>
        )
    }
}

export default LandingPage;