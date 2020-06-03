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
				
				// common button event
				_self.initBtnEvent();
				
				// board k button event
				_self.initBtnEventBoardForK();
			},
			
//////////////
// 기능  함수  영역
//////////////			
			
			// common button event
			initBtnEvent : function() {
				var _self = this;
				
				// into the H button
				$("#btn_H").on("click", function(){
					alert("준비중입니다.");
				});
				
				// into the Y button
				$("#btn_Y").on("click", function(){
					alert("준비중입니다.");
				});
				
				// into the K button - load list_k.jsp
				$("#btn_K").on("click", function(){
					javascript:location.href="/sample/crud_k/list/";
				});
				
			},
			
			// board k button event
			initBtnEventBoardForK : function() {
				var _self = this;
				
				// list add button - load ins_k.jsp
				$("#btnAdd").on("click", function(){
					javascript:location.href="/sample/crud_k/ins/";
				});
				
				// ins submit button - regist board
				$("#btnSubmit").on("click", function(){
					_self.postCrud_KIns();
				});
				
				// ins cancel button - return back url
				$("#btnCancel").on("click", function(){
					
					var result = confirm("Data will be erase.");
					if(result) {
						javascript:history.back();
					} else {
						alert("Good choice.")
					}
					
				});
				
			},
			
//////////////
// 페이지 호출 영역
//////////////
			
			
//////////////
// 데이터 처리 영역
//////////////
		postCrud_KIns : function() {
			alert("Not Yet");
		},
			
			
	};
	
	_class.open();
	
}); 
