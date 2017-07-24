"use strict";

$(function () {

    function highlightBadLinks() {
        let conversationView = $('#conversation-view');
        conversationView.find('a[href*="company4339839"]').attr('title', 'Remote').css('background-color', '#989898');
        conversationView.find('a[href*="company4237098"]').attr('title', 'Remote').css('background-color', '#989898');
        conversationView.find('a[href*="company5354327"]').attr('title', 'Remote').css('background-color', '#989898');
        conversationView.find('a:contains("(удаленно)")').attr('title', 'Remote').css('background-color', '#989898');
    }
    window.idleCount = 0;
    setInterval('checkNewMessages()', 60000);

    window.onkeydown = window.onclick = function () {
        window.idleCount = 0;

        highlightBadLinks();
        setTimeout(function () {
            highlightBadLinks();
        }, 2000);

    };

});

function checkNewMessages() {
    window.idleCount++;
    if (window.location.href !== "https://mail.protonmail.com/inbox" && $('.composer').length === 0) {
        if (window.idleCount > 2) {
            window.location = "/inbox";
        } else {
            return;
        }
    }
    let unreadMessages = $('div.conversation:not(.read)');
    let result = [];
    $.each(unreadMessages, function (i, message) {
        let time = $(message).find('time.time').text();
        if (time.indexOf(new Date().getFullYear()) === -1) {
            let sender = $(message).find('.senders-name').text();
            let subject = $(message).find('h4').text().trim().replace(/\n/g, '').replace(/[ ]+/g, ' ');
            result.push({sender: sender, subject: subject, time: time});
        }
    });

    if (result.length) {
        try {
            chrome.runtime.sendMessage(chrome.runtime.id, result, function (response) {
            });
        } catch (e) {
            // Something wrong with chrome.runtime.sendMessage. Need to reload the page
            if (window.location.href === "https://mail.protonmail.com/inbox") {
                window.location.reload();
            }
        }
    }
}
