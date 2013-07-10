"use strict";

$.fn.onAvailable = function (fn) {
    var sel = this.selector;
    var timer;
    if (this.length > 0) {
        fn.call(this);
    } else {
        timer = setInterval(function () {
            if ($(sel).length > 0) {
                fn.call($(sel));
                clearInterval(timer);
            }
        }, 50);
    }
};

if (String(location).indexOf('onion.to/enter.php?') != -1 || String(location).indexOf('onion.to/exit.php?') != -1) {
    var domProceedLink = $('input[name="proceed"]');
    $(domProceedLink).onAvailable(function () {
        $(domProceedLink).click();
    });
} else if (location.host == 'www.kcblog.info') {
    $('div.MsoNoSpacing').css('color', '#000');
} else if (location.host == 'www.newsru.com') {
    // В Chromium 30.0.1553.0 (209374) футер стал отображаться поверх текста. Скрываем его:
    $('div.down').parent().parent().parent().parent().hide();
    // Get rid of annoying background:
    document.body.style.background = '#555';
}