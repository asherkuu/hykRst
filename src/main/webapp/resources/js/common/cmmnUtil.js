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
		j
	
		// ajax 데이터 통신
		requestData = function(url, param, option) {
			
			option.type = "json";
			option.contentType = "";
			
			$.ajax({
				url : url,
				type : option.type,
				data : param,
				dataType : option.dataType,
				contentType : ajaxOption.contentType,
			}).done(function(result){
				return result;
			}.bind(this)).fail(function(result){
				return error;
			});return result;
		}, // end of requestData
		
		*/
			
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