"use strict";

$.fn.onAvailable = function (fn) {
    var sel = this.selector;
    var timer;
    if (this.length > 0) {
        fn.call(this);
    }
    else {
        timer = setInterval(function () {
            if ($(sel).length > 0) {
                fn.call($(sel));
                clearInterval(timer);
            }
        }, 50);
    }
};

if (String(location).indexOf('onion.to/enter.php?') != -1 || String(location).indexOf('onion.to/exit.php?') != -1) {
    $('input[name="proceed"]').onAvailable(function () {
        $('input[name="proceed"]').click();
    });
}

function x() {
    if (document.getElementById('ljtime')) {
        document.getElementById('ljtime').style.display = 'none';
    }

    var appEngineLink, iLikeProxyLink;
    var separator = ' <span class="red">|</span> ';

    $('a.entry-title-link').each(function () {

        var link = $(this).attr('href');
        if (link.indexOf("http://www.kavkazcenter.com/") === 0) {
            if ($(this).parent().has('a.my').length === 0) {
                var onionLink = $(this).attr('href').replace('http://www.kavkazcenter.com/', 'https://2r2tz6wzqh7gaji7.onion.to/');
                appEngineLink = $(this).attr('href').replace('http://www.kavkazcenter.com/', 'https://labnol-proxy-server.appspot.com/kavkazcenter.com/');
                iLikeProxyLink = $(this).attr('href').replace('http://www.kavkazcenter.com/', 'https://ilikeproxy.appspot.com/kavkazcenter.com/');
                $(this).parent().append(' <a target="_blank" href="' + onionLink + '" class="my">[ONION</a>' + separator + '<a target="_blank" href="' + appEngineLink + '">AE</a>' + separator + '<a target="_blank" href="' + iLikeProxyLink + '">ILP]</a>');
            }
        } else if (link.indexOf("http://www.newsru.com/") === 0) {
            if ($(this).parent().has('a.my').length === 0) {
                var palmLink = link.replace('http://www.newsru.com/', 'http://palm.newsru.com/');
                $(this).attr('href', palmLink);
                $(this).parent().append(' <a target="_blank" href="' + palmLink + '" class="my">[palm version]</a>');
            }
        } else if (link.indexOf("http://habrahabr.ru/") === 0) {
            var entryAuthorName = $('.entry-author-name');
            entryAuthorName.html(entryAuthorName.html().replace('alizar', '<span style="background-color: pink">alizar</span>'));
        } else if (link.indexOf('http://lj.rossia.org/users/tiphareth/') === 0) {
            if ($(this).parent().has('a.my').length === 0) {
                appEngineLink = $(this).attr('href').replace('http://lj.rossia.org/users/tiphareth/', 'https://labnol-proxy-server.appspot.com/lj.rossia.org/users/tiphareth/');
                iLikeProxyLink = $(this).attr('href').replace('http://lj.rossia.org/users/tiphareth/', 'https://ilikeproxy.appspot.com/lj.rossia.org/users/tiphareth/');
                $(this).parent().append(' [<a class="my" target="_blank" href="' + appEngineLink + '">AE</a>' + separator + '<a target="_blank" href="' + iLikeProxyLink + '">ILP</a>]');
            }
        }
    });
}
$('body').keyup(function () {
    x();
}).mouseup(function () {
        setTimeout('x()', 66);
        setTimeout('x()', 99);
        setTimeout('x()', 333);
        setTimeout('x()', 666);
        setTimeout('x()', 999);
    }
);
