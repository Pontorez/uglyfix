"use strict";

// В Chromium 30.0.1553.0 (209374) футер стал отображаться поверх текста. Скрываем его:
$('div.down').parent().parent().parent().parent().hide();

// Hide SMI2 adv block
$('div[id^="smi2adblock_"]').parent().parent().parent().hide();

// Get rid of annoying background:
document.body.style.background = '#555';

window.onkeydown = function (e) {

    e = e || window.event;
    var keyCode = e.keyCode || e.which;

    if (e.ctrlKey) {
        if (keyCode == 37) {
            $('img[alt="предыдущая фотография"]').click();
        } else if (keyCode == 39) {
            $('img[alt="следующая фотография"]').click();
        }
    }
}
