$(function() {	
	
	"use strict";
	
	var _class = {
			
//////////////
// 글로벌 변수 영역
//////////////			
			
			// 글로벌 변수
			g_var : {
			
			},
			
			// 글로벌 상수
			g_const : {
				
			},
			
			// 글로벌 파라미터
			g_param : {
				
			},			
			
//////////////
//초기 호출 함수 영역
//////////////			
			
			// 초기 호출 함수
			open : function(){
				var _self = this;
				
				_self.loadLocation();
				_self.initBtnEvent();
			},
			
			
//////////////
// 기능  함수  영역
//////////////			
			
			// 페이지 오픈 함수
			loadLocation : function() {
				cmmn.util.Request.loadUrl("web/rsv/stl/list").done(function(){
					
				});
			},
			
			// 버튼 이벤트 함수
			initBtnEvent :function() {
        		
			},
			
//////////////
// 페이지 호출 영역
//////////////
			
			
//////////////
// 데이터 호출 영역
//////////////
			
	};
	
	app.rsv = $.extend(app.rsv || {}, {
		stl : _class
	})
	
}); 
