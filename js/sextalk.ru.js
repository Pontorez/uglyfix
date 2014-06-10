"use strict";

$(function () {
    $('a').each(function() {
        this.href = this.href.replace('http://sextalk.ru', 'https://sextalk.ru');
    })
});
