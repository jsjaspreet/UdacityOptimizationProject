// ///////////////////////////////////////////////
// Required
// ///////////////////////////////////////////////

var gulp = require('gulp'),
    minifyHTML = require('gulp-minify-html'),
    minifyCSS = require('gulp-minify-css'),
    clean = require('gulp-clean'),
    imagemin = require('imagemin'),
    imageminJPG = require('imagemin-jpegtran'),
    pngquant = require('imagemin-pngquant');


// ///////////////////////////////////////////////
// Scripts
// ///////////////////////////////////////////////
gulp.task('img-min', function(){
    new imagemin()
    .src(['img/*.jpg', 'views/images/*.jpg'])
    .dest('dist/img')
    .use(imageminJPG())
    .run();

//    gulp.src(['img/*.jpg', 'views/images/*.jpg'])
  //  .pipe(imagemin({use: [imageminJPG()]}))
    //.pipe(gulp.dest('dist/img'));
});

gulp.task('html-compress', function() {
    gulp.src('*.html')
    .pipe(minifyHTML())
    .pipe(gulp.dest('dist'));
});

gulp.task('css-minify', function(){
    gulp.src("css/*.css")
    .pipe(minifyCSS())
    .pipe(gulp.dest('dist/css'));
});

gulp.task('clean', function(){
    gulp.src('dist', {read: false})
    .pipe(clean());
});


// ///////////////////////////////////////////////
// Default Task
// ///////////////////////////////////////////////

gulp.task('default', ['html-compress', 'css-minify', 'img-min']);
