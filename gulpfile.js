const gulp = require('gulp');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');

gulp.task('default', () => {
  return gulp.src(['app.js', '!./gulpfile.js', './**/*.js'])
  .pipe(babel({
    presets: ['es2015']
  }))
  .pipe(uglify())
  .pipe(concat('all.js'))
  .pipe(gulp.dest('dist'))
})
