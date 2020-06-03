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
			
				<form class="form-horizontal form-label-left">

					<span class="section">Throw your worries away !</span>
					
					<!-- Name -->
					<div class="item form-group">
						<label class="col-form-label col-md-3 col-sm-3 label-align" for="name">
							Name <span class="required">*</span>
						</label>
						<div class="col-md-6 col-sm-6">
							<input type="text" id="name" name="name" class="form-control" data-validate-length-range="6" 
								data-validate-words="2" placeholder="both name(s) e.g Jon Doe" required="required">
						</div>
					</div>
					
					<!-- Email -->
					<div class="item form-group bad">
						<label class="col-form-label col-md-3 col-sm-3 label-align" for="email">
							Email <span class="required">*</span>
						</label>
						<div class="col-md-6 col-sm-6">
							<input type="email" id="email" name="email" class="form-control" required="required">
						</div>
						<div class="alert"></div>
					</div>	
								
					<!-- Mobile -->	
					<div class="item form-group">
						<label class="col-form-label col-md-3 col-sm-3 label-align" for="mobile">
							Mobile &nbsp;
						</label>
						<div class="col-md-6 col-sm-6">
							<input type="text" id="mobile" name="mobile" class="form-control" data-validate-minmax="10,100">
						</div>
					</div>
					
					<!-- Title -->
					<div class="item form-group">
						<label class="col-form-label col-md-3 col-sm-3 label-align" for="name">
							Title <span class="required">*</span>
						</label>
						<div class="col-md-6 col-sm-6">
							<input type="text" id="name" name="name" class="form-control" data-validate-length-range="6" 
								data-validate-words="2" required="required">
						</div>
					</div>
					
					<!-- Textarea -->
					<div class="item form-group">
						<label class="col-form-label col-md-3 col-sm-3 label-align" for="textarea">
							Textarea <span class="required">*</span>
						</label>
						<div class="col-md-6 col-sm-6">
							<textarea id="textarea" name="textarea" class="form-control" cols="3" rows="5" required="required" ></textarea>
						</div>
					</div>
					
					<!-- Password -->
					<div class="item form-group bad">
						<label for="password" class="col-form-label col-md-3 label-align">
							Password <span class="required">*</span>
						</label>
						<div class="col-md-6 col-sm-6">
							<input type="password" id="password" name="password" class="form-control" data-validate-length="6,8"  required="required">
						</div>
						<div class="alert"></div>
					</div>
					
					<!-- Button Area -->
					<div class="ln_solid"></div>
					<div class="form-group">
						<div class="col-md-6 offset-md-3">
							<input type="button" id="btnCancel" class="btn btn-primary" value="Cancel">
							<input type="button" id="btnSubmit"  class="btn btn-success" value="Submit"/>
						</div>
					</div>
					
				</form>
			</div>
		</div>
	</div>
</div>