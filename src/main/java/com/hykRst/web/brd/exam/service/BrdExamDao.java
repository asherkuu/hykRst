package com.hykRst.web.brd.exam.service;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

/**
 * @Class Name : BrdExamDao.java
 * @Description : BrdExamDao Class
 * @
 * @  수정일      수정자              수정내용
 * @ ---------   ---------   -------------------------------
 * @ 2020.05.12           HYK
 *
 * @author HYK
 * @since 2020.05.12
 *
 */

@Repository
public class BrdExamDao {

	@Resource(name = "sqlSession")
	private SqlSessionTemplate sqlSession;
	
	public String preFix = "web.brd.ex.";

	// 예제 게시판 조회
	public List<Map<String, Object>> getBrdExamList() {
		return sqlSession.selectList( preFix + "getBrdExamList" );
	} 
	
	
}
