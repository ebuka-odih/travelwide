/* Source and licensing information for the line(s) below can be found at https://www.libertytravel.com/modules/custom/hubspot_form_manager/js/singularity-general.js. */
(function($){var modalForm=document.createElement("div");modalForm.setAttribute('data-fcl-react-component','Form/Enquiry/GlobalQuote');modalForm.setAttribute('data-config','{}');document.querySelector('#singularity-form-container').appendChild(modalForm);window.buildSingularityForm=function(){var leadsourcename=Cookies.get('leadsourcename'),leadsourceId=Cookies.get('leadsourceId'),event=new CustomEvent('fc-singularity-mount',{detail:{element:modalForm,config:{conf:{leadSourceValue:leadsourcename,leadSourceId:leadsourceId,pageUrl:window.location.href}}}});document.dispatchEvent(event)}})(jQuery)
/* Source and licensing information for the above line(s) can be found at https://www.libertytravel.com/modules/custom/hubspot_form_manager/js/singularity-general.js. */;
/* Source and licensing information for the line(s) below can be found at https://www.libertytravel.com/modules/contrib/slick/js/slick.load.min.js. */
!function(i,n,s){"use strict";function l(l,t){function e(i){if(g.find(".b-lazy:not(.b-loaded)").length){var s=g.find(i?".slide:not(.slick-cloned) .b-lazy:not(.b-loaded)":".slick-active .b-lazy:not(.b-loaded)");s.length||(s=g.find(".slick-cloned .b-lazy:not(.b-loaded)")),s.length&&n.blazy.init.load(s)}}function a(){b&&r(),y&&e(!1)}function o(n){var s=i(n),l=s.closest(".slide")||s.closest(".unslick");s.parentsUntil(l).removeClass(function(i,n){return(n.match(/(\S+)loading/g)||[]).join(" ")});var t=s.closest(".media--background");t.length&&t.find("> img").length&&(t.css("background-image","url("+s.attr("src")+")"),t.find("> img").remove(),t.removeAttr("data-lazy"))}function d(){g.children().sort(function(){return.5-Math.random()}).each(function(){g.append(this)})}function c(i){var n=i.slideCount<=i.options.slidesToShow,s=n||!1===i.options.arrows;if(g.attr("id")===i.$slider.attr("id")){i.options.centerPadding&&"0"!==i.options.centerPadding||i.$list.css("padding",""),n&&i.$slideTrack.width()<=i.$slider.width()&&i.$slideTrack.css({left:"",transform:""});var l=g.find(".b-loaded ~ .b-loader");l.length&&l.remove(),p[s?"addClass":"removeClass"]("visually-hidden")}}function r(){g.removeClass("is-paused"),g.find(".is-playing").length&&g.find(".is-playing").removeClass("is-playing").find(".media__icon--close").click()}function u(){g.addClass("is-paused").slick("slickPause")}function f(s){return _?{}:{slide:s.slide,lazyLoad:s.lazyLoad,dotsClass:s.dotsClass,rtl:s.rtl,prevArrow:i(".slick-prev",p),nextArrow:i(".slick-next",p),appendArrows:p,customPaging:function(i,l){var t=i.$slides.eq(l).find("[data-thumb]")||null,e='<img alt="'+n.t(t.find("img").attr("alt"))+'" src="'+t.data("thumb")+'">',a=t.length&&s.dotsClass.indexOf("thumbnail")>0?'<div class="slick-dots__thumbnail">'+e+"</div>":"",o=i.defaults.customPaging(i,l);return a?o.add(a):o}}}var k,g=i("> .slick__slider",t).length?i("> .slick__slider",t):i(t),p=i("> .slick__arrow",t),h=g.data("slick")?i.extend({},s.slick,g.data("slick")):i.extend({},s.slick),m=!("array"!==i.type(h.responsive)||!h.responsive.length)&&h.responsive,v=h.appendDots,y="blazy"===h.lazyLoad&&n.blazy,b=g.find(".media--player").length,_=g.hasClass("unslick");if(_||(h.appendDots=".slick__arrow"===v?p:v||i(g)),m)for(k in m)Object.prototype.hasOwnProperty.call(m,k)&&"unslick"!==m[k].settings&&(m[k].settings=i.extend({},s.slick,f(h),m[k].settings));g.data("slick",h),h=g.data("slick"),function(){h.randomize&&!g.hasClass("slick-initiliazed")&&d(),_||g.on("init.sl",function(s,l){".slick__arrow"===v&&i(l.$dots).insertAfter(l.$prevArrow);var t=g.find(".slick-cloned.slick-active .b-lazy:not(.b-loaded)");y&&t.length&&n.blazy.init.load(t)}),y?g.on("beforeChange.sl",function(){e(!0)}):i(".media",g).closest(".slide__content").addClass("is-loading"),g.on("setPosition.sl",function(i,n){c(n)})}(),g.slick(f(h)),function(){g.parent().on("click.sl",".slick-down",function(n){n.preventDefault();var s=i(this);i("html, body").stop().animate({scrollTop:i(s.data("target")).offset().top-(s.data("offset")||0)},800,"easeOutQuad"in i.easing&&h.easing?h.easing:"swing")}),h.mouseWheel&&g.on("mousewheel.sl",function(i,n){return i.preventDefault(),g.slick(n<0?"slickNext":"slickPrev")}),y||g.on("lazyLoaded lazyLoadError",function(i,n,s){o(s)}),g.on("afterChange.sl",a),b&&(g.on("click.sl",".media__icon--close",r),g.on("click.sl",".media__icon--play",u))}(),_&&g.slick("unslick"),i(t).addClass("slick--initialized")}n.behaviors.slick={attach:function(n){i(".slick",n).once("slick").each(l)}}}(jQuery,Drupal,drupalSettings);

/* Source and licensing information for the above line(s) can be found at https://www.libertytravel.com/modules/contrib/slick/js/slick.load.min.js. */;
/* Source and licensing information for the line(s) below can be found at https://www.libertytravel.com/modules/custom/coop_block/js/coop-bottom-block.js. */
(function($){"use strict"
function shuffle(a){var j,x,i;for(i=a.length-1;i>0;i--){j=Math.floor(Math.random()*(i+1));x=a[i];a[i]=a[j];a[j]=x};return a}
function is_touch_device(){var prefixes=' -webkit- -moz- -o- -ms- '.split(' '),mq=function(query){return window.matchMedia(query).matches};if(('ontouchstart'in window)||window.DocumentTouch&&document instanceof DocumentTouch)return true;var query=['(',prefixes.join('touch-enabled),('),'heartz',')'].join('');return mq(query)};$(document).ready(function(){$.getJSON("/data/json/coop?_format=json&placement=bottom",function(result){if(result.length){$("#block-coopbottom h2").css("display","block");var adCount=0,allAds=[],outputHtml=[];$.each(result,function(i,field){adCount++;var thisAdHtml='<div class="ad"><a href="'+field.link+'" class="ad-link" data-ad-id="'+field.id+'" data-click-tag="'+field.tracking_name+'"><div class="ad_img_container objectFitFix"><img src="'+field.image+'" alt="'+field.alt+'" /></div><div class="ad_txt_container"><h3>'+field.headline+'</h3><div class="ad_text">'+field.text+'</div></div></a></div>',thisAd=[field.id,field.tracking_name,thisAdHtml];allAds.push(thisAd)});allAds=shuffle(allAds).slice(0,4);var promos=[];for(var n=0;n<allAds.length;n++){promos[n]={};promos[n].id=allAds[n][0];promos[n].name=allAds[n][1];outputHtml.push(allAds[n][2])};dataLayer.push({event:'promotionView',ecommerce:{promoView:{promotions:promos}}});outputHtml=outputHtml.join('');$("#coop-bottom-block").append(outputHtml);$('#coop-bottom-block').slick({dots:true,arrows:false,autoplay:false,slidesToShow:1,slidesToScroll:1,mobileFirst:true,responsive:[{breakpoint:767,settings:{slidesToShow:2,slidesToScroll:1}},{breakpoint:992,settings:{dots:false,slidesToShow:4,slidesToScroll:1}}]});$('#coop-bottom-block .objectFitFix').each(function(){var $container=$(this),imgUrl=$container.find('img').prop('src');if(imgUrl)$container.css('backgroundImage','url('+imgUrl+')').addClass('compat-object-fit')});$("a.ad-link").click(function(event){event.preventDefault();var promoClickData={};promoClickData.name=$(this).attr("data-click-tag");promoClickData.id=$(this).attr("data-ad-id");dataLayer.push({event:'promotionClick',ecommerce:{promoClick:{promotions:[promoClickData]}}});location.href=$(this).attr("href")})}})})})(jQuery)
/* Source and licensing information for the above line(s) can be found at https://www.libertytravel.com/modules/custom/coop_block/js/coop-bottom-block.js. */;
/* Source and licensing information for the line(s) below can be found at https://www.libertytravel.com/themes/custom/liberty_bootstrap/js/blog-carousel.js. */
(function($){"use strict";$('.view-blog-carousel .view-content').slick({dots:false,arrows:false,autoplay:true,autoplaySpeed:6e3,slidesToShow:1,slidesToScroll:1,mobileFirst:true})})(jQuery)
/* Source and licensing information for the above line(s) can be found at https://www.libertytravel.com/themes/custom/liberty_bootstrap/js/blog-carousel.js. */;
/* Source and licensing information for the line(s) below can be found at https://www.libertytravel.com/themes/custom/liberty_bootstrap/js/subnav-dropdown.js. */
(function($){"use strict";$(".subnav-desktop li").each(function(){var el=$(this);$("<li />",{html:el.html()}).appendTo(".subnav-mobile .dropdown-menu")});var active=$(".subnav-desktop .active a").text();if(active==='');else $(".subnav-mobile button").html(active+' <span class="caret"></span>')})(jQuery)
/* Source and licensing information for the above line(s) can be found at https://www.libertytravel.com/themes/custom/liberty_bootstrap/js/subnav-dropdown.js. */;
/* Source and licensing information for the line(s) below can be found at https://www.libertytravel.com/modules/custom/js_cookie/js/js.cookie.min.js. */
/*! js-cookie v2.2.1 | MIT */

!function(a){var b;if("function"==typeof define&&define.amd&&(define(a),b=!0),"object"==typeof exports&&(module.exports=a(),b=!0),!b){var c=window.Cookies,d=window.Cookies=a();d.noConflict=function(){return window.Cookies=c,d}}}(function(){function a(){for(var a=0,b={};a<arguments.length;a++){var c=arguments[a];for(var d in c)b[d]=c[d]}return b}function b(a){return a.replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent)}function c(d){function e(){}function f(b,c,f){if("undefined"!=typeof document){f=a({path:"/"},e.defaults,f),"number"==typeof f.expires&&(f.expires=new Date(1*new Date+864e5*f.expires)),f.expires=f.expires?f.expires.toUTCString():"";try{var g=JSON.stringify(c);/^[\{\[]/.test(g)&&(c=g)}catch(j){}c=d.write?d.write(c,b):encodeURIComponent(c+"").replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),b=encodeURIComponent(b+"").replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent).replace(/[\(\)]/g,escape);var h="";for(var i in f)f[i]&&(h+="; "+i,!0!==f[i]&&(h+="="+f[i].split(";")[0]));return document.cookie=b+"="+c+h}}function g(a,c){if("undefined"!=typeof document){for(var e={},f=document.cookie?document.cookie.split("; "):[],g=0;g<f.length;g++){var h=f[g].split("="),i=h.slice(1).join("=");c||'"'!==i.charAt(0)||(i=i.slice(1,-1));try{var j=b(h[0]);if(i=(d.read||d)(i,j)||b(i),c)try{i=JSON.parse(i)}catch(k){}if(e[j]=i,a===j)break}catch(k){}}return a?e[a]:e}}return e.set=f,e.get=function(a){return g(a,!1)},e.getJSON=function(a){return g(a,!0)},e.remove=function(b,c){f(b,"",a(c,{expires:-1}))},e.defaults={},e.withConverter=c,e}return c(function(){})});
/* Source and licensing information for the above line(s) can be found at https://www.libertytravel.com/modules/custom/js_cookie/js/js.cookie.min.js. */;
/* Source and licensing information for the line(s) below can be found at https://www.libertytravel.com/modules/custom/alerts/js/alerts.js. */
(function($){"use strict";$(document).ready(function(){$.getJSON("/data/json/alerts?_format=json",function(result){if(result.length){var alertCookie=Cookies.get('alert'+result[0].id);if(result[0].link){var outputHtml='<div class="message"><a href="'+result[0].link+'">'+result[0].message+'</a></div>'}else var outputHtml='<div class="message">'+result[0].message+'</div>';outputHtml+='<button type="button" id="close-alert">X</button>';if(alertCookie==null){$("#alerts").append(outputHtml);$("body").addClass("has-alert")};$("button#close-alert").click(function(event){$("#alerts").empty();$("body").removeClass("has-alert");Cookies.set('alert'+result[0].id,'dismissed')})}})})})(jQuery)
/* Source and licensing information for the above line(s) can be found at https://www.libertytravel.com/modules/custom/alerts/js/alerts.js. */;
/* Source and licensing information for the line(s) below can be found at https://www.libertytravel.com/modules/contrib/improved_multi_select/improved_multi_select.js. */
(function($){Drupal.behaviors.improved_multi_select={attach:function(context,settings){if(settings.improved_multi_select&&settings.improved_multi_select.selectors){var options=settings.improved_multi_select;for(var key in options.selectors){var selector=options.selectors[key];$(selector,context).once('improvedselect').each(function(){var $select=$(this),moveButtons='',improvedselect_id=$select.attr('id'),$cloned_select=null,cloned_select_id='';if(options.orderable){$cloned_select=$select.clone();cloned_select_id=$cloned_select.attr('id');cloned_select_id+='-cloned';$cloned_select.attr('id',cloned_select_id);$cloned_select.appendTo($select.parent()).hide();moveButtons='<span class="move_up" sid="'+$select.attr('id')+'">'+Drupal.checkPlain(options.buttontext_moveup)+'</span><span class="move_down" sid="'+$select.attr('id')+'">'+Drupal.checkPlain(options.buttontext_movedown)+'</span>'};$select.parent().append('<div class="improvedselect" sid="'+$select.attr('id')+'" id="improvedselect-'+$select.attr('id')+'"><div class="improvedselect-text-wrapper"><input type="text" class="improvedselect_filter" sid="'+$select.attr('id')+'" prev="" /></div><ul class="improvedselect_sel"></ul><ul class="improvedselect_all"></ul><div class="improvedselect_control"><span class="add" sid="'+$select.attr('id')+'">'+Drupal.checkPlain(options.buttontext_add)+'</span><span class="del" sid="'+$select.attr('id')+'">'+Drupal.checkPlain(options.buttontext_del)+'</span><span class="add_all" sid="'+$select.attr('id')+'">'+Drupal.checkPlain(options.buttontext_addall)+'</span><span class="del_all" sid="'+$select.attr('id')+'">'+Drupal.checkPlain(options.buttontext_delall)+'</span>'+moveButtons+'</div><div class="clear"></div></div>');if($select.find('optgroup').has('option').length>0){$select.parent().find('.improvedselect').addClass('has_group');$('#improvedselect-'+improvedselect_id+' .improvedselect-text-wrapper',context).after('<div class="improvedselect_tabs-wrapper" sid="'+$select.attr('id')+'"><ul class="improvedselect_tabs"></ul></div>');$select.find('optgroup').has('option').each(function(){$('#improvedselect-'+improvedselect_id+' .improvedselect_tabs',context).append('<li><a href="">'+$(this).attr('label')+'</a></li>')});$('#improvedselect-'+improvedselect_id+' .improvedselect_tabs',context).prepend('<li class="all"><a href="">'+Drupal.t('All')+'</a></li>');$('#improvedselect-'+improvedselect_id+' .improvedselect_tabs li a',context).click(function(e){var $group=$(this),sid=$group.parent().parent().parent().attr('sid');$('#improvedselect-'+improvedselect_id+' .improvedselect_tabs li.selected',context).removeClass('selected').find('a').unwrap();$group.wrap('<div>').parents('li').first().addClass('selected');if(!$group.hasClass('all'))$('#improvedselect-'+improvedselect_id+' .improvedselect_all li.selected[group!="'+$group.text()+'"]',context).removeClass('selected');if(options.groupresetfilter)$('#improvedselect-'+improvedselect_id+' .improvedselect_filter',context).val('');$('#improvedselect-'+improvedselect_id+' .improvedselect_filter',context).attr('prev','');improvedselectFilter(sid,options,context);e.preventDefault()});$('#improvedselect-'+improvedselect_id+' .improvedselect_tabs li.all a',context).click()};$select.find('option, optgroup').each(function(){var $opt=$(this),group='';if($opt[0].tagName=='OPTGROUP'){if($opt.has('option').length)$('#improvedselect-'+improvedselect_id+' .improvedselect_all',context).append('<li isgroup="isgroup" so="---'+$opt.attr('label')+'---">--- '+$opt.attr('label')+' ---</li>')}else{group=$opt.parent("optgroup").attr("label");if(group)group=' group="'+group+'"';if($opt.attr('value')!="_none")if($opt.attr('selected')){$('#improvedselect-'+improvedselect_id+' .improvedselect_sel',context).append('<li so="'+$opt.attr('value')+'"'+group+'>'+$opt.html()+'</li>')}else $('#improvedselect-'+improvedselect_id+' .improvedselect_all',context).append('<li so="'+$opt.attr('value')+'"'+group+'>'+$opt.html()+'</li>')}});$('#improvedselect-'+improvedselect_id+' .improvedselect_sel li, #improvedselect-'+improvedselect_id+' .improvedselect_all li[isgroup!="isgroup"]',context).click(function(){$(this).toggleClass('selected')});$select.hide();$('#improvedselect-'+improvedselect_id+' .improvedselect_sel li, #improvedselect-'+improvedselect_id+' .improvedselect_all li[isgroup!="isgroup"]',context).dblclick(function(){var selected=$(this).parent().find('li.selected'),current_class=$(this).parent().attr('class');if(current_class=='improvedselect_all'){$(this).parent().find('li.selected').removeClass('selected');$(this).addClass('selected');$(this).parent().parent().find('.add').click()}else{$(this).parent().find('li.selected').removeClass('selected');$(this).addClass('selected');$(this).parent().parent().find('.del').click()};if(selected.length)for(var k=0;k<selected.length;k++)if($(selected[k]).parent().attr('class')==current_class)$(selected[k]).addClass('selected')});$('.improvedselect_sel, .improvedselect_all').each(function(){if($(this).parent().height()>0)$(this).height($(this).parent().height()-35)})})};$('.improvedselect_filter',context).bind('input',function(){improvedselectFilter($(this).attr('sid'),options,context)});$('.improvedselect .add',context).click(function(){var sid=$(this).attr('sid');$('#improvedselect-'+sid+' .improvedselect_all .selected',context).each(function(){$opt=$(this);$opt.removeClass('selected');improvedselectUpdateGroupVisibility($opt,1);$('#improvedselect-'+sid+' .improvedselect_sel',context).append($opt)});improvedselectUpdate(sid,context)});$('.improvedselect .del',context).click(function(){var sid=$(this).attr('sid');$('#improvedselect-'+sid+' .improvedselect_sel .selected',context).each(function(){$opt=$(this);$opt.removeClass('selected');$('#improvedselect-'+sid+' .improvedselect_all',context).append($opt);improvedselectUpdateGroupVisibility($opt,0)});$('#improvedselect-'+sid+' .improvedselect_filter',context).attr('prev','');improvedselectFilter(sid,options,context);improvedselectUpdate(sid,context)});$('.improvedselect .add_all',context).click(function(){var sid=$(this).attr('sid');$('#improvedselect-'+sid+' .improvedselect_all li[isgroup!=isgroup]',context).each(function(){$opt=$(this);if($opt.css('display')!='none'){$opt.removeClass('selected');improvedselectUpdateGroupVisibility($opt,1);$('#improvedselect-'+sid+' .improvedselect_sel',context).append($opt)}});improvedselectUpdate(sid,context)});$('.improvedselect .del_all',context).click(function(){var sid=$(this).attr('sid');$('#improvedselect-'+sid+' .improvedselect_sel li',context).each(function(){$opt=$(this);$opt.removeClass('selected');$('#improvedselect-'+sid+' .improvedselect_all',context).append($opt);improvedselectUpdateGroupVisibility($opt,0)});$('#improvedselect-'+sid+' .improvedselect_filter',context).attr('prev','');improvedselectFilter(sid,options,context);improvedselectUpdate(sid,context)});$('.improvedselect .move_up',context).click(function(){var sid=$(this).attr('sid');$('#improvedselect-'+sid+' .improvedselect_sel .selected',context).each(function(){var $selected=$(this);$selected.prev(':not(.selected)').before($selected)});improvedselectUpdate(sid,context)});$('.improvedselect .move_down',context).click(function(){var sid=$(this).attr('sid');$($('#improvedselect-'+sid+' .improvedselect_sel .selected',context).get().reverse()).each(function(){var $selected=$(this);$selected.next(':not(.selected)').after($selected)});improvedselectUpdate(sid,context)});$('.improvedselect li',context).click(function(e){var current=$(e.target),container=current.parent('ul'),previous=$('.lastSelected',container),addClass=previous.hasClass('selected'),rangeItems;if(e.shiftKey)if(previous.length){if(previous[0]==current[0])return false;if(current.nextAll('.lastSelected').length>0){rangeItems=current.nextUntil('.lastSelected','li')}else{current.addClass('current');rangeItems=previous.nextUntil('.current','li');current.removeClass('current')};rangeItems.push(current[0]);if(addClass){$(rangeItems).each(function(){if($(this).attr('isgroup')!='isgroup')$(this).addClass('selected')})}else rangeItems.removeClass('selected')};$('li',container).removeClass('lastSelected');$(this).addClass('lastSelected')});$.event.trigger('improvedMultiSelectInitialized',[$(this)])};$.event.trigger('improvedMultiSelectAttached')}}
function improvedselectFilter(sid,options,context){$filter=$('#improvedselect-'+sid+' .improvedselect_filter',context);var $selectedGroup=$('#improvedselect-'+sid+' .improvedselect_tabs li.selected:not(.all) a',context),text=$filter.val(),pattern,regex,words;if(text.length&&text!=$filter.attr('prev')){$filter.attr('prev',text);switch(options.filtertype){case'partial':default:pattern=text;break;case'exact':pattern='^'+text+'$';break;case'anywords':words=text.split(' ');pattern='';for(var i=0;i<words.length;i++)if(words[i])pattern+=pattern?'|\\b'+words[i]+'\\b':'\\b'+words[i]+'\\b';break;case'anywords_partial':words=text.split(' ');pattern='';for(var i=0;i<words.length;i++)if(words[i])pattern+=pattern?'|'+words[i]+'':words[i];break;case'allwords':words=text.split(' ');pattern='^';for(var i=0;i<words.length;i++)if(words[i])pattern+='(?=.*?\\b'+words[i]+'\\b)';break;case'allwords_partial':words=text.split(' ');pattern='^';for(var i=0;i<words.length;i++)if(words[i])pattern+='(?=.*?'+words[i]+')';break};regex=new RegExp(pattern,'i');$('#improvedselect-'+sid+' .improvedselect_all li',context).each(function(){$opt=$(this);if($opt.attr('isgroup')!='isgroup'){var str=$opt.text();if(str.match(regex)&&(!$selectedGroup.length||$selectedGroup.text()==$opt.attr('group'))){$opt.show();if($opt.attr('group'))if(!$selectedGroup.length){$opt.siblings('li[isgroup="isgroup"][so="---'+$opt.attr('group')+'---"]').show()}else $opt.siblings('li[isgroup="isgroup"][so="---'+$opt.attr('group')+'---"]').hide()}else{$opt.hide();if($opt.attr('group'))if($opt.siblings('li[isgroup!="isgroup"][group="'+$opt.attr('group')+'"]:visible').length==0)$opt.siblings('li[isgroup="isgroup"][so="---'+$opt.attr('group')+'---"]').hide()}}})}else{if(!text.length)$filter.attr('prev','');$('#improvedselect-'+sid+' .improvedselect_all li',context).each(function(){var $opt=$(this);if($opt.attr('isgroup')!='isgroup'){if(!$selectedGroup.length||$selectedGroup.text()==$opt.attr('group')){$opt.show()}else $opt.hide();improvedselectUpdateGroupVisibility($opt,0)}})}}
function improvedselectUpdateGroupVisibility($opt,numItems){var $selectedGroup=$opt.parents('.improvedselect').first().find('.improvedselect_tabs li.selected:not(.all) a');if($opt.parent().children('li[isgroup!="isgroup"][group="'+$opt.attr('group')+'"]:visible').length<=numItems||$selectedGroup.length){$opt.siblings('li[isgroup="isgroup"][so="---'+$opt.attr('group')+'---"]').hide()}else $opt.siblings('li[isgroup="isgroup"][so="---'+$opt.attr('group')+'---"]').show()}
function improvedselectUpdate(sid,context){var $select=$('#'+sid),$cloned_select=$('#'+sid+'-cloned');if($cloned_select.length){$select.find('option, optgroup').remove();$('#improvedselect-'+sid+' .improvedselect_sel li',context).each(function(){var $li=$(this);$select.append($('<option></option>').attr('value',$li.attr('so')).attr('selected','selected').text($li.text()))});$select=$cloned_select}else{$select.find('option:selected').attr("selected",false);$('#improvedselect-'+sid+' .improvedselect_sel li',context).each(function(){$('#'+sid+' [value="'+$(this).attr('so')+'"]',context).attr("selected","selected")})};$select.find('option, optgroup').each(function(){$opt=$(this);if($opt[0].tagName=='OPTGROUP'){if($opt.has('option').length)$('#improvedselect-'+sid+' .improvedselect_all',context).append($('#improvedselect-'+sid+' .improvedselect_all [so="---'+$opt.attr('label')+'---"]',context))}else if($opt.attr("selected")){$('#improvedselect-'+sid+' .improvedselect_sel',context).append($('#improvedselect-'+sid+' .improvedselect_sel [so="'+$opt.attr('value')+'"]',context))}else $('#improvedselect-'+sid+' .improvedselect_all',context).append($('#improvedselect-'+sid+' .improvedselect_all [so="'+$opt.attr('value')+'"]',context))});$('#'+sid,context).trigger('change')}})(jQuery,Drupal)
/* Source and licensing information for the above line(s) can be found at https://www.libertytravel.com/modules/contrib/improved_multi_select/improved_multi_select.js. */;
