"use strict";

// .com version of Google Maps contains English captions on map
if (window.location.href.indexOf('google.ru/maps/') != -1) {
    window.location.href = window.location.href.replace('google.ru/maps/', 'google.com/maps/')
}

window.onkeydown = function (e) {
    e = e || window.event;
    var keyCode = e.keyCode || e.which;

    if (e.ctrlKey && document.activeElement.tagName != 'INPUT') {
        var domTargetLink;
        if (keyCode == 37) {
            domTargetLink = document.getElementById('pnprev');
        } else if (keyCode == 39) {
            domTargetLink = document.getElementById('pnnext');
        }
        if (domTargetLink) {
            window.location = domTargetLink.href;
        }
    }
};
