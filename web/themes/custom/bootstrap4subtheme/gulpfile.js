const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const csso = require("gulp-csso");
const cleanCSS = require("gulp-clean-css");
const uglify = require("gulp-uglify");
const autoprefixer = require("gulp-autoprefixer");

// task for compiling scss to css and minifying css
gulp.task("compilescss", () => {
  return gulp
    .src("src/styles/**/*.scss")
    .pipe(sass({
      outputStyle: 'expanded',
      precision: 10,
      includePaths: ['.'],
      onError: console.error.bind(console, 'Sass error:')
    }))
    .pipe(cleanCSS({ compatibility: "ie8" }))
    .pipe(
      autoprefixer({
        cascade: false,
      })
    )
    .pipe(csso())
    .pipe(gulp.dest("dist/styles"));
});
// task for minifying js
gulp.task("minify-js", function () {
  return (
    gulp
      .src("src/scripts/*.js")
      // Minify the file
      .pipe(uglify())
      // Output
      .pipe(gulp.dest("dist/scripts"))
  );
});

// async function for compilying scss to css and minify css
async function compilescss() {
  gulp
    .src("src/styles/**/*.scss")
    .pipe(
      sass({
        outputStyle: "expanded",
        precision: 10,
        includePaths: ["."],
        onError: console.error.bind(console, "Sass error:"),
      })
    )
    .pipe(cleanCSS({ compatibility: "ie8" }))
    .pipe(
      autoprefixer({
        cascade: false,
      })
    )
    .pipe(csso())
    .pipe(gulp.dest("dist/styles"));

  gulp
    .src("src/scripts/*.js")
    // Minify the file
    .pipe(uglify())
    // Output
    .pipe(gulp.dest("dist/scripts"));
}
// async function for minifying js
async function minifyjs() {
  gulp
    .src("src/scripts/*.js")
    // Minify the file
    .pipe(uglify())
    // Output
    .pipe(gulp.dest("dist/scripts"));
}
// task for compiling scss and minifying JS autometically
gulp.task("watch", function () {
  gulp.watch("src/styles/**/*.scss", compilescss);
  gulp.watch("src/scripts/*.js", minifyjs);
});
