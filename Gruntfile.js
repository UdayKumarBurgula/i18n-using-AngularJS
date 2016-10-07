module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // validate all the js files
        jshint: {
            options: {
                reporter: require('jshint-stylish')
            },
            all: ['Grunfile.js', 'src/**/*.js']
        },

        // watch all the js and html files for any changes
        watch: {
            scripts: {
                files: 'src/**/*.js',
                options: {livereload: true},
                all: ['Gruntfile.js', 'src/**/*.js']
            },
            tpl: {
                files: 'src/**/*.html',
                options: {livereload: true},
            },
            options: { livereload: true }
        },

        // server to make livereload
        express:{
  			all:{
  				options:{
  					port:8080,
  					hostname:'localhost',
  					bases:['.'],
  					livereload:true
  				}
  			}
  		},

        // nodemon to start the node server
        nodemon: {
            dev: {
                script: 'server.js'
            }
        },

        // concurrent to run both watch and nodemon at the same time
        concurrent: {
            options: {
                logConcurrentOutput: true
            },
            tasks: ['nodemon', 'watch']
        },

        // open to start the chrome
        open: {
            dev: {
                path: 'http://localhost:8080/',
                app: 'Google chrome'
            }
        },

        tags: {
    	    build: {
    	        options: {
    		        scriptTemplate: '<script src="{{ path }}"></script>',
    				linkTemplate: '<link href="{{ path }}"/>',
    	            openTag: '<!-- start template tags -->',
    	            closeTag: '<!-- end template tags -->'
    	        },
    	        src: [
    	            'src/scripts/**/*.js'
    	        ],
    	        dest: 'src/index.html'
    	    },
            buildLinks: {
    	        options: {
    				linkTemplate: '<link rel="stylesheet" type="text/css" href="{{ path }}" media="screen"/>',
    	            openTag: '<!-- start css template tags -->',
    	            closeTag: '<!-- end css template tags -->'
    	        },
    	        src: [
    	            'style/*.css'
    	        ],
    	        dest: 'src/index.html'
	       }
	   }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-script-link-tags');
    grunt.loadNpmTasks('grunt-express');
    grunt.loadNpmTasks('grunt-nodemon');
    grunt.loadNpmTasks('grunt-concurrent');
    grunt.loadNpmTasks('grunt-open');

    grunt.registerTask('test', ['jshint']);
    grunt.registerTask('link', ['tags']);

    grunt.registerTask('default', [
        'concurrent',
        'open',
        'express'
    ]);
}
