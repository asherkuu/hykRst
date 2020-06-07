//
// Version 1.0
// 18 May 2020
// 
// Auther : HYK
//
//

(function() {
	
	"use strict";	

	var _util = {
			
			/**
			 * Version : 1.0
			 * function: requestAjax
			 * Usage   : cmmn.util.Request.requestAjax(gParam);
			 * Description : Ajax 데이터 처리 함수
			 * Author  : HYK
			 * Comment : 각 controller 에서 단순 화면 요청만을 할때 사용되어지는 함수
			 * 			 [아직 미완성인 함수] 화면 연결은 잘 되나 
			 * 			 url 형식이 데이터 호출 url과 다르다는 점이 있어서 사용여부는 일단 보류인 상태
			 * 
			 * 			 일반적인 각 controller 호출 url > localhost:8080/wb/ksk/ex/ksk.do
			 * 			 공통함수 사용 url > localhost:8080/load?page=d2ViL2V4YW0va3Nr
			 */
		requestData : function(url, param, options) {
			
			var deferred = $.Deferred();
			
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
				dataType:"JSON",
			}).done(function(result){
				
				$('#content').children().remove();
				$('#content').html(result);
				
				deferred.resolve(result);
			}.bind(this)).fail(function(result){
				deferred.resolve(result);
			});
			
			return deferred.promise();
			
		}, // end of requestData
		
		/**
		 * Version : 1.0
		 * function: loadUrl
		 * Usage   : cmmn.util.Request.loadUrl(url);
		 * Description : jsp 페이지 호출 함수
		 * Author  : HYK
		 * Comment : 각 controller 에서 단순 화면 요청만을 할때 사용되어지는 함수
		 * 			 [아직 미완성인 함수] 화면 연결은 잘 되나 
		 * 			 url 형식이 데이터 호출 url과 다르다는 점이 있어서 사용여부는 일단 보류인 상태
		 * 
		 * 			 일반적인 각 controller 호출 url > localhost:8080/wb/ksk/ex/ksk.do
		 * 			 공통함수 사용 url > localhost:8080/load?page=d2ViL2V4YW0va3Nr
		 */
		loadUrl : function(url, param){
			var deferred = $.Deferred();
			
			// btoa 는 base64 형식의 문자열로 인코딩 해주는 스크립트 기본제공 함수이다.

			javascript:location.href = url+"?"+paramType+btoa(param);

			deferred.resolve();
			return deferred.promise();
		},		
		
		/**
		 * Version : 1.0
		 * function: initRegExpression
		 * Description : 정규표현식 함수
		 * Usage   : cmmn.util.Request.initRegExpression(gParam);
		 * Author  : HYK
		 * Comment : 폼태그내에서 입력된 공통된값을 gParam 으로 넘겨받아서
		 * 				   각 input 태그에 입력된 값들이 정규표현식(Regular Expression) 에 적합한지
		 * 				   테스트를 한후 그에 맞게 에러메시지를 출력한다.
		 * 				   Usage 에서 사용할때 gParam 에 form.serialize(); 한 데이터를 gParam에 담아서 넘겨주고
		 * 				   input 태그의 id 값은 아래 함수에 정의되어져있는 id 값을 사용해야 공통으로 사용할 수 있다.
		 */
		initRegExpression : function() {
			
		
		}, 
		
	} // end of _util

	// js extend
	cmmn.util = $.extend(cmmn.util || {}, {
		Request : _util
	});

})();
