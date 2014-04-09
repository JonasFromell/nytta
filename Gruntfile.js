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
                    {expand: true, flatten: true, src: ['lib/nytta.js'], dest: '/', filter: 'isFile'}
                ]
            }
        }
    });

    grunt.loadNpmTask('grunt-contrib-concat');
    grunt.loadNpmTask('grunt-contrib-jshint');
    grunt.loadNpmTask('grunt-contrib-clean');
    grunt.loadNpmTask('grunt-contrib-uglify');
    grunt.loadNpmTask('grunt-contrib-copy');

    grunt.registerTask('build', ['concat', 'jshint', 'clean:lib', 'uglify']);
    grunt.registerTask('dist', ['clean:root', 'copy:root']);
};