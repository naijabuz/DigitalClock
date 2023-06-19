// A function for the digital clock dynamic

const digitalClock = function digitalClock() {

    const hours = document.getElementById("hours"); // variable that stores the id from html element
    const minutes = document.getElementById("minutes"); // ditto
    const seconds = document.getElementById("seconds"); // ditto
    const daytype = document.getElementById("ampm"); // ditto

    let hr = new Date().getHours(); // hour value (number) is stored in variable
    let mins = new Date().getMinutes(); // minute value (number) is stored in variable
    let secs = new Date().getSeconds(); // seconds value (number) is stored in variable
    let ampm = 'AM'; // new value for the daytype

// If statement to change the clock setting from 24hrs to 12hrs and to also auto update between AM and PM
    if (hr >= 12) {
        hr = hr - 12;
        ampm = "PM";
    };

// ternary if statement to add 0 in front of the time values when they are between 0 to 9
    hr = hr < 10
    ? "0" + hr
    : hr

    mins = mins < 10 ? "0" + mins : mins
    secs = secs < 10 ? "0" + secs : secs
   
// Replacing the default hard coded values in the HTML pages with the javascript values
    hours.innerText = hr;
    minutes.innerText = mins;
    seconds.innerText = secs;
    daytype.innerText = ampm;
   
// function for restarting the clock every 1 seconds so you dont have to refresh all the time.
    setTimeout(()=>{
        digitalClock()
    }, 1000)

}

// Starting the function
digitalClock();






