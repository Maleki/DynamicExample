var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var watch = require('gulp-watch');

gulp.task('browser-sync', function(){
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('serve', function(){

        browserSync.init({
        server: {
            baseDir: "./dist/"
        }
    });

    gulp.watch(["dist/*.js", "dist/**.html"] , function(){
        browserSync.reload();
    });

});