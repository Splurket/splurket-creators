import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
const config = {
    apiKey: "AIzaSyC-BUGGSsvUX8z4W1LcsJzS59yrL4__EsE",
    authDomain: "splurket-66df1.firebaseapp.com",
    databaseURL: "https://splurket-66df1-default-rtdb.firebaseio.com",
};

firebase.initializeApp(config);

export const auth = firebase.auth;
export const db = firebase.database();
