const digitalClock = function digitalClock() {

    const hours = document.getElementById("hours");
    const minutes = document.getElementById("minutes");
    const seconds = document.getElementById("seconds");
    const daytype = document.getElementById("ampm");

    let hr = new Date().getHours();
    let mins = new Date().getMinutes();
    let secs = new Date().getSeconds();
    let ampm = 'AM';

    if (hr > 12) {
        hr = hr - 12;
        ampm = "PM";
    };

    hr = hr < 10
    ? "0" + hr
    : hr

    mins = mins < 10 ? "0" + mins : mins
    secs = secs < 10 ? "0" + secs : secs
   

    hours.innerText = hr;
    minutes.innerText = mins;
    seconds.innerText = secs;
    daytype.innerText = ampm;
   
    setTimeout(()=>{
        digitalClock()
    }, 1000)

}

digitalClock();






