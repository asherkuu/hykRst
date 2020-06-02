$(function() {	
	
	"use strict";
	
	var _class = {
			
//////////////
// 글로벌 변수 영역
//////////////			
			
			// jsp 경로
			gJspPath : {
				outline 	: "crud_k/outline_k-w",
				list 		: "crud_k/list_k-w",
				dtl			: "crud_k/dtl_k-w",
				edit 		: "crud_k/edit_k-w",
			},
			
			// 글로벌 프로퍼티
			gProp : {
				url : "",
				urlType : "sample",
			},
			
			// 글로벌 파라미터
			param : {
				
			},	
			
//////////////
//초기 호출 함수 영역
//////////////			

			// 초기 호출 함수
			open : function() {
				var _self = this;
				
				_self.initBtnEvent();
			},
			
//////////////
// 기능  함수  영역
//////////////			
			
			
			
			// 버튼 이벤트 함수
			initBtnEvent : function() {
				var _self = this;
				
				$("#btn_H").on("click", function(){
					alert("준비중입니다.");
				});
				
				$("#btn_Y").on("click", function(){
					alert("준비중입니다.");
				});
				
				$("#btn_K").on("click", function(){
					_self.loadCrud_kList();
				});
			},
			
			
			
//////////////
// 페이지 호출 영역
//////////////
			
			// crud_k 목록 조회
			loadCrud_kList : function() {
				location.href="/sample/crud_k/list/";
			},
			
//////////////
// 데이터 호출 영역
//////////////
			
			
			
	};
	
	_class.open();
}); 
