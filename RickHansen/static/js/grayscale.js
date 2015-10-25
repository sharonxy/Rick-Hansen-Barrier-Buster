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

    // Try W3C Geolocation (Preferred)
    if(navigator.geolocation) {
        browserSupportFlag = true;
        navigator.geolocation.getCurrentPosition(function(position) {
            initialLocation = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);
            map.setCenter(initialLocation);
        }, function() {
            handleNoGeolocation(browserSupportFlag);
        });
    } else { // Browser doesn't support Geolocation
        browserSupportFlag = false;
        handleNoGeolocation(browserSupportFlag);
    }
    function handleNoGeolocation(errorFlag) {
        if (errorFlag == true) {
            alert("Geolocation service failed.");
            initialLocation = new google.maps.LatLng(49.2827, -123.1207);
        } else {
            alert("Your browser doesn't support geolocation. We've placed you in Vancouver Downtown.");
            initialLocation = new google.maps.LatLng(49.2827, -123.1207);
        }
        map.setCenter(initialLocation);
    }


    var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: 15,

        // The latitude and longitude to center the map (always required)
        center: new google.maps.LatLng(49.2827, -123.1207), // Vancouver. Default is New York @ 40.6700, -73.9400

        // Disables the default Google Maps UI components
        disableDefaultUI: false,
        scrollwheel: false,
        draggable: true,

        // How you would like to style the map. 
        // This is where you would paste any style found on Snazzy Maps.
        styles: [
            {
                "featureType": "landscape",
                "stylers": [
                    {
                        "saturation": -100
                    },
                    {
                        "lightness": 65
                    },
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "poi",
                "stylers": [
                    {
                        "saturation": -100
                    },
                    {
                        "lightness": 51
                    },
                    {
                        "visibility": "simplified"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "stylers": [
                    {
                        "saturation": -100
                    },
                    {
                        "visibility": "simplified"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "stylers": [
                    {
                        "saturation": -100
                    },
                    {
                        "lightness": 30
                    },
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "road.local",
                "stylers": [
                    {
                        "saturation": -100
                    },
                    {
                        "lightness": 40
                    },
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "transit",
                "stylers": [
                    {
                        "saturation": -100
                    },
                    {
                        "visibility": "simplified"
                    }
                ]
            },
            {
                "featureType": "administrative.province",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "on"
                    },
                    {
                        "lightness": -25
                    },
                    {
                        "saturation": -100
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                    {
                        "hue": "#ffff00"
                    },
                    {
                        "lightness": -25
                    },
                    {
                        "saturation": -97
                    }
                ]
            }
        ]
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

    // defines the clickable region of the icon
    // no real use yet
    // var shape = {
    //     coords: [1, 1, 1, 20, 18, 20, 18, 1],
    //     type: 'poly'
    // };

    for (var i=0; i<pins.length; i++) {
        // object (one pin)
        var pin = pins[i];

        var status = pin.fields.status;

        if (status === 'Barrier')
            var url = '/static/img/map-marker-barrier.png';
        else if (status === 'In Progress')
            var url = '/static/img/map-marker-in-progress.png';
        else if (status === 'Resolved')
            var url = '/static/img/map-marker-resolved.png';
        else if (status === 'Best Practice')
            var url = '/static/img/map-marker-best-practice.png';
        else
            var url = '/static/img/map-marker.png';

        var image = {
            url: url
            // size: new google.maps.Size(20, 32),
            // origin: new google.maps.Point(0, 0),
            // anchor: new google.maps.Point(0, 32)
        };

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
            '<div><b>Status: </b>'+ status +'</div>'+
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











