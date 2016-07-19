module.exports = function (grunt) {

    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            dev: {
                files: {
                    "dist/css/main.css": "src/css/less/main.less"
                }
            }
        },
        autoprefixer: {
            dev: {
                src: 'dist/css/main.css'
            }
        },
        concat: {
            dev: {
                src: ['src/js/vendor/jquery-1.11.2.min.js', 'src/js/**/*.js'],
                dest: 'dist/js/main.js'
            }
        },
        uglify: {
            options: {
                mangle: false
            },
            dev: {
                files: {
                    'dist/js/main.js': ['dist/js/main.js']
                }
            }
        },
        cssmin: {
            dev: {
                files: [{
                        expand: true,
                        cwd: 'dist/css',
                        src: ['*.css', '!*.min.css'],
                        dest: 'dist/css',
                        ext: '.min.css'
                    }]
            }
        },
        watch: {
            styles: {
                files: ['src/css/**/*.less', 'src/js/**/*.js'],
                tasks: ['less:dev', 'autoprefixer:dev', 'concat:dev', 'uglify:dev', 'cssmin:dev']
            }
        }
    });

    // Default task(s).
    grunt.registerTask('default', ['less:dev', 'autoprefixer:dev', 'concat:dev', 'uglify:dev', 'cssmin:dev']);
};