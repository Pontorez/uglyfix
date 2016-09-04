"use strict";

window.onmousedown = function () {

    // Ссылки на lj.rossia.org открывать через HTTPS:
    $('.article_title_link[href^="http://lj.rossia.org/"]:not(".done")').each(function () {
        $(this).addClass('done').on('click', function() {
            window.open(this.href.replace(/^http:\/\//, 'https://'));
            return false;
        });
    });

};

window.onmousemove = window.onkeydown = function () {
    var sinner_container = document.getElementById('sinner_container');
    if (sinner_container) {
        sinner_container.style.display = 'none';
    }
};
