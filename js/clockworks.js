// Global time variables
var clockWorks = [
	'appiness',
	// 'captive',
	'continue',
	// 'dectime',
	// 'pie',
	// 'pulse',
	// 'ressence',
	// 'swissrail',
]	//	all available clockworks
var systemDate  = new Date();
var clockTimer;
var clockSteps  = {milli:0, second:0, minute:0, hour:0, weekday:0, day:0, month:0, year:0, week:0};
// var clockSmooth = {milli:0, second:0, minute:0, hour:0, weekday:0, day:0, month:0, year:0, week:0};
// var totalSteps  = {milli:0, second:0, minute:0, hour:0, weekday:0, day:0, month:0, year:0, week:0};
// var totalSmooth = {milli:0, second:0, minute:0, hour:0, weekday:0, day:0, month:0, year:0, week:0};
// var monthNames  = ['januari','februari','maart','april','mei','juni','juli','augustus','september','oktober','november','december'];
// var weekNames   = ['maandag','dinsdag','woensdag','donderdag','vrijdag','zaterdag','zondag'];

$(document).ready(function(){
	var clockTimer = setInterval(function(){setTimeVars()},1);
	//  clearInterval(clockTimer);  //  Use this when needed

	for(var key in clockWorks){
// var key=0;
		console.log('ClockWorks[' + key + '] = ' + clockWorks[key]);
		var css = document.createElement('link');
		css.setAttribute('rel', 'stylesheet');
		css.setAttribute('href', 'clockworks/' + clockWorks[key] + '/' + clockWorks[key] + '.css');
		document.getElementsByTagName("head")[0].appendChild(css);
		var js = document.createElement('script');
		js.setAttribute('src', 'clockworks/' + clockWorks[key] + '/' + clockWorks[key] + '.js');
		document.getElementsByTagName("head")[0].appendChild(js);
	}

//  --------------------------------------------------------------- The buttons
	$('#vorige').on('click', function() {
	});
	$('#startstop').on('click', function() {
		// clock.ticker ? clock.stop() : clock.tick();
		appiness.ticker ? appiness.stop() : appiness.tick();
		continueSM.ticker ? continueSM.stop() : continueSM.tick();
	});
	//  Other buttons: photo upload, fast/normal, manual/auto, full/split screen, info/colofon/credits
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
