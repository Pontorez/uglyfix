"use strict";

function hideAds() {
    var ads = document.getElementsByClassName('mq');
    for (var i = 0; i < ads.length; i++) {
        ads[i].style.display = 'none';
    }
}

window.onmouseup = function() {
    hideAds();
    setTimeout('hideAds()', 100);
    setTimeout('hideAds()', 500);
};

window.onload = function() {
    hideAds();
};
