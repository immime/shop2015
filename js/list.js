(function() {
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

  $(".more_pop_con").hover(function() {
    $(this).find("a").addClass("active");
    $(".filter_item:visible:last").addClass("active");
  }, function() {
    $(this).find("a").removeClass("active");
    $(".filter_item:visible:last").removeClass("active");
  });

  $(".filter_item:gt(2)").hide();

  $(".more_pop_con").on("click","a",function(){
  	$(".filter_item").removeClass("active");
  	var $i = $(this).find("i");

  	if( !$i.hasClass("arrow_up_red") ){
  		$(this).find("span").text("收起");
  		$i.addClass("arrow_up_red");
  		$(".filter_item:gt(2)").show();

  	}else{
  		$(this).find("span").text("更多选项（产地、口味、功效等）");
  		$i.removeClass("arrow_up_red");
  		$(".filter_item:gt(2)").hide();
  	}

  });

  $(".more_filter_con").on("click","a",function(){
  	var $i = $(this).find("i");
  	if( !$i.hasClass("arrow_up_red") ){
  		$(this).find("span").text("收起");
  		$i.addClass("arrow_up_red");
  		$(".brand_letters").show();
  		$(".filter_con_multiple").addClass("active");
  	}else{
  		$(this).find("span").text("更多");
  		$i.removeClass("arrow_up_red");
  		$(".brand_letters").hide();
  		$(".filter_con_multiple").removeClass("active");
  	}
  });

  $('input, textarea').placeholder();

}).call(this);