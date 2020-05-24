//
// Version 1.0
//
// 18 May 2020
//
//

var AppLibFiles = {
		
		JS : {
			
			// 외부 라이브러리
			Ref : [
				"resources/util/jquery-3.3.1.min.js/",			
				"resources/util/jquery.singlePageNav.min.js",
				"resources/util/jquery.scrollTo.min.js",
				"resources/util/datepicker.min.js",
				"resources/util/popper.min.js",
				"resources/slick/slick.min.js"
			],
			
			// 내부 라이브러리
			Core : [
				"resources/js/common/app.js",
				"resources/js/common/cmmnUtil.js",
				"resources/js/web/exam/brdExam.js",
				
				"resources/js/web/exam/ksk.js", 			// 김선규 테스트
				"resources/js/web/exam/lcy.js" 			// 이채연 테스트
			],

		},
		
		CSS : {
			
			// 외부 CSS
			Ref : [
				"resources/font/css/font-awesome.min.css",
				"resources/font/css/fonts-googleapis.css",
				"resources/css/template/templatemo-style.css",
				"resources/css/template/bootstrap.min.css",
				"resources/css/template/datepicker.css",
				"resources/slick/slick.css",
				"resources/slick/slick-theme.css"
			],
			
			// 내부 CSS
			Core : [
				
			]
		}

}

if(typeof exports !== "undefined"){
	exports.AppLibFiles = AppLibFiles;
}
