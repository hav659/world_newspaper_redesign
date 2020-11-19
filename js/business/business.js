
$(document).ready(function () {
    console.log("What's up")
    /* console.log(rssFeedConfig) */

    var rssURL = ''

    for (const newsPaper in mainPanelRSS) {
        console.log(newsPaper, mainPanelRSS[newsPaper].url)
        rssURL = mainPanelRSS[newsPaper].url;
        rt = fetchXML(rssURL, mainPanelRSS[newsPaper], "#mainNews", 10, "blue")
    };


    $('#subscribeButton').on('shown.bs.modal', function () {
        $('#subscribeModal').trigger('focus')
    })
    

    



});