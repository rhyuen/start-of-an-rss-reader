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
    //console.log(body);
    parseString(body, (err, result) => {
      //var processed = JSON.parse(JSON.stringify(result));
      //console.log(processed.rss.channel[0].item);
      var items = result.rss.channel[0].item;
      var processed = items.map((currItem) => {
        return {
          title: currItem.title,
          link: currItem.link,
          description: currItem.description,
          pubDate: currItem.pubDate
        }
        // console.log(currItem.title);
        // console.log(currItem.link);
        // console.log(currItem.description);
        // console.log(currItem.pubDate);
      });
      res.json({description: "/guardian Success", data: processed});
    });
  });
});

module.exports = router;
