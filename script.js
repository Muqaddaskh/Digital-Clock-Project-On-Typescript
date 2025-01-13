"use strict";
// import { copyFileSync } from "fs";
window.onload = () => {
    function clock() {
        let hrs = document.getElementById("hours");
        let min = document.getElementById("minutes");
        let sec = document.getElementById("seconds");
        let period = document.getElementById("AMPM");
        let dd = document.getElementById("days");
        let dates = document.getElementById("ddmmyyyy");
        //Days and month in arrays to get it in english alphabets
        let daysarray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
        let monthsarray = ["January", "February", "March", "April", "May", "June", "July", "August",
            "September", "October", "November", "December"];
        //  // //used of javascript bydefault date function
        let time = new Date();
        //  //makig each id functional according to the criteria getting hours ,minutes ,and seconds
        let gethours = time.getHours();
        let getmin = time.getMinutes();
        let getsec = time.getSeconds();
        let day = time.getDay();
        //console.log(daysarray[day]);
        let getdate = time.getDate();
        let getmonth = time.getMonth();
        let getyear = time.getFullYear();
        //  //making condition to not to get 13 or 00 time
        if (gethours > 12) {
            gethours = gethours - 12;
        }
        if (gethours == 0) {
            gethours = 12;
        }
        //  //condition to get AM PM
        let ampm = gethours >= 12 ? "AM" : "PM";
        //  //condition to get zero addition in hours min and sec
        gethours = gethours < 10 ? "0" + gethours : gethours;
        getmin = getmin < 10 ? "0" + getmin : getmin;
        getsec = getsec < 10 ? "0" + getsec : getsec;
        //  // //update elements of html
        if (hrs !== null) {
            hrs.innerHTML = gethours;
        }
        if (min !== null) {
            min.innerHTML = getmin;
        }
        if (sec !== null) {
            sec.innerHTML = getsec;
        }
        if (ampm !== null) {
            period.innerHTML = ampm;
        }
        if (dd !== null) {
            dd.innerHTML = daysarray[day];
        }
        if (dates !== null) {
            dates.innerHTML = getdate + " - " + monthsarray[getmonth] + " - " + getyear;
        }
        else {
            console.log("Element not Found");
        }
    }
    //setinterval is used to change seconds in every seconds 
    setInterval(clock, 1000);
};
