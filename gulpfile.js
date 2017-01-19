var gulp = require("gulp");
var babel = require("gulp-babel");
var browserSync = require("browser-sync").Create();
var nodemon = require("gulp-nodemon");
var webpack = require("webpack-stream");
var webpackConfig = require("./webpack.config.js");

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


gulp.task("default", ["server_start"]);
