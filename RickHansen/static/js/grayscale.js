/*!
 * Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

// Google Maps Scripts
// When the window has finished loading create our google map below
google.maps.event.addDomListener(window, 'load', init);

function init() {
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: 15,

        // The latitude and longitude to center the map (always required)
        center: new google.maps.LatLng(49.2827, -123.1207), // Vancouver. Default is New York @ 40.6700, -73.9400

        // Disables the default Google Maps UI components
        disableDefaultUI: false,
        scrollwheel: true,
        draggable: true,

        // How you would like to style the map. 
        // This is where you would paste any style found on Snazzy Maps.
        styles: [{
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 17
            }]
        }, {
            "featureType": "landscape",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 20
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 17
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 29
            }, {
                "weight": 0.2
            }]
        }, {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 18
            }]
        }, {
            "featureType": "road.local",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 16
            }]
        }, {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 21
            }]
        }, {
            "elementType": "labels.text.stroke",
            "stylers": [{
                "visibility": "on"
            }, {
                "color": "#000000"
            }, {
                "lightness": 16
            }]
        }, {
            "elementType": "labels.text.fill",
            "stylers": [{
                "saturation": 36
            }, {
                "color": "#000000"
            }, {
                "lightness": 40
            }]
        }, {
            "elementType": "labels.icon",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "transit",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 19
            }]
        }, {
            "featureType": "administrative",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 20
            }]
        }, {
            "featureType": "administrative",
            "elementType": "geometry.stroke",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 17
            }, {
                "weight": 1.2
            }]
        }]
    };

    // Get the HTML DOM element that will contain your map 
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('map');

    // Create the Google Map using out element and options defined above
    var map = new google.maps.Map(mapElement, mapOptions);

    // drop the pins down (markers)
    setMarkers(map);
};


// Thanks Alex
var pins = JSON.parse(allPins.value);
console.log(pins);

// places the markers according to coords (var pins)
function setMarkers(map) {

    var image = {
        url: '/static/img/map-marker.png',
        // size: new google.maps.Size(20, 32),
        // origin: new google.maps.Point(0, 0),
        // anchor: new google.maps.Point(0, 32)
    };

    // defines the clickable region of the icon
    // no real use yet
    // var shape = {
    //     coords: [1, 1, 1, 20, 18, 20, 18, 1],
    //     type: 'poly'
    // };

    for (var i=0; i<pins.length; i++) {
        // object (one pin)
        var pin = pins[i];

        if (pin.fields.address != null)
            var address = pin.fields.address;
        else
            var address = '';

        if (pin.fields.date_updated != null)
            var date = pin.fields.date_updated;
        else
            var date = '';

        // data of a detailed window
        var contentString = '<div id="content" style="color: black">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">' + pin.fields.tag + '</h1>'+
            '<div id="bodyContent">'+
            '<div><b>Status: </b>'+ pin.fields.status +'</div>'+
            '<div><b>Description: </b>'+ pin.fields.description +'</div>'+
            '<div><b>Address: </b>'+ address +'</div>'+
            '<div><b>Date created: </b>'+ pin.fields.date_created.slice(0,10) + " " + pin.fields.date_created.slice(11,19) +'</div>'+
            '<div><b>Date updated: </b>'+ date.slice(0,10) + " " + date.slice(11,19) +'</div>'+
            '</div>'+
            '</div>';

        var infowindow = new google.maps.InfoWindow({
            content: contentString,
            maxWidth: 450
        });

        // creating the marker
        var marker = new google.maps.Marker({
            position: {
                lat: pin.fields.location_latitude, 
                lng: pin.fields.location_longitude
            },
            map: map,
            icon: image,
            infowindow: infowindow,
            // shape: shape,
            // title: pin[0],
            zIndex: i // determines which pin is on top if they overlap
        });

        // listener for clicking on a pin
        marker.addListener('click', function() {
            this.infowindow.open(map, this);
        });
    }
};











