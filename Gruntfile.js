module.exports = function(grunt){
    
    // Project configuration
    grunt.initConfig({
        // pkg: grunt.file.readJSON('package.json'),
        // uglify: {
        //    options: {
        //        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
        //    },
        //    build: {
        //        src: 'src/<%= pkg.name %>.js',
        //        dest: 'build/<%= pkg.name %>.min.js'
        //    }
        //}
        watch:{
            files: ['<%= jshint.files %>'],
            tasks: ['jshint', 'qunit']
        },
    });

    // Load the plugin that provides the "uglify" task.
    // grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task(s)
    // grunt.registerTask('default', ['uglify']);
    grunt.registerTask('default', 'Log some stuff', function(){
        grunt.log.write('Logging some stuff').ok();
    });
};
