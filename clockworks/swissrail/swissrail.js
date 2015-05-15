var swissrail = {
    ticker   :	0,
    name     :	'SwissRail',
    designer :	'Cis',
    year     :	2015,
    url      :	'http://www.swissrail.nl',
    html     :	'<h1>SwissRail</h1>'
    			+	'<figure>'
                    +	'<div id="swissrail">'
                        +   '<img id="swissface" src="clockworks/swissrail/swissrail_face.svg" />'
                        +	'<img id="swisshour" src="clockworks/swissrail/swissrail_hour.svg" />'
                        +	'<img id="swissminute" src="clockworks/swissrail/swissrail_min.svg" />'
                        +	'<img id="swisssecond" src="clockworks/swissrail/swissrail_sec.svg" />'
                    +	'</div>'
                +	'</figure>'
                +	'<article>'
                    +	'<h2>SwissRail</h2>'
                    +	'<p>The Mondaine Official Swiss Railways watch is proud to be associated with such an example of excellent 20th century design. In 1944, Hans Hilfiker, a Swiss Engineer and Designer and employee of the Federal Swiss Railways, created a clock, which has become known as the “Official Swiss Railways Clock”. In 1986 the Mondaine watch company, owned by the Bernheim family, took the blueprint of the iconic design of the Railways Clock and turned it into a watch collection.</p>'
                +	'</article>',
    tick     : function(){
        // only the clock specific action per millisecond.
        this.ticker = setInterval(function(){
            $('#swisssecond').css( 'transform', 'rotate(' + clockSteps.second * 6 + 'deg)' );
            $('#swisssecond').css( '-webkit-transform', 'rotate(' + clockSteps.second * 6 + 'deg)' );
            $('#swissminute').css( 'transform', 'rotate(' + clockSteps.minute * 6 + 'deg)' );
            $('#swissminute').css( '-webkit-transform', 'rotate(' + clockSteps.minute * 6 + 'deg)' );
            $('#swisshour').css( 'transform', 'rotate(' + clockSteps.hour * 30 + 'deg)' );
            $('#swisshour').css( '-webkit-transform', 'rotate(' + clockSteps.hour * 30 + 'deg)' );
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
var clockID = clockWorks.indexOf("swissrail");
$('#clock'+clockID).html(swissrail.html);
