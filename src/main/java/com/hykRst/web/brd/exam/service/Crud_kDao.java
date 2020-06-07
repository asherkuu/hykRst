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
	
	public String preFix = "sample.crud_k.";

	// 전체 카운트 조회
	public int selectListCount_Crud_k() {
		return sqlSession.selectOne(preFix + "selectListCount_Crud_k");
	}
	
	// 조회
	public List<Map<String, Object>> selectList_Crud_k(Map<String, Object> param) throws Exception {
		return sqlSession.selectList(preFix + "selectList_Crud_k", param);
	}

	// 상세
	public Map<String, Object> selectDetail_Crud_k(int HYK_SEQ) {
		return sqlSession.selectOne(preFix + "selectDetail_Crud_k", HYK_SEQ);
	}
	
	// 등록
	public int insert_Crud_k(Map<String, Object> param) {
		return sqlSession.insert(preFix + "insert_Crud_k", param);
	}

	// 수정
	public int update_Crud_k(Map<String, Object> param) {
		return sqlSession.update(preFix + "update_Crud_k", param);
	}

	// 삭제
	public int delete_Crud_k(Map<String, Object> param) {
		return sqlSession.delete(preFix + "delete_Crud_k", param);
	}

}
