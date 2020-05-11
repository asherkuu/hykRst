package com.hykRst.web.main.service;

import javax.annotation.Resource;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

/**
 * @Class Name : MainDao.java
 * @Description : MainDao Class
 * @
 * @  수정일      수정자              수정내용
 * @ ---------   ---------   -------------------------------
 * @ 2020.05.02           HYK
 *
 * @author HYK
 * @since 2020.05.02
 *
 */

@Repository
public class MainDao {


	@Resource(name = "sqlSession")
	private SqlSessionTemplate sqlSession;
	
	public String preFix = "web.main."; 
	
	public String getTime() {
		return sqlSession.selectOne(preFix + "getTime");
	}
	
}
