// © http://veg.by/ru/blog/2013/09/01/pure-url/
// © https://chrome.google.com/webstore/detail/pure-url/mphlceppeighhlbggdkmcoieeckjnfjj
// © http://habrahabr.ru/post/191806/

let rule_global = new RegExp('(^|&)(utm_source|utm_medium|utm_term|utm_content|utm_campaign|utm_reader|utm_place|ga_source|ga_medium|ga_term|ga_content|ga_campaign|ga_place|yclid|_openstat|fb_action_ids|fb_action_types|fb_ref|fb_source|action_object_map|action_type_map|action_ref_map)=[^&]*', 'ig');
let rule_youtube = new RegExp('(^|&)(feature)=[^&]*', 'ig');
let rule_facebook = new RegExp('(^|&)(ref|fref|hc_location)=[^&]*', 'ig');
let rule_imdb = new RegExp('(^|&)(ref_)=[^&]*', 'ig');

if (typeof chrome !== 'undefined') {
    chrome.webRequest.onBeforeRequest.addListener(function (info) {
            let path = info.url;
            let host = info.url.match(/https?:\/\/(?:www\.)?([-_.\w\d]+)/i)[1].toLowerCase();
            let qPos = path.indexOf('?');
            if (rule_global !== null && qPos > -1) {
                let args = path.substring(qPos + 1, path.length);

                // Hardcode, sorry, I'll fix it later
                let cleared = args.replace(rule_global, '').replace(/^[&]+/i, '');
                if (host === 'youtube.com')  cleared = cleared.replace(rule_youtube, '').replace(/^[&]+/i, '');
                if (host === 'facebook.com') cleared = cleared.replace(rule_facebook, '').replace(/^[&]+/i, '');
                if (host === 'imdb.com')     cleared = cleared.replace(rule_imdb, '').replace(/^[&]+/i, '');

                if (args !== cleared) {
                    path = path.substring(0, qPos);
                    if (cleared) path += '?' + cleared;
                    return {redirectUrl: path};
                }
            }
        },
        {urls: ['https://*/*?*', 'http://*/*?*'], types: ['main_frame']}, ['blocking']);
}


chrome.webRequest.onBeforeRequest.addListener(
    function () {
        return {cancel: true};
    }, {urls: [
        "*://an.yandex.ru/*",
        "*://bs.yandex.ru/*",
        "*://cas.criteo.com/*",           // iframe ads
        "*://counter.yadro.ru/*",
        "*://www.google.com/afs/ads?q=*", // skyscanner.ru: sidebar banner
        "*://kraken.rambler.ru/*",
        "*://mc.yandex.ru/*",
        "*://widget.engageya.com/*",      // button at https://www.newsru.com/world/30jul2017/bombers.html
        "*://sync.rambler.ru/*",
        "*://*.tns-counter.ru/*",
        "*://informer.yandex.ru/*",
        "*://www.google-analytics.com/*",
        "*://*.mail.ru/counter*"
    ]}, ["blocking"]
);
