// import { copyFileSync } from "fs";


window.onload=()=>{function clock() {
   let hrs: any = document.getElementById("hours");
   let min: any = document.getElementById("minutes");
   let sec: any = document.getElementById("seconds");
   let period: any = document.getElementById("AMPM");
   let dd: any = document.getElementById("days");
   let dates: any = document.getElementById("ddmmyyyy");
   //Days and month in arrays to get it in english alphabets
   let daysarray: string[] = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
   let monthsarray: string[] = ["January", "February", "March", "April", "May", "June", "July", "August"
      , "September", "October", "November", "December"]
   //  // //used of javascript bydefault date function
   let time = new Date();
   //  //makig each id functional according to the criteria getting hours ,minutes ,and seconds
   let gethours: number | string = time.getHours();
   let getmin: number | string = time.getMinutes();
   let getsec: number | string = time.getSeconds();
   let day: string | number = time.getDay();
   //console.log(daysarray[day]);
   let getdate: number | string = time.getDate();
   let getmonth: number = time.getMonth();
   let getyear: number = time.getFullYear();
   //  //making condition to not to get 13 or 00 time
   if (gethours > 12) {
      gethours = gethours - 12;
   }
   if (gethours == 0) {
      gethours = 12;
   }
   //  //condition to get AM PM
   let ampm = gethours >= 12 ? "AM" : "PM"
   //  //condition to get zero addition in hours min and sec
   gethours = gethours < 10 ? "0" + gethours : gethours
   getmin = getmin < 10 ? "0" + getmin : getmin
   getsec = getsec < 10 ? "0" + getsec : getsec

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
      dd.innerHTML = daysarray[day]
   }
   if (dates !== null) {
      dates.innerHTML = getdate + " - " + monthsarray[getmonth] + " - " + getyear
   }
   else {
      console.log("Element not Found");

   }


}
//setinterval is used to change seconds in every seconds 
setInterval(clock, 1000);
};