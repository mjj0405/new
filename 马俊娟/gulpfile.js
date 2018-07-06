var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var css = require('gulp-clean-css');
var uglify = require('gulp-uglify'); // 压缩js
var minhtml = require('gulp-htmlmin'); // 压缩html
// gulp.task('default', function() {
//     console.log('gulp');
//     // gulp.src('./src/**/*.html')
//     // gulp.src('./src/images/*.{jpg,png}');
//     gulp.src(['./src/js/*.js', '!./src/js/*.min.js'], { base: 'src' })
//         .pipe(gulp.dest('build'));
// })
// 对样式文件的操作
gulp.task('devSass', function() {
        gulp.src('./src/scss/*.scss')
            .pipe(sass())
            .pipe(autoprefixer({
                browsers: ['last 2 versions', 'Android >=4.0']
            }))
            .pipe(css())
            .pipe(gulp.dest('./src/css'))
    })
    // 对js文件压缩
gulp.task('uglify', function() {
        gulp.src(['./src/js/*.js', '!./src/js/*.min.js'])
            .pipe(uglify())
            .pipe(gulp.dest('build/js'))
    })
    // 对html文件压缩
var options = {
    removeComments: true, // 清除注释
    collapsewhitespace: true // 压缩html
}
gulp.task('minhtml', function() {
    gulp.src('./src/**/*.html')
        .pipe(minhtml(options))
        .pipe(gulp.dest('build'))
})