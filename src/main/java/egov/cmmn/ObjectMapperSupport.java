package egov.cmmn;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.codehaus.jackson.map.ObjectMapper;
import org.codehaus.jackson.type.TypeReference;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
 * @Class Name  : ObjectMapper.java
 * @Description : ObjectMapper Class
 * @Modification  Information
 * @
 * @  수정일      	수정자              수정내용
 * @ ---------   ---------   -------------------------------
 * @ 2020.05.21 HYK         최초생성
 *
 * @author HYK
 * @since 2020.05.21
 * @version 1.0
 *
 */
public class ObjectMapperSupport {

	
	private static final Logger logger = LoggerFactory.getLogger(ObjectMapperSupport.class);
	
	/**
	 * Comment : JSON 으로 파싱하기 위한 ObjectMapper 객세 생성
	 */
	private static ObjectMapper mapper = new ObjectMapper();
	
	/**
	 * Version : 1.0
	 * Usage   : ObjectMapperSupport.objectToJson(data)
	 * Author  : HYK
	 * Comment : DB 에서 받아온 Map 또는 List<map> 을 json 형식으로 변환시켜주는 클래스
	 * 			 json 형식으로 변환시켜서 script 로 return 하여준다. 
	 */
	public static String objectToJson(Object data) {
		String result = "";
		try {
			result = mapper.writeValueAsString(data);
		} catch (Throwable t) {
			logger.error(t.getMessage(), t);
		}
		return result;
	}
	
	/**
	 * Version : 1.0
	 * Method  : Map<String, Object> jsonToMap
	 * Usage   : ObjectMapperSupport.jsonToMap(json)
	 * Author  : HYK
	 * Comment : script 에서 받아온 json 형식의 데이터를 Map 으로 변환시켜줄때 사용한다.
	 */
	public static Map<String, Object> jsonToMap(String json) {
		Map<String, Object> map = null;
		try {
			map = mapper.readValue(json, new TypeReference<Map<String, Object>>() {});
		} catch (Throwable t) {
			logger.error(t.getMessage(), t);
		}
		return map != null ? map : new HashMap<String, Object>();
	}
	
	/**
	 * Version : 1.0
	 * Method  : List<Object> jsonToList
	 * Usage   : ObjectMapperSupport.jsonToList(json)
	 * Author  : HYK
	 * Comment : script 에서 받아온 json 형식의 데이터를 List 으로 변환시켜줄때 사용한다.
	 */
	public static List<Object> jsonToList(String json){
		List<Object> list = null;
		
		try {
			list = mapper.readValue(json, new TypeReference<List<Object>>() {});
		} catch (Throwable t) {
			logger.error(t.getMessage(), t);
		}
		return list != null ? list : new ArrayList<Object>();
	}
	
}
