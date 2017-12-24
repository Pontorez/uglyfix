"use strict";

$(function () {

    function highlightBadLinks() {

        let markInstance = new Mark(document.querySelector("#conversation-view"));
        markInstance.mark("Stealth Talent", {separateWordSearch: false});
        markInstance.mark("Saksoft", {separateWordSearch: false});
        markInstance.mark("Technology Resource Management", {separateWordSearch: false});
        markInstance.mark("Strategic Employment Partners", {separateWordSearch: false});
        markInstance.mark("Robert Half Technology", {separateWordSearch: false});
        markInstance.mark("Top Prospect Group", {separateWordSearch: false});

        let conversationView = $('#conversation-view');
        conversationView.find('a[href*="company5350552"],' +
            'a[href*="company3474532"],' +
            'a[href*="company3537794"],' +
            'a[href*="company5354327"],' +
            'a[href*="company4339839"],' +
            'a[href*="company4237098"],' +
            'a[href*="company3073752"],' +
            'a[href*="company6307854"],' +
            'a[href*="company6374455"],' +
            'a[href*="company6345450"],' +
            'a[href*="company6070588"],' +
            'a[href*="company2335828"],' +
            'a:contains("remote)"),' +
            'a[href*="company6180443"],' +
            'a:contains("удаленно")').attr('title', 'Remote').addClass('x_remote');

        conversationView.find('a[href*="company6138138"]').attr('title', 'Low salary').addClass('x_remote');
        conversationView.find('a[href*="company4174864"]').attr('title', 'Magento').addClass('x_remote');

        conversationView.find('a[href*="company6415957"]').attr('title', 'Malta').addClass('x_eu');
        conversationView.find('a[href*="company5344227"]').attr('title', 'Lublin').addClass('x_eu');

        conversationView.find('a[href*="company870784"]').attr('title', 'Boston').addClass('x_eu');
        conversationView.find('a[href*="vacancy6819023"]').attr('title', 'Rostov-on-Don').addClass('x_eu');
        conversationView.find('a[href*="company5386360"]').attr('title', 'Belgorod').addClass('x_eu');
        conversationView.find('a[href*="company6360922"]').attr('title', 'Tallinn').addClass('x_eu');
        conversationView.find('a[href*="company5131369"]').attr('title', 'DE; agency').addClass('x_eu');
        conversationView.find('a[href*="company788/"]'   ).attr('title', 'DE').addClass('x_eu');
        conversationView.find('a[href*="company5057343"]').attr('title', 'CZ; agency').addClass('x_eu');
        conversationView.find('a[href*="company6334949"]').attr('title', 'PL').addClass('x_eu');
        conversationView.find('a[href*="company3202014"]').attr('title', 'EU').addClass('x_eu');
        conversationView.find('a[href*="vacancy6929983"]').attr('title', 'BY').addClass('x_eu');
        conversationView.find('a[href*="company6308161"]').attr('title', 'PL').addClass('x_eu');
        conversationView.find('a[href*="company2459176"]').attr('title', 'UA,EE').addClass('x_eu');
    }

    window.idleCount = 0;
    setInterval('checkNewMessages()', 60000);

    function recall() {
        window.idleCount = 0;

        highlightBadLinks();
        setTimeout(function () {
            highlightBadLinks();
        }, 2000);
    }

    window.addEventListener("keydown", function () {
        recall();
    });

    window.addEventListener("click", function () {
        recall();
    });

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
