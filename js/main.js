$(document).ready(function() {

    var d = new Date();
    var minutes = d.getMinutes();
    var hours = d.getHours();
    var seconds = d.getSeconds();
    if (minutes < 9) {
        minutes = "0" + minutes;
    }
    if (seconds < 9) {
        seconds = "0" + seconds;
    }
    if (hours < 9) {
        hours = "0" + hours;
    }

    var builder = hours + ":" + minutes + ":" + seconds;
    document.getElementById('time').innerHTML = builder;

    $("#typedText").typed({
        strings: ['student', 'designer', '<a href="http://github.com/steventhanna/">developer</a> - steventhanna@gmail.com'],
        contentType: 'html',
        typeSpeed: 100
    });
});
