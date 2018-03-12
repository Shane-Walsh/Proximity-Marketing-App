import React, { Component } from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import '../../style/Button.css';


class FloatingButton extends Component {

    render(){

        return(
            <div>
                <FloatingActionButton className="floating-action-button" secondary={true} href="../Res/Voucher/Voucher">
                    <ContentAdd />
                </FloatingActionButton>

            </div>
        );
    }
}
export default FloatingButton;