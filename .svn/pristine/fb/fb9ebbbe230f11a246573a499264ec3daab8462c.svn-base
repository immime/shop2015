(function() {
	//图片轮播
	$('.shop_t_l').loadSlide({});
	//左侧列表菜单
	$(".goodsCateSubTitle").click(function() {
		var $goodsCateSub;
		$goodsCateSub = $(this).siblings(".goodsCateSub");
		if ($goodsCateSub.is(":hidden")) {
			$goodsCateSub.show();
			$(this).find("i").addClass("active");
			if (!$(this).parent().hasClass("goodsCateList_on")) {
				return $(this).parent().addClass('active');
			}
		} else {
			$goodsCateSub.hide();
			$(this).find("i").removeClass("active");
		}
	});
	//加减
	$('.add').on('click',function(){
		var n = parseInt($(this).prev().val());
		$(this).prev().val(n+1);
	});
	$('.reduce').on('click',function(){
		var n = parseInt($(this).next().val());
		if(n==1) return;
		$(this).next().val(n-1);
	});

	//浮动tag
	$('.pro_tag_cont').on('click','span',function(){
		var _t=$(this);
		_t.addClass('current').siblings('span').removeClass();
		var index=_t.index();
		var top=$('.pro_pl').eq(index).offset().top-35;
		$('html,body').animate({scrollTop:top},200);
	});
	var top=$('.pro_tag_cont').offset().top;
	$(window).on('scroll',function(){
		var _t=$(this),height=_t.scrollTop();
		if(height>top){
			$('.pro_tag').addClass('abs').css('top',height);
			var tag = $('.pro_tag_cont span');
			var length=$('.pro_pl').length;
			for(var i=0;i<length;i++){
				if(height>=$('.pro_pl').eq(i).offset().top-35){
					tag.removeClass().eq(i).addClass('current');
				}
			}
		}else{
			$('.pro_tag').removeClass('abs');
		}
	});

	//评论
	$('.replay_num').on('click',function(){
		$(this).siblings('.pl_k').toggle();
	});
}).call(this);
9107