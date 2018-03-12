import React, { Component } from 'react';

import * as routes from '../constants/routes';
import { Link } from 'react-router-dom';



class TestPage extends Component {
    render() {
        return(
            <div>
                <h4>TEST PAGE</h4>
                <button><Link to={routes.VOUCHER}>VOUCHER REDEEM</Link></button>
            </div>
        )
    }
}

export default TestPage;