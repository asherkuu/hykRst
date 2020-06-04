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
				
				"resources/util/jquery-3.3.1.min.js",			// jquery			
				"resources/util/jquery.singlePageNav.min.js",	// singlePageNav
				"resources/util/jquery.scrollTo.min.js",		// scrollTo
				"resources/util/datepicker.min.js",				// datepicker
				"resources/util/popper.min.js",					// popper
				
				// 메인 JS
				"resources/slick/slick.min.js",					// slick
				
			],
			
			// 내부 라이브러리
			Core : [
				
				// 공통 - common
				"resources/js/common/app.js",				// 앱 - 글로벌 객체 생성
				"resources/js/common/cmmnUtil.js",			// 공통 함수
				
				// 메인 - main
				"resources/js/web/main/main.js",			// 메인
				
				// 샘플 - exam
				"resources/js/web/sample/outline.js", 		// 게시판 공통 테스트
				
				"resources/js/web/sample/ksk.js", 			// 김선규 테스트
				// "resources/js/web/exam/lcy.js",				// 이채연 테스트
				"resources/js/web/sample/brdExam.js",			// 테스트
				"resources/js/web/sample/crud_k.js", 			// 게시판 테스트
				
				// 예약 - rsv
				"resources/js/web/rsv/stl.js",				// 호텔
				
			],

		},
		
		CSS : {
			
			// 외부 CSS
			Ref : [
				
				"resources/font/css/font-awesome.min.css",		// font-awesome
				"resources/font/css/fonts-googleapis.css",		// fonts-googleapis
				"resources/css/template/templatemo-style.css",	// templatemo-style
				"resources/css/template/bootstrap.min.css",		// bootstrap
				"resources/css/template/datepicker.css",		// datepicker
				
				// 메인 CSS
				"resources/slick/slick.css",					// slick
				"resources/slick/slick-theme.css",				// slick-theme
				
			],
			
			// 내부 CSS
			Core : [
				
				"resources/css/style.css",		// 스타일
				"resources/css/extra_H.css",	// 승훈 추가 css
				"resources/css/extra_Y.css",	// 채연 추가 css
				"resources/css/extra_K.css",	// 선규 추가 css
				
			]
		}

}

if(typeof exports !== "undefined"){
	exports.AppLibFiles = AppLibFiles;
}
