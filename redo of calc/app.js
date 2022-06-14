let accurateTime = document.querySelector(".accuratetime")
let hour = new Date().getHours();
let min = new Date().getMinutes();
let am_pm;


setInterval(() => {
  if (min < 10) {
    min = "0" + min;  
  }
  
  if (hour < 10) {
      hour = "0" + hour;  
    }
  
    if (hour > 12) {
        am_pm = "PM"
    }
    else{
        am_pm = "AM"
    }
    let timeNow = hour + ":" + min + am_pm;
  
  
  accurateTime.textContent = timeNow;
}, 1000);