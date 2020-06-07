package com.hykRst.web.brd.exam.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.hykRst.web.brd.exam.service.Crud_kService;

import egov.cmmn.ObjectMapperSupport;
import egov.cmmn.PaginationRenderer;


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
	 * 아웃라인 목록 조회 화면
	 * @return 
	 */
	@RequestMapping(value = "/outline/")
	public String outline() throws Exception {
		return "web/sample/crud_k/outline_k.tiles-w";
	}	
	
	/**
	 * 게시판샘플 목록 조회 화면
	 * @return 
	 */
	@RequestMapping(value = "/list/", method = RequestMethod.GET)
	@ResponseBody
	public ModelAndView list(HttpServletRequest request, ModelAndView mv, @RequestParam Map<String, Object> param) throws Exception {
	
		try {
			String url = "";
			
			int totalCount = crud_kService.selectListCount_Crud_k();	// 총게시물 건수
			
			// 페이징
			int page = param.get("page") == null ? 1 : Integer.parseInt((String) param.get("page"));
			Map<String, Object> pagination = PaginationRenderer.initPagination(request, totalCount, page);
			param.put("startPageNo", pagination.get("startPageNo"));
			param.put("endPageNo", pagination.get("endPageNo"));
			
			List<Map<String, Object>> list = crud_kService.selectList_Crud_k(param);

			if(list == null) {
				url = "javascript:history.back();";
			} else {
				url = "web/sample/crud_k/list_k.tiles-w";
			}
			
			mv.addObject("list", list);
			mv.setViewName(url);
			
		} catch (Exception e) {
			e.printStackTrace();
		}
		return mv;
	}
	
	/**
	 * 게시판샘플 상세 조회 화면
	 * @return 
	 */
	@RequestMapping(value = "/dtl/", method={RequestMethod.GET},produces="application/json;charset=UTF-8")
	@ResponseBody
	public ModelAndView dtl(ModelAndView mv, @RequestParam int cn) throws Exception {
	
		String url= "";
		
		try {			
			int HYK_SEQ = cn;
			Map<String, Object> dtl = crud_kService.selectDetail_Crud_k(HYK_SEQ);

			
			
			// 존재하지 않는 게시물인 경우
			if(dtl == null) {
				
				url = "common/404error";
				mv.addObject("loc","javascript:history.back()"); // 뒤로가기
			} else {
				
				url = "web/sample/crud_k/dtl_k.tiles-w";
				mv.addObject("dtl", dtl);
			}
			
			mv.setViewName(url);
			
		} catch (Exception e) {
			url = "common/404error";
			mv.addObject("loc","javascript:history.back()"); // 뒤로가기
			mv.setViewName(url);
		}
		return mv;
	}
	
	/**
	 * 게시판샘플 등록 화면
	 * @return 
	 */
	@RequestMapping(value = "/ins/")
	public String ins() throws Exception {
		return "web/sample/crud_k/ins_k.tiles-w";
	}
	
	/**
	 * 게시판샘플 등록 이벤트
	 * @return 
	 */
	@RequestMapping(value = "/insert_Crud_k.do/", method={RequestMethod.POST},produces="application/json;charset=UTF-8")
	@ResponseBody
	public String ins_do(@RequestParam Map<String, Object> param) throws Exception {
	
		Map<String, Object> result = new HashMap<String, Object>();	
		
		try {
			int cnt = crud_kService.insert_Crud_k(param);
			
			if(cnt > 0) {
				result.put("SUCCESS", true);
			} else {
				result.put("SUCCESS", false);
			}
			
		} catch (Exception e) {
			e.printStackTrace();
		}
		return ObjectMapperSupport.objectToJson(result);
	}
	
	/**
	 * 게시판샘플 수정 화면
	 * @return 
	 */
	@RequestMapping(value = "/updt/", method={RequestMethod.GET},produces="application/json;charset=UTF-8")
	@ResponseBody
	public ModelAndView updt(ModelAndView mv, @RequestParam int cn) throws Exception {
	
		String url= "";
		
		try {			
			int HYK_SEQ = cn;
			Map<String, Object> dtl = crud_kService.selectDetail_Crud_k(HYK_SEQ);

			// 존재하지 않는 게시물인 경우
			if(dtl == null) {
				
				url = "common/404error";
				mv.addObject("loc","javascript:history.back()"); // 뒤로가기
			} else {
				
				url = "web/sample/crud_k/updt_k.tiles-w";
				mv.addObject("dtl", dtl);
			}
			
			mv.setViewName(url);
			
		} catch (Exception e) {
			url = "common/404error";
			mv.addObject("loc","javascript:history.back()"); // 뒤로가기
			mv.setViewName(url);
		}
		return mv;
	}
	
	/**
	 * 게시판 수정 이벤트
	 * @return 
	 */
	@RequestMapping(value = "/update_Crud_k.do/", method={RequestMethod.POST},produces="application/json;charset=UTF-8")
	@ResponseBody
	public String updt_do(@RequestParam Map<String, Object> param) throws Exception {
	
		Map<String, Object> result = new HashMap<String, Object>();	
		
		try {
			int cnt = crud_kService.update_Crud_k(param);
			
			if(cnt > 0) {
				result.put("SUCCESS", true);
			} else {
				result.put("SUCCESS", false);
			}
			
		} catch (Exception e) {
			e.printStackTrace();
		}
		return ObjectMapperSupport.objectToJson(result);
	}
	
	/**
	 * 게시판 삭제 이벤트
	 * @return 
	 */
	@RequestMapping(value = "/delete_Crud_k.do/", method={RequestMethod.POST},produces="application/json;charset=UTF-8")
	@ResponseBody
	public String delete_Crud_k(@RequestParam Map<String, Object> param) throws Exception {
	
		Map<String, Object> result = new HashMap<String, Object>();	
		
		try {
			int cnt = crud_kService.delete_Crud_k(param);
			
			if(cnt > 0) {
				result.put("SUCCESS", true);
			} else {
				result.put("SUCCESS", false);
			}
			
		} catch (Exception e) {
			e.printStackTrace();
		}
		return ObjectMapperSupport.objectToJson(result);
	}
}
