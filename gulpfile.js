const gulp = require('gulp');
const sass = require('gulp-sass')
const browserSync = require('browser-sync');
const imagemin = require('gulp-imagemin');



gulp.task('copyHTML', () => {
    gulp.src('src/*.html')
        .pipe(gulp.dest('dist'))
});

gulp.task('images', () => {
    gulp.src('src/assets/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/assets/images'))
});

gulp.task('copyJS', () => {
    gulp.src('src/*.js')
        .pipe(gulp.dest('dist'))
});

gulp.task('compileCSS', () => {
    gulp.src('src/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('dist/'))
});

gulp.task('run', ['copyHTML', 'images', 'copyJS', 'compileCSS']);

gulp.task('watch', () => {
    gulp.watch('src/*.html', ['copyHTML'])
    gulp.watch('src/assets/images/*', ['images'])
    gulp.watch('src.*js', ['copyJS'])
    gulp.watch('src/*.scss', ['compileCSS'])
});

gulp.task('default', ['run','watch'])
