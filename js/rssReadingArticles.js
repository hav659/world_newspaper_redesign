async function fetchXML(theURL, newsConfig, outDivID, maxArticles, articleStyle) {
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
                for (n = 0; n < newsConfig.length; n++) {
                    if (y.nodeName == newsConfig[n]) {
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

        randomValue = Math.random()
        /* console.log(randomValue) */
        if (allArticles.length < maxArticles && randomValue < .2) {
            /* console.log("Adding article. ", allArticles.length) */
            allArticles.push(articleJSON)
        }

    }



    console.log(allArticles[0])
    if (articleStyle == 'blue') {
        createArticles(allArticles, outDivID)
    } else {
        createWhiteArticles(allArticles, outDivID)
    }

    return (allArticles)

}


function createArticles(jsonArray, outDivID) {
    console.log("Making blue cards", outDivID);
    articleCards = ''

    $.each(jsonArray, function (arrayKey, arrayItem) {
        console.log(arrayKey)
        /* This is a template string a mixture of JS and HTML */
        var articleCard = `<div class="card text-center col-md-6 col-sm-12 blueArticleCard">
                            <div class="card-body">
                                <div class="articleTitle">${arrayItem.title} </div>
                                <div><a href="${arrayItem.link}" class="articleLink"><img src="img/globe.svg" alt="globe">Read the article</a></div>
                            </div>
                            </div>`
        articleCards = articleCards + articleCard


        if (arrayKey % 2 == 0) {
            console.log(arrayKey)
        } else {
            console.log(arrayKey)
            articleRow = '<div class="row">' + articleCards + '</div>'
            $(outDivID).append(articleRow)
            /* $("#outputDiv").append(articleRow) */
            articleCards = ''
        };
    });


};


function createWhiteArticles(jsonArray, outDivID) {
    console.log("Load data into", outDivID);

    $.each(jsonArray, function (arrayKey, arrayItem) {

        /* This is a template string a mixture of JS and HTML */
        var articleCard = `<div class="whiteArticleCard">
                            <div class="articleTitle">${arrayItem.title} </div>
                            <div class="articleDescription">${arrayItem.description}</div>
                            <div ><a href="${arrayItem.link}" class="articleLink">Read the article</a></div>
                            </div>`
        $(outDivID).append(articleCard)

        $("#.pg2Content")
        console.log($('#pg2Content').width)
        /* console.log(jsonArray[arrayItem].year) */
        /* console.log(arrayItem.year) */
        /* items.push( "<li id='" + key + "'>" + val + "</li>" ); */
    });


};
