"use strict";

const express = require("express");
const path = require("path");
const cheerio = require("cheerio")
const parseString = require("xml2js").parseString;
let request = require("request");
let router = express.Router();

const rssList = {
  "The Guardian": {
    relPath: "/guardian",
    srcUrl: "https://www.theguardian.com/world/rss",
    readerRegex: /theguardian.com/,
    readerSelector: ".content__article-body"
  },
  "Vancouver Sun": {
    relPath: "/vsunworld",
    srcUrl: "http://rss.canada.com/get/?F7432",
    readerRegex: /vancouversun.com/,
    readerSelector: ".story-content p"
  },
  "NY Times": {
    relPath: "/nytimesworld",
    srcUrl: "http://rss.nytimes.com/services/xml/rss/nyt/World.xml",
    readerRegex: /nytimes.com/,
    readerSelector: ".story-body-text"
    //can't get to work
  },
  "Washington Post": {
    relPath: "/wapoworld",
    srcUrl: "http://feeds.washingtonpost.com/rss/world",
    readerRegex: /washingtonpost.com/,
    readerSelector: "#article-body p"
  },
  "BBC": {
    relPath: "/bbcworld",
    srcUrl: "http://feeds.bbci.co.uk/news/world/rss.xml?edition=uk#",
    readerRegex: /bbc.co.uk/,
    readerSelector: ".story-body p"
  },
  "Globe and Mail": {
    relPath: "/globemailworld",
    srcUrl: "http://www.theglobeandmail.com/news/world/?service=rss",
    readerRegex: /theglobeandmail.com/,
    readerSelector: "p" //subpar selector
  },
  "CBC": {
    relPath: "/cbcworld",
    srcUrl: "http://www.cbc.ca/cmlink/rss-world",
    readerRegex: /cbc.ca/,
    readerSelector: ".story-content p"
  },
  "The Intercept": {
    relPath: "/theintercept",
    srcUrl: "https://theintercept.com/feed/?lang=en",
    readerRegex: /theintercept.com/,
    readerSelector: ".PostContent span.s1"
  },
  "The Economist": {
    relPath : "/theeconomist",
    srcUrl: "http://www.economist.com/sections/international/rss.xml",
    readerRegex: /economist.com/,
     readerSelector: "p" //cant get it to work.
    //readerSelector: ".blog-post__text p"
  },
  "New Yorker": {
    relPath : "/newyorker",
    srcUrl: "http://www.newyorker.com/feed/news",
    readerRegex: /newyorker.com/,
    readerSelector: "#content p"
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
router.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "public/views/login.html"));
});
router.get("/signup", (req, res) => {
  res.sendFile(path.join(__dirname, "public/views/signup.html"));
});


var rssKeys = Object.keys(rssList);
rssKeys.forEach((key) => {
  router.get(rssList[key].relPath, (req, res) => {
    request.get(rssList[key].srcUrl, (err, reqResponse, body) => {
      if(err){
        console.error("[%s] GENERIC ERROR: %s for %s", new Date().toLocaleString(), err, key);
        return res.json({
          description: `${key} Failure`,
          status: `${key}: Something is wrong on their end.`
        });
      }
      if(reqResponse.statusCode === 500){
        console.error("[%s] 500 ERROR for %s", new Date().toLocaleString(), key);
        return res.json({
          description: `${key} Failure`,
          status: `${key}: 500.  Something is wrong on their end.`
        });
      }

      parseString(body, (err, result) => {
        if(err){
          console.log("ERROR %s", err);
        }

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

router.post("/reader", (req, res) => {
  const articleURL = req.body.url;
  const reqOptions = {
    uri: articleURL,
    maxRedirects: 100
  };

  console.log(articleURL);
  request(reqOptions, (err, reqRes, body) => {
    if(!err && reqRes.statusCode === 200){
      let $ = cheerio.load(body);

      for(var readerKey in rssList){
        var pattern = rssList[readerKey].readerRegex;
        if(articleURL.match(pattern)){
          const articleContent = $(rssList[readerKey].readerSelector).text();
          console.log("%s: %s", readerKey, articleContent);
          res.json({meta: readerKey, data: articleContent});
        }
      }
    }
  });
});

router.get("*", (req, res) => {
  res.redirect("/");
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
