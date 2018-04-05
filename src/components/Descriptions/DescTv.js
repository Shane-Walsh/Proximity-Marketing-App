import React, { Component } from 'react';
import '../../style/Description.css';

class DescTvPage extends Component {

    render() {

        return (

            <div className="container">
                <div className="container">

                    <div className="card">
                        <h2 className="descTitle">Samsung 65-Inch 4K Ultra HD Smart TV</h2>
                        <img src={ require('../../assets/tv.png') } alt="HD TV" className="imgDesc" />
                        <div className="container">
                            <p>
                                Certified with HDR<br/>
                                4K Streaming with Tizen<br/>
                                Picture quality: 1300 PQI<br/>
                                TV PLUS<br/>
                                HDMI x 3<br/>
                            </p>
                            <p>Enjoy beautiful, clear imagery with the Samsung UE65MU6120 65" Smart
                                4K Ultra HD HDR LED TV's Ultra HD quality. Discover 17 million colours leaping off
                                your screen with UHD resolution and enjoy your favourite shows and movies at their best.
                                Sharp details, deep colours and bursting brightness make you feel like you're right in the
                                action thanks to High Dynamic Range technology.
                            </p>
                            <hr/>
                        </div>
                    </div>

                </div>
            </div>

        )
    }
}


export default DescTvPage;