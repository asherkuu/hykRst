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

				// 버튼 이벤트 
				_self.initBtnEvent();
			},
			
//////////////
// 기능  함수  영역
//////////////			
			
			// 버튼 이벤트 
			initBtnEvent : function() {
				var _self = this;
				
				// 등록
				$("#btnAdd").on("click", function(){
					javascript:location.href="/sample/crud_k/ins/";
				});
				
				// 
				$("#btnSubmit").on("click", function(){

					// 유효성 검사
					if(!_self.valid_isNull()) return false;
					
					// 등록 이벤트
					_self.postCrud_kIns(_self.gParam);
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
			
			// 유효성 검사 - 폼데이터 Null 값 체크
			valid_isNull : function() {
				var _self = this;
				
				// 작성자
				if($("#HYK_REG_USR").val().trim() == "" || $("#HYK_REG_USR").val().trim().length == 0) {
					alert("작성자를 입력하세요.");
					return false;
				}
				
				// 제목
				if($("#HYK_TITLE").val().trim() == "" || $("#HYK_TITLE").val().trim().length == 0) {
					alert("제목을 입력하세요.");
					return false;
				}
				
				// 내용
				if($("#HYK_CONTENT").val() == "" || $("#HYK_CONTENT").val().length == 0) {
					alert("제목을 입력하세요.");
					return false;
				}
				
				// 비밀번호
				if($("#HYK_BRD_PWD").val() == "" || $("#HYK_BRD_PWD").val().length == 0) {
					alert("비밀번호를 입력하세요.");
					return false;
				}

				/*
				 * 유효성검사가 잘 진행된 후 글로벌 파라미터 변수에 form 데이터를 초기화시킨다.
				 * 
				 * serialize() 는 jquery 에서 제공하는 form 데이터를 url 의  get 타입의 파라미터 형식으로 불러오는 메소이다.  
				 * serialize() 형식
				 * >> HYK_REG_USR=NameParameter&HYK_TITLE=TitleParameter&HYK_CONTENT=ContentParameter
				 */
				
				_self.gParam = $("form[name=frm_crud_k]").serialize();
				
				return true;
			},
//////////////
// 페이지 호출 영역
//////////////
			
			
//////////////
// 데이터 처리 영역
//////////////
			
			// 등록	
			postCrud_kIns : function(param) { 
				
				$.ajax({
					url  : "/sample/crud_k/ins.do/",
					data : param,
					type : "POST",
					dataType : "json",
					success : function(result){
						if(result.SUCCESS) {
							alert("등록되었습니다.");
							javascript:location.href="/sample/crud_k/list/";
						} else {
							alert("등록에 실패하였습니다.");
							return false;
						}
					},
					error : function(request, status, error){
						alert("code: "+request.status+"\n"+"message: "+request.responseText+"\n"+"error: "+error);
					}
				})
			},
			
			
	};
	
	_class.open();
	
}); 
