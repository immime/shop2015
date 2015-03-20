#右侧菜单
$(".goodsCateSubTitle").click ()->
	$goodsCateSub = $(this).siblings(".goodsCateSub")
	if $goodsCateSub.is(":hidden")
		$goodsCateSub.show()
		if !$(this).parent().hasClass("goodsCateList_on")
			$(this).parent().addClass('active')
	else
		$goodsCateSub.hide()

#筛选条件
$(".more_pop_con").hover
	() ->
		$(this).find("a").addClass("active")
		$(".filter_item:visible:last").addClass("active")
	,
	() ->
		$(this).find("a").removeClass("active");
		$(".filter_item:visible:last").removeClass("active")

$(".more_filter_con a").click ()->

	if !$(this).find('i').hasClass("arrow_up_red")
			$(this).text("更多")







