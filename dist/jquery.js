/* ! CompressJs by Yangfei 15-03-20*/
!function(a){a.fn.slide=function(b){return a.fn.slide.deflunt={effect:"fade",autoPlay:!0,delayTime:1e3,interTime:3e3,defaultIndex:0,titCell:".hd li",mainCell:".bd",trigger:"mouseover",scroll:1,vis:1,titOnClassName:"current",autoPage:!1,prevCell:".prev",nextCell:".next"},this.each(function(){var c=a.extend({},a.fn.slide.deflunt,b),d=c.defaultIndex,e=a(c.prevCell,a(this)),f=a(c.nextCell,a(this)),g=a(c.titCell,a(this)),h=g.size(),i=a(c.mainCell,a(this)),j=i.children().size(),k=0,l=0,m=0,n=0,o=c.autoPlay,p=null,q=d;if(!(j<c.vis)){if(0==h&&(h=j),c.autoPage){var r=j-c.vis;h=1+parseInt(r%c.scroll!=0?r/c.scroll+1:r/c.scroll),g.html("");for(var s=0;h>s;s++)g.append("<li>"+(s+1)+"</li>");var g=a("li",g)}switch(i.children().each(function(){a(this).width()>m&&(m=a(this).width(),l=a(this).outerWidth(!0)),a(this).height()>n&&(n=a(this).height(),k=a(this).outerHeight(!0))}),c.effect){case"top":i.wrap('<div class="tempWrap" style="overflow:hidden; position:relative; height:'+c.vis*k+'px"></div>').css({position:"relative",padding:"0",margin:"0"}).children().css({height:n});break;case"left":i.wrap('<div class="tempWrap" style="overflow:hidden; position:relative; width:'+c.vis*l+'px"></div>').css({width:j*l,position:"relative",overflow:"hidden",padding:"0",margin:"0"}).children().css({"float":"left",width:m});break;case"leftLoop":case"leftMarquee":i.children().clone().appendTo(i).clone().prependTo(i),i.wrap('<div class="tempWrap" style="overflow:hidden; position:relative; width:'+c.vis*l+'px"></div>').css({width:j*l*3,position:"relative",overflow:"hidden",padding:"0",margin:"0",left:-j*l}).children().css({"float":"left",width:m});break;case"topLoop":case"topMarquee":i.children().clone().appendTo(i).clone().prependTo(i),i.wrap('<div class="tempWrap" style="overflow:hidden; position:relative; height:'+c.vis*k+'px"></div>').css({height:j*k*3,position:"relative",padding:"0",margin:"0",top:-j*k}).children().css({height:n})}var t=function(){switch(c.effect){case"fade":case"top":case"left":d>=h?d=0:0>d&&(d=h-1);break;case"leftMarquee":case"topMarquee":d>=2?d=1:0>d&&(d=0);break;case"leftLoop":case"topLoop":var a=d-q;h>2&&a==-(h-1)&&(a=1),h>2&&a==h-1&&(a=-1);var b=Math.abs(a*c.scroll);d>=h?d=0:0>d&&(d=h-1)}switch(c.effect){case"fade":i.children().stop(!0,!0).eq(d).fadeIn(c.delayTime).siblings().hide();break;case"top":i.stop(!0,!0).animate({top:-d*c.scroll*k},c.delayTime);break;case"left":i.stop(!0,!0).animate({left:-d*c.scroll*l},c.delayTime);break;case"leftLoop":0>a?i.stop(!0,!0).animate({left:-(j-b)*l},c.delayTime,function(){for(var a=0;b>a;a++)i.children().last().prependTo(i);i.css("left",-j*l)}):i.stop(!0,!0).animate({left:-(j+b)*l},c.delayTime,function(){for(var a=0;b>a;a++)i.children().first().appendTo(i);i.css("left",-j*l)});break;case"topLoop":0>a?i.stop(!0,!0).animate({top:-(j-b)*k},c.delayTime,function(){for(var a=0;b>a;a++)i.children().last().prependTo(i);i.css("top",-j*k)}):i.stop(!0,!0).animate({top:-(j+b)*k},c.delayTime,function(){for(var a=0;b>a;a++)i.children().first().appendTo(i);i.css("top",-j*k)});break;case"leftMarquee":var e=i.css("left").replace("px","");0==d?i.animate({left:++e},0,function(){if(i.css("left").replace("px","")>=0){for(var a=0;j>a;a++)i.children().last().prependTo(i);i.css("left",-j*l)}}):i.animate({left:--e},0,function(){if(i.css("left").replace("px","")<=-j*l*2){for(var a=0;j>a;a++)i.children().first().appendTo(i);i.css("left",-j*l)}});break;case"topMarquee":var f=i.css("top").replace("px","");0==d?i.animate({top:++f},0,function(){if(i.css("top").replace("px","")>=0){for(var a=0;j>a;a++)i.children().last().prependTo(i);i.css("top",-j*k)}}):i.animate({top:--f},0,function(){if(i.css("top").replace("px","")<=-j*k*2){for(var a=0;j>a;a++)i.children().first().appendTo(i);i.css("top",-j*k)}})}g.removeClass(c.titOnClassName).eq(d).addClass(c.titOnClassName),q=d};t(),o&&("leftMarquee"==c.effect||"topMarquee"==c.effect?(d++,p=setInterval(t,c.interTime),i.hover(function(){o&&clearInterval(p)},function(){o&&(clearInterval(p),p=setInterval(t,c.interTime))})):(p=setInterval(function(){d++,t()},c.interTime),a(this).hover(function(){o&&clearInterval(p)},function(){o&&(clearInterval(p),p=setInterval(function(){d++,t()},c.interTime))})));var u;"mouseover"==c.trigger?g.hover(function(){clearTimeout(u),d=g.index(this),u=window.setTimeout(t,200)},function(){u||clearTimeout(u)}):g.click(function(){d=g.index(this),t()}),f.click(function(){d++,t()}),e.click(function(){d--,t()})}})}}(jQuery),!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a(jQuery)}(function(a){function b(b){var c={},d=/^jQuery\d+$/;return a.each(b.attributes,function(a,b){b.specified&&!d.test(b.name)&&(c[b.name]=b.value)}),c}function c(b,c){var d=this,f=a(d);if(d.value==f.attr("placeholder")&&f.hasClass(m.customClass))if(f.data("placeholder-password")){if(f=f.hide().nextAll('input[type="password"]:first').show().attr("id",f.removeAttr("id").data("placeholder-id")),b===!0)return f[0].value=c;f.focus()}else d.value="",f.removeClass(m.customClass),d==e()&&d.select()}function d(){var d,e=this,f=a(e),g=this.id;if(""===e.value){if("password"===e.type){if(!f.data("placeholder-textinput")){try{d=f.clone().attr({type:"text"})}catch(h){d=a("<input>").attr(a.extend(b(this),{type:"text"}))}d.removeAttr("name").data({"placeholder-password":f,"placeholder-id":g}).bind("focus.placeholder",c),f.data({"placeholder-textinput":d,"placeholder-id":g}).before(d)}f=f.removeAttr("id").hide().prevAll('input[type="text"]:first').attr("id",g).show()}f.addClass(m.customClass),f[0].value=f.attr("placeholder")}else f.removeClass(m.customClass)}function e(){try{return document.activeElement}catch(a){}}var f,g,h="[object OperaMini]"==Object.prototype.toString.call(window.operamini),i="placeholder"in document.createElement("input")&&!h,j="placeholder"in document.createElement("textarea")&&!h,k=a.valHooks,l=a.propHooks;if(i&&j)g=a.fn.placeholder=function(){return this},g.input=g.textarea=!0;else{var m={};g=a.fn.placeholder=function(b){var e={customClass:"placeholder"};m=a.extend({},e,b);var f=this;return f.filter((i?"textarea":":input")+"[placeholder]").not("."+m.customClass).bind({"focus.placeholder":c,"blur.placeholder":d}).data("placeholder-enabled",!0).trigger("blur.placeholder"),f},g.input=i,g.textarea=j,f={get:function(b){var c=a(b),d=c.data("placeholder-password");return d?d[0].value:c.data("placeholder-enabled")&&c.hasClass(m.customClass)?"":b.value},set:function(b,f){var g=a(b),h=g.data("placeholder-password");return h?h[0].value=f:g.data("placeholder-enabled")?(""===f?(b.value=f,b!=e()&&d.call(b)):g.hasClass(m.customClass)?c.call(b,!0,f)||(b.value=f):b.value=f,g):b.value=f}},i||(k.input=f,l.value=f),j||(k.textarea=f,l.value=f),a(function(){a(document).delegate("form","submit.placeholder",function(){var b=a("."+m.customClass,this).each(c);setTimeout(function(){b.each(d)},10)})}),a(window).bind("beforeunload.placeholder",function(){a("."+m.customClass).each(function(){this.value=""})})}});