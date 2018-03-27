import React, { Component } from 'react';
import firebase from '../firebase/firebase';

const provider = new firebase.auth.GoogleAuthProvider();

//web client id ="549732289667-2h6nh25v3kkl3mpjl5ape0trj2qodkih.apps.googleusercontent.com";
//sec = "mBUZznYNyw2DpIxOK46H-Qan";

class SignInPage extends Component {

    handleGoogleSignin(user){

        if(user){
            //if user signed in - go to voucher page
            window.location.href = "/voucher";

        }else{
            //Google social signin
            firebase.auth().signInWithRedirect(provider);
        }
    }

    componentDidMount(){

    firebase.auth().onAuthStateChanged(this.handleGoogleSignin);

    }

    render(){

        return(

            <div></div>

        );
    }

}
export default SignInPage;
