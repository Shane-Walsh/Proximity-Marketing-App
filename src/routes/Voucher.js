import React, { Component } from 'react';
import firebase from '../firebase/firebase';

import '../style/Voucher.css';
import ExitIcon from 'material-ui/svg-icons/action/exit-to-app';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import {greenA200, white} from 'material-ui/styles/colors';

const provider = new firebase.auth.GoogleAuthProvider();

//require firestore for data stoarge
const firestore = require("firebase/firestore");

//web client id ="549732289667-2h6nh25v3kkl3mpjl5ape0trj2qodkih.apps.googleusercontent.com";
//sec = "mBUZznYNyw2DpIxOK46H-Qan";

const voucherifyClient = require('voucherify');

const client = voucherifyClient({
    applicationId: '2fec3394-7a05-4f36-b431-0129e74d904b',
    clientSecretKey: 'fb668b0b-b2cf-4c63-b28c-58efb561f588'
})

class VoucherPage extends Component {

    constructor(props) {
        super(props);
        //track of component state
        this.state = {
            user_photo: '',
            user_name : '',
            user_email: '',
            user_id: '',
            voucherObj: [],
            code: '',
            discount: '',
            qrCode: ''
        }

        //handle methods needs to be bound to the constructor
        this.handleGoogleSignin = this.handleGoogleSignin.bind(this);
        this.handleUserFirestore = this.handleUserFirestore.bind(this);
        this.handleVoucher = this.handleVoucher.bind(this);
    }

    handleUserFirestore(user){

        // Initialize Cloud Firestore through Firebase
        const db = firebase.firestore();

        //add user_info to firestore
        db.collection("user_info").add({
            name: user.displayName,
            email: user.email,
            voucherify_uid: user.uid,
            avatar: user.photoURL
        })
            .then(function(docRef) {
                console.log("Document added with ID: ", docRef.id);
            })
            .catch(function(error) {
                console.error("Error adding document: ", error);
            });
    }

    handleGoogleSignin(user){

        if(user){
            //if user signed in - go to voucher page
            //window.location.href = "/voucher";

            //Display user object on console
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

            //create customer object on Voucherify using social signin data

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
                "created_at": "",
                "updated_at": "",
                "object": "customer"
            })

            //write user info to firebase
            this.handleUserFirestore(user)

        }else{

            //Google social signin
            firebase.auth().signInWithRedirect(provider);

        }
    }

    componentDidMount(){

        firebase.auth().onAuthStateChanged(this.handleGoogleSignin);

    }

    handleVoucher(props) {

       /* console.log('VOUCHERS: ');


        client.distributions.publish({

            "campaign": "Summer Sale",
            "customer": {
                "source_id": "",
                "email": "",
                "name": ""
            },
            "metadata": {
                "test": true,
                "provider": "PMA"
            }
        })
            .then((response) => response.json())
            .then(data => this.setState({voucherObj: data.voucherObj}));
            */
    }

    handleSignOut(){

        console.log("SIGNING OUT");

        firebase.auth().signOut().then(function() {
            // Sign-out successful - then go back to product page
            //document.location.assign(document.location.origin + "/")
            window.history.go(-4);
        }).catch(function(error) {
            // error
        });

    }

    render(){

        return(
            <MuiThemeProvider>
            <div className="user_info">
                <div className="sign_out">
                    <ExitIcon color={white} hoverColor={greenA200} style={{width: 50, height: 50}} onClick={this.handleSignOut} />
                </div>
                <h3 className="user_name">{this.state.user_name}</h3>
                <img src={this.state.user_photo} alt="" className="user_photo" />
                <div><br/><br/></div>
                <div className="heading">Get Voucher and Take to Casheer</div><br/>
                <div>
                    <div className="voucherify-get-voucher"
                         data-client-app-id="2dc19d68-85a9-487b-9179-90600753c22f"
                         data-client-token="d6921199-d3cb-4f5b-b4fd-ebe31dbc1657"
                         data-email-required="true"
                         data-name-field="false"
                         data-phone-field="false"
                         data-address-line-1-field="false"
                         data-address-line-2-field="false"
                         data-postal-code-field="false"
                         data-country-field="false"
                         data-state-field="false"
                         data-city-field="false"
                         data-email-field="false"
                         data-name-required="false"
                         data-state-field-label="County"
                         data-campaign="Summer Sale">
                    </div>

                </div>
            </div>
            </MuiThemeProvider>
        );
    }

}
export default VoucherPage;
