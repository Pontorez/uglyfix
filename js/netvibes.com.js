"use strict";

function fixNetvibes() {
    var domLinkToArticle = $('div.focus.active .entry-innerTitle.onClickCloseEntry');
    if ($(domLinkToArticle).hasClass('fixedByExtension')) {
        return;
    }
    var linkToArticle = domLinkToArticle.attr('href');
    if (typeof linkToArticle != 'undefined' && linkToArticle.indexOf('www.newsru.com/') === 7) {
        var palmLink = linkToArticle.replace('http://www.newsru.com/', 'http://palm.newsru.com/');
        $(domLinkToArticle).append('<a target="_blank" href="' + palmLink + '" class="red">palm</a>');
    } else if (linkToArticle.indexOf('www.kavkazcenter.com/') === 7) {
        var kcAppEngineLink = linkToArticle.replace('http://www.kavkazcenter.com/', 'https://labnol-proxy-server.appspot.com/kavkazcenter.com/');
        var kcILikeProxyLink = linkToArticle.replace('http://www.kavkazcenter.com/', 'https://ilikeproxy.appspot.com/kavkazcenter.com/');
        var kcProxyLinks = '<a target="_blank" href="' + kcAppEngineLink + '" class="red">Labnol</a> | ';
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
