<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>    
<%@ taglib prefix="tiles" uri="http://tiles.apache.org/tags-tiles" %>    
<%
	// localhost:port/ or ip:port/
	String ctxPath = request.getContextPath();
%>    
<!DOCTYPE html>
<html>
<head>
	<title></title>
	
	<meta charset="UTF-8">
	
	<!-- load JS files -->
	<script src="${ctxPath}/resources/js/loader/js-package.js"></script>
	<script src="${ctxPath}/resources/js/loader/js-loader.js"></script>
   
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