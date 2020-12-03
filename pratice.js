var hour = document.getElementById('hour');
var min = document.getElementById('min');
var sec = document.getElementById('sec');
var startBtn = document.getElementById('start');
var resetBtn = document.getElementById('reset');

var tm;
var startstop = 0;

function startStop() {
    startstop = startstop + 1;
    if (startstop === 1) {
        start();
        document.getElementById('start').innerHTML = "Stop";
    }
    else if (startstop === 2) {
        document.getElementById('start').innerHTML = "Start";
        startstop = 0;
        stop();
    }
}

function start() {
    tm = setInterval(Timer, 1);
}

function stop() {
    clearInterval(tm)
    document.getElementById('reset').disabled = false;
}

var milisec = 0;
var sec = 0;
var min = 0;
var hour = 0;

var miliSecOut = 0;
var secOut = 0;
var minOut = 0;
var hourOut = 0;

function Timer() {

    miliSecOut = checkTime(milisec);
    secOut = checkTime(sec);
    minOut = checkTime(min);
    hourOut = checkTime(hour);

    milisec = ++milisec;

    if (milisec === 100) {
        milisec = 0;
        sec = ++sec;
    }

    if (sec == 60) {
        min = ++min;
        sec = 0;
    }

    if (min == 60) {
        min = 0;
        hour = ++hour;

    }

    document.getElementById('milisec').innerHTML =  ':' + miliSecOut;
    document.getElementById('sec').innerHTML = ':' + secOut;
    document.getElementById('min').innerHTML = ':' + minOut;
    document.getElementById('hour').innerHTML =  hourOut;

    document.getElementById('reset').disabled = true;

}

function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

function reset() {
    milisec = 0;
    sec = 0;
    min = 0;
    hour = 0;

    document.getElementById("milisec").innerHTML = ":00";
    document.getElementById("sec").innerHTML = ":00";
    document.getElementById("min").innerHTML = ":00";
    document.getElementById("hour").innerHTML = "00";
}