module.exports = function(grunt) {
	grunt.loadNpmTasks('grunt-sass'); //подключаем плагин
	require('load-grunt-tasks')(grunt); // npm install --save-dev load-grunt-tasks
	
	grunt.registerTask('default', ['sass']);
	
	grunt.initConfig({
		sass: {                              // Task 
			dist: {                            // Target 
				options: {                       // Target options 
					style: 'expanded'
				},
				files: {                         // Dictionary of files 
					'css/style.css': 'css/style.scss'      // 'destination': 'source' 
				}
    	}
  	}
	});
};