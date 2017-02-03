"use strict";

window.onkeydown = function (e) {

    let dge = function(e) {return document.getElementById(e)};
    let dbs = document.body.style;

    if (e.keyCode == 192) {
        if (dge('watch7-container').style.display == 'none') {
            dge('watch7-container').style.display = 'block';
            dge('masthead-positioner').style.display = 'block';
            dge('footer-container').style.display = 'block';
            dge('masthead-positioner-height-offset').style.display = 'block';
            dbs.backgroundColor = '#f1f1f1';
            dbs.overflow = 'visible';
        } else {
            dge('watch7-container').style.display = 'none';
            dge('masthead-positioner').style.display = 'none';
            dge('footer-container').style.display = 'none';
            dge('masthead-positioner-height-offset').style.display = 'none';
            dbs.backgroundColor = '#000';
            dbs.overflow = 'hidden';
        }
    }
};
