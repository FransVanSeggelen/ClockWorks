$(document).ready(function(){
	// Make the clock's section with figure (the clockface) and article (the text)
	newClock ='<figure>';
	newClock+='<div id="rs_face">';
	newClock+='<img id="rs_dates_index" src="ressence/dates_index.svg" />';
	newClock+='<img id="rs_minutes_index" src="ressence/minutes_index.svg" />';
	newClock+='<div id="rs_minutes">';
	newClock+='<img id="rs_minutes_hand" src="ressence/minutes_hand.svg" />';
	newClock+='<div id="rs_hours">';
	newClock+='<img id="rs_hours_index" src="ressence/hours_index.svg" />';
	newClock+='<img id="rs_hours_hand" src="ressence/hours_hand.svg" />';
	newClock+='</div>';
	newClock+='<div id="rs_seconds">';
	newClock+='<img id="rs_seconds_index" src="ressence/seconds_index.svg" />';
	newClock+='<img id="rs_seconds_hand" src="ressence/seconds_hand.svg" />';
	newClock+='</div>';
	newClock+='<div id="rs_days">';
	newClock+='<img id="rs_days_index" src="ressence/days_index.svg" />';
	newClock+='<img id="rs_days_hand" src="ressence/days_hand.svg" />';
	newClock+='</div>';
	newClock+='</div>';
	newClock+="</figure>";
	newClock+="<article>";
	newClock+="<h2>Type 3</h2>";
	newClock+="<p>The name RESSENCE is a neologism assimilating the words renaissance and essence. Renaissance stands for the rebirth of what is essential to a watch, to display time. RESSENCE brings a contemporary evolution of time representation using the same universal cognitive patterns learned to read time on a traditional watch.</p>";
	newClock+="</article>";
	var nodeRef=document.createElement("section");
	nodeRef.setAttribute("id","ressence");
	nodeRef.style.display="none";
	nodeRef.innerHTML=newClock;
	document.getElementsByTagName("body")[0].appendChild(nodeRef);

	elem=document.getElementById("rs_face").getElementsByTagName("*");
	for (var i = 0; i < elem.length; i++) {
		elem[i].style.position="absolute";
		elem[i].style.top     ="0px";
		elem[i].style.left    ="0px";
		elem[i].style.width   ="100%";
		elem[i].style.height  ="100%";
	};

	document.getElementById("rs_hours").style.top   ="47%";
	document.getElementById("rs_hours").style.left  ="29%";
	document.getElementById("rs_hours").style.width ="42%";
	document.getElementById("rs_hours").style.height="42%";

	document.getElementById("rs_seconds").style.top   ="26%";
	document.getElementById("rs_seconds").style.left  ="16%";
	document.getElementById("rs_seconds").style.width ="23%";
	document.getElementById("rs_seconds").style.height="23%";

	document.getElementById("rs_days").style.top   ="26%";
	document.getElementById("rs_days").style.left  ="61%";
	document.getElementById("rs_days").style.width ="23%";
	document.getElementById("rs_days").style.height="23%";

	var webClock=setInterval(function(){ressence()},1);
	function ressence(){
		w= document.getElementById("ressence").firstChild.offsetWidth;
		h= document.getElementById("ressence").firstChild.offsetHeight;
		wh=Math.min(w,h);
		document.getElementById("rs_face").style.position ="absolute";
		document.getElementById("rs_face").style.width =wh+"px";
		document.getElementById("rs_face").style.height=wh+"px";
		document.getElementById("rs_face").style.left  =((w-wh)/2)+"px";
		document.getElementById("rs_face").style.top   =((h-wh)/2)+"px";

	    var dateDeg   =dateVar*360/-31;
	    var secondDeg =secondVar*360/60;
	    var minuteDeg =minuteVar*360/60+secondVar*6/60+miliVar*0.1/1000;
	    var hourDeg   =hourVar*360/12+minuteVar*30/60+secondVar*0.5/60;
	    var dayDeg    =dayVar*360/7+360/14;

		document.getElementById("rs_dates_index").style.transform="rotate("+dateDeg+"deg)";
		document.getElementById("rs_dates_index").style.oTransform="rotate("+dateDeg+"deg)";
		document.getElementById("rs_dates_index").style.msTransform="rotate("+dateDeg+"deg)";
		document.getElementById("rs_dates_index").style.mozTransform="rotate("+dateDeg+"deg)";
		document.getElementById("rs_dates_index").style.webkitTransform="rotate("+dateDeg+"deg)";
		document.getElementById("rs_minutes").style.transform="rotate("+minuteDeg+"deg)";
		document.getElementById("rs_minutes").style.oTransform="rotate("+minuteDeg+"deg)";
		document.getElementById("rs_minutes").style.msTransform="rotate("+minuteDeg+"deg)";
		document.getElementById("rs_minutes").style.mozTransform="rotate("+minuteDeg+"deg)";
		document.getElementById("rs_minutes").style.webkitTransform="rotate("+minuteDeg+"deg)";
		document.getElementById("rs_hours").style.transform="rotate(-"+minuteDeg+"deg)";
		document.getElementById("rs_hours").style.oTransform="rotate(-"+minuteDeg+"deg)";
		document.getElementById("rs_hours").style.msTransform="rotate(-"+minuteDeg+"deg)";
		document.getElementById("rs_hours").style.mozTransform="rotate(-"+minuteDeg+"deg)";
		document.getElementById("rs_hours").style.webkitTransform="rotate(-"+minuteDeg+"deg)";
		document.getElementById("rs_hours_hand").style.transform="rotate("+hourDeg+"deg)";
		document.getElementById("rs_hours_hand").style.oTransform="rotate("+hourDeg+"deg)";
		document.getElementById("rs_hours_hand").style.msTransform="rotate("+hourDeg+"deg)";
		document.getElementById("rs_hours_hand").style.mozTransform="rotate("+hourDeg+"deg)";
		document.getElementById("rs_hours_hand").style.webkitTransform="rotate("+hourDeg+"deg)";
		document.getElementById("rs_seconds").style.transform="rotate(-"+minuteDeg+"deg)";
		document.getElementById("rs_seconds").style.oTransform="rotate(-"+minuteDeg+"deg)";
		document.getElementById("rs_seconds").style.msTransform="rotate(-"+minuteDeg+"deg)";
		document.getElementById("rs_seconds").style.mozTransform="rotate(-"+minuteDeg+"deg)";
		document.getElementById("rs_seconds").style.webkitTransform="rotate(-"+minuteDeg+"deg)";
		document.getElementById("rs_seconds_hand").style.transform="rotate("+secondDeg+"deg)";
		document.getElementById("rs_seconds_hand").style.oTransform="rotate("+secondDeg+"deg)";
		document.getElementById("rs_seconds_hand").style.msTransform="rotate("+secondDeg+"deg)";
		document.getElementById("rs_seconds_hand").style.mozTransform="rotate("+secondDeg+"deg)";
		document.getElementById("rs_seconds_hand").style.webkitTransform="rotate("+secondDeg+"deg)";
		document.getElementById("rs_days").style.transform="rotate(-"+minuteDeg+"deg)";
		document.getElementById("rs_days").style.oTransform="rotate(-"+minuteDeg+"deg)";
		document.getElementById("rs_days").style.msTransform="rotate(-"+minuteDeg+"deg)";
		document.getElementById("rs_days").style.mozTransform="rotate(-"+minuteDeg+"deg)";
		document.getElementById("rs_days").style.webkitTransform="rotate(-"+minuteDeg+"deg)";
		document.getElementById("rs_days_hand").style.transform="rotate("+dayDeg+"deg)";
		document.getElementById("rs_days_hand").style.oTransform="rotate("+dayDeg+"deg)";
		document.getElementById("rs_days_hand").style.msTransform="rotate("+dayDeg+"deg)";
		document.getElementById("rs_days_hand").style.mozTransform="rotate("+dayDeg+"deg)";
		document.getElementById("rs_days_hand").style.webkitTransform="rotate("+dayDeg+"deg)";
	};
});