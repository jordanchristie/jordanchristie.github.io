const gulp = require('gulp');
const sass = require('gulp-sass')
const browserSync = require('browser-sync');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');

gulp.task('copy-html', () => {
    gulp.src('src/*.html')
        .pipe(gulp.dest('dist'))
});

gulp.task('images', () => {
    gulp.src('src/assets/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/assets'))
});

gulp.task('minifyJS', () => {
    gulp.src('src/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'))
});

gulp.task('compileCSS', () => {
    gulp.src('src/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('dest/main.min.css'))
});

gulp.task('watch', () => {
    gulp.watch('src/*.html', ['copy-html'])
    gulp.watch('src/assets/*', ['images'])
    gulp.watch('src/*.js', ['minifyJS'])
    gulp.watch('src/*.scss', ['compileCSS'])
})

gulp.task('default', ['watch'])