"use strict";

window.onkeydown = function (e) {
    e = e || window.event;
    var keyCode = e.keyCode || e.which;

    if (e.ctrlKey) {
        var domTargetLink;
        if (keyCode == 37) {
            domTargetLink = document.getElementById('pnprev');
        } else if (keyCode == 39) {
            domTargetLink = document.getElementById('pnnext');
        }
        if (domTargetLink) {
            window.location = domTargetLink.href;
        }
    }
};
