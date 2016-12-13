"use strict";

$(function () {
    setInterval('checkNewMessages()', 60000);
});

function checkNewMessages() {
    if (window.location.href != "https://mail.protonmail.com/inbox") {
        return;
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
        chrome.runtime.sendMessage(result, function (response) {
        });
    }
}
