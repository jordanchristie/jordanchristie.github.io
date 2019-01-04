const gulp = require('gulp');
const sass = require('gulp-sass');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const ghPages = require('gulp-gh-pages');


gulp.task('copyHTML', () => {
    gulp.src('src/*.html')
        .pipe(gulp.dest('./dist/'))
});

gulp.task('images', () => {
    gulp.src('src/assets/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/assets/images'))
});

gulp.task('copyJS', () => {
    gulp.src('src/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js/'))
});

gulp.task('compileCSS', () => {
    gulp.src('src/*.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest('./dist/css/'))
});

gulp.task('deploy', () => {
    return gulp.src('./dist/**/*')
               .pipe(ghPages());
})

gulp.task('run', ['copyHTML', 'images', 'copyJS', 'compileCSS']);

gulp.task('watch', () => {
    gulp.watch('src/*.html', ['copyHTML'])
    gulp.watch('src/assets/images/*', ['images'])
    gulp.watch('src/*.js', ['copyJS'])
    gulp.watch('src/*.scss', ['compileCSS'])
});

gulp.task('default', ['run','watch'])
