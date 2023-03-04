/* Source and licensing information for the line(s) below can be found at https://www.libertytravel.com/modules/contrib/addtoany/js/addtoany.js. */
(function(Drupal){'use strict';Drupal.behaviors.addToAny={attach:function(context,settings){if(context!==document&&window.a2a)a2a.init_all()}}})(Drupal)
/* Source and licensing information for the above line(s) can be found at https://www.libertytravel.com/modules/contrib/addtoany/js/addtoany.js. */;
/* Source and licensing information for the line(s) below can be found at https://www.libertytravel.com/themes/custom/liberty_bootstrap/bootstrap/assets/javascripts/bootstrap/affix.js. */
+function($){'use strict';var Affix=function(element,options){this.options=$.extend({},Affix.DEFAULTS,options);this.$target=$(this.options.target).on('scroll.bs.affix.data-api',$.proxy(this.checkPosition,this)).on('click.bs.affix.data-api',$.proxy(this.checkPositionWithEventLoop,this));this.$element=$(element);this.affixed=null;this.unpin=null;this.pinnedOffset=null;this.checkPosition()};Affix.VERSION='3.3.7';Affix.RESET='affix affix-top affix-bottom';Affix.DEFAULTS={offset:0,target:window};Affix.prototype.getState=function(scrollHeight,height,offsetTop,offsetBottom){var scrollTop=this.$target.scrollTop(),position=this.$element.offset(),targetHeight=this.$target.height();if(offsetTop!=null&&this.affixed=='top')return scrollTop<offsetTop?'top':false;if(this.affixed=='bottom'){if(offsetTop!=null)return(scrollTop+this.unpin<=position.top)?false:'bottom';return(scrollTop+targetHeight<=scrollHeight-offsetBottom)?false:'bottom'};var initializing=this.affixed==null,colliderTop=initializing?scrollTop:position.top,colliderHeight=initializing?targetHeight:height;if(offsetTop!=null&&scrollTop<=offsetTop)return'top';if(offsetBottom!=null&&(colliderTop+colliderHeight>=scrollHeight-offsetBottom))return'bottom';return false};Affix.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(Affix.RESET).addClass('affix');var scrollTop=this.$target.scrollTop(),position=this.$element.offset();return(this.pinnedOffset=position.top-scrollTop)};Affix.prototype.checkPositionWithEventLoop=function(){setTimeout($.proxy(this.checkPosition,this),1)};Affix.prototype.checkPosition=function(){if(!this.$element.is(':visible'))return;var height=this.$element.height(),offset=this.options.offset,offsetTop=offset.top,offsetBottom=offset.bottom,scrollHeight=Math.max($(document).height(),$(document.body).height());if(typeof offset!='object')offsetBottom=offsetTop=offset;if(typeof offsetTop=='function')offsetTop=offset.top(this.$element);if(typeof offsetBottom=='function')offsetBottom=offset.bottom(this.$element);var affix=this.getState(scrollHeight,height,offsetTop,offsetBottom);if(this.affixed!=affix){if(this.unpin!=null)this.$element.css('top','');var affixType='affix'+(affix?'-'+affix:''),e=$.Event(affixType+'.bs.affix');this.$element.trigger(e);if(e.isDefaultPrevented())return;this.affixed=affix;this.unpin=affix=='bottom'?this.getPinnedOffset():null;this.$element.removeClass(Affix.RESET).addClass(affixType).trigger(affixType.replace('affix','affixed')+'.bs.affix')};if(affix=='bottom')this.$element.offset({top:scrollHeight-height-offsetBottom})}
function Plugin(option){return this.each(function(){var $this=$(this),data=$this.data('bs.affix'),options=typeof option=='object'&&option;if(!data)$this.data('bs.affix',(data=new Affix(this,options)));if(typeof option=='string')data[option]()})};var old=$.fn.affix;$.fn.affix=Plugin;$.fn.affix.Constructor=Affix;$.fn.affix.noConflict=function(){$.fn.affix=old;return this};$(window).on('load',function(){$('[data-spy="affix"]').each(function(){var $spy=$(this),data=$spy.data();data.offset=data.offset||{};if(data.offsetBottom!=null)data.offset.bottom=data.offsetBottom;if(data.offsetTop!=null)data.offset.top=data.offsetTop;Plugin.call($spy,data)})})}(jQuery)
/* Source and licensing information for the above line(s) can be found at https://www.libertytravel.com/themes/custom/liberty_bootstrap/bootstrap/assets/javascripts/bootstrap/affix.js. */;
/* Source and licensing information for the line(s) below can be found at https://www.libertytravel.com/themes/custom/liberty_bootstrap/bootstrap/assets/javascripts/bootstrap/alert.js. */
+function($){'use strict';var dismiss='[data-dismiss="alert"]',Alert=function(el){$(el).on('click',dismiss,this.close)};Alert.VERSION='3.3.7';Alert.TRANSITION_DURATION=150;Alert.prototype.close=function(e){var $this=$(this),selector=$this.attr('data-target');if(!selector){selector=$this.attr('href');selector=selector&&selector.replace(/.*(?=#[^\s]*$)/,'')};var $parent=$(selector==='#'?[]:selector);if(e)e.preventDefault();if(!$parent.length)$parent=$this.closest('.alert');$parent.trigger(e=$.Event('close.bs.alert'));if(e.isDefaultPrevented())return;$parent.removeClass('in')
function removeElement(){$parent.detach().trigger('closed.bs.alert').remove()};$.support.transition&&$parent.hasClass('fade')?$parent.one('bsTransitionEnd',removeElement).emulateTransitionEnd(Alert.TRANSITION_DURATION):removeElement()}
function Plugin(option){return this.each(function(){var $this=$(this),data=$this.data('bs.alert');if(!data)$this.data('bs.alert',(data=new Alert(this)));if(typeof option=='string')data[option].call($this)})};var old=$.fn.alert;$.fn.alert=Plugin;$.fn.alert.Constructor=Alert;$.fn.alert.noConflict=function(){$.fn.alert=old;return this};$(document).on('click.bs.alert.data-api',dismiss,Alert.prototype.close)}(jQuery)
/* Source and licensing information for the above line(s) can be found at https://www.libertytravel.com/themes/custom/liberty_bootstrap/bootstrap/assets/javascripts/bootstrap/alert.js. */;
/* Source and licensing information for the line(s) below can be found at https://www.libertytravel.com/themes/custom/liberty_bootstrap/bootstrap/assets/javascripts/bootstrap/button.js. */
+function($){'use strict';var Button=function(element,options){this.$element=$(element);this.options=$.extend({},Button.DEFAULTS,options);this.isLoading=false};Button.VERSION='3.3.7';Button.DEFAULTS={loadingText:'loading...'};Button.prototype.setState=function(state){var d='disabled',$el=this.$element,val=$el.is('input')?'val':'html',data=$el.data();state+='Text';if(data.resetText==null)$el.data('resetText',$el[val]());setTimeout($.proxy(function(){$el[val](data[state]==null?this.options[state]:data[state]);if(state=='loadingText'){this.isLoading=true;$el.addClass(d).attr(d,d).prop(d,true)}else if(this.isLoading){this.isLoading=false;$el.removeClass(d).removeAttr(d).prop(d,false)}},this),0)};Button.prototype.toggle=function(){var changed=true,$parent=this.$element.closest('[data-toggle="buttons"]');if($parent.length){var $input=this.$element.find('input');if($input.prop('type')=='radio'){if($input.prop('checked'))changed=false;$parent.find('.active').removeClass('active');this.$element.addClass('active')}else if($input.prop('type')=='checkbox'){if(($input.prop('checked'))!==this.$element.hasClass('active'))changed=false;this.$element.toggleClass('active')};$input.prop('checked',this.$element.hasClass('active'));if(changed)$input.trigger('change')}else{this.$element.attr('aria-pressed',!this.$element.hasClass('active'));this.$element.toggleClass('active')}}
function Plugin(option){return this.each(function(){var $this=$(this),data=$this.data('bs.button'),options=typeof option=='object'&&option;if(!data)$this.data('bs.button',(data=new Button(this,options)));if(option=='toggle'){data.toggle()}else if(option)data.setState(option)})};var old=$.fn.button;$.fn.button=Plugin;$.fn.button.Constructor=Button;$.fn.button.noConflict=function(){$.fn.button=old;return this};$(document).on('click.bs.button.data-api','[data-toggle^="button"]',function(e){var $btn=$(e.target).closest('.btn');Plugin.call($btn,'toggle');if(!($(e.target).is('input[type="radio"], input[type="checkbox"]'))){e.preventDefault();if($btn.is('input,button')){$btn.trigger('focus')}else $btn.find('input:visible,button:visible').first().trigger('focus')}}).on('focus.bs.button.data-api blur.bs.button.data-api','[data-toggle^="button"]',function(e){$(e.target).closest('.btn').toggleClass('focus',/^focus(in)?$/.test(e.type))})}(jQuery)
/* Source and licensing information for the above line(s) can be found at https://www.libertytravel.com/themes/custom/liberty_bootstrap/bootstrap/assets/javascripts/bootstrap/button.js. */;
/* Source and licensing information for the line(s) below can be found at https://www.libertytravel.com/themes/custom/liberty_bootstrap/bootstrap/assets/javascripts/bootstrap/carousel.js. */
+function($){'use strict';var Carousel=function(element,options){this.$element=$(element);this.$indicators=this.$element.find('.carousel-indicators');this.options=options;this.paused=null;this.sliding=null;this.interval=null;this.$active=null;this.$items=null;this.options.keyboard&&this.$element.on('keydown.bs.carousel',$.proxy(this.keydown,this));this.options.pause=='hover'&&!('ontouchstart'in document.documentElement)&&this.$element.on('mouseenter.bs.carousel',$.proxy(this.pause,this)).on('mouseleave.bs.carousel',$.proxy(this.cycle,this))};Carousel.VERSION='3.3.7';Carousel.TRANSITION_DURATION=600;Carousel.DEFAULTS={interval:5e3,pause:'hover',wrap:true,keyboard:true};Carousel.prototype.keydown=function(e){if(/input|textarea/i.test(e.target.tagName))return;switch(e.which){case 37:this.prev();break;case 39:this.next();break;default:return};e.preventDefault()};Carousel.prototype.cycle=function(e){e||(this.paused=false);this.interval&&clearInterval(this.interval);this.options.interval&&!this.paused&&(this.interval=setInterval($.proxy(this.next,this),this.options.interval));return this};Carousel.prototype.getItemIndex=function(item){this.$items=item.parent().children('.item');return this.$items.index(item||this.$active)};Carousel.prototype.getItemForDirection=function(direction,active){var activeIndex=this.getItemIndex(active),willWrap=(direction=='prev'&&activeIndex===0)||(direction=='next'&&activeIndex==(this.$items.length-1));if(willWrap&&!this.options.wrap)return active;var delta=direction=='prev'?-1:1,itemIndex=(activeIndex+delta)%this.$items.length;return this.$items.eq(itemIndex)};Carousel.prototype.to=function(pos){var that=this,activeIndex=this.getItemIndex(this.$active=this.$element.find('.item.active'));if(pos>(this.$items.length-1)||pos<0)return;if(this.sliding)return this.$element.one('slid.bs.carousel',function(){that.to(pos)});if(activeIndex==pos)return this.pause().cycle();return this.slide(pos>activeIndex?'next':'prev',this.$items.eq(pos))};Carousel.prototype.pause=function(e){e||(this.paused=true);if(this.$element.find('.next, .prev').length&&$.support.transition){this.$element.trigger($.support.transition.end);this.cycle(true)};this.interval=clearInterval(this.interval);return this};Carousel.prototype.next=function(){if(this.sliding)return;return this.slide('next')};Carousel.prototype.prev=function(){if(this.sliding)return;return this.slide('prev')};Carousel.prototype.slide=function(type,next){var $active=this.$element.find('.item.active'),$next=next||this.getItemForDirection(type,$active),isCycling=this.interval,direction=type=='next'?'left':'right',that=this;if($next.hasClass('active'))return(this.sliding=false);var relatedTarget=$next[0],slideEvent=$.Event('slide.bs.carousel',{relatedTarget:relatedTarget,direction:direction});this.$element.trigger(slideEvent);if(slideEvent.isDefaultPrevented())return;this.sliding=true;isCycling&&this.pause();if(this.$indicators.length){this.$indicators.find('.active').removeClass('active');var $nextIndicator=$(this.$indicators.children()[this.getItemIndex($next)]);$nextIndicator&&$nextIndicator.addClass('active')};var slidEvent=$.Event('slid.bs.carousel',{relatedTarget:relatedTarget,direction:direction});if($.support.transition&&this.$element.hasClass('slide')){$next.addClass(type);$next[0].offsetWidth;$active.addClass(direction);$next.addClass(direction);$active.one('bsTransitionEnd',function(){$next.removeClass([type,direction].join(' ')).addClass('active');$active.removeClass(['active',direction].join(' '));that.sliding=false;setTimeout(function(){that.$element.trigger(slidEvent)},0)}).emulateTransitionEnd(Carousel.TRANSITION_DURATION)}else{$active.removeClass('active');$next.addClass('active');this.sliding=false;this.$element.trigger(slidEvent)};isCycling&&this.cycle();return this}
function Plugin(option){return this.each(function(){var $this=$(this),data=$this.data('bs.carousel'),options=$.extend({},Carousel.DEFAULTS,$this.data(),typeof option=='object'&&option),action=typeof option=='string'?option:options.slide;if(!data)$this.data('bs.carousel',(data=new Carousel(this,options)));if(typeof option=='number'){data.to(option)}else if(action){data[action]()}else if(options.interval)data.pause().cycle()})};var old=$.fn.carousel;$.fn.carousel=Plugin;$.fn.carousel.Constructor=Carousel;$.fn.carousel.noConflict=function(){$.fn.carousel=old;return this};var clickHandler=function(e){var href,$this=$(this),$target=$($this.attr('data-target')||(href=$this.attr('href'))&&href.replace(/.*(?=#[^\s]+$)/,''));if(!$target.hasClass('carousel'))return;var options=$.extend({},$target.data(),$this.data()),slideIndex=$this.attr('data-slide-to');if(slideIndex)options.interval=false;Plugin.call($target,options);if(slideIndex)$target.data('bs.carousel').to(slideIndex);e.preventDefault()};$(document).on('click.bs.carousel.data-api','[data-slide]',clickHandler).on('click.bs.carousel.data-api','[data-slide-to]',clickHandler);$(window).on('load',function(){$('[data-ride="carousel"]').each(function(){var $carousel=$(this);Plugin.call($carousel,$carousel.data())})})}(jQuery)
/* Source and licensing information for the above line(s) can be found at https://www.libertytravel.com/themes/custom/liberty_bootstrap/bootstrap/assets/javascripts/bootstrap/carousel.js. */;
/* Source and licensing information for the line(s) below can be found at https://www.libertytravel.com/themes/custom/liberty_bootstrap/bootstrap/assets/javascripts/bootstrap/collapse.js. */
+function($){'use strict';var Collapse=function(element,options){this.$element=$(element);this.options=$.extend({},Collapse.DEFAULTS,options);this.$trigger=$('[data-toggle="collapse"][href="#'+element.id+'"],[data-toggle="collapse"][data-target="#'+element.id+'"]');this.transitioning=null;if(this.options.parent){this.$parent=this.getParent()}else this.addAriaAndCollapsedClass(this.$element,this.$trigger);if(this.options.toggle)this.toggle()};Collapse.VERSION='3.3.7';Collapse.TRANSITION_DURATION=350;Collapse.DEFAULTS={toggle:true};Collapse.prototype.dimension=function(){var hasWidth=this.$element.hasClass('width');return hasWidth?'width':'height'};Collapse.prototype.show=function(){if(this.transitioning||this.$element.hasClass('in'))return;var activesData,actives=this.$parent&&this.$parent.children('.panel').children('.in, .collapsing');if(actives&&actives.length){activesData=actives.data('bs.collapse');if(activesData&&activesData.transitioning)return};var startEvent=$.Event('show.bs.collapse');this.$element.trigger(startEvent);if(startEvent.isDefaultPrevented())return;if(actives&&actives.length){Plugin.call(actives,'hide');activesData||actives.data('bs.collapse',null)};var dimension=this.dimension();this.$element.removeClass('collapse').addClass('collapsing')[dimension](0).attr('aria-expanded',true);this.$trigger.removeClass('collapsed').attr('aria-expanded',true);this.transitioning=1;var complete=function(){this.$element.removeClass('collapsing').addClass('collapse in')[dimension]('');this.transitioning=0;this.$element.trigger('shown.bs.collapse')};if(!$.support.transition)return complete.call(this);var scrollSize=$.camelCase(['scroll',dimension].join('-'));this.$element.one('bsTransitionEnd',$.proxy(complete,this)).emulateTransitionEnd(Collapse.TRANSITION_DURATION)[dimension](this.$element[0][scrollSize])};Collapse.prototype.hide=function(){if(this.transitioning||!this.$element.hasClass('in'))return;var startEvent=$.Event('hide.bs.collapse');this.$element.trigger(startEvent);if(startEvent.isDefaultPrevented())return;var dimension=this.dimension();this.$element[dimension](this.$element[dimension]())[0].offsetHeight;this.$element.addClass('collapsing').removeClass('collapse in').attr('aria-expanded',false);this.$trigger.addClass('collapsed').attr('aria-expanded',false);this.transitioning=1;var complete=function(){this.transitioning=0;this.$element.removeClass('collapsing').addClass('collapse').trigger('hidden.bs.collapse')};if(!$.support.transition)return complete.call(this);this.$element[dimension](0).one('bsTransitionEnd',$.proxy(complete,this)).emulateTransitionEnd(Collapse.TRANSITION_DURATION)};Collapse.prototype.toggle=function(){this[this.$element.hasClass('in')?'hide':'show']()};Collapse.prototype.getParent=function(){return $(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each($.proxy(function(i,element){var $element=$(element);this.addAriaAndCollapsedClass(getTargetFromTrigger($element),$element)},this)).end()};Collapse.prototype.addAriaAndCollapsedClass=function($element,$trigger){var isOpen=$element.hasClass('in');$element.attr('aria-expanded',isOpen);$trigger.toggleClass('collapsed',!isOpen).attr('aria-expanded',isOpen)}
function getTargetFromTrigger($trigger){var href,target=$trigger.attr('data-target')||(href=$trigger.attr('href'))&&href.replace(/.*(?=#[^\s]+$)/,'');return $(target)}
function Plugin(option){return this.each(function(){var $this=$(this),data=$this.data('bs.collapse'),options=$.extend({},Collapse.DEFAULTS,$this.data(),typeof option=='object'&&option);if(!data&&options.toggle&&/show|hide/.test(option))options.toggle=false;if(!data)$this.data('bs.collapse',(data=new Collapse(this,options)));if(typeof option=='string')data[option]()})};var old=$.fn.collapse;$.fn.collapse=Plugin;$.fn.collapse.Constructor=Collapse;$.fn.collapse.noConflict=function(){$.fn.collapse=old;return this};$(document).on('click.bs.collapse.data-api','[data-toggle="collapse"]',function(e){var $this=$(this);if(!$this.attr('data-target'))e.preventDefault();var $target=getTargetFromTrigger($this),data=$target.data('bs.collapse'),option=data?'toggle':$this.data();Plugin.call($target,option)})}(jQuery)
/* Source and licensing information for the above line(s) can be found at https://www.libertytravel.com/themes/custom/liberty_bootstrap/bootstrap/assets/javascripts/bootstrap/collapse.js. */;
/* Source and licensing information for the line(s) below can be found at https://www.libertytravel.com/themes/custom/liberty_bootstrap/bootstrap/assets/javascripts/bootstrap/dropdown.js. */
+function($){'use strict';var backdrop='.dropdown-backdrop',toggle='[data-toggle="dropdown"]',Dropdown=function(element){$(element).on('click.bs.dropdown',this.toggle)};Dropdown.VERSION='3.3.7'
function getParent($this){var selector=$this.attr('data-target');if(!selector){selector=$this.attr('href');selector=selector&&/#[A-Za-z]/.test(selector)&&selector.replace(/.*(?=#[^\s]*$)/,'')};var $parent=selector&&$(selector);return $parent&&$parent.length?$parent:$this.parent()}
function clearMenus(e){if(e&&e.which===3)return;$(backdrop).remove();$(toggle).each(function(){var $this=$(this),$parent=getParent($this),relatedTarget={relatedTarget:this};if(!$parent.hasClass('open'))return;if(e&&e.type=='click'&&/input|textarea/i.test(e.target.tagName)&&$.contains($parent[0],e.target))return;$parent.trigger(e=$.Event('hide.bs.dropdown',relatedTarget));if(e.isDefaultPrevented())return;$this.attr('aria-expanded','false');$parent.removeClass('open').trigger($.Event('hidden.bs.dropdown',relatedTarget))})};Dropdown.prototype.toggle=function(e){var $this=$(this);if($this.is('.disabled, :disabled'))return;var $parent=getParent($this),isActive=$parent.hasClass('open');clearMenus();if(!isActive){if('ontouchstart'in document.documentElement&&!$parent.closest('.navbar-nav').length)$(document.createElement('div')).addClass('dropdown-backdrop').insertAfter($(this)).on('click',clearMenus);var relatedTarget={relatedTarget:this};$parent.trigger(e=$.Event('show.bs.dropdown',relatedTarget));if(e.isDefaultPrevented())return;$this.trigger('focus').attr('aria-expanded','true');$parent.toggleClass('open').trigger($.Event('shown.bs.dropdown',relatedTarget))};return false};Dropdown.prototype.keydown=function(e){if(!/(38|40|27|32)/.test(e.which)||/input|textarea/i.test(e.target.tagName))return;var $this=$(this);e.preventDefault();e.stopPropagation();if($this.is('.disabled, :disabled'))return;var $parent=getParent($this),isActive=$parent.hasClass('open');if(!isActive&&e.which!=27||isActive&&e.which==27){if(e.which==27)$parent.find(toggle).trigger('focus');return $this.trigger('click')};var desc=' li:not(.disabled):visible a',$items=$parent.find('.dropdown-menu'+desc);if(!$items.length)return;var index=$items.index(e.target);if(e.which==38&&index>0)index--;if(e.which==40&&index<$items.length-1)index++;if(!~index)index=0;$items.eq(index).trigger('focus')}
function Plugin(option){return this.each(function(){var $this=$(this),data=$this.data('bs.dropdown');if(!data)$this.data('bs.dropdown',(data=new Dropdown(this)));if(typeof option=='string')data[option].call($this)})};var old=$.fn.dropdown;$.fn.dropdown=Plugin;$.fn.dropdown.Constructor=Dropdown;$.fn.dropdown.noConflict=function(){$.fn.dropdown=old;return this};$(document).on('click.bs.dropdown.data-api',clearMenus).on('click.bs.dropdown.data-api','.dropdown form',function(e){e.stopPropagation()}).on('click.bs.dropdown.data-api',toggle,Dropdown.prototype.toggle).on('keydown.bs.dropdown.data-api',toggle,Dropdown.prototype.keydown).on('keydown.bs.dropdown.data-api','.dropdown-menu',Dropdown.prototype.keydown)}(jQuery)
/* Source and licensing information for the above line(s) can be found at https://www.libertytravel.com/themes/custom/liberty_bootstrap/bootstrap/assets/javascripts/bootstrap/dropdown.js. */;
/* Source and licensing information for the line(s) below can be found at https://www.libertytravel.com/themes/custom/liberty_bootstrap/bootstrap/assets/javascripts/bootstrap/modal.js. */
+function($){'use strict';var Modal=function(element,options){this.options=options;this.$body=$(document.body);this.$element=$(element);this.$dialog=this.$element.find('.modal-dialog');this.$backdrop=null;this.isShown=null;this.originalBodyPad=null;this.scrollbarWidth=0;this.ignoreBackdropClick=false;if(this.options.remote)this.$element.find('.modal-content').load(this.options.remote,$.proxy(function(){this.$element.trigger('loaded.bs.modal')},this))};Modal.VERSION='3.3.7';Modal.TRANSITION_DURATION=300;Modal.BACKDROP_TRANSITION_DURATION=150;Modal.DEFAULTS={backdrop:true,keyboard:true,show:true};Modal.prototype.toggle=function(_relatedTarget){return this.isShown?this.hide():this.show(_relatedTarget)};Modal.prototype.show=function(_relatedTarget){var that=this,e=$.Event('show.bs.modal',{relatedTarget:_relatedTarget});this.$element.trigger(e);if(this.isShown||e.isDefaultPrevented())return;this.isShown=true;this.checkScrollbar();this.setScrollbar();this.$body.addClass('modal-open');this.escape();this.resize();this.$element.on('click.dismiss.bs.modal','[data-dismiss="modal"]',$.proxy(this.hide,this));this.$dialog.on('mousedown.dismiss.bs.modal',function(){that.$element.one('mouseup.dismiss.bs.modal',function(e){if($(e.target).is(that.$element))that.ignoreBackdropClick=true})});this.backdrop(function(){var transition=$.support.transition&&that.$element.hasClass('fade');if(!that.$element.parent().length)that.$element.appendTo(that.$body);that.$element.show().scrollTop(0);that.adjustDialog();if(transition)that.$element[0].offsetWidth;that.$element.addClass('in');that.enforceFocus();var e=$.Event('shown.bs.modal',{relatedTarget:_relatedTarget});transition?that.$dialog.one('bsTransitionEnd',function(){that.$element.trigger('focus').trigger(e)}).emulateTransitionEnd(Modal.TRANSITION_DURATION):that.$element.trigger('focus').trigger(e)})};Modal.prototype.hide=function(e){if(e)e.preventDefault();e=$.Event('hide.bs.modal');this.$element.trigger(e);if(!this.isShown||e.isDefaultPrevented())return;this.isShown=false;this.escape();this.resize();$(document).off('focusin.bs.modal');this.$element.removeClass('in').off('click.dismiss.bs.modal').off('mouseup.dismiss.bs.modal');this.$dialog.off('mousedown.dismiss.bs.modal');$.support.transition&&this.$element.hasClass('fade')?this.$element.one('bsTransitionEnd',$.proxy(this.hideModal,this)).emulateTransitionEnd(Modal.TRANSITION_DURATION):this.hideModal()};Modal.prototype.enforceFocus=function(){$(document).off('focusin.bs.modal').on('focusin.bs.modal',$.proxy(function(e){if(document!==e.target&&this.$element[0]!==e.target&&!this.$element.has(e.target).length)this.$element.trigger('focus')},this))};Modal.prototype.escape=function(){if(this.isShown&&this.options.keyboard){this.$element.on('keydown.dismiss.bs.modal',$.proxy(function(e){e.which==27&&this.hide()},this))}else if(!this.isShown)this.$element.off('keydown.dismiss.bs.modal')};Modal.prototype.resize=function(){if(this.isShown){$(window).on('resize.bs.modal',$.proxy(this.handleUpdate,this))}else $(window).off('resize.bs.modal')};Modal.prototype.hideModal=function(){var that=this;this.$element.hide();this.backdrop(function(){that.$body.removeClass('modal-open');that.resetAdjustments();that.resetScrollbar();that.$element.trigger('hidden.bs.modal')})};Modal.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove();this.$backdrop=null};Modal.prototype.backdrop=function(callback){var that=this,animate=this.$element.hasClass('fade')?'fade':'';if(this.isShown&&this.options.backdrop){var doAnimate=$.support.transition&&animate;this.$backdrop=$(document.createElement('div')).addClass('modal-backdrop '+animate).appendTo(this.$body);this.$element.on('click.dismiss.bs.modal',$.proxy(function(e){if(this.ignoreBackdropClick){this.ignoreBackdropClick=false;return};if(e.target!==e.currentTarget)return;this.options.backdrop=='static'?this.$element[0].focus():this.hide()},this));if(doAnimate)this.$backdrop[0].offsetWidth;this.$backdrop.addClass('in');if(!callback)return;doAnimate?this.$backdrop.one('bsTransitionEnd',callback).emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION):callback()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass('in');var callbackRemove=function(){that.removeBackdrop();callback&&callback()};$.support.transition&&this.$element.hasClass('fade')?this.$backdrop.one('bsTransitionEnd',callbackRemove).emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION):callbackRemove()}else if(callback)callback()};Modal.prototype.handleUpdate=function(){this.adjustDialog()};Modal.prototype.adjustDialog=function(){var modalIsOverflowing=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&modalIsOverflowing?this.scrollbarWidth:'',paddingRight:this.bodyIsOverflowing&&!modalIsOverflowing?this.scrollbarWidth:''})};Modal.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:'',paddingRight:''})};Modal.prototype.checkScrollbar=function(){var fullWindowWidth=window.innerWidth;if(!fullWindowWidth){var documentElementRect=document.documentElement.getBoundingClientRect();fullWindowWidth=documentElementRect.right-Math.abs(documentElementRect.left)};this.bodyIsOverflowing=document.body.clientWidth<fullWindowWidth;this.scrollbarWidth=this.measureScrollbar()};Modal.prototype.setScrollbar=function(){var bodyPad=parseInt((this.$body.css('padding-right')||0),10);this.originalBodyPad=document.body.style.paddingRight||'';if(this.bodyIsOverflowing)this.$body.css('padding-right',bodyPad+this.scrollbarWidth)};Modal.prototype.resetScrollbar=function(){this.$body.css('padding-right',this.originalBodyPad)};Modal.prototype.measureScrollbar=function(){var scrollDiv=document.createElement('div');scrollDiv.className='modal-scrollbar-measure';this.$body.append(scrollDiv);var scrollbarWidth=scrollDiv.offsetWidth-scrollDiv.clientWidth;this.$body[0].removeChild(scrollDiv);return scrollbarWidth}
function Plugin(option,_relatedTarget){return this.each(function(){var $this=$(this),data=$this.data('bs.modal'),options=$.extend({},Modal.DEFAULTS,$this.data(),typeof option=='object'&&option);if(!data)$this.data('bs.modal',(data=new Modal(this,options)));if(typeof option=='string'){data[option](_relatedTarget)}else if(options.show)data.show(_relatedTarget)})};var old=$.fn.modal;$.fn.modal=Plugin;$.fn.modal.Constructor=Modal;$.fn.modal.noConflict=function(){$.fn.modal=old;return this};$(document).on('click.bs.modal.data-api','[data-toggle="modal"]',function(e){var $this=$(this),href=$this.attr('href'),$target=$($this.attr('data-target')||(href&&href.replace(/.*(?=#[^\s]+$)/,''))),option=$target.data('bs.modal')?'toggle':$.extend({remote:!/#/.test(href)&&href},$target.data(),$this.data());if($this.is('a'))e.preventDefault();$target.one('show.bs.modal',function(showEvent){if(showEvent.isDefaultPrevented())return;$target.one('hidden.bs.modal',function(){$this.is(':visible')&&$this.trigger('focus')})});Plugin.call($target,option,this)})}(jQuery)
/* Source and licensing information for the above line(s) can be found at https://www.libertytravel.com/themes/custom/liberty_bootstrap/bootstrap/assets/javascripts/bootstrap/modal.js. */;
/* Source and licensing information for the line(s) below can be found at https://www.libertytravel.com/themes/custom/liberty_bootstrap/bootstrap/assets/javascripts/bootstrap/scrollspy.js. */
+function($){'use strict'
function ScrollSpy(element,options){this.$body=$(document.body);this.$scrollElement=$(element).is(document.body)?$(window):$(element);this.options=$.extend({},ScrollSpy.DEFAULTS,options);this.selector=(this.options.target||'')+' .nav li > a';this.offsets=[];this.targets=[];this.activeTarget=null;this.scrollHeight=0;this.$scrollElement.on('scroll.bs.scrollspy',$.proxy(this.process,this));this.refresh();this.process()};ScrollSpy.VERSION='3.3.7';ScrollSpy.DEFAULTS={offset:10};ScrollSpy.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)};ScrollSpy.prototype.refresh=function(){var that=this,offsetMethod='offset',offsetBase=0;this.offsets=[];this.targets=[];this.scrollHeight=this.getScrollHeight();if(!$.isWindow(this.$scrollElement[0])){offsetMethod='position';offsetBase=this.$scrollElement.scrollTop()};this.$body.find(this.selector).map(function(){var $el=$(this),href=$el.data('target')||$el.attr('href'),$href=/^#./.test(href)&&$(href);return($href&&$href.length&&$href.is(':visible')&&[[$href[offsetMethod]().top+offsetBase,href]])||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){that.offsets.push(this[0]);that.targets.push(this[1])})};ScrollSpy.prototype.process=function(){var scrollTop=this.$scrollElement.scrollTop()+this.options.offset,scrollHeight=this.getScrollHeight(),maxScroll=this.options.offset+scrollHeight-this.$scrollElement.height(),offsets=this.offsets,targets=this.targets,activeTarget=this.activeTarget,i;if(this.scrollHeight!=scrollHeight)this.refresh();if(scrollTop>=maxScroll)return activeTarget!=(i=targets[targets.length-1])&&this.activate(i);if(activeTarget&&scrollTop<offsets[0]){this.activeTarget=null;return this.clear()};for(i=offsets.length;i--;)activeTarget!=targets[i]&&scrollTop>=offsets[i]&&(offsets[i+1]===undefined||scrollTop<offsets[i+1])&&this.activate(targets[i])};ScrollSpy.prototype.activate=function(target){this.activeTarget=target;this.clear();var selector=this.selector+'[data-target="'+target+'"],'+this.selector+'[href="'+target+'"]',active=$(selector).parents('li').addClass('active');if(active.parent('.dropdown-menu').length)active=active.closest('li.dropdown').addClass('active');active.trigger('activate.bs.scrollspy')};ScrollSpy.prototype.clear=function(){$(this.selector).parentsUntil(this.options.target,'.active').removeClass('active')}
function Plugin(option){return this.each(function(){var $this=$(this),data=$this.data('bs.scrollspy'),options=typeof option=='object'&&option;if(!data)$this.data('bs.scrollspy',(data=new ScrollSpy(this,options)));if(typeof option=='string')data[option]()})};var old=$.fn.scrollspy;$.fn.scrollspy=Plugin;$.fn.scrollspy.Constructor=ScrollSpy;$.fn.scrollspy.noConflict=function(){$.fn.scrollspy=old;return this};$(window).on('load.bs.scrollspy.data-api',function(){$('[data-spy="scroll"]').each(function(){var $spy=$(this);Plugin.call($spy,$spy.data())})})}(jQuery)
/* Source and licensing information for the above line(s) can be found at https://www.libertytravel.com/themes/custom/liberty_bootstrap/bootstrap/assets/javascripts/bootstrap/scrollspy.js. */;
/* Source and licensing information for the line(s) below can be found at https://www.libertytravel.com/themes/custom/liberty_bootstrap/bootstrap/assets/javascripts/bootstrap/tab.js. */
+function($){'use strict';var Tab=function(element){this.element=$(element)};Tab.VERSION='3.3.7';Tab.TRANSITION_DURATION=150;Tab.prototype.show=function(){var $this=this.element,$ul=$this.closest('ul:not(.dropdown-menu)'),selector=$this.data('target');if(!selector){selector=$this.attr('href');selector=selector&&selector.replace(/.*(?=#[^\s]*$)/,'')};if($this.parent('li').hasClass('active'))return;var $previous=$ul.find('.active:last a'),hideEvent=$.Event('hide.bs.tab',{relatedTarget:$this[0]}),showEvent=$.Event('show.bs.tab',{relatedTarget:$previous[0]});$previous.trigger(hideEvent);$this.trigger(showEvent);if(showEvent.isDefaultPrevented()||hideEvent.isDefaultPrevented())return;var $target=$(selector);this.activate($this.closest('li'),$ul);this.activate($target,$target.parent(),function(){$previous.trigger({type:'hidden.bs.tab',relatedTarget:$this[0]});$this.trigger({type:'shown.bs.tab',relatedTarget:$previous[0]})})};Tab.prototype.activate=function(element,container,callback){var $active=container.find('> .active'),transition=callback&&$.support.transition&&($active.length&&$active.hasClass('fade')||!!container.find('> .fade').length)
function next(){$active.removeClass('active').find('> .dropdown-menu > .active').removeClass('active').end().find('[data-toggle="tab"]').attr('aria-expanded',false);element.addClass('active').find('[data-toggle="tab"]').attr('aria-expanded',true);if(transition){element[0].offsetWidth;element.addClass('in')}else element.removeClass('fade');if(element.parent('.dropdown-menu').length)element.closest('li.dropdown').addClass('active').end().find('[data-toggle="tab"]').attr('aria-expanded',true);callback&&callback()};$active.length&&transition?$active.one('bsTransitionEnd',next).emulateTransitionEnd(Tab.TRANSITION_DURATION):next();$active.removeClass('in')}
function Plugin(option){return this.each(function(){var $this=$(this),data=$this.data('bs.tab');if(!data)$this.data('bs.tab',(data=new Tab(this)));if(typeof option=='string')data[option]()})};var old=$.fn.tab;$.fn.tab=Plugin;$.fn.tab.Constructor=Tab;$.fn.tab.noConflict=function(){$.fn.tab=old;return this};var clickHandler=function(e){e.preventDefault();Plugin.call($(this),'show')};$(document).on('click.bs.tab.data-api','[data-toggle="tab"]',clickHandler).on('click.bs.tab.data-api','[data-toggle="pill"]',clickHandler)}(jQuery)
/* Source and licensing information for the above line(s) can be found at https://www.libertytravel.com/themes/custom/liberty_bootstrap/bootstrap/assets/javascripts/bootstrap/tab.js. */;
/* Source and licensing information for the line(s) below can be found at https://www.libertytravel.com/themes/custom/liberty_bootstrap/bootstrap/assets/javascripts/bootstrap/transition.js. */
+function($){'use strict'
function transitionEnd(){var el=document.createElement('bootstrap'),transEndEventNames={WebkitTransition:'webkitTransitionEnd',MozTransition:'transitionend',OTransition:'oTransitionEnd otransitionend',transition:'transitionend'};for(var name in transEndEventNames)if(el.style[name]!==undefined)return{end:transEndEventNames[name]};return false};$.fn.emulateTransitionEnd=function(duration){var called=false,$el=this;$(this).one('bsTransitionEnd',function(){called=true});var callback=function(){if(!called)$($el).trigger($.support.transition.end)};setTimeout(callback,duration);return this};$(function(){$.support.transition=transitionEnd();if(!$.support.transition)return;$.event.special.bsTransitionEnd={bindType:$.support.transition.end,delegateType:$.support.transition.end,handle:function(e){if($(e.target).is(this))return e.handleObj.handler.apply(this,arguments)}}})}(jQuery)
/* Source and licensing information for the above line(s) can be found at https://www.libertytravel.com/themes/custom/liberty_bootstrap/bootstrap/assets/javascripts/bootstrap/transition.js. */;
/* Source and licensing information for the line(s) below can be found at https://www.libertytravel.com/themes/contrib/bootstrap/js/drupal.bootstrap.js. */
(function(_,$,Drupal,drupalSettings){'use strict';var Bootstrap={processedOnce:{},settings:drupalSettings.bootstrap||{}};Bootstrap.checkPlain=function(str){return str&&Drupal.checkPlain(str)||''};Bootstrap.createPlugin=function(id,plugin,noConflict){if($.fn[id]!==void(0))return this.fatal('Specified jQuery plugin identifier already exists: @id. Use Drupal.bootstrap.replacePlugin() instead.',{'@id':id});if(typeof plugin!=='function')return this.fatal('You must provide a constructor function to create a jQuery plugin "@id": @plugin',{'@id':id,'@plugin':plugin});this.pluginNoConflict(id,plugin,noConflict);$.fn[id]=plugin};Bootstrap.diffObjects=function(objects){var args=Array.prototype.slice.call(arguments);return _.pick(args[0],_.difference.apply(_,_.map(args,function(obj){return Object.keys(obj)})))};Bootstrap.eventMap={Event:/^(?:load|unload|abort|error|select|change|submit|reset|focus|blur|resize|scroll)$/,MouseEvent:/^(?:click|dblclick|mouse(?:down|enter|leave|up|over|move|out))$/,KeyboardEvent:/^(?:key(?:down|press|up))$/,TouchEvent:/^(?:touch(?:start|end|move|cancel))$/};Bootstrap.extendPlugin=function(id,callback){if(typeof $.fn[id]!=='function')return this.fatal('Specified jQuery plugin identifier does not exist: @id',{'@id':id});if(typeof callback!=='function')return this.fatal('You must provide a callback function to extend the jQuery plugin "@id": @callback',{'@id':id,'@callback':callback});var constructor=$.fn[id]&&$.fn[id].Constructor||$.fn[id],plugin=callback.apply(constructor,[this.settings]);if(!$.isPlainObject(plugin))return this.fatal('Returned value from callback is not a plain object that can be used to extend the jQuery plugin "@id": @obj',{'@obj':plugin});this.wrapPluginConstructor(constructor,plugin,true);return $.fn[id]};Bootstrap.superWrapper=function(parent,fn){return function(){var previousSuper=this.super;this.super=parent;var ret=fn.apply(this,arguments);if(previousSuper){this.super=previousSuper}else delete this.super;return ret}};Bootstrap.fatal=function(message,args){if(this.settings.dev&&console.warn){for(var name in args)if(args.hasOwnProperty(name)&&typeof args[name]==='object')args[name]=JSON.stringify(args[name]);Drupal.throwError(new Error(Drupal.formatString(message,args)))};return false};Bootstrap.intersectObjects=function(objects){var args=Array.prototype.slice.call(arguments);return _.pick(args[0],_.intersection.apply(_,_.map(args,function(obj){return Object.keys(obj)})))};Bootstrap.normalizeObject=function(obj){if(!$.isPlainObject(obj))return obj;for(var k in obj)if(typeof obj[k]==='string'){if(obj[k]==='true'){obj[k]=true}else if(obj[k]==='false'){obj[k]=false}else if(obj[k].match(/^[\d-.]$/))obj[k]=parseFloat(obj[k])}else if($.isPlainObject(obj[k]))obj[k]=Bootstrap.normalizeObject(obj[k]);return obj};Bootstrap.once=function(id,callback){if(this.processedOnce[id])return this;callback.call(this,this.settings);this.processedOnce[id]=true;return this};Bootstrap.option=function(key,value){var options=$.isPlainObject(key)?$.extend({},key):{};if(arguments.length===0)return $.extend({},this.options);if(typeof key==="string"){var parts=key.split('.');key=parts.shift();var obj=options;if(parts.length){for(var i=0;i<parts.length-1;i++){obj[parts[i]]=obj[parts[i]]||{};obj=obj[parts[i]]};key=parts.pop()};if(arguments.length===1)return obj[key]===void(0)?null:obj[key];obj[key]=value};$.extend(true,this.options,options)};Bootstrap.pluginNoConflict=function(id,plugin,noConflict){if(plugin.noConflict===void(0)&&(noConflict===void(0)||noConflict)){var old=$.fn[id];plugin.noConflict=function(){$.fn[id]=old;return this}}};Bootstrap.relayEvent=function(target,name,stopPropagation){return function(e){if(stopPropagation===void(0)||stopPropagation)e.stopPropagation();var $target=$(target),parts=name.split('.').filter(Boolean),type=parts.shift();e.target=$target[0];e.currentTarget=$target[0];e.namespace=parts.join('.');e.type=type;$target.trigger(e)}};Bootstrap.replacePlugin=function(id,callback,noConflict){if(typeof $.fn[id]!=='function')return this.fatal('Specified jQuery plugin identifier does not exist: @id',{'@id':id});if(typeof callback!=='function')return this.fatal('You must provide a valid callback function to replace a jQuery plugin: @callback',{'@callback':callback});var constructor=$.fn[id]&&$.fn[id].Constructor||$.fn[id],plugin=callback.apply(constructor,[this.settings]);if(typeof plugin!=='function')return this.fatal('Returned value from callback is not a usable function to replace a jQuery plugin "@id": @plugin',{'@id':id,'@plugin':plugin});this.wrapPluginConstructor(constructor,plugin);this.pluginNoConflict(id,plugin,noConflict);$.fn[id]=plugin};Bootstrap.simulate=function(element,type,options){var ret=true;if(element instanceof $){element.each(function(){if(!Bootstrap.simulate(this,type,options))ret=false});return ret};if(!(element instanceof HTMLElement))this.fatal('Passed element must be an instance of HTMLElement, got "@type" instead.',{'@type':typeof element});if(typeof $.simulate==='function'){new $.simulate(element,type,options);return true};var event,ctor,types=[].concat(type);for(var i=0,l=types.length;i<l;i++){type=types[i];for(var name in this.eventMap)if(this.eventMap[name].test(type)){ctor=name;break};if(!ctor)throw new SyntaxError('Only rudimentary HTMLEvents, KeyboardEvents and MouseEvents are supported: '+type);var opts={bubbles:true,cancelable:true};if(ctor==='KeyboardEvent'||ctor==='MouseEvent')$.extend(opts,{ctrlKey:!1,altKey:!1,shiftKey:!1,metaKey:!1});if(ctor==='MouseEvent')$.extend(opts,{button:0,pointerX:0,pointerY:0,view:window});if(options)$.extend(opts,options);if(typeof window[ctor]==='function'){event=new window[ctor](type,opts);if(!element.dispatchEvent(event))ret=false}else if(document.createEvent){event=document.createEvent(ctor);event.initEvent(type,opts.bubbles,opts.cancelable);if(!element.dispatchEvent(event))ret=false}else if(typeof element.fireEvent==='function'){event=$.extend(document.createEventObject(),opts);if(!element.fireEvent('on'+type,event))ret=false}else if(typeof element[type])element[type]()};return ret};Bootstrap.stripHtml=function(html){if(html instanceof $){html=html.html()}else if(html instanceof Element)html=html.innerHTML;var tmp=document.createElement('DIV');tmp.innerHTML=html;return(tmp.textContent||tmp.innerText||'').replace(/^[\s\n\t]*|[\s\n\t]*$/,'')};Bootstrap.unsupported=function(type,name,value){Bootstrap.warn('Unsupported by Drupal Bootstrap: (@type) @name -> @value',{'@type':type,'@name':name,'@value':typeof value==='object'?JSON.stringify(value):value})};Bootstrap.warn=function(message,args){if(this.settings.dev&&console.warn)console.warn(Drupal.formatString(message,args))};Bootstrap.wrapPluginConstructor=function(constructor,plugin,extend){var proto=constructor.prototype,option=this.option;if(proto.option===void(0))proto.option=function(){return option.apply(this,arguments)};if(extend){if(plugin.prototype!==void(0))for(var key in plugin.prototype){if(!plugin.prototype.hasOwnProperty(key))continue;var value=plugin.prototype[key];if(typeof value==='function'){proto[key]=this.superWrapper(proto[key]||function(){},value)}else proto[key]=$.isPlainObject(value)?$.extend(true,{},proto[key],value):value};delete plugin.prototype;for(key in plugin){if(!plugin.hasOwnProperty(key))continue;value=plugin[key];if(typeof value==='function'){constructor[key]=this.superWrapper(constructor[key]||function(){},value)}else constructor[key]=$.isPlainObject(value)?$.extend(true,{},constructor[key],value):value}}};Drupal.bootstrap=Drupal.bootstrap||Bootstrap})(window._,window.jQuery,window.Drupal,window.drupalSettings)
/* Source and licensing information for the above line(s) can be found at https://www.libertytravel.com/themes/contrib/bootstrap/js/drupal.bootstrap.js. */;
/* Source and licensing information for the line(s) below can be found at https://www.libertytravel.com/themes/contrib/bootstrap/js/attributes.js. */
(function($,_){var Attributes=function(attributes){this.data={};this.data['class']=[];this.merge(attributes)};Attributes.prototype.toString=function(){var output='',name,value,checkPlain=function(str){return str&&str.toString().replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/</g,'&lt;').replace(/>/g,'&gt;')||''},data=this.getData();for(name in data){if(!data.hasOwnProperty(name))continue;value=data[name];if(_.isFunction(value))value=value();if(_.isObject(value))value=_.values(value);if(_.isArray(value))value=value.join(' ');output+=' '+checkPlain(name)+'="'+checkPlain(value)+'"'};return output};Attributes.prototype.toPlainObject=function(){var object={},name,value,data=this.getData();for(name in data){if(!data.hasOwnProperty(name))continue;value=data[name];if(_.isFunction(value))value=value();if(_.isObject(value))value=_.values(value);if(_.isArray(value))value=value.join(' ');object[name]=value};return object};Attributes.prototype.addClass=function(value){var args=Array.prototype.slice.call(arguments);this.data['class']=this.sanitizeClasses(this.data['class'].concat(args));return this};Attributes.prototype.exists=function(name){return this.data[name]!==void(0)&&this.data[name]!==null};Attributes.prototype.get=function(name,defaultValue){if(!this.exists(name))this.data[name]=defaultValue;return this.data[name]};Attributes.prototype.getData=function(){return _.extend({},this.data)};Attributes.prototype.getClasses=function(){return this.get('class',[])};Attributes.prototype.hasClass=function(className){className=this.sanitizeClasses(Array.prototype.slice.call(arguments));var classes=this.getClasses();for(var i=0,l=className.length;i<l;i++)if(_.indexOf(classes,className[i])===-1)return false;return true};Attributes.prototype.merge=function(object,recursive){if(!object)return this;if(object instanceof $)object=object[0];if(object instanceof Node){object=Array.prototype.slice.call(object.attributes).reduce(function(attributes,attribute){attributes[attribute.name]=attribute.value;return attributes},{})}else if(object instanceof Attributes){object=object.getData()}else object=_.extend({},object);if(!$.isPlainObject(object)){setTimeout(function(){throw new Error('Passed object is not supported: '+object)});return this};if(object&&object['class']!==void(0)){this.addClass(object['class']);delete object['class']};if(recursive===void(0)||recursive){this.data=$.extend(true,{},this.data,object)}else this.data=$.extend({},this.data,object);return this};Attributes.prototype.remove=function(name){if(this.exists(name))delete this.data[name];return this};Attributes.prototype.removeClass=function(className){var remove=this.sanitizeClasses(Array.prototype.slice.apply(arguments));this.data['class']=_.without(this.getClasses(),remove);return this};Attributes.prototype.replaceClass=function(oldValue,newValue){var classes=this.getClasses(),i=_.indexOf(this.sanitizeClasses(oldValue),classes);if(i>=0){classes[i]=newValue;this.set('class',classes)};return this};Attributes.prototype.sanitizeClasses=function(classes){return _.chain(Array.prototype.slice.call(arguments)).flatten().map(function(string){return string.split(' ')}).flatten().filter().map(function(value){return Attributes.cleanClass(value)}).uniq().value()};Attributes.prototype.set=function(name,value){var obj=$.isPlainObject(name)?name:{};if(typeof name==='string')obj[name]=value;return this.merge(obj)};Attributes.cleanClass=function(identifier,filter){filter=filter||{' ':'-',_:'-','/':'-','[':'-',']':''};identifier=identifier.toLowerCase();if(filter.__===void(0))identifier=identifier.replace('__','#DOUBLE_UNDERSCORE#');identifier=identifier.replace(Object.keys(filter),Object.keys(filter).map(function(key){return filter[key]}));if(filter.__===void(0))identifier=identifier.replace('#DOUBLE_UNDERSCORE#','__');identifier=identifier.replace(/[^\u002D\u0030-\u0039\u0041-\u005A\u005F\u0061-\u007A\u00A1-\uFFFF]/g,'');identifier=identifier.replace(['/^[0-9]/','/^(-[0-9])|^(--)/'],['_','__']);return identifier};Attributes.create=function(attributes){return new Attributes(attributes)};window.Attributes=Attributes})(window.jQuery,window._)
/* Source and licensing information for the above line(s) can be found at https://www.libertytravel.com/themes/contrib/bootstrap/js/attributes.js. */;
/* Source and licensing information for the line(s) below can be found at https://www.libertytravel.com/themes/contrib/bootstrap/js/theme.js. */
(function($,Drupal,Bootstrap,Attributes){if(!Drupal.icon)Drupal.icon={bundles:{}};if(!Drupal.theme.icon||Drupal.theme.prototype.icon)$.extend(Drupal.theme,{icon:function(bundle,icon,attributes){if(!Drupal.icon.bundles[bundle])return'';attributes=Attributes.create(attributes).addClass('icon').set('aria-hidden','true');icon=Drupal.icon.bundles[bundle](icon,attributes);return'<span'+attributes+'></span>'}});Drupal.icon.bundles.bootstrap=function(icon,attributes){attributes.addClass(['glyphicon','glyphicon-'+icon])};$.extend(Drupal.theme,{ajaxThrobber:function(){return Drupal.theme('bootstrapIcon','refresh',{'class':['ajax-throbber','glyphicon-spin']})},button:function(attributes){attributes=Attributes.create(attributes).addClass('btn');var context=attributes.get('context','default'),label=attributes.get('value','');attributes.remove('context').remove('value');if(!attributes.hasClass(['btn-default','btn-primary','btn-success','btn-info','btn-warning','btn-danger','btn-link']))attributes.addClass('btn-'+Bootstrap.checkPlain(context));if(!attributes.exists('type'))attributes.set('type',attributes.hasClass('form-submit')?'submit':'button');return'<button'+attributes+'>'+label+'</button>'},btn:function(attributes){return Drupal.theme('button',attributes)},'btn-block':function(attributes){return Drupal.theme('button',Attributes.create(attributes).addClass('btn-block'))},'btn-lg':function(attributes){return Drupal.theme('button',Attributes.create(attributes).addClass('btn-lg'))},'btn-sm':function(attributes){return Drupal.theme('button',Attributes.create(attributes).addClass('btn-sm'))},'btn-xs':function(attributes){return Drupal.theme('button',Attributes.create(attributes).addClass('btn-xs'))},bootstrapIcon:function(name,attributes){return Drupal.theme('icon','bootstrap',name,attributes)}})})(window.jQuery,window.Drupal,window.Drupal.bootstrap,window.Attributes)
/* Source and licensing information for the above line(s) can be found at https://www.libertytravel.com/themes/contrib/bootstrap/js/theme.js. */;
/* Source and licensing information for the line(s) below can be found at https://www.libertytravel.com/themes/custom/liberty_bootstrap/js/modernizr.min.js. */
/*! modernizr 3.6.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-inputtypes-objectfit-setclasses !*/
!function(e,t,n){function r(e,t){return typeof e===t}function i(){var e,t,n,i,o,s,l;for(var a in C)if(C.hasOwnProperty(a)){if(e=[],t=C[a],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(i=r(t.fn,"function")?t.fn():t.fn,o=0;o<e.length;o++)s=e[o],l=s.split("."),1===l.length?Modernizr[l[0]]=i:(!Modernizr[l[0]]||Modernizr[l[0]]instanceof Boolean||(Modernizr[l[0]]=new Boolean(Modernizr[l[0]])),Modernizr[l[0]][l[1]]=i),g.push((i?"":"no-")+l.join("-"))}}function o(e){var t=x.className,n=Modernizr._config.classPrefix||"";if(b&&(t=t.baseVal),Modernizr._config.enableJSClass){var r=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(r,"$1"+n+"js$2")}Modernizr._config.enableClasses&&(t+=" "+n+e.join(" "+n),b?x.className.baseVal=t:x.className=t)}function s(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")}function l(e,t){return!!~(""+e).indexOf(t)}function a(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):b?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function u(e,t){return function(){return e.apply(t,arguments)}}function f(e,t,n){var i;for(var o in e)if(e[o]in t)return n===!1?e[o]:(i=t[e[o]],r(i,"function")?u(i,n||t):i);return!1}function p(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function c(t,n,r){var i;if("getComputedStyle"in e){i=getComputedStyle.call(e,t,n);var o=e.console;if(null!==i)r&&(i=i.getPropertyValue(r));else if(o){var s=o.error?"error":"log";o[s].call(o,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}}else i=!n&&t.currentStyle&&t.currentStyle[r];return i}function d(){var e=t.body;return e||(e=a(b?"svg":"body"),e.fake=!0),e}function m(e,n,r,i){var o,s,l,u,f="modernizr",p=a("div"),c=d();if(parseInt(r,10))for(;r--;)l=a("div"),l.id=i?i[r]:f+(r+1),p.appendChild(l);return o=a("style"),o.type="text/css",o.id="s"+f,(c.fake?c:p).appendChild(o),c.appendChild(p),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(t.createTextNode(e)),p.id=f,c.fake&&(c.style.background="",c.style.overflow="hidden",u=x.style.overflow,x.style.overflow="hidden",x.appendChild(c)),s=n(p,e),c.fake?(c.parentNode.removeChild(c),x.style.overflow=u,x.offsetHeight):p.parentNode.removeChild(p),!!s}function y(t,r){var i=t.length;if("CSS"in e&&"supports"in e.CSS){for(;i--;)if(e.CSS.supports(p(t[i]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var o=[];i--;)o.push("("+p(t[i])+":"+r+")");return o=o.join(" or "),m("@supports ("+o+") { #modernizr { position: absolute; } }",function(e){return"absolute"==c(e,null,"position")})}return n}function v(e,t,i,o){function u(){p&&(delete T.style,delete T.modElem)}if(o=r(o,"undefined")?!1:o,!r(i,"undefined")){var f=y(e,i);if(!r(f,"undefined"))return f}for(var p,c,d,m,v,h=["modernizr","tspan","samp"];!T.style&&h.length;)p=!0,T.modElem=a(h.shift()),T.style=T.modElem.style;for(d=e.length,c=0;d>c;c++)if(m=e[c],v=T.style[m],l(m,"-")&&(m=s(m)),T.style[m]!==n){if(o||r(i,"undefined"))return u(),"pfx"==t?m:!0;try{T.style[m]=i}catch(g){}if(T.style[m]!=v)return u(),"pfx"==t?m:!0}return u(),!1}function h(e,t,n,i,o){var s=e.charAt(0).toUpperCase()+e.slice(1),l=(e+" "+_.join(s+" ")+s).split(" ");return r(t,"string")||r(t,"undefined")?v(l,t,i,o):(l=(e+" "+E.join(s+" ")+s).split(" "),f(l,t,n))}var g=[],C=[],S={_version:"3.6.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){C.push({name:e,fn:t,options:n})},addAsyncTest:function(e){C.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=S,Modernizr=new Modernizr;var x=t.documentElement,b="svg"===x.nodeName.toLowerCase(),w="Moz O ms Webkit",_=S._config.usePrefixes?w.split(" "):[];S._cssomPrefixes=_;var k=function(t){var r,i=prefixes.length,o=e.CSSRule;if("undefined"==typeof o)return n;if(!t)return!1;if(t=t.replace(/^@/,""),r=t.replace(/-/g,"_").toUpperCase()+"_RULE",r in o)return"@"+t;for(var s=0;i>s;s++){var l=prefixes[s],a=l.toUpperCase()+"_"+r;if(a in o)return"@-"+l.toLowerCase()+"-"+t}return!1};S.atRule=k;var E=S._config.usePrefixes?w.toLowerCase().split(" "):[];S._domPrefixes=E;var j=a("input"),z="search tel url email datetime date month week time datetime-local number range color".split(" "),P={};Modernizr.inputtypes=function(e){for(var r,i,o,s=e.length,l="1)",a=0;s>a;a++)j.setAttribute("type",r=e[a]),o="text"!==j.type&&"style"in j,o&&(j.value=l,j.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(r)&&j.style.WebkitAppearance!==n?(x.appendChild(j),i=t.defaultView,o=i.getComputedStyle&&"textfield"!==i.getComputedStyle(j,null).WebkitAppearance&&0!==j.offsetHeight,x.removeChild(j)):/^(search|tel)$/.test(r)||(o=/^(url|email)$/.test(r)?j.checkValidity&&j.checkValidity()===!1:j.value!=l)),P[e[a]]=!!o;return P}(z);var N={elem:a("modernizr")};Modernizr._q.push(function(){delete N.elem});var T={style:N.elem.style};Modernizr._q.unshift(function(){delete T.style}),S.testAllProps=h;var A=S.prefixed=function(e,t,n){return 0===e.indexOf("@")?k(e):(-1!=e.indexOf("-")&&(e=s(e)),t?h(e,t,n):h(e,"pfx"))};Modernizr.addTest("objectfit",!!A("objectFit"),{aliases:["object-fit"]}),i(),o(g),delete S.addTest,delete S.addAsyncTest;for(var L=0;L<Modernizr._q.length;L++)Modernizr._q[L]();e.Modernizr=Modernizr}(window,document);
/* Source and licensing information for the above line(s) can be found at https://www.libertytravel.com/themes/custom/liberty_bootstrap/js/modernizr.min.js. */;
/* Source and licensing information for the line(s) below can be found at https://www.libertytravel.com/themes/custom/liberty_bootstrap/js/object-fit-fix.js. */
(function($){"use strict";if(!Modernizr.objectfit){$('.objectFitFix').each(function(){var $container=$(this),imgUrl=$container.find('img').prop('src');if(imgUrl)$container.css('backgroundImage','url('+imgUrl+')').addClass('compat-object-fit')});$('.objectFitFixCon').each(function(){var $container=$(this),imgUrl=$container.find('img').prop('src');if(imgUrl)$container.css('backgroundImage','url('+imgUrl+')').addClass('compat-object-fit')})}})(jQuery)
/* Source and licensing information for the above line(s) can be found at https://www.libertytravel.com/themes/custom/liberty_bootstrap/js/object-fit-fix.js. */;
/* Source and licensing information for the line(s) below can be found at https://www.libertytravel.com/modules/custom/dexie/js/dexie.min.js. */
/*
 * Dexie.js - a minimalistic wrapper for IndexedDB
 * ===============================================
 *
 * By David Fahlander, david.fahlander@gmail.com
 *
 * Version 2.0.4, Fri May 25 2018
 *
 * http://dexie.org
 *
 * Apache License Version 2.0, January 2004, http://www.apache.org/licenses/
 */
 
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.Dexie = factory());
}(this, (function () { 'use strict';

var keys = Object.keys;
var isArray = Array.isArray;
var _global = typeof self !== 'undefined' ? self :
    typeof window !== 'undefined' ? window :
        global;
function extend(obj, extension) {
    if (typeof extension !== 'object')
        return obj;
    keys(extension).forEach(function (key) {
        obj[key] = extension[key];
    });
    return obj;
}
var getProto = Object.getPrototypeOf;
var _hasOwn = {}.hasOwnProperty;
function hasOwn(obj, prop) {
    return _hasOwn.call(obj, prop);
}
function props(proto, extension) {
    if (typeof extension === 'function')
        extension = extension(getProto(proto));
    keys(extension).forEach(function (key) {
        setProp(proto, key, extension[key]);
    });
}
var defineProperty = Object.defineProperty;
function setProp(obj, prop, functionOrGetSet, options) {
    defineProperty(obj, prop, extend(functionOrGetSet && hasOwn(functionOrGetSet, "get") && typeof functionOrGetSet.get === 'function' ?
        { get: functionOrGetSet.get, set: functionOrGetSet.set, configurable: true } :
        { value: functionOrGetSet, configurable: true, writable: true }, options));
}
function derive(Child) {
    return {
        from: function (Parent) {
            Child.prototype = Object.create(Parent.prototype);
            setProp(Child.prototype, "constructor", Child);
            return {
                extend: props.bind(null, Child.prototype)
            };
        }
    };
}
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
function getPropertyDescriptor(obj, prop) {
    var pd = getOwnPropertyDescriptor(obj, prop), proto;
    return pd || (proto = getProto(obj)) && getPropertyDescriptor(proto, prop);
}
var _slice = [].slice;
function slice(args, start, end) {
    return _slice.call(args, start, end);
}
function override(origFunc, overridedFactory) {
    return overridedFactory(origFunc);
}
function assert(b) {
    if (!b)
        throw new Error("Assertion Failed");
}
function asap(fn) {
    if (_global.setImmediate)
        setImmediate(fn);
    else
        setTimeout(fn, 0);
}

/** Generate an object (hash map) based on given array.
 * @param extractor Function taking an array item and its index and returning an array of 2 items ([key, value]) to
 *        instert on the resulting object for each item in the array. If this function returns a falsy value, the
 *        current item wont affect the resulting object.
 */
function arrayToObject(array, extractor) {
    return array.reduce(function (result, item, i) {
        var nameAndValue = extractor(item, i);
        if (nameAndValue)
            result[nameAndValue[0]] = nameAndValue[1];
        return result;
    }, {});
}
function trycatcher(fn, reject) {
    return function () {
        try {
            fn.apply(this, arguments);
        }
        catch (e) {
            reject(e);
        }
    };
}
function tryCatch(fn, onerror, args) {
    try {
        fn.apply(null, args);
    }
    catch (ex) {
        onerror && onerror(ex);
    }
}
function getByKeyPath(obj, keyPath) {
    // http://www.w3.org/TR/IndexedDB/#steps-for-extracting-a-key-from-a-value-using-a-key-path
    if (hasOwn(obj, keyPath))
        return obj[keyPath]; // This line is moved from last to first for optimization purpose.
    if (!keyPath)
        return obj;
    if (typeof keyPath !== 'string') {
        var rv = [];
        for (var i = 0, l = keyPath.length; i < l; ++i) {
            var val = getByKeyPath(obj, keyPath[i]);
            rv.push(val);
        }
        return rv;
    }
    var period = keyPath.indexOf('.');
    if (period !== -1) {
        var innerObj = obj[keyPath.substr(0, period)];
        return innerObj === undefined ? undefined : getByKeyPath(innerObj, keyPath.substr(period + 1));
    }
    return undefined;
}
function setByKeyPath(obj, keyPath, value) {
    if (!obj || keyPath === undefined)
        return;
    if ('isFrozen' in Object && Object.isFrozen(obj))
        return;
    if (typeof keyPath !== 'string' && 'length' in keyPath) {
        assert(typeof value !== 'string' && 'length' in value);
        for (var i = 0, l = keyPath.length; i < l; ++i) {
            setByKeyPath(obj, keyPath[i], value[i]);
        }
    }
    else {
        var period = keyPath.indexOf('.');
        if (period !== -1) {
            var currentKeyPath = keyPath.substr(0, period);
            var remainingKeyPath = keyPath.substr(period + 1);
            if (remainingKeyPath === "")
                if (value === undefined)
                    delete obj[currentKeyPath];
                else
                    obj[currentKeyPath] = value;
            else {
                var innerObj = obj[currentKeyPath];
                if (!innerObj)
                    innerObj = (obj[currentKeyPath] = {});
                setByKeyPath(innerObj, remainingKeyPath, value);
            }
        }
        else {
            if (value === undefined)
                delete obj[keyPath];
            else
                obj[keyPath] = value;
        }
    }
}
function delByKeyPath(obj, keyPath) {
    if (typeof keyPath === 'string')
        setByKeyPath(obj, keyPath, undefined);
    else if ('length' in keyPath)
        [].map.call(keyPath, function (kp) {
            setByKeyPath(obj, kp, undefined);
        });
}
function shallowClone(obj) {
    var rv = {};
    for (var m in obj) {
        if (hasOwn(obj, m))
            rv[m] = obj[m];
    }
    return rv;
}
var concat = [].concat;
function flatten(a) {
    return concat.apply([], a);
}
//https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm
var intrinsicTypes = "Boolean,String,Date,RegExp,Blob,File,FileList,ArrayBuffer,DataView,Uint8ClampedArray,ImageData,Map,Set"
    .split(',').concat(flatten([8, 16, 32, 64].map(function (num) { return ["Int", "Uint", "Float"].map(function (t) { return t + num + "Array"; }); }))).filter(function (t) { return _global[t]; }).map(function (t) { return _global[t]; });
function deepClone(any) {
    if (!any || typeof any !== 'object')
        return any;
    var rv;
    if (isArray(any)) {
        rv = [];
        for (var i = 0, l = any.length; i < l; ++i) {
            rv.push(deepClone(any[i]));
        }
    }
    else if (intrinsicTypes.indexOf(any.constructor) >= 0) {
        rv = any;
    }
    else {
        rv = any.constructor ? Object.create(any.constructor.prototype) : {};
        for (var prop in any) {
            if (hasOwn(any, prop)) {
                rv[prop] = deepClone(any[prop]);
            }
        }
    }
    return rv;
}
function getObjectDiff(a, b, rv, prfx) {
    // Compares objects a and b and produces a diff object.
    rv = rv || {};
    prfx = prfx || '';
    keys(a).forEach(function (prop) {
        if (!hasOwn(b, prop))
            rv[prfx + prop] = undefined; // Property removed
        else {
            var ap = a[prop], bp = b[prop];
            if (typeof ap === 'object' && typeof bp === 'object' &&
                ap && bp &&
                // Now compare constructors are same (not equal because wont work in Safari)
                ('' + ap.constructor) === ('' + bp.constructor))
                // Same type of object but its properties may have changed
                getObjectDiff(ap, bp, rv, prfx + prop + ".");
            else if (ap !== bp)
                rv[prfx + prop] = b[prop]; // Primitive value changed
        }
    });
    keys(b).forEach(function (prop) {
        if (!hasOwn(a, prop)) {
            rv[prfx + prop] = b[prop]; // Property added
        }
    });
    return rv;
}
// If first argument is iterable or array-like, return it as an array
var iteratorSymbol = typeof Symbol !== 'undefined' && Symbol.iterator;
var getIteratorOf = iteratorSymbol ? function (x) {
    var i;
    return x != null && (i = x[iteratorSymbol]) && i.apply(x);
} : function () { return null; };
var NO_CHAR_ARRAY = {};
// Takes one or several arguments and returns an array based on the following criteras:
// * If several arguments provided, return arguments converted to an array in a way that
//   still allows javascript engine to optimize the code.
// * If single argument is an array, return a clone of it.
// * If this-pointer equals NO_CHAR_ARRAY, don't accept strings as valid iterables as a special
//   case to the two bullets below.
// * If single argument is an iterable, convert it to an array and return the resulting array.
// * If single argument is array-like (has length of type number), convert it to an array.
function getArrayOf(arrayLike) {
    var i, a, x, it;
    if (arguments.length === 1) {
        if (isArray(arrayLike))
            return arrayLike.slice();
        if (this === NO_CHAR_ARRAY && typeof arrayLike === 'string')
            return [arrayLike];
        if ((it = getIteratorOf(arrayLike))) {
            a = [];
            while ((x = it.next()), !x.done)
                a.push(x.value);
            return a;
        }
        if (arrayLike == null)
            return [arrayLike];
        i = arrayLike.length;
        if (typeof i === 'number') {
            a = new Array(i);
            while (i--)
                a[i] = arrayLike[i];
            return a;
        }
        return [arrayLike];
    }
    i = arguments.length;
    a = new Array(i);
    while (i--)
        a[i] = arguments[i];
    return a;
}

// By default, debug will be true only if platform is a web platform and its page is served from localhost.
// When debug = true, error's stacks will contain asyncronic long stacks.
var debug = typeof location !== 'undefined' &&
    // By default, use debug mode if served from localhost.
    /^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);
function setDebug(value, filter) {
    debug = value;
    libraryFilter = filter;
}
var libraryFilter = function () { return true; };
var NEEDS_THROW_FOR_STACK = !new Error("").stack;
function getErrorWithStack() {
    "use strict";
    if (NEEDS_THROW_FOR_STACK)
        try {
            // Doing something naughty in strict mode here to trigger a specific error
            // that can be explicitely ignored in debugger's exception settings.
            // If we'd just throw new Error() here, IE's debugger's exception settings
            // will just consider it as "exception thrown by javascript code" which is
            // something you wouldn't want it to ignore.
            getErrorWithStack.arguments;
            throw new Error(); // Fallback if above line don't throw.
        }
        catch (e) {
            return e;
        }
    return new Error();
}
function prettyStack(exception, numIgnoredFrames) {
    var stack = exception.stack;
    if (!stack)
        return "";
    numIgnoredFrames = (numIgnoredFrames || 0);
    if (stack.indexOf(exception.name) === 0)
        numIgnoredFrames += (exception.name + exception.message).split('\n').length;
    return stack.split('\n')
        .slice(numIgnoredFrames)
        .filter(libraryFilter)
        .map(function (frame) { return "\n" + frame; })
        .join('');
}
function deprecated(what, fn) {
    return function () {
        console.warn(what + " is deprecated. See https://github.com/dfahlander/Dexie.js/wiki/Deprecations. " + prettyStack(getErrorWithStack(), 1));
        return fn.apply(this, arguments);
    };
}

var dexieErrorNames = [
    'Modify',
    'Bulk',
    'OpenFailed',
    'VersionChange',
    'Schema',
    'Upgrade',
    'InvalidTable',
    'MissingAPI',
    'NoSuchDatabase',
    'InvalidArgument',
    'SubTransaction',
    'Unsupported',
    'Internal',
    'DatabaseClosed',
    'PrematureCommit',
    'ForeignAwait'
];
var idbDomErrorNames = [
    'Unknown',
    'Constraint',
    'Data',
    'TransactionInactive',
    'ReadOnly',
    'Version',
    'NotFound',
    'InvalidState',
    'InvalidAccess',
    'Abort',
    'Timeout',
    'QuotaExceeded',
    'Syntax',
    'DataClone'
];
var errorList = dexieErrorNames.concat(idbDomErrorNames);
var defaultTexts = {
    VersionChanged: "Database version changed by other database connection",
    DatabaseClosed: "Database has been closed",
    Abort: "Transaction aborted",
    TransactionInactive: "Transaction has already completed or failed"
};
//
// DexieError - base class of all out exceptions.
//
function DexieError(name, msg) {
    // Reason we don't use ES6 classes is because:
    // 1. It bloats transpiled code and increases size of minified code.
    // 2. It doesn't give us much in this case.
    // 3. It would require sub classes to call super(), which
    //    is not needed when deriving from Error.
    this._e = getErrorWithStack();
    this.name = name;
    this.message = msg;
}
derive(DexieError).from(Error).extend({
    stack: {
        get: function () {
            return this._stack ||
                (this._stack = this.name + ": " + this.message + prettyStack(this._e, 2));
        }
    },
    toString: function () { return this.name + ": " + this.message; }
});
function getMultiErrorMessage(msg, failures) {
    return msg + ". Errors: " + failures
        .map(function (f) { return f.toString(); })
        .filter(function (v, i, s) { return s.indexOf(v) === i; }) // Only unique error strings
        .join('\n');
}
//
// ModifyError - thrown in Collection.modify()
// Specific constructor because it contains members failures and failedKeys.
//
function ModifyError(msg, failures, successCount, failedKeys) {
    this._e = getErrorWithStack();
    this.failures = failures;
    this.failedKeys = failedKeys;
    this.successCount = successCount;
}
derive(ModifyError).from(DexieError);
function BulkError(msg, failures) {
    this._e = getErrorWithStack();
    this.name = "BulkError";
    this.failures = failures;
    this.message = getMultiErrorMessage(msg, failures);
}
derive(BulkError).from(DexieError);
//
//
// Dynamically generate error names and exception classes based
// on the names in errorList.
//
//
// Map of {ErrorName -> ErrorName + "Error"}
var errnames = errorList.reduce(function (obj, name) { return (obj[name] = name + "Error", obj); }, {});
// Need an alias for DexieError because we're gonna create subclasses with the same name.
var BaseException = DexieError;
// Map of {ErrorName -> exception constructor}
var exceptions = errorList.reduce(function (obj, name) {
    // Let the name be "DexieError" because this name may
    // be shown in call stack and when debugging. DexieError is
    // the most true name because it derives from DexieError,
    // and we cannot change Function.name programatically without
    // dynamically create a Function object, which would be considered
    // 'eval-evil'.
    var fullName = name + "Error";
    function DexieError(msgOrInner, inner) {
        this._e = getErrorWithStack();
        this.name = fullName;
        if (!msgOrInner) {
            this.message = defaultTexts[name] || fullName;
            this.inner = null;
        }
        else if (typeof msgOrInner === 'string') {
            this.message = msgOrInner;
            this.inner = inner || null;
        }
        else if (typeof msgOrInner === 'object') {
            this.message = msgOrInner.name + " " + msgOrInner.message;
            this.inner = msgOrInner;
        }
    }
    derive(DexieError).from(BaseException);
    obj[name] = DexieError;
    return obj;
}, {});
// Use ECMASCRIPT standard exceptions where applicable:
exceptions.Syntax = SyntaxError;
exceptions.Type = TypeError;
exceptions.Range = RangeError;
var exceptionMap = idbDomErrorNames.reduce(function (obj, name) {
    obj[name + "Error"] = exceptions[name];
    return obj;
}, {});
function mapError(domError, message) {
    if (!domError || domError instanceof DexieError || domError instanceof TypeError || domError instanceof SyntaxError || !domError.name || !exceptionMap[domError.name])
        return domError;
    var rv = new exceptionMap[domError.name](message || domError.message, domError);
    if ("stack" in domError) {
        // Derive stack from inner exception if it has a stack
        setProp(rv, "stack", { get: function () {
                return this.inner.stack;
            } });
    }
    return rv;
}
var fullNameExceptions = errorList.reduce(function (obj, name) {
    if (["Syntax", "Type", "Range"].indexOf(name) === -1)
        obj[name + "Error"] = exceptions[name];
    return obj;
}, {});
fullNameExceptions.ModifyError = ModifyError;
fullNameExceptions.DexieError = DexieError;
fullNameExceptions.BulkError = BulkError;

function nop() { }
function mirror(val) { return val; }
function pureFunctionChain(f1, f2) {
    // Enables chained events that takes ONE argument and returns it to the next function in chain.
    // This pattern is used in the hook("reading") event.
    if (f1 == null || f1 === mirror)
        return f2;
    return function (val) {
        return f2(f1(val));
    };
}
function callBoth(on1, on2) {
    return function () {
        on1.apply(this, arguments);
        on2.apply(this, arguments);
    };
}
function hookCreatingChain(f1, f2) {
    // Enables chained events that takes several arguments and may modify first argument by making a modification and then returning the same instance.
    // This pattern is used in the hook("creating") event.
    if (f1 === nop)
        return f2;
    return function () {
        var res = f1.apply(this, arguments);
        if (res !== undefined)
            arguments[0] = res;
        var onsuccess = this.onsuccess, // In case event listener has set this.onsuccess
        onerror = this.onerror; // In case event listener has set this.onerror
        this.onsuccess = null;
        this.onerror = null;
        var res2 = f2.apply(this, arguments);
        if (onsuccess)
            this.onsuccess = this.onsuccess ? callBoth(onsuccess, this.onsuccess) : onsuccess;
        if (onerror)
            this.onerror = this.onerror ? callBoth(onerror, this.onerror) : onerror;
        return res2 !== undefined ? res2 : res;
    };
}
function hookDeletingChain(f1, f2) {
    if (f1 === nop)
        return f2;
    return function () {
        f1.apply(this, arguments);
        var onsuccess = this.onsuccess, // In case event listener has set this.onsuccess
        onerror = this.onerror; // In case event listener has set this.onerror
        this.onsuccess = this.onerror = null;
        f2.apply(this, arguments);
        if (onsuccess)
            this.onsuccess = this.onsuccess ? callBoth(onsuccess, this.onsuccess) : onsuccess;
        if (onerror)
            this.onerror = this.onerror ? callBoth(onerror, this.onerror) : onerror;
    };
}
function hookUpdatingChain(f1, f2) {
    if (f1 === nop)
        return f2;
    return function (modifications) {
        var res = f1.apply(this, arguments);
        extend(modifications, res); // If f1 returns new modifications, extend caller's modifications with the result before calling next in chain.
        var onsuccess = this.onsuccess, // In case event listener has set this.onsuccess
        onerror = this.onerror; // In case event listener has set this.onerror
        this.onsuccess = null;
        this.onerror = null;
        var res2 = f2.apply(this, arguments);
        if (onsuccess)
            this.onsuccess = this.onsuccess ? callBoth(onsuccess, this.onsuccess) : onsuccess;
        if (onerror)
            this.onerror = this.onerror ? callBoth(onerror, this.onerror) : onerror;
        return res === undefined ?
            (res2 === undefined ? undefined : res2) :
            (extend(res, res2));
    };
}
function reverseStoppableEventChain(f1, f2) {
    if (f1 === nop)
        return f2;
    return function () {
        if (f2.apply(this, arguments) === false)
            return false;
        return f1.apply(this, arguments);
    };
}

function promisableChain(f1, f2) {
    if (f1 === nop)
        return f2;
    return function () {
        var res = f1.apply(this, arguments);
        if (res && typeof res.then === 'function') {
            var thiz = this, i = arguments.length, args = new Array(i);
            while (i--)
                args[i] = arguments[i];
            return res.then(function () {
                return f2.apply(thiz, args);
            });
        }
        return f2.apply(this, arguments);
    };
}

/*
 * Copyright (c) 2014-2017 David Fahlander
 * Apache License Version 2.0, January 2004, http://www.apache.org/licenses/LICENSE-2.0
 */
//
// Promise and Zone (PSD) for Dexie library
//
// I started out writing this Promise class by copying promise-light (https://github.com/taylorhakes/promise-light) by
// https://github.com/taylorhakes - an A+ and ECMASCRIPT 6 compliant Promise implementation.
//
// In previous versions this was fixed by not calling setTimeout when knowing that the resolve() or reject() came from another
// tick. In Dexie v1.4.0, I've rewritten the Promise class entirely. Just some fragments of promise-light is left. I use
// another strategy now that simplifies everything a lot: to always execute callbacks in a new micro-task, but have an own micro-task
// engine that is indexedDB compliant across all browsers.
// Promise class has also been optimized a lot with inspiration from bluebird - to avoid closures as much as possible.
// Also with inspiration from bluebird, asyncronic stacks in debug mode.
//
// Specific non-standard features of this Promise class:
// * Custom zone support (a.k.a. PSD) with ability to keep zones also when using native promises as well as
//   native async / await.
// * Promise.follow() method built upon the custom zone engine, that allows user to track all promises created from current stack frame
//   and below + all promises that those promises creates or awaits.
// * Detect any unhandled promise in a PSD-scope (PSD.onunhandled). 
//
// David Fahlander, https://github.com/dfahlander
//
// Just a pointer that only this module knows about.
// Used in Promise constructor to emulate a private constructor.
var INTERNAL = {};
// Async stacks (long stacks) must not grow infinitely.
var LONG_STACKS_CLIP_LIMIT = 100;
var MAX_LONG_STACKS = 20;
var ZONE_ECHO_LIMIT = 7;
var nativePromiseInstanceAndProto = (function () {
    try {
        // Be able to patch native async functions
        return new Function("let F=async ()=>{},p=F();return [p,Object.getPrototypeOf(p),Promise.resolve(),F.constructor];")();
    }
    catch (e) {
        var P = _global.Promise;
        return P ?
            [P.resolve(), P.prototype, P.resolve()] :
            [];
    }
})();
var resolvedNativePromise = nativePromiseInstanceAndProto[0];
var nativePromiseProto = nativePromiseInstanceAndProto[1];
var resolvedGlobalPromise = nativePromiseInstanceAndProto[2];
var nativePromiseThen = nativePromiseProto && nativePromiseProto.then;
var NativePromise = resolvedNativePromise && resolvedNativePromise.constructor;
var AsyncFunction = nativePromiseInstanceAndProto[3];
var patchGlobalPromise = !!resolvedGlobalPromise;
var stack_being_generated = false;
/* The default function used only for the very first promise in a promise chain.
   As soon as then promise is resolved or rejected, all next tasks will be executed in micro ticks
   emulated in this module. For indexedDB compatibility, this means that every method needs to
   execute at least one promise before doing an indexedDB operation. Dexie will always call
   db.ready().then() for every operation to make sure the indexedDB event is started in an
   indexedDB-compatible emulated micro task loop.
*/
var schedulePhysicalTick = resolvedGlobalPromise ?
    function () { resolvedGlobalPromise.then(physicalTick); }
    :
        _global.setImmediate ?
            // setImmediate supported. Those modern platforms also supports Function.bind().
            setImmediate.bind(null, physicalTick) :
            _global.MutationObserver ?
                // MutationObserver supported
                function () {
                    var hiddenDiv = document.createElement("div");
                    (new MutationObserver(function () {
                        physicalTick();
                        hiddenDiv = null;
                    })).observe(hiddenDiv, { attributes: true });
                    hiddenDiv.setAttribute('i', '1');
                } :
                // No support for setImmediate or MutationObserver. No worry, setTimeout is only called
                // once time. Every tick that follows will be our emulated micro tick.
                // Could have uses setTimeout.bind(null, 0, physicalTick) if it wasnt for that FF13 and below has a bug 
                function () { setTimeout(physicalTick, 0); };
// Configurable through Promise.scheduler.
// Don't export because it would be unsafe to let unknown
// code call it unless they do try..catch within their callback.
// This function can be retrieved through getter of Promise.scheduler though,
// but users must not do Promise.scheduler = myFuncThatThrowsException
var asap$1 = function (callback, args) {
    microtickQueue.push([callback, args]);
    if (needsNewPhysicalTick) {
        schedulePhysicalTick();
        needsNewPhysicalTick = false;
    }
};
var isOutsideMicroTick = true;
var needsNewPhysicalTick = true;
var unhandledErrors = [];
var rejectingErrors = [];
var currentFulfiller = null;
var rejectionMapper = mirror; // Remove in next major when removing error mapping of DOMErrors and DOMExceptions
var globalPSD = {
    id: 'global',
    global: true,
    ref: 0,
    unhandleds: [],
    onunhandled: globalError,
    pgp: false,
    env: {},
    finalize: function () {
        this.unhandleds.forEach(function (uh) {
            try {
                globalError(uh[0], uh[1]);
            }
            catch (e) { }
        });
    }
};
var PSD = globalPSD;
var microtickQueue = []; // Callbacks to call in this or next physical tick.
var numScheduledCalls = 0; // Number of listener-calls left to do in this physical tick.
var tickFinalizers = []; // Finalizers to call when there are no more async calls scheduled within current physical tick.
function Promise(fn) {
    if (typeof this !== 'object')
        throw new TypeError('Promises must be constructed via new');
    this._listeners = [];
    this.onuncatched = nop; // Deprecate in next major. Not needed. Better to use global error handler.
    // A library may set `promise._lib = true;` after promise is created to make resolve() or reject()
    // execute the microtask engine implicitely within the call to resolve() or reject().
    // To remain A+ compliant, a library must only set `_lib=true` if it can guarantee that the stack
    // only contains library code when calling resolve() or reject().
    // RULE OF THUMB: ONLY set _lib = true for promises explicitely resolving/rejecting directly from
    // global scope (event handler, timer etc)!
    this._lib = false;
    // Current async scope
    var psd = (this._PSD = PSD);
    if (debug) {
        this._stackHolder = getErrorWithStack();
        this._prev = null;
        this._numPrev = 0; // Number of previous promises (for long stacks)
    }
    if (typeof fn !== 'function') {
        if (fn !== INTERNAL)
            throw new TypeError('Not a function');
        // Private constructor (INTERNAL, state, value).
        // Used internally by Promise.resolve() and Promise.reject().
        this._state = arguments[1];
        this._value = arguments[2];
        if (this._state === false)
            handleRejection(this, this._value); // Map error, set stack and addPossiblyUnhandledError().
        return;
    }
    this._state = null; // null (=pending), false (=rejected) or true (=resolved)
    this._value = null; // error or result
    ++psd.ref; // Refcounting current scope
    executePromiseTask(this, fn);
}
// Prepare a property descriptor to put onto Promise.prototype.then
var thenProp = {
    get: function () {
        var psd = PSD, microTaskId = totalEchoes;
        function then(onFulfilled, onRejected) {
            var _this = this;
            var possibleAwait = !psd.global && (psd !== PSD || microTaskId !== totalEchoes);
            if (possibleAwait)
                decrementExpectedAwaits();
            var rv = new Promise(function (resolve, reject) {
                propagateToListener(_this, new Listener(nativeAwaitCompatibleWrap(onFulfilled, psd, possibleAwait), nativeAwaitCompatibleWrap(onRejected, psd, possibleAwait), resolve, reject, psd));
            });
            debug && linkToPreviousPromise(rv, this);
            return rv;
        }
        then.prototype = INTERNAL; // For idempotense, see setter below.
        return then;
    },
    // Be idempotent and allow another framework (such as zone.js or another instance of a Dexie.Promise module) to replace Promise.prototype.then
    // and when that framework wants to restore the original property, we must identify that and restore the original property descriptor.
    set: function (value) {
        setProp(this, 'then', value && value.prototype === INTERNAL ?
            thenProp : // Restore to original property descriptor.
            {
                get: function () {
                    return value; // Getter returning provided value (behaves like value is just changed)
                },
                set: thenProp.set // Keep a setter that is prepared to restore original.
            });
    }
};
props(Promise.prototype, {
    then: thenProp,
    _then: function (onFulfilled, onRejected) {
        // A little tinier version of then() that don't have to create a resulting promise.
        propagateToListener(this, new Listener(null, null, onFulfilled, onRejected, PSD));
    },
    catch: function (onRejected) {
        if (arguments.length === 1)
            return this.then(null, onRejected);
        // First argument is the Error type to catch
        var type = arguments[0], handler = arguments[1];
        return typeof type === 'function' ? this.then(null, function (err) {
            // Catching errors by its constructor type (similar to java / c++ / c#)
            // Sample: promise.catch(TypeError, function (e) { ... });
            return err instanceof type ? handler(err) : PromiseReject(err);
        })
            : this.then(null, function (err) {
                // Catching errors by the error.name property. Makes sense for indexedDB where error type
                // is always DOMError but where e.name tells the actual error type.
                // Sample: promise.catch('ConstraintError', function (e) { ... });
                return err && err.name === type ? handler(err) : PromiseReject(err);
            });
    },
    finally: function (onFinally) {
        return this.then(function (value) {
            onFinally();
            return value;
        }, function (err) {
            onFinally();
            return PromiseReject(err);
        });
    },
    stack: {
        get: function () {
            if (this._stack)
                return this._stack;
            try {
                stack_being_generated = true;
                var stacks = getStack(this, [], MAX_LONG_STACKS);
                var stack = stacks.join("\nFrom previous: ");
                if (this._state !== null)
                    this._stack = stack; // Stack may be updated on reject.
                return stack;
            }
            finally {
                stack_being_generated = false;
            }
        }
    },
    timeout: function (ms, msg) {
        var _this = this;
        return ms < Infinity ?
            new Promise(function (resolve, reject) {
                var handle = setTimeout(function () { return reject(new exceptions.Timeout(msg)); }, ms);
                _this.then(resolve, reject).finally(clearTimeout.bind(null, handle));
            }) : this;
    }
});
if (typeof Symbol !== 'undefined' && Symbol.toStringTag)
    setProp(Promise.prototype, Symbol.toStringTag, 'Promise');
// Now that Promise.prototype is defined, we have all it takes to set globalPSD.env.
// Environment globals snapshotted on leaving global zone
globalPSD.env = snapShot();
function Listener(onFulfilled, onRejected, resolve, reject, zone) {
    this.onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : null;
    this.onRejected = typeof onRejected === 'function' ? onRejected : null;
    this.resolve = resolve;
    this.reject = reject;
    this.psd = zone;
}
// Promise Static Properties
props(Promise, {
    all: function () {
        var values = getArrayOf.apply(null, arguments) // Supports iterables, implicit arguments and array-like.
            .map(onPossibleParallellAsync); // Handle parallell async/awaits 
        return new Promise(function (resolve, reject) {
            if (values.length === 0)
                resolve([]);
            var remaining = values.length;
            values.forEach(function (a, i) { return Promise.resolve(a).then(function (x) {
                values[i] = x;
                if (!--remaining)
                    resolve(values);
            }, reject); });
        });
    },
    resolve: function (value) {
        if (value instanceof Promise)
            return value;
        if (value && typeof value.then === 'function')
            return new Promise(function (resolve, reject) {
                value.then(resolve, reject);
            });
        var rv = new Promise(INTERNAL, true, value);
        linkToPreviousPromise(rv, currentFulfiller);
        return rv;
    },
    reject: PromiseReject,
    race: function () {
        var values = getArrayOf.apply(null, arguments).map(onPossibleParallellAsync);
        return new Promise(function (resolve, reject) {
            values.map(function (value) { return Promise.resolve(value).then(resolve, reject); });
        });
    },
    PSD: {
        get: function () { return PSD; },
        set: function (value) { return PSD = value; }
    },
    //totalEchoes: {get: ()=>totalEchoes},
    //task: {get: ()=>task},
    newPSD: newScope,
    usePSD: usePSD,
    scheduler: {
        get: function () { return asap$1; },
        set: function (value) { asap$1 = value; }
    },
    rejectionMapper: {
        get: function () { return rejectionMapper; },
        set: function (value) { rejectionMapper = value; } // Map reject failures
    },
    follow: function (fn, zoneProps) {
        return new Promise(function (resolve, reject) {
            return newScope(function (resolve, reject) {
                var psd = PSD;
                psd.unhandleds = []; // For unhandled standard- or 3rd party Promises. Checked at psd.finalize()
                psd.onunhandled = reject; // Triggered directly on unhandled promises of this library.
                psd.finalize = callBoth(function () {
                    var _this = this;
                    // Unhandled standard or 3rd part promises are put in PSD.unhandleds and
                    // examined upon scope completion while unhandled rejections in this Promise
                    // will trigger directly through psd.onunhandled
                    run_at_end_of_this_or_next_physical_tick(function () {
                        _this.unhandleds.length === 0 ? resolve() : reject(_this.unhandleds[0]);
                    });
                }, psd.finalize);
                fn();
            }, zoneProps, resolve, reject);
        });
    }
});
/**
* Take a potentially misbehaving resolver function and make sure
* onFulfilled and onRejected are only called once.
*
* Makes no guarantees about asynchrony.
*/
function executePromiseTask(promise, fn) {
    // Promise Resolution Procedure:
    // https://github.com/promises-aplus/promises-spec#the-promise-resolution-procedure
    try {
        fn(function (value) {
            if (promise._state !== null)
                return; // Already settled
            if (value === promise)
                throw new TypeError('A promise cannot be resolved with itself.');
            var shouldExecuteTick = promise._lib && beginMicroTickScope();
            if (value && typeof value.then === 'function') {
                executePromiseTask(promise, function (resolve, reject) {
                    value instanceof Promise ?
                        value._then(resolve, reject) :
                        value.then(resolve, reject);
                });
            }
            else {
                promise._state = true;
                promise._value = value;
                propagateAllListeners(promise);
            }
            if (shouldExecuteTick)
                endMicroTickScope();
        }, handleRejection.bind(null, promise)); // If Function.bind is not supported. Exception is handled in catch below
    }
    catch (ex) {
        handleRejection(promise, ex);
    }
}
function handleRejection(promise, reason) {
    rejectingErrors.push(reason);
    if (promise._state !== null)
        return;
    var shouldExecuteTick = promise._lib && beginMicroTickScope();
    reason = rejectionMapper(reason);
    promise._state = false;
    promise._value = reason;
    debug && reason !== null && typeof reason === 'object' && !reason._promise && tryCatch(function () {
        var origProp = getPropertyDescriptor(reason, "stack");
        reason._promise = promise;
        setProp(reason, "stack", {
            get: function () {
                return stack_being_generated ?
                    origProp && (origProp.get ?
                        origProp.get.apply(reason) :
                        origProp.value) :
                    promise.stack;
            }
        });
    });
    // Add the failure to a list of possibly uncaught errors
    addPossiblyUnhandledError(promise);
    propagateAllListeners(promise);
    if (shouldExecuteTick)
        endMicroTickScope();
}
function propagateAllListeners(promise) {
    //debug && linkToPreviousPromise(promise);
    var listeners = promise._listeners;
    promise._listeners = [];
    for (var i = 0, len = listeners.length; i < len; ++i) {
        propagateToListener(promise, listeners[i]);
    }
    var psd = promise._PSD;
    --psd.ref || psd.finalize(); // if psd.ref reaches zero, call psd.finalize();
    if (numScheduledCalls === 0) {
        // If numScheduledCalls is 0, it means that our stack is not in a callback of a scheduled call,
        // and that no deferreds where listening to this rejection or success.
        // Since there is a risk that our stack can contain application code that may
        // do stuff after this code is finished that may generate new calls, we cannot
        // call finalizers here.
        ++numScheduledCalls;
        asap$1(function () {
            if (--numScheduledCalls === 0)
                finalizePhysicalTick(); // Will detect unhandled errors
        }, []);
    }
}
function propagateToListener(promise, listener) {
    if (promise._state === null) {
        promise._listeners.push(listener);
        return;
    }
    var cb = promise._state ? listener.onFulfilled : listener.onRejected;
    if (cb === null) {
        // This Listener doesnt have a listener for the event being triggered (onFulfilled or onReject) so lets forward the event to any eventual listeners on the Promise instance returned by then() or catch()
        return (promise._state ? listener.resolve : listener.reject)(promise._value);
    }
    ++listener.psd.ref;
    ++numScheduledCalls;
    asap$1(callListener, [cb, promise, listener]);
}
function callListener(cb, promise, listener) {
    try {
        // Set static variable currentFulfiller to the promise that is being fullfilled,
        // so that we connect the chain of promises (for long stacks support)
        currentFulfiller = promise;
        // Call callback and resolve our listener with it's return value.
        var ret, value = promise._value;
        if (promise._state) {
            // cb is onResolved
            ret = cb(value);
        }
        else {
            // cb is onRejected
            if (rejectingErrors.length)
                rejectingErrors = [];
            ret = cb(value);
            if (rejectingErrors.indexOf(value) === -1)
                markErrorAsHandled(promise); // Callback didnt do Promise.reject(err) nor reject(err) onto another promise.
        }
        listener.resolve(ret);
    }
    catch (e) {
        // Exception thrown in callback. Reject our listener.
        listener.reject(e);
    }
    finally {
        // Restore env and currentFulfiller.
        currentFulfiller = null;
        if (--numScheduledCalls === 0)
            finalizePhysicalTick();
        --listener.psd.ref || listener.psd.finalize();
    }
}
function getStack(promise, stacks, limit) {
    if (stacks.length === limit)
        return stacks;
    var stack = "";
    if (promise._state === false) {
        var failure = promise._value, errorName, message;
        if (failure != null) {
            errorName = failure.name || "Error";
            message = failure.message || failure;
            stack = prettyStack(failure, 0);
        }
        else {
            errorName = failure; // If error is undefined or null, show that.
            message = "";
        }
        stacks.push(errorName + (message ? ": " + message : "") + stack);
    }
    if (debug) {
        stack = prettyStack(promise._stackHolder, 2);
        if (stack && stacks.indexOf(stack) === -1)
            stacks.push(stack);
        if (promise._prev)
            getStack(promise._prev, stacks, limit);
    }
    return stacks;
}
function linkToPreviousPromise(promise, prev) {
    // Support long stacks by linking to previous completed promise.
    var numPrev = prev ? prev._numPrev + 1 : 0;
    if (numPrev < LONG_STACKS_CLIP_LIMIT) {
        promise._prev = prev;
        promise._numPrev = numPrev;
    }
}
/* The callback to schedule with setImmediate() or setTimeout().
   It runs a virtual microtick and executes any callback registered in microtickQueue.
 */
function physicalTick() {
    beginMicroTickScope() && endMicroTickScope();
}
function beginMicroTickScope() {
    var wasRootExec = isOutsideMicroTick;
    isOutsideMicroTick = false;
    needsNewPhysicalTick = false;
    return wasRootExec;
}
/* Executes micro-ticks without doing try..catch.
   This can be possible because we only use this internally and
   the registered functions are exception-safe (they do try..catch
   internally before calling any external method). If registering
   functions in the microtickQueue that are not exception-safe, this
   would destroy the framework and make it instable. So we don't export
   our asap method.
*/
function endMicroTickScope() {
    var callbacks, i, l;
    do {
        while (microtickQueue.length > 0) {
            callbacks = microtickQueue;
            microtickQueue = [];
            l = callbacks.length;
            for (i = 0; i < l; ++i) {
                var item = callbacks[i];
                item[0].apply(null, item[1]);
            }
        }
    } while (microtickQueue.length > 0);
    isOutsideMicroTick = true;
    needsNewPhysicalTick = true;
}
function finalizePhysicalTick() {
    var unhandledErrs = unhandledErrors;
    unhandledErrors = [];
    unhandledErrs.forEach(function (p) {
        p._PSD.onunhandled.call(null, p._value, p);
    });
    var finalizers = tickFinalizers.slice(0); // Clone first because finalizer may remove itself from list.
    var i = finalizers.length;
    while (i)
        finalizers[--i]();
}
function run_at_end_of_this_or_next_physical_tick(fn) {
    function finalizer() {
        fn();
        tickFinalizers.splice(tickFinalizers.indexOf(finalizer), 1);
    }
    tickFinalizers.push(finalizer);
    ++numScheduledCalls;
    asap$1(function () {
        if (--numScheduledCalls === 0)
            finalizePhysicalTick();
    }, []);
}
function addPossiblyUnhandledError(promise) {
    // Only add to unhandledErrors if not already there. The first one to add to this list
    // will be upon the first rejection so that the root cause (first promise in the
    // rejection chain) is the one listed.
    if (!unhandledErrors.some(function (p) { return p._value === promise._value; }))
        unhandledErrors.push(promise);
}
function markErrorAsHandled(promise) {
    // Called when a reject handled is actually being called.
    // Search in unhandledErrors for any promise whos _value is this promise_value (list
    // contains only rejected promises, and only one item per error)
    var i = unhandledErrors.length;
    while (i)
        if (unhandledErrors[--i]._value === promise._value) {
            // Found a promise that failed with this same error object pointer,
            // Remove that since there is a listener that actually takes care of it.
            unhandledErrors.splice(i, 1);
            return;
        }
}
function PromiseReject(reason) {
    return new Promise(INTERNAL, false, reason);
}
function wrap(fn, errorCatcher) {
    var psd = PSD;
    return function () {
        var wasRootExec = beginMicroTickScope(), outerScope = PSD;
        try {
            switchToZone(psd, true);
            return fn.apply(this, arguments);
        }
        catch (e) {
            errorCatcher && errorCatcher(e);
        }
        finally {
            switchToZone(outerScope, false);
            if (wasRootExec)
                endMicroTickScope();
        }
    };
}
//
// variables used for native await support
//
var task = { awaits: 0, echoes: 0, id: 0 }; // The ongoing macro-task when using zone-echoing.
var taskCounter = 0; // ID counter for macro tasks.
var zoneStack = []; // Stack of left zones to restore asynchronically.
var zoneEchoes = 0; // zoneEchoes is a must in order to persist zones between native await expressions.
var totalEchoes = 0; // ID counter for micro-tasks. Used to detect possible native await in our Promise.prototype.then.
var zone_id_counter = 0;
function newScope(fn, props$$1, a1, a2) {
    var parent = PSD, psd = Object.create(parent);
    psd.parent = parent;
    psd.ref = 0;
    psd.global = false;
    psd.id = ++zone_id_counter;
    // Prepare for promise patching (done in usePSD):
    var globalEnv = globalPSD.env;
    psd.env = patchGlobalPromise ? {
        Promise: Promise,
        PromiseProp: { value: Promise, configurable: true, writable: true },
        all: Promise.all,
        race: Promise.race,
        resolve: Promise.resolve,
        reject: Promise.reject,
        nthen: getPatchedPromiseThen(globalEnv.nthen, psd),
        gthen: getPatchedPromiseThen(globalEnv.gthen, psd) // global then
    } : {};
    if (props$$1)
        extend(psd, props$$1);
    // unhandleds and onunhandled should not be specifically set here.
    // Leave them on parent prototype.
    // unhandleds.push(err) will push to parent's prototype
    // onunhandled() will call parents onunhandled (with this scope's this-pointer though!)
    ++parent.ref;
    psd.finalize = function () {
        --this.parent.ref || this.parent.finalize();
    };
    var rv = usePSD(psd, fn, a1, a2);
    if (psd.ref === 0)
        psd.finalize();
    return rv;
}
// Function to call if scopeFunc returns NativePromise
// Also for each NativePromise in the arguments to Promise.all()
function incrementExpectedAwaits() {
    if (!task.id)
        task.id = ++taskCounter;
    ++task.awaits;
    task.echoes += ZONE_ECHO_LIMIT;
    return task.id;
}
// Function to call when 'then' calls back on a native promise where onAwaitExpected() had been called.
// Also call this when a native await calls then method on a promise. In that case, don't supply
// sourceTaskId because we already know it refers to current task.
function decrementExpectedAwaits(sourceTaskId) {
    if (!task.awaits || (sourceTaskId && sourceTaskId !== task.id))
        return;
    if (--task.awaits === 0)
        task.id = 0;
    task.echoes = task.awaits * ZONE_ECHO_LIMIT; // Will reset echoes to 0 if awaits is 0.
}
// Call from Promise.all() and Promise.race()
function onPossibleParallellAsync(possiblePromise) {
    if (task.echoes && possiblePromise && possiblePromise.constructor === NativePromise) {
        incrementExpectedAwaits();
        return possiblePromise.then(function (x) {
            decrementExpectedAwaits();
            return x;
        }, function (e) {
            decrementExpectedAwaits();
            return rejection(e);
        });
    }
    return possiblePromise;
}
function zoneEnterEcho(targetZone) {
    ++totalEchoes;
    if (!task.echoes || --task.echoes === 0) {
        task.echoes = task.id = 0; // Cancel zone echoing.
    }
    zoneStack.push(PSD);
    switchToZone(targetZone, true);
}
function zoneLeaveEcho() {
    var zone = zoneStack[zoneStack.length - 1];
    zoneStack.pop();
    switchToZone(zone, false);
}
function switchToZone(targetZone, bEnteringZone) {
    var currentZone = PSD;
    if (bEnteringZone ? task.echoes && (!zoneEchoes++ || targetZone !== PSD) : zoneEchoes && (!--zoneEchoes || targetZone !== PSD)) {
        // Enter or leave zone asynchronically as well, so that tasks initiated during current tick
        // will be surrounded by the zone when they are invoked.
        enqueueNativeMicroTask(bEnteringZone ? zoneEnterEcho.bind(null, targetZone) : zoneLeaveEcho);
    }
    if (targetZone === PSD)
        return;
    PSD = targetZone; // The actual zone switch occurs at this line.
    // Snapshot on every leave from global zone.
    if (currentZone === globalPSD)
        globalPSD.env = snapShot();
    if (patchGlobalPromise) {
        // Let's patch the global and native Promises (may be same or may be different)
        var GlobalPromise = globalPSD.env.Promise;
        // Swich environments (may be PSD-zone or the global zone. Both apply.)
        var targetEnv = targetZone.env;
        // Change Promise.prototype.then for native and global Promise (they MAY differ on polyfilled environments, but both can be accessed)
        // Must be done on each zone change because the patched method contains targetZone in its closure.
        nativePromiseProto.then = targetEnv.nthen;
        GlobalPromise.prototype.then = targetEnv.gthen;
        if (currentZone.global || targetZone.global) {
            // Leaving or entering global zone. It's time to patch / restore global Promise.
            // Set this Promise to window.Promise so that transiled async functions will work on Firefox, Safari and IE, as well as with Zonejs and angular.
            Object.defineProperty(_global, 'Promise', targetEnv.PromiseProp);
            // Support Promise.all() etc to work indexedDB-safe also when people are including es6-promise as a module (they might
            // not be accessing global.Promise but a local reference to it)
            GlobalPromise.all = targetEnv.all;
            GlobalPromise.race = targetEnv.race;
            GlobalPromise.resolve = targetEnv.resolve;
            GlobalPromise.reject = targetEnv.reject;
        }
    }
}
function snapShot() {
    var GlobalPromise = _global.Promise;
    return patchGlobalPromise ? {
        Promise: GlobalPromise,
        PromiseProp: Object.getOwnPropertyDescriptor(_global, "Promise"),
        all: GlobalPromise.all,
        race: GlobalPromise.race,
        resolve: GlobalPromise.resolve,
        reject: GlobalPromise.reject,
        nthen: nativePromiseProto.then,
        gthen: GlobalPromise.prototype.then
    } : {};
}
function usePSD(psd, fn, a1, a2, a3) {
    var outerScope = PSD;
    try {
        switchToZone(psd, true);
        return fn(a1, a2, a3);
    }
    finally {
        switchToZone(outerScope, false);
    }
}
function enqueueNativeMicroTask(job) {
    //
    // Precondition: nativePromiseThen !== undefined
    //
    nativePromiseThen.call(resolvedNativePromise, job);
}
function nativeAwaitCompatibleWrap(fn, zone, possibleAwait) {
    return typeof fn !== 'function' ? fn : function () {
        var outerZone = PSD;
        if (possibleAwait)
            incrementExpectedAwaits();
        switchToZone(zone, true);
        try {
            return fn.apply(this, arguments);
        }
        finally {
            switchToZone(outerZone, false);
        }
    };
}
function getPatchedPromiseThen(origThen, zone) {
    return function (onResolved, onRejected) {
        return origThen.call(this, nativeAwaitCompatibleWrap(onResolved, zone, false), nativeAwaitCompatibleWrap(onRejected, zone, false));
    };
}
var UNHANDLEDREJECTION = "unhandledrejection";
function globalError(err, promise) {
    var rv;
    try {
        rv = promise.onuncatched(err);
    }
    catch (e) { }
    if (rv !== false)
        try {
            var event, eventData = { promise: promise, reason: err };
            if (_global.document && document.createEvent) {
                event = document.createEvent('Event');
                event.initEvent(UNHANDLEDREJECTION, true, true);
                extend(event, eventData);
            }
            else if (_global.CustomEvent) {
                event = new CustomEvent(UNHANDLEDREJECTION, { detail: eventData });
                extend(event, eventData);
            }
            if (event && _global.dispatchEvent) {
                dispatchEvent(event);
                if (!_global.PromiseRejectionEvent && _global.onunhandledrejection)
                    // No native support for PromiseRejectionEvent but user has set window.onunhandledrejection. Manually call it.
                    try {
                        _global.onunhandledrejection(event);
                    }
                    catch (_) { }
            }
            if (!event.defaultPrevented) {
                console.warn("Unhandled rejection: " + (err.stack || err));
            }
        }
        catch (e) { }
}
var rejection = Promise.reject;

function Events(ctx) {
    var evs = {};
    var rv = function (eventName, subscriber) {
        if (subscriber) {
            // Subscribe. If additional arguments than just the subscriber was provided, forward them as well.
            var i = arguments.length, args = new Array(i - 1);
            while (--i)
                args[i - 1] = arguments[i];
            evs[eventName].subscribe.apply(null, args);
            return ctx;
        }
        else if (typeof (eventName) === 'string') {
            // Return interface allowing to fire or unsubscribe from event
            return evs[eventName];
        }
    };
    rv.addEventType = add;
    for (var i = 1, l = arguments.length; i < l; ++i) {
        add(arguments[i]);
    }
    return rv;
    function add(eventName, chainFunction, defaultFunction) {
        if (typeof eventName === 'object')
            return addConfiguredEvents(eventName);
        if (!chainFunction)
            chainFunction = reverseStoppableEventChain;
        if (!defaultFunction)
            defaultFunction = nop;
        var context = {
            subscribers: [],
            fire: defaultFunction,
            subscribe: function (cb) {
                if (context.subscribers.indexOf(cb) === -1) {
                    context.subscribers.push(cb);
                    context.fire = chainFunction(context.fire, cb);
                }
            },
            unsubscribe: function (cb) {
                context.subscribers = context.subscribers.filter(function (fn) { return fn !== cb; });
                context.fire = context.subscribers.reduce(chainFunction, defaultFunction);
            }
        };
        evs[eventName] = rv[eventName] = context;
        return context;
    }
    function addConfiguredEvents(cfg) {
        // events(this, {reading: [functionChain, nop]});
        keys(cfg).forEach(function (eventName) {
            var args = cfg[eventName];
            if (isArray(args)) {
                add(eventName, cfg[eventName][0], cfg[eventName][1]);
            }
            else if (args === 'asap') {
                // Rather than approaching event subscription using a functional approach, we here do it in a for-loop where subscriber is executed in its own stack
                // enabling that any exception that occur wont disturb the initiator and also not nescessary be catched and forgotten.
                var context = add(eventName, mirror, function fire() {
                    // Optimazation-safe cloning of arguments into args.
                    var i = arguments.length, args = new Array(i);
                    while (i--)
                        args[i] = arguments[i];
                    // All each subscriber:
                    context.subscribers.forEach(function (fn) {
                        asap(function fireEvent() {
                            fn.apply(null, args);
                        });
                    });
                });
            }
            else
                throw new exceptions.InvalidArgument("Invalid event config");
        });
    }
}

/*
 * Dexie.js - a minimalistic wrapper for IndexedDB
 * ===============================================
 *
 * Copyright (c) 2014-2017 David Fahlander
 *
 * Version 2.0.4, Fri May 25 2018
 *
 * http://dexie.org
 *
 * Apache License Version 2.0, January 2004, http://www.apache.org/licenses/LICENSE-2.0
 *
 */
var DEXIE_VERSION = '2.0.4';
var maxString = String.fromCharCode(65535);
var maxKey = (function () { try {
    IDBKeyRange.only([[]]);
    return [[]];
}
catch (e) {
    return maxString;
} })();
var minKey = -Infinity;
var INVALID_KEY_ARGUMENT = "Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.";
var STRING_EXPECTED = "String expected.";
var connections = [];
var isIEOrEdge = typeof navigator !== 'undefined' && /(MSIE|Trident|Edge)/.test(navigator.userAgent);
var hasIEDeleteObjectStoreBug = isIEOrEdge;
var hangsOnDeleteLargeKeyRange = isIEOrEdge;
var dexieStackFrameFilter = function (frame) { return !/(dexie\.js|dexie\.min\.js)/.test(frame); };
var dbNamesDB; // Global database for backing Dexie.getDatabaseNames() on browser without indexedDB.webkitGetDatabaseNames() 
// Init debug
setDebug(debug, dexieStackFrameFilter);
function Dexie(dbName, options) {
    /// <param name="options" type="Object" optional="true">Specify only if you wich to control which addons that should run on this instance</param>
    var deps = Dexie.dependencies;
    var opts = extend({
        // Default Options
        addons: Dexie.addons,
        autoOpen: true,
        indexedDB: deps.indexedDB,
        IDBKeyRange: deps.IDBKeyRange // Backend IDBKeyRange api. Default to browser env.
    }, options);
    var addons = opts.addons, autoOpen = opts.autoOpen, indexedDB = opts.indexedDB, IDBKeyRange = opts.IDBKeyRange;
    var globalSchema = this._dbSchema = {};
    var versions = [];
    var dbStoreNames = [];
    var allTables = {};
    ///<var type="IDBDatabase" />
    var idbdb = null; // Instance of IDBDatabase
    var dbOpenError = null;
    var isBeingOpened = false;
    var onReadyBeingFired = null;
    var openComplete = false;
    var READONLY = "readonly", READWRITE = "readwrite";
    var db = this;
    var dbReadyResolve, dbReadyPromise = new Promise(function (resolve) {
        dbReadyResolve = resolve;
    }), cancelOpen, openCanceller = new Promise(function (_, reject) {
        cancelOpen = reject;
    });
    var autoSchema = true;
    var hasNativeGetDatabaseNames = !!getNativeGetDatabaseNamesFn(indexedDB), hasGetAll;
    function init() {
        // Default subscribers to "versionchange" and "blocked".
        // Can be overridden by custom handlers. If custom handlers return false, these default
        // behaviours will be prevented.
        db.on("versionchange", function (ev) {
            // Default behavior for versionchange event is to close database connection.
            // Caller can override this behavior by doing db.on("versionchange", function(){ return false; });
            // Let's not block the other window from making it's delete() or open() call.
            // NOTE! This event is never fired in IE,Edge or Safari.
            if (ev.newVersion > 0)
                console.warn("Another connection wants to upgrade database '" + db.name + "'. Closing db now to resume the upgrade.");
            else
                console.warn("Another connection wants to delete database '" + db.name + "'. Closing db now to resume the delete request.");
            db.close();
            // In many web applications, it would be recommended to force window.reload()
            // when this event occurs. To do that, subscribe to the versionchange event
            // and call window.location.reload(true) if ev.newVersion > 0 (not a deletion)
            // The reason for this is that your current web app obviously has old schema code that needs
            // to be updated. Another window got a newer version of the app and needs to upgrade DB but
            // your window is blocking it unless we close it here.
        });
        db.on("blocked", function (ev) {
            if (!ev.newVersion || ev.newVersion < ev.oldVersion)
                console.warn("Dexie.delete('" + db.name + "') was blocked");
            else
                console.warn("Upgrade '" + db.name + "' blocked by other connection holding version " + ev.oldVersion / 10);
        });
    }
    //
    //
    //
    // ------------------------- Versioning Framework---------------------------
    //
    //
    //
    this.version = function (versionNumber) {
        /// <param name="versionNumber" type="Number"></param>
        /// <returns type="Version"></returns>
        if (idbdb || isBeingOpened)
            throw new exceptions.Schema("Cannot add version when database is open");
        this.verno = Math.max(this.verno, versionNumber);
        var versionInstance = versions.filter(function (v) { return v._cfg.version === versionNumber; })[0];
        if (versionInstance)
            return versionInstance;
        versionInstance = new Version(versionNumber);
        versions.push(versionInstance);
        versions.sort(lowerVersionFirst);
        // Disable autoschema mode, as at least one version is specified.
        autoSchema = false;
        return versionInstance;
    };
    function Version(versionNumber) {
        this._cfg = {
            version: versionNumber,
            storesSource: null,
            dbschema: {},
            tables: {},
            contentUpgrade: null
        };
        this.stores({}); // Derive earlier schemas by default.
    }
    extend(Version.prototype, {
        stores: function (stores) {
            /// <summary>
            ///   Defines the schema for a particular version
            /// </summary>
            /// <param name="stores" type="Object">
            /// Example: <br/>
            ///   {users: "id++,first,last,&amp;username,*email", <br/>
            ///   passwords: "id++,&amp;username"}<br/>
            /// <br/>
            /// Syntax: {Table: "[primaryKey][++],[&amp;][*]index1,[&amp;][*]index2,..."}<br/><br/>
            /// Special characters:<br/>
            ///  "&amp;"  means unique key, <br/>
            ///  "*"  means value is multiEntry, <br/>
            ///  "++" means auto-increment and only applicable for primary key <br/>
            /// </param>
            this._cfg.storesSource = this._cfg.storesSource ? extend(this._cfg.storesSource, stores) : stores;
            // Derive stores from earlier versions if they are not explicitely specified as null or a new syntax.
            var storesSpec = {};
            versions.forEach(function (version) {
                extend(storesSpec, version._cfg.storesSource);
            });
            var dbschema = (this._cfg.dbschema = {});
            this._parseStoresSpec(storesSpec, dbschema);
            // Update the latest schema to this version
            // Update API
            globalSchema = db._dbSchema = dbschema;
            removeTablesApi([allTables, db, Transaction.prototype]); // Keep Transaction.prototype even though it should be depr.
            setApiOnPlace([allTables, db, Transaction.prototype, this._cfg.tables], keys(dbschema), dbschema);
            dbStoreNames = keys(dbschema);
            return this;
        },
        upgrade: function (upgradeFunction) {
            this._cfg.contentUpgrade = upgradeFunction;
            return this;
        },
        _parseStoresSpec: function (stores, outSchema) {
            keys(stores).forEach(function (tableName) {
                if (stores[tableName] !== null) {
                    var instanceTemplate = {};
                    var indexes = parseIndexSyntax(stores[tableName]);
                    var primKey = indexes.shift();
                    if (primKey.multi)
                        throw new exceptions.Schema("Primary key cannot be multi-valued");
                    if (primKey.keyPath)
                        setByKeyPath(instanceTemplate, primKey.keyPath, primKey.auto ? 0 : primKey.keyPath);
                    indexes.forEach(function (idx) {
                        if (idx.auto)
                            throw new exceptions.Schema("Only primary key can be marked as autoIncrement (++)");
                        if (!idx.keyPath)
                            throw new exceptions.Schema("Index must have a name and cannot be an empty string");
                        setByKeyPath(instanceTemplate, idx.keyPath, idx.compound ? idx.keyPath.map(function () { return ""; }) : "");
                    });
                    outSchema[tableName] = new TableSchema(tableName, primKey, indexes, instanceTemplate);
                }
            });
        }
    });
    function runUpgraders(oldVersion, idbtrans, reject) {
        var trans = db._createTransaction(READWRITE, dbStoreNames, globalSchema);
        trans.create(idbtrans);
        trans._completion.catch(reject);
        var rejectTransaction = trans._reject.bind(trans);
        newScope(function () {
            PSD.trans = trans;
            if (oldVersion === 0) {
                // Create tables:
                keys(globalSchema).forEach(function (tableName) {
                    createTable(idbtrans, tableName, globalSchema[tableName].primKey, globalSchema[tableName].indexes);
                });
                Promise.follow(function () { return db.on.populate.fire(trans); }).catch(rejectTransaction);
            }
            else
                updateTablesAndIndexes(oldVersion, trans, idbtrans).catch(rejectTransaction);
        });
    }
    function updateTablesAndIndexes(oldVersion, trans, idbtrans) {
        // Upgrade version to version, step-by-step from oldest to newest version.
        // Each transaction object will contain the table set that was current in that version (but also not-yet-deleted tables from its previous version)
        var queue = [];
        var oldVersionStruct = versions.filter(function (version) { return version._cfg.version === oldVersion; })[0];
        if (!oldVersionStruct)
            throw new exceptions.Upgrade("Dexie specification of currently installed DB version is missing");
        globalSchema = db._dbSchema = oldVersionStruct._cfg.dbschema;
        var anyContentUpgraderHasRun = false;
        var versToRun = versions.filter(function (v) { return v._cfg.version > oldVersion; });
        versToRun.forEach(function (version) {
            /// <param name="version" type="Version"></param>
            queue.push(function () {
                var oldSchema = globalSchema;
                var newSchema = version._cfg.dbschema;
                adjustToExistingIndexNames(oldSchema, idbtrans);
                adjustToExistingIndexNames(newSchema, idbtrans);
                globalSchema = db._dbSchema = newSchema;
                var diff = getSchemaDiff(oldSchema, newSchema);
                // Add tables           
                diff.add.forEach(function (tuple) {
                    createTable(idbtrans, tuple[0], tuple[1].primKey, tuple[1].indexes);
                });
                // Change tables
                diff.change.forEach(function (change) {
                    if (change.recreate) {
                        throw new exceptions.Upgrade("Not yet support for changing primary key");
                    }
                    else {
                        var store = idbtrans.objectStore(change.name);
                        // Add indexes
                        change.add.forEach(function (idx) {
                            addIndex(store, idx);
                        });
                        // Update indexes
                        change.change.forEach(function (idx) {
                            store.deleteIndex(idx.name);
                            addIndex(store, idx);
                        });
                        // Delete indexes
                        change.del.forEach(function (idxName) {
                            store.deleteIndex(idxName);
                        });
                    }
                });
                if (version._cfg.contentUpgrade) {
                    anyContentUpgraderHasRun = true;
                    return Promise.follow(function () {
                        version._cfg.contentUpgrade(trans);
                    });
                }
            });
            queue.push(function (idbtrans) {
                if (!anyContentUpgraderHasRun || !hasIEDeleteObjectStoreBug) {
                    var newSchema = version._cfg.dbschema;
                    // Delete old tables
                    deleteRemovedTables(newSchema, idbtrans);
                }
            });
        });
        // Now, create a queue execution engine
        function runQueue() {
            return queue.length ? Promise.resolve(queue.shift()(trans.idbtrans)).then(runQueue) :
                Promise.resolve();
        }
        return runQueue().then(function () {
            createMissingTables(globalSchema, idbtrans); // At last, make sure to create any missing tables. (Needed by addons that add stores to DB without specifying version)
        });
    }
    function getSchemaDiff(oldSchema, newSchema) {
        var diff = {
            del: [],
            add: [],
            change: [] // Array of {name: tableName, recreate: newDefinition, del: delIndexNames, add: newIndexDefs, change: changedIndexDefs}
        };
        for (var table in oldSchema) {
            if (!newSchema[table])
                diff.del.push(table);
        }
        for (table in newSchema) {
            var oldDef = oldSchema[table], newDef = newSchema[table];
            if (!oldDef) {
                diff.add.push([table, newDef]);
            }
            else {
                var change = {
                    name: table,
                    def: newDef,
                    recreate: false,
                    del: [],
                    add: [],
                    change: []
                };
                if (oldDef.primKey.src !== newDef.primKey.src) {
                    // Primary key has changed. Remove and re-add table.
                    change.recreate = true;
                    diff.change.push(change);
                }
                else {
                    // Same primary key. Just find out what differs:
                    var oldIndexes = oldDef.idxByName;
                    var newIndexes = newDef.idxByName;
                    for (var idxName in oldIndexes) {
                        if (!newIndexes[idxName])
                            change.del.push(idxName);
                    }
                    for (idxName in newIndexes) {
                        var oldIdx = oldIndexes[idxName], newIdx = newIndexes[idxName];
                        if (!oldIdx)
                            change.add.push(newIdx);
                        else if (oldIdx.src !== newIdx.src)
                            change.change.push(newIdx);
                    }
                    if (change.del.length > 0 || change.add.length > 0 || change.change.length > 0) {
                        diff.change.push(change);
                    }
                }
            }
        }
        return diff;
    }
    function createTable(idbtrans, tableName, primKey, indexes) {
        /// <param name="idbtrans" type="IDBTransaction"></param>
        var store = idbtrans.db.createObjectStore(tableName, primKey.keyPath ? { keyPath: primKey.keyPath, autoIncrement: primKey.auto } : { autoIncrement: primKey.auto });
        indexes.forEach(function (idx) { addIndex(store, idx); });
        return store;
    }
    function createMissingTables(newSchema, idbtrans) {
        keys(newSchema).forEach(function (tableName) {
            if (!idbtrans.db.objectStoreNames.contains(tableName)) {
                createTable(idbtrans, tableName, newSchema[tableName].primKey, newSchema[tableName].indexes);
            }
        });
    }
    function deleteRemovedTables(newSchema, idbtrans) {
        for (var i = 0; i < idbtrans.db.objectStoreNames.length; ++i) {
            var storeName = idbtrans.db.objectStoreNames[i];
            if (newSchema[storeName] == null) {
                idbtrans.db.deleteObjectStore(storeName);
            }
        }
    }
    function addIndex(store, idx) {
        store.createIndex(idx.name, idx.keyPath, { unique: idx.unique, multiEntry: idx.multi });
    }
    //
    //
    //      Dexie Protected API
    //
    //
    this._allTables = allTables;
    this._createTransaction = function (mode, storeNames, dbschema, parentTransaction) {
        return new Transaction(mode, storeNames, dbschema, parentTransaction);
    };
    /* Generate a temporary transaction when db operations are done outside a transaction scope.
    */
    function tempTransaction(mode, storeNames, fn) {
        if (!openComplete && (!PSD.letThrough)) {
            if (!isBeingOpened) {
                if (!autoOpen)
                    return rejection(new exceptions.DatabaseClosed());
                db.open().catch(nop); // Open in background. If if fails, it will be catched by the final promise anyway.
            }
            return dbReadyPromise.then(function () { return tempTransaction(mode, storeNames, fn); });
        }
        else {
            var trans = db._createTransaction(mode, storeNames, globalSchema);
            try {
                trans.create();
            }
            catch (ex) {
                return rejection(ex);
            }
            return trans._promise(mode, function (resolve, reject) {
                return newScope(function () {
                    PSD.trans = trans;
                    return fn(resolve, reject, trans);
                });
            }).then(function (result) {
                // Instead of resolving value directly, wait with resolving it until transaction has completed.
                // Otherwise the data would not be in the DB if requesting it in the then() operation.
                // Specifically, to ensure that the following expression will work:
                //
                //   db.friends.put({name: "Arne"}).then(function () {
                //       db.friends.where("name").equals("Arne").count(function(count) {
                //           assert (count === 1);
                //       });
                //   });
                //
                return trans._completion.then(function () { return result; });
            }); /*.catch(err => { // Don't do this as of now. If would affect bulk- and modify methods in a way that could be more intuitive. But wait! Maybe change in next major.
                trans._reject(err);
                return rejection(err);
            });*/
        }
    }
    this._whenReady = function (fn) {
        return openComplete || PSD.letThrough ? fn() : new Promise(function (resolve, reject) {
            if (!isBeingOpened) {
                if (!autoOpen) {
                    reject(new exceptions.DatabaseClosed());
                    return;
                }
                db.open().catch(nop); // Open in background. If if fails, it will be catched by the final promise anyway.
            }
            dbReadyPromise.then(resolve, reject);
        }).then(fn);
    };
    //
    //
    //
    //
    //      Dexie API
    //
    //
    //
    this.verno = 0;
    this.open = function () {
        if (isBeingOpened || idbdb)
            return dbReadyPromise.then(function () { return dbOpenError ? rejection(dbOpenError) : db; });
        debug && (openCanceller._stackHolder = getErrorWithStack()); // Let stacks point to when open() was called rather than where new Dexie() was called.
        isBeingOpened = true;
        dbOpenError = null;
        openComplete = false;
        // Function pointers to call when the core opening process completes.
        var resolveDbReady = dbReadyResolve, 
        // upgradeTransaction to abort on failure.
        upgradeTransaction = null;
        return Promise.race([openCanceller, new Promise(function (resolve, reject) {
                // Multiply db.verno with 10 will be needed to workaround upgrading bug in IE:
                // IE fails when deleting objectStore after reading from it.
                // A future version of Dexie.js will stopover an intermediate version to workaround this.
                // At that point, we want to be backward compatible. Could have been multiplied with 2, but by using 10, it is easier to map the number to the real version number.
                // If no API, throw!
                if (!indexedDB)
                    throw new exceptions.MissingAPI("indexedDB API not found. If using IE10+, make sure to run your code on a server URL " +
                        "(not locally). If using old Safari versions, make sure to include indexedDB polyfill.");
                var req = autoSchema ? indexedDB.open(dbName) : indexedDB.open(dbName, Math.round(db.verno * 10));
                if (!req)
                    throw new exceptions.MissingAPI("IndexedDB API not available"); // May happen in Safari private mode, see https://github.com/dfahlander/Dexie.js/issues/134
                req.onerror = eventRejectHandler(reject);
                req.onblocked = wrap(fireOnBlocked);
                req.onupgradeneeded = wrap(function (e) {
                    upgradeTransaction = req.transaction;
                    if (autoSchema && !db._allowEmptyDB) {
                        // Caller did not specify a version or schema. Doing that is only acceptable for opening alread existing databases.
                        // If onupgradeneeded is called it means database did not exist. Reject the open() promise and make sure that we
                        // do not create a new database by accident here.
                        req.onerror = preventDefault; // Prohibit onabort error from firing before we're done!
                        upgradeTransaction.abort(); // Abort transaction (would hope that this would make DB disappear but it doesnt.)
                        // Close database and delete it.
                        req.result.close();
                        var delreq = indexedDB.deleteDatabase(dbName); // The upgrade transaction is atomic, and javascript is single threaded - meaning that there is no risk that we delete someone elses database here!
                        delreq.onsuccess = delreq.onerror = wrap(function () {
                            reject(new exceptions.NoSuchDatabase("Database " + dbName + " doesnt exist"));
                        });
                    }
                    else {
                        upgradeTransaction.onerror = eventRejectHandler(reject);
                        var oldVer = e.oldVersion > Math.pow(2, 62) ? 0 : e.oldVersion; // Safari 8 fix.
                        runUpgraders(oldVer / 10, upgradeTransaction, reject, req);
                    }
                }, reject);
                req.onsuccess = wrap(function () {
                    // Core opening procedure complete. Now let's just record some stuff.
                    upgradeTransaction = null;
                    idbdb = req.result;
                    connections.push(db); // Used for emulating versionchange event on IE/Edge/Safari.
                    if (autoSchema)
                        readGlobalSchema();
                    else if (idbdb.objectStoreNames.length > 0) {
                        try {
                            adjustToExistingIndexNames(globalSchema, idbdb.transaction(safariMultiStoreFix(idbdb.objectStoreNames), READONLY));
                        }
                        catch (e) {
                            // Safari may bail out if > 1 store names. However, this shouldnt be a showstopper. Issue #120.
                        }
                    }
                    idbdb.onversionchange = wrap(function (ev) {
                        db._vcFired = true; // detect implementations that not support versionchange (IE/Edge/Safari)
                        db.on("versionchange").fire(ev);
                    });
                    if (!hasNativeGetDatabaseNames && dbName !== '__dbnames') {
                        dbNamesDB.dbnames.put({ name: dbName }).catch(nop);
                    }
                    resolve();
                }, reject);
            })]).then(function () {
            // Before finally resolving the dbReadyPromise and this promise,
            // call and await all on('ready') subscribers:
            // Dexie.vip() makes subscribers able to use the database while being opened.
            // This is a must since these subscribers take part of the opening procedure.
            onReadyBeingFired = [];
            return Promise.resolve(Dexie.vip(db.on.ready.fire)).then(function fireRemainders() {
                if (onReadyBeingFired.length > 0) {
                    // In case additional subscribers to db.on('ready') were added during the time db.on.ready.fire was executed.
                    var remainders = onReadyBeingFired.reduce(promisableChain, nop);
                    onReadyBeingFired = [];
                    return Promise.resolve(Dexie.vip(remainders)).then(fireRemainders);
                }
            });
        }).finally(function () {
            onReadyBeingFired = null;
        }).then(function () {
            // Resolve the db.open() with the db instance.
            isBeingOpened = false;
            return db;
        }).catch(function (err) {
            try {
                // Did we fail within onupgradeneeded? Make sure to abort the upgrade transaction so it doesnt commit.
                upgradeTransaction && upgradeTransaction.abort();
            }
            catch (e) { }
            isBeingOpened = false; // Set before calling db.close() so that it doesnt reject openCanceller again (leads to unhandled rejection event).
            db.close(); // Closes and resets idbdb, removes connections, resets dbReadyPromise and openCanceller so that a later db.open() is fresh.
            // A call to db.close() may have made on-ready subscribers fail. Use dbOpenError if set, since err could be a follow-up error on that.
            dbOpenError = err; // Record the error. It will be used to reject further promises of db operations.
            return rejection(dbOpenError);
        }).finally(function () {
            openComplete = true;
            resolveDbReady(); // dbReadyPromise is resolved no matter if open() rejects or resolved. It's just to wake up waiters.
        });
    };
    this.close = function () {
        var idx = connections.indexOf(db);
        if (idx >= 0)
            connections.splice(idx, 1);
        if (idbdb) {
            try {
                idbdb.close();
            }
            catch (e) { }
            idbdb = null;
        }
        autoOpen = false;
        dbOpenError = new exceptions.DatabaseClosed();
        if (isBeingOpened)
            cancelOpen(dbOpenError);
        // Reset dbReadyPromise promise:
        dbReadyPromise = new Promise(function (resolve) {
            dbReadyResolve = resolve;
        });
        openCanceller = new Promise(function (_, reject) {
            cancelOpen = reject;
        });
    };
    this.delete = function () {
        var hasArguments = arguments.length > 0;
        return new Promise(function (resolve, reject) {
            if (hasArguments)
                throw new exceptions.InvalidArgument("Arguments not allowed in db.delete()");
            if (isBeingOpened) {
                dbReadyPromise.then(doDelete);
            }
            else {
                doDelete();
            }
            function doDelete() {
                db.close();
                var req = indexedDB.deleteDatabase(dbName);
                req.onsuccess = wrap(function () {
                    if (!hasNativeGetDatabaseNames) {
                        dbNamesDB.dbnames.delete(dbName).catch(nop);
                    }
                    resolve();
                });
                req.onerror = eventRejectHandler(reject);
                req.onblocked = fireOnBlocked;
            }
        });
    };
    this.backendDB = function () {
        return idbdb;
    };
    this.isOpen = function () {
        return idbdb !== null;
    };
    this.hasBeenClosed = function () {
        return dbOpenError && (dbOpenError instanceof exceptions.DatabaseClosed);
    };
    this.hasFailed = function () {
        return dbOpenError !== null;
    };
    this.dynamicallyOpened = function () {
        return autoSchema;
    };
    //
    // Properties
    //
    this.name = dbName;
    // db.tables - an array of all Table instances.
    props(this, {
        tables: {
            get: function () {
                /// <returns type="Array" elementType="Table" />
                return keys(allTables).map(function (name) { return allTables[name]; });
            }
        }
    });
    //
    // Events
    //
    this.on = Events(this, "populate", "blocked", "versionchange", { ready: [promisableChain, nop] });
    this.on.ready.subscribe = override(this.on.ready.subscribe, function (subscribe) {
        return function (subscriber, bSticky) {
            Dexie.vip(function () {
                if (openComplete) {
                    // Database already open. Call subscriber asap.
                    if (!dbOpenError)
                        Promise.resolve().then(subscriber);
                    // bSticky: Also subscribe to future open sucesses (after close / reopen) 
                    if (bSticky)
                        subscribe(subscriber);
                }
                else if (onReadyBeingFired) {
                    // db.on('ready') subscribers are currently being executed and have not yet resolved or rejected
                    onReadyBeingFired.push(subscriber);
                    if (bSticky)
                        subscribe(subscriber);
                }
                else {
                    // Database not yet open. Subscribe to it.
                    subscribe(subscriber);
                    // If bSticky is falsy, make sure to unsubscribe subscriber when fired once.
                    if (!bSticky)
                        subscribe(function unsubscribe() {
                            db.on.ready.unsubscribe(subscriber);
                            db.on.ready.unsubscribe(unsubscribe);
                        });
                }
            });
        };
    });
    this.transaction = function () {
        /// <summary>
        ///
        /// </summary>
        /// <param name="mode" type="String">"r" for readonly, or "rw" for readwrite</param>
        /// <param name="tableInstances">Table instance, Array of Table instances, String or String Array of object stores to include in the transaction</param>
        /// <param name="scopeFunc" type="Function">Function to execute with transaction</param>
        var args = extractTransactionArgs.apply(this, arguments);
        return this._transaction.apply(this, args);
    };
    function extractTransactionArgs(mode, _tableArgs_, scopeFunc) {
        // Let table arguments be all arguments between mode and last argument.
        var i = arguments.length;
        if (i < 2)
            throw new exceptions.InvalidArgument("Too few arguments");
        // Prevent optimzation killer (https://github.com/petkaantonov/bluebird/wiki/Optimization-killers#32-leaking-arguments)
        // and clone arguments except the first one into local var 'args'.
        var args = new Array(i - 1);
        while (--i)
            args[i - 1] = arguments[i];
        // Let scopeFunc be the last argument and pop it so that args now only contain the table arguments.
        scopeFunc = args.pop();
        var tables = flatten(args); // Support using array as middle argument, or a mix of arrays and non-arrays.
        return [mode, tables, scopeFunc];
    }
    this._transaction = function (mode, tables, scopeFunc) {
        var parentTransaction = PSD.trans;
        // Check if parent transactions is bound to this db instance, and if caller wants to reuse it
        if (!parentTransaction || parentTransaction.db !== db || mode.indexOf('!') !== -1)
            parentTransaction = null;
        var onlyIfCompatible = mode.indexOf('?') !== -1;
        mode = mode.replace('!', '').replace('?', ''); // Ok. Will change arguments[0] as well but we wont touch arguments henceforth.
        try {
            //
            // Get storeNames from arguments. Either through given table instances, or through given table names.
            //
            var storeNames = tables.map(function (table) {
                var storeName = table instanceof Table ? table.name : table;
                if (typeof storeName !== 'string')
                    throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");
                return storeName;
            });
            //
            // Resolve mode. Allow shortcuts "r" and "rw".
            //
            if (mode == "r" || mode == READONLY)
                mode = READONLY;
            else if (mode == "rw" || mode == READWRITE)
                mode = READWRITE;
            else
                throw new exceptions.InvalidArgument("Invalid transaction mode: " + mode);
            if (parentTransaction) {
                // Basic checks
                if (parentTransaction.mode === READONLY && mode === READWRITE) {
                    if (onlyIfCompatible) {
                        // Spawn new transaction instead.
                        parentTransaction = null;
                    }
                    else
                        throw new exceptions.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");
                }
                if (parentTransaction) {
                    storeNames.forEach(function (storeName) {
                        if (parentTransaction && parentTransaction.storeNames.indexOf(storeName) === -1) {
                            if (onlyIfCompatible) {
                                // Spawn new transaction instead.
                                parentTransaction = null;
                            }
                            else
                                throw new exceptions.SubTransaction("Table " + storeName +
                                    " not included in parent transaction.");
                        }
                    });
                }
                if (onlyIfCompatible && parentTransaction && !parentTransaction.active) {
                    // '?' mode should not keep using an inactive transaction.
                    parentTransaction = null;
                }
            }
        }
        catch (e) {
            return parentTransaction ?
                parentTransaction._promise(null, function (_, reject) { reject(e); }) :
                rejection(e);
        }
        // If this is a sub-transaction, lock the parent and then launch the sub-transaction.
        return (parentTransaction ?
            parentTransaction._promise(mode, enterTransactionScope, "lock") :
            PSD.trans ?
                // no parent transaction despite PSD.trans exists. Make sure also
                // that the zone we create is not a sub-zone of current, because
                // Promise.follow() should not wait for it if so.
                usePSD(PSD.transless, function () { return db._whenReady(enterTransactionScope); }) :
                db._whenReady(enterTransactionScope));
        function enterTransactionScope() {
            return Promise.resolve().then(function () {
                // Keep a pointer to last non-transactional PSD to use if someone calls Dexie.ignoreTransaction().
                var transless = PSD.transless || PSD;
                // Our transaction.
                //return new Promise((resolve, reject) => {
                var trans = db._createTransaction(mode, storeNames, globalSchema, parentTransaction);
                // Let the transaction instance be part of a Promise-specific data (PSD) value.
                var zoneProps = {
                    trans: trans,
                    transless: transless
                };
                if (parentTransaction) {
                    // Emulate transaction commit awareness for inner transaction (must 'commit' when the inner transaction has no more operations ongoing)
                    trans.idbtrans = parentTransaction.idbtrans;
                }
                else {
                    trans.create(); // Create the backend transaction so that complete() or error() will trigger even if no operation is made upon it.
                }
                // Support for native async await.
                if (scopeFunc.constructor === AsyncFunction) {
                    incrementExpectedAwaits();
                }
                var returnValue;
                var promiseFollowed = Promise.follow(function () {
                    // Finally, call the scope function with our table and transaction arguments.
                    returnValue = scopeFunc.call(trans, trans);
                    if (returnValue) {
                        if (returnValue.constructor === NativePromise) {
                            var decrementor = decrementExpectedAwaits.bind(null, null);
                            returnValue.then(decrementor, decrementor);
                        }
                        else if (typeof returnValue.next === 'function' && typeof returnValue.throw === 'function') {
                            // scopeFunc returned an iterator with throw-support. Handle yield as await.
                            returnValue = awaitIterator(returnValue);
                        }
                    }
                }, zoneProps);
                return (returnValue && typeof returnValue.then === 'function' ?
                    // Promise returned. User uses promise-style transactions.
                    Promise.resolve(returnValue).then(function (x) { return trans.active ?
                        x // Transaction still active. Continue.
                        : rejection(new exceptions.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn")); })
                    // No promise returned. Wait for all outstanding promises before continuing. 
                    : promiseFollowed.then(function () { return returnValue; })).then(function (x) {
                    // sub transactions don't react to idbtrans.oncomplete. We must trigger a completion:
                    if (parentTransaction)
                        trans._resolve();
                    // wait for trans._completion
                    // (if root transaction, this means 'complete' event. If sub-transaction, we've just fired it ourselves)
                    return trans._completion.then(function () { return x; });
                }).catch(function (e) {
                    trans._reject(e); // Yes, above then-handler were maybe not called because of an unhandled rejection in scopeFunc!
                    return rejection(e);
                });
            });
        }
    };
    this.table = function (tableName) {
        /// <returns type="Table"></returns>
        if (!hasOwn(allTables, tableName)) {
            throw new exceptions.InvalidTable("Table " + tableName + " does not exist");
        }
        return allTables[tableName];
    };
    //
    //
    //
    // Table Class
    //
    //
    //
    function Table(name, tableSchema, optionalTrans) {
        /// <param name="name" type="String"></param>
        this.name = name;
        this.schema = tableSchema;
        this._tx = optionalTrans;
        this.hook = allTables[name] ? allTables[name].hook : Events(null, {
            "creating": [hookCreatingChain, nop],
            "reading": [pureFunctionChain, mirror],
            "updating": [hookUpdatingChain, nop],
            "deleting": [hookDeletingChain, nop]
        });
    }
    function BulkErrorHandlerCatchAll(errorList, done, supportHooks) {
        return (supportHooks ? hookedEventRejectHandler : eventRejectHandler)(function (e) {
            errorList.push(e);
            done && done();
        });
    }
    function bulkDelete(idbstore, trans, keysOrTuples, hasDeleteHook, deletingHook) {
        // If hasDeleteHook, keysOrTuples must be an array of tuples: [[key1, value2],[key2,value2],...],
        // else keysOrTuples must be just an array of keys: [key1, key2, ...].
        return new Promise(function (resolve, reject) {
            var len = keysOrTuples.length, lastItem = len - 1;
            if (len === 0)
                return resolve();
            if (!hasDeleteHook) {
                for (var i = 0; i < len; ++i) {
                    var req = idbstore.delete(keysOrTuples[i]);
                    req.onerror = eventRejectHandler(reject);
                    if (i === lastItem)
                        req.onsuccess = wrap(function () { return resolve(); });
                }
            }
            else {
                var hookCtx, errorHandler = hookedEventRejectHandler(reject), successHandler = hookedEventSuccessHandler(null);
                tryCatch(function () {
                    for (var i = 0; i < len; ++i) {
                        hookCtx = { onsuccess: null, onerror: null };
                        var tuple = keysOrTuples[i];
                        deletingHook.call(hookCtx, tuple[0], tuple[1], trans);
                        var req = idbstore.delete(tuple[0]);
                        req._hookCtx = hookCtx;
                        req.onerror = errorHandler;
                        if (i === lastItem)
                            req.onsuccess = hookedEventSuccessHandler(resolve);
                        else
                            req.onsuccess = successHandler;
                    }
                }, function (err) {
                    hookCtx.onerror && hookCtx.onerror(err);
                    throw err;
                });
            }
        });
    }
    props(Table.prototype, {
        //
        // Table Protected Methods
        //
        _trans: function getTransaction(mode, fn, writeLocked) {
            var trans = this._tx || PSD.trans;
            return trans && trans.db === db ?
                trans === PSD.trans ?
                    trans._promise(mode, fn, writeLocked) :
                    newScope(function () { return trans._promise(mode, fn, writeLocked); }, { trans: trans, transless: PSD.transless || PSD }) :
                tempTransaction(mode, [this.name], fn);
        },
        _idbstore: function getIDBObjectStore(mode, fn, writeLocked) {
            var tableName = this.name;
            function supplyIdbStore(resolve, reject, trans) {
                if (trans.storeNames.indexOf(tableName) === -1)
                    throw new exceptions.NotFound("Table" + tableName + " not part of transaction");
                return fn(resolve, reject, trans.idbtrans.objectStore(tableName), trans);
            }
            return this._trans(mode, supplyIdbStore, writeLocked);
        },
        //
        // Table Public Methods
        //
        get: function (keyOrCrit, cb) {
            if (keyOrCrit && keyOrCrit.constructor === Object)
                return this.where(keyOrCrit).first(cb);
            var self = this;
            return this._idbstore(READONLY, function (resolve, reject, idbstore) {
                var req = idbstore.get(keyOrCrit);
                req.onerror = eventRejectHandler(reject);
                req.onsuccess = wrap(function () {
                    resolve(self.hook.reading.fire(req.result));
                }, reject);
            }).then(cb);
        },
        where: function (indexOrCrit) {
            if (typeof indexOrCrit === 'string')
                return new WhereClause(this, indexOrCrit);
            if (isArray(indexOrCrit))
                return new WhereClause(this, "[" + indexOrCrit.join('+') + "]");
            // indexOrCrit is an object map of {[keyPath]:value} 
            var keyPaths = keys(indexOrCrit);
            if (keyPaths.length === 1)
                // Only one critera. This was the easy case:
                return this
                    .where(keyPaths[0])
                    .equals(indexOrCrit[keyPaths[0]]);
            // Multiple criterias.
            // Let's try finding a compound index that matches all keyPaths in
            // arbritary order:
            var compoundIndex = this.schema.indexes.concat(this.schema.primKey).filter(function (ix) {
                return ix.compound &&
                    keyPaths.every(function (keyPath) { return ix.keyPath.indexOf(keyPath) >= 0; }) &&
                    ix.keyPath.every(function (keyPath) { return keyPaths.indexOf(keyPath) >= 0; });
            })[0];
            if (compoundIndex && maxKey !== maxString)
                // Cool! We found such compound index
                // and this browser supports compound indexes (maxKey !== maxString)!
                return this
                    .where(compoundIndex.name)
                    .equals(compoundIndex.keyPath.map(function (kp) { return indexOrCrit[kp]; }));
            if (!compoundIndex)
                console.warn("The query " + JSON.stringify(indexOrCrit) + " on " + this.name + " would benefit of a " +
                    ("compound index [" + keyPaths.join('+') + "]"));
            // Ok, now let's fallback to finding at least one matching index
            // and filter the rest.
            var idxByName = this.schema.idxByName;
            var simpleIndex = keyPaths.reduce(function (r, keyPath) { return [
                r[0] || idxByName[keyPath],
                r[0] || !idxByName[keyPath] ?
                    combine(r[1], function (x) { return '' + getByKeyPath(x, keyPath) ==
                        '' + indexOrCrit[keyPath]; })
                    : r[1]
            ]; }, [null, null]);
            var idx = simpleIndex[0];
            return idx ?
                this.where(idx.name).equals(indexOrCrit[idx.keyPath])
                    .filter(simpleIndex[1]) :
                compoundIndex ?
                    this.filter(simpleIndex[1]) : // Has compound but browser bad. Allow filter.
                    this.where(keyPaths).equals(''); // No index at all. Fail lazily.
        },
        count: function (cb) {
            return this.toCollection().count(cb);
        },
        offset: function (offset) {
            return this.toCollection().offset(offset);
        },
        limit: function (numRows) {
            return this.toCollection().limit(numRows);
        },
        reverse: function () {
            return this.toCollection().reverse();
        },
        filter: function (filterFunction) {
            return this.toCollection().and(filterFunction);
        },
        each: function (fn) {
            return this.toCollection().each(fn);
        },
        toArray: function (cb) {
            return this.toCollection().toArray(cb);
        },
        orderBy: function (index) {
            return new Collection(new WhereClause(this, isArray(index) ?
                "[" + index.join('+') + "]" :
                index));
        },
        toCollection: function () {
            return new Collection(new WhereClause(this));
        },
        mapToClass: function (constructor, structure) {
            /// <summary>
            ///     Map table to a javascript constructor function. Objects returned from the database will be instances of this class, making
            ///     it possible to the instanceOf operator as well as extending the class using constructor.prototype.method = function(){...}.
            /// </summary>
            /// <param name="constructor">Constructor function representing the class.</param>
            /// <param name="structure" optional="true">Helps IDE code completion by knowing the members that objects contain and not just the indexes. Also
            /// know what type each member has. Example: {name: String, emailAddresses: [String], password}</param>
            this.schema.mappedClass = constructor;
            var instanceTemplate = Object.create(constructor.prototype);
            if (structure) {
                // structure and instanceTemplate is for IDE code competion only while constructor.prototype is for actual inheritance.
                applyStructure(instanceTemplate, structure);
            }
            this.schema.instanceTemplate = instanceTemplate;
            // Now, subscribe to the when("reading") event to make all objects that come out from this table inherit from given class
            // no matter which method to use for reading (Table.get() or Table.where(...)... )
            var readHook = function (obj) {
                if (!obj)
                    return obj; // No valid object. (Value is null). Return as is.
                // Create a new object that derives from constructor:
                var res = Object.create(constructor.prototype);
                // Clone members:
                for (var m in obj)
                    if (hasOwn(obj, m))
                        try {
                            res[m] = obj[m];
                        }
                        catch (_) { }
                return res;
            };
            if (this.schema.readHook) {
                this.hook.reading.unsubscribe(this.schema.readHook);
            }
            this.schema.readHook = readHook;
            this.hook("reading", readHook);
            return constructor;
        },
        defineClass: function (structure) {
            /// <summary>
            ///     Define all members of the class that represents the table. This will help code completion of when objects are read from the database
            ///     as well as making it possible to extend the prototype of the returned constructor function.
            /// </summary>
            /// <param name="structure">Helps IDE code completion by knowing the members that objects contain and not just the indexes. Also
            /// know what type each member has. Example: {name: String, emailAddresses: [String], properties: {shoeSize: Number}}</param>
            return this.mapToClass(Dexie.defineClass(structure), structure);
        },
        bulkDelete: function (keys$$1) {
            if (this.hook.deleting.fire === nop) {
                return this._idbstore(READWRITE, function (resolve, reject, idbstore, trans) {
                    resolve(bulkDelete(idbstore, trans, keys$$1, false, nop));
                });
            }
            else {
                return this
                    .where(':id')
                    .anyOf(keys$$1)
                    .delete()
                    .then(function () { }); // Resolve with undefined.
            }
        },
        bulkPut: function (objects, keys$$1) {
            var _this = this;
            return this._idbstore(READWRITE, function (resolve, reject, idbstore) {
                if (!idbstore.keyPath && !_this.schema.primKey.auto && !keys$$1)
                    throw new exceptions.InvalidArgument("bulkPut() with non-inbound keys requires keys array in second argument");
                if (idbstore.keyPath && keys$$1)
                    throw new exceptions.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");
                if (keys$$1 && keys$$1.length !== objects.length)
                    throw new exceptions.InvalidArgument("Arguments objects and keys must have the same length");
                if (objects.length === 0)
                    return resolve(); // Caller provided empty list.
                var done = function (result) {
                    if (errorList.length === 0)
                        resolve(result);
                    else
                        reject(new BulkError(_this.name + ".bulkPut(): " + errorList.length + " of " + numObjs + " operations failed", errorList));
                };
                var req, errorList = [], errorHandler, numObjs = objects.length, table = _this;
                if (_this.hook.creating.fire === nop && _this.hook.updating.fire === nop) {
                    //
                    // Standard Bulk (no 'creating' or 'updating' hooks to care about)
                    //
                    errorHandler = BulkErrorHandlerCatchAll(errorList);
                    for (var i = 0, l = objects.length; i < l; ++i) {
                        req = keys$$1 ? idbstore.put(objects[i], keys$$1[i]) : idbstore.put(objects[i]);
                        req.onerror = errorHandler;
                    }
                    // Only need to catch success or error on the last operation
                    // according to the IDB spec.
                    req.onerror = BulkErrorHandlerCatchAll(errorList, done);
                    req.onsuccess = eventSuccessHandler(done);
                }
                else {
                    var effectiveKeys = keys$$1 || idbstore.keyPath && objects.map(function (o) { return getByKeyPath(o, idbstore.keyPath); });
                    // Generate map of {[key]: object}
                    var objectLookup = effectiveKeys && arrayToObject(effectiveKeys, function (key, i) { return key != null && [key, objects[i]]; });
                    var promise = !effectiveKeys ?
                        // Auto-incremented key-less objects only without any keys argument.
                        table.bulkAdd(objects) :
                        // Keys provided. Either as inbound in provided objects, or as a keys argument.
                        // Begin with updating those that exists in DB:
                        table.where(':id').anyOf(effectiveKeys.filter(function (key) { return key != null; })).modify(function () {
                            this.value = objectLookup[this.primKey];
                            objectLookup[this.primKey] = null; // Mark as "don't add this"
                        }).catch(ModifyError, function (e) {
                            errorList = e.failures; // No need to concat here. These are the first errors added.
                        }).then(function () {
                            // Now, let's examine which items didnt exist so we can add them:
                            var objsToAdd = [], keysToAdd = keys$$1 && [];
                            // Iterate backwards. Why? Because if same key was used twice, just add the last one.
                            for (var i = effectiveKeys.length - 1; i >= 0; --i) {
                                var key = effectiveKeys[i];
                                if (key == null || objectLookup[key]) {
                                    objsToAdd.push(objects[i]);
                                    keys$$1 && keysToAdd.push(key);
                                    if (key != null)
                                        objectLookup[key] = null; // Mark as "dont add again"
                                }
                            }
                            // The items are in reverse order so reverse them before adding.
                            // Could be important in order to get auto-incremented keys the way the caller
                            // would expect. Could have used unshift instead of push()/reverse(),
                            // but: http://jsperf.com/unshift-vs-reverse
                            objsToAdd.reverse();
                            keys$$1 && keysToAdd.reverse();
                            return table.bulkAdd(objsToAdd, keysToAdd);
                        }).then(function (lastAddedKey) {
                            // Resolve with key of the last object in given arguments to bulkPut():
                            var lastEffectiveKey = effectiveKeys[effectiveKeys.length - 1]; // Key was provided.
                            return lastEffectiveKey != null ? lastEffectiveKey : lastAddedKey;
                        });
                    promise.then(done).catch(BulkError, function (e) {
                        // Concat failure from ModifyError and reject using our 'done' method.
                        errorList = errorList.concat(e.failures);
                        done();
                    }).catch(reject);
                }
            }, "locked"); // If called from transaction scope, lock transaction til all steps are done.
        },
        bulkAdd: function (objects, keys$$1) {
            var self = this, creatingHook = this.hook.creating.fire;
            return this._idbstore(READWRITE, function (resolve, reject, idbstore, trans) {
                if (!idbstore.keyPath && !self.schema.primKey.auto && !keys$$1)
                    throw new exceptions.InvalidArgument("bulkAdd() with non-inbound keys requires keys array in second argument");
                if (idbstore.keyPath && keys$$1)
                    throw new exceptions.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");
                if (keys$$1 && keys$$1.length !== objects.length)
                    throw new exceptions.InvalidArgument("Arguments objects and keys must have the same length");
                if (objects.length === 0)
                    return resolve(); // Caller provided empty list.
                function done(result) {
                    if (errorList.length === 0)
                        resolve(result);
                    else
                        reject(new BulkError(self.name + ".bulkAdd(): " + errorList.length + " of " + numObjs + " operations failed", errorList));
                }
                var req, errorList = [], errorHandler, successHandler, numObjs = objects.length;
                if (creatingHook !== nop) {
                    //
                    // There are subscribers to hook('creating')
                    // Must behave as documented.
                    //
                    var keyPath = idbstore.keyPath, hookCtx;
                    errorHandler = BulkErrorHandlerCatchAll(errorList, null, true);
                    successHandler = hookedEventSuccessHandler(null);
                    tryCatch(function () {
                        for (var i = 0, l = objects.length; i < l; ++i) {
                            hookCtx = { onerror: null, onsuccess: null };
                            var key = keys$$1 && keys$$1[i];
                            var obj = objects[i], effectiveKey = keys$$1 ? key : keyPath ? getByKeyPath(obj, keyPath) : undefined, keyToUse = creatingHook.call(hookCtx, effectiveKey, obj, trans);
                            if (effectiveKey == null && keyToUse != null) {
                                if (keyPath) {
                                    obj = deepClone(obj);
                                    setByKeyPath(obj, keyPath, keyToUse);
                                }
                                else {
                                    key = keyToUse;
                                }
                            }
                            req = key != null ? idbstore.add(obj, key) : idbstore.add(obj);
                            req._hookCtx = hookCtx;
                            if (i < l - 1) {
                                req.onerror = errorHandler;
                                if (hookCtx.onsuccess)
                                    req.onsuccess = successHandler;
                            }
                        }
                    }, function (err) {
                        hookCtx.onerror && hookCtx.onerror(err);
                        throw err;
                    });
                    req.onerror = BulkErrorHandlerCatchAll(errorList, done, true);
                    req.onsuccess = hookedEventSuccessHandler(done);
                }
                else {
                    //
                    // Standard Bulk (no 'creating' hook to care about)
                    //
                    errorHandler = BulkErrorHandlerCatchAll(errorList);
                    for (var i = 0, l = objects.length; i < l; ++i) {
                        req = keys$$1 ? idbstore.add(objects[i], keys$$1[i]) : idbstore.add(objects[i]);
                        req.onerror = errorHandler;
                    }
                    // Only need to catch success or error on the last operation
                    // according to the IDB spec.
                    req.onerror = BulkErrorHandlerCatchAll(errorList, done);
                    req.onsuccess = eventSuccessHandler(done);
                }
            });
        },
        add: function (obj, key) {
            /// <summary>
            ///   Add an object to the database. In case an object with same primary key already exists, the object will not be added.
            /// </summary>
            /// <param name="obj" type="Object">A javascript object to insert</param>
            /// <param name="key" optional="true">Primary key</param>
            var creatingHook = this.hook.creating.fire;
            return this._idbstore(READWRITE, function (resolve, reject, idbstore, trans) {
                var hookCtx = { onsuccess: null, onerror: null };
                if (creatingHook !== nop) {
                    var effectiveKey = (key != null) ? key : (idbstore.keyPath ? getByKeyPath(obj, idbstore.keyPath) : undefined);
                    var keyToUse = creatingHook.call(hookCtx, effectiveKey, obj, trans); // Allow subscribers to when("creating") to generate the key.
                    if (effectiveKey == null && keyToUse != null) {
                        if (idbstore.keyPath)
                            setByKeyPath(obj, idbstore.keyPath, keyToUse);
                        else
                            key = keyToUse;
                    }
                }
                try {
                    var req = key != null ? idbstore.add(obj, key) : idbstore.add(obj);
                    req._hookCtx = hookCtx;
                    req.onerror = hookedEventRejectHandler(reject);
                    req.onsuccess = hookedEventSuccessHandler(function (result) {
                        // TODO: Remove these two lines in next major release (2.0?)
                        // It's no good practice to have side effects on provided parameters
                        var keyPath = idbstore.keyPath;
                        if (keyPath)
                            setByKeyPath(obj, keyPath, result);
                        resolve(result);
                    });
                }
                catch (e) {
                    if (hookCtx.onerror)
                        hookCtx.onerror(e);
                    throw e;
                }
            });
        },
        put: function (obj, key) {
            var _this = this;
            /// <summary>
            ///   Add an object to the database but in case an object with same primary key alread exists, the existing one will get updated.
            /// </summary>
            /// <param name="obj" type="Object">A javascript object to insert or update</param>
            /// <param name="key" optional="true">Primary key</param>
            var creatingHook = this.hook.creating.fire, updatingHook = this.hook.updating.fire;
            if (creatingHook !== nop || updatingHook !== nop) {
                //
                // People listens to when("creating") or when("updating") events!
                // We must know whether the put operation results in an CREATE or UPDATE.
                //
                var keyPath = this.schema.primKey.keyPath;
                var effectiveKey = (key !== undefined) ? key : (keyPath && getByKeyPath(obj, keyPath));
                if (effectiveKey == null)
                    return this.add(obj);
                // Since key is optional, make sure we get it from obj if not provided
                // Primary key exist. Lock transaction and try modifying existing. If nothing modified, call add().
                // clone obj before this async call. If caller modifies obj the line after put(), the IDB spec requires that it should not affect operation.
                obj = deepClone(obj);
                return this._trans(READWRITE, function () {
                    return _this.where(":id").equals(effectiveKey).modify(function () {
                        // Replace extisting value with our object
                        // CRUD event firing handled in Collection.modify()
                        this.value = obj;
                    }).then(function (count) { return count === 0 ? _this.add(obj, key) : effectiveKey; });
                }, "locked"); // Lock needed because operation is splitted into modify() and add().
            }
            else {
                // Use the standard IDB put() method.
                return this._idbstore(READWRITE, function (resolve, reject, idbstore) {
                    var req = key !== undefined ? idbstore.put(obj, key) : idbstore.put(obj);
                    req.onerror = eventRejectHandler(reject);
                    req.onsuccess = wrap(function (ev) {
                        var keyPath = idbstore.keyPath;
                        if (keyPath)
                            setByKeyPath(obj, keyPath, ev.target.result);
                        resolve(req.result);
                    });
                });
            }
        },
        'delete': function (key) {
            /// <param name="key">Primary key of the object to delete</param>
            if (this.hook.deleting.subscribers.length) {
                // People listens to when("deleting") event. Must implement delete using Collection.delete() that will
                // call the CRUD event. Only Collection.delete() will know whether an object was actually deleted.
                return this.where(":id").equals(key).delete();
            }
            else {
                // No one listens. Use standard IDB delete() method.
                return this._idbstore(READWRITE, function (resolve, reject, idbstore) {
                    var req = idbstore.delete(key);
                    req.onerror = eventRejectHandler(reject);
                    req.onsuccess = wrap(function () {
                        resolve(req.result);
                    });
                });
            }
        },
        clear: function () {
            if (this.hook.deleting.subscribers.length) {
                // People listens to when("deleting") event. Must implement delete using Collection.delete() that will
                // call the CRUD event. Only Collection.delete() will knows which objects that are actually deleted.
                return this.toCollection().delete();
            }
            else {
                return this._idbstore(READWRITE, function (resolve, reject, idbstore) {
                    var req = idbstore.clear();
                    req.onerror = eventRejectHandler(reject);
                    req.onsuccess = wrap(function () {
                        resolve(req.result);
                    });
                });
            }
        },
        update: function (keyOrObject, modifications) {
            if (typeof modifications !== 'object' || isArray(modifications))
                throw new exceptions.InvalidArgument("Modifications must be an object.");
            if (typeof keyOrObject === 'object' && !isArray(keyOrObject)) {
                // object to modify. Also modify given object with the modifications:
                keys(modifications).forEach(function (keyPath) {
                    setByKeyPath(keyOrObject, keyPath, modifications[keyPath]);
                });
                var key = getByKeyPath(keyOrObject, this.schema.primKey.keyPath);
                if (key === undefined)
                    return rejection(new exceptions.InvalidArgument("Given object does not contain its primary key"));
                return this.where(":id").equals(key).modify(modifications);
            }
            else {
                // key to modify
                return this.where(":id").equals(keyOrObject).modify(modifications);
            }
        }
    });
    //
    //
    //
    // Transaction Class
    //
    //
    //
    function Transaction(mode, storeNames, dbschema, parent) {
        var _this = this;
        /// <summary>
        ///    Transaction class. Represents a database transaction. All operations on db goes through a Transaction.
        /// </summary>
        /// <param name="mode" type="String">Any of "readwrite" or "readonly"</param>
        /// <param name="storeNames" type="Array">Array of table names to operate on</param>
        this.db = db;
        this.mode = mode;
        this.storeNames = storeNames;
        this.idbtrans = null;
        this.on = Events(this, "complete", "error", "abort");
        this.parent = parent || null;
        this.active = true;
        this._reculock = 0;
        this._blockedFuncs = [];
        this._resolve = null;
        this._reject = null;
        this._waitingFor = null;
        this._waitingQueue = null;
        this._spinCount = 0; // Just for debugging waitFor()
        this._completion = new Promise(function (resolve, reject) {
            _this._resolve = resolve;
            _this._reject = reject;
        });
        this._completion.then(function () {
            _this.active = false;
            _this.on.complete.fire();
        }, function (e) {
            var wasActive = _this.active;
            _this.active = false;
            _this.on.error.fire(e);
            _this.parent ?
                _this.parent._reject(e) :
                wasActive && _this.idbtrans && _this.idbtrans.abort();
            return rejection(e); // Indicate we actually DO NOT catch this error.
        });
    }
    props(Transaction.prototype, {
        //
        // Transaction Protected Methods (not required by API users, but needed internally and eventually by dexie extensions)
        //
        _lock: function () {
            assert(!PSD.global); // Locking and unlocking reuires to be within a PSD scope.
            // Temporary set all requests into a pending queue if they are called before database is ready.
            ++this._reculock; // Recursive read/write lock pattern using PSD (Promise Specific Data) instead of TLS (Thread Local Storage)
            if (this._reculock === 1 && !PSD.global)
                PSD.lockOwnerFor = this;
            return this;
        },
        _unlock: function () {
            assert(!PSD.global); // Locking and unlocking reuires to be within a PSD scope.
            if (--this._reculock === 0) {
                if (!PSD.global)
                    PSD.lockOwnerFor = null;
                while (this._blockedFuncs.length > 0 && !this._locked()) {
                    var fnAndPSD = this._blockedFuncs.shift();
                    try {
                        usePSD(fnAndPSD[1], fnAndPSD[0]);
                    }
                    catch (e) { }
                }
            }
            return this;
        },
        _locked: function () {
            // Checks if any write-lock is applied on this transaction.
            // To simplify the Dexie API for extension implementations, we support recursive locks.
            // This is accomplished by using "Promise Specific Data" (PSD).
            // PSD data is bound to a Promise and any child Promise emitted through then() or resolve( new Promise() ).
            // PSD is local to code executing on top of the call stacks of any of any code executed by Promise():
            //         * callback given to the Promise() constructor  (function (resolve, reject){...})
            //         * callbacks given to then()/catch()/finally() methods (function (value){...})
            // If creating a new independant Promise instance from within a Promise call stack, the new Promise will derive the PSD from the call stack of the parent Promise.
            // Derivation is done so that the inner PSD __proto__ points to the outer PSD.
            // PSD.lockOwnerFor will point to current transaction object if the currently executing PSD scope owns the lock.
            return this._reculock && PSD.lockOwnerFor !== this;
        },
        create: function (idbtrans) {
            var _this = this;
            if (!this.mode)
                return this;
            assert(!this.idbtrans);
            if (!idbtrans && !idbdb) {
                switch (dbOpenError && dbOpenError.name) {
                    case "DatabaseClosedError":
                        // Errors where it is no difference whether it was caused by the user operation or an earlier call to db.open()
                        throw new exceptions.DatabaseClosed(dbOpenError);
                    case "MissingAPIError":
                        // Errors where it is no difference whether it was caused by the user operation or an earlier call to db.open()
                        throw new exceptions.MissingAPI(dbOpenError.message, dbOpenError);
                    default:
                        // Make it clear that the user operation was not what caused the error - the error had occurred earlier on db.open()!
                        throw new exceptions.OpenFailed(dbOpenError);
                }
            }
            if (!this.active)
                throw new exceptions.TransactionInactive();
            assert(this._completion._state === null);
            idbtrans = this.idbtrans = idbtrans || idbdb.transaction(safariMultiStoreFix(this.storeNames), this.mode);
            idbtrans.onerror = wrap(function (ev) {
                preventDefault(ev); // Prohibit default bubbling to window.error
                _this._reject(idbtrans.error);
            });
            idbtrans.onabort = wrap(function (ev) {
                preventDefault(ev);
                _this.active && _this._reject(new exceptions.Abort(idbtrans.error));
                _this.active = false;
                _this.on("abort").fire(ev);
            });
            idbtrans.oncomplete = wrap(function () {
                _this.active = false;
                _this._resolve();
            });
            return this;
        },
        _promise: function (mode, fn, bWriteLock) {
            var _this = this;
            if (mode === READWRITE && this.mode !== READWRITE)
                return rejection(new exceptions.ReadOnly("Transaction is readonly"));
            if (!this.active)
                return rejection(new exceptions.TransactionInactive());
            if (this._locked()) {
                return new Promise(function (resolve, reject) {
                    _this._blockedFuncs.push([function () {
                            _this._promise(mode, fn, bWriteLock).then(resolve, reject);
                        }, PSD]);
                });
            }
            else if (bWriteLock) {
                return newScope(function () {
                    var p = new Promise(function (resolve, reject) {
                        _this._lock();
                        var rv = fn(resolve, reject, _this);
                        if (rv && rv.then)
                            rv.then(resolve, reject);
                    });
                    p.finally(function () { return _this._unlock(); });
                    p._lib = true;
                    return p;
                });
            }
            else {
                var p = new Promise(function (resolve, reject) {
                    var rv = fn(resolve, reject, _this);
                    if (rv && rv.then)
                        rv.then(resolve, reject);
                });
                p._lib = true;
                return p;
            }
        },
        _root: function () {
            return this.parent ? this.parent._root() : this;
        },
        waitFor: function (promise) {
            // Always operate on the root transaction (in case this is a sub stransaction)
            var root = this._root();
            // For stability reasons, convert parameter to promise no matter what type is passed to waitFor().
            // (We must be able to call .then() on it.)
            promise = Promise.resolve(promise);
            if (root._waitingFor) {
                // Already called waitFor(). Wait for both to complete.
                root._waitingFor = root._waitingFor.then(function () { return promise; });
            }
            else {
                // We're not in waiting state. Start waiting state.
                root._waitingFor = promise;
                root._waitingQueue = [];
                // Start interacting with indexedDB until promise completes:
                var store = root.idbtrans.objectStore(root.storeNames[0]);
                (function spin() {
                    ++root._spinCount; // For debugging only
                    while (root._waitingQueue.length)
                        (root._waitingQueue.shift())();
                    if (root._waitingFor)
                        store.get(-Infinity).onsuccess = spin;
                }());
            }
            var currentWaitPromise = root._waitingFor;
            return new Promise(function (resolve, reject) {
                promise.then(function (res) { return root._waitingQueue.push(wrap(resolve.bind(null, res))); }, function (err) { return root._waitingQueue.push(wrap(reject.bind(null, err))); }).finally(function () {
                    if (root._waitingFor === currentWaitPromise) {
                        // No one added a wait after us. Safe to stop the spinning.
                        root._waitingFor = null;
                    }
                });
            });
        },
        //
        // Transaction Public Properties and Methods
        //
        abort: function () {
            this.active && this._reject(new exceptions.Abort());
            this.active = false;
        },
        tables: {
            get: deprecated("Transaction.tables", function () { return allTables; })
        },
        table: function (name) {
            var table = db.table(name); // Don't check that table is part of transaction. It must fail lazily!
            return new Table(name, table.schema, this);
        }
    });
    //
    //
    //
    // WhereClause
    //
    //
    //
    function WhereClause(table, index, orCollection) {
        /// <param name="table" type="Table"></param>
        /// <param name="index" type="String" optional="true"></param>
        /// <param name="orCollection" type="Collection" optional="true"></param>
        this._ctx = {
            table: table,
            index: index === ":id" ? null : index,
            or: orCollection
        };
    }
    props(WhereClause.prototype, function () {
        // WhereClause private methods
        function fail(collectionOrWhereClause, err, T) {
            var collection = collectionOrWhereClause instanceof WhereClause ?
                new Collection(collectionOrWhereClause) :
                collectionOrWhereClause;
            collection._ctx.error = T ? new T(err) : new TypeError(err);
            return collection;
        }
        function emptyCollection(whereClause) {
            return new Collection(whereClause, function () { return IDBKeyRange.only(""); }).limit(0);
        }
        function upperFactory(dir) {
            return dir === "next" ? function (s) { return s.toUpperCase(); } : function (s) { return s.toLowerCase(); };
        }
        function lowerFactory(dir) {
            return dir === "next" ? function (s) { return s.toLowerCase(); } : function (s) { return s.toUpperCase(); };
        }
        function nextCasing(key, lowerKey, upperNeedle, lowerNeedle, cmp, dir) {
            var length = Math.min(key.length, lowerNeedle.length);
            var llp = -1;
            for (var i = 0; i < length; ++i) {
                var lwrKeyChar = lowerKey[i];
                if (lwrKeyChar !== lowerNeedle[i]) {
                    if (cmp(key[i], upperNeedle[i]) < 0)
                        return key.substr(0, i) + upperNeedle[i] + upperNeedle.substr(i + 1);
                    if (cmp(key[i], lowerNeedle[i]) < 0)
                        return key.substr(0, i) + lowerNeedle[i] + upperNeedle.substr(i + 1);
                    if (llp >= 0)
                        return key.substr(0, llp) + lowerKey[llp] + upperNeedle.substr(llp + 1);
                    return null;
                }
                if (cmp(key[i], lwrKeyChar) < 0)
                    llp = i;
            }
            if (length < lowerNeedle.length && dir === "next")
                return key + upperNeedle.substr(key.length);
            if (length < key.length && dir === "prev")
                return key.substr(0, upperNeedle.length);
            return (llp < 0 ? null : key.substr(0, llp) + lowerNeedle[llp] + upperNeedle.substr(llp + 1));
        }
        function addIgnoreCaseAlgorithm(whereClause, match, needles, suffix) {
            /// <param name="needles" type="Array" elementType="String"></param>
            var upper, lower, compare, upperNeedles, lowerNeedles, direction, nextKeySuffix, needlesLen = needles.length;
            if (!needles.every(function (s) { return typeof s === 'string'; })) {
                return fail(whereClause, STRING_EXPECTED);
            }
            function initDirection(dir) {
                upper = upperFactory(dir);
                lower = lowerFactory(dir);
                compare = (dir === "next" ? simpleCompare : simpleCompareReverse);
                var needleBounds = needles.map(function (needle) {
                    return { lower: lower(needle), upper: upper(needle) };
                }).sort(function (a, b) {
                    return compare(a.lower, b.lower);
                });
                upperNeedles = needleBounds.map(function (nb) { return nb.upper; });
                lowerNeedles = needleBounds.map(function (nb) { return nb.lower; });
                direction = dir;
                nextKeySuffix = (dir === "next" ? "" : suffix);
            }
            initDirection("next");
            var c = new Collection(whereClause, function () {
                return IDBKeyRange.bound(upperNeedles[0], lowerNeedles[needlesLen - 1] + suffix);
            });
            c._ondirectionchange = function (direction) {
                // This event onlys occur before filter is called the first time.
                initDirection(direction);
            };
            var firstPossibleNeedle = 0;
            c._addAlgorithm(function (cursor, advance, resolve) {
                /// <param name="cursor" type="IDBCursor"></param>
                /// <param name="advance" type="Function"></param>
                /// <param name="resolve" type="Function"></param>
                var key = cursor.key;
                if (typeof key !== 'string')
                    return false;
                var lowerKey = lower(key);
                if (match(lowerKey, lowerNeedles, firstPossibleNeedle)) {
                    return true;
                }
                else {
                    var lowestPossibleCasing = null;
                    for (var i = firstPossibleNeedle; i < needlesLen; ++i) {
                        var casing = nextCasing(key, lowerKey, upperNeedles[i], lowerNeedles[i], compare, direction);
                        if (casing === null && lowestPossibleCasing === null)
                            firstPossibleNeedle = i + 1;
                        else if (lowestPossibleCasing === null || compare(lowestPossibleCasing, casing) > 0) {
                            lowestPossibleCasing = casing;
                        }
                    }
                    if (lowestPossibleCasing !== null) {
                        advance(function () { cursor.continue(lowestPossibleCasing + nextKeySuffix); });
                    }
                    else {
                        advance(resolve);
                    }
                    return false;
                }
            });
            return c;
        }
        //
        // WhereClause public methods
        //
        return {
            between: function (lower, upper, includeLower, includeUpper) {
                /// <summary>
                ///     Filter out records whose where-field lays between given lower and upper values. Applies to Strings, Numbers and Dates.
                /// </summary>
                /// <param name="lower"></param>
                /// <param name="upper"></param>
                /// <param name="includeLower" optional="true">Whether items that equals lower should be included. Default true.</param>
                /// <param name="includeUpper" optional="true">Whether items that equals upper should be included. Default false.</param>
                /// <returns type="Collection"></returns>
                includeLower = includeLower !== false; // Default to true
                includeUpper = includeUpper === true; // Default to false
                try {
                    if ((cmp(lower, upper) > 0) ||
                        (cmp(lower, upper) === 0 && (includeLower || includeUpper) && !(includeLower && includeUpper)))
                        return emptyCollection(this); // Workaround for idiotic W3C Specification that DataError must be thrown if lower > upper. The natural result would be to return an empty collection.
                    return new Collection(this, function () { return IDBKeyRange.bound(lower, upper, !includeLower, !includeUpper); });
                }
                catch (e) {
                    return fail(this, INVALID_KEY_ARGUMENT);
                }
            },
            equals: function (value) {
                return new Collection(this, function () { return IDBKeyRange.only(value); });
            },
            above: function (value) {
                return new Collection(this, function () { return IDBKeyRange.lowerBound(value, true); });
            },
            aboveOrEqual: function (value) {
                return new Collection(this, function () { return IDBKeyRange.lowerBound(value); });
            },
            below: function (value) {
                return new Collection(this, function () { return IDBKeyRange.upperBound(value, true); });
            },
            belowOrEqual: function (value) {
                return new Collection(this, function () { return IDBKeyRange.upperBound(value); });
            },
            startsWith: function (str) {
                /// <param name="str" type="String"></param>
                if (typeof str !== 'string')
                    return fail(this, STRING_EXPECTED);
                return this.between(str, str + maxString, true, true);
            },
            startsWithIgnoreCase: function (str) {
                /// <param name="str" type="String"></param>
                if (str === "")
                    return this.startsWith(str);
                return addIgnoreCaseAlgorithm(this, function (x, a) { return x.indexOf(a[0]) === 0; }, [str], maxString);
            },
            equalsIgnoreCase: function (str) {
                /// <param name="str" type="String"></param>
                return addIgnoreCaseAlgorithm(this, function (x, a) { return x === a[0]; }, [str], "");
            },
            anyOfIgnoreCase: function () {
                var set = getArrayOf.apply(NO_CHAR_ARRAY, arguments);
                if (set.length === 0)
                    return emptyCollection(this);
                return addIgnoreCaseAlgorithm(this, function (x, a) { return a.indexOf(x) !== -1; }, set, "");
            },
            startsWithAnyOfIgnoreCase: function () {
                var set = getArrayOf.apply(NO_CHAR_ARRAY, arguments);
                if (set.length === 0)
                    return emptyCollection(this);
                return addIgnoreCaseAlgorithm(this, function (x, a) {
                    return a.some(function (n) {
                        return x.indexOf(n) === 0;
                    });
                }, set, maxString);
            },
            anyOf: function () {
                var set = getArrayOf.apply(NO_CHAR_ARRAY, arguments);
                var compare = ascending;
                try {
                    set.sort(compare);
                }
                catch (e) {
                    return fail(this, INVALID_KEY_ARGUMENT);
                }
                if (set.length === 0)
                    return emptyCollection(this);
                var c = new Collection(this, function () { return IDBKeyRange.bound(set[0], set[set.length - 1]); });
                c._ondirectionchange = function (direction) {
                    compare = (direction === "next" ? ascending : descending);
                    set.sort(compare);
                };
                var i = 0;
                c._addAlgorithm(function (cursor, advance, resolve) {
                    var key = cursor.key;
                    while (compare(key, set[i]) > 0) {
                        // The cursor has passed beyond this key. Check next.
                        ++i;
                        if (i === set.length) {
                            // There is no next. Stop searching.
                            advance(resolve);
                            return false;
                        }
                    }
                    if (compare(key, set[i]) === 0) {
                        // The current cursor value should be included and we should continue a single step in case next item has the same key or possibly our next key in set.
                        return true;
                    }
                    else {
                        // cursor.key not yet at set[i]. Forward cursor to the next key to hunt for.
                        advance(function () { cursor.continue(set[i]); });
                        return false;
                    }
                });
                return c;
            },
            notEqual: function (value) {
                return this.inAnyRange([[minKey, value], [value, maxKey]], { includeLowers: false, includeUppers: false });
            },
            noneOf: function () {
                var set = getArrayOf.apply(NO_CHAR_ARRAY, arguments);
                if (set.length === 0)
                    return new Collection(this); // Return entire collection.
                try {
                    set.sort(ascending);
                }
                catch (e) {
                    return fail(this, INVALID_KEY_ARGUMENT);
                }
                // Transform ["a","b","c"] to a set of ranges for between/above/below: [[minKey,"a"], ["a","b"], ["b","c"], ["c",maxKey]]
                var ranges = set.reduce(function (res, val) { return res ? res.concat([[res[res.length - 1][1], val]]) : [[minKey, val]]; }, null);
                ranges.push([set[set.length - 1], maxKey]);
                return this.inAnyRange(ranges, { includeLowers: false, includeUppers: false });
            },
            /** Filter out values withing given set of ranges.
            * Example, give children and elders a rebate of 50%:
            *
            *   db.friends.where('age').inAnyRange([[0,18],[65,Infinity]]).modify({Rebate: 1/2});
            *
            * @param {(string|number|Date|Array)[][]} ranges
            * @param {{includeLowers: boolean, includeUppers: boolean}} options
            */
            inAnyRange: function (ranges, options) {
                if (ranges.length === 0)
                    return emptyCollection(this);
                if (!ranges.every(function (range) { return range[0] !== undefined && range[1] !== undefined && ascending(range[0], range[1]) <= 0; })) {
                    return fail(this, "First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower", exceptions.InvalidArgument);
                }
                var includeLowers = !options || options.includeLowers !== false; // Default to true
                var includeUppers = options && options.includeUppers === true; // Default to false
                function addRange(ranges, newRange) {
                    for (var i = 0, l = ranges.length; i < l; ++i) {
                        var range = ranges[i];
                        if (cmp(newRange[0], range[1]) < 0 && cmp(newRange[1], range[0]) > 0) {
                            range[0] = min(range[0], newRange[0]);
                            range[1] = max(range[1], newRange[1]);
                            break;
                        }
                    }
                    if (i === l)
                        ranges.push(newRange);
                    return ranges;
                }
                var sortDirection = ascending;
                function rangeSorter(a, b) { return sortDirection(a[0], b[0]); }
                // Join overlapping ranges
                var set;
                try {
                    set = ranges.reduce(addRange, []);
                    set.sort(rangeSorter);
                }
                catch (ex) {
                    return fail(this, INVALID_KEY_ARGUMENT);
                }
                var i = 0;
                var keyIsBeyondCurrentEntry = includeUppers ?
                    function (key) { return ascending(key, set[i][1]) > 0; } :
                    function (key) { return ascending(key, set[i][1]) >= 0; };
                var keyIsBeforeCurrentEntry = includeLowers ?
                    function (key) { return descending(key, set[i][0]) > 0; } :
                    function (key) { return descending(key, set[i][0]) >= 0; };
                function keyWithinCurrentRange(key) {
                    return !keyIsBeyondCurrentEntry(key) && !keyIsBeforeCurrentEntry(key);
                }
                var checkKey = keyIsBeyondCurrentEntry;
                var c = new Collection(this, function () {
                    return IDBKeyRange.bound(set[0][0], set[set.length - 1][1], !includeLowers, !includeUppers);
                });
                c._ondirectionchange = function (direction) {
                    if (direction === "next") {
                        checkKey = keyIsBeyondCurrentEntry;
                        sortDirection = ascending;
                    }
                    else {
                        checkKey = keyIsBeforeCurrentEntry;
                        sortDirection = descending;
                    }
                    set.sort(rangeSorter);
                };
                c._addAlgorithm(function (cursor, advance, resolve) {
                    var key = cursor.key;
                    while (checkKey(key)) {
                        // The cursor has passed beyond this key. Check next.
                        ++i;
                        if (i === set.length) {
                            // There is no next. Stop searching.
                            advance(resolve);
                            return false;
                        }
                    }
                    if (keyWithinCurrentRange(key)) {
                        // The current cursor value should be included and we should continue a single step in case next item has the same key or possibly our next key in set.
                        return true;
                    }
                    else if (cmp(key, set[i][1]) === 0 || cmp(key, set[i][0]) === 0) {
                        // includeUpper or includeLower is false so keyWithinCurrentRange() returns false even though we are at range border.
                        // Continue to next key but don't include this one.
                        return false;
                    }
                    else {
                        // cursor.key not yet at set[i]. Forward cursor to the next key to hunt for.
                        advance(function () {
                            if (sortDirection === ascending)
                                cursor.continue(set[i][0]);
                            else
                                cursor.continue(set[i][1]);
                        });
                        return false;
                    }
                });
                return c;
            },
            startsWithAnyOf: function () {
                var set = getArrayOf.apply(NO_CHAR_ARRAY, arguments);
                if (!set.every(function (s) { return typeof s === 'string'; })) {
                    return fail(this, "startsWithAnyOf() only works with strings");
                }
                if (set.length === 0)
                    return emptyCollection(this);
                return this.inAnyRange(set.map(function (str) {
                    return [str, str + maxString];
                }));
            }
        };
    });
    //
    //
    //
    // Collection Class
    //
    //
    //
    function Collection(whereClause, keyRangeGenerator) {
        /// <summary>
        ///
        /// </summary>
        /// <param name="whereClause" type="WhereClause">Where clause instance</param>
        /// <param name="keyRangeGenerator" value="function(){ return IDBKeyRange.bound(0,1);}" optional="true"></param>
        var keyRange = null, error = null;
        if (keyRangeGenerator)
            try {
                keyRange = keyRangeGenerator();
            }
            catch (ex) {
                error = ex;
            }
        var whereCtx = whereClause._ctx, table = whereCtx.table;
        this._ctx = {
            table: table,
            index: whereCtx.index,
            isPrimKey: (!whereCtx.index || (table.schema.primKey.keyPath && whereCtx.index === table.schema.primKey.name)),
            range: keyRange,
            keysOnly: false,
            dir: "next",
            unique: "",
            algorithm: null,
            filter: null,
            replayFilter: null,
            justLimit: true,
            isMatch: null,
            offset: 0,
            limit: Infinity,
            error: error,
            or: whereCtx.or,
            valueMapper: table.hook.reading.fire
        };
    }
    function isPlainKeyRange(ctx, ignoreLimitFilter) {
        return !(ctx.filter || ctx.algorithm || ctx.or) &&
            (ignoreLimitFilter ? ctx.justLimit : !ctx.replayFilter);
    }
    props(Collection.prototype, function () {
        //
        // Collection Private Functions
        //
        function addFilter(ctx, fn) {
            ctx.filter = combine(ctx.filter, fn);
        }
        function addReplayFilter(ctx, factory, isLimitFilter) {
            var curr = ctx.replayFilter;
            ctx.replayFilter = curr ? function () { return combine(curr(), factory()); } : factory;
            ctx.justLimit = isLimitFilter && !curr;
        }
        function addMatchFilter(ctx, fn) {
            ctx.isMatch = combine(ctx.isMatch, fn);
        }
        /** @param ctx {
         *      isPrimKey: boolean,
         *      table: Table,
         *      index: string
         * }
         * @param store IDBObjectStore
         **/
        function getIndexOrStore(ctx, store) {
            if (ctx.isPrimKey)
                return store;
            var indexSpec = ctx.table.schema.idxByName[ctx.index];
            if (!indexSpec)
                throw new exceptions.Schema("KeyPath " + ctx.index + " on object store " + store.name + " is not indexed");
            return store.index(indexSpec.name);
        }
        /** @param ctx {
         *      isPrimKey: boolean,
         *      table: Table,
         *      index: string,
         *      keysOnly: boolean,
         *      range?: IDBKeyRange,
         *      dir: "next" | "prev"
         * }
         */
        function openCursor(ctx, store) {
            var idxOrStore = getIndexOrStore(ctx, store);
            return ctx.keysOnly && 'openKeyCursor' in idxOrStore ?
                idxOrStore.openKeyCursor(ctx.range || null, ctx.dir + ctx.unique) :
                idxOrStore.openCursor(ctx.range || null, ctx.dir + ctx.unique);
        }
        function iter(ctx, fn, resolve, reject, idbstore) {
            var filter = ctx.replayFilter ? combine(ctx.filter, ctx.replayFilter()) : ctx.filter;
            if (!ctx.or) {
                iterate(openCursor(ctx, idbstore), combine(ctx.algorithm, filter), fn, resolve, reject, !ctx.keysOnly && ctx.valueMapper);
            }
            else
                (function () {
                    var set = {};
                    var resolved = 0;
                    function resolveboth() {
                        if (++resolved === 2)
                            resolve(); // Seems like we just support or btwn max 2 expressions, but there are no limit because we do recursion.
                    }
                    function union(item, cursor, advance) {
                        if (!filter || filter(cursor, advance, resolveboth, reject)) {
                            var primaryKey = cursor.primaryKey;
                            var key = '' + primaryKey;
                            if (key === '[object ArrayBuffer]')
                                key = '' + new Uint8Array(primaryKey);
                            if (!hasOwn(set, key)) {
                                set[key] = true;
                                fn(item, cursor, advance);
                            }
                        }
                    }
                    ctx.or._iterate(union, resolveboth, reject, idbstore);
                    iterate(openCursor(ctx, idbstore), ctx.algorithm, union, resolveboth, reject, !ctx.keysOnly && ctx.valueMapper);
                })();
        }
        return {
            //
            // Collection Protected Functions
            //
            _read: function (fn, cb) {
                var ctx = this._ctx;
                return ctx.error ?
                    ctx.table._trans(null, rejection.bind(null, ctx.error)) :
                    ctx.table._idbstore(READONLY, fn).then(cb);
            },
            _write: function (fn) {
                var ctx = this._ctx;
                return ctx.error ?
                    ctx.table._trans(null, rejection.bind(null, ctx.error)) :
                    ctx.table._idbstore(READWRITE, fn, "locked"); // When doing write operations on collections, always lock the operation so that upcoming operations gets queued.
            },
            _addAlgorithm: function (fn) {
                var ctx = this._ctx;
                ctx.algorithm = combine(ctx.algorithm, fn);
            },
            _iterate: function (fn, resolve, reject, idbstore) {
                return iter(this._ctx, fn, resolve, reject, idbstore);
            },
            clone: function (props$$1) {
                var rv = Object.create(this.constructor.prototype), ctx = Object.create(this._ctx);
                if (props$$1)
                    extend(ctx, props$$1);
                rv._ctx = ctx;
                return rv;
            },
            raw: function () {
                this._ctx.valueMapper = null;
                return this;
            },
            //
            // Collection Public methods
            //
            each: function (fn) {
                var ctx = this._ctx;
                return this._read(function (resolve, reject, idbstore) {
                    iter(ctx, fn, resolve, reject, idbstore);
                });
            },
            count: function (cb) {
                var ctx = this._ctx;
                if (isPlainKeyRange(ctx, true)) {
                    // This is a plain key range. We can use the count() method if the index.
                    return this._read(function (resolve, reject, idbstore) {
                        var idx = getIndexOrStore(ctx, idbstore);
                        var req = (ctx.range ? idx.count(ctx.range) : idx.count());
                        req.onerror = eventRejectHandler(reject);
                        req.onsuccess = function (e) {
                            resolve(Math.min(e.target.result, ctx.limit));
                        };
                    }, cb);
                }
                else {
                    // Algorithms, filters or expressions are applied. Need to count manually.
                    var count = 0;
                    return this._read(function (resolve, reject, idbstore) {
                        iter(ctx, function () { ++count; return false; }, function () { resolve(count); }, reject, idbstore);
                    }, cb);
                }
            },
            sortBy: function (keyPath, cb) {
                /// <param name="keyPath" type="String"></param>
                var parts = keyPath.split('.').reverse(), lastPart = parts[0], lastIndex = parts.length - 1;
                function getval(obj, i) {
                    if (i)
                        return getval(obj[parts[i]], i - 1);
                    return obj[lastPart];
                }
                var order = this._ctx.dir === "next" ? 1 : -1;
                function sorter(a, b) {
                    var aVal = getval(a, lastIndex), bVal = getval(b, lastIndex);
                    return aVal < bVal ? -order : aVal > bVal ? order : 0;
                }
                return this.toArray(function (a) {
                    return a.sort(sorter);
                }).then(cb);
            },
            toArray: function (cb) {
                var ctx = this._ctx;
                return this._read(function (resolve, reject, idbstore) {
                    if (hasGetAll && ctx.dir === 'next' && isPlainKeyRange(ctx, true) && ctx.limit > 0) {
                        // Special optimation if we could use IDBObjectStore.getAll() or
                        // IDBKeyRange.getAll():
                        var readingHook = ctx.table.hook.reading.fire;
                        var idxOrStore = getIndexOrStore(ctx, idbstore);
                        var req = ctx.limit < Infinity ?
                            idxOrStore.getAll(ctx.range, ctx.limit) :
                            idxOrStore.getAll(ctx.range);
                        req.onerror = eventRejectHandler(reject);
                        req.onsuccess = readingHook === mirror ?
                            eventSuccessHandler(resolve) :
                            eventSuccessHandler(function (res) {
                                try {
                                    resolve(res.map(readingHook));
                                }
                                catch (e) {
                                    reject(e);
                                }
                            });
                    }
                    else {
                        // Getting array through a cursor.
                        var a = [];
                        iter(ctx, function (item) { a.push(item); }, function arrayComplete() {
                            resolve(a);
                        }, reject, idbstore);
                    }
                }, cb);
            },
            offset: function (offset) {
                var ctx = this._ctx;
                if (offset <= 0)
                    return this;
                ctx.offset += offset; // For count()
                if (isPlainKeyRange(ctx)) {
                    addReplayFilter(ctx, function () {
                        var offsetLeft = offset;
                        return function (cursor, advance) {
                            if (offsetLeft === 0)
                                return true;
                            if (offsetLeft === 1) {
                                --offsetLeft;
                                return false;
                            }
                            advance(function () {
                                cursor.advance(offsetLeft);
                                offsetLeft = 0;
                            });
                            return false;
                        };
                    });
                }
                else {
                    addReplayFilter(ctx, function () {
                        var offsetLeft = offset;
                        return function () { return (--offsetLeft < 0); };
                    });
                }
                return this;
            },
            limit: function (numRows) {
                this._ctx.limit = Math.min(this._ctx.limit, numRows); // For count()
                addReplayFilter(this._ctx, function () {
                    var rowsLeft = numRows;
                    return function (cursor, advance, resolve) {
                        if (--rowsLeft <= 0)
                            advance(resolve); // Stop after this item has been included
                        return rowsLeft >= 0; // If numRows is already below 0, return false because then 0 was passed to numRows initially. Otherwise we wouldnt come here.
                    };
                }, true);
                return this;
            },
            until: function (filterFunction, bIncludeStopEntry) {
                addFilter(this._ctx, function (cursor, advance, resolve) {
                    if (filterFunction(cursor.value)) {
                        advance(resolve);
                        return bIncludeStopEntry;
                    }
                    else {
                        return true;
                    }
                });
                return this;
            },
            first: function (cb) {
                return this.limit(1).toArray(function (a) { return a[0]; }).then(cb);
            },
            last: function (cb) {
                return this.reverse().first(cb);
            },
            filter: function (filterFunction) {
                /// <param name="jsFunctionFilter" type="Function">function(val){return true/false}</param>
                addFilter(this._ctx, function (cursor) {
                    return filterFunction(cursor.value);
                });
                // match filters not used in Dexie.js but can be used by 3rd part libraries to test a
                // collection for a match without querying DB. Used by Dexie.Observable.
                addMatchFilter(this._ctx, filterFunction);
                return this;
            },
            and: function (filterFunction) {
                return this.filter(filterFunction);
            },
            or: function (indexName) {
                return new WhereClause(this._ctx.table, indexName, this);
            },
            reverse: function () {
                this._ctx.dir = (this._ctx.dir === "prev" ? "next" : "prev");
                if (this._ondirectionchange)
                    this._ondirectionchange(this._ctx.dir);
                return this;
            },
            desc: function () {
                return this.reverse();
            },
            eachKey: function (cb) {
                var ctx = this._ctx;
                ctx.keysOnly = !ctx.isMatch;
                return this.each(function (val, cursor) { cb(cursor.key, cursor); });
            },
            eachUniqueKey: function (cb) {
                this._ctx.unique = "unique";
                return this.eachKey(cb);
            },
            eachPrimaryKey: function (cb) {
                var ctx = this._ctx;
                ctx.keysOnly = !ctx.isMatch;
                return this.each(function (val, cursor) { cb(cursor.primaryKey, cursor); });
            },
            keys: function (cb) {
                var ctx = this._ctx;
                ctx.keysOnly = !ctx.isMatch;
                var a = [];
                return this.each(function (item, cursor) {
                    a.push(cursor.key);
                }).then(function () {
                    return a;
                }).then(cb);
            },
            primaryKeys: function (cb) {
                var ctx = this._ctx;
                if (hasGetAll && ctx.dir === 'next' && isPlainKeyRange(ctx, true) && ctx.limit > 0) {
                    // Special optimation if we could use IDBObjectStore.getAllKeys() or
                    // IDBKeyRange.getAllKeys():
                    return this._read(function (resolve, reject, idbstore) {
                        var idxOrStore = getIndexOrStore(ctx, idbstore);
                        var req = ctx.limit < Infinity ?
                            idxOrStore.getAllKeys(ctx.range, ctx.limit) :
                            idxOrStore.getAllKeys(ctx.range);
                        req.onerror = eventRejectHandler(reject);
                        req.onsuccess = eventSuccessHandler(resolve);
                    }).then(cb);
                }
                ctx.keysOnly = !ctx.isMatch;
                var a = [];
                return this.each(function (item, cursor) {
                    a.push(cursor.primaryKey);
                }).then(function () {
                    return a;
                }).then(cb);
            },
            uniqueKeys: function (cb) {
                this._ctx.unique = "unique";
                return this.keys(cb);
            },
            firstKey: function (cb) {
                return this.limit(1).keys(function (a) { return a[0]; }).then(cb);
            },
            lastKey: function (cb) {
                return this.reverse().firstKey(cb);
            },
            distinct: function () {
                var ctx = this._ctx, idx = ctx.index && ctx.table.schema.idxByName[ctx.index];
                if (!idx || !idx.multi)
                    return this; // distinct() only makes differencies on multiEntry indexes.
                var set = {};
                addFilter(this._ctx, function (cursor) {
                    var strKey = cursor.primaryKey.toString(); // Converts any Date to String, String to String, Number to String and Array to comma-separated string
                    var found = hasOwn(set, strKey);
                    set[strKey] = true;
                    return !found;
                });
                return this;
            },
            //
            // Methods that mutate storage
            //
            modify: function (changes) {
                var self = this, ctx = this._ctx, hook = ctx.table.hook, updatingHook = hook.updating.fire, deletingHook = hook.deleting.fire;
                return this._write(function (resolve, reject, idbstore, trans) {
                    var modifyer;
                    if (typeof changes === 'function') {
                        // Changes is a function that may update, add or delete propterties or even require a deletion the object itself (delete this.item)
                        if (updatingHook === nop && deletingHook === nop) {
                            // Noone cares about what is being changed. Just let the modifier function be the given argument as is.
                            modifyer = changes;
                        }
                        else {
                            // People want to know exactly what is being modified or deleted.
                            // Let modifyer be a proxy function that finds out what changes the caller is actually doing
                            // and call the hooks accordingly!
                            modifyer = function (item) {
                                var origItem = deepClone(item); // Clone the item first so we can compare laters.
                                if (changes.call(this, item, this) === false)
                                    return false; // Call the real modifyer function (If it returns false explicitely, it means it dont want to modify anyting on this object)
                                if (!hasOwn(this, "value")) {
                                    // The real modifyer function requests a deletion of the object. Inform the deletingHook that a deletion is taking place.
                                    deletingHook.call(this, this.primKey, item, trans);
                                }
                                else {
                                    // No deletion. Check what was changed
                                    var objectDiff = getObjectDiff(origItem, this.value);
                                    var additionalChanges = updatingHook.call(this, objectDiff, this.primKey, origItem, trans);
                                    if (additionalChanges) {
                                        // Hook want to apply additional modifications. Make sure to fullfill the will of the hook.
                                        item = this.value;
                                        keys(additionalChanges).forEach(function (keyPath) {
                                            setByKeyPath(item, keyPath, additionalChanges[keyPath]); // Adding {keyPath: undefined} means that the keyPath should be deleted. Handled by setByKeyPath
                                        });
                                    }
                                }
                            };
                        }
                    }
                    else if (updatingHook === nop) {
                        // changes is a set of {keyPath: value} and no one is listening to the updating hook.
                        var keyPaths = keys(changes);
                        var numKeys = keyPaths.length;
                        modifyer = function (item) {
                            var anythingModified = false;
                            for (var i = 0; i < numKeys; ++i) {
                                var keyPath = keyPaths[i], val = changes[keyPath];
                                if (getByKeyPath(item, keyPath) !== val) {
                                    setByKeyPath(item, keyPath, val); // Adding {keyPath: undefined} means that the keyPath should be deleted. Handled by setByKeyPath
                                    anythingModified = true;
                                }
                            }
                            return anythingModified;
                        };
                    }
                    else {
                        // changes is a set of {keyPath: value} and people are listening to the updating hook so we need to call it and
                        // allow it to add additional modifications to make.
                        var origChanges = changes;
                        changes = shallowClone(origChanges); // Let's work with a clone of the changes keyPath/value set so that we can restore it in case a hook extends it.
                        modifyer = function (item) {
                            var anythingModified = false;
                            var additionalChanges = updatingHook.call(this, changes, this.primKey, deepClone(item), trans);
                            if (additionalChanges)
                                extend(changes, additionalChanges);
                            keys(changes).forEach(function (keyPath) {
                                var val = changes[keyPath];
                                if (getByKeyPath(item, keyPath) !== val) {
                                    setByKeyPath(item, keyPath, val);
                                    anythingModified = true;
                                }
                            });
                            if (additionalChanges)
                                changes = shallowClone(origChanges); // Restore original changes for next iteration
                            return anythingModified;
                        };
                    }
                    var count = 0;
                    var successCount = 0;
                    var iterationComplete = false;
                    var failures = [];
                    var failKeys = [];
                    var currentKey = null;
                    function modifyItem(item, cursor) {
                        currentKey = cursor.primaryKey;
                        var thisContext = {
                            primKey: cursor.primaryKey,
                            value: item,
                            onsuccess: null,
                            onerror: null
                        };
                        function onerror(e) {
                            failures.push(e);
                            failKeys.push(thisContext.primKey);
                            checkFinished();
                            return true; // Catch these errors and let a final rejection decide whether or not to abort entire transaction
                        }
                        if (modifyer.call(thisContext, item, thisContext) !== false) {
                            var bDelete = !hasOwn(thisContext, "value");
                            ++count;
                            tryCatch(function () {
                                var req = (bDelete ? cursor.delete() : cursor.update(thisContext.value));
                                req._hookCtx = thisContext;
                                req.onerror = hookedEventRejectHandler(onerror);
                                req.onsuccess = hookedEventSuccessHandler(function () {
                                    ++successCount;
                                    checkFinished();
                                });
                            }, onerror);
                        }
                        else if (thisContext.onsuccess) {
                            // Hook will expect either onerror or onsuccess to always be called!
                            thisContext.onsuccess(thisContext.value);
                        }
                    }
                    function doReject(e) {
                        if (e) {
                            failures.push(e);
                            failKeys.push(currentKey);
                        }
                        return reject(new ModifyError("Error modifying one or more objects", failures, successCount, failKeys));
                    }
                    function checkFinished() {
                        if (iterationComplete && successCount + failures.length === count) {
                            if (failures.length > 0)
                                doReject();
                            else
                                resolve(successCount);
                        }
                    }
                    self.clone().raw()._iterate(modifyItem, function () {
                        iterationComplete = true;
                        checkFinished();
                    }, doReject, idbstore);
                });
            },
            'delete': function () {
                var _this = this;
                var ctx = this._ctx, range = ctx.range, deletingHook = ctx.table.hook.deleting.fire, hasDeleteHook = deletingHook !== nop;
                if (!hasDeleteHook &&
                    isPlainKeyRange(ctx) &&
                    ((ctx.isPrimKey && !hangsOnDeleteLargeKeyRange) || !range)) {
                    // May use IDBObjectStore.delete(IDBKeyRange) in this case (Issue #208)
                    // For chromium, this is the way most optimized version.
                    // For IE/Edge, this could hang the indexedDB engine and make operating system instable
                    // (https://gist.github.com/dfahlander/5a39328f029de18222cf2125d56c38f7)
                    return this._write(function (resolve, reject, idbstore) {
                        // Our API contract is to return a count of deleted items, so we have to count() before delete().
                        var onerror = eventRejectHandler(reject), countReq = (range ? idbstore.count(range) : idbstore.count());
                        countReq.onerror = onerror;
                        countReq.onsuccess = function () {
                            var count = countReq.result;
                            tryCatch(function () {
                                var delReq = (range ? idbstore.delete(range) : idbstore.clear());
                                delReq.onerror = onerror;
                                delReq.onsuccess = function () { return resolve(count); };
                            }, function (err) { return reject(err); });
                        };
                    });
                }
                // Default version to use when collection is not a vanilla IDBKeyRange on the primary key.
                // Divide into chunks to not starve RAM.
                // If has delete hook, we will have to collect not just keys but also objects, so it will use
                // more memory and need lower chunk size.
                var CHUNKSIZE = hasDeleteHook ? 2000 : 10000;
                return this._write(function (resolve, reject, idbstore, trans) {
                    var totalCount = 0;
                    // Clone collection and change its table and set a limit of CHUNKSIZE on the cloned Collection instance.
                    var collection = _this
                        .clone({
                        keysOnly: !ctx.isMatch && !hasDeleteHook
                    }) // load just keys (unless filter() or and() or deleteHook has subscribers)
                        .distinct() // In case multiEntry is used, never delete same key twice because resulting count
                        .limit(CHUNKSIZE)
                        .raw(); // Don't filter through reading-hooks (like mapped classes etc)
                    var keysOrTuples = [];
                    // We're gonna do things on as many chunks that are needed.
                    // Use recursion of nextChunk function:
                    var nextChunk = function () { return collection.each(hasDeleteHook ? function (val, cursor) {
                        // Somebody subscribes to hook('deleting'). Collect all primary keys and their values,
                        // so that the hook can be called with its values in bulkDelete().
                        keysOrTuples.push([cursor.primaryKey, cursor.value]);
                    } : function (val, cursor) {
                        // No one subscribes to hook('deleting'). Collect only primary keys:
                        keysOrTuples.push(cursor.primaryKey);
                    }).then(function () {
                        // Chromium deletes faster when doing it in sort order.
                        hasDeleteHook ?
                            keysOrTuples.sort(function (a, b) { return ascending(a[0], b[0]); }) :
                            keysOrTuples.sort(ascending);
                        return bulkDelete(idbstore, trans, keysOrTuples, hasDeleteHook, deletingHook);
                    }).then(function () {
                        var count = keysOrTuples.length;
                        totalCount += count;
                        keysOrTuples = [];
                        return count < CHUNKSIZE ? totalCount : nextChunk();
                    }); };
                    resolve(nextChunk());
                });
            }
        };
    });
    //
    //
    //
    // ------------------------- Help functions ---------------------------
    //
    //
    //
    function lowerVersionFirst(a, b) {
        return a._cfg.version - b._cfg.version;
    }
    function setApiOnPlace(objs, tableNames, dbschema) {
        tableNames.forEach(function (tableName) {
            var schema = dbschema[tableName];
            objs.forEach(function (obj) {
                if (!(tableName in obj)) {
                    if (obj === Transaction.prototype || obj instanceof Transaction) {
                        // obj is a Transaction prototype (or prototype of a subclass to Transaction)
                        // Make the API a getter that returns this.table(tableName)
                        setProp(obj, tableName, { get: function () { return this.table(tableName); } });
                    }
                    else {
                        // Table will not be bound to a transaction (will use Dexie.currentTransaction)
                        obj[tableName] = new Table(tableName, schema);
                    }
                }
            });
        });
    }
    function removeTablesApi(objs) {
        objs.forEach(function (obj) {
            for (var key in obj) {
                if (obj[key] instanceof Table)
                    delete obj[key];
            }
        });
    }
    function iterate(req, filter, fn, resolve, reject, valueMapper) {
        // Apply valueMapper (hook('reading') or mappped class)
        var mappedFn = valueMapper ? function (x, c, a) { return fn(valueMapper(x), c, a); } : fn;
        // Wrap fn with PSD and microtick stuff from Promise.
        var wrappedFn = wrap(mappedFn, reject);
        if (!req.onerror)
            req.onerror = eventRejectHandler(reject);
        if (filter) {
            req.onsuccess = trycatcher(function filter_record() {
                var cursor = req.result;
                if (cursor) {
                    var c = function () { cursor.continue(); };
                    if (filter(cursor, function (advancer) { c = advancer; }, resolve, reject))
                        wrappedFn(cursor.value, cursor, function (advancer) { c = advancer; });
                    c();
                }
                else {
                    resolve();
                }
            }, reject);
        }
        else {
            req.onsuccess = trycatcher(function filter_record() {
                var cursor = req.result;
                if (cursor) {
                    var c = function () { cursor.continue(); };
                    wrappedFn(cursor.value, cursor, function (advancer) { c = advancer; });
                    c();
                }
                else {
                    resolve();
                }
            }, reject);
        }
    }
    function parseIndexSyntax(indexes) {
        /// <param name="indexes" type="String"></param>
        /// <returns type="Array" elementType="IndexSpec"></returns>
        var rv = [];
        indexes.split(',').forEach(function (index) {
            index = index.trim();
            var name = index.replace(/([&*]|\+\+)/g, ""); // Remove "&", "++" and "*"
            // Let keyPath of "[a+b]" be ["a","b"]:
            var keyPath = /^\[/.test(name) ? name.match(/^\[(.*)\]$/)[1].split('+') : name;
            rv.push(new IndexSpec(name, keyPath || null, /\&/.test(index), /\*/.test(index), /\+\+/.test(index), isArray(keyPath), /\./.test(index)));
        });
        return rv;
    }
    function cmp(key1, key2) {
        return indexedDB.cmp(key1, key2);
    }
    function min(a, b) {
        return cmp(a, b) < 0 ? a : b;
    }
    function max(a, b) {
        return cmp(a, b) > 0 ? a : b;
    }
    function ascending(a, b) {
        return indexedDB.cmp(a, b);
    }
    function descending(a, b) {
        return indexedDB.cmp(b, a);
    }
    function simpleCompare(a, b) {
        return a < b ? -1 : a === b ? 0 : 1;
    }
    function simpleCompareReverse(a, b) {
        return a > b ? -1 : a === b ? 0 : 1;
    }
    function combine(filter1, filter2) {
        return filter1 ?
            filter2 ?
                function () { return filter1.apply(this, arguments) && filter2.apply(this, arguments); } :
                filter1 :
            filter2;
    }
    function readGlobalSchema() {
        db.verno = idbdb.version / 10;
        db._dbSchema = globalSchema = {};
        dbStoreNames = slice(idbdb.objectStoreNames, 0);
        if (dbStoreNames.length === 0)
            return; // Database contains no stores.
        var trans = idbdb.transaction(safariMultiStoreFix(dbStoreNames), 'readonly');
        dbStoreNames.forEach(function (storeName) {
            var store = trans.objectStore(storeName), keyPath = store.keyPath, dotted = keyPath && typeof keyPath === 'string' && keyPath.indexOf('.') !== -1;
            var primKey = new IndexSpec(keyPath, keyPath || "", false, false, !!store.autoIncrement, keyPath && typeof keyPath !== 'string', dotted);
            var indexes = [];
            for (var j = 0; j < store.indexNames.length; ++j) {
                var idbindex = store.index(store.indexNames[j]);
                keyPath = idbindex.keyPath;
                dotted = keyPath && typeof keyPath === 'string' && keyPath.indexOf('.') !== -1;
                var index = new IndexSpec(idbindex.name, keyPath, !!idbindex.unique, !!idbindex.multiEntry, false, keyPath && typeof keyPath !== 'string', dotted);
                indexes.push(index);
            }
            globalSchema[storeName] = new TableSchema(storeName, primKey, indexes, {});
        });
        setApiOnPlace([allTables], keys(globalSchema), globalSchema);
    }
    function adjustToExistingIndexNames(schema, idbtrans) {
        /// <summary>
        /// Issue #30 Problem with existing db - adjust to existing index names when migrating from non-dexie db
        /// </summary>
        /// <param name="schema" type="Object">Map between name and TableSchema</param>
        /// <param name="idbtrans" type="IDBTransaction"></param>
        var storeNames = idbtrans.db.objectStoreNames;
        for (var i = 0; i < storeNames.length; ++i) {
            var storeName = storeNames[i];
            var store = idbtrans.objectStore(storeName);
            hasGetAll = 'getAll' in store;
            for (var j = 0; j < store.indexNames.length; ++j) {
                var indexName = store.indexNames[j];
                var keyPath = store.index(indexName).keyPath;
                var dexieName = typeof keyPath === 'string' ? keyPath : "[" + slice(keyPath).join('+') + "]";
                if (schema[storeName]) {
                    var indexSpec = schema[storeName].idxByName[dexieName];
                    if (indexSpec)
                        indexSpec.name = indexName;
                }
            }
        }
        // Bug with getAll() on Safari ver<604 on Workers only, see discussion following PR #579
        if (/Safari/.test(navigator.userAgent) &&
            !/(Chrome\/|Edge\/)/.test(navigator.userAgent) &&
            _global.WorkerGlobalScope && _global instanceof _global.WorkerGlobalScope &&
            [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604) {
            hasGetAll = false;
        }
    }
    function fireOnBlocked(ev) {
        db.on("blocked").fire(ev);
        // Workaround (not fully*) for missing "versionchange" event in IE,Edge and Safari:
        connections
            .filter(function (c) { return c.name === db.name && c !== db && !c._vcFired; })
            .map(function (c) { return c.on("versionchange").fire(ev); });
    }
    extend(this, {
        Collection: Collection,
        Table: Table,
        Transaction: Transaction,
        Version: Version,
        WhereClause: WhereClause
    });
    init();
    addons.forEach(function (fn) {
        fn(db);
    });
}
function parseType(type) {
    if (typeof type === 'function') {
        return new type();
    }
    else if (isArray(type)) {
        return [parseType(type[0])];
    }
    else if (type && typeof type === 'object') {
        var rv = {};
        applyStructure(rv, type);
        return rv;
    }
    else {
        return type;
    }
}
function applyStructure(obj, structure) {
    keys(structure).forEach(function (member) {
        var value = parseType(structure[member]);
        obj[member] = value;
    });
    return obj;
}
function hookedEventSuccessHandler(resolve) {
    // wrap() is needed when calling hooks because the rare scenario of:
    //  * hook does a db operation that fails immediately (IDB throws exception)
    //    For calling db operations on correct transaction, wrap makes sure to set PSD correctly.
    //    wrap() will also execute in a virtual tick.
    //  * If not wrapped in a virtual tick, direct exception will launch a new physical tick.
    //  * If this was the last event in the bulk, the promise will resolve after a physical tick
    //    and the transaction will have committed already.
    // If no hook, the virtual tick will be executed in the reject()/resolve of the final promise,
    // because it is always marked with _lib = true when created using Transaction._promise().
    return wrap(function (event) {
        var req = event.target, ctx = req._hookCtx, // Contains the hook error handler. Put here instead of closure to boost performance.
        result = ctx.value || req.result, // Pass the object value on updates. The result from IDB is the primary key.
        hookSuccessHandler = ctx && ctx.onsuccess;
        hookSuccessHandler && hookSuccessHandler(result);
        resolve && resolve(result);
    }, resolve);
}
function eventRejectHandler(reject) {
    return wrap(function (event) {
        preventDefault(event);
        reject(event.target.error);
        return false;
    });
}
function eventSuccessHandler(resolve) {
    return wrap(function (event) {
        resolve(event.target.result);
    });
}
function hookedEventRejectHandler(reject) {
    return wrap(function (event) {
        // See comment on hookedEventSuccessHandler() why wrap() is needed only when supporting hooks.
        var req = event.target, err = req.error, ctx = req._hookCtx, // Contains the hook error handler. Put here instead of closure to boost performance.
        hookErrorHandler = ctx && ctx.onerror;
        hookErrorHandler && hookErrorHandler(err);
        preventDefault(event);
        reject(err);
        return false;
    });
}
function preventDefault(event) {
    if (event.stopPropagation)
        event.stopPropagation();
    if (event.preventDefault)
        event.preventDefault();
}
function awaitIterator(iterator) {
    var callNext = function (result) { return iterator.next(result); }, doThrow = function (error) { return iterator.throw(error); }, onSuccess = step(callNext), onError = step(doThrow);
    function step(getNext) {
        return function (val) {
            var next = getNext(val), value = next.value;
            return next.done ? value :
                (!value || typeof value.then !== 'function' ?
                    isArray(value) ? Promise.all(value).then(onSuccess, onError) : onSuccess(value) :
                    value.then(onSuccess, onError));
        };
    }
    return step(callNext)();
}
//
// IndexSpec struct
//
function IndexSpec(name, keyPath, unique, multi, auto, compound, dotted) {
    /// <param name="name" type="String"></param>
    /// <param name="keyPath" type="String"></param>
    /// <param name="unique" type="Boolean"></param>
    /// <param name="multi" type="Boolean"></param>
    /// <param name="auto" type="Boolean"></param>
    /// <param name="compound" type="Boolean"></param>
    /// <param name="dotted" type="Boolean"></param>
    this.name = name;
    this.keyPath = keyPath;
    this.unique = unique;
    this.multi = multi;
    this.auto = auto;
    this.compound = compound;
    this.dotted = dotted;
    var keyPathSrc = typeof keyPath === 'string' ? keyPath : keyPath && ('[' + [].join.call(keyPath, '+') + ']');
    this.src = (unique ? '&' : '') + (multi ? '*' : '') + (auto ? "++" : "") + keyPathSrc;
}
//
// TableSchema struct
//
function TableSchema(name, primKey, indexes, instanceTemplate) {
    /// <param name="name" type="String"></param>
    /// <param name="primKey" type="IndexSpec"></param>
    /// <param name="indexes" type="Array" elementType="IndexSpec"></param>
    /// <param name="instanceTemplate" type="Object"></param>
    this.name = name;
    this.primKey = primKey || new IndexSpec();
    this.indexes = indexes || [new IndexSpec()];
    this.instanceTemplate = instanceTemplate;
    this.mappedClass = null;
    this.idxByName = arrayToObject(indexes, function (index) { return [index.name, index]; });
}
function safariMultiStoreFix(storeNames) {
    return storeNames.length === 1 ? storeNames[0] : storeNames;
}
function getNativeGetDatabaseNamesFn(indexedDB) {
    var fn = indexedDB && (indexedDB.getDatabaseNames || indexedDB.webkitGetDatabaseNames);
    return fn && fn.bind(indexedDB);
}
// Export Error classes
props(Dexie, fullNameExceptions); // Dexie.XXXError = class XXXError {...};
//
// Static methods and properties
// 
props(Dexie, {
    //
    // Static delete() method.
    //
    delete: function (databaseName) {
        var db = new Dexie(databaseName), promise = db.delete();
        promise.onblocked = function (fn) {
            db.on("blocked", fn);
            return this;
        };
        return promise;
    },
    //
    // Static exists() method.
    //
    exists: function (name) {
        return new Dexie(name).open().then(function (db) {
            db.close();
            return true;
        }).catch(Dexie.NoSuchDatabaseError, function () { return false; });
    },
    //
    // Static method for retrieving a list of all existing databases at current host.
    //
    getDatabaseNames: function (cb) {
        var getDatabaseNames = getNativeGetDatabaseNamesFn(Dexie.dependencies.indexedDB);
        return getDatabaseNames ? new Promise(function (resolve, reject) {
            var req = getDatabaseNames();
            req.onsuccess = function (event) {
                resolve(slice(event.target.result, 0)); // Converst DOMStringList to Array<String>
            };
            req.onerror = eventRejectHandler(reject);
        }).then(cb) : dbNamesDB.dbnames.toCollection().primaryKeys(cb);
    },
    defineClass: function () {
        // Default constructor able to copy given properties into this object.
        function Class(properties) {
            /// <param name="properties" type="Object" optional="true">Properties to initialize object with.
            /// </param>
            if (properties)
                extend(this, properties);
        }
        return Class;
    },
    applyStructure: applyStructure,
    ignoreTransaction: function (scopeFunc) {
        // In case caller is within a transaction but needs to create a separate transaction.
        // Example of usage:
        //
        // Let's say we have a logger function in our app. Other application-logic should be unaware of the
        // logger function and not need to include the 'logentries' table in all transaction it performs.
        // The logging should always be done in a separate transaction and not be dependant on the current
        // running transaction context. Then you could use Dexie.ignoreTransaction() to run code that starts a new transaction.
        //
        //     Dexie.ignoreTransaction(function() {
        //         db.logentries.add(newLogEntry);
        //     });
        //
        // Unless using Dexie.ignoreTransaction(), the above example would try to reuse the current transaction
        // in current Promise-scope.
        //
        // An alternative to Dexie.ignoreTransaction() would be setImmediate() or setTimeout(). The reason we still provide an
        // API for this because
        //  1) The intention of writing the statement could be unclear if using setImmediate() or setTimeout().
        //  2) setTimeout() would wait unnescessary until firing. This is however not the case with setImmediate().
        //  3) setImmediate() is not supported in the ES standard.
        //  4) You might want to keep other PSD state that was set in a parent PSD, such as PSD.letThrough.
        return PSD.trans ?
            usePSD(PSD.transless, scopeFunc) : // Use the closest parent that was non-transactional.
            scopeFunc(); // No need to change scope because there is no ongoing transaction.
    },
    vip: function (fn) {
        // To be used by subscribers to the on('ready') event.
        // This will let caller through to access DB even when it is blocked while the db.ready() subscribers are firing.
        // This would have worked automatically if we were certain that the Provider was using Dexie.Promise for all asyncronic operations. The promise PSD
        // from the provider.connect() call would then be derived all the way to when provider would call localDatabase.applyChanges(). But since
        // the provider more likely is using non-promise async APIs or other thenable implementations, we cannot assume that.
        // Note that this method is only useful for on('ready') subscribers that is returning a Promise from the event. If not using vip()
        // the database could deadlock since it wont open until the returned Promise is resolved, and any non-VIPed operation started by
        // the caller will not resolve until database is opened.
        return newScope(function () {
            PSD.letThrough = true; // Make sure we are let through if still blocking db due to onready is firing.
            return fn();
        });
    },
    async: function (generatorFn) {
        return function () {
            try {
                var rv = awaitIterator(generatorFn.apply(this, arguments));
                if (!rv || typeof rv.then !== 'function')
                    return Promise.resolve(rv);
                return rv;
            }
            catch (e) {
                return rejection(e);
            }
        };
    },
    spawn: function (generatorFn, args, thiz) {
        try {
            var rv = awaitIterator(generatorFn.apply(thiz, args || []));
            if (!rv || typeof rv.then !== 'function')
                return Promise.resolve(rv);
            return rv;
        }
        catch (e) {
            return rejection(e);
        }
    },
    // Dexie.currentTransaction property
    currentTransaction: {
        get: function () { return PSD.trans || null; }
    },
    waitFor: function (promiseOrFunction, optionalTimeout) {
        // If a function is provided, invoke it and pass the returning value to Transaction.waitFor()
        var promise = Promise.resolve(typeof promiseOrFunction === 'function' ? Dexie.ignoreTransaction(promiseOrFunction) : promiseOrFunction)
            .timeout(optionalTimeout || 60000); // Default the timeout to one minute. Caller may specify Infinity if required.       
        // Run given promise on current transaction. If no current transaction, just return a Dexie promise based
        // on given value.
        return PSD.trans ? PSD.trans.waitFor(promise) : promise;
    },
    // Export our Promise implementation since it can be handy as a standalone Promise implementation
    Promise: Promise,
    // Dexie.debug proptery:
    // Dexie.debug = false
    // Dexie.debug = true
    // Dexie.debug = "dexie" - don't hide dexie's stack frames.
    debug: {
        get: function () { return debug; },
        set: function (value) {
            setDebug(value, value === 'dexie' ? function () { return true; } : dexieStackFrameFilter);
        }
    },
    // Export our derive/extend/override methodology
    derive: derive,
    extend: extend,
    props: props,
    override: override,
    // Export our Events() function - can be handy as a toolkit
    Events: Events,
    // Utilities
    getByKeyPath: getByKeyPath,
    setByKeyPath: setByKeyPath,
    delByKeyPath: delByKeyPath,
    shallowClone: shallowClone,
    deepClone: deepClone,
    getObjectDiff: getObjectDiff,
    asap: asap,
    maxKey: maxKey,
    minKey: minKey,
    // Addon registry
    addons: [],
    // Global DB connection list
    connections: connections,
    MultiModifyError: exceptions.Modify,
    errnames: errnames,
    // Export other static classes
    IndexSpec: IndexSpec,
    TableSchema: TableSchema,
    //
    // Dependencies
    //
    // These will automatically work in browsers with indexedDB support, or where an indexedDB polyfill has been included.
    //
    // In node.js, however, these properties must be set "manually" before instansiating a new Dexie().
    // For node.js, you need to require indexeddb-js or similar and then set these deps.
    //
    dependencies: (function () {
        try {
            return {
                // Required:
                indexedDB: _global.indexedDB || _global.mozIndexedDB || _global.webkitIndexedDB || _global.msIndexedDB,
                IDBKeyRange: _global.IDBKeyRange || _global.webkitIDBKeyRange
            };
        }
        catch (e) {
            return {
                indexedDB: null,
                IDBKeyRange: null
            };
        }
    })(),
    // API Version Number: Type Number, make sure to always set a version number that can be comparable correctly. Example: 0.9, 0.91, 0.92, 1.0, 1.01, 1.1, 1.2, 1.21, etc.
    semVer: DEXIE_VERSION,
    version: DEXIE_VERSION.split('.')
        .map(function (n) { return parseInt(n); })
        .reduce(function (p, c, i) { return p + (c / Math.pow(10, i * 2)); }),
    // https://github.com/dfahlander/Dexie.js/issues/186
    // typescript compiler tsc in mode ts-->es5 & commonJS, will expect require() to return
    // x.default. Workaround: Set Dexie.default = Dexie.
    default: Dexie,
    // Make it possible to import {Dexie} (non-default import)
    // Reason 1: May switch to that in future.
    // Reason 2: We declare it both default and named exported in d.ts to make it possible
    // to let addons extend the Dexie interface with Typescript 2.1 (works only when explicitely
    // exporting the symbol, not just default exporting)
    Dexie: Dexie
});
// Map DOMErrors and DOMExceptions to corresponding Dexie errors. May change in Dexie v2.0.
Promise.rejectionMapper = mapError;
// Initialize dbNamesDB (won't ever be opened on chromium browsers')
dbNamesDB = new Dexie('__dbnames');
dbNamesDB.version(1).stores({ dbnames: 'name' });
(function () {
    // Migrate from Dexie 1.x database names stored in localStorage:
    var DBNAMES = 'Dexie.DatabaseNames';
    try {
        if (typeof localStorage !== undefined && _global.document !== undefined) {
            // Have localStorage and is not executing in a worker. Lets migrate from Dexie 1.x.
            JSON.parse(localStorage.getItem(DBNAMES) || "[]")
                .forEach(function (name) { return dbNamesDB.dbnames.put({ name: name }).catch(nop); });
            localStorage.removeItem(DBNAMES);
        }
    }
    catch (_e) { }
})();

return Dexie;

})));

/* Source and licensing information for the above line(s) can be found at https://www.libertytravel.com/modules/custom/dexie/js/dexie.min.js. */;
/* Source and licensing information for the line(s) below can be found at https://www.libertytravel.com/themes/custom/liberty_bootstrap/js/nav.js. */
(function($){"use strict";$(".menu-toggle").click(function(e){e.preventDefault();e.stopPropagation();$("#sidebar-container-wrapper").toggleClass("toggled");$(document).click(function(){if($("#sidebar-container-wrapper").hasClass("toggled"))$("#sidebar-container-wrapper").removeClass("toggled")})});$("#sidebar-container-wrapper").click(function(e){e.stopPropagation()});$(".header_appointment").click(function(e){$(this).addClass('clicked')});$(".appointment_form_toggle").click(function(e){e.preventDefault();window.buildSingularityForm();$("#contactModal").modal()});$(".email_form_toggle").click(function(e){e.preventDefault();window.buildSingularityForm();$("#contactModal").modal()});$(".cust_serv_form_toggle").click(function(e){e.preventDefault();$("#tab_service_toggle").tab('show');$("#feedbackModal").modal();$("#service-feedback-form select[id^='feedback_type']").val("Customer Service").prop('selected',true).change()});$(".region_modal_toggle").click(function(e){e.preventDefault();$("#wrModal").modal()});$(window).on("load",function(e){var getUrlParameter=function getUrlParameter(sParam){var sPageURL=decodeURIComponent(window.location.search.substring(1)),sURLVariables=sPageURL.split('&'),sParameterName,i;for(i=0;i<sURLVariables.length;i++){sParameterName=sURLVariables[i].split('=');if(sParameterName[0]===sParam)return sParameterName[1]===undefined?true:sParameterName[1]}},formType=getUrlParameter('form');if(typeof formType!="undefined"&&formType!==null)if(formType=="email"){$("#tab_email_toggle").tab('show');$("#contactModal").modal()}else if(formType=="appointment"){$("#tab_appointment_toggle").tab('show');$("#contactModal").modal()};var fcRedirect=getUrlParameter('fcsource');if(typeof fcRedirect!="undefined"&&fcRedirect!==null&&fcRedirect=="flightcenter"){$("#fcModal").modal();var myModal=$("#fcModal");clearTimeout(myModal.data('hideInterval'));myModal.data('hideInterval',setTimeout(function(){myModal.modal('hide')},4e3))};var scRedirect=getUrlParameter('store'),hsmCookie=Cookies.get('hsmodal-closed');if(typeof scRedirect!="undefined"&&scRedirect!==null&&scRedirect=="closed")$("#scModal").modal();var conSearch=getUrlParameter('consultants');if(typeof conSearch!="undefined"&&conSearch!==null){$("#wrModal").modal();if(conSearch=="by-destination"){$("#tab_destination_toggle").tab('show')}else if(conSearch=="near-me")$("#tab_near_toggle").tab('show')}});$(".dropdown-toggle").click(function(e){e.preventDefault();$("#sidebar-container-wrapper .dropdown-toggle").parent().toggleClass("open")});$(".dropdown-menu .more-close").click(function(e){e.preventDefault();$("#sidebar-container-wrapper .dropdown-toggle").parent().toggleClass("open")})
function navShrink(){$(window).scroll(function(){if($(document).scrollTop()>50){$('.navbar').addClass('shrink')}else $('.navbar').removeClass('shrink')})};if($(window).width()>767)navShrink();$(window).resize(function(){if($(window).width()<768){$(window).scroll(function(){if($(document).scrollTop()>50)$('.navbar').removeClass('shrink')})}else if($(window).width()>767){navShrink()}else navShrink()})})(jQuery)
/* Source and licensing information for the above line(s) can be found at https://www.libertytravel.com/themes/custom/liberty_bootstrap/js/nav.js. */;
/* Source and licensing information for the line(s) below can be found at https://www.libertytravel.com/themes/custom/liberty_bootstrap/js/header-saved-offers.js. */
var db=new Dexie('offers');db.version(1).stores({offers:'++id,offerid,saved'});(function($){"use strict";setTimeout(function(){$('.header-saved-offers-count').css("display","block")},100);$('.menu--header-icons .header-saved-offers-count').html('<div></div>');$('.menu--mobile-header-menu .header-saved-offers-count').html('Wanderlist <span></span>');return db.offers.orderBy('offerid').uniqueKeys(function(offersArray){if(offersArray.length>=1){$('.menu--header-icons .header-saved-offers-count div').text(offersArray.length);$('.menu--mobile-header-menu .header-saved-offers-count span').text('('+offersArray.length+')')}})})(jQuery)
/* Source and licensing information for the above line(s) can be found at https://www.libertytravel.com/themes/custom/liberty_bootstrap/js/header-saved-offers.js. */;
/* Source and licensing information for the line(s) below can be found at https://www.libertytravel.com/modules/contrib/extlink/extlink.js. */
(function($,Drupal,drupalSettings){'use strict';Drupal.extlink=Drupal.extlink||{};Drupal.extlink.attach=function(context,drupalSettings){if(!drupalSettings.data.hasOwnProperty('extlink'))return;var extIconPlacement=drupalSettings.data.extlink.extIconPlacement||'append',pattern=/^(([^\/:]+?\.)*)([^\.:]{1,})((\.[a-z0-9]{1,253})*)(:[0-9]{1,5})?$/,host=window.location.host.replace(pattern,'$2$3$6'),subdomain=window.location.host.replace(host,''),subdomains;if(drupalSettings.data.extlink.extSubdomains){subdomains='([^/]*\\.)?'}else if(subdomain==='www.'||subdomain===''){subdomains='(www\\.)?'}else subdomains=subdomain.replace('.','\\.');var whitelistedDomains=false;if(drupalSettings.data.extlink.whitelistedDomains){whitelistedDomains=[];for(var i=0;i<drupalSettings.data.extlink.whitelistedDomains.length;i++)whitelistedDomains.push(new RegExp('^https?:\\/\\/'+drupalSettings.data.extlink.whitelistedDomains[i].replace(/(\r\n|\n|\r)/gm,'')+'.*$','i'))};var internal_link=new RegExp('^https?://([^@]*@)?'+subdomains+host,'i'),extInclude=false;if(drupalSettings.data.extlink.extInclude)extInclude=new RegExp(drupalSettings.data.extlink.extInclude.replace(/\\/,'\\'),'i');var extExclude=false;if(drupalSettings.data.extlink.extExclude)extExclude=new RegExp(drupalSettings.data.extlink.extExclude.replace(/\\/,'\\'),'i');var extCssExclude=false;if(drupalSettings.data.extlink.extCssExclude)extCssExclude=drupalSettings.data.extlink.extCssExclude;var extCssExplicit=false;if(drupalSettings.data.extlink.extCssExplicit)extCssExplicit=drupalSettings.data.extlink.extCssExplicit;var external_links=[],mailto_links=[];$('a:not([data-extlink]), area:not([data-extlink])',context).each(function(el){try{var url='';if(typeof this.href=='string'){url=this.href.toLowerCase()}else if(typeof this.href=='object')url=this.href.baseVal;if(url.indexOf('http')===0&&((!internal_link.test(url)&&!(extExclude&&extExclude.test(url)))||(extInclude&&extInclude.test(url)))&&!(extCssExclude&&$(this).is(extCssExclude))&&!(extCssExclude&&$(this).parents(extCssExclude).length>0)&&!(extCssExplicit&&$(this).parents(extCssExplicit).length<1)){var match=false;if(whitelistedDomains)for(var i=0;i<whitelistedDomains.length;i++)if(whitelistedDomains[i].test(url)){match=true;break};if(!match)external_links.push(this)}else if(this.tagName!=='AREA'&&url.indexOf('mailto:')===0&&!(extCssExclude&&$(this).parents(extCssExclude).length>0)&&!(extCssExplicit&&$(this).parents(extCssExplicit).length<1))mailto_links.push(this)}catch(error){return false}});if(drupalSettings.data.extlink.extClass!=='0'&&drupalSettings.data.extlink.extClass!=='')Drupal.extlink.applyClassAndSpan(external_links,drupalSettings.data.extlink.extClass,extIconPlacement);if(drupalSettings.data.extlink.mailtoClass!=='0'&&drupalSettings.data.extlink.mailtoClass!=='')Drupal.extlink.applyClassAndSpan(mailto_links,drupalSettings.data.extlink.mailtoClass,extIconPlacement);if(drupalSettings.data.extlink.extTarget){$(external_links).filter(function(){return!(drupalSettings.data.extlink.extTargetNoOverride&&$(this).is('a[target]'))}).attr({target:'_blank'});$(external_links).attr('rel',function(i,val){if(val===null||typeof val==='undefined')return'noopener';if(val.indexOf('noopener')>-1||val.indexOf('noreferrer')>-1){if(val.indexOf('noopener')===-1){return val+' noopener'}else return val}else return val+' noopener noreferrer'})};if(drupalSettings.data.extlink.extNofollow)$(external_links).attr('rel',function(i,val){if(val===null||typeof val==='undefined')return'nofollow';var target='nofollow';if(drupalSettings.data.extlink.extFollowNoOverride)target='follow';if(val.indexOf(target)===-1)return val+' nofollow';return val});Drupal.extlink=Drupal.extlink||{};Drupal.extlink.popupClickHandler=Drupal.extlink.popupClickHandler||function(){if(drupalSettings.data.extlink.extAlert)return confirm(drupalSettings.data.extlink.extAlertText)};$(external_links).off("click.extlink");$(external_links).on("click.extlink",function(e){return Drupal.extlink.popupClickHandler(e,this)})};Drupal.extlink.applyClassAndSpan=function(links,class_name,icon_placement){var $links_to_process;if(drupalSettings.data.extlink.extImgClass){$links_to_process=$(links)}else{var links_with_images=$(links).find('img, svg').parents('a');$links_to_process=$(links).not(links_with_images)};$links_to_process.attr('data-extlink','');var i,length=$links_to_process.length;for(i=0;i<length;i++){var $link=$($links_to_process[i]);if(drupalSettings.data.extlink.extUseFontAwesome){if(class_name===drupalSettings.data.extlink.mailtoClass){$link[icon_placement]('<span class="fa-'+class_name+' extlink"><span class="'+drupalSettings.data.extlink.extFaMailtoClasses+'" title="'+drupalSettings.data.extlink.mailtoLabel+'"></span><span class="visually-hidden">'+drupalSettings.data.extlink.mailtoLabel+'</span></span>')}else $link[icon_placement]('<span class="fa-'+class_name+' extlink"><span class="'+drupalSettings.data.extlink.extFaLinkClasses+'" title="'+drupalSettings.data.extlink.extLabel+'"></span><span class="visually-hidden">'+drupalSettings.data.extlink.extLabel+'</span></span>')}else if(class_name===drupalSettings.data.extlink.mailtoClass){$link[icon_placement]('<svg class="'+class_name+'" role="img" aria-label="'+drupalSettings.data.extlink.mailtoLabel+'" xmlns="http://www.w3.org/2000/svg" viewBox="0 10 70 20"><metadata><sfw xmlns="http://ns.adobe.com/SaveForWeb/1.0/"><sliceSourceBounds y="-8160" x="-8165" width="16389" height="16384" bottomLeftOrigin="true"/><optimizationSettings><targetSettings targetSettingsID="0" fileFormat="PNG24Format"><PNG24Format transparency="true" filtered="false" interlaced="false" noMatteColor="false" matteColor="#FFFFFF"/></targetSettings></optimizationSettings></sfw></metadata><title>'+drupalSettings.data.extlink.mailtoLabel+'</title><path d="M56 14H8c-1.1 0-2 0.9-2 2v32c0 1.1 0.9 2 2 2h48c1.1 0 2-0.9 2-2V16C58 14.9 57.1 14 56 14zM50.5 18L32 33.4 13.5 18H50.5zM10 46V20.3l20.7 17.3C31.1 37.8 31.5 38 32 38s0.9-0.2 1.3-0.5L54 20.3V46H10z"/></svg>')}else $link[icon_placement]('<svg class="'+class_name+'" role="img" aria-label="'+drupalSettings.data.extlink.extLabel+'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 40"><metadata><sfw xmlns="http://ns.adobe.com/SaveForWeb/1.0/"><sliceSourceBounds y="-8160" x="-8165" width="16389" height="16384" bottomLeftOrigin="true"/><optimizationSettings><targetSettings targetSettingsID="0" fileFormat="PNG24Format"><PNG24Format transparency="true" filtered="false" interlaced="false" noMatteColor="false" matteColor="#FFFFFF"/></targetSettings></optimizationSettings></sfw></metadata><title>'+drupalSettings.data.extlink.extLabel+'</title><path d="M48 26c-1.1 0-2 0.9-2 2v26H10V18h26c1.1 0 2-0.9 2-2s-0.9-2-2-2H8c-1.1 0-2 0.9-2 2v40c0 1.1 0.9 2 2 2h40c1.1 0 2-0.9 2-2V28C50 26.9 49.1 26 48 26z"/><path d="M56 6H44c-1.1 0-2 0.9-2 2s0.9 2 2 2h7.2L30.6 30.6c-0.8 0.8-0.8 2 0 2.8C31 33.8 31.5 34 32 34s1-0.2 1.4-0.6L54 12.8V20c0 1.1 0.9 2 2 2s2-0.9 2-2V8C58 6.9 57.1 6 56 6z"/></svg>')}};Drupal.behaviors.extlink=Drupal.behaviors.extlink||{};Drupal.behaviors.extlink.attach=function(context,drupalSettings){if(typeof extlinkAttach==='function'){extlinkAttach(context)}else Drupal.extlink.attach(context,drupalSettings)}})(jQuery,Drupal,drupalSettings)
/* Source and licensing information for the above line(s) can be found at https://www.libertytravel.com/modules/contrib/extlink/extlink.js. */;
/* Source and licensing information for the line(s) below can be found at https://www.libertytravel.com/themes/contrib/bootstrap/js/popover.js. */
var Drupal=Drupal||{};(function($,Drupal,Bootstrap){"use strict";var $document=$(document);Bootstrap.extendPlugin('popover',function(settings){return{DEFAULTS:{animation:!!settings.popover_animation,autoClose:!!settings.popover_auto_close,enabled:settings.popover_enabled,html:!!settings.popover_html,placement:settings.popover_placement,selector:settings.popover_selector,trigger:settings.popover_trigger,title:settings.popover_title,content:settings.popover_content,delay:parseInt(settings.popover_delay,10),container:settings.popover_container}}});Drupal.behaviors.bootstrapPopovers={$activePopover:null,attach:function(context){if(!$.fn.popover||!$.fn.popover.Constructor.DEFAULTS.enabled)return;var _this=this;$document.on('show.bs.popover','[data-toggle=popover]',function(){var $trigger=$(this),popover=$trigger.data('bs.popover');if(popover.options.originalTrigger==='click'){if(_this.$activePopover&&_this.getOption('autoClose')&&!_this.$activePopover.is($trigger))_this.$activePopover.popover('hide');_this.$activePopover=$trigger}}).on('focus.bs.popover',':visible',function(e){var $target=$(e.target);if(_this.$activePopover&&_this.getOption('autoClose')&&!_this.$activePopover.is($target)&&!$target.closest('.popover.in')[0]){_this.$activePopover.popover('hide');_this.$activePopover=null}}).on('click.bs.popover',function(e){var $target=$(e.target);if(_this.$activePopover&&_this.getOption('autoClose')&&!$target.is('[data-toggle=popover]')&&!$target.closest('.popover.in')[0]){_this.$activePopover.popover('hide');_this.$activePopover=null}}).on('keyup.bs.popover',function(e){if(_this.$activePopover&&_this.getOption('autoClose')&&e.which===27){_this.$activePopover.popover('hide');_this.$activePopover=null}});var elements=$(context).find('[data-toggle=popover]').toArray();for(var i=0;i<elements.length;i++){var $element=$(elements[i]),options=$.extend({},$.fn.popover.Constructor.DEFAULTS,$element.data());options.originalTrigger=options.trigger;if(options.trigger==='click')options.trigger='manual';var target=options.target||$element.is('a[href^="#"]')&&$element.attr('href'),$target=$document.find(target).clone();if(!options.content&&$target[0]){$target.removeClass('visually-hidden hidden').removeAttr('aria-hidden');options.content=$target.wrap('<div/>').parent()[options.html?'html':'text']()||''};$element.popover(options);if(options.originalTrigger==='click')$element.off('click.drupal.bootstrap.popover').on('click.drupal.bootstrap.popover',function(e){$(this).popover('toggle');e.preventDefault();e.stopPropagation()})}},detach:function(context){if(!$.fn.popover||!$.fn.popover.Constructor.DEFAULTS.enabled)return;$(context).find('[data-toggle="popover"]').off('click.drupal.bootstrap.popover').popover('destroy')},getOption:function(name,defaultValue,element){var $element=element?$(element):this.$activePopover,options=$.extend(true,{},$.fn.popover.Constructor.DEFAULTS,($element&&$element.data('bs.popover')||{}).options);if(options[name]!==void(0))return options[name];return defaultValue!==void(0)?defaultValue:void(0)}}})(window.jQuery,window.Drupal,window.Drupal.bootstrap)
/* Source and licensing information for the above line(s) can be found at https://www.libertytravel.com/themes/contrib/bootstrap/js/popover.js. */;
/* Source and licensing information for the line(s) below can be found at https://www.libertytravel.com/themes/contrib/bootstrap/js/tooltip.js. */
var Drupal=Drupal||{};(function($,Drupal,Bootstrap){"use strict";Bootstrap.extendPlugin('tooltip',function(settings){return{DEFAULTS:{animation:!!settings.tooltip_animation,enabled:settings.tooltip_enabled,html:!!settings.tooltip_html,placement:settings.tooltip_placement,selector:settings.tooltip_selector,trigger:settings.tooltip_trigger,delay:parseInt(settings.tooltip_delay,10),container:settings.tooltip_container}}});Drupal.behaviors.bootstrapTooltips={attach:function(context){if(!$.fn.tooltip||!$.fn.tooltip.Constructor.DEFAULTS.enabled)return;var elements=$(context).find('[data-toggle="tooltip"]').toArray();for(var i=0;i<elements.length;i++){var $element=$(elements[i]),options=$.extend({},$.fn.tooltip.Constructor.DEFAULTS,$element.data());$element.tooltip(options)}},detach:function(context){if(!$.fn.tooltip||!$.fn.tooltip.Constructor.DEFAULTS.enabled)return;$(context).find('[data-toggle="tooltip"]').tooltip('destroy')}}})(window.jQuery,window.Drupal,window.Drupal.bootstrap)
/* Source and licensing information for the above line(s) can be found at https://www.libertytravel.com/themes/contrib/bootstrap/js/tooltip.js. */;
/* Source and licensing information for the line(s) below can be found at https://www.libertytravel.com/modules/custom/consultant_search/js/consultant-state-select.js. */
/**
 * @file
 * Generate select list of consultant states.
 */

(function ($) {
  "use strict";

  $(document).ready(function () {
    $.getJSON("/json_locations_for_consultant_results", function (result) {
      if (result.length) {
        result.sort((a, b) => (a.name > b.name) ? 1 : -1);
        var outputHtml = '<select id="cons-state-select-options">';
        outputHtml += '<option value="all">All States</option>';
        $.each(result, function (i, field) {
          outputHtml += '<option value="' + field.abbrev + '">' + field.name + '</option>';
        });
        outputHtml += "</select>";
        $("#consultant-states-form").append(outputHtml);
        $("#consultant-states-form-submit").append('<a href="#" id="submit-state-search" class="btn btn-primary">Search</a>');

        $( "#submit-state-search" ).click(function (event) {
          event.preventDefault();
          var selectedState = $("#cons-state-select-options").val();
          window.location.href = '/s/consultants-near-me/' + selectedState.toLowerCase();
        });
      }
    });
  });

})(jQuery);

/* Source and licensing information for the above line(s) can be found at https://www.libertytravel.com/modules/custom/consultant_search/js/consultant-state-select.js. */;
