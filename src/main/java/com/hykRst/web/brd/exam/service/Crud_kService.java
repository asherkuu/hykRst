package com.hykRst.web.brd.exam.service;

import java.util.List;
import java.util.Map;

/**
 * @Class Name : Crud_kService.java
 * @Description : Crud_kService Class
 * @
 * @  수정일      수정자              수정내용
 * @ ---------   ---------   -------------------------------
 * @ 2020.05.12           HYK
 *
 * @author HYK
 * @since 2020.05.02
 *
 */
public interface Crud_kService {

	/**
	 * 게시판샘플 목록 조회
	 * @return 
	 */
	List<Map<String, Object>> getCrud_kList() throws Exception;

}
