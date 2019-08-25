// var firebaseConfig = {
//     apiKey: "AIzaSyDEUBOwplKpkajTp_gNP2hCXzy4IWKj6SU",
//     authDomain: "project-1-2019-6bd23.firebaseapp.com",
//     databaseURL: "https://project-1-2019-6bd23.firebaseio.com",
//     projectId: "project-1-2019-6bd23",
//     storageBucket: "project-1-2019-6bd23.appspot.com",
//     messagingSenderId: "1013960643985",
//     appId: "1:1013960643985:web:d0b61bc128518812"
// };


// Initialize Firebase
// firebase.initializeApp(firebaseConfig);
// var database = firebase.database();

//Query for ajax request on github jobs
// var language = $('target language f')
var queryURL = "https://github-jobs-proxy.appspot.com/positions?description=javascript&location=san+francisco"

$.ajax ({
  url: queryURL,
  method: "GET"

}).then(function(r) {
  console.log(queryURL);
  console.log(r)
//For each job in the response, create a new div dynamically to display the data
  for (let i = 0; i < r.length; i++) {

    var jobDiv = $('<div>').addClass('row');

    console.log
// Creates div to store basic company search result information as a bootstrap card
    var newCard = $('<div>').addClass('card col-4');

    var companyLogo = $('img').attr('src', r[i].company_logo);
    newCard.append(companyLogo);
    var applyNow = $('<a>').attr('href', r[i].how_to_apply).text('Apply Now').addClass('btn btn-primary');//Change color of this button to better reflect styling on results page
    // Created second div to store information within the card body
    var cardBody = $('<div>').addClass('card-body');
    // Creating elements to store information in card, with corresponding classes to format in bootstrap
    var title = $('<h5>').text(r[i].title).addClass('card-title'); 
    var companyName = $('<p>').text(r[i].company).addClass('card-title');
    var companySite = $('<a>').text(r[i].company_url);
    companySite.attr('href', r[i].company_url).addClass('card-text'); 
    //Add information to the card body
    cardBody.append(title, companyName, companySite, applyNow)
    //Add image and card body to the card to complete the card
    newCard.append(companyLogo, cardBody);
    //Add each job cart to a div (descrpition not added yet)
    jobDiv.append(newCard)
    $('#jobs').append(jobDiv);
    // var desc = $('p')
    
    


    
  }

})


var map;

function initMap() {
  //Below is all sample data representing potential JSON returns from freelancers
  var SF = {lat: 37.7749, lng: -122.4194};
  map = new google.maps.Map(document.getElementById('map'), {
    center: SF,
    zoom: 10
  });
  var seekerReturn = [
    jobseeker1 = {
      name : 'John Smith',
      skills: ['JSON', 'HTML', 'React', 'bullshitting'],
      location: {lat: 40.7508, lng: -111.8610}
    },
    jobseeker2 = {
      name : 'Hane Doe',
      skills : ['jQuery', 'bootstrap', 'React', 'bullshitting'],
      location : {lat: 40.7421, lng: -111.9110}
    },
    jobseeker3 = {
      name : 'Jane Donte',
      skills : ['jQuery', 'bootstrap', 'React', 'bullshitting'],
      location : {lat: 40.8708, lng: -111.7910}
    }
  ]
  var marker = new google.maps.Marker({position: SF, map: map});
  // var marker = new google.maps.Marker({position: seekerReturn[0].location, map: map});
  // var marker = new google.maps.Marker({position: seekerReturn[1].location, map: map});
  // var marker = new google.maps.Marker({position: seekerReturn[2].location, map: map});
  

 
}
initMap();