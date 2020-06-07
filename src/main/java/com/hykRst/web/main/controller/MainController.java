package com.hykRst.web.main.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import com.hykRst.web.main.service.MainService;


/**
 * @Class Name : MainController.java
 * @Description : MainController Class
 * @
 * @  수정일      수정자              수정내용
 * @ ---------   ---------   -------------------------------
 * @ 2020.05.02           HYK
 *
 * @author HYK
 * @since 2020.05.02
 *
 */

@Controller
public class MainController {

	@Autowired
	private MainService mainService;
	
	/**
	 * 메인 페이지 조회
	 * @return "web/main/index.jsp"
	 */
	@RequestMapping(value = "/wb/ma/idx.do")
	public String getMainPage(Model md) throws Exception {

		// 시간조회
		String time = mainService.getTime();
		md.addAttribute("time", time);
		
		return "web/main/index.tiles-w";
	}
	
	/**
	 * 셔틀버스 화면
	 */
	@RequestMapping(value = "/shuttle/outline/")
	public String outline() throws Exception {
		return "web/shuttle/outline.tiles-w";
	}	
}
