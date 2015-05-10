var appiness = {
    ticker   : 0,
    name     : 'Appiness',
    designer : 'Cis',
    year     : 2015,
    url      : 'http://www.appiness.nl',
    html     : '<figure>'
                    + '<div id="appiness">'
                        + '<img id="appihour" src="clockworks/appiness/appihour.svg" />'
                        + '<img id="appiminute" src="clockworks/appiness/appiminute.svg" />'
                        + '<img id="appisecond" src="clockworks/appiness/appisecond.svg" />'
                        + '<img id="appiface" src="clockworks/appiness/appiface.svg" />'
                    + '</div>'
                + '</figure>'
                + '<article>'
                    + '<h2>Appiness</h2>'
                    + '<p>No special concept, just another clock, but with a appi face for some appiness.</p>'
                + '</article>',
    tick     : function(){
        // only the clock specific action per millisecond.
        this.ticker = setInterval(function(){
            $('#appisecond').css( 'transform', 'rotate(' + clockSteps.second * 6 + 'deg)' );
            $('#appisecond').css( '-webkit-transform', 'rotate(' + clockSteps.second * 6 + 'deg)' );
            $('#appiminute').css( 'transform', 'rotate(' + clockSteps.minute * 6 + 'deg)' );
            $('#appiminute').css( '-webkit-transform', 'rotate(' + clockSteps.minute * 6 + 'deg)' );
            $('#appihour').css( 'transform', 'rotate(' + clockSteps.hour * 30 + 'deg)' );
            $('#appihour').css( '-webkit-transform', 'rotate(' + clockSteps.hour * 30 + 'deg)' );
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
$('#clockworks').html(appiness.html);
