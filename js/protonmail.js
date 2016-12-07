"use strict";
window.onkeydown = function (e) {
    if (e.key == "'") {
        checkNewMessages();
    }
};

function checkNewMessages() {
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
        chrome.runtime.sendMessage(result, function (response) {
        });
    }
}

setInterval('checkNewMessages()', 60000);
