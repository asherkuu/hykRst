package com.hykRst.web.brd.exam.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hykRst.web.brd.exam.service.KskDao;
import com.hykRst.web.brd.exam.service.KskService;

import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

/**
 * @Class Name  : KskServiceImpl.java
 * @Description : KskServiceImpl Class
 * @
 * @  수정일      수정자              수정내용
 * @ ---------   ---------   -------------------------------
 * @ 2020.05.22           HYK
 *
 * @author HYK
 * @since 2020.05.22
 *
 */
@Service("kskService")
public class KskServiceImpl extends EgovAbstractServiceImpl implements KskService {

	@Autowired
	private KskDao kskDao;



}
