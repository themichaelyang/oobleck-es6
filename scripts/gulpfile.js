'use strict'

const gulp = require('gulp');
const babel = require("gulp-babel");
const sourcemaps = require('gulp-sourcemaps');
const del = require('del');
const exec = require('child_process').exec;

let appDir = 'app';

// for development
gulp.task('build-js', function() {
  return processJavascript('src/**/*.js', appDir);
});

gulp.task('build-html', function() {
  return copyFiles('src/**/*.html', appDir);
});

gulp.task('build-css', function() {
  return copyFiles('src/**/*.css', appDir);
});

gulp.task('copy-libraries', function() {
  del(appDir+'js/vendor');
  return copyFiles('node_modules/babel-polyfill/dist/polyfill.min.js', appDir+'/js/vendor');
});

gulp.task('build', ['build-js', 'build-html', 'build-css']);

gulp.task('watch', ['build'], function() {
  var watcher = gulp.watch('src/**/*', ['build']);
  watcher.on('change', function(event) {
    console.log('File "' + event.path + '" was ' + event.type + ', running tasks...');
  });
});

function processJavascript(source, destination) { //, isProduction) {
  return gulp.src(source)
    .pipe(sourcemaps.init())
    .pipe(babel())
    .on('error', e => {
      console.log(e.stack);
      exec('say '+e.name); // says the error name
    })
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(destination));
}

function copyFiles(source, destination) {
  return gulp.src(source)
    .pipe(gulp.dest(destination));
}
