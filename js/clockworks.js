// Global time variables
var clockWorks = [
    'appiness'.
    'captive'.
    'continue'.
    'dectime'.
    'pie'.
    'pulse'.
    'ressence'.
    'swissrail',
    ''
] //    all available clockworks
var systemDate  = new Date();
var clockTimer;
var clockSteps  = {milli:0, second:0, minute:0, hour:0, weekday:0, day:0, month:0, year:0, week:0};
var clockSmooth = {milli:0, second:0, minute:0, hour:0, weekday:0, day:0, month:0, year:0, week:0};
var totalSteps  = {milli:0, second:0, minute:0, hour:0, weekday:0, day:0, month:0, year:0, week:0};
var totalSmooth = {milli:0, second:0, minute:0, hour:0, weekday:0, day:0, month:0, year:0, week:0};
var monthNames  = ['januari','februari','maart','april','mei','juni','juli','augustus','september','oktober','november','december'];
var weekNames   = ['maandag','dinsdag','woensdag','donderdag','vrijdag','zaterdag','zondag'];

$(document).ready(function(){

    var clock = {
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
    document.getElementById('clockworks').innerHTML = clock.html;
    elem=document.getElementById("appiness").getElementsByTagName("*");
    for (var i = 0; i < elem.length; i++) {
        elem[i].style.position="absolute";
        elem[i].style.top     ="0px";
        elem[i].style.left    ="0px";
        elem[i].style.width   ="100%";
        elem[i].style.height  ="100%";
    };

    var clockTimer = setInterval(function(){setTimeVars()},1);
    //  clearInterval(clockTimer);  //  Use this when needed
   clock.tick();

//  --------------------------------------------------------------- The buttons
    $('#vorige').on('click', function() {
        $('section').hide();
        $('#clockworks').show();
        $('#titletext').html('ClockWorks');
    });
    // $('#photo').on('click', function() {
    //     $('section').hide();
    //     $('#photoupload').show();
    //     $('#titletext').html('Photo Upload');
    // });
    $('#photo').on('click', function() {
        clock.ticker ? clock.stop() : clock.tick();
    });
    $('#fast').on('click', function() {
        $('section').hide();
        $('#appitime').show();
        $('#titletext').html('Stop ticking.');
    });
    $('#manual').on('click', function() {
        $('section').hide();
        $('#continue').show();
        $('#titletext').html('appiTime (Cis)');
    });
    $('#screen').on('click', function() {
        $('section').hide();
        $('#pulse').show();
        $('#titletext').html('Sander Mulder');
    });
    $('#info').on('click', function() {
        $('section').hide();
        $('#pie').show();
        $('#titletext').html('Pie &copy; Cis');
    });
});

//  ---------------------------------- Set the time variables every millisecond
function setTimeVars(){
    systemDate=new Date();
    clockSteps.milli   = systemDate.getMilliseconds(); // 0-999
    clockSteps.second  = systemDate.getSeconds();      // 0-59
    clockSteps.minute  = systemDate.getMinutes();      // 0-59
    clockSteps.hour    = systemDate.getHours();        // 0-23
    clockSteps.day     = systemDate.getDate();         // 1-31
    clockSteps.month   = systemDate.getMonth();        // 0-11
    clockSteps.year    = systemDate.getFullYear();     // 0-99
    clockSteps.weekday = systemDate.getDay();          // 0-6
        if ( clockSteps.weekday == 0 ) { clockSteps.weekday = 7 };
        // some extra calculations to get the weeknr
        var target     = systemDate;
        var dayNr      = (clockSteps.weekday + 6) % 7;
        target.setDate(target.getDate() - dayNr + 3);
        var jan4       = new Date(target.getFullYear(), 0, 4);
        var dayDiff    = (target - jan4) / 86400000;
    clockSteps.week    = 1 + Math.ceil(dayDiff / 7);   // 1-53

    // var miliDate = new Date(systemDate);
    // var daySeconds  =  systemDate - miliDate.setHours(0,0,0,0);
};
//  --------------------------------------------------------------- End of code
