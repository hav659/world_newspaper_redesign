const corsAnywhere = "https://cors-anywhere.herokuapp.com/";

var rssFeedConfig = {
    "New York Times": {
        "url": "https://rss.nytimes.com/services/xml/rss/nyt/Arts.xml",
        "articleDelimiter": "item",
        "title": "title",
        "link": "link"
    },
    "Japan": {
        "url": corsAnywhere + "http://www.japantimes.co.jp/feed/topstories",
        "articleDelimiter": "item",
        "title": "title",
        "link": "artictleTitle"
    },
    "Egypt": {
        "url": corsAnywhere + "https://www.egyptindependent.com/category/egypt/feed/",
        "articleDelimiter": "item",
        "title": "title",
        "link": "artictleTitle"
    },
    "South Africa": {
        "url": corsAnywhere + "http://feeds.news24.com/articles/News24/Africa/rss",
        "articleDelimiter": "item",
        "title": "title",
        "link": "link"
    },
    "South China": {
        "url": corsAnywhere + "https://www.scmp.com/rss/91/feed",
        "articleDelimiter": "item",
        "title": "title",
        "link": "artictleTitle"
    },
    "Turkey": {
        "url": corsAnywhere + "https://www.dailysabah.com/rssFeed/12/13",
        "articleDelimiter": "item",
        "title": "title",
        "link": "artictleTitle"
    }
}





/* https://www.egyptindependent.com/category/egypt/feed/ */
