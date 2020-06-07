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
				
				
				/*
				
				 사용자 ID는 첫 글자는 대문자로 시작해야 하며 두 번째 부터 끝까지는 영문자 또는 숫자로만 이루어져야 한다.
	 			그리고 총 글자수는 5글자 이상 10글자 이하이어야 한다.
				var regExp = /^[A-Z][A-Za-z0-9]{4,9}$/;
				 
				 암호는 8글자 이상 15글자 이하의 영문자, 숫자, 특수기호가 혼합된 것이어야 한다.
				 var regExp = /^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9]).*$/g;
				
				email을 검사하는 정규표현식 객체 생성하기
				var regExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
				
				전화번호를 검사하는 정규표현식 객체 생성하기
				var regExp = /^0[1-9][0-9]{0,1}[1-9][0-9]{2,3}[0-9]{4}$/;
				
				생일
				var regExp = /^[12][0-9]{3}$/;
				
				주민번호
				var regExp = /^[0-9]{6}[1-4][0-9]{6}$/;
				
				
				ajax 통신을 하기인전에 알아두어야할 가장 기본적인 컨트롤러에 폼데이터를 보내주는 방법
				
				var frm = document.registerFrm;
				frm.action = "register.do";
				frm.method = "post";
				frm.submit();
				
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
				
				cmmn.util.Request.requestAjax("/sample/crud_k/insert_Crud_k.do/", param).done(function(result){
					
					if(result.SUCCESS) {
						alert("등록되었습니다.");
						javascript:location.href="/sample/crud_k/list/";
					} else {
						alert("등록에 실패하였습니다.");
						return false;
					}
				});
				
				/*
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
				*/
				
			},
			
			// 수정	
			update_Crud_k : function(param) { 
				
				cmmn.util.Request.requestAjax("/sample/crud_k/update_Crud_k.do/", param).done(function(result){
					
					if(result.SUCCESS) {
						alert("수정되었습니다.");
						
						var contentNumber = $("#HYK_SEQ").val();
						javascript:location.href="/sample/crud_k/dtl/?cn="+contentNumber;
					} else {
						alert("수정에 실패하였습니다.");
						return false;
					}
				});
				
				/*
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
				*/
				
			},
			
			// 삭제	
			delete_Crud_k : function(param) { 
				
				cmmn.util.Request.requestAjax("/sample/crud_k/delete_Crud_k.do/", param).done(function(result){
					
					if(result.SUCCESS) {
						alert("삭제되었습니다.");
						javascript:location.href="/sample/crud_k/list/";
					} else {
						alert("삭제에 실패하였습니다.");
						return false;
					}
				});
				
				/*
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
				*/
			},
			
			
	};
	
	_class.open();
	
}); 


/*	그냥 참조용임
 * 
 * 
// ajax 파일업로드 예시
var fromData = new Formdata($("#file-form")[0]);

$.ajax({
	type : "POST",
	enctype: 'multipart/form-data',
	url : "url/url.do",
	data : formData,
	processData : false,
	contentType : false,
	success : function(data){
		
	}, error : function(){
		
	}
});

파일 다운로드
var xhr = new HMLHttpRequest();
xhr.open("POST", "url/url.do", true);
xhr.responseType = "blob";
xhr.onload = function(e){
	var blob = xhr.response;
	var link = document.createElemente('a');
	link.href = window.URL.createObjectURL(blob);
	link.download = "fileName";
	link.click();
},bind(this)
xhr.send(JSON.stringify(param));
*/	