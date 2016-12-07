chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        $.ajax({
            type: "POST",
            url: 'http://xmpp.local/example.php',
            data: {data: JSON.stringify(request)},
            success: function (data) {
                sendResponse(typeof $);
            }
        });

    }
);
