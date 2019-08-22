var firebaseConfig = {
    apiKey: "AIzaSyDEUBOwplKpkajTp_gNP2hCXzy4IWKj6SU",
    authDomain: "project-1-2019-6bd23.firebaseapp.com",
    databaseURL: "https://project-1-2019-6bd23.firebaseio.com",
    projectId: "project-1-2019-6bd23",
    storageBucket: "project-1-2019-6bd23.appspot.com",
    messagingSenderId: "1013960643985",
    appId: "1:1013960643985:web:d0b61bc128518812"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var database = firebase.database();


var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 40.768, lng: -111.891},
    zoom: 13
  });
}