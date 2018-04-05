import React, { Component } from 'react';
import firebase from '../firebase/firebase';
import GoogleButton from 'react-google-button'
import '../style/Signin.css';

const provider = new firebase.auth.GoogleAuthProvider();
const voucherifyClient = require('voucherify')

const client = voucherifyClient({
    applicationId: '2fec3394-7a05-4f36-b431-0129e74d904b',
    clientSecretKey: 'fb668b0b-b2cf-4c63-b28c-58efb561f588'
})

class SignInPage extends Component {

    Constructor() {
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount(){
    //put voucher here
    }

    handleClick(){
        document.location.assign(document.location.origin + "/Voucher")
    }

    render(){

        return(

            <div className="vContain">
            <div className="vtitle">
                Sign In to Redeem Voucher
            </div>
                <div className="bt-g">
                    <GoogleButton
                        onClick={this.handleClick}
                    />
                </div>
            </div>
        );
    }

}
export default SignInPage;
