"use strict";

window.onmousedown = function () {

    // Ссылки на lj.rossia.org открывать через HTTPS:
    $('.article_title_link[href^="http://lj.rossia.org/"]:not(".done")').each(function () {
        $(this).addClass('done').on('click', function() {
            window.open(this.href.replace(/^http:\/\//, 'https://'));
            return false;
        });
    });

    // newsru.com
    $('.article_title_link[href^="http://newsru.com/"]:not(".done")').each(function () {
        $(this).addClass('done').on('click', function() {
            window.open(this.href.replace(/^http:\/\//, 'https://').replace(/\?rss$/, ''));
            return false;
        });
    });

};

$("#reader_pane").bind("DOMSubtreeModified", function() {
    $('.article_title_link:contains("at Coolblue")').css('text-decoration', 'line-through');
    $('.article_title_link:contains("trivago")').css('text-decoration', 'line-through');
});
