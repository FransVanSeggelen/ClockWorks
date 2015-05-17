var lifelong = {
	ticker   :	0,
	name     :	'Lifelong',
	designer :	'Sara Beesems',
	year     :	2014,
	url      :	'http://www.sarabeesems.nl',
	html     :	'<h1>Lifelong</h1>'
				+	'<figure id="lifelong_figure">'
					+	'<div id="lifelong">'
						+	'<img id="lifelong_minute" src="clockworks/lifelong/lifelong_minute.svg" />'
						+   '<img id="lifelong_hour" src="clockworks/lifelong/lifelong_hour.svg" />'
						+   '<svg>'
						+   '</svg>'
					+	'</div>'
				+	'</figure>'
				+	'<article>'
					+	'<h2>Lifelong</h2>'
					+	'<p>The Lifelong clock was inspired by prison sentences. A prisoner is detained for a certain amount of time in a designated space. During the sentence the perception of time becomes blurred. Hours, months and years fade into a monotonous rhythm. The hope is that under these circumstances, prisoners find the time to reflect upon their crimes. This timepiece represents the beauty in the passage of time. A jewel on the wall whose amorphous, infinitely changing shape disconnects time from its connotations with stress and haste.</p>'
				+	'</article>',
	tick     : function(){
		var path;
		var x  = [];
		var y  = [];
		var w  = $('#lifelong_figure').width();
		var h  = $('#lifelong_figure').height();
		var wh = Math.min(w,h);
		var yLow = wh * 2;
		var iMin, iMax, iMid, svgX, svgY, elem, xDir, yDir;

		$('#lifelong').css({
			'position': 'absolute',
			'top'   : '0',
			'left'  : Math.abs(w-h)/2,
			'width' : wh,
			'height': wh
		});
		// only the clock specific action per millisecond.
		this.ticker = setInterval(function(){
			$('#lifelong_minute').css( 'transform', 'rotate(' + clockSteps.minute * 6 + 'deg)' );
			$('#lifelong_minute').css( '-webkit-transform', 'rotate(' + clockSteps.minute * 6 + 'deg)' );
			$('#lifelong_hour').css( 'transform', 'rotate(' + clockSteps.hour * 30 + 'deg)' );
			$('#lifelong_hour').css( '-webkit-transform', 'rotate(' + clockSteps.hour * 30 + 'deg)' );
			x[0] = 0;
			y[0] = 0;
			x[1] = Math.cos(( 90 - clockSteps.minute * 6 ) * Math.PI / 180 ) * wh * 0.45;
			y[1] = Math.sin(( 90 - clockSteps.minute * 6 ) * Math.PI / 180 ) * wh * 0.45;
			x[2] = Math.cos(( 90 - clockSteps.hour * 30 ) * Math.PI / 180 ) * wh * 0.24;
			y[2] = Math.sin(( 90 - clockSteps.hour * 30 ) * Math.PI / 180 ) * wh * 0.24;
			iMin = x.indexOf(Math.min(x[0],x[1],x[2]));
			iMax = x.indexOf(Math.max(x[0],x[1],x[2]));
			iMid = iMin+iMax==1 ? 2 : (iMin+iMax==2 ? 1 : 0);
			for(var i=0; i<=2; i++){
				x[i] = wh/2 + x[i];
				y[i] = wh/2 - y[i];
			}
			path = '<path d="M ' + x[iMin] + ' ' + y[iMin]
						 + ' C ' + x[iMin] + ' ' + yLow
						 +   ' ' + x[iMax] + ' ' + yLow
						 +   ' ' + x[iMax] + ' ' + y[iMax]
						 + '" stroke="#E6E7E8" stroke-width="1" fill="#000000" />';
			$('#lifelong svg').html(path);
			svgX = $('#lifelong svg').offset().left;
			svgY = $('#lifelong svg').offset().top;
			elem = document.elementFromPoint(x[iMid]+svgX,y[iMid]+svgY);
			xDir = 0;
			yDir = 0;
			if(elem.nodeName=='path'){
				xDir = x[iMin] + ((x[iMax]-x[iMin])/10);
				yDir = y[iMax] + ((y[iMax]-y[iMin])/10);
				path += '<path d="M ' + x[iMin] + ' ' + y[iMin]
							  + ' C ' + xDir    + ' ' + y[iMin]
							  +   ' ' + x[iMax] + ' ' + yDir
							  +   ' ' + x[iMax] + ' ' + y[iMax]
							  + '" stroke="#E6E7E8" stroke-width="1" fill="#000000" />';
			} else {
				xDir = x[iMin] + ((x[iMid]-x[iMin])/10);
				yDir = y[iMid] + ((y[iMid]-y[iMin])/10);
				path += '<path d="M ' + x[iMin] + ' ' + y[iMin]
							  + ' C ' + xDir    + ' ' + y[iMin]
							  +   ' ' + x[iMid] + ' ' + yDir
							  +   ' ' + x[iMid] + ' ' + y[iMid]
							  + '" stroke="#E6E7E8" stroke-width="1" fill="#000000" />';
				xDir = x[iMid] + ((x[iMax]-x[iMid])/10);
				yDir = y[iMax] + ((y[iMax]-y[iMid])/10);
				path += '<path d="M ' + x[iMid] + ' ' + y[iMid]
							  + ' C ' + xDir    + ' ' + y[iMid]
							  +   ' ' + x[iMax] + ' ' + yDir
							  +   ' ' + x[iMax] + ' ' + y[iMax]
							  + '" stroke="#E6E7E8" stroke-width="1" fill="#000000" />';
			};
			$('#lifelong svg').html(path);
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
var clockID = clockWorks.indexOf("lifelong");
$('#clock'+clockID).html(lifelong.html);
