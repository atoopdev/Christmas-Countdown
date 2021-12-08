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



