package com.hykRst.web.brd.exam.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.hykRst.web.brd.exam.service.Crud_kService;


/**
 * @Class Name  : Crud_kController.java
 * @Description : Crud_kController Class
 * @
 * @  수정일      		수정자              수정내용
 * @ ---------   ---------   -------------------------------
 * @ 2020.05.30     HYK			최초작성
 *
 * @author HYK
 * @since 2020.05.30
 *
 */

@Controller
@RequestMapping(value = "/sample/crud_k")
public class Crud_kController {

	@Autowired
	private Crud_kService crud_kService;
	
	/**
	 * 아웃라인 목록 조회
	 * @return 
	 */
	@RequestMapping(value = "/outline/")
	public String loadOutline() throws Exception {
		return "web/sample/crud_k/outline_k.tiles-w";
	}	
	
	/**
	 * 게시판샘플 목록 조회
	 * @return 
	 */
	@RequestMapping(value = "/list/")
	@ResponseBody
	public ModelAndView loadCrud_kList(ModelAndView mv, @RequestParam Map<String, Object> param) throws Exception {
	
		try {

			List<Map<String, Object>> list = crud_kService.getCrud_kList();

			mv.addObject("list", list);
			mv.setViewName("web/sample/crud_k/list_k.tiles-w");
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		return mv;
	}	
	
	
	
}
