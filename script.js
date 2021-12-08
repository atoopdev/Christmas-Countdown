// current date and time
let today = new Date();
let currentYear = today.getFullYear();
console.log(currentYear);

document.getElementById("today").innerText = today;
// are we past Christmas in current year? Is month =11 and date > 25
if (today.getMonth() === 11 && today.getDay() >25){
    console.log("Past Xmas in current year");
    currentYear+1;
}

let christmasDay = new Date(currentYear, 11, 25);
document.getElementById("christmas").innerText = christmasDay;
 let timeDifference = christmasDay.getTime() - today.getTime();
 console.log(timeDifference);
//  round up
// divide time diff by milliseconds in a day
 let daystoXmas = Math.ceil(timeDifference/(1000 *60 * 60 * 24));
 console.log(daystoXmas);

document.getElementById("daystoxmas").innerText = daystoXmas;
