(function($){
	$.fn.keyWords = function(){
		this.focus(function(){
			if(this.defaultValue==$(this).val()){
				$(this).val('')
			}
		})
		.blur(function(){
			var _t = $(this);
			if(_t.val()==''){
				_t.val(this.defaultValue).css('color','#999');	
			}else{
				_t.css('color','#000')
			}
		})	
	}
})(jQuery);