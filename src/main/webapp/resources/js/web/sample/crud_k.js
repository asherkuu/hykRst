$(function() {	
	
	"use strict";
	
	var _class = {
			
////////////////
// 글로벌 변수 영역
////////////////			
			
			// jsp 경로
			gJspPath : {

			},
			
			// 글로벌 프로퍼티
			gProp : {

			},
			
			// 글로벌 파라미터
			gParam : {
				
			},
			
////////////////
//초기 호출 함수 영역
////////////////			

			// 초기 호출 함수
			open : function() {
				var _self = this;

				// 버튼 이벤트 
				_self.initBtnList();
				_self.initBtnInsert();
				_self.initBtnDetail();
				_self.initBtnUpdate();
			},
			
////////////////
// 기능  함수  영역
////////////////		
			
			// 목록화면 버튼 이벤트 
			initBtnList : function() {
				var _self = this;
				
				// 등록 화면
				$("#btnAdd_list").on("click", function(){
					javascript:location.href="/sample/crud_k/ins/";
				});
				
				// 상세 보기
				$(".table-row.content").on("click", function(){
					var contentNumber = this.firstElementChild.textContent;
					javascript:location.href="/sample/crud_k/dtl/?cn="+contentNumber; 
				});
			},
			
			// 등록화면 버튼 이벤트
			initBtnInsert : function() {
				var _self = this;
				
				// 등록 이벤트
				$("#btnSubmit_ins").on("click", function(){

					// 유효성 검사
					if(!_self.valid_isNull()) return false;
					
					// 등록 이벤트
					_self.insert_Crud_k(_self.gParam);
				});
				
				// 등록 취소
				$("#btnCancel_ins").on("click", function(){
					
					var result = confirm("Data will be erase.");
					
					if(result) {
						javascript:history.back();
					}
				});
				
			},
			
			// 상세화면 버튼 이벤트
			initBtnDetail : function() {
				var _self = this;
				
				// 수정 이벤트
				$("#btnUpdate_dtl").on("click", function(){
					var contentNumber = $("#HYK_SEQ").val();
					javascript:location.href="/sample/crud_k/updt/?cn="+contentNumber;
				});
				
				// 등록 취소
				$("#btnList_dtl").on("click", function(){
					javascript:location.href="/sample/crud_k/list/";
				});
				
				// 삭제 이벤트
				$("#btnDelete_dtl").on("click", function(){
					
					var result = confirm("삭제하시겠습니까?");
					
					if(result){
						
						var contentNumber = $("#HYK_SEQ").val();
						_self.gParam.HYK_SEQ = contentNumber;
						_self.delete_Crud_k(_self.gParam);
					} else {
						
						alert("취소하였습니다.");
					}
				});
				
			},
			
			// 수정화면 버튼 이벤트
			initBtnUpdate : function() {
				var _self = this;
				
				// 수정 이벤트
				$("#btnSubmit_updt").on("click", function(){
					
					// 유효성 검사
					if(!_self.valid_isNull()) return false;
					
					// 수정 이벤트
					_self.update_Crud_k(_self.gParam);
				});
				
				// 등록 취소
				$("#btnCancel_updt").on("click", function(){
					
					var result = confirm("Data will be erase.");
					if(result) {
						var contentNumber = $("#HYK_SEQ").val();
						javascript:location.href="/sample/crud_k/dtl/?cn="+contentNumber;
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
				if($("#HYK_BRD_PWD").val().trim() == "" || $("#HYK_BRD_PWD").val().trim().length == 0) {
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
			
////////////////
// 비동기 페이지 호출 영역
////////////////			
			
////////////////
// 비동기 데이터 처리 영역
////////////////
			
			// 등록	
			insert_Crud_k : function(param) { 
				
				$.ajax({
					url  : "/sample/crud_k/insert_Crud_k.do/",
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
				});
			},
			
			// 수정	
			update_Crud_k : function(param) { 
				
				$.ajax({
					url  : "/sample/crud_k/update_Crud_k.do/",
					data : param,
					type : "POST",
					dataType : "json",
					success : function(result){
						if(result.SUCCESS) {
							alert("수정되었습니다.");
							
							var contentNumber = $("#HYK_SEQ").val();
							javascript:location.href="/sample/crud_k/dtl/?cn="+contentNumber;
						} else {
							alert("수정에 실패하였습니다.");
							return false;
						}
					},
					error : function(request, status, error){
						alert("code: "+request.status+"\n"+"message: "+request.responseText+"\n"+"error: "+error);
					}
				});
			},
			
			// 삭제	
			delete_Crud_k : function(param) { 
				
				$.ajax({
					url  : "/sample/crud_k/delete_Crud_k.do/",
					data : param,
					type : "POST",
					dataType : "json",
					success : function(result){
						if(result.SUCCESS) {
							alert("삭제되었습니다.");
							javascript:location.href="/sample/crud_k/list/";
						} else {
							alert("삭제에 실패하였습니다.");
							return false;
						}
					},
					error : function(request, status, error){
						alert("code: "+request.status+"\n"+"message: "+request.responseText+"\n"+"error: "+error);
					}
				});
			},
			
	};
	
	_class.open();
	
}); 
