"use strict";

// Get rid of annoying background:
document.body.style.background = '#555';

$('.share-block').hide(); // hide retweet, facebook, vk, etc buttons
$('.right-column-prm').hide();

window.onkeydown = function (e) {

    e = e || window.event;
    var keyCode = e.keyCode || e.which;

    if (e.ctrlKey) {
        if (keyCode == 37 && window.location.hash) {
            $(window.location.hash).find('.rwd-arr').click();
        } else if (keyCode == 39) {
            $(window.location.hash).find('.fwd-arr').click();
        }
    }
};
