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
    
    var marker = new google.maps.Marker({
        draggable: true,
        position: {
            lat: 49.2827,
            lng: -123.1207
        }, 
        map: map,
        title: "Your location"
    });

    // dragable pin
    google.maps.event.addListener(marker, 'dragend', function (event) {
        document.getElementById("id_location_latitude").value = this.getPosition().lat();
        document.getElementById("id_location_longitude").value = this.getPosition().lng();
        document.getElementById("id_location_latitude").innerText = document.getElementById("id_location_latitude").value;
        document.getElementById("id_location_longitude").innerText = document.getElementById("id_location_longitude").value;
        console.log(document.getElementById("id_location_latitude").value);
        console.log(document.getElementById("id_location_longitude").value);
    });

};


// Thanks Alex
var pins = JSON.parse(allPins.value);


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
        var pin = pins[i];
        var marker = new google.maps.Marker({
            position: {
                lat: pin.fields.location_latitude, 
                lng: pin.fields.location_longitude
            },
            map: map,
            icon: image,
            // shape: shape,
            // title: pin[0],
            zIndex: i // determines which pin is on top if they overlap
        });
    }
};