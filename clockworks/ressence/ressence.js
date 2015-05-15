var ressence = {
	ticker   :	0,
	name     :	'Ressence',
	designer :	'Ressence',
	year     :	2015,
	url      :	'http://www.ressence.eu',
	html     :	'<h1>Ressence</h1>'
				+	'<figure id="res_figure">'
					+	'<div id="res_face">'
						+	'<img id="res_date_indx" src="clockworks/ressence/ressence_date_indx.svg" />'
						+	'<img id="res_minute_indx" src="clockworks/ressence/ressence_minute_indx.svg" />'
						+	'<div id="res_minute">'
							+	'<img id="res_minute_hand" src="clockworks/ressence/ressence_minute_hand.svg" />'
							+	'<div id="res_hour">'
								+	'<img id="res_hour_indx" src="clockworks/ressence/ressence_hour_indx.svg" />'
								+	'<img id="res_hour_hand" src="clockworks/ressence/ressence_hour_hand.svg" />'
							+	'</div>'
							+	'<div id="res_second">'
							+	'<img id="res_second_indx" src="clockworks/ressence/ressence_second_indx.svg" />'
							+	'<img id="res_second_hand" src="clockworks/ressence/ressence_second_hand.svg" />'
						+	'</div>'
						+	'<div id="res_day">'
							+	'<img id="res_day_indx" src="clockworks/ressence/ressence_day_indx.svg" />'
							+	'<img id="res_day_hand" src="clockworks/ressence/ressence_day_hand.svg" />'
						+	'</div>'
					+	'</div>'
				+	'</figure>'
				+	'<article>'
					+	'<h2>Type 3</h2>'
					+	'<p>The name RESSENCE is a neologism assimilating the words renaissance and essence. Renaissance stands for the rebirth of what is essential to a watch, to display time. RESSENCE brings a contemporary evolution of time representation using the same universal cognitive patterns learned to read time on a traditional watch.</p>'
				+	'</article>',
	tick     : function(){
		// only the clock specific action per millisecond.
		w= $('#res_figure').width();
		h= $('#res_figure').height();
		wh=Math.min(w,h);
		document.getElementById("res_face").style.position ="absolute";
		document.getElementById("res_face").style.width =wh+"px";
		document.getElementById("res_face").style.height=wh+"px";
		document.getElementById("res_face").style.left  =((w-wh)/2)+"px";
		document.getElementById("res_face").style.top   =((h-wh)/2)+"px";

		this.ticker = setInterval(function(){
		    var dateDeg   = clockSteps.date    * 360 / -31;
		    var secondDeg = clockSteps.second  * 360 /  60;
		    var minuteDeg = clockSteps.minute  * 360 /  60 + clockSteps.second *  6 / 60 + clockSteps.milli  * 0.1 / 1000;
		    var hourDeg   = clockSteps.hour    * 360 /  12 + clockSteps.minute * 30 / 60 + clockSteps.second * 0.5 / 60;
		    var dayDeg    = clockSteps.weekday * 360 /   7 + 360 / 14;

			document.getElementById("res_date_indx").style.transform="rotate("+dateDeg+"deg)";
			document.getElementById("res_date_indx").style.webkitTransform="rotate("+dateDeg+"deg)";
			document.getElementById("res_minute").style.transform="rotate("+minuteDeg+"deg)";
			document.getElementById("res_minute").style.webkitTransform="rotate("+minuteDeg+"deg)";
			document.getElementById("res_hour").style.transform="rotate(-"+minuteDeg+"deg)";
			document.getElementById("res_hour").style.webkitTransform="rotate(-"+minuteDeg+"deg)";
			document.getElementById("res_hour_hand").style.transform="rotate("+hourDeg+"deg)";
			document.getElementById("res_hour_hand").style.webkitTransform="rotate("+hourDeg+"deg)";
			document.getElementById("res_second").style.transform="rotate(-"+minuteDeg+"deg)";
			document.getElementById("res_second").style.webkitTransform="rotate(-"+minuteDeg+"deg)";
			document.getElementById("res_second_hand").style.transform="rotate("+secondDeg+"deg)";
			document.getElementById("res_second_hand").style.webkitTransform="rotate("+secondDeg+"deg)";
			document.getElementById("res_day").style.transform="rotate(-"+minuteDeg+"deg)";
			document.getElementById("res_day").style.webkitTransform="rotate(-"+minuteDeg+"deg)";
			document.getElementById("res_day_hand").style.transform="rotate("+dayDeg+"deg)";
			document.getElementById("res_day_hand").style.webkitTransform="rotate("+dayDeg+"deg)";
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
var clockID = clockWorks.indexOf("ressence");
$('#clock'+clockID).html(ressence.html);
