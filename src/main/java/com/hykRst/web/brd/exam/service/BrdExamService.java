package com.hykRst.web.brd.exam.service;

import java.util.List;
import java.util.Map;

/**
 * @Class Name : BrdExamService.java
 * @Description : BrdExamService Class
 * @
 * @  수정일      수정자              수정내용
 * @ ---------   ---------   -------------------------------
 * @ 2020.05.12           HYK
 *
 * @author HYK
 * @since 2020.05.02
 *
 */
public interface BrdExamService {

	// 예제 게시판 조회
	List<Map<String, Object>> getBrdexamList();

}
