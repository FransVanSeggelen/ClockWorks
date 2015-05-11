var continueSM = {
	ticker   :	0,
	name     :	'Continue',
	designer :	'Sander Mulder',
	year     :	2012,
	url      :	'http://www.sandermulder.nl',
    html     :	'<h1>Continue</h1>'
    			+	'<figure>'
				+	'<div id="sm_face">'
					+	'<img id="sm_hours" src="clockworks/continue/continue_h.svg" />'
					+	'<div id="sm_minutes_div">'
						+	'<img id="sm_minutes" src="clockworks/continue/continue_m.svg" />'
						+	'<div id="sm_seconds_div" >'
							+	'<img id="sm_seconds" src="clockworks/continue/continue_s.svg" />'
						+	'</div>'
					+	'</div>'
				+	'</div>'
				+	'</figure>'
				+	'<article>'
					+	'<h2>Continue Time clock by Sander Mulder</h2>'
					+	'<p>On this Continue Time clock, two out of the three pointers rotate around another pointer, instead of the central point on the clock face, as with traditional clocks. The resulting kinetic artwork, and fully functional clock, is continuously changing its shape while the pointers are still read as with any traditional clock.</p>'
				+	'</article>',
    tick     : function(){
        // only the clock specific action per millisecond.
		w= document.getElementById("clockworks").firstChild.offsetWidth;
		h= document.getElementById("clockworks").firstChild.offsetHeight;
		wh=Math.min(w,h);
		document.getElementById("sm_face").style.position ="absolute";
		document.getElementById("sm_face").style.width =wh+"px";
		document.getElementById("sm_face").style.height=wh+"px";
		document.getElementById("sm_face").style.left  =((w-wh)/2)+"px";
		document.getElementById("sm_face").style.top   =((h-wh)/2)+"px";

        this.ticker = setInterval(function(){

			var hourDeg   =clockSteps.hour*360/12+clockSteps.minute*30/60+clockSteps.second*0.5/60+clockSteps.milli*(0.5/60)/1000;
			var minuteDeg =clockSteps.minute*360/60+clockSteps.second*6/60+clockSteps.milli*0.1/1000-hourDeg;
			var secondDeg =clockSteps.second*360/60+clockSteps.milli*6/1000-hourDeg-minuteDeg;

			document.getElementById("sm_face").style.transform="rotate("+hourDeg+"deg)";
			document.getElementById("sm_face").style.webkitTransform="rotate("+hourDeg+"deg)";
			document.getElementById("sm_minutes_div").style.transform="rotate("+minuteDeg+"deg)";
			document.getElementById("sm_minutes_div").style.webkitTransform="rotate("+minuteDeg+"deg)";
			document.getElementById("sm_seconds_div").style.transform="rotate("+secondDeg+"deg)";
			document.getElementById("sm_seconds_div").style.webkitTransform="rotate("+secondDeg+"deg)";
        },1);
    },
    stop     : function(){
        clearInterval(this.ticker);
        this.ticker=0;
    },
    fast     : function(){
        // only the clock specific action per millisecond.
    },
    hand     : function(){
        // only the clock specific action per millisecond.
    }
};
var clockID = clockWorks.indexOf("continue");
$('#clock'+clockID).html(continueSM.html);
