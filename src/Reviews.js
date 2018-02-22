import React, { Component } from 'react';
import './style/Reviews.css';

const url = 'http://webhose.io/reviewFilter?token=485b74f2-1b38-4a80-9fb3-19819afae4e2&format=json&ts=1515964550546&sort=crawled&q=Adidas%20NEO%20Cloudfoam%20language%3Aenglish%20item.country%3AUS';
//Asics Gel-Lyte Trainers

class Review extends Component {

    constructor() {
        super();
        this.state = {

            footware: [],
        }
    }

    componentDidMount() {
        fetch(url).then(reviews => {

                return reviews.json();
            }
        ).then(data => {

            let footware = data.reviews.map((inst) => {

                return (

                    <div key={inst.reviews}>
                        {/*<img src={inst.item.title} alt="Title" />*/}
                        <h1 className="reviewTitle">{inst.item.title}</h1>
                        <h3 className="reviewText">{inst.text}</h3>
                    </div>
                )

            })
            this.setState({footware: footware});
            console.log("This is Review State: ", this.state.footware);
        })
    }

    render() {

        return (

            <div className="container">
                <div className="container">

                    {this.state.footware}

                </div>
            </div>

        )
    }
}


export default Review;