import React, { Component } from 'react';
import '../../style/Compare.css';


//Criteria: SAMSUNG 75 TV language:english
const url = 'https://webhose.io/productFilter?token=485b74f2-1b38-4a80-9fb3-19819afae4e2&format=json&q=SAMSUNG%204K%20LED%20SMART%20TV%2075%201080P%20language%3Aenglish&size=3';


class CompareTvPage extends Component {

    constructor() {
        super();
        this.state = {

            electronics: [],
        }
    }

    componentDidMount() {

        fetch(url).then(products => {

                return products.json();
            }
        ).then(data => {

            let electronics = data.products.map((inst) => {

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
            this.setState({electronics: electronics});
            console.log("This is Comparison State: ", this.state.electronics);
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


export default CompareTvPage;