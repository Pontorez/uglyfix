"use strict";

window.onmousedown = function () {
    $('.article_title_link[href^="http://www.kavkazcenter.com/russ/content/"]:not(".done")').each(function () {
        $(this).addClass('done').on('click', function() {
            window.open('https://www.4proxy.de/###' + this.href);
            return false;
        });
    });
};
