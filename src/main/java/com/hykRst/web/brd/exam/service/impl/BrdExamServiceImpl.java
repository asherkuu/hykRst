package com.hykRst.web.brd.exam.service.impl;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hykRst.web.brd.exam.service.BrdExamDao;
import com.hykRst.web.brd.exam.service.BrdExamService;

import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

/**
 * @Class Name : BrdExamServiceImpl.java
 * @Description : BrdExamServiceImpl Class
 * @
 * @  수정일      수정자              수정내용
 * @ ---------   ---------   -------------------------------
 * @ 2020.05.12           HYK
 *
 * @author HYK
 * @since 2020.05.12
 *
 */
@Service("brdExamService")
public class BrdExamServiceImpl extends EgovAbstractServiceImpl implements BrdExamService {

	@Autowired
	private BrdExamDao brdExamDao;

	// 예제 게시판 조회
	@Override
	public List<Map<String, Object>> getBrdexamList() {
		return brdExamDao.getBrdExamList();
	}


}
