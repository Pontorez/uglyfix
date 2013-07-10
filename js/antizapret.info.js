"use strict";

$('div.html label').each(function () {
    var url = $(this).text();
    if (url.indexOf('http://') === 0) {
        $(this).html('<a target="_blank" href="' + url + '">' + url + '</a>');
    }
});