(function(a){if(typeof define==="function"&&define.amd&&define.amd.jQuery){define(["jquery"],a)}else{a(jQuery)}}(function(e){var o="left",n="right",d="up",v="down",c="in",w="out",l="none",r="auto",k="swipe",s="pinch",x="tap",i="doubletap",b="longtap",A="horizontal",t="vertical",h="all",q=10,f="start",j="move",g="end",p="cancel",a="ontouchstart" in window,y="TouchSwipe";var m={fingers:1,threshold:75,cancelThreshold:null,pinchThreshold:20,maxTimeThreshold:null,fingerReleaseThreshold:250,longTapThreshold:500,doubleTapThreshold:200,swipe:null,swipeLeft:null,swipeRight:null,swipeUp:null,swipeDown:null,swipeStatus:null,pinchIn:null,pinchOut:null,pinchStatus:null,click:null,tap:null,doubleTap:null,longTap:null,triggerOnTouchEnd:true,triggerOnTouchLeave:false,allowPageScroll:"auto",fallbackToMouseEvents:true,excludedElements:"label, button, input, select, textarea, a, .noSwipe"};e.fn.swipe=function(D){var C=e(this),B=C.data(y);if(B&&typeof D==="string"){if(B[D]){return B[D].apply(this,Array.prototype.slice.call(arguments,1))}else{e.error("Method "+D+" does not exist on jQuery.swipe")}}else{if(!B&&(typeof D==="object"||!D)){return u.apply(this,arguments)}}return C};e.fn.swipe.defaults=m;e.fn.swipe.phases={PHASE_START:f,PHASE_MOVE:j,PHASE_END:g,PHASE_CANCEL:p};e.fn.swipe.directions={LEFT:o,RIGHT:n,UP:d,DOWN:v,IN:c,OUT:w};e.fn.swipe.pageScroll={NONE:l,HORIZONTAL:A,VERTICAL:t,AUTO:r};e.fn.swipe.fingers={ONE:1,TWO:2,THREE:3,ALL:h};function u(B){if(B&&(B.allowPageScroll===undefined&&(B.swipe!==undefined||B.swipeStatus!==undefined))){B.allowPageScroll=l}if(B.click!==undefined&&B.tap===undefined){B.tap=B.click}if(!B){B={}}B=e.extend({},e.fn.swipe.defaults,B);return this.each(function(){var D=e(this);var C=D.data(y);if(!C){C=new z(this,B);D.data(y,C)}})}function z(a0,aq){var av=(a||!aq.fallbackToMouseEvents),G=av?"touchstart":"mousedown",au=av?"touchmove":"mousemove",R=av?"touchend":"mouseup",P=av?null:"mouseleave",az="touchcancel";var ac=0,aL=null,Y=0,aX=0,aV=0,D=1,am=0,aF=0,J=null;var aN=e(a0);var W="start";var T=0;var aM=null;var Q=0,aY=0,a1=0,aa=0,K=0;var aS=null;try{aN.bind(G,aJ);aN.bind(az,a5)}catch(ag){e.error("events not supported "+G+","+az+" on jQuery.swipe")}this.enable=function(){aN.bind(G,aJ);aN.bind(az,a5);return aN};this.disable=function(){aG();return aN};this.destroy=function(){aG();aN.data(y,null);return aN};this.option=function(a8,a7){if(aq[a8]!==undefined){if(a7===undefined){return aq[a8]}else{aq[a8]=a7}}else{e.error("Option "+a8+" does not exist on jQuery.swipe.options")}return null};function aJ(a9){if(ax()){return}if(e(a9.target).closest(aq.excludedElements,aN).length>0){return}var ba=a9.originalEvent?a9.originalEvent:a9;var a8,a7=a?ba.touches[0]:ba;W=f;if(a){T=ba.touches.length}else{a9.preventDefault()}ac=0;aL=null;aF=null;Y=0;aX=0;aV=0;D=1;am=0;aM=af();J=X();O();if(!a||(T===aq.fingers||aq.fingers===h)||aT()){ae(0,a7);Q=ao();if(T==2){ae(1,ba.touches[1]);aX=aV=ap(aM[0].start,aM[1].start)}if(aq.swipeStatus||aq.pinchStatus){a8=L(ba,W)}}else{a8=false}if(a8===false){W=p;L(ba,W);return a8}else{ak(true)}return null}function aZ(ba){var bd=ba.originalEvent?ba.originalEvent:ba;if(W===g||W===p||ai()){return}var a9,a8=a?bd.touches[0]:bd;var bb=aD(a8);aY=ao();if(a){T=bd.touches.length}W=j;if(T==2){if(aX==0){ae(1,bd.touches[1]);aX=aV=ap(aM[0].start,aM[1].start)}else{aD(bd.touches[1]);aV=ap(aM[0].end,aM[1].end);aF=an(aM[0].end,aM[1].end)}D=a3(aX,aV);am=Math.abs(aX-aV)}if((T===aq.fingers||aq.fingers===h)||!a||aT()){aL=aH(bb.start,bb.end);ah(ba,aL);ac=aO(bb.start,bb.end);Y=aI();aE(aL,ac);if(aq.swipeStatus||aq.pinchStatus){a9=L(bd,W)}if(!aq.triggerOnTouchEnd||aq.triggerOnTouchLeave){var a7=true;if(aq.triggerOnTouchLeave){var bc=aU(this);a7=B(bb.end,bc)}if(!aq.triggerOnTouchEnd&&a7){W=ay(j)}else{if(aq.triggerOnTouchLeave&&!a7){W=ay(g)}}if(W==p||W==g){L(bd,W)}}}else{W=p;L(bd,W)}if(a9===false){W=p;L(bd,W)}}function I(a7){var a8=a7.originalEvent;if(a){if(a8.touches.length>0){C();return true}}if(ai()){T=aa}a7.preventDefault();aY=ao();Y=aI();if(a6()){W=p;L(a8,W)}else{if(aq.triggerOnTouchEnd||(aq.triggerOnTouchEnd==false&&W===j)){W=g;L(a8,W)}else{if(!aq.triggerOnTouchEnd&&a2()){W=g;aB(a8,W,x)}else{if(W===j){W=p;L(a8,W)}}}}ak(false);return null}function a5(){T=0;aY=0;Q=0;aX=0;aV=0;D=1;O();ak(false)}function H(a7){var a8=a7.originalEvent;if(aq.triggerOnTouchLeave){W=ay(g);L(a8,W)}}function aG(){aN.unbind(G,aJ);aN.unbind(az,a5);aN.unbind(au,aZ);aN.unbind(R,I);if(P){aN.unbind(P,H)}ak(false)}function ay(bb){var ba=bb;var a9=aw();var a8=aj();var a7=a6();if(!a9||a7){ba=p}else{if(a8&&bb==j&&(!aq.triggerOnTouchEnd||aq.triggerOnTouchLeave)){ba=g}else{if(!a8&&bb==g&&aq.triggerOnTouchLeave){ba=p}}}return ba}function L(a9,a7){var a8=undefined;if(F()||S()){a8=aB(a9,a7,k)}else{if((M()||aT())&&a8!==false){a8=aB(a9,a7,s)}}if(aC()&&a8!==false){a8=aB(a9,a7,i)}else{if(al()&&a8!==false){a8=aB(a9,a7,b)}else{if(ad()&&a8!==false){a8=aB(a9,a7,x)}}}if(a7===p){a5(a9)}if(a7===g){if(a){if(a9.touches.length==0){a5(a9)}}else{a5(a9)}}return a8}function aB(ba,a7,a9){var a8=undefined;if(a9==k){aN.trigger("swipeStatus",[a7,aL||null,ac||0,Y||0,T]);if(aq.swipeStatus){a8=aq.swipeStatus.call(aN,ba,a7,aL||null,ac||0,Y||0,T);if(a8===false){return false}}if(a7==g&&aR()){aN.trigger("swipe",[aL,ac,Y,T]);if(aq.swipe){a8=aq.swipe.call(aN,ba,aL,ac,Y,T);if(a8===false){return false}}switch(aL){case o:aN.trigger("swipeLeft",[aL,ac,Y,T]);if(aq.swipeLeft){a8=aq.swipeLeft.call(aN,ba,aL,ac,Y,T)}break;case n:aN.trigger("swipeRight",[aL,ac,Y,T]);if(aq.swipeRight){a8=aq.swipeRight.call(aN,ba,aL,ac,Y,T)}break;case d:aN.trigger("swipeUp",[aL,ac,Y,T]);if(aq.swipeUp){a8=aq.swipeUp.call(aN,ba,aL,ac,Y,T)}break;case v:aN.trigger("swipeDown",[aL,ac,Y,T]);if(aq.swipeDown){a8=aq.swipeDown.call(aN,ba,aL,ac,Y,T)}break}}}if(a9==s){aN.trigger("pinchStatus",[a7,aF||null,am||0,Y||0,T,D]);if(aq.pinchStatus){a8=aq.pinchStatus.call(aN,ba,a7,aF||null,am||0,Y||0,T,D);if(a8===false){return false}}if(a7==g&&a4()){switch(aF){case c:aN.trigger("pinchIn",[aF||null,am||0,Y||0,T,D]);if(aq.pinchIn){a8=aq.pinchIn.call(aN,ba,aF||null,am||0,Y||0,T,D)}break;case w:aN.trigger("pinchOut",[aF||null,am||0,Y||0,T,D]);if(aq.pinchOut){a8=aq.pinchOut.call(aN,ba,aF||null,am||0,Y||0,T,D)}break}}}if(a9==x){if(a7===p||a7===g){clearTimeout(aS);if(V()&&!E()){K=ao();aS=setTimeout(e.proxy(function(){K=null;aN.trigger("tap",[ba.target]);if(aq.tap){a8=aq.tap.call(aN,ba,ba.target)}},this),aq.doubleTapThreshold)}else{K=null;aN.trigger("tap",[ba.target]);if(aq.tap){a8=aq.tap.call(aN,ba,ba.target)}}}}else{if(a9==i){if(a7===p||a7===g){clearTimeout(aS);K=null;aN.trigger("doubletap",[ba.target]);if(aq.doubleTap){a8=aq.doubleTap.call(aN,ba,ba.target)}}}else{if(a9==b){if(a7===p||a7===g){clearTimeout(aS);K=null;aN.trigger("longtap",[ba.target]);if(aq.longTap){a8=aq.longTap.call(aN,ba,ba.target)}}}}}return a8}function aj(){var a7=true;if(aq.threshold!==null){a7=ac>=aq.threshold}return a7}function a6(){var a7=false;if(aq.cancelThreshold!==null&&aL!==null){a7=(aP(aL)-ac)>=aq.cancelThreshold}return a7}function ab(){if(aq.pinchThreshold!==null){return am>=aq.pinchThreshold}return true}function aw(){var a7;if(aq.maxTimeThreshold){if(Y>=aq.maxTimeThreshold){a7=false}else{a7=true}}else{a7=true}return a7}function ah(a7,a8){if(aq.allowPageScroll===l||aT()){a7.preventDefault()}else{var a9=aq.allowPageScroll===r;switch(a8){case o:if((aq.swipeLeft&&a9)||(!a9&&aq.allowPageScroll!=A)){a7.preventDefault()}break;case n:if((aq.swipeRight&&a9)||(!a9&&aq.allowPageScroll!=A)){a7.preventDefault()}break;case d:if((aq.swipeUp&&a9)||(!a9&&aq.allowPageScroll!=t)){a7.preventDefault()}break;case v:if((aq.swipeDown&&a9)||(!a9&&aq.allowPageScroll!=t)){a7.preventDefault()}break}}}function a4(){var a8=aK();var a7=U();var a9=ab();return a8&&a7&&a9}function aT(){return !!(aq.pinchStatus||aq.pinchIn||aq.pinchOut)}function M(){return !!(a4()&&aT())}function aR(){var ba=aw();var bc=aj();var a9=aK();var a7=U();var a8=a6();var bb=!a8&&a7&&a9&&bc&&ba;return bb}function S(){return !!(aq.swipe||aq.swipeStatus||aq.swipeLeft||aq.swipeRight||aq.swipeUp||aq.swipeDown)}function F(){return !!(aR()&&S())}function aK(){return((T===aq.fingers||aq.fingers===h)||!a)}function U(){return aM[0].end.x!==0}function a2(){return !!(aq.tap)}function V(){return !!(aq.doubleTap)}function aQ(){return !!(aq.longTap)}function N(){if(K==null){return false}var a7=ao();return(V()&&((a7-K)<=aq.doubleTapThreshold))}function E(){return N()}function at(){return((T===1||!a)&&(isNaN(ac)||ac===0))}function aW(){return((Y>aq.longTapThreshold)&&(ac<q))}function ad(){return !!(at()&&a2())}function aC(){return !!(N()&&V())}function al(){return !!(aW()&&aQ())}function C(){a1=ao();aa=event.touches.length+1}function O(){a1=0;aa=0}function ai(){var a7=false;if(a1){var a8=ao()-a1;if(a8<=aq.fingerReleaseThreshold){a7=true}}return a7}function ax(){return !!(aN.data(y+"_intouch")===true)}function ak(a7){if(a7===true){aN.bind(au,aZ);aN.bind(R,I);if(P){aN.bind(P,H)}}else{aN.unbind(au,aZ,false);aN.unbind(R,I,false);if(P){aN.unbind(P,H,false)}}aN.data(y+"_intouch",a7===true)}function ae(a8,a7){var a9=a7.identifier!==undefined?a7.identifier:0;aM[a8].identifier=a9;aM[a8].start.x=aM[a8].end.x=a7.pageX||a7.clientX;aM[a8].start.y=aM[a8].end.y=a7.pageY||a7.clientY;return aM[a8]}function aD(a7){var a9=a7.identifier!==undefined?a7.identifier:0;var a8=Z(a9);a8.end.x=a7.pageX||a7.clientX;a8.end.y=a7.pageY||a7.clientY;return a8}function Z(a8){for(var a7=0;a7<aM.length;a7++){if(aM[a7].identifier==a8){return aM[a7]}}}function af(){var a7=[];for(var a8=0;a8<=5;a8++){a7.push({start:{x:0,y:0},end:{x:0,y:0},identifier:0})}return a7}function aE(a7,a8){a8=Math.max(a8,aP(a7));J[a7].distance=a8}function aP(a7){if(J[a7]){return J[a7].distance}return undefined}function X(){var a7={};a7[o]=ar(o);a7[n]=ar(n);a7[d]=ar(d);a7[v]=ar(v);return a7}function ar(a7){return{direction:a7,distance:0}}function aI(){return aY-Q}function ap(ba,a9){var a8=Math.abs(ba.x-a9.x);var a7=Math.abs(ba.y-a9.y);return Math.round(Math.sqrt(a8*a8+a7*a7))}function a3(a7,a8){var a9=(a8/a7)*1;return a9.toFixed(2)}function an(){if(D<1){return w}else{return c}}function aO(a8,a7){return Math.round(Math.sqrt(Math.pow(a7.x-a8.x,2)+Math.pow(a7.y-a8.y,2)))}function aA(ba,a8){var a7=ba.x-a8.x;var bc=a8.y-ba.y;var a9=Math.atan2(bc,a7);var bb=Math.round(a9*180/Math.PI);if(bb<0){bb=360-Math.abs(bb)}return bb}function aH(a8,a7){var a9=aA(a8,a7);if((a9<=45)&&(a9>=0)){return o}else{if((a9<=360)&&(a9>=315)){return o}else{if((a9>=135)&&(a9<=225)){return n}else{if((a9>45)&&(a9<135)){return v}else{return d}}}}}function ao(){var a7=new Date();return a7.getTime()}function aU(a7){a7=e(a7);var a9=a7.offset();var a8={left:a9.left,right:a9.left+a7.outerWidth(),top:a9.top,bottom:a9.top+a7.outerHeight()};return a8}function B(a7,a8){return(a7.x>a8.left&&a7.x<a8.right&&a7.y>a8.top&&a7.y<a8.bottom)}}}));;

jQuery(function($) {
	"use strict";

	var $w = $(window),
		$d = $(document),
		windowHeight = $w.height(),
		elements = [];

	$w.resize(function () {
		windowHeight = $w.height();
	});

	$.fn.parallax = function () {

		$(this).each(function () {

			var $el = $(this),
				el = {
					$el: $el,
					t: $el.offset().top,
					x: $el.data('parallaxX') || '50%',
					y: $el.data('parallaxY') || 0,
					s: $el.data('parallaxSpeed') || 0.5,
					h: getHeight($el, ($el.data('parallaxOuterHeight') || 1))
				};

			elements.push(el);

		});

	};

	function checkParallaxState(){
		if(window.piCurrentBound === 'lg'){
			enableParallax();
		} else {
			disableParallax();
		}
	}

	function update() {
		var scrollTop = $w.scrollTop();

		for (var i = 0; i < elements.length; i++) {
			var o = elements[i];
			o.t = o.$el.offset().top;
			o.h = getHeight(o.$el, 1);

			if (o.t + o.h > scrollTop && o.t < scrollTop + windowHeight) {
				o.$el.css('backgroundPosition', o.x + " " + Math.round((o.t - scrollTop + o.y) * o.s) + "px");
			}
		}
	}

	function getHeight($el, outerHeight) {
		if (outerHeight) {
			return $el.outerHeight(true);
		} else {
			return $el.height();
		}
	}

	function enableParallax(){
		$w.on('scroll.piParallax resize.piParallax', update);
		update();
	}

	function disableParallax(){
		$w.off('scroll.piParallax resize.piParallax');
		for (var i = 0; i < elements.length; i++) {
			var o = elements[i];
			o.$el.css('backgroundPosition', '');
		}
	}

	$d.on('piBoundChanged', function(){
		checkParallaxState();
	});

	checkParallaxState();


});;

jQuery(function($){
	"use strict";

	//region Parallax
	if($.fn.parallax){
		$('.pi-section-parallax').parallax("50%", 0.5);
	}
	//endregion

});;

function PiSlider(el, options) {
	"use strict";

	var o = {},
		$ = jQuery;

	o.$el = el;

	o.s = {
		speed: 2000,
		slideDelay: 35,
		autoplayDelay: 0,
		preload: 0,
		preloadDelay: 1000,
		action: 'fade',
		circular: 0,
		enableArrows: 0,
		enablePagination: 0,
		enableSwipes: 0,
		enableKeys: 0,
		c: {
			pane: 'pi-slider',
			paneWrapper: 'pi-slider-wrapper',
			paneFast: 'pi-slider-fast',
			slide: 'pi-slide',
			slideTransparent: 'pi-slide-transparent',
			pagination: 'pi-slider-pagination',
			page: 'pi-slider-page',
			arrow: 'pi-slider-arrow',
			arrowLeft: 'pi-slider-arrow-left',
			arrowRight: 'pi-slider-arrow-right',
			slideActive: 'pi-slide-active',
			pageActive: 'pi-slider-page-active',
			arrowActive: 'pi-slider-arrow-active',
			arrowDisabled: 'pi-slider-arrow-disabled'
		},
		debug: 0
	};

	if (options) {
		$.extend(o.s, options);
	}

	o.init = function () {
		o.$doc = $(document);
		o.cssTransisions = 1;
		o.$paneWrapper = o.$el.parents('.' + o.s.c.paneWrapper).eq(0);
		o.$pane = o.$el.hasClass(o.s.c.pane) ? o.$el : o.$el.find('.' + o.s.c.pane);
		o.$slides = o.$el.find('.' + o.s.c.slide);
		o.autoPlayInterval = 0;
		o.slidesQ = o.$slides.length;

		if (o.slidesQ <= 0) {
			return;
		}

		o.slideWidth = o.$slides.eq(0).width();
		o.slideOuterWidth = o.$slides.eq(0).outerWidth();
		o.slideMargin = (o.slideOuterWidth - o.slideWidth) / 2;
		o.slidesWidth = o.slideOuterWidth * o.slidesQ;
		o.sceneWidth = o.$paneWrapper.width();
		o.margin = (o.sceneWidth - o.slideWidth) / 2;
		o.way = o.slideWidth - o.margin;

		o.slidesTransparent = [];

		o.current = -1;

		o.beforeStart();
		o.addSwipeActions();
	};

	o.beforeStart = function () {
		if (o.s.preload) {
			var preloader = new PiImagesLoader(o.$paneWrapper, o.start, o.s.preloadDelay);
		} else {
			o.start();
		}
	};

	o.start = function () {

		if (o.s.enablePagination && o.slidesQ > 1) {

			o.$paneWrapper.append('<div class="' + o.s.c.pagination + '"></div>');
			o.$pagination = o.$paneWrapper.find('.' + o.s.c.pagination);

			var n = 0;
			o.$slides.each(function () {

				var active = '';

				if (n === 0) {
					active = o.s.c.pageActive;
				}

				o.$pagination.append('<span class="' + o.s.c.page + ' ' + active + '"><span></span></span>');
				n += 1;
			});

			o.$pages = o.$pagination.find('.' + o.s.c.page);

			o.$pages.click(function () {
				var n = $(this).index();

				if (o.current !== n) {
					o.applyAnimation(n);
				}

			});
			if(o.s.action === 'slide'){
				o.prepareSlides();
			}

		}

		if (o.s.enableArrows && o.slidesQ > 1) {

			o.$paneWrapper.append('<div class="' + o.s.c.arrow + ' ' + o.s.c.arrowLeft +' "><span></span></div>');
			o.$paneWrapper.append('<div class="' + o.s.c.arrow + ' ' + o.s.c.arrowRight +' "><span></span></div>');
			o.$leftArrow = o.$paneWrapper.find('.' + o.s.c.arrowLeft);
			o.$rightArrow = o.$paneWrapper.find('.' + o.s.c.arrowRight);

			if(!o.s.circular) {
				o.$leftArrow.addClass(o.s.c.arrowDisabled);
			}

			o.$leftArrow.click(function () {
				o.toPrev();
			});
			o.$rightArrow.click(function () {
				o.toNext();
			});
		}

		if (o.s.enableKeys && o.slidesQ > 1) {

			o.$doc.keydown(function (e) {
				if ((e.keyCode || e.which) === '37') {
					o.toPrev();
				} else if ((e.keyCode || e.which) === '39') {
					o.toNext();
				}
			});

		}

		o.applyAnimation(0);
		if(o.s.autoplayDelay){
			o.startAutoplay();
		}

		o.resizeGallery();

	};

	o.applyAnimation = function (n, f) {

		if (!f) {
			f = 0;
		}

		if (o.s.action === 'slide') {
			o.moveSlide(n, f);
		} else if (o.s.action === 'fade') {
			o.fadeSlide(n);
		}

		o.current = n;
		o.checkArrowsState(n);
		o.checkPagesState(n);

	};

	o.checkPagesState = function (n) {
		if (o.s.enablePagination && o.slidesQ > 1) {
			o.$pages.removeClass(o.s.c.pageActive);
			o.$pages.eq(n).addClass(o.s.c.pageActive);
		}
	};

	o.checkArrowsState = function (n) {
		if (o.s.enableArrows && o.slidesQ > 1 && !o.s.circular) {
			if (n === 0) {
				o.$leftArrow.addClass(o.s.c.arrowDisabled);
			} else {
				o.$leftArrow.removeClass(o.s.c.arrowDisabled);
			}
			if (n === o.slidesQ - 1) {
				o.$rightArrow.addClass(o.s.c.arrowDisabled);
			} else {
				o.$rightArrow.removeClass(o.s.c.arrowDisabled);
			}
		}
	};

	o.moveSlide = function(n, f) {

		var fast = f || 0,
			speed = fast ? 0 : o.s.speed,
			$prev = o.$slides.eq(o.current),
			$next = o.$slides.eq(n);

		$prev.removeClass(o.s.c.slideActive);

		if(!o.cssTransisions){
			$prev.stop().animate({
				left: -o.slideOuterWidth,
				opacity: 0
			}, speed, 'easeInOutExpo',function(){
				$(this).css({
					left: o.slideOuterWidth
				});
			});
			$next.stop().animate({
				left: 0,
				opacity: 1
			}, speed, 'easeInOutExpo');
			$next.addClass(o.s.c.slideActive);

		} else {
			$prev.css({
				'-webkit-transform': 'translateX(' + -o.slideOuterWidth + 'px)',
				'-moz-transform': 'translateX(' + -o.slideOuterWidth + 'px)',
				'-o-transform': 'translateX(' + -o.slideOuterWidth + 'px)',
				'transform': 'translateX(' + -o.slideOuterWidth + 'px)'
			});
			$next.addClass('pi-no-transitions').css({
				'-webkit-transform': 'translateX(' + o.slideOuterWidth + 'px)',
				'-moz-transform': 'translateX(' + o.slideOuterWidth + 'px)',
				'-o-transform': 'translateX(' + o.slideOuterWidth + 'px)',
				'transform': 'translateX(' + o.slideOuterWidth + 'px)'
			});
			//debugger;
			setTimeout(function(){
				$next.removeClass('pi-no-transitions').addClass(o.s.c.slideActive).css({
					'-webkit-transform': 'translateX(' + 0 + 'px)',
					'-moz-transform': 'translateX(' + 0 + 'px)',
					'-o-transform': 'translateX(' + 0 + 'px)',
					'transform': 'translateX(' + 0 + 'px)'
				});
			},10);
		}

	};


	o.fadeSlide = function (n) {

		var $prev = o.$slides.eq(o.current),
			$next = o.$slides.eq(n);

		$prev.removeClass(o.s.c.slideActive);
		$next.addClass(o.s.c.slideActive);

		if(!o.cssTransisions){
			$next.stop().animate({
				opacity: 1
			}, o.s.speed, 'easeOutQuad', function () {
				$prev.fadeTo(0, 0);
			});
		}

	};

	o.prepareSlides = function () {

		o.$slides.each(function(i){
			if(i !== 0) {
				if (o.cssTransisions) {
					$(this).css({
						'-webkit-transform': 'translateX(' + o.slideOuterWidth + 'px)',
						'-moz-transform': 'translateX(' + o.slideOuterWidth + 'px)',
						'-o-transform': 'translateX(' + o.slideOuterWidth + 'px)',
						'transform': 'translateX(' + o.slideOuterWidth + 'px)'
					});
				} else {
					$(this).css({
						'left': o.slideOuterWidth + 'px'
					});
				}
			}
		});

	};

	o.toNext = function () {
		if (o.current < o.slidesQ - 1) {
			o.applyAnimation(o.current + 1);
		} else if(o.s.circular){
			o.applyAnimation(0);
		}
	};

	o.toPrev = function () {
		if (o.current > 0) {
			o.applyAnimation(o.current - 1);
		} else if(o.s.circular){
			o.applyAnimation(o.slidesQ - 1);
		}
	};

	o.startAutoplay = function(){
		o.autoPlayInterval = setInterval(function(){
			o.toNext();
		}, o.s.autoplayDelay);
	};

	o.stopAutoplay = function(){
		clearInterval(o.autoPlayInterval);
	};

	o.resizeGallery = function () {
		/*o.slideOuterWidth = o.$slides.eq(0).outerWidth();
		o.sceneWidth = o.$paneWrapper.width();
		o.margin = (o.sceneWidth - o.slideOuterWidth) / 2;

		if (o.s.action == 'fade') {
			o.$pane.css('left', o.margin);
		}*/
	};

	o.addSwipeActions = function() {
		if(o.s.enableSwipes && $.fn.swipe && typeof($.fn.swipe) === 'function') {
			o.$pane.swipe({
				swipeStatus:function(event, phase, direction){
					if (phase === 'end'){
						if(direction === 'left'){
							o.toNext();
						} else if(direction === 'right'){
							o.toPrev();
						}
					}
				},
				allowPageScroll:"vertical",
				excludedElements:''
			});
		}
	};

	o.init();

	return o;

}
;jQuery(function($){
	"use strict";

	//region Sliders
	if(typeof(PiSlider) === 'function'){
		$('.pi-slider').each(function(){
			new PiSlider($(this), {
				debug: 0,
				preload: $(this).data('sliderPreloader') !== undefined ? $(this).data('sliderPreloader') : 1,
				preloadDelay: $(this).data('sliderPreloaderDelay') !== undefined ? $(this).data('sliderPreloaderDelay') : 1000,
				circular: $(this).data('sliderCircular') !== undefined ? $(this).data('sliderCircular') : 1,
				enableSwipes: $(this).data('sliderSwipes') !== undefined ? $(this).data('sliderSwipes') : 1,
				enablePagination: $(this).data('sliderPagination') !== undefined ? $(this).data('sliderPagination') : 1,
				enableArrows: $(this).data('sliderArrows') !== undefined ? $(this).data('sliderArrows') : 1,
				enableKeys: $(this).data('sliderKeys') !== undefined ? $(this).data('sliderKeys') : 1,
				autoplayDelay: $(this).data('sliderAutoplayDelay') !== undefined ? $(this).data('sliderAutoplayDelay') : 0,
				action: $(this).data('sliderAction')
			});
		});
	}
	//endregion

});