$(function() {	
	
	"use strict";
	
	var _class = {
			
//////////////
// 글로벌 변수 영역
//////////////			
			
			// jsp 경로
			gJspPath : {
				
			},
			
			// 글로벌 프로퍼티
			gProp : {

			},
			
			// 글로벌 파라미터
			gParam : {
				
			},	
			
//////////////
//초기 호출 함수 영역
//////////////			

			// 초기 호출 함수
			open : function() {
				var _self = this;
				
				// 샘플 페이지 버튼 이벤트
				_self.initBtnEvent();
				
			},
			
//////////////
// 기능  함수  영역
//////////////			
			
			// 샘플 페이지 버튼 이벤트
			initBtnEvent : function() {
				var _self = this;
				
				// into the H 
				$("#btn_H").on("click", function(){
					alert("준비중입니다.");
				});
				
				// into the Y 
				$("#btn_Y").on("click", function(){
					alert("준비중입니다.");
				});
				
				// into the K button
				$("#btn_K").on("click", function(){
					javascript:location.href="/sample/crud_k/list/";
				});
				
			},

			
//////////////
// 페이지 호출 영역
//////////////
			
			
//////////////
// 데이터 처리 영역
//////////////

	
	};
	
	_class.open();
	
}); 
