//
// Version 1.0
//
// 18 May 2020
//
//
// Usage:
// 

(function() {
	"use strict";
	
	var jsPath = getScriptLocation("js-loader.js");
	var files;
	
	var protocol 	= location.protocol; // http
	var hostName 	= location.hostname; // localhost
	var port 		= location.port;	 // 8080
	
	// http//localhost:8080/
	var urlPath = protocol + "//" + hostName + ":" + port + "/"; 
	
	
	// css include
	files = AppLibFiles.CSS;
	for(var key in files) {
		var srcs = files[key];
		for(var idx = 0; idx < srcs.length; idx++) {
			document.write("<link rel='stylesheet' type='text/css' href='" + urlPath + srcs[idx] + "'>");
		}
	}
	
	// js include
	files = AppLibFiles.JS;
	for(var key in files) {
		var srcs = files[key];
		for(var idx = 0; idx < srcs.length; idx++) {
			document.write("<script src='" + urlPath + srcs[idx] + "'></script>");
		}
	} 	
	
	function getScriptLocation(scriptName){
		var regExp = new RegExp("(^|(.*?\\/))("+ scriptName + ")(\\?|$)");
		var scripts = document.getElementsByTagName("script");
		for(var i = 0; i < scripts.length; i++){
			var src = scripts[i].getAttribute("src");
			if(src) {
				var match = src.match(regExp);
				if(match) {
					return match[1];
				}
			}
		}
		return null;	
	}
	
})();
