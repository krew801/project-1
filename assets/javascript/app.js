var language = $('.search-job').text();
var queryURL = "https://github-jobs-proxy.appspot.com/positions?description=" + language + "&location=san+francisco"

$('.search-btn').on('click', function(){
  
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
      // var desc = $('p').(r[i].description)
      jobDiv.append(newCard)
      $('#jobs').append(jobDiv);
      
      


      
    }

  })
})

var map;

function initMap() {
  //Below is all sample data representing potential JSON returns from freelancers
  var SF = {lat: 37.7749, lng: -122.4194};
  map = new google.maps.Map(document.getElementById('map'), {
    center: SF,
    zoom: 10
  });

  var marker = new google.maps.Marker({position: SF, map: map});

  

 
}
initMap();