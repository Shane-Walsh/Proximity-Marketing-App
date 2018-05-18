import React, { Component } from 'react';
import '../../style/Compare.css';

//Criteria: ASICS Fuze X Price > 100 & Price < 140
const url = 'https://webhose.io/productFilter?token=485b74f2-1b38-4a80-9fb3-19819afae4e2&format=json&q=Asics%20FuzeX%20Lyte%20language%3Aenglish%20price%3A%3E100%20price%3A%3C140&size=4';


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