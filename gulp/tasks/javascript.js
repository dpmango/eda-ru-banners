import gulp from 'gulp';
import path from 'path';
import util from 'gulp-util';
import plumber from 'gulp-plumber';
import concat from 'gulp-concat';
import uglifyJs from 'gulp-uglify';
import babel from 'gulp-babel';
import config from '../config';

const javascriptApp = () =>
  gulp
    .src([
      config.src.js + '/vendor/**/*.js',
      config.src.js + '/app.js',
      config.src.js + '/modules/**/*.js',
      config.src.components + '/**/*.js',
    ])
    .pipe(plumber({ errorHandler: config.errorHandler }))
    .pipe(concat('app.js'))
    .pipe(
      babel({
        presets: ['@babel/preset-env'],
      })
    )
    .pipe(config.production ? uglifyJs() : util.noop())
    .pipe(gulp.dest(config.dest.js));

const buildJavascript = () => gulp.parallel(javascriptApp);

const watch = () => () => {
  gulp.watch(
    [
      config.src.js + '/vendor/**/*.js',
      config.src.js + '/app.js',
      config.src.js + '/modules/**/*.js',
      config.src.components + '/**/*.js',
    ],
    javascriptApp
  );
};

module.exports.build = buildJavascript;
module.exports.watch = watch;
