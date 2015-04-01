/**
	购物车列表页
**/
(function(){

	$(".youhui_active_title").hover(function(){

		var $em = $(this).find("em");
		$em.addClass("active");
		$(this).siblings(".youhui_active_info").show();
	},function(){
		var $em = $(this).find("em");
		$em.removeClass("active");
		$(this).siblings(".youhui_active_info").hide();

	});

	//点击领取赠品
	$(".title_tags").click(function(){

		var left_pos = "";
		var right_pos = "";

		left_pos = $(this).offset().left;
		right_pos = $(this).offset().top;

		$(".shopcart_dialog").css({
			left:left_pos+$(this).outerWidth()+10,
			top:right_pos
		})

	});


})(window)
