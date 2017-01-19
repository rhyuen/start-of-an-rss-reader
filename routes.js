"use strict";

const express = require("express");
const path = require("path");
const parseString = require("xml2js").parseString;
let request = require("request");
let router = express.Router();

const rssList = {
  "The Guardian": {
    relPath: "/guardian",
    srcUrl: "https://www.theguardian.com/world/rss"
  },
  "Vancouver Sun": {
    relPath: "/vsunworld",
    srcUrl: "http://rss.canada.com/get/?F7432"
  },
  "NY Times": {
    relPath: "/nytimesworld",
    srcUrl: "http://rss.nytimes.com/services/xml/rss/nyt/World.xml"
  },
  "Washington Post": {
    relPath: "/wapoworld",
    srcUrl: "http://feeds.washingtonpost.com/rss/world"
  },
  "BBC": {
    relPath: "/bbcworld",
    srcUrl: "http://feeds.bbci.co.uk/news/world/rss.xml?edition=uk#"
  },
  "Globe and Mail": {
    relPath: "/globemailworld",
    srcUrl: "http://www.theglobeandmail.com/news/world/?service=rss"
  },
  "CBC": {
    relPath: "/cbcworld",
    srcUrl: "http://www.cbc.ca/cmlink/rss-world"
  }
};

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public/views/index.html"));
});


var rssKeys = Object.keys(rssList);
rssKeys.forEach((key) => {
  router.get(rssList[key].relPath, (req, res) => {
    request.get(rssList[key].srcUrl, (err, reqres, body) => {
      parseString(body, (err, result) => {
        var items = result.rss.channel[0].item;
        var processed = items.map((currItem) => {
          console.dir(currItem["dc:creator"]);
          console.dir(currItem["author"]);

          return {
            title: currItem.title,
            link: currItem.link,
            description: currItem.description,
            pubDate: currItem.pubDate
          }
        });
        res.json({description:  `${key} Success`, data: processed});
      });
    });
  });
});

function getAuthor(newsSource, sourceItem){
  return "String";
}

module.exports = router;
