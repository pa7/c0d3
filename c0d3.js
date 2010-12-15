/*
 * c0d3.js - Encode and decode with JS (and HTMLCanvas)
 * 
 * Author: Patrick Wied ( http://www.patrick-wied.at )
 * Version: 0.1
 * License: MIT License
 */
(function(){
	
	var c0d3 = (function(){
		var modules = {},
		canvas = null,
		ctx = null,
		debug_mode = (true && !!window.console),
		// private functions
		initCanvas = function(){
			canvas = document.createElement("canvas");
			// the canvas should not be visible
			canvas.style.display = "none";
			var b = document.getElementsByTagName("body")[0];
			b.appendChild(canvas);
			ctx = canvas.getContext("2d");
		},
		console = {
			log: function(message){
				if(debug_mode)
					window.console.log(message);
			},
			verify: function(expected, value){
				if(debug_mode){
					window.console.log("Expected: '"+expected+"'. Actual value '"+value+"'.");
					
					if(expected == value)
						window.console.log("Expected value equals the actual value")
				
				}
			}
		};
		
		return {
			init: function(){
				if(!!(window.document.createElement('canvas').getContext)){
					initCanvas();
					console.log("Core: Canvas appended");
				}else{
					console.log("Core: Canvas not appended");
				}
			},
			encode: function(content, to){
				if(modules["encode-"+to]){
					var cfg = {
						console: console,
						input: content
					};

					if(modules["encode-"+to]["useCanvas"]){
						cfg.context = ctx;
						cfg.canvas = canvas;
					}
										
					return modules["encode-"+to]["logic"](cfg);
				}else
					console.log("Core: Module 'encode-"+to+"' not registered");
				
				// return the encoded input
				return;
			},
			decode: function(content, from){
				if(modules["decode-"+from]){
					var cfg = {
						console: console,
						input: conf.input
					};
					
					if(modules["encode-"+to]["useCanvas"]){
						cfg.context = ctx;
						cfg.canvas = canvas;
					}
					
					modules["decode-"+from](cfg);
				}else
					console.log("Core: Module 'decode-"+from+"' not registered");
				
				// return the decoded input
				return;
			},
			loadModule: function(module){
				this.loadModules([module]);
			},
			loadModules: function(modulez){
				var length = modulez.length,
				b = document.getElementsByTagName("body")[0];
								
				while(length--){
					var script = document.createElement('script');
					script.type = 'text/javascript';
					script.src = modulez[length]+'.js';
					b.appendChild(script);
					console.log("Core: Loaded '"+ modulez[length]+".js'");
				}
			},
			registerModule: function(moduleId, module){
				modules[moduleId] = module;				
				console.log("Core: Module '"+moduleId+"' registered");
			}
		}
	})();
	
	if(!window.c0d3)
		window.c0d3 = c0d3;
	
	c0d3.init();
	c0d3.loadModule("encode/htmlentities");
	
})();