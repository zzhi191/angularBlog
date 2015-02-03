var gulp = require("gulp");
var concat = require("gulp-concat");
var uglify = require('gulp-uglify');
var cssmin = require('gulp-cssmin');
var wrap = require("gulp-wrap");
var expressService = require('gulp-express-service');

var wwwroot = './Client/';
var paths = {
	scripts   : ['Client/scripts/main.js','Client/scripts/**/*.js'],
	styles   : ['Client/styles/**/*.css'],
	templates: ['Client/templates/**/*.html'],
	server	:	['server.js']
};

gulp.task("scripts", function() {
	gulp.src(paths.scripts)
	.pipe(concat('m.js'))
	.pipe(wrap('(function(window){\n"use strict"\n<%= contents %>\n})(window);'))
	.pipe(concat('app.js'))
	.pipe(gulp.dest(wwwroot))
	.pipe(uglify())
	.pipe(concat('app.min.js'))
	.pipe(gulp.dest(wwwroot));
});

gulp.task('templates', function () {

});

gulp.task('styles', function () {
	return gulp.src(paths.styles)
	.pipe(concat('app.css'))
	.pipe(gulp.dest(wwwroot))
	.pipe(cssmin())
	.pipe(concat('app.min.css'))
	.pipe(gulp.dest(wwwroot));
});

gulp.task('run_service', function() {
	return gulp.src(['./server.js'])
	.pipe(expressService({
		file: './server.js'
	}))
	.on('error', function(e){console.log(e)});
});


gulp.task("watch", function() {
	gulp.watch(paths.scripts, ["scripts"] );
	gulp.watch(paths.templates, ["templates"] );
	gulp.watch(paths.styles, ['styles']);
	gulp.watch(paths.server,['run_service']);
});

gulp.task("build", ["scripts", "styles", "templates"]);
gulp.task("default", ["build","run_service", "watch"]);
