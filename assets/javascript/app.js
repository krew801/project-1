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


// database.ref().set({
//     clickCount: "clickCounter"
// });



    var freelancerURL = "https://www.omdbapi.com/?t=" + movie + "&apikey=trilogy";

    $.ajax({
      url: freelancerURL,
      method: "GET"
    }).then(function(response) {
    
    });

    var mapsURL = "https://www.omdbapi.com/?t=" + movie + "&apikey=trilogy";

    $.ajax({
      url: mapsURL,
      method: "GET"
    }).then(function(response) {
    
    });