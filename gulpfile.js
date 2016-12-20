const gulp = require('gulp');
const pug  = require('gulp-pug');
const sync = require('browser-sync').create();
const sass = require('gulp-sass');

gulp.task('default', ['pug', 'sass', 'javascript', 'image', 'serve', 'watch']);

gulp.task('pug', () => {
  return gulp.src('src/index.pug')
    .pipe(pug())
    .pipe(gulp.dest('docs'));
});

gulp.task('sass', () => {
  return gulp.src('src/style.sass')
    .pipe(sass())
    .pipe(gulp.dest('docs'))
    .pipe(sync.stream());
});

gulp.task('javascript', () => {
  return gulp.src('src/main.js')
    .pipe(gulp.dest('docs'));
});

gulp.task('watch', () => {
  gulp.watch('src/**/index.pug', ['pug']);
  gulp.watch('src/**/style.sass', ['sass']);
  gulp.watch('src/**/*.js', ['javascript']);
});

gulp.task('image', () => {
  gulp.src('src/**/*.png')
    .pipe(gulp.dest('docs'));
  gulp.src('src/**/*.jpeg')
    .pipe(gulp.dest('docs'));
});

// start a dev server with hotreloading
gulp.task('serve', () => {
  sync.init({
    server: {
      baseDir: 'docs'
    },
    browser: 'google chrome'
  });

  gulp.watch('docs/index.html').on('change', sync.reload);

});
