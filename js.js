function x() {

    if (document.getElementById('ljtime')) {
        document.getElementById('ljtime').style.display = 'none';
    }

    jQuery('a.entry-title-link').each(function () {

        var link = $(this).attr('href');
        if (link.indexOf("http://www.kavkazcenter.com/") === 0) {
            if ($(this).parent().has('a.my').length === 0) {
                var onionLink = $(this).attr('href').replace('http://www.kavkazcenter.com/', 'http://2r2tz6wzqh7gaji7.onion.to/');
                //var googleTranslateLink = "http://translate.google.com/translate?hl=en&sl=ru&tl=en&u=" + $(this).attr('href') + "&anno=2";
                $(this).parent().append(' <a target="_blank" href="' + onionLink + '" class="my">[ONION]</a>');
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
