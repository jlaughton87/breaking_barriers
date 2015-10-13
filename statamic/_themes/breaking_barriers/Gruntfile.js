'use strict';

var
  LIVERELOAD_PORT = 35729,
  lrSnippet = require('connect-livereload')({ port: LIVERELOAD_PORT }),
  mountFolder = function( connect, dir ) {
    return connect.static(require('path').resolve(dir));
  };
module.exports = function(grunt) {

  // Project configuration.
grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    concat: {
      options: {
        separator: ';',
      },
      dist: {
        src: [
          'js/libs/jquery-1.11.0.min.js',
          'js/libs/bootstrap.min.js',
          'js/libs/requestAnimationFramePolyfill.min.js',
          'js/libs/jquery.placeholder.js',
          'js/libs/jquery.easing.1.3.js',
          'js/libs/jquery.scrollTo.min.js',
          'js/libs/jquery.colorbox-min.js',
          'js/app/pi.tooltip.js',
          'js/app/pi.init.tooltip.js',
          'js/app/pi.global.js'
        ],
        dest: 'js/<%= pkg.name %>.js',
      },
      home: {
        src: [
          'js/libs/jquery.themepunch.tools.min.js',
          'js/libs/jquery.themepunch.revolution.min.js',
          'js/app/pi.init.revolutionSlider.js',
          'js/app/pi.parallax.js',
          'js/app/pi.init.parallax.js'
        ],
        dest: 'js/home.js',
      },
      contact: {
        src: [
          'js/app/pi.googleMapStyles.js',
          'js/libs/jquery.gmap.min.js',
          'js/libs/jquery.colorbox-min.js',
          'js/app/pi.init.map.js',
          'js/app/pi.parallax.js',
          'js/app/pi.init.parallax.js'
        ],
        dest: 'js/contact.js',
      },
      services: {
        src: [
          'js/app/pi.parallax.js',
          'js/app/pi.init.parallax.js'
        ],
        dest: 'js/services.js',
      },
      about: {
        src: [
          'js/libs/jquery.touchSwipe.min.js',
          'js/app/pi.parallax.js',
          'js/app/pi.init.parallax.js',
          'js/app/pi.slider.js',
          'js/app/pi.init.slider.js'
          
        ],
        dest: 'js/about.js',
      }
    },
    uglify: {
      target: {
        options: {
          sourceMap: true
        },
        files: {
          // 'js/<%= pkg.name %>.js': ['js/app/<%= pkg.name %>.js']
        }
      }
    },
    sass: {
      dist: {
        options: {
          style: 'compressed'
        },
        files: {
          'css/<%= pkg.name %>.css': 'sass/<%= pkg.name %>.scss', // 'destination': 'source'
          'css/base.css': 'sass/base.scss',
          'css/vendor.css': 'sass/vendor/manifest.scss'
        }
      }
    },

    watch: {

      sass: {
        expand: true,
        files: ['sass/**/*.scss', '!sass/_base.scss', '!sass/vendor/*.scss'],
        tasks: ['sass'],
      },
      livereload: {
        files: ['css/breaking_barriers.css'],
        options: {
          livereload: true,
        }
      }
    },
    connect: {
      options: {
        port: 80,
        hostname: '0.0.0.0'
      },
      livereload: {
        options: {
          middleware: function( connect ) {
            return [
              lrSnippet,
              mountFolder(connect, './')
            ];
          }
        }
      }
    },
    open: {
      server: {
        url: 'http://localhost:<%= connect.options.port %>'
      }
    }

  });
  
  // Load the plugin that provides the tasks.
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  
  grunt.registerTask('server', function() {
    grunt.task.run([
      'connect:livereload',
      'open',
      'watch'
    ]);
  });
  // Default task(s).
  grunt.registerTask('default', ['concat','uglify','sass']);

};
