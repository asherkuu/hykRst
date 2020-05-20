(function() {	
	
	"use strict";
	
	var _class = {
			
			open : function(){
				var _self = this;
				
				_self.initiallize();
				
			},
			
			initiallize :function(){
				alert("김선규");
			},
			
	};
	
	app.ksk = $.extend(app.ksk || {}, {
		BrdTest : _class
	})
	
})(); 