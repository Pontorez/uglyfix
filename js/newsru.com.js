"use strict";

// Get rid of annoying background:
document.body.style.background = '#555';

$('#vkshare0').parent().parent().parent().hide();
$('.right-column-prm').hide();

window.onkeydown = function (e) {

    e = e || window.event;
    var keyCode = e.keyCode || e.which;

    if (e.ctrlKey) {
        if (keyCode == 37) {
            $('.rwd-arr').click();
        } else if (keyCode == 39) {
            $('.fwd-arr').click();
        }
    }
};
