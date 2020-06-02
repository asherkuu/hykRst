<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>


<div class="limiter">


	<div class="container-table100">

		<div style="text-align: center; margin-top: 30px;">

			<div class="btn-container">
				<button class="icon-btn add-btn" id="btnAdd">
					<div class="add-icon"></div>
					<div class="btn-txt">ADD</div>
				</button>
			</div>



			<div class="wrap-table100">
				<div class="table">
					<div class="row header">
						<div class="cell">No</div>
						<div class="cell">Title</div>
						<div class="cell">Hits</div>
						<div class="cell">Author</div>
						<div class="cell">Date</div>
					</div>

					<c:forEach var="list" items="${list}" varStatus="status">
						<div class="row content">
							<div class="cell" data-title="No">${list.hykSeq }</div>
							<div class="cell title" data-title="Title">${list.hykTitle}</div>
							<div class="cell" data-title="Hits">32</div>
							<div class="cell" data-title="Author">${list.hykRegUsr}</div>
							<div class="cell" data-title="Date">${list.hykRegTme }</div>
						</div>
					</c:forEach>
				</div>
			</div>

		</div>
	</div>

</div>