const gulp = require("gulp");
const concat = require("gulp-concat");
const uglify = require("gulp-uglify-es").default;
const cssnano = require("gulp-cssnano");
const sourcemaps = require("gulp-sourcemaps");
const autoprefixer = require("gulp-autoprefixer");
const htmlmin = require("gulp-htmlmin");
const browserSync = require("browser-sync").create();
const image = require("gulp-image");

const scripts = require("./scripts");
const styles = require("./styles");

gulp.task("css", function (done) {
  gulp
    .src(styles)
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(
      autoprefixer({
        overrideBrowserslist: ["last 2 versions"],
      })
    )
    .pipe(cssnano())
    .pipe(concat("index.css"))
    .pipe(gulp.dest("dist/src/assets/css"))
    .pipe(
      browserSync.reload({
        stream: true,
      })
    );
  done();
});

gulp.task("js", function (done) {
  gulp
    .src(scripts)
    .pipe(uglify())
    .on("error", (err) => console.log(err))
    .pipe(concat("index.js"))
    .pipe(gulp.dest("dist/src/js"))
    .pipe(
      browserSync.reload({
        stream: true,
      })
    );
  done();
});

gulp.task("imgs", function (done) {
  gulp
    .src(["./src/assets/imgs/*"])
    .pipe(image())
    .pipe(gulp.dest("dist/src/assets/imgs/"))
    .pipe(
      browserSync.reload({
        stream: true,
      })
    );
  done();
});

gulp.task("fonts", function (done) {
  gulp.src(["./src/assets/fonts/*"]).pipe(gulp.dest("dist/src/assets/fonts/"));
  done();
});

gulp.task("html", function (done) {
  gulp
    .src(["./index.html"])
    .pipe(htmlmin({ collapseWhitespace: true, removeComments: true }))
    .pipe(gulp.dest("dist/"))
    .pipe(
      browserSync.reload({
        stream: true,
      })
    );
  done();
});

gulp.task(
  "build",
  gulp.parallel("fonts", "css", "imgs", "js", "html"),
  function (done) {
    done();
  }
);

gulp.task("serve", function (done) {
  browserSync.init(null, {
    open: false,
    server: {
      baseDir: "dist",
    },
  });
  gulp.watch("./src/assets/css/**/*.scss", gulp.series("css"));
  gulp.watch("./src/assets/css/**/*.css", gulp.series("css"));
  gulp.watch("./src/js/*.js", gulp.series("js"));
  gulp.watch("./styles.json", gulp.series("css"));
  gulp.watch("./scripts.json", gulp.series("js"));
  gulp.watch("./index.html", gulp.series("html"));
  gulp.watch("./gulpfile.js", gulp.series("build"));
  done();
});

gulp.task("default", gulp.series("build", "serve"), function (done) {
  done();
});
