(function(){

	$(".address_container li:not('.default_address_container')").hover(function(){
		if( !$(this).hasClass("add_address") )
			$(this).addClass("active");
			$(this).find(".address_xuanzhong").show();
			$(this).find(".default_address").show();
	},function(){
		$(this).removeClass("active");
		$(this).find(".address_xuanzhong").hide();
		$(this).find(".default_address").hide();
	});

	//支付方式提示
	$(".order_payments_list a").hover(function(){
		$(this).find(".tips").show();
	},function(){
		$(this).find(".tips").hide();
	});

	$(".fee_tips").hover(function(){

		$(this).parent(".order_accounts_detail_left").siblings(".tips").show();
	},function(){
		$(this).parent(".order_accounts_detail_left").siblings(".tips").hide();
	});

	//新增地址
	$(".new_address,.add_address,.edit_address").click(function(){

		$(".mask").show().animate({

			"opacity":0.3

		},300,function(){

			$(".new_address_dialog").show().animate({
				"margin-top":"-170px"
			},300);
		});
	});

	//删除收货地址
	$(".delete_address").click(function(){
		$(".mask").show().animate({

			"opacity":0.3

		},300,function(){

			$(".warn_dialog").show().animate({
				"margin-top":"-170px"
			},300);
		});

	});

	$(".icon_close,.common_btn").on("click",function(){
		$(".mask").animate({
			"opacity":0
		},300,function(){
			$(".mask").hide();
		});

		$(".order_detail_dialog").animate({
			'margin-top':'-130px'
		},300,function(){
			$(".order_detail_dialog").hide();
		});
	});

	$(".new_add_receipt").click(function(){
		var new_add_receipt_li = "";

		new_add_receipt_li += '<li class="new_receipt_li">'
		                   +         '<span>'
		                   +             '<input type="text" placeholder="新增单位发票抬头" class="new_add_receipt_input">'
		                   +         '</span>'
		                   +         '<div>'
		                   +             '<a href="">保存</a>'
		                   +             '<a href="" class="javascript:;">取消</a>'
		                   +         '</div>'
		                   +         '<span class="icons taitou_jiaobiao"></span>'
		                   +     '</li>';
	    $(".receipt_taitou").append(new_add_receipt_li);
		$(".receipt_taitou").scrollTop(100);

		$(this).hide();
	});

	//修改发票
	$(".modify_recepit").click(function(){

		var scrollTop = $(window).scrollTop();

		$(".mask").show().animate({

			"opacity":0.3

		},300,function(){

			$(".receipt_dialog").show().animate({

				"margin-top":scrollTop-170

			},300);
		});


	});


	//抬头编辑
	$(".receipt_taitou").on("click",".edit_taitou",function(){

		var $span = $(this).parent("div").siblings("span");
		var input_str = "<input type='text' class='new_add_receipt_input' value='"+$span.text()+"'>";
		$span.html(input_str);

		$span.find(".new_add_receipt_input").focus();

		var taitou_operation_str = '<a href="javascript:;" class="edit_save">保存</a><a href="javascript:;" class="cancle_taitou">取消</a>';

		$(this).parents(".taitou_operation").html(taitou_operation_str);

	});

	//抬头取消
	$(".receipt_taitou").on("click",".cancle_taitou",function(){
		var $span = $(this).parent("div").siblings("span");
		var txt = $span.find(".new_add_receipt_input").val();
		$span.html(txt);
		var taitou_operation_str = ' <a href="javascript:;" class="edit_taitou">编辑</a><a href="javascript:;" class="delete_taitou">删除</a>';
		$(this).parents(".taitou_operation").html(taitou_operation_str);
	});

	//抬头删除
	$(".receipt_taitou").on("click",".delete_taitou",function(){

	});

	//选择抬头
	$(".receipt_taitou").on("click","li",function(){
		if( $(this).hasClass('new_receipt_li') ){
			return;
		}
		$(".receipt_taitou li").removeClass("active");
		$(this).addClass("active");

	});

	//省市区三级联动
	$(".new_address_container").on("click",".select_like_con",function(){

		$(".province_list").hide();

		$(this).find(".province_list").show();

	});

	$(".new_address_container").on("click","li",function(event){

		var val = $(this).text();

		$(this).parent(".province_list").hide();
		$(this).parents(".select_like_con").find('span').text(val);

		event.stopPropagation();
	});

	//优惠券
	$(".coupon_operator").click(function(){

		if( $(this).hasClass("active") ){

			$(".coupon_list").hide();
			$(this).find(".collpose").text("+");
			$(this).removeClass("active");
		}else{

			$(".coupon_list").show();
			$(this).find(".collpose").text("-");
			$(this).addClass("active");
		}

	});

	//优惠券切换
	$(".coupon_list_container").on("click",".coupon_list_title",function(){

		$(".coupon_list_title").removeClass('active');

		$(this).addClass("active");

		var index = $(this).index();
		if( index == 0 ){
			$(".coupon_available").show();
			$(".coupon_unavailable").hide();
		}else if( index == 1 ){
			$(".coupon_available").hide();
			$(".coupon_unavailable").show();
		}
	});

	//波奇豆
	$(".boqiibean_operator").click(function(){

		if( $(this).hasClass("active") ){

			$(".boqiibean_use_container").hide();
			$(this).find(".collpose").text("+");
			$(this).removeClass("active");
		}else{

			$(".boqiibean_use_container").show();
			$(this).find(".collpose").text("-");
			$(this).addClass("active");
		}
	});

	//支付方式选中
	$(".order_payments").on("click","a",function(){
		if( $(this).hasClass("no_support") ){
			return;
		}
		$(".order_payments_list a").removeClass("active");

		$(this).addClass("active");

	});

	//配送方式选中
	$(".order_peisong").on("click","strong",function(){

		$(".order_peisong_block").removeClass("active");

		$(this).parents(".order_peisong_block").addClass("active");

	});

	//发票选中
	$(".new_address_container").on("click",".receipt_type",function(){

		$(".receipt_type",$(".new_address_container")).removeClass("active");

		$(this).addClass("active");

	});

	$(".receipt_content").on('click',".receipt_type",function(){

		$(".receipt_type",$(".receipt_content")).removeClass("active");
		$(this).addClass("active");

	});

	//收货人地址选择
	var $address_ul = $(".address_container").find("ul");
	var $li = $address_ul.find("li");
	var li_nums = $li.length;

	var item_width = $li.outerWidth()+10;

	var iNow = 0;

	$(".prev_btn").click(function(){
		iNow--;
		if(iNow<0){

			iNow = 0;

		}else{

			$address_ul.animate({
				left:"+="+item_width
			},500);

		}

		console.log(iNow);
	});

	$(".next_btn").click(function(){
		if( li_nums>4 )
			if( iNow < li_nums-2 ){
				iNow++;
				$address_ul.animate({
					left:"-="+item_width
				},500);
			}
			console.log(iNow)
	});

	//查看汇款信息
	$(".remittance").click(function(event){
		var url = $(this).data("url");
		window.location.href = url;
		event.stopPropagation();
	})

})(window);
