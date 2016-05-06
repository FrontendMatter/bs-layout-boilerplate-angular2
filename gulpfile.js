var gulp = require('gulp')
var $ = require('gulp-load-plugins')()
var tsProject = $.typescript.createProject('./tsconfig.json', {
	sortOutput: true
})

gulp.task('ts', function() {
	var tsResult = tsProject.src('./src/ts/**/*.ts')
		.pipe($.sourcemaps.init())
		.pipe($.typescript(tsProject));

	return tsResult.js
		.pipe($.sourcemaps.write('.'))
		.pipe(gulp.dest('./dist/app'));
})

gulp.task('watch:ts', function() {
	gulp.watch('./src/ts/**/*.ts', ['build:ts']);
})

gulp.task('watch:js', function() {
	gulp.watch(['./dist/app/**/*.js', '!./dist/app/app.bundle.*'], ['build:js']);
})

function build(minify) {
	minify = minify || false;
	var path = require('path')
	var Builder = require('systemjs-builder')
	var builder = new Builder('./dist/', './dist/systemjs.config.js')
	return builder
		.bundle('./dist/app/main.js', './dist/app/app.bundle.js', { minify: minify, sourceMaps: !minify })
		.catch(function(err) {
			console.log('Build error');
			console.log(err);
		});
}

gulp.task('build:ts', ['ts'], function() {
	return build()
})

gulp.task('release:ts', ['ts'], function() {
	return build(true)
})

gulp.task('build:js', function() {
	return build()
})

gulp.task('release:js', function() {
	return build(true)
})

gulp.task('default', ['release:js'])