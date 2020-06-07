package com.hykRst.web.shuttle.stl.dao;

import javax.annotation.Resource;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

/**
 * @Class Name  : ShuttleStlDao.java
 * @Description : ShuttleStlDao Class
 * @
 * @  수정일      		수정자              수정내용
 * @ ---------   ---------   -------------------------------
 * @ 2020.06.07     HYK			최초작성
 *
 * @author HYK
 * @since 2020.06.07
 *
 */
@Repository
public class ShuttleStlDao {

	@Resource(name = "sqlSession")
	private SqlSessionTemplate sqlSession;
	
	public String preFix = "shuttle.stl.";

}
