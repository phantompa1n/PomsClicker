(this.webpackJsonpdbExpe=this.webpackJsonpdbExpe||[]).push([[0],{165:function(t,e,n){"use strict";n.r(e),n.d(e,"createSwipeBackGesture",(function(){return i}));var r=n(20),a=n(32),i=function(t,e,n,i,c){var o=t.ownerDocument.defaultView;return Object(a.createGesture)({el:t,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:function(t){return t.startX<=50&&e()},onStart:n,onMove:function(t){var e=t.deltaX/o.innerWidth;i(e)},onEnd:function(t){var e=t.deltaX,n=o.innerWidth,a=e/n,i=t.velocityX,u=n/2,s=i>=0&&(i>.2||t.deltaX>u),d=(s?1-a:a)*n,h=0;if(d>5){var p=d/Math.abs(i);h=Math.min(p,540)}c(s,a<=0?.01:Object(r.c)(0,a,.9999),h)}})}}}]);
//# sourceMappingURL=0.0d1f5490.chunk.js.map