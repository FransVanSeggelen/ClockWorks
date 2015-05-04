$(document).ready(function(){
	// Make the clock's section with figure (the clockface) and article (the text)
	newClock ='<figure>';
	newClock+='<div id="decidiv">';
	newClock+='<img id="deciface" src="decitime/deciface.svg" />';
	newClock+='<img id="decihour" src="decitime/decihour.svg" />';
	newClock+='<img id="deciminute" src="decitime/deciminute.svg" />';
	newClock+='<img id="decisecond" src="decitime/decisecond.svg" />';
	newClock+='</div>';
	newClock+="</figure>";
	newClock+="<article>";
	newClock+="<h2>DeciTime</h2>";
	newClock+="<p>Based on the decimal timesystem of 10 hours in a day, 100 minutes in an hour and 100 seconds in a minute.</p>";
	newClock+='</div>';
	newClock+="</article>";
	var nodeRef=document.createElement("section");
	nodeRef.setAttribute("id","decitime");
	nodeRef.style.display="none";
	nodeRef.innerHTML=newClock;
	document.getElementsByTagName("body")[0].appendChild(nodeRef);

	elem=document.getElementById("decidiv").getElementsByTagName("*");
	for (var i = 0; i < elem.length; i++) {
		elem[i].style.position="absolute";
		elem[i].style.top     ="0px";
		elem[i].style.left    ="0px";
		elem[i].style.width   ="100%";
		elem[i].style.height  ="100%";
	};

	var webClock=setInterval(function(){decitime()},1);
	function decitime(){
		w= document.getElementById("decitime").firstChild.offsetWidth;
		h= document.getElementById("decitime").firstChild.offsetHeight;
		wh=Math.min(w,h);
		document.getElementById("decidiv").style.position="absolute";
		document.getElementById("decidiv").style.width   =wh+"px";
		document.getElementById("decidiv").style.height  =wh+"px";
		document.getElementById("decidiv").style.left    =((w-wh)/2)+"px";
		document.getElementById("decidiv").style.top     =((h-wh)/2)+"px";

	    var miliSec   =hourVar*3600000+minuteVar*60000+secondVar*1000+miliVar;
	    var deciTime  =miliSec/86400000*10;
	    var hourDeg   =deciTime*36;
	    var minuteDeg =(deciTime%1)*360;
	    var secondDeg =((deciTime*100)%1)*360;

		document.getElementById("decihour").style.transform="rotate("+hourDeg+"deg)";
		document.getElementById("decihour").style.oTransform="rotate("+hourDeg+"deg)";
		document.getElementById("decihour").style.msTransform="rotate("+hourDeg+"deg)";
		document.getElementById("decihour").style.mozTransform="rotate("+hourDeg+"deg)";
		document.getElementById("decihour").style.webkitTransform="rotate("+hourDeg+"deg)";
		document.getElementById("deciminute").style.transform="rotate("+minuteDeg+"deg)";
		document.getElementById("deciminute").style.oTransform="rotate("+minuteDeg+"deg)";
		document.getElementById("deciminute").style.msTransform="rotate("+minuteDeg+"deg)";
		document.getElementById("deciminute").style.mozTransform="rotate("+minuteDeg+"deg)";
		document.getElementById("deciminute").style.webkitTransform="rotate("+minuteDeg+"deg)";
		document.getElementById("decisecond").style.transform="rotate("+secondDeg+"deg)";
		document.getElementById("decisecond").style.oTransform="rotate("+secondDeg+"deg)";
		document.getElementById("decisecond").style.msTransform="rotate("+secondDeg+"deg)";
		document.getElementById("decisecond").style.mozTransform="rotate("+secondDeg+"deg)";
		document.getElementById("decisecond").style.webkitTransform="rotate("+secondDeg+"deg)";
	};
});