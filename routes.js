const express = require("express");
const path = require("path");
const parseString = require("xml2js").parseString;
let request = require("request");
let router = express.Router();

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public/views/index.html"));
});

router.get("/guardian", (req, res) => {
  request.get("https://www.theguardian.com/world/rss", (err, reqres, body) => {
    parseString(body, (err, result) => {
      var items = result.rss.channel[0].item;
      var processed = items.map((currItem) => {
        return {
          title: currItem.title,
          link: currItem.link,
          description: currItem.description,
          pubDate: currItem.pubDate
        }
      });
      res.json({description: "/guardian Success", data: processed});
    });
  });
});

router.get("/vsunworld", (req, res) => {
  request.get("http://rss.canada.com/get/?F7432", (err, reqres, body) => {
    parseString(body, (err, result) => {
      var items = result.rss.channel[0].item;
      var processed = items.map((currItem) => {
        return {
          title: currItem.title,
          link: currItem.link,
          description: currItem.description,
          pubDate: currItem.pubDate
        }
      });
      res.json({description: "GET /vsunworld Success", data: processed});
    });

  });
});


router.get("/nytimesworld", (req, res) => {
  request.get("http://rss.nytimes.com/services/xml/rss/nyt/World.xml", (err, reqres, body) => {
    if(err)
      console.error(err);

    parseString(body, (err, result) => {
      var items = result.rss.channel[0].item;
      var processed = items.map((currItem) => {
        return {
          title: currItem.title,
          link: currItem.link,
          description: currItem.description,
          pubDate: currItem.pubDate
          //category field as well for tags.
        }
      });
      res.json({description: "GET /nytimesworld Success", data: processed});
    });

  });
});

router.get("/wapoworld", (req, res) => {
  request.get("http://feeds.washingtonpost.com/rss/world", (err, reqres, body) => {
    if(err)
      console.error(err);

    parseString(body, (err, result) => {
      var items = result.rss.channel[0].item;
      var processed = items.map((currItem) => {
        return {
          title: currItem.title,
          link: currItem.link,
          description: currItem.description,
          pubDate: currItem.pubDate
          //category field as well for tags.
        }
      });
      res.json({description: "GET /nytimesworld Success", data: processed});
    });

  });
});

module.exports = router;
