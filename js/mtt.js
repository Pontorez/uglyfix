if (jQuery('h1.bld').length) {
    document.title = '█ ▄ █ ▄ ▄ █ ▄ █ ▄ █ ▄ █ ▄ █';
    document.getElementsByTagName('head')[0].appendChild(link);
}

setInterval(function () {
    var checkMessagesLink = document.getElementById('lnkHdrcheckmessages');
    checkMessagesLink && checkMessagesLink.click();
}, 60000);
