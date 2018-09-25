// IMPORT SASS
var gulp = require('gulp');
// IMPORT GULP-SASS PLUGIN
var sass = require('gulp-sass');
// get browser-sync for local testing
var browserSync = require('browser-sync').create();
// GREATE CULP SASS FUNCTION, SET TAGERT AND DESTINATION FOLDERS
gulp.task('sass', function() {
	return gulp.src('assets/scss/styles.scss') // Gets all files ending with .scss in app/scss
	.pipe(sass())
	.pipe(gulp.dest('assets/css'))
	.pipe(browserSync.reload({
	  stream: true
	}))
});
// CREATE GULP TASK TO WATCH FOR CHANGES IN SCSS, HTML AND JS FILES.
gulp.task('watch', ['browserSync', 'sass'], function (){
	gulp.watch('assets/scss/**/*.scss', ['sass']); 
	gulp.watch('content/**/*.htm', browserSync.reload);
	gulp.watch('layouts/*.htm', browserSync.reload); 
	gulp.watch('pages/*.htm', browserSync.reload); 
	gulp.watch('partials/**/*.htm', browserSync.reload);  
	gulp.watch('assets/js/**/*.js', browserSync.reload); 
});
// BROWSER SYNC FUNCTION SET BASE DIR THAT BROSWER SYNC WILL WATCH
gulp.task('browserSync', function() {
	browserSync.init({
		proxy: "localhost:8080"
	})
})