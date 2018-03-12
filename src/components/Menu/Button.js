import React, { Component } from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import AddIcon from 'material-ui/svg-icons/content/add';
import '../../style/Button.css';

class FloatingButton extends Component {

    handleClick(){
        window.location.href = "/voucher";
    }

    render(){

        return(
            <div>
                <FloatingActionButton className="floating-action-button" secondary={true} onClick={this.handleClick}>
                    <AddIcon />
                </FloatingActionButton>
            </div>
        );
    }
}
export default FloatingButton;