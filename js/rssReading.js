async function fetchXML(theURL) {
    const xmlParser = new DOMParser();
    const response = await fetch(theURL);
    const xmlString = await response.text();

    var xmlDoc = xmlParser.parseFromString(xmlString, 'text/xml');


/*     newsConfig["New York Times"]; // returns =>   {"title": "title content", "link": "link"}
    newsConfig["New York Times"].title; // returns => "title content" */
    articles = xmlDoc.documentElement.getElementsByTagName("item")

    
    console.log(articles.length, articles[0], articles[0].nodeValue)
    allArticles = [];
    for (a = 0; articles.length; a++) {

        if (a == 0){
            console.log("pass")
        }
        let articleJSON = {};

        x = articles[0].childNodes[1].textContent;
        console.log(x)

        console.log(articles[0].childNodes.length)
        xlen = articles[0].childNodes.length;
        y = articles[0].firstChild;
        newsConfig = ["title", "link"]

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

    return (allArticles)

}



$(document).ready(function () {
    console.log("What's up")
    const rssURL = 'https://rss.nytimes.com/services/xml/rss/nyt/Arts.xml';
    /*     rssXML = getRSS(rssURL);
        console.log("Return from getRSS \n", rssXML) */

    rt = fetchXML(rssURL);
    console.log(rt[0])
    

});