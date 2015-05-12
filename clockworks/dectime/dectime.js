var dectime = {
	ticker   :	0,
	name     :	'DecTime',
	designer :	'Cis',
	year     :	2015,
	url      :	'http://www.dectime.nl',
	html     :	'<h1>DecTime</h1>'
				+	'<figure id="decfigure">'
					+	'<div id="dectime">'
						+	'<img id="decface" src="clockworks/dectime/decface.svg" />'
						+	'<img id="dechour" src="clockworks/dectime/dechour.svg" />'
						+	'<img id="decminute" src="clockworks/dectime/decminute.svg" />'
						+	'<img id="decsecond" src="clockworks/dectime/decsecond.svg" />'
					+	'</div>'
				+	'</figure>'
				+	'<article>'
					+	'<h2>DecTime</h2>'
					+	'<p>Based on the decimal timesystem of 10 hours in a day, 100 minutes in an hour and 100 seconds in a minute.</p>'
				+	'</article>',
	tick     : function(){
		// only the clock specific action per millisecond.
		w= $('#decfigure').width();
		h= $('#decfigure').height();
		wh=Math.min(w,h);
		document.getElementById("dectime").style.position="absolute";
		document.getElementById("dectime").style.width   =wh+"px";
		document.getElementById("dectime").style.height  =wh+"px";
		document.getElementById("dectime").style.left    =((w-wh)/2)+"px";
		document.getElementById("dectime").style.top     =((h-wh)/2)+"px";

		this.ticker = setInterval(function(){
			var miliSec   =clockSteps.hour*3600000+clockSteps.minute*60000+clockSteps.second*1000+clockSteps.milli;
			var deciTime  =miliSec/86400000*10;
			var hourDeg   =deciTime*36;
			var minuteDeg =(deciTime%1)*360;
			var secondDeg =((deciTime*100)%1)*360;

			$('#decsecond').css( 'transform', 'rotate(' + secondDeg + 'deg)' );
			$('#decsecond').css( '-webkit-transform', 'rotate(' + secondDeg + 'deg)' );
			$('#decminute').css( 'transform', 'rotate(' + minuteDeg + 'deg)' );
			$('#decminute').css( '-webkit-transform', 'rotate(' + minuteDeg + 'deg)' );
			$('#dechour').css( 'transform', 'rotate(' + hourDeg + 'deg)' );
			$('#dechour').css( '-webkit-transform', 'rotate(' + hourDeg + 'deg)' );
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
var clockID = clockWorks.indexOf("dectime");
$('#clock'+clockID).html(dectime.html);
