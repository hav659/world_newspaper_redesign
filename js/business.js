
$(document).ready(function () {
    console.log("What's up")
    /* console.log(rssFeedConfig) */



    var rssURL = ''

    for (const newsPaper in mainPanelRSS) {
        console.log(newsPaper, mainPanelRSS[newsPaper].url)
        rssURL = mainPanelRSS[newsPaper].url;
        rt = fetchXML(rssURL, mainPanelRSS[newsPaper], "#mainNews", 6, "blue")
    }
    /* const rssURL = 'https://rss.nytimes.com/services/xml/rss/nyt/Arts.xml'; */



});