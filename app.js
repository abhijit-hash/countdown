var destination = new Date("January 1, 2024 00:00:00").getTime();

function newYear() {
    var now = new Date().getTime();

    var diff = destination - now;

    var d = Math.floor(diff / (1000 * 3600 * 24));

    var h = Math.floor((diff % (1000 * 3600 * 24)) / (1000 * 3600));

    var m = Math.floor((diff % (1000 * 3600)) / (1000 * 60));

    var s = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById('day').innerText = d;
    document.getElementById('hour').innerText = h;
    document.getElementById('minute').innerText = m;
    document.getElementById('second').innerText = s;

}

setInterval(function() {
    newYear();
}, 1000);