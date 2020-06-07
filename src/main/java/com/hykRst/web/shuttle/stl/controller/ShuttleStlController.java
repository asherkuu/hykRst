package com.hykRst.web.shuttle.stl.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.hykRst.web.shuttle.stl.service.ShuttleStlService;


/**
 * @Class Name  : ShuttleStlController.java
 * @Description : ShuttleStlController Class
 * @
 * @  수정일      		수정자              수정내용
 * @ ---------   ---------   -------------------------------
 * @ 2020.06.07     HYK			최초작성
 *
 * @author HYK
 * @since 2020.06.07
 *
 */
@Controller
@RequestMapping(value = "/shuttle/stl")
public class ShuttleStlController {

	@Autowired
	private ShuttleStlService stlService;

}
