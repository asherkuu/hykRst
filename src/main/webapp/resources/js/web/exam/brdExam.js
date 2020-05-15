$(function () { 
	
	"use strict";
	
	/*
	
		공통 변수 영역 : _class 함수 내에 사용되는 global 함수를 선언해주는 영역 
		(비동기 ajax를 이용하는 경우에만 사용가능)
		
		초기화 함수 영역 : 페이지 로드 후 script가 로딩되었을 때 초기에 실행 되어져야 하는 함수 사용 영역
		
		기능 함수 영역 : 각 화면에 대한 버튼 이벤트나 데이터 유효성검사와 같은 전반적인 기능을 정의해둔 영역
		
		페이지 호출 영역 : 비동기 방식(ajax)으로 화면 이동이 이루어져야 하는 부분을 정의해둔 영역
		
		데이터 호출 영역 : ajax를 이용한 데이터 호출 영역
	
	*/
	
	var _class = function(){
	
//////////////
//공통  변수  영역
//////////////


		// public 변수
		var pub = {};
		
		// 데이터 세팅을 위한 parameter 변수
		var param = {};
			
		
//////////////
// 초기화 함수 영역
//////////////
	
		btn_event();
		
//////////////
// 기능  함수  영역
//////////////
		
		function btn_event(){
			
			$("#THE_HYK").click(function(){
			//	
				abc();
			});
			
		}

		
//////////////
// 페이지 호출 영역
//////////////		

		function abc() {
			
			javascript:location.href = "/wb/br/ex/lt.do";
		
			getBrdExamList();
		}
		
//////////////
// 데이터 호출 영역
//////////////

		// 예제 게시판 조회 
		function getBrdExamList() {
			alert("saef");

			$.ajax({
				url:"/wb/br/ex/gLt.do",
				success:function(result){
					alert(result);
				},
				error: function(request, status, error){
					alert("code: "+request.status+"\n"+"message: "+request.responseText+"\n"+"error: "+error);					
				}
			});			
		}; // getBrdExamList()
		
	};
	
	// 함수 사용을 위한 선언
	_class(); 
});
	