// current date and time
let today = new Date();
let currentYear = today.getFullYear();
console.log(currentYear);

// output today's date
// document.getElementById("today").innerText = today.toDateString();

// are we past Christmas in current year? Is month =11 and date > 25
if (today.getMonth() === 11 && today.getDay() >25){
    console.log("Past Xmas in current year");
    currentYear+1;
}

// set xmas date
let christmasDay = new Date(currentYear, 11, 25);
document.getElementById("xmas-countdown").innerText = currentYear + " Christmas Countdown";

// output xmas date to screen
// document.getElementById("christmas").innerText = christmasDay.toDateString();

 let timeDifference = christmasDay.getTime() - today.getTime();
 console.log(timeDifference);
//  round up
// divide time diff by milliseconds in a day
 let daystoXmas = Math.ceil(timeDifference/(1000 *60 * 60 * 24));
 console.log(daystoXmas);

document.getElementById("daystoxmas").innerText = daystoXmas;
