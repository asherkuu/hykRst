<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<div class="form-row">
	<div class="col-md-12 col-sm-12">
		<div class="x_panel">
			<div class="x_title">

				<div class="clearfix"></div>
			</div>
			<div class="x_content" style="display: block;">
			
				<form name="frm_crud_k" class="form-horizontal form-label-left">
					
					<input type="hidden" id="HYK_SEQ" name="HYK_SEQ" value="${dtl.hykSeq}">
					
					<!-- Name -->
					<div class="item form-group">
						<label class="col-form-label col-md-3 col-sm-3 label-align" for="HYK_REG_USR">
							Name&nbsp;
						</label>
						<div class="col-md-6 col-sm-6">
							<input type="text" id="HYK_REG_USR" name="HYK_REG_USR" class="form-control" data-validate-length-range="6" 
								data-validate-words="2" readOnly value="${dtl.hykRegUsr}">
						</div>
					</div>
					
					<!-- Title -->
					<div class="item form-group">
						<label class="col-form-label col-md-3 col-sm-3 label-align" for="HYK_TITLE">
							Title&nbsp;
						</label>
						<div class="col-md-6 col-sm-6">
							<input type="text" id="HYK_TITLE" name="HYK_TITLE" class="form-control" data-validate-length-range="6" 
								data-validate-words="2" readOnly value="${dtl.hykTitle}">
						</div>
					</div>
					
					<!-- Textarea -->
					<div class="item form-group">
						<label class="col-form-label col-md-3 col-sm-3 label-align" for="HYK_CONTENT">
							Textarea&nbsp;
						</label>
						<div class="col-md-6 col-sm-6">
							<textarea id="HYK_CONTENT" name="HYK_CONTENT" class="form-control" cols="3" rows="5" readonly>${dtl.hykContent}</textarea>
						</div>
					</div>

					<!-- Button Area -->
					<div class="ln_solid"></div>
					<div class="form-group">
						<div class="col-md-6 offset-md-3">
							<input type="button" id="btnList_dtl" class="btn btn-primary" value="List">
							<input type="button" id="btnDelete_dtl"  class="btn btn-secondary" value="Delete"/>
							<input type="button" id="btnUpdate_dtl"  class="btn btn-success" value="Modify"/>
						</div>
					</div>
					
				</form>
			</div>
		</div>
	</div>
</div>