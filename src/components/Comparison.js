import React, { Component } from 'react';
import '../style/Compare.css';
//import Picview from "./Pics";

const url = 'https://webhose.io/productFilter?token=485b74f2-1b38-4a80-9fb3-19819afae4e2&format=json&q=Asics%20FuzeX%20Lyte%20language%3Aenglish%20price%3A%3E100%20price%3A%3C140&size=4';
//Nike < 140
//http://webhose.io/productFilter?token=485b74f2-1b38-4a80-9fb3-19819afae4e2&format=json&q=Women%20Running%20brand%3ANike%20site%3Aaliexpress.com%20price%3A%3C140&ts=1516747792991
//Adidas
//http://webhose.io/productFilter?token=485b74f2-1b38-4a80-9fb3-19819afae4e2&format=json&q=Women%20Running%20Trainers%20brand%3AAdidas%20price%3A%3C140%20OR%20brand%3ANike%20site%3Aebay.com%20OR%20site%3Atesco.com%20OR%20site%3Aaliexpress.com&ts=1516749035484
//http://webhose.io/productFilter?token=485b74f2-1b38-4a80-9fb3-19819afae4e2&format=json&q=Women%20Running%20Trainers%20brand%3AAdidas%20price%3A%3C140%20OR%20brand%3ANike%20site%3Aebay.com%20OR%20site%3Atesco.com%20OR%20site%3Aaliexpress.com&ts=1511565298768
class Compare extends Component {

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
                            <img src={inst.images} alt="Compare" className="imgComp"/>

                            <div className="container">
                            <h2 className="compTitle">{inst.name}</h2>
                            <h3>{inst.source.site}</h3>
                            <h3>€ {inst.price}</h3>
                            <hr/>
                        </div>
                    </div>
                )

            })
            this.setState({footware: footware});
            console.log("This is Comparison State: ", this.state.footware);
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


export default Compare;