"use strict";

window.onkeydown = function (e) {
    e = e || window.event;
    var keyCode = e.keyCode || e.which;

    if (e.ctrlKey) {

        var anchorToFind;
        if (keyCode == 37) {
            anchorToFind = '<< следующая';
        } else if (keyCode == 39) {
            anchorToFind = 'предыдущая >>';
        }

        if (anchorToFind) {
            var allLinks = document.getElementsByTagName('a');
            for (var el in allLinks) {
                if (allLinks[el].innerText == anchorToFind) {
                    window.location = allLinks[el].href;
                    break;
                }
            }
        }
    }
};
