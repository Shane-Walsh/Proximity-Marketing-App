import React, { Component } from 'react';
import '../../style/Reviews.css';
import StarRatingComponent from 'react-star-rating-component';

const url = 'https://webhose.io/reviewFilter?token=485b74f2-1b38-4a80-9fb3-19819afae4e2&format=json&ts=1522501482310&sort=crawled&q=ASICS%20GEL%20language%3Aenglish&size=5';

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
                    <div className="card" key={inst.reviews}>
                        <h4 className="reviewTitle">Rating <span className="rating"> {inst.rating} / 5 </span> By <span className="author">{inst.author} </span> From {inst.item.country}</h4>

                        <div>
                            <StarRatingComponent name="starRating" starCount={5} value={inst.rating} />
                        </div>

                            <div className="container">
                                <p className="reviewText">{inst.text}</p>
                                <hr/>
                            </div>
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