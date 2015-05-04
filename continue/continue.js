$(document).ready(function(){
    // Make the clock's section with figure (the clockface) and article (the text)
    newClock  = '<figure>';
    newClock += '<div id="sm_face">';
    newClock += '<img id="sm_hours" src="continue/continue_h.svg" />';
    newClock += '<div id="sm_minutes_div">';
    newClock += '<img id="sm_minutes" src="continue/continue_m.svg" />';
    newClock += '<div id="sm_seconds_div" />';
    newClock += '<img id="sm_seconds" src="continue/continue_s.svg" />';
    newClock += '</div>';
    newClock += '</div>';
    newClock += '</div>';
    newClock += "</figure>";
    newClock += "<article>";
    newClock += "<h2>Continue Time clock by Sander Mulder</h2>";
    newClock += "<p>On this Continue Time clock, two out of the three pointers rotate around another pointer, instead of the central point on the clock face, as with traditional clocks. The resulting kinetic artwork, and fully functional clock, is continuously changing its shape while the pointers are still read as with any traditional clock.</p>";
    newClock += "</article>";
    var nodeRef = document.createElement("section");
    nodeRef.setAttribute("id","continue");
    nodeRef.style.display = "none";
    nodeRef.innerHTML = newClock;
    document.getElementsByTagName("body")[0].appendChild(nodeRef);

    elem = document.getElementById("sm_face").getElementsByTagName("*");
    for (var i = 0; i < elem.length; i++) {
        elem[i].style.position = "absolute";
        elem[i].style.top      = "0px";
        elem[i].style.left     = "0px";
        elem[i].style.width    = "100%";
        elem[i].style.height   = "100%";
    };

    document.getElementById("sm_hours").style.top       = "33%";
    document.getElementById("sm_hours").style.left      = "33%";
    document.getElementById("sm_hours").style.width     = "34%";
    document.getElementById("sm_hours").style.height    = "34%";
    document.getElementById("sm_minutes").style.top     = "33%";
    document.getElementById("sm_minutes").style.left    = "33%";
    document.getElementById("sm_minutes").style.width   = "34%";
    document.getElementById("sm_minutes").style.height  = "34%";
    document.getElementById("sm_seconds").style.top     = "33%";
    document.getElementById("sm_seconds").style.left    = "33%";
    document.getElementById("sm_seconds").style.width   = "34%";
    document.getElementById("sm_seconds").style.height  = "34%";
    document.getElementById("sm_minutes_div").style.top = "-16%";
    document.getElementById("sm_seconds_div").style.top = "-16%";

    var webClock=setInterval(function(){continueMove()},1);

    function continueMove(){
        w= document.getElementById("continue").firstChild.offsetWidth;
        h= document.getElementById("continue").firstChild.offsetHeight;
        wh=Math.min(w,h);
        document.getElementById("sm_face").style.position ="absolute";
        document.getElementById("sm_face").style.width =wh+"px";
        document.getElementById("sm_face").style.height=wh+"px";
        document.getElementById("sm_face").style.left  =((w-wh)/2)+"px";
        document.getElementById("sm_face").style.top   =((h-wh)/2)+"px";

        var hourDeg   =hourVar*360/12+minuteVar*30/60+secondVar*0.5/60+miliVar*(0.5/60)/1000;
        var minuteDeg =minuteVar*360/60+secondVar*6/60+miliVar*0.1/1000-hourDeg;
        var secondDeg =secondVar*360/60+miliVar*6/1000-hourDeg-minuteDeg;

        document.getElementById("sm_face").style.transform="rotate("+hourDeg+"deg)";
        document.getElementById("sm_face").style.oTransform="rotate("+hourDeg+"deg)";
        document.getElementById("sm_face").style.msTransform="rotate("+hourDeg+"deg)";
        document.getElementById("sm_face").style.mozTransform="rotate("+hourDeg+"deg)";
        document.getElementById("sm_face").style.webkitTransform="rotate("+hourDeg+"deg)";
        document.getElementById("sm_minutes_div").style.transform="rotate("+minuteDeg+"deg)";
        document.getElementById("sm_minutes_div").style.oTransform="rotate("+minuteDeg+"deg)";
        document.getElementById("sm_minutes_div").style.msTransform="rotate("+minuteDeg+"deg)";
        document.getElementById("sm_minutes_div").style.mozTransform="rotate("+minuteDeg+"deg)";
        document.getElementById("sm_minutes_div").style.webkitTransform="rotate("+minuteDeg+"deg)";
    	document.getElementById("sm_seconds_div").style.transform="rotate("+secondDeg+"deg)";
    	document.getElementById("sm_seconds_div").style.oTransform="rotate("+secondDeg+"deg)";
    	document.getElementById("sm_seconds_div").style.msTransform="rotate("+secondDeg+"deg)";
    	document.getElementById("sm_seconds_div").style.mozTransform="rotate("+secondDeg+"deg)";
    	document.getElementById("sm_seconds_div").style.webkitTransform="rotate("+secondDeg+"deg)";
    };
});
