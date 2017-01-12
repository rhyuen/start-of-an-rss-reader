$(document).ready(function(){
  $.get("/guardian", function(res){
    console.log(res.data);
    res.data.map(function(item){
      $(".content .guardian")
        .append($("<div/>")
        .append($("<a/>", {href: item.link[0], text: item.title[0], target: "_blank"}))
        .append($("<br/>"))
        .append($("<div/>", {text: item.pubDate})));
    });
  });

  $.get("/vsunworld", function(res){
    res.data.map(function(item){
      $(".content .vsunworld")
        .append($("<div/>")
        .append($("<a/>", {href: item.link[0], text: item.title[0], target: "_blank"}))
        .append($("<br/>"))
        .append($("<div/>", {text: item.pubDate})));
    });
  });

  $.get("/nytimesworld", function(res){
    res.data.map(function(item){
      $(".content .nytimesworld")
        .append($("<div/>")
        .append($("<a/>", {href: item.link[0], text: item.title[0], target: "_blank"}))
        .append($("<br/>"))
        .append($("<div/>", {text: item.pubDate})));
    });
  });

  $.get("/wapoworld", function(res){
    res.data.map(function(item){
      $(".content .wapoworld")
        .append($("<div/>")
        .append($("<a/>", {href: item.link[0], text: item.title[0], target: "_blank"}))
        .append($("<br/>"))
        .append($("<div/>", {text: item.pubDate})));
    });
  });

  $.get("/bbcworld", function(res){
    res.data.map(function(item){
      $(".content .bbcworld")
        .append($("<div/>")
        .append($("<a/>", {href: item.link[0], text: item.title[0], target: "_blank"}))
        .append($("<br/>"))
        .append($("<div/>", {text: item.pubDate})));
    });
  });

  $.get("/globemailworld", function(res){
    res.data.map(function(item){
      $(".content .globemailworld")
        .append($("<div/>")
        .append($("<a/>", {href: item.link[0], text: item.title[0], target: "_blank"}))
        .append($("<br/>"))
        .append($("<div/>", {text: item.pubDate})));
    });
  });

  $.get("/cbcworld", function(res){
    res.data.map(function(item){
      $(".content .cbcworld")
        .append($("<div/>")
        .append($("<a/>", {href: item.link[0], text: item.title[0], target: "_blank"}))
        .append($("<br/>"))
        .append($("<div/>", {text: item.pubDate})));
    });
  });
});
