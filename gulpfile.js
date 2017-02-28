"use strict";

var gulp = require("gulp");
var babel = require("gulp-babel");
var browserSync = require("browser-sync").create();
var nodemon = require("gulp-nodemon");
var webpack = require("webpack-stream");
var webpackConfig = require("./webpack.config.js");

var imagemin = require("gulp-imagemin");
var rename = require("gulp-rename");

const paths = {
  jsxComponents: "src/**/*.js?(x)",
  outputBundle: "public/views"
};

gulp.task("watch", () => {
  gulp.watch([
    paths.jsxComponents
  ], ["fe_build", "server_start"]);
});


gulp.task("fe_build", () => {
  var stream =  gulp.src(paths.jsxComponents)
    .pipe(webpack(webpackConfig))
    .pipe(gulp.dest(paths.outputBundle));
  return stream;
});


//The below doesn't work.
gulp.task("server_start", ["fe_build"],  () => {
  return nodemon({
    script: "server.js",
    env: {
      "NODE_ENV": "development"
    }
  });
});




gulp.task("image-minify", () => {
  return gulp.src("images/**/*.jpg")
    .pipe(imagemin())
    .pipe(rename({suffix: ".min"}))
    .pipe(gulp.dest("dist"));
});

gulp.task("browser-sync", () => {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });
});


gulp.task("watch", ["browser-sync"], () => {
  gulp.watch("./**/*.html", browserSync.reload);
  gulp.watch("./**/*.css", browserSync.reload);
  gulp.watch("./**/*.js", browserSync.reload);
});



gulp.task("default", ["server_start"]);
