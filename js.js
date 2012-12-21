$(function() {
    if (String(location).indexOf('onion.to/enter.php?') != -1 || String(location).indexOf('onion.to/exit.php?') != -1) {
        $('input[name="proceed"]').click();
    }
});

function x() {

    if (document.getElementById('ljtime')) {
        document.getElementById('ljtime').style.display = 'none';
    }

    jQuery('a.entry-title-link').each(function () {

        var link = $(this).attr('href');
        if (link.indexOf("http://www.kavkazcenter.com/") === 0) {
            if ($(this).parent().has('a.my').length === 0) {
                var onionLink = $(this).attr('href').replace('http://www.kavkazcenter.com/', 'http://2r2tz6wzqh7gaji7.onion.to/');
                var appEngineLink = $(this).attr('href').replace('http://www.kavkazcenter.com/', 'http://labnol-proxy-server.appspot.com/kavkazcenter.com/');
                var iLikeProxyLink = $(this).attr('href').replace('http://www.kavkazcenter.com/', 'http://ilikeproxy.appspot.com/kavkazcenter.com/');
                $(this).parent().append(' <a target="_blank" href="' + onionLink + '" class="my">[ONION</a> | <a target="_blank" href="' + appEngineLink + '">AE]</a> | <a target="_blank" href="' + iLikeProxyLink + '">ILP]</a>');
            }
        } else if (link.indexOf("http://www.newsru.com/") === 0) {
            if ($(this).parent().has('a.my').length === 0) {
                var palmLink = link.replace('http://www.newsru.com/', 'http://palm.newsru.com/');
                $(this).attr('href', palmLink);
                $(this).parent().append(' <a target="_blank" href="' + palmLink + '" class="my">[palm version]</a>');
            }
        }
    });
}

setInterval("x()", 1500);

