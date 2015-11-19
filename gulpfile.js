// ///////////////////////////////////////////////
// Required
// ///////////////////////////////////////////////

var gulp = require('gulp'),
    minifyHTML = require('gulp-minify-html'),
    minifyCSS = require('gulp-minify-css'),
    clean = require('gulp-clean'),
    imagemin = require('imagemin'),
    imageminJPG = require('imagemin-jpegtran'),
    pngquant = require('imagemin-pngquant'),
    imageResize = require('gulp-image-resize'),
    runSequence = require('run-sequence');


// ///////////////////////////////////////////////
// Scripts
// ///////////////////////////////////////////////
gulp.task('img-min', function(){
    new imagemin()
    .src(['img/*.jpg', 'views/images/*.jpg'])
    .dest('dist/img')
    .use(imageminJPG())
    .run();
});

gulp.task('resize-pizzeria', function(){
    gulp.src('dist/img/pizzeria.jpg')
        .pipe(imageResize({
            width : 100
        }))
        .pipe(gulp.dest('dist/img/'));
});

gulp.task('copy-js', function(){
   gulp.src("js/*")
       .pipe(gulp.dest('dist/js'));
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

gulp.task('build', function(callback) {
    runSequence(
        ['html-compress', 'css-minify', 'img-min', 'copy-js'],
        'resize-pizzeria',
        callback);
});

// ///////////////////////////////////////////////
// Default Task
// ///////////////////////////////////////////////

//gulp.task('default', );
gulp.task('default', ['build']);
