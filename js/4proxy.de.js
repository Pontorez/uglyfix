"use strict";

if (location.hash.indexOf('###') === 0) {
    window.onload = function () {
        document.getElementById('address_box').value = location.hash.replace('###', '');
        document.getElementById('go').click();
    }
}
