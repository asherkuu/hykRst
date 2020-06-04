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
	 * 게시판샘플 목록 조회
	 * @return 
	 */
	@Override
	public List<Map<String, Object>> getCrud_kList() throws Exception {
		return crud_kDao.getCrud_kList();
	}

	/**
	 * 게시판샘플 등록
	 * @return 
	 */
	@Override
	public int postCrud_kIns(Map<String, Object> param) throws Exception {
		return crud_kDao.postCrud_kIns(param);
	}

}
