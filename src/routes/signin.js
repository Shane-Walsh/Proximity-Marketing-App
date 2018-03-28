import React, { Component } from 'react';
import firebase from '../firebase/firebase';
import '../style/Signin.css';

const provider = new firebase.auth.GoogleAuthProvider();

//web client id ="549732289667-2h6nh25v3kkl3mpjl5ape0trj2qodkih.apps.googleusercontent.com";
//sec = "mBUZznYNyw2DpIxOK46H-Qan";

class SignInPage extends Component {

    constructor(props) {
        super(props);
        //track of component state
        this.state = {
            user_photo: '',
            user_name : '',
            user_email: '',
            user_id: ''
        }

        //handle methods needs to be bound to the constructor
        this.handleGoogleSignin = this.handleGoogleSignin.bind(this);
    }

    handleGoogleSignin(user){

        if(user){
            //if user signed in - go to voucher page
            //window.location.href = "/voucher";

                //Display user object
                console.log("Display Name: " + user.displayName);
                console.log("Email: " + user.email);
                console.log("UID: " + user.uid);
                console.log("Photo: " + user.photoURL);

            this.setState({
                user_name: user.displayName,
                user_email: user.email,
                user_id: user.uid,
                user_photo: user.photoURL
            });

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

            <div className="user_info">
                <h3 className="user_name">{this.state.user_name}</h3>
                <img src={this.state.user_photo} alt="Avatar" className="user_photo" />
            </div>

        );
    }

}
export default SignInPage;
