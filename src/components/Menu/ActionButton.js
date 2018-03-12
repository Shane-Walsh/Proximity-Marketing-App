import React, { Component } from 'react';

import { FloatingMenu, MainButton, ChildButton } from 'react-floating-button-menu';
import MdAdd from 'react-icons/lib/md/add';
import MdClose from 'react-icons/lib/md/close';
import Euro from 'react-icons/lib/md/euro-symbol';


class MenuButton extends Component {
//size={{ main: 56, child: 40 }}

    output(){
        window.location.href = "/";
    }


    render(){

        return(
            <FloatingMenu slideSpeed={500} direction="up" size={{ main: 56, child: 40 }}>
                <MainButton
                    label="Redeme Voucher"r
                    iconResting={Euro}
                    iconActive={MdClose}
                    iconColor="white"
                    backgroundColor="red"
                />
                <ChildButton
                    iconButton={MdAdd}
                    iconColor="black"
                    order={1}
                    backgroundColor="white"

                />
                <ChildButton
                    iconButton={MdAdd}
                    iconColor="black"
                    order={2}
                    backgroundColor="white"
                    onClick={this.output}
                />
            </FloatingMenu>
        );
    }
}
export default MenuButton;
