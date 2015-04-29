var gulp = require("gulp");
var concat = require("gulp-concat");
var sourcemaps = require("gulp-sourcemaps");

BOWER = "bower_components/";

gulp.task("default", function() {
    gulp.src(BOWER + "/underscore/underscore.js")
        .pipe(sourcemaps.init())
          .pipe(concat("main.js"))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest("build"));
});
