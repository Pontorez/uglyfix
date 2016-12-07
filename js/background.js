chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        // console.log("background.js got a message");
        // console.log(request);
        // console.log(sender);
        $.ajax({
            type: "POST",
            url: 'http://xmpp.local/example.php',
            data: {data: JSON.stringify(request)},
            success: function (data) {
                sendResponse(typeof $);
                // alert('success');
            }
        });

    }
);
