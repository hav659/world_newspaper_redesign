const corsAnywhere = "https://cors-anywhere.herokuapp.com/";



var mainPanelRSS = {
    /*"New York Times": {
        "url": "https://rss.nytimes.com/services/xml/rss/nyt/Business.xml",
        "articleDelimiter": "item",
        "title": "title",
        "link": "link"
    },*/

    "Economic Times": {
        "url": corsAnywhere + "https://economictimes.indiatimes.com/rssfeedsdefault.cms",
        "articleDelimiter": "item",
        "title": "title",
        "link": "link"
    },

    "CNBC Business": {
        "url": corsAnywhere + "https://www.cnbc.com/id/19746125/device/rss/rss.xml",
        "articleDelimiter": "item",
        "title": "title",
        "link": "link"
    },

    "Globes": {
        "url": corsAnywhere + "http://www.globes.co.il/webservice/rss/rssfeeder.asmx/FeederNode?iID=1725",
        "articleDelimiter": "item",
        "title": "title",
        "link": "link"
    },

    "Moneyweb": {
        "url": corsAnywhere + "https://www.moneyweb.co.za/feed/",
        "articleDelimiter": "item",
        "title": "title",
        "link": "link"
    },
}
