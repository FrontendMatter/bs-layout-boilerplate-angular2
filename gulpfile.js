var gulp = require('gulp')
var $ = require('gulp-load-plugins')()
var runSequence = require('run-sequence')
var del = require('del')
var sassImporter = require('sass-importer-npm')
var autoprefixer = require('autoprefixer')

// CLEAN DIST FILES
gulp.task('clean', function (cb) {
	del([
		'./assets/css',
		'./assets/js',
		'./assets/vendor'
	]).then(function () {
		cb()
	})
})

// Copy vendor libraries from ./node_modules to ./assets/vendor
// Useful when publishing to a CDN
gulp.task('copy', function () {
	return gulp.src([
		'simplebar/dist/simplebar.css',
		'systemjs/dist/system.src.js',
	], {
		cwd: 'node_modules'
	})
	.pipe(gulp.dest('./assets/vendor'))
})

// Compile TypeScript from ./app to ./assets/js
// FOR DEVELOPMENT: use "npm start" or "npm run tsc" instead of the gulp tasks
var tsProject = $.typescript.createProject('./tsconfig.json', {
	sortOutput: true
})
gulp.task('ts', function() {
	var tsResult = tsProject.src('./app/**/*.ts')
		.pipe($.preprocess())
		.pipe($.sourcemaps.init())
		.pipe($.typescript(tsProject))

	return tsResult.js
		.pipe($.sourcemaps.write('.'))
		.pipe(gulp.dest('./assets/js'))
})

// (Watch) Compile TypeScript from ./app to ./assets/js
gulp.task('watch:ts', function() {
	gulp.watch('./app/**/*.ts', ['build:ts'])
})

function build(minify) {
	minify = minify || false
	var path = require('path')
	var Builder = require('systemjs-builder')
	var builder = new Builder('./', './systemjs.config.js')
	return builder
		.bundle('./assets/js/main.js', './assets/js/app.bundle.js', { minify: minify, sourceMaps: !minify })
		.catch(function(err) {
			console.log('Build error');
			console.log(err);
		})
}

// Create production bundle to ./assets/js/app.bundle.js 
// AFTER compiling TypeScript from ./app to ./assets/js
gulp.task('build:ts', ['ts'], function() {
	return build()
})

// Create production bundle (minified) to ./assets/js/app.bundle.js 
// AFTER compiling TypeScript from ./app to ./asstes/js
gulp.task('release:ts', ['ts'], function() {
	return build(true)
})

// Create production bundle to ./assets/js/app.bundle.js 
// WITHOUT compiling TypeScript
gulp.task('build:js', function() {
	return build()
})

// Create production bundle (minified) to ./assets/js/app.bundle.js 
// WITHOUT compiling TypeScript
gulp.task('release:js', function() {
	return build(true)
})

function sass(minify) {
	minify = minify || false
	return gulp.src('./assets/sass/app.scss')
		// (optional) sourcemaps
		.pipe($.if(!minify, $.sourcemaps.init()))
		// Compile Sass
		.pipe($.sass({ 
			// Resolve Sass file imports from node_modules
			importer: sassImporter
		})
		// Handle errors
		.on('error', $.sass.logError))
		// Post CSS
		.pipe($.postcss([
			// autoprefixer
			autoprefixer({ browsers: ['last 2 versions'] })
		]))
		// (optional) Minify CSS
		.pipe($.if(minify, $.cleanCss()))
		// (optional) Write .map file
		.pipe($.if(!minify, $.sourcemaps.write('.')))
		// Write CSS file
		.pipe(gulp.dest('./assets/css'))
}

// Compile Sass from ./app/assets/sass to ./app/assets/css (not minified, with sourcemaps)
gulp.task('build:sass', function () {
	return sass()
})

// Compile Sass from ./app/assets/sass to ./app/assets/css (minified, without sourcemaps)
gulp.task('release:sass', function () {
	return sass(true)
})

// Watch Sass
gulp.task('watch:sass', function () {
	gulp.watch('./assets/sass/**/*', ['build:sass'])
})

gulp.task('build', function(callback) {
	runSequence(
		'clean',
		['copy', 'ts', 'build:sass'],
		callback)
})

gulp.task('release', function(callback) {
	runSequence(
		'clean',
		['copy', 'release:ts', 'release:sass'],
		callback)
})

gulp.task('watch', ['watch:ts', 'watch:sass'])

gulp.task('default', ['build'])