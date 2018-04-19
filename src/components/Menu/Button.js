import React, { Component } from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import RedeemIcon from 'material-ui/svg-icons/action/redeem';
import '../../style/Button.css';

class FloatingButton extends Component {

    handleClick(){
        //window.location.href = "/voucher";
        //conditional: if user signed in
        //window.location.href = "/signin";
        document.location.assign(document.location.origin + "/Signin")
    }

    render(){

        return(
            <div>
                <FloatingActionButton className="floating-action-button" secondary={true} onClick={this.handleClick}>
                    <RedeemIcon />
                </FloatingActionButton>
            </div>
        );
    }
}
export default FloatingButton;