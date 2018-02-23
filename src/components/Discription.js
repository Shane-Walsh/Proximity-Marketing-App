import React, { Component } from 'react';
import '../style/Description.css';
//import Picview from "./Pics";

//const url = 'http://webhose.io/productFilter?token=485b74f2-1b38-4a80-9fb3-19819afae4e2&format=json&q=Asics%20Gel-Lyte&ts=1516740126505&size=1';
//Asics Gel-Lyte Trainers

const url = 'http://webhose.io/productFilter?token=485b74f2-1b38-4a80-9fb3-19819afae4e2&format=json&q=Women%20Running%20Trainers%20brand%3A(Asics)%20price%3A%3C70%20site%3Atesco.com&ts=1511569838153&size=1';

class Review extends Component {

    constructor() {
        super();
        this.state = {

            footware: [],
        }
    }

    componentDidMount() {
        fetch(url).then(products => {

                return products.json();
            }
        ).then(data => {

            let footware = data.products.map((inst) => {

                return (

                    <div className="card" key={inst.products}>
                        <h2 className="descTitle">{inst.name}</h2>
                        <img src={inst.images} alt="Footware" className="imgDesc"/>
                        <div className="container">
                            <h5 className="reviewTitle">{inst.description}</h5>
                            <hr/>
                        </div>
                    </div>
                )

            })
            this.setState({footware: footware});
            console.log("This is Description State: ", this.state.footware);
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