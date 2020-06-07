package egov.cmmn;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

/**
 * @Class Name  : PaginationRenderer.java
 * @Description : PaginationRenderer Class
 * @Modification  Information
 * @
 * @  수정일      	수정자              수정내용
 * @ ---------   ---------   -------------------------------
 * @ 2020.06.07 HYK         최초생성
 *
 * @author HYK
 * @since 2020.05.21
 * @version 1.0
 *
 */
public class PaginationRenderer {

	public static Map<String, Object> initPagination(HttpServletRequest request, int totalCount, int selectedPage) {
		
		Map<String, Object> result = new HashMap<String, Object>();	
		
		String url = request.getRequestURI(); // 현 페이지 URL
		String lastUrl = url.substring(url.length()-1); // 현 페이지 URL 의 마지막 문자 가져오기
		
		int crrPage 	= 0;	// 선택한 페이지
		int totalPage 	= 0;	// 총 페이지수
		int page 		= 1;	// 보여줄 페이지 넘버
		int perPage 	= 10;	// 페이지당 보여줄 게시물 수
		int perBar 		= 10;	// 화면에 포여질 블럭수 	 ex) 5     ->    << | 1 | 2 | 3 | 4 | 5 | >>

		// 형 페이지의 마지막 문자에 ? 가 없으면 추가 > ? 가 없다는건 맨처음에 리스트를 불러와서 페이징블럭을 클릭하지 않은 상태를 의미한다.
		if(!"?".equals(lastUrl)) {
			url += "?";
		}
		
		if(selectedPage != 0) {
			crrPage = selectedPage;
		} else {
			crrPage =  0;
		}
		
		// 전체 페이지 갯수
		totalPage = (int) Math.ceil((double)totalCount/perPage);
		
		// 페이지 선택이전의 초기화면인 경우
		if(crrPage == 0){
			page = 1;	
			
		} else { 
		// 페이지를 선택한경우
			
			try {
				page = crrPage;
				
				if(page < 1 || page > totalPage) {
					page = 1;
				};
			} catch (Exception e) {
				page = 1;
			};
		};

		int loop		= 1;	// perBar 반복용
		int pageNo		= ((page - 1) / perBar) * perBar + 1;	// 페이지번호
		
		String html = "";
		
		html += "<ul>";
		
		// 이전버튼 생성
		if(pageNo != 1) {
			html += "<a href='?page="+(page - perBar + (pageNo - page))+"'> < </a>";
		}
		
		while (!( loop > perBar || pageNo > totalPage)) {
			if(pageNo == page) {
				html += "<a class='on_active' href='?page="+pageNo+"' >"+pageNo+"</a>";
			} else {
				html += "<a href='?page="+pageNo+"'>"+pageNo+"</a>";
			};
				
			loop++;
			pageNo++;
		}
		
		// 다음버튼 생성	
		if(!(pageNo > totalPage)) {
			html += "<a href='?page="+(pageNo)+"'> > </a>";	
		}
		
//		html += "<div class='pagination-bar'></div>";
		html += "</ul>";
		html += "</div>";
		
		request.setAttribute("pagination", html);
		
		int startPageNo = (crrPage-1) * perPage + 1;
		int endPageNo = startPageNo + perPage - 1;
		
		result.put("startPageNo", startPageNo);
		result.put("endPageNo", endPageNo);
		
		return result;
	}
	
}
