<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>    
<%@ taglib prefix="tiles" uri="http://tiles.apache.org/tags-tiles" %>    
<%
	// localhost:port/ or ip:port/
	String ctxPath = request.getContextPath();
%>    
<!DOCTYPE html>
<%-- 

	tiles 
	
	고정된 폼(header, content, footer)에 사용할 JSP 파일을 생성하여 해당 JSP 파일에 header, footer include 없이 
	해당 JSP를 고정된 tiles 폼의 content 영역에 부착하여 사용하는 폼형식  

	각 JSP에 사용되어지는 CSS 파일이나 JS 파일 또는 각 메타에 대한 정의들을 정의할 필요없이 tiles 폼에 모두 한번만 정의해 두면 
	각 JSP에 각각 정의하지않아도 extends 식으로 사용가능하다
	
--%>
<html>
<head>
	<title></title>
	
	<meta charset="UTF-8">
	
	<!-- load JS files -->
	<script src="${ctxPath}/resources/util/jquery-3.3.1.min.js"></script>
	<script src="${ctxPath}/resources/util/popper.min.js"></script>                    <!-- https://popper.js.org/ -->
    <script src="${ctxPath}/resources/util/datepicker.min.js"></script>                <!-- https://github.com/qodesmith/datepicker -->
    <script src="${ctxPath}/resources/util/jquery.singlePageNav.min.js"></script>      <!-- Single Page Nav (https://github.com/ChrisWojcik/single-page-nav) -->
    <script src="${ctxPath}/resources/slick/slick.min.js"></script>                  <!-- http://kenwheeler.github.io/slick/ -->
    <script src="${ctxPath}/resources/util/jquery.scrollTo.min.js"></script>           <!-- https://github.com/flesler/jquery.scrollTo -->
    
	<!-- load stylesheets -->
 	<link rel="stylesheet" href="${ctxPath}/resources/font/css/font-awesome.min.css" media="all" type="text/css" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700">  <!-- Google web font "Open Sans" -->    
    <link rel="stylesheet" href="${ctxPath}/resources/css/template/bootstrap.min.css">                                      <!-- Bootstrap style -->
    <link rel="stylesheet" type="text/css" href="${ctxPath}/resources/css/template/datepicker.css"/>
    <link rel="stylesheet" type="text/css" href="${ctxPath}/resources/slick/slick.css"/>
    <link rel="stylesheet" type="text/css" href="${ctxPath}/resources/slick/slick-theme.css"/>
    <link rel="stylesheet" href="${ctxPath}/resources/css/template/templatemo-style.css">        <!-- Templatemo style -->
</head>

<body>
	<div id="wb_container">
		<div id="header">
			<tiles:insertAttribute name="header"/>
		</div>
		
		<div id="content">
			<tiles:insertAttribute name="content"/>
		</div>
		
		<div id="footer">
			<tiles:insertAttribute name="footer"/>
		</div>
	</div>
</body>

</html>