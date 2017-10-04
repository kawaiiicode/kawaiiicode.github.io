//<![CDATA[
// ================================================================ 
//                   ------ dock menu ------- 
// script by Gerard Ferrandez - Ge-1-doot - February 2006 
// http://www.dhteumeuleu.com 
// ================================================================ 
var dock = function (dock, sMin, sMax) { 
  /* ---- private vars ---- */ 
  var xm = xmb = ov = 0; 
  var M = true; 
  var icons = document.getElementById(dock).getElementsByTagName('img'); 
  var N = icons.length; 
  var s = sMin; 
  var ovk = 0; 
  var addEvent = function (o, e, f) { 
    if (window.addEventListener) o.addEventListener(e, f, false); 
    else if (window.attachEvent) r = o.attachEvent('on' + e, f); 
  } 
  var pxLeft = function(o) { 
    for(var x=-document.documentElement.scrollLeft; o != null; o = o.offsetParent) x+=o.offsetLeft; 
    return x; 
  } 
  for(var i=0;i<N;i++) { 
    var o = icons[i]; 
    o.style.width = sMin+"px"; 
    o.style.height = sMin+"px"; 
    o.className = "dockicon"; 
  } 
  var run = function() { 
    for(var i=0;i<N;i++) { 
      var o = icons[i]; 
      var W = parseInt(o.style.width); 
      if(ov && ov.className=="dockicon") { 
        if(ov!=ovk){ 
          ovk=ov; 
          document.getElementById("legend").innerHTML = ov.lang; 
        } 
        if(M) W = Math.max((s*Math.cos(((pxLeft(o)+W/2)-xm)/sMax)),sMin); 
        s = Math.min(sMax,s+.5); 
      } else { 
        s = Math.max(s-.5,sMin); 
        W = Math.max(W-N,sMin); 
      } 
      o.style.width = W+"px"; 
      o.style.height = W+"px"; 
    } 
    if(s >= sMax) M = false; 
  } 
  addEvent(document, 'mousemove', function (e) { 
    if(window.event) e=window.event; 
    xm = (e.x || e.clientX); 
    if(xm!=xmb){ 
      M = true; 
      xmb = xm; 
    } 
    ov = (e.target)?e.target:((e.srcElement)?e.srcElement:null); 
  }); 
  setInterval(run, 16); 
}; 
 
window.onload = function() { 
  dock("dock", 50, 100);
}
//]]>