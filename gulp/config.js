'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

var config = {

    build: './build/',
    dist: './dist/',
    base: './build/',
    taskPath: './gulp/tasks/',
    
    html: {
        watch: ['src/html/**/*.html'],
        src: ['./src/html/**/*.html', '!./src/html/includes/**']
    },
    
    sass: {
        watch: ['src/sass/**/*.scss'],
        src: ['./src/sass/main.scss'],
        folder: 'css/',
        destFile: 'styles.min.css'
    },

    js: {
        watch: ['src/js/**/*.js'],
        src: ['./src/js/**/*.js', '!./src/js/lib/comel.js'],
        folder: 'js/',
        destFile: 'main.min.js'
    },

    comel: {
        src: [
            './src/js/lib/comel.js'
        ]
    },
    
    images: {
        watch: ['src/img/**'],
        src: ['./src/img/**'],
        srcFolder: './src/img/',
        folder: 'img/'
    },
    
    misc: {
        src: [
            'fonts/**',
            '*.ico',
            'src/.*'
        ],
    },

    error: function(error) {

        $.notify.onError({
            title: 'Gulp',
            message: 'Error: <%= error.message %>'
        })(error);
        this.emit('end');

    }
};

module.exports = config;