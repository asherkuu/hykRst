package com.hykRst.web.main.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hykRst.web.main.service.MainDao;
import com.hykRst.web.main.service.MainService;

import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

/**
 * @Class Name : MainServiceImpl.java
 * @Description : MainServiceImpl Class
 * @
 * @  수정일      수정자              수정내용
 * @ ---------   ---------   -------------------------------
 * @ 2020.05.02           HYK
 *
 * @author HYK
 * @since 2020.05.02
 *
 */
@Service("mainService")
public class MainServiceImpl extends EgovAbstractServiceImpl implements MainService {

	@Autowired
	private MainDao mainDao;
	
	// 시간조회
	@Override
	public String getTime() throws Exception {
		return "";//mainDao.getTime();
	}

}
