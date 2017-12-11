/**
 * Created by csm on 2017/10/18.
 */
var gulp        = require('gulp');
var sass        = require('gulp-sass');
var minifyCSS   = require('gulp-minify-css');
var rename      = require('gulp-rename');


gulp.task('compressCSS', function () {
    gulp.src("src/css/*.scss")
        .pipe(sass())   //编译sass文件
        .pipe(minifyCSS()) //压缩文件
        .pipe(rename({ //重新命名
            suffix:'.min'
    }))
        .pipe(gulp.dest("dist/css")) //储存到新的文件夹

})
gulp.task("watch",function(){   //监视文件变化
    gulp.watch(['src/css/*scss'],['compressCSS']);

});
gulp.task('default',['compressCSS','watch']);  //gulp执行