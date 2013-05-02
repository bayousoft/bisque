window.addEventListener('load', function () {
    new FastClick(document.body);
}, false);

var slider = new PageSlider($("#container"));
$(window).on('hashchange', route);

// Page routing
function route(event) {
    var page,
        hash = window.location.hash;

    if (hash === "#page1") {
        
        var data = {
        img: "buildbot.jpg",
        name: "Build Bot",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        };

        var template = $('#pageTpl').html().trim();

    } else if (hash === "#page2") {
        
        var data = {
        img: "medibot.jpg",
        name: "Medi Bot",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        };

        var template = $('#pageTpl').html().trim();       
        
    } else if (hash === "#page3") {
 
        var data = {
        img: "ripplebot.jpg",
        name: "Ripple Bot",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        };

        var template = $('#pageTpl').html().trim();

    } else {

        var template = $('#homeTpl').html().trim();

    }

    var page = Mustache.to_html(template, data);
    slider.slidePage($(page));

}

route();