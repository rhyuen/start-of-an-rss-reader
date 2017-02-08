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
  },
  "The Intercept": {
    relPath: "/theintercept",
    srcUrl: "https://theintercept.com/feed/?lang=en"
  },
  "The Economist": {
    relPath : "/theeconomist",
    srcUrl: "http://www.economist.com/sections/international/rss.xml"
  },
  // "The Atlantic": {
  //   relPath : "/theatlantic",
  //   srcUrl: "https://www.theatlantic.com/feed/channel/international/"
  // },
  "New Yorker": {
    relPath : "/newyorker",
    srcUrl: "http://www.newyorker.com/feed/news"
  }
};

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public/views/index.html"));
});
router.get("/popular", (req, res) => {
  res.sendFile(path.join(__dirname, "public/views/popular.html"));
});
router.get("/bysource", (req, res) => {
  res.sendFile(path.join(__dirname, "public/views/bysource.html"));
});


var rssKeys = Object.keys(rssList);
rssKeys.forEach((key) => {
  router.get(rssList[key].relPath, (req, res) => {
    request.get(rssList[key].srcUrl, (err, reqres, body) => {
      parseString(body, (err, result) => {
        if(err){
          console.log("ERROR %s", err);
        }
        console.log(result.rss.channel);
        var items = result.rss.channel[0].item;
        var processed = items.map((currItem) => {

          return {
            newsSource: key,
            title: currItem.title,
            link: currItem.link,
            description: currItem.description,
            pubDate: currItem.pubDate,
            author: getAuthor(currItem, key),
            category: getCategory(currItem, key)
          };
        });
        res.json({description:  `${key} Success`, data: processed});
      });
    });
  });
});

function getCategory(sourceItem, key){

  if((key === "NY Times" || key === "The Guardian") && sourceItem["category"]) {
    var tags = [];
    sourceItem["category"].map((currItem) => {
      tags.push(currItem["_"]);
    });
    return tags.join(",");
  }

  if(sourceItem["category"]){
    if(key === "The Intercept")
      return sourceItem["category"].join(", ");
    return sourceItem["category"];
  }


  return "WORLD NEWS";
}

function getAuthor(sourceItem, newsSource){
  //Guardian
  if(sourceItem["dc:creator"])
    return sourceItem["dc:creator"];
  //CBC
  if(sourceItem["author"])
    return sourceItem["author"];
  return newsSource;
}

module.exports = router;
