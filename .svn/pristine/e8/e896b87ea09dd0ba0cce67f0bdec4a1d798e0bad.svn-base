;(function(){
	var defaults = {
		bigDiv:'.pro_big',  //放大图片的容器
		smallDiv:'.pro_s_img',  //放小图片的容器
		triigerBig:'mouseover',  //大图片的触发方式
		triigerSmall:'click',  //小图片的触发方式
		prev:'.pro_prev',  //左箭头
		next:'.pro_next',  //右箭头
		classImg:'current',  //图片当前样式
		classNo:'no_allow',   //箭头不可点击样式
		time:200,   //滚动时间
		num:5   //数量
	};
	$.fn.loadSlide = function(options){
		$.extend(defaults, options);
		return this.each(function(){
			var img=$(defaults.smallDiv,$(this)).find('img');
			var length=img.length;
			var _t=$(this);
			//计算容器的宽度
			$(defaults.smallDiv,_t).width((img.outerWidth()+10)*length);
			//小图片放上去显示大图
			$(defaults.smallDiv,_t).on(defaults.triigerBig,'img',function(){
				$(this).addClass(defaults.classImg).siblings().removeClass();
				var index=$(this).index();
				$(defaults.bigDiv,_t).find('img').eq(index).show().siblings().hide();
			});
			//商品小于一定的数量，不提供滚动
			if(length<=defaults.num){
				$(defaults.prev,$(this)).addClass(defaults.classNo);
				$(defaults.next,$(this)).addClass(defaults.classNo);
				return;
			}
			var i=0;
			//左滚动
			$(defaults.prev,_t).on(defaults.triigerSmall,function(){
				if(i<=0) return 
				$(defaults.smallDiv,_t).animate({'left':'+='+(img.outerWidth()+10)},defaults.time);
				$(defaults.next,_t).removeClass(defaults.classNo);
				i--;
				if(i<=0){
					i=0;
					$(this).addClass(defaults.classNo);
				}
			});
			//右滚动
			$(defaults.next,_t).on(defaults.triigerSmall,function(){      
				if(i>=length-defaults.num) return;
				$(defaults.smallDiv,_t).animate({'left':'-='+(img.outerWidth()+10)},defaults.time);
				$(defaults.prev,_t).removeClass(defaults.classNo);
				i++;
				$(this).removeClass(defaults.classNo);
				if(i>=length-defaults.num){
					i=length-defaults.num;
					$(this).addClass(defaults.classNo);
				}
			});
		});
	}
})(jQuery);