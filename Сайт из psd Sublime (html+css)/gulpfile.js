var gulp = require('gulp'), // Подключаем Gulp
	browserSync = require('browser-sync').create(),
    sass = require('gulp-sass'); // Подключаем Sass пакет

 const preFiles = ['sass/**/*.sass', 'scss/**/*.scss']

gulp.task('sass', fsass);
function fsass() { // Создаем таск "sass"
  return gulp.src(preFiles) // Берем источник
    .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError)) // Преобразуем Sass в CSS посредством gulp-sass
    .pipe(gulp.dest('css')) // Выгружаем результата в папку css
 	.pipe(browserSync.stream());
 };

gulp.task('watch', watch);
function watch() {
	browserSync.init({
		server: {
			baseDir: "./"
		}
	});
  gulp.watch(preFiles, gulp.series('sass'));   // Наблюдение за sass файлами в папке sass
  gulp.watch('./*.html').on('change', browserSync.reload);
}

gulp.task('default', gulp.series('watch'));