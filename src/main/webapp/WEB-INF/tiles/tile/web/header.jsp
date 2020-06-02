<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%
	String ctxPath = request.getContextPath();
%>	
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>HYK</title>

<div class="tm-main-content" id="top">
	<div class="tm-top-bar-bg"></div>

	<!-- 헤더영역 -->

	<div class="tm-top-bar" id="tm-top-bar">
		<div class="container">
			<div class="row">
				<nav class="navbar navbar-expand-lg narbar-light">
					<a class="navbar-brand mr-auto" href="/"> 
						<img src="${ctxPath}/resources/img/logo.png" alt="Site logo"> HYK 리조트
					</a>
					<button type="button" id="nav-toggle" class="navbar-toggler collapsed" data-toggle="collapse"
						data-target="#mainNav" aria-expanded="false" aria-label="Toggle navigation">
						<span class="navbar-toggler-icon"></span>
					</button>
					<div id="mainNav" class="collapse navbar-collapse tm-bg-white">
						<ul class="navbar-nav ml-auto">
							<li class="nav-item">
								<a class="nav-link active" onclick="app.main.hyk.open();">About HYK</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" id="SKI" onclick="app.rsv.ski.open();">스키</a>	
							</li>
							<li class="nav-item">
								<a class="nav-link" id="HTL" onclick="app.rsv.htl.open();">호텔</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" id="STL" onclick="app.rsv.stl.open();">셔틀버스</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" id="RSV" onclick="app.mng.rsv.open();">예약</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" id="CSC" onclick="app.csc.csc.open();">고객센터</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" id="EXAM" href="" onclick="location.href='/sample/crud_k/outline/'">샘플</a>
							</li>
						</ul>
					</div>
				</nav>
			</div>
			<!-- row -->
		</div>
		<!-- container -->
	</div>
	<!-- .tm-top-bar -->
</div>

</head>
<body>