package com.hykRst.web.main.mapper.service.impl;

import egovframework.rte.psl.dataaccess.mapper.Mapper;

/**
 * @Class Name : MainMapper.java
 * @Description : MainMapper Class
 * @
 * @  수정일      수정자              수정내용
 * @ ---------   ---------   -------------------------------
 * @ 2020.05.02           HYK
 *
 * @author HYK
 * @since 2020.05.02
 *
 */
@Mapper
public interface MainMapper {

	// 시간조회
	public String getTime() throws Exception;

}
