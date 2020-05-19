package com.hykRst.web.brd.exam.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.hykRst.web.brd.exam.service.BrdExamService;


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
 *
 */

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
	@RequestMapping(value = "/ex/gLt.do", method={RequestMethod.GET})
	@ResponseBody
	public String getBrdExamList() throws Exception {
		
		Map<String, Object> result = new HashMap<String, Object>();
		
		try {
			List<Map<String, Object>> list = brdExamService.getBrdexamList();
			
			System.out.println(list);
			
			result.put("result", list);
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		return result.toString();
	}

	
}
