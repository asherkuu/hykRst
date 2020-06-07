<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>

<div class="wrap-container">

	


	<div id="lnb" style="position: fixed; top: 107px; transform: matrix(1, 0, 0, 1, 0, 0);">

		<ul class="">
			<li class="business">
				<a href="#" class="mot2 lnb_6_2">
					<span>셔틀버스 시간표</span>
				</a>
			</li>
		</ul>
	</div>
	
	<div id="right-content">
		<h6>right content area</h6>
	</div>
</div>

<style>
#right-content {
	position: relative;
    margin-top: 30px;
    margin-left: 270px;
    background :gray;
}

#lnb header {
	background-color: #69c6ba;
	font-size: 20px;
	line-height: 80px;
	text-align: center;
}

#lnb {
	position: fixed;
	top: 107px;
	width: 270px;
	bottom: 0;
	z-index: 1;
	background: #ebebeb;
	z-index: 9;
}

#lnb>ul {
	font-size: 14px;
	text-align: left;
}

#lnb ul li:first-child {
	border-top: 1px solid #d4d4d4;
}

#lnb ul li {
	border-bottom: 1px solid #d4d4d4;
}

#lnb>ul>li>a {
	display: block;
	height: 86px;
	line-height: 88px;
	background: #ebebeb;
	text-transform: uppercase;
}

.mot2 {
	-webkit-transition: all 0.2s ease-out;
	-moz-transition: all 0.2s ease-out;
	-o-transition: all 0.2s ease-out;
	transition: all 0.2s ease-out;
}

#lnb>ul>li>a>span {
	position: relative;
	display: block;
	color: #444;
	font-weight: 500;
	padding-left: 30px;
}

ol, ul, li {
	list-style: none;
}
</style>


