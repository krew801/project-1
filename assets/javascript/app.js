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
    //Below is all sample data representing potential JSON returns from freelancers
    var SLC = { lat: 40.7608, lng: -111.8910 };
    map = new google.maps.Map(document.getElementById('map'), {
        center: SLC,
        zoom: 11
    });
    var seekerReturn = [
        jobseeker1 = {
            name: 'John Smith',
            skills: ['JSON', 'HTML', 'React', 'bullshitting'],
            location: { lat: 40.7508, lng: -111.8610 }
        },
        jobseeker2 = {
            name: 'Hane Doe',
            skills: ['jQuery', 'bootstrap', 'React', 'bullshitting'],
            location: { lat: 40.7421, lng: -111.9110 }
        },
        jobseeker3 = {
            name: 'Jane Donte',
            skills: ['jQuery', 'bootstrap', 'React', 'bullshitting'],
            location: { lat: 40.8708, lng: -111.7910 }
        }
    ]
    var marker = new google.maps.Marker({ position: SLC, map: map });
    var marker = new google.maps.Marker({ position: seekerReturn[0].location, map: map });
    var marker = new google.maps.Marker({ position: seekerReturn[1].location, map: map });
    var marker = new google.maps.Marker({ position: seekerReturn[2].location, map: map });
    console.log(seekerReturn[0].location);



}
map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 40.768, lng: -111.891 },
    zoom: 13
});
}

function renderSearch(searchList) {
    $("#searchDiv").empty();

    for (let i = 0; i < searchList.length; i++) {

        var searchItem = $("<p>")
        searchItem.text(searchList[i]);

        $("#searchDiv").append(searchItem);
    }
}
console.log(searchList);

$("#add-search").on("click", function(event) {
    event.preventDefault();
    console.log("#add-search");

    var toLocalList = $("#text-box").val().trim();
    console.log(toLocalList);

    searchList.push(toLocalList);
    console.log(searchList);

    renderSearch(searchList);


    localStorage.setItem("tosearchList", JSON.stringify(searchList));

    $("#text-box").val("");
});


var searchList = JSON.parse(localStorage.getItem("tosearchList"));

if (!Array.isArray(searchList)) {
    searchList = [];
}

renderSearch(searchList);