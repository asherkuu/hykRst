package com.hykRst.web.brd.exam.service;

import javax.annotation.Resource;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

/**
 * @Class Name  : KskDao.java
 * @Description : KskDao Class
 * @
 * @  수정일      수정자              수정내용
 * @ ---------   ---------   -------------------------------
 * @ 2020.05.22           HYK
 *
 * @author HYK
 * @since 2020.05.22
 *
 */

@Repository
public class KskDao {

	@Resource(name = "sqlSession")
	private SqlSessionTemplate sqlSession;
	
	public String preFix = "web.ksk.ex.";

	
	
}
