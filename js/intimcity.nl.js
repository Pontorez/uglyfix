"use strict";

window.onkeydown = function (e) {
    e = e || window.event;
    var keyCode = e.keyCode || e.which;
    if (keyCode == 27) {
        var bc = document.getElementsByClassName('ymaps-b-balloon__close');
        bc.length && bc[0].click();
    }
};
