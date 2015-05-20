"use strict";

window.onmousedown = function () {

    // Ссылки на kavkazcenter открывать через proxy:
    $('.article_title_link[href^="http://www.kavkazcenter.com/russ/content/"]:not(".done")').each(function () {
        $(this).addClass('done').on('click', function() {
            window.open('https://www.4proxy.de/###' + this.href);
            return false;
        });
    });

    // Ссылки на lj.rossia.org открывать через HTTPS:
    $('.article_title_link[href^="http://lj.rossia.org/"]:not(".done")').each(function () {
        $(this).addClass('done').on('click', function() {
            window.open(this.href.replace(/^http:\/\//, 'https://'));
            return false;
        });
    });

};

window.onmousemove = window.onkeydown = function () {
    document.getElementById('sinner_container').style.display = 'none';
};
