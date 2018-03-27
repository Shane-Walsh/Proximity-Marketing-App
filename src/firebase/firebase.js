import * as firebase from 'firebase'

// Initialize Firebase
var config = {
    apiKey: "AIzaSyDg4bsT7tIGx-QEo3SVYwaEZULrnaX6VLA",
    authDomain: "proximity-marketing-842e5.firebaseapp.com",
    databaseURL: "https://proximity-marketing-842e5.firebaseio.com",
    projectId: "proximity-marketing-842e5",
    storageBucket: "",
    messagingSenderId: "549732289667"
};

firebase.initializeApp(config);

export default firebase;