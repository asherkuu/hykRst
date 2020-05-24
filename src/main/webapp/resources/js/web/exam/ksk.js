(function() {	
	
	"use strict";
	
	
	
	var _class = {
			
			open : function(){
				var _self = this;
				
				_self.initiallize();
				
			},
			
			initiallize :function(){
	        	$("#THE_HYK").on('click', function(e){
	        		cmmn.util.Request.loadUrl("web/exam/ksk");
	        		alert("에라이fdadfdfaadffad");
	        	});
			},
			
	};
	
	app.ksk = $.extend(app.ksk || {}, {
		BrdTest : _class
	})
	
})(); 








/*	그냥 참조용임
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