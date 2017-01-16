var gulp = require("gulp");

const paths = {
  jsxComponents: "src/**/*.js?(x)"
};

gulp.task("watch", () => {
  gulp.watch([
    paths.jsxComponents
  ], ["main"]);
});
