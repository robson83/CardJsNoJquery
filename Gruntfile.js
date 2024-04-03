module.exports = function(grunt) {
  grunt.initConfig({


    //
    // CSS Minify
    //
    cssmin: {
      options: {
        shorthandCompacting: false,
        roundingPrecision: -1
      },
      "css": {
        files: {
          "card-js.min.css": ["./src/css/**/*.css"]
        }
      }
    },


    //
    // JavaScript Minify
    //
    uglify: {
      options: {
        mangle: false
      },
      js: {
        files: {
          "card-js.min.js": [ "src/js/**/*.js" ]
        }
      }
    },


    //
    // Watch Configuration
    //
    watch: {
      "css": {
        files: [
          "./src/css/**/*.css"
        ],
        tasks: ["cssmin:css"],
        options: {
          livereload: true
        }
      },
      "js": {
        files: [
          './src/js/**/*.js'
        ],
        tasks: ["uglify:js"],
        options: {
          livereload: true
        }
      }
    },

    obfuscator: {
      options: {
          // global options for the obfuscator
      },
      task1: {
          options: {
              // options for each sub task
          },
          files: {
              'dest/': [ // the files and their directories will be created in this folder
                  'card-js.min.js',
              ]
          }
      }
  }

  });


  //
  // Plugin loading
  //
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-uglify-es');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-obfuscator');


  //
  // Task definition
  //
  grunt.registerTask('default', ['uglify:js','obfuscator']);
  grunt.registerTask('build', ['cssmin:css', 'uglify:js']);

};