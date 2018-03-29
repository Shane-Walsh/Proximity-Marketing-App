import React, { Component } from 'react';
import firebase from '../firebase/firebase';
import '../style/Signin.css';

const provider = new firebase.auth.GoogleAuthProvider();

//web client id ="549732289667-2h6nh25v3kkl3mpjl5ape0trj2qodkih.apps.googleusercontent.com";
//sec = "mBUZznYNyw2DpIxOK46H-Qan";

const voucherifyClient = require('voucherify')

const client = voucherifyClient({
    applicationId: '2fec3394-7a05-4f36-b431-0129e74d904b',
    clientSecretKey: 'fb668b0b-b2cf-4c63-b28c-58efb561f588'
})

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

            //create customer object using social signin data

            client.customers.create({
                "id": "",
                "source_id": user.email,
                "name": user.displayName,
                "email": user.email,
                "description": "",
                "address": {
                "city": null,
                    "state": null,
                    "line_1": null,
                    "line_2": null,
                    "country": null,
                    "postal_code": null
            },
                "phone": "+",
                "summary": {
                "redemptions": {
                    "total_redeemed": 1,
                        "total_failed": 1,
                        "total_succeeded": 0,
                        "total_rolled_back": 0,
                        "total_rollback_failed": 0,
                        "total_rollback_succeeded": 0,
                        "gift": {
                        "redeemed_amount": 0,
                            "amount_to_go": 0
                    }
                },
                "orders": {
                    "total_amount": 0,
                        "total_count": 0,
                        "average_amount": 0,
                        "last_order_amount": 0,
                        "last_order_date": null
                }
            },
                "loyalty": {
                "points": 0,
                    "referred_customers": 0,
                    "campaigns": {}
            },
                "created_at": "2016-07-04T08:01:51Z",
                "updated_at": "2018-03-29T16:05:25Z",
                "object": "customer"
            })

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
