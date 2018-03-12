import React, { Component } from 'react';
import FloatingButtonItem from './ButtonItem';
import '../../style/Floatbutton.css';

import MdAdd from 'react-icons/lib/md/add';

import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import GiftcardIcon from 'material-ui/svg-icons/action/card-giftcard';

const style = {
    marginRight: 20,
    marginBottom: 20,
};

const label = "Voucher";


class FloatingMenu extends Component {
    constructor() {
        super();

        this.state = {
            toggled: false
        }
    }

    toggleMenu() {
        this.setState({toggled: !this.state.toggled});
    }

    handleOnclick(){

            window.location.href = "/";
    }

    render() {
        let buttons = [];
        let className = "floating-menu";
        let icon = "MdAdd";

        if (this.state.toggled) {
            className += " open";
            //icon = "clear";
            buttons.push(

                <FloatingButtonItem icon={MdAdd} label="Register" onClick={this.handleOnclick} key="i1"/>


            );
            buttons.push(
                <FloatingButtonItem faIcon="plus" label="Login" icon="MdAdd" onClick={this.handleOnclick} key="i1"/>);

        }

        buttons.push(

            <FloatingButtonItem icon="icon" label="Redeme Voucher" action={this.toggleMenu.bind(this)} key="m"/>

        );

        return <div className="container">
            <div className={className}>
                {buttons}
            </div>
        </div>;
    }
}

export default FloatingMenu;