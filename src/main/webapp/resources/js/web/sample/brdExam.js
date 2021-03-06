(function() { 

	 /* 
	 * 현 스크립트에 쓰여진 
	 * (function() {}); 함수의 정의
	 * 
	 * 현재 (function() {});의 정의는 익명 함수, 기명함수 또는 무명함수(함수이긴하나 이름의 정의가 없는 함수를 의미)를 의미하며,  
	 * 일반적인 보통 함수는 function name(){}; 또는 var name = function(){}; 이라는 구조를 가진다.
	 * 하지만 function() 으로서 name 이 없이 익명의 함수 기능을 하며 즉시 실행을 해야할때 사용을 한다.
	 * 
	 * 즉 현제 스크립트 경우 스크립트문 전체가 익명의 함수로 사용이 되고 있으며 스크립트가 load 되었을때 바로 실행이 될 수
	 * 있다는 특징을 가지고 있다.
	 * 
	 * 현재와 같이 익명함수를 사용한 이유는 스크립트를 실행할때 직접 실행함으로서 함수를 따로 정의하고 실행되는 다중의 과정을
	 * 거치지 않기 위해서 사용한다. 또한 익명함수(기명함수)를 사용한다면 각 js 내에 구속되는 즉 전역함수가 아닌 해당
	 * js 에만 종속되는 함수로 사용하기 위해서이다. 전역함수가 아닌 종속함수로 만들게 되면 타 js 에서 
	 * 서로 같은 태그의 id 값이나 class명을 사용하더라도 겹치지 않게 되는 장점을 가진다. 때문에 코드 충돌이없어
	 * 플러그인이나 라이브러리(jquery.js 등)등을 만들 때 주로 사용이된다.
	 */
	
	
	"use strict";
	/*
	 * use strict 는 엄격모드를 의미하며 해당 문구는 ES5 버전 이후 부터 적용되는 키워드로서
	 * 안전한 코딩을 위한 하나의 가이드라인을 의미한다.
	 * 
	 * 해당 코드는 좀더 나은 오류 검사를 위해 사용되어지며.
	 * 흔히 발생하는 코딩 실수를 잡아내서 예외(에러)를 발생시켜준다.
	 * 때문에 어느곳에서 에러가 나는지 쉽게 찾을 수 있다는 장점을 가진다.
	 * 또한 안전하지 않은 문장에 대한 액션이 발생하는것을 방지해주고 정확하게 정의되거나 고려되지 않은 기능들을
	 * 비활성화 시켜서 충돌이 나지 않도록 해준다.
	 * 
	 * ES6 버전은 자동으로 use strict 기능을 지원하기 때문에 수기로 작성하지 않아도된다.
	 * 
	 * 하지만 크롬, 사파리, 웨일, 파이어폭스, 익스플로러 등과 같은 서로 각기 다른 브라우저에서
	 * 각각 지원하는 ES 버전이 다르기 때문에 상황에 따라서 use strict를 기재해주거나
	 * 해당 브라우저가 지원하는 버전에 따라서 코딩을 해야한다.
	 * 
	 */
	
	
	
	/*
	
		공통 변수 영역 : _class 함수 내에 사용되는 global 함수를 선언해주는 영역 
		(비동기 ajax를 이용하는 경우에만 사용가능)
		
		초기화 함수 영역 : 페이지 로드 후 script가 로딩되었을 때 초기에 실행 되어져야 하는 함수 사용 영역
		
		기능 함수 영역 : 각 화면에 대한 버튼 이벤트나 데이터 유효성검사와 같은 전반적인 기능을 정의해둔 영역
		
		페이지 호출 영역 : 비동기 방식(ajax)으로 화면 이동이 이루어져야 하는 부분을 정의해둔 영역
		
		데이터 호출 영역 : ajax를 이용한 데이터 호출 영역
	
	*/
	
	
	var _class = {
			
			/*
			 * 함수 대신 객체로써 정의를 해준이유는 
			 * 사실 정확히는 모르겠고
			 * 객체 방식이 객체.key값 으로 불러오듯이
			 * 해당함수를 타 js 에서 활용을 하고자할때 정의해놓은 객체key값.함수명
			 * 이렇게 사용하고 하기위해서 var _class = function() 대신 사용한것으로 확인된다.
			 * 
			 * var _class = function() 이렇게 사용해서 타 js 에서 사용해본적은 없어서 잘 모르겠다.
			 * 
			 */
			
			
//////////////
//공통  변수  영역
//////////////
			
		// public 변수
		pub : {},
		
		// 데이터 통신에 필요햔 parameter 변수
		param : {},
			
		/*
		 * 위의 변수같은 경우는 하위의 함수 최상단에 위치하고 있는 변수이기 때문에 
		 * 각각의 함수에서 부모처럼 전체적으로 사용할 수 있다.
		 */
		
//////////////
// 초기화 함수 영역
//////////////	
		
		// 스크립트 초기 실행 함수
		open : function(){
			/*
			 * this 는 현 js 내의 _class "객체"를 의미한다.
			 * 현제 _class 는 함수가 아닌 객체이기 때문에
			 * 객채 안의 함수를 사용하기위해선 this 를 정의해주어야한다.
			 * 
			 * _class 가 객체가 아닌 함수였다면 단순히 initialize()로 사용가능하다.
			 * 
			 */
			this.initialize(); // 초기 세팅 함수
			
			var _this = this; // this를 또다른 변수명으로 정의하여 사용이 가능하다.
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
			var _this = this;
			$("#THE_HYK").click(function(){
				alert("hel");
				_this.getData();
			});
			
		},
		
		getData : function(){
			var _this = this;
			var param = { "axid" : "hel"};
			_this.getList(param);
		},
			
//////////////
// 페이지 호출 영역
//////////////

//////////////
// 데이터 호출 영역
//////////////
		
		// 현재 DB 에 존재하는 임시 데이터 조회하기
		getBrdExamList : function() {
			var _this = this;
			alert(cmmn.util.Request.requestData("/wb/br/ex/gLt.do",{},"json"));
		},
		
		getList : function(param) {
//			$.ajax({
//				url : "/wb/br/ex/gLt.do",
//				data:param,
//				type : "POST",
//			}).done(function(list){
//				alert("SUCCESS" + list.result);				
//				return result;
//				
//			}.bind(this)).fail(function(result){
//				alert("FAILE" + result);
//				return result;
//				
//			});
			
			$.ajax({
				url : "/wb/br/ex/gLt.do",
				data:param,
				type : "POST",
				success:function(result){
					/*
					$.each(result, function(i, val){
						alert(val);
					})
					*/
				},
				error: function(request, status, error){
	                alert("code: "+request.status+"\n"+"message: "+request.responseText+"\n"+"error: "+error);
	            }
			});	
		},
	};

	// extend
	app.exam = $.extend(app.exam || {}, {
		BrdExam : _class
	});
	
	/*
	 * 우선 app.js 에서 window.app 으로 글로벌 객체 생성
	 * 글로벌 객체 생성이 없으면 타 JS에서 불러와서 사용불가능 
	 *  
	 *  
	 * 위의 $.extend 문의 $.extend(app.exam || {}, {BrdExam : _class}는 
	 * 
	 * var app.exam = {}
	 * $.extend(app.exam , {BrdExam : _class} ); 와 같음
	 * 
	 * app.exam || {} 이것의 뜻 역시 var app.exam = {} 이것을 의미한다. 
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
	 * 
	 * 객체 사용법 2가지
	 * 
	 * var object = {"key1" : value1, "key2" : value2};
	 * var json   = {"key1" : value1, "key2" : value2};
	 * # 객체(오브젝트) 타입과 json 타입은 서로 동인한 구조를 이루고 있다.
	 * 둘의 공통점은 key 와 value 로 이루어져있다는 점이고 key를 호출하였을때 value 값을 반환한다는 점을 가지고있다.
	 * ex) object.key1 = value1;
	 * ex_ json.key1 = value1; 을 의미한다.
	 * 
	 */
	
	
})();


	