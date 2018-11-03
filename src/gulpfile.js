'use strict'

const gulp = require('gulp')
const postcss = require('gulp-postcss')
const cssmin = require('gulp-cssmin')
const sass = require('gulp-sass')
const autoprefixer = require('autoprefixer')

gulp.task('compile', function () {
  return gulp.src('./theme-default/index.scss')
    .pipe(sass())
    .pipe(postcss([
      autoprefixer({browsers: ['> 1%', 'ie >= 10', 'iOS >= 8', 'Android >= 4']})
    ]))
    .pipe(cssmin())
    .pipe(gulp.dest('../lib/styles/theme-default'))
})

gulp.task('copyfont', function () {
  return gulp.src('./theme-default/fonts/**')
    .pipe(gulp.dest('../lib/styles/theme-default/fonts'))
})

gulp.task('build', ['compile', 'copyfont'])
