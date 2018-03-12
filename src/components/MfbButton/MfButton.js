import React, { Component } from 'react';
//import PureRenderMixin from 'react-addons-pure-render-mixin';
import './menu.css';


class MfButton extends Component {

    render(){

        return(
            <div className="floating-menu">
                <ul className="floating-menu-list">
                    <li className="floating-menu-header">Redeem Voucher</li>
                </ul>
            </div>
        );

    }

}

export default MfButton;
