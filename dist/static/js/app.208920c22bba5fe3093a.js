webpackJsonp([1,0],[function(t,e,i){"use strict";function a(t){return t&&t.__esModule?t:{"default":t}}var s=i(3),n=a(s),o=i(8),r=a(o);new n["default"]({el:"body",components:{App:r["default"]}})},function(t,e){},function(t,e){},,function(t,e){t.exports=' <div id=app> <tab :tabtitles=tabtitles :current-page=3> <div class=tab-content-container> <button onclick=alert(2)>click</button> <div>hahaha1</div> <div>hahaha1</div> <div>hahaha1</div> <div>hahaha1</div> <div>hahaha1</div> <div>hahaha1</div> <div>hahaha1</div> <img src=http://i2.hdslb.com/bfs/archive/33a164cec9e4664675e928c5f0a2844788c077ad.jpg@320w_200h.webp> <div>hahaha1</div> <div>hahaha1</div> <img src=http://i2.hdslb.com/bfs/archive/33a164cec9e4664675e928c5f0a2844788c077ad.jpg@320w_200h.webp> </div> <div class=tab-content-container> bajian2 </div> <div class=tab-content-container> bajian3 </div> <div class=tab-content-container> bajian4 </div> </tab> <br> <div>allow different height、verticle scroll</div> <b>disable slide:</b> <br> <tab :tabtitles=tabtitles2 :slideable=false> <div style="height: 200px;background-color: green" class=tab-content-container> hahaha1 <img src=http://i2.hdslb.com/bfs/archive/33a164cec9e4664675e928c5f0a2844788c077ad.jpg@320w_200h.webp> <div>hahaha1</div> <div>hahaha1</div> <img src=http://i2.hdslb.com/bfs/archive/33a164cec9e4664675e928c5f0a2844788c077ad.jpg@320w_200h.webp> </div> <div style="height: 150px;background-color: #999" class=tab-content-container> bajian2 </div> <div class=tab-content-container> bajian3 </div> </tab> </div> '},function(t,e){t.exports=" <div class=tab-title-container> <li class=tab-title v-for=\"title in tabtitles\" :class=\"{'active': $index+1===currentPage}\" track-by=$index @click=setPage($index+1)>{{title}}</li> </div> <div v-if=slideable class=swiper @touchstart=_onTouchStart> <div class=swiper-wrap v-el:swiper-wrap :class=\"{'dragging': dragging}\" :style=\"{'transform' : 'translate3d(' + translateX + 'px,0, 0)'}\" @transitionend=_onTransitionEnd> <slot></slot> </div> </div> <div v-else class=swiper> <div class=swiper-wrap v-el:swiper-wrap :class=\"{'dragging': dragging}\" :style=\"{'transform' : 'translate3d(' + translateX + 'px,0, 0)'}\" @transitionend=_onTransitionEnd> <slot></slot> </div> </div> "},function(t,e,i){"use strict";function a(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var s=i(9),n=a(s);e["default"]={components:{tab:n["default"]},data:function(){return{tabtitles:["bajian","github","bajian","github"],tabtitles2:["bajian","github","bajian"]}}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={props:{tabtitles:{type:Array,"default":[]},currentPage:{type:Number,"default":1},slideable:{type:Boolean,"default":!0}},data:function(){return{lastPage:1,translateX:0,startTranslateX:0,delta:0,deltaY:0,dragging:!1,startPos:null,startPosY:null,transitioning:!1,slideEls:[]}},ready:function(){this._onTouchMove=this._onTouchMove.bind(this),this._onTouchEnd=this._onTouchEnd.bind(this),this.slideEls=this.$els.swiperWrap.children,this.dragging=!0,this.setPage(this.currentPage);var t=this;setTimeout(function(){t.dragging=!1},0)},methods:{next:function(){var t=this.currentPage;t<this.slideEls.length?(t++,this.setPage(t)):this._revert()},prev:function(){var t=this.currentPage;t>1?(t--,this.setPage(t)):this._revert()},setPage:function(t){this.lastPage=this.currentPage,this.currentPage=t,this.translateX=-[].reduce.call(this.slideEls,function(e,i,a){return a>t-2?e:e+i.clientWidth},0),this._onTransitionStart()},_onTouchStart:function(t){this.startPos=this._getTouchPos(t),this.startYPos=this._getTouchYPos(t),this.delta=0,this.startTranslateX=this.translateX,this.startTime=(new Date).getTime(),this.dragging=!0,document.addEventListener("touchmove",this._onTouchMove,!1),document.addEventListener("touchend",this._onTouchEnd,!1),document.addEventListener("mousemove",this._onTouchMove,!1),document.addEventListener("mouseup",this._onTouchEnd,!1)},_onTouchMove:function(t){this.delta=this._getTouchPos(t)-this.startPos,this.deltaY=Math.abs(this._getTouchYPos(t)-this.startPos),this.performanceMode||(this.translateX=this.startTranslateX+this.delta,this.$emit("slider-move",this.translateX)),Math.abs(this.delta)>20&&this.deltaY<25&&t.preventDefault()},_onTouchEnd:function(t){this.dragging=!1,console.log("y="+this.deltaY),console.log("x="+this.delta),console.log("y/X="+this.deltaY/this.delta);var e=(new Date).getTime()-this.startTime<1e3;this.delta<-100||e&&this.delta<-15&&this.deltaY/this.delta>-6?this.next():this.delta>100||e&&this.delta>15&&this.deltaY/this.delta<6?this.prev():this._revert(),document.removeEventListener("touchmove",this._onTouchMove),document.removeEventListener("touchend",this._onTouchEnd),document.removeEventListener("mousemove",this._onTouchMove),document.removeEventListener("mouseup",this._onTouchEnd)},_revert:function(){this.setPage(this.currentPage)},_getTouchPos:function(t){var e="pageX";return t.changedTouches?t.changedTouches[0][e]:t[e]},_getTouchYPos:function(t){var e="pageY";return t.changedTouches?t.changedTouches[0][e]:t[e]},_onTransitionStart:function(){this.transitioning=!0,this._isPageChanged()?this.$emit("slide-change-start",this.currentPage):this.$emit("slide-revert-start",this.currentPage)},_onTransitionEnd:function(){this.transitioning=!1,this._isPageChanged()?this.$emit("slide-change-end",this.currentPage):this.$emit("slide-revert-end",this.currentPage)},_isPageChanged:function(){return this.lastPage!==this.currentPage}}}},function(t,e,i){var a,s;i(1),a=i(6),s=i(4),t.exports=a||{},t.exports.__esModule&&(t.exports=t.exports["default"]),s&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=s)},function(t,e,i){var a,s;i(2),a=i(7),s=i(5),t.exports=a||{},t.exports.__esModule&&(t.exports=t.exports["default"]),s&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=s)}]);
//# sourceMappingURL=app.208920c22bba5fe3093a.js.map