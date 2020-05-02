package com.hykRst.web.main.mapper.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hykRst.web.main.mapper.service.MainMapperService;

/**
 * @Class Name : MainMapperServiceImpl.java
 * @Description : MainMapperServiceImpl Class
 * @
 * @  수정일      수정자              수정내용
 * @ ---------   ---------   -------------------------------
 * @ 2020.05.02           HYK
 *
 * @author HYK
 * @since 2020.05.02
 *
 */
@Service("mainMapperService")
public class MainMapperServiceImpl implements MainMapperService {

	@Autowired
	private MainMapper mainMapper;
	
	// 시간조회
	@Override
	public String getTime() throws Exception {
		return mainMapper.getTime();
	}

}
