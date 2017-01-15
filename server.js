"use strict";

const express = require("express");
const path = require("path");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const router = require("./routes.js");
const app = express();



app.use(express.static(path.join(__dirname, "public")));
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


app.use("/", router);


app.set("PORT", process.env.PORT||6567);
app.listen(app.get("PORT"), (err) => {
  if(err)
    return console.error("[%s] ERROR: %s", new Date().toLocaleString(), err);
  else{
    console.log("[%s] LISTENING ON PORT %s.", new Date().toLocaleString(), app.get("PORT"));
  }
});
