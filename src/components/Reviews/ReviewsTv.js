import React, { Component } from 'react';
import '../../style/Reviews.css';
import StarRatingComponent from 'react-star-rating-component';

//Criteria: Samsung 4K Smart TV language:english rating:5
const url = 'https://webhose.io/reviewFilter?token=485b74f2-1b38-4a80-9fb3-19819afae4e2&format=json&ts=1520370469258&sort=crawled&q=Samsung%204K%20Smart%20TV%20language%3Aenglish%20rating%3A5&size=7';


class ReviewsTvPage extends Component {

    constructor() {
        super();
        this.state = {

            electronics: [],
        }
    }

    componentDidMount() {
        fetch(url).then(reviews => {

                return reviews.json();
            }
        ).then(data => {

            let electronics = data.reviews.map((inst) => {

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
            this.setState({electronics: electronics});
            console.log("This is Review State: ", this.state.electronics);
        })
    }

    render() {

        return (

            <div className="container">
                <div className="container">

                    {this.state.electronics}

                </div>
            </div>

        )
    }
}


export default ReviewsTvPage;