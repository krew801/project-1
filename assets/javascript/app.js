 $("#results-page").css('display', 'none');
      $("#return").on('click', function() {
        window.scroll(30, 30);
      });
      
      $('.search-btn').on('click', function() {

        $("#results-page").css('display', 'inline');


        var language = $('#search-job').val();
        var location = $('#search-location').val();
        var queryURL = "https://github-jobs-proxy.appspot.com/positions?description=" + language + "&location=" + location;

        
        $.ajax ({
          url: queryURL,
          method: "GET"
      
        }).then(function(r){
    
          for (let i = 0; i < r.length; i++) {
    
            $(".search-title").html("<h4>showing " + r.length + " results for " + language + " jobs in " + location + ".</h4>");
    
            var cardBody = $('<div>').addClass('card-body');
            var cardBodyRow = $('<div>').addClass('row body-cont');
            var compImg = $('<div>').addClass('col-sm-4');
            var company_logo = $('<div>').addClass('float-left');
            var companyLogoImg = $('<img>').attr('src', r[i].company_logo);
            
            company_logo.append(companyLogoImg);
            
            compImg.append(company_logo);
            
            var cardBodyDiv = $('<div>').addClass('col-sm-8');
            var titleDiv = $('<div>').attr('id','job-title');
    
            titleDiv.append($('<h2>').text(r[i].title));
            
            var compDiv = $('<div>').attr('id','company').append($('<h3 id="job-title">').text(r[i].company))
            
            var companySite = $('<div>').attr('id', 'company_url').append($('<a>').text(r[i].company_url).attr('href', r[i].company_url).addClass('card-text'));
            
            var applyNow = $('<div class="listing-btn">').append($('<a>').attr('href', r[i].how_to_apply).text('apply now').addClass('btn btn-primary'));//Change color of this button to better reflect styling on results page
            var locateCompany = $('<div class="listing-btn">').append($('<a>').attr('href', r[i].how_to_apply).text('locate company').addClass('btn btn-primary'));//Change color of this button to better reflect styling on results page
            var viewDetails = $('<div class="listing-btn">').text('view job details').addClass('btn btn-primary view-details');//Change color of this button to better reflect styling on results page
            var desc = $('<div>').attr('id', "description").addClass("row body-cont").append(r[i].description);
            
          
            cardBodyDiv.append(titleDiv, compDiv, companySite, applyNow, locateCompany, viewDetails);
          
            cardBodyRow.append(compImg, cardBodyDiv, desc);
    
            cardBody.append(cardBodyRow);
            
            $('.card').prepend(cardBody);
          }
        })
      })
       
