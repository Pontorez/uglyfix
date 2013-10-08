"use strict";

// Отдельная страница - например, http://antizapret.info/site.php?id=1325
$('div.html label').each(function () {
    var url = $(this).text();
    if (url.indexOf('http://') === 0 || url.indexOf('https://') === 0) {
        $(this).html('<a target="_blank" href="' + url + '">' + url + '</a>');
    }
});

// Список ссылок на страницы - например, http://antizapret.info/?p=2
$('div.html a[href ^= "/site.php?id="]').each(function () {
    $('<a class="openLink" href="http://' + $(this).text() + '" target="_blank">☺</a>').insertAfter(this);
});
