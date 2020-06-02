<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
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
					<a class="navbar-brand mr-auto" href="#"> <img
						src="${ctxPath}/resources/img/logo.png" alt="Site logo">
						Journey
					</a>
					<button type="button" id="nav-toggle"
						class="navbar-toggler collapsed" data-toggle="collapse"
						data-target="#mainNav" aria-expanded="false"
						aria-label="Toggle navigation">
						<span class="navbar-toggler-icon"></span>
					</button>
					<div id="mainNav" class="collapse navbar-collapse tm-bg-white">
						<ul class="navbar-nav ml-auto">
							<li class="nav-item"><a class="nav-link active" href="#top">Home
									<span class="sr-only">(current)</span>
							</a></li>
							<li class="nav-item"><a class="nav-link" id="THE_HYK"
								onclick="app.ksk.BrdTest.open();">The HYK</a></li>
							<li class="nav-item"><a class="nav-link"
								href="#tm-section-3">Recommended Places</a></li>
							<li class="nav-item"><a class="nav-link"
								href="#tm-section-4">Contact Us</a></li>
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