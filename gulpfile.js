var gulp      = require('gulp'), // Подключаем Gulp
    sass        = require('gulp-sass'), //Подключаем Sass пакет,
    browserSync = require('browser-sync'); // Подключаем Browser Sync
var csso = require ('gulp-csso');
var concat = require('gulp-concat');
var imagemin = require('gulp-imagemin');
var     uglify = require('gulp-uglify');
const autoprefixer = require('gulp-autoprefixer');


gulp.task('sass', function(){ // Создаем таск Sass
    return gulp.src('app/sass/**/*.scss') // Берем источник
        .pipe(sass()) // Преобразуем Sass в CSS посредством gulp-sass
        .pipe(gulp.dest('app/css')) // Выгружаем результата в папку app/css
        .pipe(browserSync.reload({stream: true})) // Обновляем CSS на странице при изменении
});

gulp.task('browser-sync', function() { // Создаем таск browser-sync
    browserSync({ // Выполняем browserSync
        server: { // Определяем параметры сервера
            baseDir: 'app' // Директория для сервера - app
        },
        notify: false // Отключаем уведомления
    });
});

gulp.task('watch', ['browser-sync', 'sass'], function() {
    gulp.watch('app/sass/**/*.scss', ['sass']);
    gulp.watch('app/*.html', browserSync.reload); // Наблюдение за HTML файлами в корне проекта
    gulp.watch('app/js/**/*.js', browserSync.reload); // Наблюдение за JS файлами в папк
    
});


gulp.task('css:build', function(){
	
	return gulp.src('app/css/*.css')
	
	.pipe(concat('style.min.css'))

	.pipe(csso({
	comments:false
	
	}))
	.pipe(gulp.dest('dist/css/'))
});



gulp.task('auto-pref', () =>
    gulp.src('dist/css/*.css')
        .pipe(autoprefixer({
            browsers: ['> 5%'],
            cascade: false
        }))
        .pipe(gulp.dest('dist/css/'))
);

// Compress Task
gulp.task('html:build', function() {
  gulp.src('app/*.html')
  .pipe(gulp.dest('dist/'))
});

gulp.task('img:build', function() {
  gulp.src('app/img/*')
  .pipe(imagemin())
  .pipe(gulp.dest('dist/img'))
});

gulp.task('js:build', function() {
  return gulp.src('app/js/**/*.js')
    .pipe(concat('main.min.js'))
     .pipe(uglify())
    .pipe(gulp.dest('dist/js'));
});


gulp.task('build', ['auto-pref', 'css:build', 'img:build', 'js:build','html:build'])
	
