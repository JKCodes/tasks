var gulp = require('gulp')
var to5 = require('gulp-6to5')
var gp_concat = require('gulp-concat')
var gp_rename = require('gulp-rename')
var gp_uglify = require('gulp-uglify')
var minifyCSS = require('gulp-minify-css')
var autoprefixer = require('gulp-autoprefixer')
var path = require('path')

gulp.task('es6-es5', function() {
  return gulp.src([
      './src/serverapp.js',
      './src/*/**.js',
      './src/*/*/**.js'
    ]
  )
  .pipe(to5())
  .pipe(gulp.dest('./public/build/es5/'))
})

gulp.task('css', function(){
return gulp.src(
        [
            './public/assets/css/main.css',
            './public/assets/css/sweetalert.css'
        ]
    )
    .pipe(minifyCSS())
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie8', 'ie9'))
    .pipe(gp_concat('style.min.css'))
    .pipe(gulp.dest('./public/build/css/'))
});

gulp.task('copy', function(){
    return gulp.src(
        [
        './public/assets/fonts/**'
      ]
    )
    .pipe(gulp.dest('./public/build/fonts/'))
    
});

gulp.task('build', function(){
    return gulp.src(
            [
                './public/assets/js/jquery.min.js', //these lines may change
                './public/assets/js/skel.min.js',
                './public/assets/js/util.js',
                './public/assets/js/main.js',
                './public/assets/js/sweetalert.min.js'
            ]
        )
        .pipe(gp_concat('gulp-concat.js'))
        .pipe(gulp.dest('./public/min/'))
        .pipe(gp_rename('vendor.min.js'))
        .pipe(gp_uglify())
        .pipe(gulp.dest('./public/build/'));
});

gulp.task('watch', function(){
    gulp.watch(['./src/serverapp.js', './src/*/**.js]', './src/*/*/**.js', './src/*/*/*/**.js'], ['es6-es5', 'css', 'build'])
});

gulp.task('prod', ['es6-es5', 'css', 'copy', 'build'], function(){})

gulp.task('default', ['es6-es5', 'css', 'copy', 'build', 'watch'], function(){})