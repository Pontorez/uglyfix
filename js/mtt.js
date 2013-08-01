"use strict";

if (jQuery('h1.bld').length && location.search.indexOf('PeoplePicker') == -1) {
    setInterval(function () {
        var date = new Date();
        if (date.getSeconds() % 2) {
            document.title = '█ ▄ █ ▄ ▄ █ ▄ █ ▄ █ ▄ █ ▄ █';
        } else {
            document.title = '→ New mail ←';
        }
    }, 500);
}

setInterval(function () {
    var checkMessagesLink = document.getElementById('lnkHdrcheckmessages');
    checkMessagesLink && checkMessagesLink.click();
}, 60000);