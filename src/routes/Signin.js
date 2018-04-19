import React, { Component } from 'react';
import firebase from '../firebase/firebase';
import '../style/Signin.css';

import FacebookLoginButton from 'react-social-login-buttons/lib/buttons/FacebookLoginButton';
import TwitterLoginButton from 'react-social-login-buttons/lib/buttons/TwitterLoginButton';
import InstagramLoginButton from 'react-social-login-buttons/lib/buttons/InstagramLoginButton';
import GoogleLoginButton from 'react-social-login-buttons/lib/buttons/GoogleLoginButton';

//const provider = new firebase.auth.GoogleAuthProvider();
const providerTwitter = new firebase.auth.TwitterAuthProvider();
const voucherifyClient = require('voucherify')

const client = voucherifyClient({
    applicationId: '2fec3394-7a05-4f36-b431-0129e74d904b',
    clientSecretKey: 'fb668b0b-b2cf-4c63-b28c-58efb561f588'
})

class SignInPage extends Component {

    Constructor() {
        this.handleClick = this.handleClick.bind(this);
        this.handleTwitter = this.handleTwitter.bind(this);
    }

    componentDidMount(){
    //put voucher here
    }

    handleClick(){
        document.location.assign(document.location.origin + "/Voucher")
    }

    handleTwitter(){

        firebase.auth().signInWithRedirect(providerTwitter);

       //if(user){

      // }
    }

    render(){

        return(

            <div className="vContain">
            <div className="vtitle">
                Sign in below to Redeem Voucher
            </div>
                <div className="bt-social">
                    <div className="bt-g">
                        <img src={require('../assets/pinkStar.png')} alt="voucher" className="imgVoucher"/>
                    </div>
                    <div className="bt-g">
                        <h5>By signing in you agree to share your data with voucherify.io</h5>
                    </div>
                    <div className="bt-g">
                        <GoogleLoginButton text="Google" onClick={this.handleClick}/>
                    </div><br/>
                    <div className="bt-f">
                        <FacebookLoginButton text="Facebook" onClick={this.handleClick} />
                    </div><br/>
                    <div className="bt-t">
                        <TwitterLoginButton text="  Twitter" onClick={this.handleTwitter} />
                    </div>
                </div>
            </div>
        );
    }

}
export default SignInPage;
