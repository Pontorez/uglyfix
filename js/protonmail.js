"use strict";

$(function () {
    window.idleCount = 0;
    setInterval('checkNewMessages()', 60000);

    window.onkeydown = window.onclick = function () {
        window.idleCount = 0;
    };

});

function checkNewMessages() {
    window.idleCount++;
    if (window.location.href != "https://mail.protonmail.com/inbox" && $('.composer').length == 0) {
        if (window.idleCount > 2) {
            window.location = "/inbox";
        } else {
            return;
        }
    }
    var unreadMessages = $('div.conversation:not(.read)');
    var result = [];
    $.each(unreadMessages, function (i, message) {
        var time = $(message).find('time.time').text();
        if (time.indexOf(new Date().getFullYear()) == -1) {
            var sender = $(message).find('.senders-name').text();
            var subject = $(message).find('h4').text().trim().replace(/\n/g, '').replace(/[ ]+/g, ' ');
            result.push({sender: sender, subject: subject, time: time});
        }
    });

    if (result.length) {
        try {
            chrome.runtime.sendMessage(chrome.runtime.id, result, function (response) {
            });
        } catch (e) {
            // Something wrong with chrome.runtime.sendMessage. Need to reload the page
            if (window.location.href == "https://mail.protonmail.com/inbox") {
                console.log('FYI: Reloading');
                window.location.reload();
            }
        }
    }
}
