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
	 * 게시판샘플 전체 목록 카운트 조회
	 * @return 
	 */
	int selectListCount_Crud_k() throws Exception;

	/**
	 * 게시판샘플 목록 조회
	 * @param param 
	 * @return 
	 */
	List<Map<String, Object>> selectList_Crud_k(Map<String, Object> param) throws Exception;

	/**
	 * 게시판샘플 상세 조회
	 * @return 
	 */
	Map<String, Object> selectDetail_Crud_k(int HYK_SEQ) throws Exception;
	
	/**
	 * 게시판샘플 등록
	 * @return 
	 */
	int insert_Crud_k(Map<String, Object> param) throws Exception;
	
	/**
	 * 게시판샘플 수정
	 * @return 
	 */
	int update_Crud_k(Map<String, Object> param) throws Exception;

	/**
	 * 게시판샘플 삭제
	 * @return 
	 */
	int delete_Crud_k(Map<String, Object> param) throws Exception;

	
}
