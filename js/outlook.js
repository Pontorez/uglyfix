"use strict";

if (document.title == 'Входящие - Outlook Web App, light version' && jQuery('h1.bld').length && location.search.indexOf('PeoplePicker') == -1) {
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
}, 20000);

window.onkeydown = function (e) {

    e = e || window.event;
    var keyCode = e.keyCode || e.which;

    if (e.ctrlKey) {
        var elementToClick;
        if (keyCode == 37) {
            elementToClick = document.getElementById('lnkHdrprevious');
        } else if (keyCode == 39) {
            elementToClick = document.getElementById('lnkHdrnext');
        }
        if (elementToClick) {
            elementToClick.click();
        }
    }
};
