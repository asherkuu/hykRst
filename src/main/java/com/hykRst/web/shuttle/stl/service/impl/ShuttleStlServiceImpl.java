package com.hykRst.web.shuttle.stl.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hykRst.web.shuttle.stl.dao.ShuttleStlDao;
import com.hykRst.web.shuttle.stl.service.ShuttleStlService;

import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

/**
 * @Class Name  : ShuttleStlServiceImpl.java
 * @Description : ShuttleStlServiceImpl Class
 * @
 * @  수정일      		수정자              수정내용
 * @ ---------   ---------   -------------------------------
 * @ 2020.06.07     HYK			최초작성
 *
 * @author HYK
 * @since 2020.06.07
 *
 */
@Service("ShuttleStlServiceImpl")
public class ShuttleStlServiceImpl extends EgovAbstractServiceImpl implements ShuttleStlService {

	@Autowired
	private ShuttleStlDao stlDao;

}
