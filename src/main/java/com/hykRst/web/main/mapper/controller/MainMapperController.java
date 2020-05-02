package com.hykRst.web.main.mapper.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import com.hykRst.web.main.mapper.service.MainMapperService;


/**
 * @Class Name : MainMapperController.java
 * @Description : MainMapperController Class
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
@RequestMapping(value = "/wb/ma")
public class MainMapperController {

	@Autowired
	private MainMapperService mainMapperService;
	
	/**
	 * 메인 페이지 조회
	 * @return "web/main/index.jsp"
	 */
	@RequestMapping(value = "/mpIdx.do")
	public String getMainMapperPage(Model md) throws Exception {

		// 시간조회
		String time = mainMapperService.getTime();
		md.addAttribute("time", time);
		
		return "web/main/mapperIndex.tiles-w";
	}
}
