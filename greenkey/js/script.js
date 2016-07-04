//Sticky Navigation
$('.js--about-section').waypoint(function(direction) {
  if (direction == "down") {
    $('nav').addClass('sticky');
  } else {
    $('nav').removeClass('sticky');
  }
}, {
    offset: '60px;'
   });
    
//Scroll buttons
$('.js--scroll-to-start').click(function () {
  $('html, body').animate({
    scrollTop: $('.js--about-section').offset().top
  }, 1000); 
});
    
//Navigation scroll
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
    if (target.length) {
      $('html,body').animate({
      scrollTop: target.offset().top
      }, 1000);
        return false; 
    }
    }
  });
});
    
       
//Animation scroll
$('.js--wp-1').waypoint(function(direction) {
  $('.js--wp-1').addClass('animated fadeIn');
}, {
  offset: '50%'
});
    
$('.js--wp-2').waypoint(function(direction) {
  $('.js--wp-2').addClass('animated fadeIn');
}, {
  offset: '50%'
});
    
$('.js--wp-3').waypoint(function(direction) {
  $('.js--wp-3').addClass('animated fadeIn');
}, {
  offset: '50%'
});
        
// Mobile Navigation
$('.js-nav-icon').click(function() {
  var nav = $('.js-main-nav');
  var icon = $('.js-nav-icon i');
    
  //opens and closes box 
  nav.slideToggle(200);
    
 //if the icon is nav, opens it, if the icon is x button, closes it. 
  if (icon.hasClass('ion-navicon')) {
    icon.addClass('ion-close-round');
    icon.removeClass('ion-navicon');
  } else {
    icon.addClass('ion-navicon');
    icon.removeClass('ion-close-round');
  }        
});


// Map
 var styleArray = [
  {
    featureType: "all",
    stylers: [{ saturation: -90 }]
  },{
    featureType: "road.arterial",
    elementType: "geometry",
    stylers: [
      { hue: "#00ffee" },
      { saturation: 50 }
    ]
    },{
      featureType: "poi.business",
      elementType: "labels",
      stylers: [{ visibility: "off" }]
    }
];
function initMap() {
  //lat and longitude
  var myLatLng = {lat: 47.6610314, lng: -122.6056344};
  //new map
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    // Apply the map style array to the map.
    styles: styleArray,
    center: myLatLng
    });
  var contentString = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+
    '<h2 id="firstHeading" class="firstHeading">Green Key Landscaping</h2>'+ '<p>' + 'Easy to reach location! Just get in your car and drive right over!' + '</p>' + '</div>'+ '</div>';
  //new info window
  var infowindow = new google.maps.InfoWindow({
  content: contentString
    });
  //new marker
  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'Green Key Landscaping'
    });
  //adds event listener to marker
  marker.addListener('click', function() {
  infowindow.open(map, marker);
    });
}

//Load more information with AJAX
function sendAJAX() {
  $("#ajax").load("section1.html"); //loads additional info
  $("#section1").hide(); //hides button
}

//Event listener for "learn more" button
document.getElementById("section1").addEventListener("click", sendAJAX);

//Load contact form with AJAX
function sendAJAX2() {
  $("#ajax2").load("contact.html"); 
  $("#section2").hide(); //hides button
}

//Event listener for "learn more" button
document.getElementById("section2").addEventListener("click", sendAJAX2);