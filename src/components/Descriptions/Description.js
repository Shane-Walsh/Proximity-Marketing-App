import React, { Component } from 'react';
import '../../style/Description.css';

class Desc extends Component {

    render() {

        return (

            <div className="container">
                <div className="container">

                    <div className="card">
                        <h2 className="descTitle">Asics Gel-Lyte Trainers</h2>
                        <img src={ require('../../assets/pinkShoe.jpg') } alt="Footware" className="imgDesc" />
                        <div className="container">
                            <p>The Asics Gel-Lyte Womens Running Trainers are made with all that is required
                                for a perfect run: which includes a removable comfordry sockliner to provide
                                cushioning along with moisture wicking properties to ensure a fresh and dry
                                feeling which lasts.</p>

                                <p>The light AHAR rubbe routsole brings abrasion-resistant
                                properties to massively increase the durability of the sole along with a cushioned
                                ride. </p>

                            <p>The solyte midsole material offers extra cushioning and even more durability,
                                all while 3mm reflective details ensure nightime safety. All topped off with
                                iconic Asics branding. Product weight 0.6 kilograms.</p>
                            <hr/>
                        </div>
                    </div>

                </div>
            </div>

        )
    }
}


export default Desc;