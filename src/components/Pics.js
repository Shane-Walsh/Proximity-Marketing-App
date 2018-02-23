import React, { Component } from 'react';
import '../style/App.css';

//const url = 'http://webhose.io/reviewFilter?token=485b74f2-1b38-4a80-9fb3-19819afae4e2&format=json&ts=1515964550546&sort=crawled&q=Adidas%20NEO%20Cloudfoam%20language%3Aenglish%20item.country%3AUS';

class Picview extends Component {

    constructor() {
        super();
        this.state = {

            pictures: [],
        }
    }

    componentDidMount() {
        fetch('https://randomuser.me/api/?results=1&gender=female').then(results => {

                return results.json();
            }
        ).then(data => {

            let pictures = data.results.map((item) => {

                return (

                    <div key={item.results}>
                        <img src={item.picture.medium} alt="pic" />
                    </div>
                )

            })
            this.setState({pictures: pictures});
            console.log("This is State: ", this.state.pictures);
        })
    }

    render() {

        return (

            <div className="container">
                <div className="container">

                    {this.state.pictures}

                </div>
            </div>

        )
    }
}


export default Picview;