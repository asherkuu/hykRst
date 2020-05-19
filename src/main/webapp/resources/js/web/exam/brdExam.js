(function() { 
	
	"use strict";
	
	/*
	
		공통 변수 영역 : _class 함수 내에 사용되는 global 함수를 선언해주는 영역 
		(비동기 ajax를 이용하는 경우에만 사용가능)
		
		초기화 함수 영역 : 페이지 로드 후 script가 로딩되었을 때 초기에 실행 되어져야 하는 함수 사용 영역
		
		기능 함수 영역 : 각 화면에 대한 버튼 이벤트나 데이터 유효성검사와 같은 전반적인 기능을 정의해둔 영역
		
		페이지 호출 영역 : 비동기 방식(ajax)으로 화면 이동이 이루어져야 하는 부분을 정의해둔 영역
		
		데이터 호출 영역 : ajax를 이용한 데이터 호출 영역
	
	*/
	
	
	var _class = {
			
			
//////////////
//공통  변수  영역
//////////////
			
		// public 변수
		pub : {},
		
		// 데이터 통신에 필요햔 parameter 변수
		param : {},
			
//////////////
// 초기화 함수 영역
//////////////	
		
		// 스크립트 초기 실행 함수
		open : function(){
			/*
			 * this 는 현 js 내의 _class 객체를 의미한다.
			 * 현제 _class 는 함수가 아닌 객체이기 때문에
			 * 객채 안의 함수를 사용하기위해선 this 를 정의해주어야한다.
			 * 
			 * 객체가 아닌 함수였다면 단순히 initialize()로 사용가능하다.
			 * 
			 */
			this.initialize(); // 초기 세팅 함수
			
			var _this = this;
			_this.initBtnEvent(); // 버튼 이벤트 함수
		},
		
		
//////////////
// 기능  함수  영역
//////////////
		
		// 초기 세팅 함수
		initialize : function(){
			alert("This is place where we are gonna die.");
		},		
		
		// 버튼 이벤트 함수
		initBtnEvent : function(){
			
			$("#THE_HYK").click(function(){
				alert("do not touch me")
			});
			
		},
			
//////////////
// 페이지 호출 영역
//////////////

//////////////
// 데이터 호출 영역
//////////////

		
	};

	// extend
	app.exam = $.extend(app.exam || {}, {
		BrdExam : _class
	});
	/*
	 * 1). app.js 에서 window.app 으로 글로벌 객체 생성
	 * 글로벌 객체 생성이 없으면 타 JS에서 불러와서 사용불가능 
	 *  
	 *  
	 * 위의 extend 문은 
	 * 
	 * app.exam = {}
	 * $.extend(app.exam , {BrdExam : _class} ); 와 같음
	 * 
	 * $.extend 의 역할은 각 객체를 합쳐주는 역할로서 
	 * A안에 A와 중복되지 않은 B의 데이터를 합쳐준다.
	 * > A-(B-A) = $.extend
	 * 
	 * 다른 jsp, html 또는 jsp 에서 app.exam.BrdExam.(_class 내에 포함되어있는 함수명)
	 * 으로서 타 js의 함수를 호출해 올 수 있다.
	 * 
	 * 예 > jsp/web/main/index.jsp  727, 728 Line 참조
	 * 
	 */
})();


	