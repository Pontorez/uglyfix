"use strict";

$(function () {
    if (location.href.indexOf('?replyto=') == -1 && location.href.indexOf('?mode=reply') == -1 && location.href.indexOf('/talkpost_do.bml') == -1) {
        window.onkeydown = function (e) {
            e = e || window.event;

            if (e.ctrlKey) {
                var keyCode = e.keyCode || e.which;
                try {
                    if (keyCode == 37) {
                        window.location = $('a:contains("earlier")')[0].href;
                    } else if (keyCode == 39) {
                        window.location = $('a:contains("later")')[0].href;
                    }
                } catch (e) {
                    alert('No more pages');
                }
            }
        }
    }
});
