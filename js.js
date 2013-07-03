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

function fixNetvibes() {
    var domLinkToArticle = $('div.focus.active .entry-innerTitle.onClickCloseEntry');
    if ($(domLinkToArticle).hasClass('fixedByExtension')) {
        return;
    }
    var linkToArticle = domLinkToArticle.attr('href');
    if (linkToArticle.indexOf('www.newsru.com/') === 7) {
        var palmLink = linkToArticle.replace('http://www.newsru.com/', 'http://palm.newsru.com/');
        $(domLinkToArticle).append('<a target="_blank" href="' + palmLink + '" class="red">palm</a>');
    } else if (linkToArticle.indexOf('www.kavkazcenter.com/') === 7) {
        var kcOnionLink = linkToArticle.replace('http://www.kavkazcenter.com/', 'https://2r2tz6wzqh7gaji7.onion.to/');
        var kcAppEngineLink = linkToArticle.replace('http://www.kavkazcenter.com/', 'https://labnol-proxy-server.appspot.com/kavkazcenter.com/');
        var kcILikeProxyLink = linkToArticle.replace('http://www.kavkazcenter.com/', 'https://ilikeproxy.appspot.com/kavkazcenter.com/');
        var kcProxyLinks = '<a target="_blank" href="' + kcOnionLink + '" class="red">Onion</a> | ';
        kcProxyLinks += '<a target="_blank" href="' + kcAppEngineLink + '" class="red">Labnol</a> | ';
        kcProxyLinks += '<a target="_blank" href="' + kcILikeProxyLink + '" class="red">ILP</a>';
        $(domLinkToArticle).append(kcProxyLinks);
    } else if (linkToArticle.indexOf('habrahabr.ru/') === 7) {
        var domAuthor = $('div.focus.active .author');
        if (domAuthor.html().indexOf('alizar') != -1) {
            domAuthor.html(domAuthor.html().replace('alizar', '<span class="red">alizar</span>'));
        }
    }
    $(domLinkToArticle).addClass('fixedByExtension');
}

if (location.host == 'www.netvibes.com') {
    $('body').keyup(function () {
        fixNetvibes();
    }).mouseup(function () {
            setTimeout(fixNetvibes, 66);
            setTimeout(fixNetvibes, 99);
            setTimeout(fixNetvibes, 333);
            setTimeout(fixNetvibes, 666);
            setTimeout(fixNetvibes, 999);
        }
    );
}
