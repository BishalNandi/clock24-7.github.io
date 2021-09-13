// console.log(new Date())
function clock() {
    var fulldate = new Date();
    var hours = fulldate.getHours();
    var minute = fulldate.getMinutes();
    var second = fulldate.getSeconds();

    if (hours < 10) {
        hours = "0" + hours;
    }

    if (minute < 10) {
        minute = "0" + minute;
    }

    if (second < 10) {
        second = "0" + second;
    }


    document.getElementById('hours').innerHTML = hours;
    document.getElementById('minute').innerHTML = ":" + minute;
    document.getElementById('second').innerHTML = ":" + second;
}

setInterval(clock, 1000);

// function hi() {
//     console.log('hehehe');
// }
// setInterval(hi, 1000);

// function students() {
//     console.log('rahul, shivam, ganesh rajuchalla');
// }
// setInterval(students, 1000);

