"use strict";

if (location.hash.indexOf('###') === 0) {
    window.onload = function () {
        document.getElementById('input').value = location.hash.replace('###', '');
        document.getElementsByClassName('button')[0].click();
    }
}
