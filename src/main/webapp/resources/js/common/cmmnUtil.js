//
// Version 1.0
// 18 May 2020
// 
// Auther : HYK
//
// Usage: requestData( url, param, options )


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
		
		/**
		 * Version : 1.0
		 * function: loadUrl
		 * Usage   : cmmn.util.Request.loadUrl(url);
		 * Author  : HYK
		 * Comment : 각 controller 에서 단순 화면 요청만을 할때 사용되어지는 함수
		 * 			 [아직 미완성인 함수] 화면 연결은 잘 되나 
		 * 			 url 형식이 데이터 호출 url과 다르다는 점이 있어서 사용여부는 일단 보류인 상태
		 * 
		 * 			 일반적인 각 controller 호출 url > localhost:8080/wb/ksk/ex/ksk.do
		 * 			 공통함수 사용 url > localhost:8080/load?page=d2ViL2V4YW0va3Nr
		 */
		loadUrl : function(url){
			
			// btoa 는 base64 형식의 문자열로 인코딩 해주는 스크립트 기본제공 함수이다.
			var path = "load?page="+btoa(url);
			location.href = path;			
		},

		helloWorld : function(){
			alert("helloWorld Welcome!");
		}, 
			
		
	} // end of _util

	// js extend
	cmmn.util = $.extend(cmmn.util || {}, {
		Request : _util
	});

})();
