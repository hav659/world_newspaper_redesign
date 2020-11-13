async function fetchXML(theURL, newsConfig) {
    const xmlParser = new DOMParser();
    const response = await fetch(theURL);
    const xmlString = await response.text();

    var xmlDoc = xmlParser.parseFromString(xmlString, 'text/xml');
    console.log("HERE", Object.values(newsConfig))

/*     newsConfig["New York Times"]; // returns =>   {"title": "title content", "link": "link"}
    newsConfig["New York Times"].title; // returns => "title content" */
    articles = xmlDoc.documentElement.getElementsByTagName(newsConfig["articleDelimiter"])


    /* console.log(articles.length, articles[0], articles[0].nodeValue) */
    allArticles = [];
    for (a = 0; a < articles.length; a++) {

        let articleJSON = {};

        /*
        This lets you get see the value of the xml for the second item in the list
        x = articles[a].childNodes[1].textContent;
        console.log(x) */

        /*
        How many children or tags are within each parent
        console.log(articles[0].childNodes.length)
        */
        xlen = articles[a].childNodes.length;
        y = articles[a].firstChild;
        newsConfig = Object.values(newsConfig)
        /* console.log(newsConfig) */

        for (i = 0; i < xlen; i++) {
            // Process only element nodes (type 1)
            if (y.nodeType == 1) {
                for (n = 0; n< newsConfig.length; n++){
                    if (y.nodeName == newsConfig[n]){
                        articleJSON[newsConfig[n]] = y.textContent
                    }
                }
                /* console.log(y.nodeName, y.textContent) */
            }
            y = y.nextSibling;
        }

        //This is just here so you can see a example
        if (a == 0) {
            console.log("Example of what is being returned", articleJSON)
        }

        allArticles.push(articleJSON)
    }



    console.log(allArticles[0])

    createArticles(allArticles)
    return (allArticles)

}


function createArticles(jsonArray) {
    console.log("work");

    $.each(jsonArray, function (arrayKey, arrayItem) {

        /* This is a template string a mixture of JS and HTML */
        var articleCard = `<div class="articleCard">
                            <div class="articleTitle">${arrayItem.title} </div>
                            <div class="author">${arrayItem.description}</div>
                            <div class="doi"><a href="${arrayItem.link}">Get the article</a></div>
                            </div>`
        $("#outputDiv").append(articleCard)
        /* console.log(jsonArray[arrayItem].year) */
        /* console.log(arrayItem.year) */
        /* items.push( "<li id='" + key + "'>" + val + "</li>" ); */
    });


};


$(document).ready(function () {
    console.log("What's up")
    console.log(rssFeedConfig)


    var rssURL = ''
    for (const newsPaper in rssFeedConfig) {
        console.log(newsPaper, rssFeedConfig[newsPaper].url)
        rssURL = rssFeedConfig[newsPaper].url;
        rt = fetchXML(rssURL, rssFeedConfig[newsPaper]);

    }

    /* const rssURL = 'https://rss.nytimes.com/services/xml/rss/nyt/Arts.xml'; */



});
