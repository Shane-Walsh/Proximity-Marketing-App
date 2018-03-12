import React, { Component } from 'react';
//import '../../style/Floatbutton.css';

import FloatingActionButton from 'material-ui/FloatingActionButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import GiftcardIcon from 'material-ui/svg-icons/action/card-giftcard';

const style = {
    marginRight: 20,
    marginBottom: 20,
};


class FloatingButtonItem extends Component {

    handleClick() {
        this.props.action();
    }

    render() {
        let buttonStyle = {
            backgroundImage: `url(${this.props.icon})`
        }

        let label;

        if (this.props.label) {
            label = <label>{this.props.label}</label>;
        }

        return <div
            onClick={this.handleClick.bind(this)}
            className="floating-menu-item">
            {label}
            <div className="floating-menu-icon"></div>
        </div>;
    }
}
export default FloatingButtonItem;