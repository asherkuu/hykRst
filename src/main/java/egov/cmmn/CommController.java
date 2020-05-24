package egov.cmmn;

import java.util.Base64;
import java.util.Base64.Decoder;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * @Class Name  : CommController.java
 * @Description : CommController Class
 * @Modification  Information
 * @
 * @  수정일      	수정자              수정내용
 * @ ---------   ---------   -------------------------------
 * @ 2020.05.22 HYK         최초생성
 *
 * @author HYK
 * @since 2020.05.22
 * @version 1.0
 *
 */
@Controller
@RequestMapping(value="")
public class CommController {

	private static final Logger logger = LoggerFactory.getLogger(ObjectMapperSupport.class); 

	/**
	 * Version : 1.0
	 * Method  : String loadLocation
	 * Usage   : cmmn.util.Request.loadUrl(url);
	 * Author  : HYK
	 * Comment : 각 controller 에서 단순 화면 요청만을 할때 사용되어지는 함수
	 * 			 [아직 미완성인 메소드] 화면 연결은 잘 되나 
	 * 			 url 형식이 데이터 호출 url과 다르다는 점이 있어서 사용여부는 일단 보류인 상태
	 * 	
	 * 			 
	 * 			 일반적인 각 controller 호출 url > localhost:8080/wb/ksk/ex/ksk.do
	 * 			 공통함수 사용 url > localhost:8080/load?page=d2ViL2V4YW0va3Nr
	 */
	@RequestMapping(value = "/load")
	public String loadLocation(String page) throws Exception {	
		
		String path = "";
		
		try {
			/*
				현재 스크립트에서 url 을 base64 형식으로 넘겨준상태 컨트롤러에서 사용하고자 할 때 
				인코딩(암호화)된 문자열을 디코딩(복호화 - 해독)작업이 필요
				
				스크립트에서 cmmn.util.Request.loadUrl("web/exam/ksk"); 로 호출하게 되면
				cmmnUtil.js 에서 loadUrl 함수 실행후 "web/exam/ksk"를 base64 타입으로 암호화하여 컨트롤러로 보내옴
				 
				ex) 컨트롤레에서 "web/exam/ksk" 를 보내면 암호화 작업을 통해 컨트롤러에 d2ViL2V4YW0va3Nr 와 같은 데이터를 보낸다.
					page = d2ViL2V4YW0va3Nr; 
			 */
			String url = page;
			
			// 디코딩 소스 부분 ==================================================================================
			
			Decoder decoder = Base64.getDecoder(); // 디코딩 객체 생성

			/*
				인코딩 문자열을 디코딩 해준 후 byte[] 라는 array byte 타입에 초기화(바이너리 데이터라고도 부른다.)
				
				ex) byte[] decodeByte = decoder.decode("d2ViL2V4YW0va3Nr"); 
				System.out.println(decodeByte); >> byte[] 타입의 데이터 출력됨
			 */
			byte[] decodeByte = decoder.decode(url); 
			
			/*
				바이너리 타입의 데이터를 UTF-8 타입의 문자열 타입의 데이터로 변경해준다. (초기화)
				
				String strDecodedUrl = new String(decodeByte, "UTF-8");
				strDecodedUrl = "web/exam/ksk";
			 */
			String strDecodedUrl = new String(decodeByte, "UTF-8");

			/* 
				문자열을 "/" 라는 구분자로 잘라서 구분후 배열에 담는다. 
				ex) strDecodedUrl.split("/"); >> "/" 를 기준으로 나위게 되며 web, exam, ksk 라는 데이터로 분리가된다.
				분리된 데이터를  배열에 담게되면 
				arr[0] = "web";
				arr[1] = "exam";
				arr[2] = "ksk";
				이러한 식으로 담기게 된다.
			*/
			String[] idnStrUrl = strDecodedUrl.split("/");
			
			/*
				arr[0] 이 web 인지 admin 인지 구분후 tiles-w 를 사용할 것이냐 tiles-w 를 사용할 것이냐를 구분지어준다.
				"".equals() 는 해당 문자열에 대한 비교를 의미하며 문자열 자체를 비교할 때 사용한다.
				
				구분되어져서 최종 목표물(path)는 기존 각 컨트롤러에서 정의해준것처럼 "web/exam/ksk.tiles-w" 라는 형식의 데이터가 반환된다.
			 */
			if ("web".equals(idnStrUrl[0])) {
				path = strDecodedUrl + ".tiles-w";
			} else if("admin".equals(idnStrUrl[0])) {
				path = strDecodedUrl + ".tiles-a";
			}
			
		} catch (Throwable t) {
			logger.error(t.getMessage(), t);
		}
		
		
		return path;
	}
	

}

