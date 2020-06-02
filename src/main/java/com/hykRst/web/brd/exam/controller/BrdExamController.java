package com.hykRst.web.brd.exam.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.codehaus.jackson.map.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.hykRst.web.brd.exam.service.BrdExamService;

import egov.cmmn.ObjectMapperSupport;


/**
 * @Class Name : BrdExamController.java
 * @Description : BrdExamController Class
 * @
 * @  수정일      수정자              수정내용
 * @ ---------   ---------   -------------------------------
 * @ 2020.05.02           HYK
 *
 * @author HYK
 * @since 2020.05.12
 * */

@Controller
@RequestMapping(value = "/wb/br")
public class BrdExamController {

	@Autowired
	private BrdExamService brdExamService;

	
	/**
	 * 예시 게시판 페이지 이동
	 * @return 
	 */
	@RequestMapping(value = "/ex/lt.do")
	public String urlBrdExam() throws Exception {
		return "web/exam/brdExam.tiles-w";
	}
	
	/**
	 * 예시 게시판 페이지 이동
	 * @return "web/main/index.jsp"
	 */
	@RequestMapping(value = "/ex/gLt.do", method={RequestMethod.POST},produces="application/json;charset=UTF-8")
	@ResponseBody
	public String getBrdExamList(@RequestParam Map<String, Object> param) throws Exception {

		Map<String, Object> result = new HashMap<String, Object>();
		
		try {
			List<Map<String, Object>> list = brdExamService.getBrdexamList();
			
			result.put("result", list);		
			
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		// ObjectMapperSupport.java 확인 ** 바람 객체를 json 형식으로 바꿔주는 메소드
		return ObjectMapperSupport.objectToJson(result);
	}

	public static int safeOverflow(int number) {
		if(number > 0) {
			if(number > (Integer.MAX_VALUE - number)) {
				throw new ArithmeticException("throw Overflow Exception");
			}
		}
		return number;
	}
}
