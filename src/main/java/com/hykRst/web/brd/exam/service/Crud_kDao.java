package com.hykRst.web.brd.exam.service;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

/**
 * @Class Name  : Crud_kDao.java
 * @Description : Crud_kDao Class
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
public class Crud_kDao {

	@Resource(name = "sqlSession")
	private SqlSessionTemplate sqlSession;
	
	public String preFix = "web.crud_k.";

	// 조회
	public List<Map<String, Object>> getCrud_kList() throws Exception {
		return sqlSession.selectList(preFix + "selectCrud_kList");
	}

	
	
}
