"use strict";

var isNoService = $('a.s3:contains("Массаж эротический")');
if (isNoService.length) {
    isNoService.css('background-color', 'red');
    $('body').css('background-color', '#741717');
}

$('td.psnCrd13:contains("Новая анкета!")').parent().parent().parent().parent().parent().parent().css('background-color', 'rgb(248, 169, 151)');

window.onkeydown = function (e) {
    e = e || window.event;
    var keyCode = e.keyCode || e.which;
    var linkToClick;

    if (keyCode == 27) { // Esc
        var bc = document.getElementsByClassName('ymaps-b-balloon__close');
        bc.length && bc[0].click();
    } else if (keyCode == 37 && e.ctrlKey) {
        linkToClick = $('a:contains("НАЗАД")');
    } else if (keyCode == 39 && e.ctrlKey) {
        linkToClick = $('a:contains("ДАЛЬШЕ")');
    }
    linkToClick && linkToClick.length && linkToClick[0].click();
};
