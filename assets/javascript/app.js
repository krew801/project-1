$("#return").on('click', function() {
  window.scroll(30, 30);
});

$('.search-btn').on('click', function(){




  var language = $('#search-job').val();
  var location = $('#search-location').val();
  var queryURL = "https://github-jobs-proxy.appspot.com/positions?description=" + language + "&location=" + location;


  
  

  $.ajax ({
    url: queryURL,
    method: "GET"

  }).then(function(r) {

   
      

      
    

     
    
    
      //For each job in the response, create a new div dynamically to display the data
      for (let i = 0; i < r.length; i++) {

        $(".search-title").html("<h4>showing " + r.length + " results for " + language + " jobs in " + location + ".</h4>");


    // Creates div to store basic company search result information as a bootstrap card
        
        
    
    
    // Created second div to store information within the card body
        var cardBody = $('<div>').addClass('card-body');
        var cardBodyRow = $('<div>').addClass('row body-cont');
        var compImg = $('<div>').addClass('col-sm-4');
        var company_logo = $('<div>').addClass('float-left');
        var companyLogoImg = $('<img>').attr('src', r[i].company_logo);
        
        
        
        
        //Append the company logo img to the image div which floats the image to the left within the card
        company_logo.append(companyLogoImg);
        
        
        
        
        //Appends the image floated to the left to take up col-2 of the width within the card
        compImg.append(company_logo);
       
       
       
       
        //This div contains all the body information for the card other than the company logo
        var cardBodyDiv = $('<div>').addClass('col-sm-8');
        
        
        
        
        //Top header tag for job title, append html into job title div
        var titleDiv = $('<div>').attr('id','job-title');
        titleDiv.append($('<h2>').text(r[i].title));
        
        
        
        
        //Create div for company and add h3 holding the company name to it
        var compDiv = $('<div>').attr('id','company').append($('<h3 id="job-title">').text(r[i].company))
        
        
        
        
        //Create div for company site and append link to it
        var companySite = $('<div>').attr('id', 'company_url').append($('<a>').text(r[i].company_url).attr('href', r[i].company_url).addClass('card-text'));
        
        
        
        
        var applyNow = $('<div class="listing-btn">').append($('<a>').attr('href', r[i].how_to_apply).text('apply now').addClass('btn btn-primary'));//Change color of this button to better reflect styling on results page
        var locateCompany = $('<div class="listing-btn">').append($('<a>').attr('href', r[i].how_to_apply).text('locate company').addClass('btn btn-primary'));//Change color of this button to better reflect styling on results page
        var viewDetails = $('<div class="listing-btn">').text('view job details').addClass('btn btn-primary');//Change color of this button to better reflect styling on results page

        
        
        
        
        //Add info to the div within card body
        cardBodyDiv.append(titleDiv, compDiv, companySite, applyNow, locateCompany, viewDetails);
       
       
       
       
        // Creating elements to store information in card, with corresponding classes to format in bootstrap
        var desc = $('<div>').attr('id', "description").addClass("row body-cont").append(r[i].description);
        
        
        
        
        
        //Add information to the card body;
        cardBodyRow.append(compImg, cardBodyDiv, desc);

        
        
        
        
        //Add image and card body to the card to complete the card
        cardBody.append(cardBodyRow);
        
        
        
        
        //Add each job cart to a div (descrpition not added yet)
        $('.card').append(cardBody);
        
        


      
    }

  })



    //   var map;

    // function initMap() {
    //   var SF = {lat: 37.7749, lng: -122.4194};
    //   map = new google.maps.Map(document.getElementById('google-maps'), {
    //     center: SF,
    //     zoom: 10
    //   });

    //   var marker = new google.maps.Marker({position: SF, map: map});

      

    
    // }



    // initMap();
})

// if (searched === true){
//   $()
// }



