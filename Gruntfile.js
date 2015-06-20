module.exports = function (grunt) {
    grunt.initConfig({

        browserSync: {
          bsFiles: {
            src: ['css/*.css', '*.php', '*.html']
          },
          options: {
              watchTask: true, // < VERY important
              server: {
                baseDir: './'   
              }
//              startPath: "/mcguigan/",
//              browser: "safari"
          }
        },

        // watch changes to less files
        watch: {
              sass: {
                files: "scss/*.scss",
                tasks: "sass"
              },
//            prefixes: {
//                files: ["scss/**/*"],
//                tasks: ["autoprefixer"]
//            }
        },

        sass: {
          dev: {
            files: [{
              expand: true,
              cwd: 'scss',
              src: 'styles.scss',
              dest: 'css',
              ext: '.css'
            }]
          }
        },

        // Note: for grunt-cssmin options, check out clean-css options https://github.com/jakubpawlowicz/clean-css#how-to-use-clean-css-programmatically

        cssmin: {
          target: {
            options:{
              keepSpecialComments: 0,
              // relativeTo: './',
              // root: './'
              // noAdvanced: true
            },
            files: {
              'css/site.min.css': ['css/site.css']
            }
          }
        },

        autoprefixer: {
            single_file: {
              options: {
                // Target-specific options go here.
              },
              src: 'css/*.css'
            },
        },

    });

    // Load tasks so we can use them
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-sass");
    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.loadNpmTasks("grunt-autoprefixer");


    grunt.registerTask("default", ["browserSync", "watch"]);
};
