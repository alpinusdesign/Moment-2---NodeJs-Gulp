/* - Includes - */
const gulp = require('Gulp');
const concat = require('gulp-concat');
const terser = require('gulp-terser');
const image = require('gulp-image');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const browserSync = require('browser-sync').create();

/* - File paths - */
const files = {
  htmlPath: "src/*.html",
  cssPath: "src/**/*.css",
  jsPath: "src/**/*.js",
  imgPath: "src/img/*"
}

// Task: Add prefixes, concatenate and minify CSS-files.
function cssTask()
{
  return gulp.src(files.cssPath)
  .pipe(autoprefixer({ browsers: ['IE 6','Chrome 9', 'Firefox 14']}))
  .pipe(concat('styles.css'))
  .pipe(cleanCSS({compatibility: 'ie8'}))
  .pipe(gulp.dest('pub/css'))
  .pipe(browserSync.stream());
}

// Task: Copy HTML.
function htmlTask()
{
  return gulp.src(files.htmlPath)
  .pipe(gulp.dest('pub'))
  .pipe(browserSync.stream());
}

// Task: Concatenate and minify Javascript.
function jsTask()
{
  return gulp.src(files.jsPath)
  .pipe(concat('main.js'))
  .pipe(terser())
  .pipe(gulp.dest('pub/js'))
  .pipe(browserSync.stream());
}

// Task: Optimize images.
function imgTask()
{
  return gulp.src(files.imgPath)
  .pipe(image())
  .pipe(gulp.dest('pub/img'))
  .pipe(browserSync.stream());
}

// Task: Watcher.
function watchTask()
{
  // - Establish local server connection.
  browserSync.init({
    server: {
        baseDir: 'pub/'
    }
  });

  // - Watch files.
  gulp.watch([files.htmlPath, files.cssPath, files.jsPath, files.imgPath],
    gulp.parallel(htmlTask, cssTask, jsTask, imgTask)
  ).on('change', browserSync.reload);
}

/* - Default - */
exports.default = gulp.series(
  gulp.parallel(htmlTask, cssTask, jsTask, imgTask),
  watchTask
);