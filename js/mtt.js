if (jQuery('h1.bld').length) {
    document.title = '█ ▄ █ ▄ ▄ █ ▄ █ ▄ █ ▄ █ ▄ █';
}

setInterval(function () {
    var checkMessagesLink = document.getElementById('lnkHdrcheckmessages');
    checkMessagesLink && checkMessagesLink.click();
}, 60000);
