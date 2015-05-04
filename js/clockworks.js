// Global time variables
var systemDate=new Date();
var clockTimer;
var dateVar, miliVar, secondVar, minuteVar, hourVar, dayVar, yearVar, monthVar, weekVar;
// For camera ---------------------------------------------------------
var camOptions; // set all object elements including next 2 lines.
var pictureSource;   // picture source
var destinationType; // sets the format of returned value
// End camera ---------------------------------------------------------

$(document).ready(function(){
    var clockTimer = setInterval(function(){setTimeVars()},1);
    //  clearInterval(clockTimer);  //  Use this when needed
    // pictureSource=navigator.camera.PictureSourceType;
    // destinationType=navigator.camera.DestinationType;

    $("#vorige").on("click", function() {
        $("section").hide();
        $("#clockworks").show();
        $("#titletext").html("ClockWorks");
    });
    // $("#photo").on("click", function() {
    //     $("section").hide();
    //     $("#photoupload").show();
    //     $("#titletext").html("Photo Upload");
    // });
    $("#photo").on("click", function() {
        $("section").hide();
        $("#ressence").show();
        $("#titletext").html("Photo Upload");
    });
    $("#fast").on("click", function() {
        $("section").hide();
        $("#decitime").show();
        $("#titletext").html("Ressence Type 3");
        continueWatch();
    });
    $("#manual").on("click", function() {
        $("section").hide();
        $("#continue").show();
        $("#titletext").html("DeciTime (Cis)");
    });
    $("#screen").on("click", function() {
        $("section").hide();
        $("#pulse").show();
        $("#titletext").html("Sander Mulder");
    });
    $("#info").on("click", function() {
        $("section").hide();
        $("#pie").show();
        $("#titletext").html("Pie &copy; Cis");
    });
});

//  Set the time variables every millisecond
 
function setTimeVars(){
    systemDate=new Date();
    dateVar   =systemDate.getDate(); // 1-31
    miliVar   =systemDate.getMilliseconds(); // 0-999
    secondVar =systemDate.getSeconds(); // 0-59
    minuteVar =systemDate.getMinutes(); // 0-59
    hourVar   =systemDate.getHours(); // 0-23
    dayVar    =systemDate.getDay(); // 0-6
    if (dayVar==0) {dayVar=7};
    yearVar   =systemDate.getFullYear(); // 0-99
    monthVar  =systemDate.getMonth(); // 0-11
        // some extra calculations to get the weeknr
        var target = systemDate;
        var dayNr = (dayVar + 6) % 7;
        target.setDate(target.getDate() - dayNr + 3);
        var jan4 = new Date(target.getFullYear(), 0, 4);
        var dayDiff = (target - jan4) / 86400000;
    weekVar = 1 + Math.ceil(dayDiff / 7);
};

// For camera ---------------------------------------------------------
// Called when a photo is successfully retrieved
function onPhotoDataSuccess(imageData) {
    // Uncomment to view the base64-encoded image data
    // console.log(imageData);

    // Get image handle
    //
    var smallImage = document.getElementById('smallImage');

    // Unhide image elements
    //
    smallImage.style.display = 'block';

    // Show the captured photo
    // The inline CSS rules are used to resize the image
    //
    smallImage.src = "data:image/jpeg;base64," + imageData;
}

// Called when a photo is successfully retrieved
function onPhotoURISuccess(imageURI) {
    // Uncomment to view the image file URI
    // console.log(imageURI);

    // Get image handle
    var largeImage = document.getElementById('largeImage');

    // Unhide image elements
    largeImage.style.display = 'block';

    // Show the captured photo
    // The inline CSS rules are used to resize the image
    largeImage.src = imageURI;
}

// A button will call this function
function capturePhoto() {
    // Take picture using device camera and retrieve image as base64-encoded string
    navigator.camera.getPicture(onPhotoDataSuccess, onFail, {
        quality: 50, destinationType: destinationType.DATA_URL
    });
}

// A button will call this function
function capturePhotoEdit() {
    // Take picture using device camera, allow edit, and retrieve image as base64-encoded string
    navigator.camera.getPicture(onPhotoDataSuccess, onFail, {
        quality: 20, allowEdit: true, destinationType: destinationType.DATA_URL
    });
}

// A button will call this function
function getPhoto(source) {
    // Retrieve image file location from specified source
    navigator.camera.getPicture(onPhotoURISuccess, onFail, {
        quality: 50, destinationType: destinationType.FILE_URI, sourceType: source
    });
}

// Called if something bad happens
function onFail(message) {
    alert('Failed : ' + message);
}
// End camera ---------------------------------------------------------
