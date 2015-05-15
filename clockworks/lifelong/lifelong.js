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
							+   '<path d="M 0 0 q 172 0 172 172" stroke="#E6E7E8" stroke-width="1" fill="none" />'
						+   '</svg>'
					+	'</div>'
				+	'</figure>'
				+	'<article>'
					+	'<h2>Lifelong</h2>'
					+	'<p>The Lifelong clock was inspired by prison sentences. A prisoner is detained for a certain amount of time in a designated space. During the sentence the perception of time becomes blurred. Hours, months and years fade into a monotonous rhythm. The hope is that under these circumstances, prisoners find the time to reflect upon their crimes. This timepiece represents the beauty in the passage of time. A jewel on the wall whose amorphous, infinitely changing shape disconnects time from its connotations with stress and haste.</p>'
				+	'</article>',
	tick     : function(){
		var path,x1,y1,x2,y2;
		var w= $('#lifelong_figure').width();
		var h= $('#lifelong_figure').height();
		var wh=Math.min(w,h);
		$('#lifelong').css({
			'position': 'absolute',
			'top'   : '0',
			'left'  : Math.abs(w-h)/2,
			'width' : wh,
			'height': wh
		});
		// only the clock specific action per millisecond.
		this.ticker = setInterval(function(){
			$('#lifelong_minute').css( 'transform', 'rotate(' + clockSteps.second * 6 + 'deg)' );
			$('#lifelong_minute').css( '-webkit-transform', 'rotate(' + clockSteps.second * 6 + 'deg)' );
			$('#lifelong_hour').css( 'transform', 'rotate(' + clockSteps.minute * 6 + 'deg)' );
			$('#lifelong_hour').css( '-webkit-transform', 'rotate(' + clockSteps.minute * 6 + 'deg)' );
			x1 = (wh / 2 ) + ( Math.cos((90-clockSteps.second *  6)*Math.PI/180) * wh * 0.45 );
			y1 = (wh / 2 ) - ( Math.sin((90-clockSteps.second *  6)*Math.PI/180) * wh * 0.45 );
			x3 = (wh / 2 ) + ( Math.cos((90-clockSteps.minute * 6)*Math.PI/180) * wh * 0.24 );
			y3 = (wh / 2 ) - ( Math.sin((90-clockSteps.minute * 6)*Math.PI/180) * wh * 0.24 );
			x2 = (x3 - x1) / 2;
			y2 = wh - ((y3 - y1) / 2);
			x3 = x3 - x1;
			y3 = y3 - y1;
			path = '<path d="M ' + x1 + ' ' + y1 + ' q ' + x2 + ' ' + y2 + ' ' + x3 + ' ' + y3 + '" stroke="#E6E7E8" stroke-width="1" fill="none" />';
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
