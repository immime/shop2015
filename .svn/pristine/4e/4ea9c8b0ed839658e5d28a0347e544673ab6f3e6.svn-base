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

		$(".shopcart_dialog").show().css({
			left:left_pos+$(this).outerWidth()+10,
			top:right_pos
		});

	});

	$(".icon_close").click(function(){
		$(".shopcart_dialog").hide();
	});

	$(".cancle_btn").click(function(){

		$(".shopcart_dialog").hide();

	});

	//用户登录注册 切换
	$(".tab_header").on("click","li",function(){

		$(".tab_header li").removeClass("active");

		$(this).addClass("active");

		var index = $(this).index();

		if( index == 0 ){
			$(".login_container").show();
			$(".register_container").hide();
		}else if( index == 1 ){
			$(".login_container").hide();
			$(".register_container").show();
		}

	});

	//用户注册 切换
	$("[name=register_type]").change(function(){

		var id = $(this).attr("id");

		if( id == "mobile_reg" ){
			$(".mobile_reg").show();
			$(".email_reg").hide();
		}else if( id == "email_reg" ){
			$(".mobile_reg").hide();
			$(".email_reg").show();
		}

	});

	//验证登录输入框

	$(".mobile_validate").blur(function(){

		var mobile = $(this).val();

		var pattern= /^((\+?86)|(\(\+86\)))?1\d{10}$/;



		if (!pattern.test(mobile)){
			$(".mobile_reg").addClass("error");

			var error = '<div class="error_tips mobile_error">请输入正确的11位手机号!</div>';

			$('.error_container').html(error);

		}else{
			$(".mobile_reg").removeClass("error").addClass("ok");
			$(".mobile_error").remove();
		}

	});

	$(".email_validate").blur(function(){
		var email = $(this).val();

		var pattern = /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/;

		if( !pattern.test(email) ){

			$(".email_reg").addClass("error");

			var error = '<div class="error_tips email_error">邮箱格式不正确!</div>';

			$('.error_container').html(error);

		}else{

			$(".email_reg").removeClass("error").addClass("ok");
			$(".email_error").remove();
		}

	});

	$(".password_validate").blur(function(){
		var pwd = $(this).val();

		var pattern = /^[\w.]{6,20}$/;

		if( !pattern.test(pwd) ){

			$(".pwd_reg").addClass("error");

			var error = '<div class="error_tips pwd_error">密码长度只能在6-20位字符之间!</div>';

			$('.error_container').html(error);

		}else{

			$(".pwd_reg").removeClass("error").addClass("ok");
			$(".pwd_error").remove();
		}

	});

	$(".compassword_validate").blur(function(){
		var compwd = $(this).val();

		var pwd = $(".password_validate").val();

		if( compwd != pwd ){

			$(".compwd_reg").addClass("error");

			var error = '<div class="error_tips compwd_error">两次密码输入不一样!</div>';

			$('.error_container').html(error);

		}else{

			$(".compwd_reg").removeClass("error").addClass("ok");
			$(".compwd_error").remove();
		}

	});

	//用户登录
	$(".btn_link").click(function(){

		$(".mask").show().animate({

			"opacity":0.3

		},300,function(){

			$(".user_dialog").show().animate({
				"margin-top":"-234px"
			},300);
		});

	});

	$(".icon_close,.cancel_btn").click(function(){

		$(".mask").animate({
			"opacity":0
		},300,function(){
			$(".mask").hide();
		});

		$(".model_dialog").animate({
			'margin-top':'-150px'
		},300,function(){
			$(".model_dialog").hide();
		});

	});

	//选中

	$(".cart_column_01").on("click",".icons",function(){
		//未选中->选中
		if( $(this).hasClass("icon_check") ){

			$(this).addClass("icon_checked").removeClass("icon_check");

		}else if( $(this).hasClass("icon_checked") ){
			$(this).removeClass("icon_checked").addClass("icon_check");
		}

	});

	// 全选 || 全不选

	$(".check_all").click(function(){
		//全选->全不选
		if( $(this).hasClass("checked") ){

			$(".check_all").removeClass("checked").addClass("check");

			$(this).removeClass("checked").addClass("check");

			$('.cart_column_01 .icons:not(".check_all")').removeClass("icon_checked").addClass("icon_check");

		}else if( $(this).hasClass("check") ){ //全不选->全选

			$(".check_all").removeClass("check").addClass("checked");

			$(this).removeClass("check").addClass("checked");

			$('.cart_column_01 .icons:not(".check_all")').addClass("icon_checked").removeClass("icon_check");

		}

	});

	//删除购物车商品
	$(".cart_list").on("click",".delete_shopcart",function(){

		$(".mask").show().animate({

			"opacity":0.3

		},300,function(){

			$(".warn_dialog").show().animate({
				"margin-top":"-170px"
			},300);
		});

	});

})(window)
