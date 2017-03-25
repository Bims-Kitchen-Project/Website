
function collapseNavbar() {
    if ($(".navbar").offset().top > 100) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
}

$(window).scroll(collapseNavbar);
$(document).ready(collapseNavbar);

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

$('.navbar-collapse ul li a').click(function() {
    $(this).closest('.collapse').collapse('toggle');
});

$('.fa-angle-double-down').hover(function() {
    $('.fa-angle-double-down').fadeToggle();
});

function fadeText() {
    if ($(".navbar").offset().top > 300) {
        $("#home .text-vcenter").fadeOut();
        $("#home .text-vcenter").fadeOut("slow");
        
    } else {
        $("#home .text-vcenter").fadeIn();
        $("#home .text-vcenter").fadeIn("slow");
        
    }
}

$(window).scroll(fadeText);

$(document).ready(function (){
// create a LatLng object containing the coordinate for the center of the map
var latlng = new google.maps.LatLng(23.239537, 72.670956);
// prepare the map properties
var options = {
zoom: 15,
center: latlng,
mapTypeId: google.maps.MapTypeId.ROADMAP,
navigationControl: true,
mapTypeControl: false,
scrollwheel: false,
disableDoubleClickZoom: true
};
// initialize the map object
var map = new google.maps.Map(document.getElementById('google_map'), options);
// add Marker
var marker1 = new google.maps.Marker({
position: latlng, map: map
});
// add listener for a click on the pin
google.maps.event.addListener(marker1, 'click', function() {
infowindow.open(map, marker1);
});
// add information window
var infowindow = new google.maps.InfoWindow({
content:  '<div class="info"><strong>BIMS Kitchen</strong><br><br>382030 Sector-29 <br> Gandhinagar, Gujarat<br></div>'
});  
});
