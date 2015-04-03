(function() {
	/*banner切换*/
	$("#channel").slide({
		effect:"fade",
		titOnClassName:'current',
		titCell:".channel_num span",
		interTime:4000,
		delayTime:600
	});

	$('.groom_tab').on('mouseover','a',function(){
		$(this).addClass('current').siblings().removeClass();
		var index = $(this).index();
		$('.groom_pro_b_body').eq(index).show().siblings().hide();
	});

	$('.dog_left ul').on('mouseover','li',function(){
		$(this).addClass('current').siblings().removeClass();
		var index = $(this).index();
		$(this).parents('.dog_area').find('.dog_c_t').eq(index).show().siblings().hide();
	});
}).call(this);