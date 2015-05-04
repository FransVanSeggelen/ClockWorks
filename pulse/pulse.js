$(document).ready(function(){
	// Make the clock's section with figure (the clockface) and article (the text)
	newClock ='<figure>';
	newClock+='<div id="p_face">';
	newClock+='<svg>';
	newClock+='<circle id="p_hours" cx="50%" cy="50%" r="20%" stroke="none" fill="#dddddd" />';
	newClock+='<circle id="p_minutes" cx="50%" cy="50%" r="30%" stroke="#bbbbbb" stroke-width="3" fill="none" />';
	newClock+='<circle id="p_seconds" cx="50%" cy="50%" r="40%" stroke="#999999" stroke-width="2" fill="none" />';
	newClock+='<circle cx="50%" cy="50%"  r="0.3333%" stroke="#333333" stroke-width="1" fill="none" />';
	newClock+='<circle cx="50%" cy="50%"  r="4.1667%" stroke="#333333" stroke-width="1" stroke-dasharray="10,10" fill="none" />';
	newClock+='<circle cx="50%" cy="50%"  r="8.3333%" stroke="#333333" stroke-width="1" stroke-dasharray="10,10" fill="none" />';
	newClock+='<circle cx="50%" cy="50%" r="12.5000%" stroke="#333333" stroke-width="1" stroke-dasharray="10,10" fill="none" />';
	newClock+='<circle cx="50%" cy="50%" r="16.6667%" stroke="#333333" stroke-width="1" stroke-dasharray="10,10" fill="none"  />';
	newClock+='<circle cx="50%" cy="50%" r="20.8333%" stroke="#333333" stroke-width="1" stroke-dasharray="10,10" fill="none"  />';
	newClock+='<circle cx="50%" cy="50%" r="25.0000%" stroke="#333333" stroke-width="1" stroke-dasharray="10,10" fill="none"  />';
	newClock+='<circle cx="50%" cy="50%" r="29.1667%" stroke="#333333" stroke-width="1" stroke-dasharray="10,10" fill="none" />';
	newClock+='<circle cx="50%" cy="50%" r="33.3333%" stroke="#333333" stroke-width="1" stroke-dasharray="10,10" fill="none"  />';
	newClock+='<circle cx="50%" cy="50%" r="37.5000%" stroke="#333333" stroke-width="1" stroke-dasharray="10,10" fill="none" />';
	newClock+='<circle cx="50%" cy="50%" r="41.6667%" stroke="#333333" stroke-width="1" stroke-dasharray="10,10" fill="none"  />';
	newClock+='<circle cx="50%" cy="50%" r="45.8333%" stroke="#333333" stroke-width="1" stroke-dasharray="10,10" fill="none"  />';
	newClock+='<circle cx="50%" cy="50%" r="50.0000%" stroke="#333333" stroke-width="1" stroke-dasharray="10,10" fill="none"  />';
	newClock+='</svg>';
	newClock+='</div>';
	newClock+="</figure>";
	newClock+="<article>";
	newClock+="<h2>Pulse by Cis</h2>";
	newClock+="<p>With this clockwork the hours, mintutes and seconds grow from the center to the outside in respectively 12 hours, 1 hour and 1 minute.</p>";
	newClock+="</article>";
	var nodeRef=document.createElement("section");
	nodeRef.setAttribute("id","pulse");
	nodeRef.style.display="none";
	nodeRef.innerHTML=newClock;
	document.getElementsByTagName("body")[0].appendChild(nodeRef);

	elem=document.getElementById("p_face").getElementsByTagName("*");
	for (var i = 0; i < elem.length; i++) {
		elem[i].style.position="absolute";
		elem[i].style.top     ="0px";
		elem[i].style.left    ="0px";
		elem[i].style.width   ="100%";
		elem[i].style.height  ="100%";
	};
	var webClock=setInterval(function(){pulse()},1);
	function pulse(){
		w= document.getElementById("pulse").firstChild.offsetWidth;
		h= document.getElementById("pulse").firstChild.offsetHeight;
		wh=Math.min(w,h);
		document.getElementById("p_face").style.position="absolute";
		document.getElementById("p_face").style.width   =wh+"px";
		document.getElementById("p_face").style.height  =wh+"px";
		document.getElementById("p_face").style.left    =((w-wh)/2)+"px";
		document.getElementById("p_face").style.top     =((h-wh)/2)+"px";

	    var rHours  =(hourVar%12*3600000+minuteVar*60000+secondVar*1000+miliVar)/43200000*50;
	    var rMinutes=(minuteVar*60000+secondVar*1000+miliVar)/3600000*50;
	    var rSeconds=(secondVar*1000+miliVar)/60000*50;
		document.getElementById("p_hours").setAttribute("r",rHours.toString()+"%");
		document.getElementById("p_minutes").setAttribute("r",rMinutes.toString()+"%");
		document.getElementById("p_seconds").setAttribute("r",rSeconds.toString()+"%");
	};
});