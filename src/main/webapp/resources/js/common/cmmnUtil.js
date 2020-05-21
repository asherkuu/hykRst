//
// Version 1.0
// 18 May 2020
// 
// Auther : HYK
//
// Usage: requestData( message, [title, callback] )


(function() {
	
	"use strict";	

	var _util = {
			
		/*
		 	공통 ajax 비동기 통신 함수
		  
			url = request url
			param = json data
			option = global option setting parameter
		*/
	
		// ajax 데이터 통신
		requestData : function(url, param, options) {
			
			if(param == "") {
				param = {};
			}
			
			if(options == "" ) { 
				options = {};
			} 
			
			$.ajax({
				url  : url,
				data : param,
				type : "POST",
			}).done(function(result){
				alert("SUCCESS" + result);				
				return result;
				
			}.bind(this)).fail(function(result){
				alert("FAILE" + result.result);
				return result;
				
			});
		}, // end of requestData
			
		// 테스트
		helloWorld : function(){
			alert("helloWorld Welcome!");
		}, 
			
		
	} // end of _util

	// js extend
	cmmn.util = $.extend(cmmn.util || {}, {
		Request : _util
	});

})();