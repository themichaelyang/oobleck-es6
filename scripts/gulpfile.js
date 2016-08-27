'use strict'

var gulp = require('gulp');
var babel = require("gulp-babel");
var sourcemaps = require('gulp-sourcemaps');
var del = require('del');

var appDir = 'app';

// for development
gulp.task('build-js', function() {
  return processJavascript('src/**/*.js', appDir);
});

gulp.task('build-html', function() {
  return copyFiles('src/**/*.html', appDir);
});

gulp.task('copy-libraries', function() {
  del(appDir+'js/vendor');
  return copyFiles('node_modules/babel-polyfill/dist/polyfill.min.js', appDir+'/js/vendor');
});

gulp.task('watch', function() {
  var watcher = gulp.watch('src/**/*', ['build-js', 'build-html']);
  watcher.on('change', function(event) {
    console.log('File "' + event.path + '" was ' + event.type + ', running tasks...');
  });
});

function processJavascript(source, destination) { //, isProduction) {
  return gulp.src(source)
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(destination));
}

function copyFiles(source, destination) {
  return gulp.src(source)
    .pipe(gulp.dest(destination));
}
