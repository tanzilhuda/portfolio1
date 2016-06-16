
    jQuery(function ($) {
        $('.scroll-link').on('click', function (event) {
            event.preventDefault();
            var sectionID = $(this).attr("data-id");
            scrollToID('#' + sectionID, 750);
        });
        // scroll to top action
        $('.scroll-top').on('click', function (event) {
            event.preventDefault();
            $('html, body').animate({ scrollTop: 0 }, 'slow');
        });
        // mobile nav toggle
        $('#nav-toggle').on('click', function (event) {
            event.preventDefault();
            $('#main-nav').toggleClass("open");
        });

        // scroll function
        function scrollToID(id, speed) {
            var offSet = 50;
            var targetOffset = $(id).offset().top - offSet;
            var mainNav = $('#main-nav');
            $('html,body').animate({ scrollTop: targetOffset }, speed);
            if (mainNav.hasClass("open")) {
                mainNav.css("height", "1px").removeClass("in").addClass("collapse");
                mainNav.removeClass("open");
            }
        }
    });

    //steps module js
    function resetActive(event, percent, step) {
        $(".progress-bar").css("width", percent + "%").attr("aria-valuenow", percent);
        $(".progress-completed").text(percent + "%");

        $("div").each(function () {
            if ($(this).hasClass("activestep")) {
                $(this).removeClass("activestep");
            }
        });

        if (event.target.className == "col-md-2") {
            $(event.target).addClass("activestep");
        }
        else {
            $(event.target.parentNode).addClass("activestep");
        }

        hideSteps();
        showCurrentStepInfo(step);
    }

    function hideSteps() {
        $("div").each(function () {
            if ($(this).hasClass("activeStepInfo")) {
                $(this).removeClass("activeStepInfo");
                $(this).addClass("hiddenStepInfo");
            }
        });
    }

    function showCurrentStepInfo(step) {
        var id = "#" + step;
        $(id).addClass("activeStepInfo");
    }
    //steps module js


    /* google maps -----------------------------------------------------*/
    function init_map() {
        var myLocation = new google.maps.LatLng(38.8648771, -77.06386889999999);

        var mapOptions = {
            center: myLocation,
            zoom: 17
        };

        var marker = new google.maps.Marker({
            position: myLocation,
            title: "Office Location"
        });

        var map = new google.maps.Map(document.getElementById("map-container"),
            mapOptions);

        marker.setMap(map);
    }

    google.maps.event.addDomListener(window, 'load', init_map);
    /* end google maps -----------------------------------------------------*/
    function bsCarouselAnimHeight() {
    $('.carousel').carousel({
        interval: 5000
    }).on('slide.bs.carousel', function (e) {
        var nextH = $(e.relatedTarget).height();
        $(this).find('.active.item').parent().animate({
            height: nextH
        }, 500);
    });
}

bsCarouselAnimHeight();

