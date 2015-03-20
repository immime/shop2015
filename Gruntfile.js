module.exports = function(grunt){

	require("time-grunt")(grunt);
	require("load-grunt-tasks")(grunt);

	grunt.initConfig({

		sass:{
			cssfile:{
				options:{
					style:"expanded"
				},
				files:[{
					expand:true,
					cwd:"scss/",
					src:"**/*.scss",
					dest:"css/",
					ext:".css"
				}]
			}
		},
		/*coffee:{
			coffeescript:{
				files:[
					{
						expand:true,
						cwd:"js/",
						src:"*.coffee",
						dest:"js/",
						ext:".js"
					}
				]
			}
		},*/
		/**清理文件**/
		clean:{
			test:{
				files:{
					src:"css/"
				}
			}
		},
		watch:{
			options:{
				livereload:true
			},
			cssfile:{
				files:["scss/**/*.scss","*.html"],
				tasks:["sass"]
			}
		},

		express:{
			all:{
				options:{
					port:3000,
					hostname:'localhost',
					bases:['.'],
					livereload:true,
				}
			}
		}
	});



	grunt.registerTask('server', [
		'express',
	    'watch'
	]);

}
