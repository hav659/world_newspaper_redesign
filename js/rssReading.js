async function getRSS() {
    const rssURL = 'https://rss.nytimes.com/services/xml/rss/nyt/Arts.xml';

    await fetch(rssURL)
        .then((response) => {

            console.log("Res from 1st .then:  \n", response.text())

        })
        .then((str) => {
            console.log("Res from 2st .then:  \n", str)
            let xmlParsed = new window.DOMParser().parseFromString(str, "text/xml")
            console.log("Parse XML string:  \n", xmlParsed)

        })
        .then(data => {

            console.log("Callback from fetch \n", data)
            return (data)
        })  ///* .then(data => data) */

    /* articles = xmlToJson(data) */
    /* console.log(resp) */

}



/* 
x = xmlDoc.getElementsByTagName("book")[0];
xlen = x.childNodes.length;
y = x.firstChild;

txt = "";
for (i = 0; i < xlen; i++) {
    // Process only element nodes (type 1)
    if (y.nodeType == 1) {
        txt += y.nodeName + "<br>";
    }
    y = y.nextSibling;
}
 */



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
    for (a = 0; a < 1; a++) {

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
                console.log(y.nodeName, y.textContent)
            }
            y = y.nextSibling;
        }
        
        console.log(articleJSON)
        /* console.log(y.nodeType) */

        z = articles[a].getElementsByTagName("title").innerHTML;
        console.log(z)


        /* y = articles[a].getAttributeNode("title"); */

        // { "title": articles[a].getElementsByTagName("title")[0]};
/*         node = articles[a].getElementsByTagName("title")

        console.log(node)
        console.log(node.nodeValue) */

        articleJSON.title = articles[a].getElementsByTagName("title").innerHTML
        console.log(articleJSON.title)
        /* articleJSON.title = y.nodeValue */

        articleJSON.link = articles[a].getElementsByTagName("link")[0]
        articleJSON.description = articles[a].getElementsByTagName("description")[0]


        /* console.log(articles[a].getElementsByTagName("description")[0]) */

        allArticles.push(articleJSON)
    }
    console.log(allArticles)

    /* xmlToJson(XmlNode) */

    /* articles = xmlDoc.getElementsByTagName("item") */

    console.log(allArticles[0])

    return (allArticles)

}

/**
 * Changes XML to JSON
 * Modified version from here: http://davidwalsh.name/convert-xml-json
 * @param {string} xml XML DOM tree
 */
function xmlToJson(xml) {
    // Create the return object
    var obj = {};
    /* console.log("in a new function") */
    if (xml.nodeType == 1) {
        // element
        // do attributes
        if (xml.attributes.length > 0) {
            obj["@attributes"] = {};
            for (var j = 0; j < xml.attributes.length; j++) {
                var attribute = xml.attributes.item(j);
                obj["@attributes"][attribute.nodeName] = attribute.nodeValue;
            }
        }
    } else if (xml.nodeType == 3) {
        // text
        obj = xml.nodeValue;
    }

    // do children
    // If all text nodes inside, get concatenated text from them.
    var textNodes = [].slice.call(xml.childNodes).filter(function (node) {
        return node.nodeType === 3;
    });
    if (xml.hasChildNodes() && xml.childNodes.length === textNodes.length) {
        obj = [].slice.call(xml.childNodes).reduce(function (text, node) {
            return text + node.nodeValue;
        }, "");
    } else if (xml.hasChildNodes()) {
        for (var i = 0; i < xml.childNodes.length; i++) {
            var item = xml.childNodes.item(i);
            var nodeName = item.nodeName;
            if (typeof obj[nodeName] == "undefined") {
                obj[nodeName] = xmlToJson(item);
            } else {
                if (typeof obj[nodeName].push == "undefined") {
                    var old = obj[nodeName];
                    obj[nodeName] = [];
                    obj[nodeName].push(old);
                }
                obj[nodeName].push(xmlToJson(item));
            }
        }
    }
    return obj;
}

/*
Usage:
1. If you have an XML file URL:
const response = await fetch('file_url');
const xmlString = await response.text();
var XmlNode = new DOMParser().parseFromString(xmlString, 'text/xml');
xmlToJson(XmlNode);
2. If you have an XML as string:
var XmlNode = new DOMParser().parseFromString(yourXmlString, 'text/xml');
xmlToJson(XmlNode);
3. If you have the XML as a DOM Node:
xmlToJson(YourXmlNode);
*/

$(document).ready(function () {
    console.log("What's up")
    const rssURL = 'https://rss.nytimes.com/services/xml/rss/nyt/Arts.xml';
    /*     rssXML = getRSS(rssURL);
        console.log("Return from getRSS \n", rssXML) */

    rt = fetchXML(rssURL);
    console.log(rt[0])
    

});