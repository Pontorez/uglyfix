"use strict";

(function () {

    let isNoService = $('a.s3:contains("Массаж эротический")');
    if (isNoService.length) {
        isNoService.css('background-color', 'red');
        $('body').css('background-color', '#741717');
    }

    let weight = $('td.p25:contains("Вес")').next();
    if (weight.text() > 60) {
        $(weight).css('background-color', '#ff6969');
        $('body').css('background-color', '#741717');
    }

})();

$('td.psnCrd13:contains("Новая анкета!")').parent().parent().parent().parent().parent().parent().css('background-color', '#f8a997');

window.onkeydown = function (e) {
    e = e || window.event;
    let keyCode = e.keyCode || e.which;
    let linkToClick;

    if (keyCode == 27) { // Esc
        let bc = document.getElementsByClassName('ymaps-b-balloon__close');
        bc.length && bc[0].click();
    } else if (keyCode == 37 && e.ctrlKey) {
        linkToClick = $('a:contains("НАЗАД")');
    } else if (keyCode == 39 && e.ctrlKey) {
        linkToClick = $('a:contains("ДАЛЬШЕ")');
    }
    linkToClick && linkToClick.length && linkToClick[0].click();
};
