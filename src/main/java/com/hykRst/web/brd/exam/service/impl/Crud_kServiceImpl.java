package com.hykRst.web.brd.exam.service.impl;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hykRst.web.brd.exam.service.Crud_kDao;
import com.hykRst.web.brd.exam.service.Crud_kService;

import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

/**
 * @Class Name  : Crud_kServiceImpl.java
 * @Description : Crud_kServiceImpl Class
 * @
 * @  수정일      수정자              수정내용
 * @ ---------   ---------   -------------------------------
 * @ 2020.05.22           HYK
 *
 * @author HYK
 * @since 2020.05.22
 *
 */
@Service("crud_kServiceImpl")
public class Crud_kServiceImpl extends EgovAbstractServiceImpl implements Crud_kService {

	@Autowired
	private Crud_kDao crud_kDao;

	/**
	 * 게시판샘플 전체 목록 카운트 조회
	 * @return 
	 */
	@Override
	public int selectListCount_Crud_k() throws Exception {
		return crud_kDao.selectListCount_Crud_k();
	}
	
	/**
	 * 게시판샘플 목록 조회
	 * @return 
	 */
	@Override
	public List<Map<String, Object>> selectList_Crud_k(Map<String, Object> param) throws Exception {
		return crud_kDao.selectList_Crud_k(param);
	}

	/**
	 * 게시판샘플 상세 조회
	 * @return 
	 */
	@Override
	public Map<String, Object> selectDetail_Crud_k(int HYK_SEQ) throws Exception {
		return crud_kDao.selectDetail_Crud_k(HYK_SEQ);
	}
	
	/**
	 * 게시판샘플 등록
	 * @return 
	 */
	@Override
	public int insert_Crud_k(Map<String, Object> param) throws Exception {
		return crud_kDao.insert_Crud_k(param);
	}
	
	/**
	 * 게시판샘플 수정
	 * @return 
	 */
	@Override
	public int update_Crud_k(Map<String, Object> param) throws Exception {
		return crud_kDao.update_Crud_k(param);
	}

	/**
	 * 게시판샘플 삭제
	 * @return 
	 */
	@Override
	public int delete_Crud_k(Map<String, Object> param) throws Exception {
		return crud_kDao.delete_Crud_k(param);
	}


}
