package com.hykRst.web.brd.exam.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.hykRst.web.brd.exam.service.KskService;


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
@RequestMapping(value = "/wb/ksk")
public class KskController {

	@Autowired
	private KskService kskService;

	/**
	 * 예시 게시판 페이지 이동
	 * @return 
	 */
	@RequestMapping(value = "/ex/kskV.do")
	public ModelAndView test(ModelAndView mv) throws Exception {
		mv.setViewName("web/exam/ksk.tiles-w");
		return mv;
	}

}
