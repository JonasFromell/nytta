module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {
            lib: {
                src:    ['src/intro.js', 'src/outro.js'],
                dest:   'lib/nytta.js'
            }
        },

        jshint: {
            lib: ['lib/nytta.js']
        },

        clean: {
            lib:    ['lib/**/*.min.js'],
            root:   ['nytta.js']
        },

        uglify: {
            lib: {
                files: {
                    'lib/nytta.min.js': ['lib/nytta.js']
                }
            }
        },

        copy: {
            root: {
                files: [
                    {expand: true, flatten: true, src: ['lib/nytta.js'], dest: '.', filter: 'isFile'}
                ]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.registerTask('build', ['concat', 'jshint', 'clean:lib', 'uglify']);
    grunt.registerTask('dist', ['clean:root', 'copy:root']);
};